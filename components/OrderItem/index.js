import React from "react";
import { format } from "date-fns";

import styles from "./order.module.scss";
import { useAddress } from "hooks/address.hook";

export default function OrderItem({ data }) {
  // const address = useAddress(data.address);
  // const { title, region, city, full_address, zipcode } = address.data;
  console.log(data);
  return (
    <div className={styles.container}>
              <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', margin: '10px', width: '60vw', display: 'flex',  justifyContent:'space-between', marginRight:'5vw'}}>
                <div className="" style={{marginRight:'40px'}}> 
                  <h2>{data.product.food_name}</h2>
                  <p>Category: {data.product.category}</p>
                  <p>Price: <s>${data.product.price}</s> ${data.product.sale_price}</p>
                  <p>Availability: {data.product.isAvailable ? 'Available' : 'Unavailable'}</p>
                  <p>Quantity: {data.quantity ? data.quantity : 0}</p>
                  {/* <p>Status: {data.status ?data.status : 'Pending'}</p> */}
                  <div className={styles.buttons}>
                    <button onClick={() =>{}}  style={{cursor:'pointer', width:'8vw',height:'40px',color:"white", backgroundColor:"green",marginTop:"5px"}}><p>Status: {data.status ?data.status : 'Pending'}</p></button>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <img src={data.product.cover_photo} alt="Cover" width={250} height={250} />
                </div>
             </div>
          
    </div>
  );
}
