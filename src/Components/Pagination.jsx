import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DELETE_ITEM } from "../Redux/cart/action";
 

export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  console.log("cart:", cart);

  const dispatch= useDispatch()


 
  const handleDelete = ()=>{
    
    dispatch({
            type:DELETE_ITEM,
            payload
    })
    console.log("removed")
  }

  const cartItems = (cartItem)=>{
    return(
        <div className="px4 my-5 bg-light rounded-3" key={cartItem.id}>
             <div className="container py-4">
                 <button className="btn-close float-end" aria-label="close" onClick={handleDelete}></button>
                     <div className="row">
                         <div className="col-md-4">
                             <img src={cartItem.image} height="150px" width="150px" alt="" />
                         </div>
                          <div className="col-md-4">
                              <h4>{cartItem.title}</h4>
                              <p className="lead fw-bold"> ${cartItem.price}</p>
                          </div>
                     </div>
             </div>
        </div>
    )
}

const emptyCart=()=>{
  return(
    <div className="px4 my-5 bg-light rounded-3">
    <div className="container py-4">
       <h1>Your Cart Is Empty...</h1>
    </div>
</div>
  )
}

const button=()=>{
  return(
    <div className="container">
      <div className="row">
        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
      </div>
    </div>
  )
}


  return (
        <>
      {cart.length !== 0  && cart.map(cartItems)}
      {cart.length !== 0  && button()}
       {cart.length === 0  && emptyCart()}
      </>
    )
 
};