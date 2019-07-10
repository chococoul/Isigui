import React from 'react'

export default function CartItem(item, value){
    
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem}= value;
   
    
  return (
      
    <div className="row my-2 text-capitalize text-center">
    
     <div className="col-10 mx-auto col-lg-2">
      <img src={item.item.img} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product"/>
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <span className="d-lg-none">product:</span>
     {item.item.title}
     </div>
     <div className="col-10 mx-auto col-lg-2">
     <span className="d-lg-none">price:</span>
     {item.item.price}
     </div>
     <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
     <div className="d-flex justify-content-center">
     <div>
         <span className="btn btn-black mx-1" onClick={()=>{
           return  value.value.decrement(id);}}>
           -
           </span>
           <span className="btn btn-black mx-1">{item.item.count} </span>
           <span className="btn btn-black mx-1" onClick={()=>{return increment(id);}}>
           +
           </span>
     </div>
     <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={() => value.value.removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
          </div>
     <div className="col-10 mx-auto col-lg-2">
    <strong>item total: $ {item.item.total}</strong>
     
     </div>
     
     </div>
     
     </div>

    </div>
    
  )
}
