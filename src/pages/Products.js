import { Fragment } from "react";
import ProductHeader from "../components/Products/ProductHeader";
import ProductInfo from "../components/Products/ProductInfo";

const prod =   {
  id: 3,
  name: "Silky Slimss",
  description: "Very silky slims",
  price: 15000,
  categoryName: "Underwear",
  subCategoryName: "Boxer",
  sizeName: "XS",
  brandName: "Lacoste",
  colorName: "Red",
  statusName: "In Stock",
  tagNames: [
    "Expensive",
    "Cheap"
  ],
  discountCoupon: 0
}

const Products = () => {
  return (
    <Fragment>
        <ProductHeader />
        <ProductInfo prod={prod} />
    </Fragment>
    );
};
export default Products;
