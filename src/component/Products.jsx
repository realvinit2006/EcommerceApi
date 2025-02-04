// import Product from "Product";
import Product from "./product";

function Products({ products }) {
    return products.map((product) => {
        return <Product key={product.id} product={product} />;
    }) 
}

export default Products;