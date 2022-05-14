import React from 'react'
import "./Checkout.css"
import { useDispatch, useSelector } from 'react-redux';
// import "./CartPage.css";
import { store } from "../../Redux/Store"
import { deleteItemCart } from '../../Redux/Cart/Action';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';


export default function Checkout() {
  const dispatch = useDispatch()
  const data = useSelector((store) => store.cart.cart)

  console.log("cart", data)


  var total = 0;

  for (var i = 0; i < data.length; i++) {
    total += data[i].price.sp
  }
  //   const dispatch = useDispatch()
  console.log("total all", total)

  return (
    <div className='ConatctDetailsMain'>

      <div className='ConatctDetails'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <InputLabel htmlFor="standard-adornment-amount">CONTACT DETAILS</InputLabel>
          <TextField id="outlined-basic" label="Name*" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Mobile No*" variant="outlined" />

          <InputLabel htmlFor="standard-adornment-amount">ADDRESS</InputLabel>
          <TextField id="outlined-basic" label="Pin Code*" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Address (House No, Building, Street, Area)*" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Locality / Town*" variant="outlined" /><br />
          <TextField id="outlined-basic" label="City / District*" variant="outlined" />
          <TextField id="outlined-basic" label="State*" variant="outlined" />
        </Box>

         
        <div className='AddAddress'>
          <div><p>CONTINUE</p></div>
        </div>
      </div>

      {
        data.length !== 0 ?
          <div className='ConatctCartData'>
            <div className="flex_table">
              <div>
                <b>PRODUCT</b>
              </div>
              <div>
                <b>QUANTITY</b>
              </div>
              <div>
                <b>PRICE</b>
              </div>
              <div>
                <b>TOTAL</b>
              </div>
            </div>
            <hr></hr>

            {
              data.map((e) => (
                <div>
                  <div className='cartProduct'>
                    <img src={e.images[0]} alt="" width={80} height={90} />
                    <div className='first'><p>{e.name}</p>
                      <button onClick={() => dispatch(deleteItemCart(e.id))}>REMOVE</button>
                    </div>
                    <div className='quantity'>
                      <button>+</button>
                      <p>1</p>
                      <button>-</button>
                    </div>
                    <p>${e.price.sp}</p>
                    <p>${e.price.sp}</p>

                  </div>

                  <hr></hr>
                  <br></br>
                </div>

              ))
            }

            <div className='subTotal'>
              <div className='heading'>
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>SUBTOTAL</p>
              </div>
              <div className='price'>
                <p>$ {total}</p>
                <p>FREE</p>
                <p><b>$  {total}</b></p>
              </div>
            </div>
          </div>
          :
          <div className='EmptyCart'><p>Your Cart is Empty</p></div>
      }
    </div>
  )
}