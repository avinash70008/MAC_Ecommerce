import axios from "axios";
 
import React from "react";
import { NavLink } from "react-router-dom";
import { Buttons } from "./Sorting";

import "./styles.css"

export const Products = () => {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState(data);
   
  const [loading, setLoading] = React.useState(false);
  const perPage=6
 
  const [page, setPage]=React.useState(1)

  React.useEffect(() => {
    getProducts(page,perPage);
  }, [page,perPage]);

  const getProducts = (page,perPage) => {
    setLoading(true);

    axios.get(`http://fakestoreapi.com/products`,{
       
        method:"GET",
        params:{
            _page: page,
            _limit: perPage,    
         }
    })
      .then((res)=>{
        setData([...res.data])
        setFilter([...res.data]) 
        setLoading(false);
        console.log(data);
      })
      .catch((err)=>{
        console.log(err) 
      });
    
  };

  const Loading = () => {
    return <p>Loading....</p>;
  };

  const filterProduct=(category)=>{
      const updateList=data.filter((e)=>e.category===category)
      setFilter(updateList)
  }
 
const handleSort=(sortBy, type)=>{
        
  if(sortBy==="price" && type===1) setFilter((prev)=> [...prev.sort((a,b)=>a.price>b.price?1:-1)])
  if(sortBy==="price" && type===-1) setFilter((prev)=> [...prev.sort((a,b)=>a.price>b.price?-1:1)])
 
}


  const ShowProducts = () => {
    return (
     <>
        <div className="buttons d-flex justify-content-center pb-5 mb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter(data)}}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("men's clothing")}}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("women's clothing")}}>Women's Clothing </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("jewelery")}}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("electronics")}}>Electronics</button>
        </div>
 
       

         <div className="buttons d-flex justify-content-center pb-5 mb-5">    
             <Buttons  handleSort={handleSort}/>
        </div>


        {filter.map((e) => {
          return (
           
              <div className="col-md-3 mb-4" key={e.id}>
                <div className="card h-100 text-center p-4 "  >
                  <img src={e.image}  className="card-img-top" alt="" height="200px"/>
                  <div className="card-body"  key={e.id}>
                    <h5 className="card-title mb-0">{e.title}</h5>
                    <p className="card-text"> ${e.price} </p>

                    <div className="shopNow">
                      <NavLink to={`/products/${e.id}`} className="btn btn-primary ">
                        Shop Now   </NavLink>
                      </div>

                  </div>
                </div>
              </div>
           
          );
        })}
      

      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">All Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>

       <div>
         
      <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
      <button onClick={()=>setPage(page+1)}>next</button>
       </div>


      </div>
    </div>
  );
};
