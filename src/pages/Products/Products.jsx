// import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const {products} = useLoaderData()
    console.log(products);

            // OR//
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //         fetch(`https://dummyjson.com/products`)
    //         .then(res => res.json())
    //         .then( data => setProducts(data.products))
    // }, []);
    // console.log(products);
    return (
        <div className="grid grid-cols-3 p-5  gap-3">
            {
                products.map(product => <ProductsCard key={products.id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;