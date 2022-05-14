export const Buttons=({ handleSort })=>{
    return (
        <div  className="sortButtons"  >
            
         <div >
            <button className="btn btn-primary me-2" onClick={()=>{handleSort("price",-1)}}> high to low</button>
            <button className="btn btn-primary me-2" onClick={()=>{handleSort("price",1)}}>low to high</button>
           
         </div>

        </div>
    )
}