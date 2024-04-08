import React, { useEffect, useState } from 'react'
import bike1 from '../../assets/image/bike1.jpeg'
import bike2 from '../../assets/image/bike2.jpeg'
import bike3 from '../../assets/image/bike3.jpeg'
import bike4 from '../../assets/image/bike4.jpeg'
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios'

function BikeCard() {
    // const [bikecard, setBikecard] = useState([]);
    const bikecard = [
        {
            id: 1,
            path: bike1,
            price: "Rs 211,000",
            icon: <FaRegHeart />,
            description: "honda 125 2023 model            ",
            address: "Bahria Town Phase 7, Rawalpindi",
        },
        {
            id: 2,
            path: bike2,
            price: "Rs 400,000",
            icon: <FaRegHeart />,
            description: "Honda Cb 150f Red Look like zero meter Total Genuine",
            address: "Bedian Road, Lahore",
        },
        {
            id: 3,
            path: bike3,
            price: "Rs 425,000",
            icon: <FaRegHeart />,
            description: "Honda cb 150f",
            address: "Cantt, Lahore",
        },
        {
            id: 4,
            path: bike4,
            price: "Rs 460,000",
            icon: <FaRegHeart />,
            description: "Honda CB 150F Black",
            address: "McLeod Road, Lahore",
        }
     
     
    ]
    // useEffect(() => {
        
    //     axios.get('http://localhost:4001/post/allpost')
    //         .then(res => {
    //             console.log(res.data.posts);
    //             setBikecard(res.data.posts);
    //         });

    // }, [])
    
  return (
    <>
       <div className='container'>
                <div>
                    <h1>Bikes & Motorcycles</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        bikecard.map(item => {
                            return <div className="card" style={{ width: "22rem" }}>
                                <img src={item.path} className="card-img-top" height={'200px'} alt="..." />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'><p>{item.price}</p>
                                    <div><p>{item.icon}</p></div></div>
                                    <div>{item.description}</div>
                                    <p>{item.address}</p>
                                    
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>

    </>
  )
}

export default BikeCard
