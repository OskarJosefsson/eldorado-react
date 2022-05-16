import { Fragment, useEffect, useState, useCallback } from "react";
import classes from '../Products/ProductInfo.module.css';
import useHttpGet  from '../../hooks/useHttpGet';

    const ProductList = () => {
        const [products, setProducts] = useState([])

        const transformData = useCallback(async (Obj) => {
          const listOfProducts = [];
          Obj.forEach((element) => {
            listOfProducts.push(element);
          });
      
          setProducts(listOfProducts);
        }, []);

        const {isLoading, error, sendRequest} = useHttpGet(transformData);

        useEffect(() => {
          sendRequest({url: "https://eldorado-development.azurewebsites.net/api/products"});
        
        }, [sendRequest])


        return (
          <Fragment>
            {products.map((item) => {
              return (
                <section className={classes.infobox} key={item.id}>
                  <div className={classes.heading} >{item.name}</div>
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