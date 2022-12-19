import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";

function Sinle() {

  const [single, setsingle] = useState([]);

  const [bottomimg,setbottomimg] = useState([]);

  const [clickbottom,setclickbottom] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setsingle(response.data);
        setbottomimg(response.data.images);
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            {/* <h1>{single.price}</h1> */}
            <img src={clickbottom} className="mt-3 imgsizesize" />

          <div className="d-flex  ">
          {
            bottomimg.map((f)=>{
              return(
                <>
<div onClick={()=>{setclickbottom(f)}}>
<img src={f} className='height mx-3 mt-2 '/>
  
  </div>                </>
              );
            })
           }
          </div>
          </div>

          <div className="col-xl-6">
            <h2 className="mt-3">{single.description}</h2>
            <div className="d-flex">
              <h1 className="mt-2">{single.brand}</h1>
              <h4 className="ms-3 fw-semibold mt-3">{single.title}</h4>
            </div>
            <div className="d-flex mt-4">
              <h4>Rs.{single.price}</h4>
              <strike className="fw-bold ms-1">499</strike>
              <h6 className="ms-4 mt-1">Stock.{single.stock}</h6>
              <h4 className="ms-4">
                discountPercentage : {single.discountPercentage}
              </h4>
            </div>
            <h2 className="mt-1">{single.category}</h2>

            <p className="mt-1 bg-success p-2 rounded-pill d-inline text-white">
               {single.rating}
               <FaStar className="text-white ms-1 mb-1"/>
            </p>
            <Rating
              initialValue={single.rating}
              readonly={true}
              allowFraction={true}
              /* Available Props */
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sinle;
