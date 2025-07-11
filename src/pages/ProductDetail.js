import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";




export const ProductDetail = () => {
  const productId = useParams('id');
  const [productDetail,setProductDetail] = useState([]);

  useEffect(()=>{
    async function getproductDetail() {
      try{
      const data = await getProduct(productId.id);
      setProductDetail(data);
      }catch(error){
        toast.error(error.message)
      }
    }
    getproductDetail();
  },[productId])

  const { cartList, addToCart, removeFromCart} = useCart();
    const [ inCart, setInCart]= useState(false);

    useEffect(()=>{
      const findIncart = cartList.find(item=> item.id===productDetail.id)

      if(findIncart){
          setInCart(true);
      }else{
          setInCart(false);

      }


  },[cartList,productDetail])




  return (
    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{productDetail.name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{productDetail.overview}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={productDetail.image_local} alt="" />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{productDetail.price}</span>
              </p>
              <p className="my-3"> 
                <span>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                  <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                </span>
              </p>
              <p className="my-4 select-none">
              {productDetail.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>   }
               { productDetail.in_stock ? <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> :
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>  }
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{productDetail.size} MB</span>
              </p>
              <p className="my-3">
                { !inCart && <button onClick={() => addToCart(productDetail)} className={`inline-flex items-center py-2 px-5
                   text-lg font-medium text-center text-white bg-blue-700 rounded-lg
                     ${productDetail.in_stock ? "hover:bg-blue-800" : "opacity-50  cursor-not-allowed"}`} disabled={ productDetail.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> } 
                { inCart && <button onClick={() => removeFromCart(productDetail)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${productDetail.in_stock ? "" : "cursor-not-allowed"}`}  disabled={ productDetail.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }  
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {productDetail.long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
       )
      }