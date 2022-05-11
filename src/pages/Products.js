import { useEffect, Fragment } from "react";

//https://eldorado-development.azurewebsites.net/

const Products = () => {
  useEffect(() => {
    const getData = async () => {
      const req = await fetch('https://eldorado-development.azurewebsites.net/api/products');
      const res = await req.json();
      console.log(res);
    };
    getData();
  }, []);

  return <Fragment>
    <div></div>
  </Fragment>;
};
export default Products;
