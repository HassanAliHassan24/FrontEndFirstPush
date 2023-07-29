import React from 'react'

import './Home.css';
import Image1 from '../../Image/cupture.png'
import Image2 from '../../Image/cardtwo.png'
import Image3 from '../../Image/cardthree.png'
import Image4 from '../../Image/cardfour.png'
import Image5 from '../../Image/slide1.png'
import SlideImage from '../../SlideImage/SlideImage';






// const styles = {
//     width: 300,
//     marginBottom: 10

//   };
function Home() {
  return (

    <>
      <div className="background" id='Home'>



        <div className="heading">
          <h3>Online Science Teacher's Finder</h3>
        </div>

        <div className="search">
          <input className='search-in' type="search" placeholder='Search here...' />
          <button className='btn1'>Search</button>
        </div>

        <SlideImage/>

        <div className="home">
          <div className="content">
            <h2>Find a Teacher from Respected Location</h2>
            <p>Lorem ipsum dolor, olestias quam soluta, distinctio eum, doloribus ipsa nam veritatis.

            </p>
            <button className='btn2'>Get started</button>
          </div>
          <div className="image">
            <img src={Image5} />
          </div>
        </div>

        <div className="all-card">

          <div className="card">
            <img src={Image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>

          <div className="card">
            <img src={Image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>
          <div className="card">
            <img src={Image3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>
          <div className="card">
            <img src={Image4} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>
        </div>
      </div>






    </>
  );

}

export default Home