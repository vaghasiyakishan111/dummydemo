import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



import { Link } from "react-router-dom";

function Home() {
  const [product, setproduct] = useState([]);




  const [slider,setslider]= useState([]);
  const [find,setfind]=useState("https://dummyjson.com/products");


  useEffect(() => {

    search(" ");
  }, []);
  function search(e){

    axios
    .get(find)

   
    .then(function (response) {
      // handle success
      console.log(response.data.products);
      setproduct(response.data.products);
      // setslider(response.data.products.images);
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    if(e!=''){

      setfind('https://dummyjson.com/products/search?q=' + e)
    }

  }

  return (
    <>
      <div className="container">
        <div className="row">
        <input type="text" placeholder="search" onChange={(e)=>{search(e.target.value)}} />



          {product.map((a, b) => {
            return (
              <>

                <div key={b} className="col-xl-3 mt-4">
                  {/* <img src={a.thumbnail} className='imgsize imghover'/> */}

                  <OwlCarousel
                    items={1}
                    className="owl-theme"
                    loop
                    nav={false}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    margin={8}
                  >
                   {
                    a.images.map((c)=>{
                        return(
                            <>
                                <img src={c} className='imgsize imghover' />
                            </>
                        )
                    })
                   }
                  </OwlCarousel>

                  <h1>{a.title}</h1>
                  <div className="d-flex">
                    <h6>Rs.{a.price}</h6>
                    <strike className="fw-bold ms-1">499</strike>
                  </div>
                  <p>{a.description}</p>

                  <Link to={`/${a.id}`}><p className="btn btn-outline-info">view more</p></Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
