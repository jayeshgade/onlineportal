import React, { useState } from 'react';
import '../components/gallery.css';


function Gallery() {

  let data = [
    {
      id: 1,
      imgSrc: 'images/images/5.jpeg',
    },
    {
      id: 2,
      imgSrc: 'images/images/3.jpeg',
    },
    {
      id: 3,
      imgSrc: 'images/images/3.jpeg',
    },
    {
      id: 4,
      imgSrc: 'images/images/4.jpeg',
    },
    {
      id: 5,
      imgSrc: 'images/images/6.jpeg',
    },
    {
      id: 6,
      imgSrc: 'images/images/7.jpeg',
    },
    {
      id: 7,
      imgSrc: 'images/images/8.jpeg',
    },
    {
      id: 8,
      imgSrc: 'images/images/9.jpeg',
    },
    {
      id: 9,
      imgSrc: 'images/images/10.jpeg',
    },
    {
      id: 10,
      imgSrc: 'images/ourprojects/20220312_202913.jpg',
    },
    {
      id: 11,
      imgSrc: 'images/ourprojects/20220312_204405.jpg',
    },
    {
      id: 12,
      imgSrc: 'images/ourprojects/20220312_204542.jpg',
    },
    {
      id: 13,
      imgSrc: 'images/ourprojects/20220312_205632.jpg',
    },
    {
      id: 14,
      imgSrc: 'images/ourprojects/20220312_220906.jpg',
    },
    {
      id: 15,
      imgSrc: 'images/ourprojects/Vijay Living Room Balcony.jpg',
    },
    {
      id: 16,
      imgSrc: 'images/ourprojects/Vijay TV Unit Render.jpg',
    },
    {
      id: 17,
      imgSrc: 'images/ourprojects/Vijays Living Room.jpg',
    },
    {
      id: 18,
      imgSrc: 'images/ourprojects/Vijays Sitting.jpg',
    },
  ]

  const [getimg, SetGetImg] = useState('');
  const [v, SetV] = useState('none');
  const [v1, SetV1] = useState('');
  const getImage = (image) => {
    SetGetImg(image);
    SetV('block');
  }

  const view = () => {
    SetV('none');
  }

  return (
    <>
      <div className="container-lg text-center jjj">
        <h1 className="text-center">Our Projects</h1>
        <div id="myCarousel" className="carousel" data-bs-ride="carousel">

          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="6"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="7"></li>
          </ol>


          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/images/4.jpeg" className=" hh" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/images/5.jpeg" className="hh" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div><div className="carousel-item">
              <img src="/images/images/3.jpeg" className="hh" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div><div className="carousel-item">
              <img src="/images/ourprojects/Vijay Living Room Balcony.jpg" className="w-100 hh" alt="Slide 4" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div><div className="carousel-item">
              <img src="/images/ourprojects/Vijay TV Unit Render.jpg" className="hh" alt="Slide 5" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div><div className="carousel-item">
              <img src="/images/ourprojects/Vijays Living Room.jpg" className="hh" alt="Slide 6" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/Vijays Sitting.jpg" className="hh" alt="Slide 7" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>



          </div>

          <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>



      <br></br><br></br>
      <div className="gcontainer">
        <h1></h1>
        <div className="gallery-container">


          {
            React.Children.toArray(
              data.map((item, index) => {
                return (
                  <>
                    <div className="galleryimage" onClick={() => getImage(item.imgSrc)}>
                      <img src={item.imgSrc} />
                    </div>

                    <div className="popup-image" style={{ display: v, backgroundColor: 'rgba(0,0,0, 0.1)' }}>
                      <span style={{ display: v1 }} onClick={view}>&times;</span>
                      <img src={getimg} />
                    </div>

                  </>

                )
              })
            )
          }








        </div>





      </div>
    </>
  );
}

export default Gallery;
