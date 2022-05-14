import React  from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../Redux/cart/action"; 

export const SingleProd=()=>{

   const {id}=useParams();
   const [product, setProduct]=React.useState([]);
   const [loading,setLoading]=React.useState(false);

   const dispatch= useDispatch();


   const addProduct = (product)=>{
      dispatch(addCart(product))
  }

  
   React.useEffect(()=>{
      getProduct()
   },[])

   const getProduct=async ()=>{
         setLoading(true);

         const res=await fetch(`https://fakestoreapi.com/products/${id}`);
         setProduct(await res.json());
         setLoading(false)
   };

   const Loading = () => {
      return <p>Loading....</p>;
    };

   const ShowProduct=()=>{
      return (
      <>
         <div className="col-md-6">
             <img src={product.image} alt="" height="305px" width="350px"/>

         </div>
         <div className="col-md-6">
             <h2 className="text-uppercase">{product.category}</h2>
             <h2 className="display-6">{product.title}</h2>
             <p className="lead fw-bolder">Rating : {product.rating  && product.rating.rate} {" "}
                <i className="fa fa-star"></i></p>
              <h2 className="  my-4">Price : $ {product.price}</h2>  
              <p className="lead">{product.description}</p>

              <button className="btn btn-primary px-4 py-2 " 
                   onClick={()=>addProduct(product)}>Add to Cart</button>
              <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
         </div>
      </>
      )
   } 

   return (
      <div>
         <div className="container py-5">
            <div className="row py-5 ">
               {loading? <Loading/> : <ShowProduct/>}
            </div>
         </div>
      </div>
   )

   }