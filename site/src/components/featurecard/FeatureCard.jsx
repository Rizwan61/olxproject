import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import image1 from '../../assets/image/image1.jpeg'
import image2 from '../../assets/image/image2.jpeg'
import image3 from '../../assets/image/image3.jpeg'
import image4 from '../../assets/image/image4.jpeg'


function FeatureCard() {
    const featurecard = [
        {
            id: 1,
            path: image1,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 2,
            path: image2,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 3,
            path: image3,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 4,
            path: image4,
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
                    <h1>Mobile Phones</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        featurecard.map(item => {
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

export default FeatureCard
