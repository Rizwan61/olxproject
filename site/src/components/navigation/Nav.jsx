import React from 'react'
import accordian from '../../assets/image/accordian.svg'

function Nav() {
    const NavItems = [
      
        {
            id: 1,
            title: "Mobile Phones",
            section: "#Mobile Phones"
        },
        {
            id: 2,
            title: "Cars",
            section: "#cars"
        },
        {
            id: 3,
            title: "Motorcycles",
            section: "#motorcycles"
        },
        {
            id: 4,
            title: "Houses",
            section: "#houses"
        },
        {
            id: 5,
            title: "Videos-Audios",
            section: "#videos-audios"
        },
        {
            id: 6,
            title: "Tablets",
            section: "#tablets"
        },
        {
            id: 7,
            title: "Land&Plots",
            section: "#land&plots"
        },

    ]

    return (
        <>
            <div className='flex justify-between  bg-body-white container mt- '>
                
                  
               

                <div className='hidden md:block'>
                <span>All Catagories <img src={accordian} alt="" /></span>
                    {
                        NavItems.map((item) => {
                            return <a href={item.section} className='text-black p-2 text-decoration-none hover:text-green-600 font-bold text-lg  inline-block'> {item.title} </a>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Nav
