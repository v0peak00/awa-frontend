import React from 'react'
import styles from './Restaurants.module.css';
import { restaurantData } from '../data.restaurants';



export default function Restaurants() {
    return (
        <div className={styles.container}>
               {restaurantData.map((data, key) => {
                   return (
                    <div className={styles.box}>
                       <div key={key}>
                           <img src={data.image} alt=""/>
                                <div className={styles.title}>
                                <a href=""> {data.name}</a>   
                                </div>
                           <div className={styles.restInfo}>
                                 <div>
                                    {data.address}
                                </div>
                                <div>
                                    Avoinna: {data.openHrs}
                                </div>
                                <div>
                                    Hinta: {data.price}
                                </div>
                                <div>
                                    Tyyli: {data.type}
                                </div>
                            </div>
                        </div>
                    </div> 
                   );
                     
               })}
             
        </div>
    )
}
