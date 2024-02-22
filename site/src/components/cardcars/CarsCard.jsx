import React from 'react'
import car1 from '../../assets/image/car1.jpeg'
import car2 from '../../assets/image/car2.jpeg'
import car3 from '../../assets/image/car3.jpeg'
import car4 from '../../assets/image/car4.jpeg'
import { FaRegHeart } from "react-icons/fa";
function CarsCard() {
    const carscard = [
        {
            id: 1,
            path: car1,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 2,
            path: car2,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 3,
            path: car3,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 4,
            path: car4,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        }
     
     
    ]
    
  return (
    <>
       <div className='container'>
                <div>
                    <h1>Cars</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        carscard.map(item => {
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

export default CarsCard
