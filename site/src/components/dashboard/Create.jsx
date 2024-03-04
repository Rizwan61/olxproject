
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function Create(props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate()
  const [image,setImage] = useState()

  const successMsg = () =>
    toast.success("Product successfully created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });


  const onHandle = () => {

    

    if (name !== "" && price !== 0 && category !== "") {
      const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("image", image);
      setLoading(true);
      axios.post(`http://localhost:4000/Products/`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
         
      },
      })
       
        .then((res) => {
          console.log(res)
          if (res.status == 201) {
             successMsg();
            setTimeout(() => {
              navigator("/dashboard")
              props.setUpdated(true);
            }, 2000);

          }
        })

        .catch((er) => { console.log(er.message) })
        .finally(() => {
           setLoading(false);
        })
    }
     else {
      alert("Field are empty")
    }


  };


  return (
    <>

      {
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className='mb-3'>
            <label id='name'>Name:</label>
            <input className="form-control" type="text" id='name' value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label id='price'>Price:</label>
            <input className="form-control" type="text" id='price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label id='name'>Category:</label>
            <input className="form-control" type="text" id='category' value={category} onChange={(e) => { setCategory(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label id='image'>Image:</label>
            <input className="form-control" type="file" id='image'  onChange={(e) => { setImage(e.target.files[0]) }} />
          </div>
          
          <div className="text-center">
            <button className="btn btn-primary" type="button" onClick={onHandle} disabled={loading == true ? true:""}>
              {loading ==true ?(<span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>):null}
              <span role="status"> {loading == false ? "Create Product" : "Loading..."}</span>
            </button>
          </div>



        </form>
      }






    </>
  )
}

export default Create