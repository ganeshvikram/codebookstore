import { useEffect, useState } from "react"
import {ProductCard} from "../../../components/"
export const FeaturedProducts = () => {
const[products,setproducts] = useState([]);

useEffect(()=>{

  async function fetchProducts(params) {
    const response = await fetch("http://localhost:3001/featured_products");
    const data = await response.json();
    setproducts(data);
    
  }
  fetchProducts();

},[]);

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product)=>(
            <ProductCard key = {product.id} product={product}/>
            ))
          }
        </div>
    </section>
  )
}
