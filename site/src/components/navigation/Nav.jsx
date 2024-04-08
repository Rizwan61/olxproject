import React from 'react'

function Nav() {
    const navItems = [

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
    const submenuitems = [
        {
            id: 1,
            title: "Mobile Phones",
            section: "#Mobile Phones"
        },

    ]

    return (
        
        <>
            <div className='d-flex justify-between   bg-body-white container mt- '>
            
                <div className='d-flex align-items-center mx-3'>
                {
                    navItems.map((item) => {
                        return <a href={item.section} className='text-black p-2 text-decoration-none hover:text-green-600 font-bold text-lg  inline-block'> {item.title} </a>
                    })
                }
                </div>

               
            </div>
        </>
    )
}

export default Nav
