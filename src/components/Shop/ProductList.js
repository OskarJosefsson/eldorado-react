import { Fragment, useEffect, useState } from "react";
import classes from '../Products/ProductInfo.module.css';

    const ProductList = () => {
        const [products, setProducts] = useState([])

        const fetchData = async () => {
          const res = await fetch("https://eldorado-development.azurewebsites.net/api/products")

          if(!res.ok) {
            throw new Error("Data could not be retrieved")
          } else {
            return res.json()
          }
        }

        useEffect(() => {
          fetchData()
            .then((res) => {
              setProducts(res);
            })
            .catch((e) => {
              console.log(e.message);
            });
        }, []);

        return (
          <Fragment>
            {products.map((item) => {
              return (
                <section className={classes.infobox}>
                  <div className={classes.heading}>{item.name}</div>
                  <div className={classes.description}>
                    {item.description}
                  </div>
                  <hr></hr>
                  <div className={classes.price}>${item.price}</div>
                  <button className={classes.btn}>Add to cart</button>
                  <div>
                    Category:{" "}
                    <span className={classes.cat}>
                      {item.categoryName}
                    </span>
                  </div>
                  <div>
                    Tags:{" "}
                    {item.tagNames.map((x) => (
                      <span key={x} className={classes.tag}>
                        {x}
                      </span>
                    ))}
                  </div>
                </section>
              );
            })}
          </Fragment>
        );

    };

export default ProductList;