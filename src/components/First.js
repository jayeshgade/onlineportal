import './first.css';
import ServicesConnectionsection from './ServicesConnectionsection';

function First() {
  return (
    <>
      <div className='container'>
        <div className='center text-center'><h1 className='namefontsize'>Interior Designer</h1><br />
          <a href="/"><img
            src="/images/WhatsappUs.png" className="whatsappimage" /></a>
          <div>
            <a href=""><img src="/images/images/icons8-facebook-48.png"
              className="icon11"></img></a>
            <a href=""><img
              src="/images/images/icons8-instagram-48.png" className="icon11"></img></a>
            <a href=""><img
              src="https://img.icons8.com/color/48/000000/linkedin.png" className="icon11"></img></a>
          </div>
        </div>

      </div>
      <div className='container circles'>
        <div className='row'>
          <div className='col-lg-4 col-4'>
            <div className='one btn btn-lg' data-bs-toggle="modal" data-bs-target="#myModal2"><img className='oneimage' src="/images/CAD.png"></img></div>
          </div>
          <div className='col-lg-4 col-4'>
            <div className='two btn btn-lg' data-bs-toggle="modal" data-bs-target="#myModal1"><img className='twoimage' src="/images/resi.png"></img></div>
          </div>
          <div className='col-lg-4 col-4'>
            <div className='three btn btn-lg' data-bs-toggle="modal" data-bs-target="#myModal3"><img className='threeimage' src="/images/Commercial.png"></img></div>
          </div>

          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Residential</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <center><img src="images/images/1.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/2.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/3.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/4.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/5.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/6.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/7.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/8.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/9.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/10.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 1.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 2.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 3.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 4.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 9.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/Home test rendered 10.jpg" className="img1" /></center><br /><br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-bs-dismiss="modal">Exit</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal2" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">CAD</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>

                </div>
                <div className="modal-body">
                  <center><img src="/images/images/cad1.png" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad2.jpg" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad11.jpeg" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad12.jpeg" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad13.jpeg" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad14.jpeg" className="img1" /></center><br /><br />
                  <center><img src="/images/images/cad15.jpeg" className="img1" /></center><br /><br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-bs-dismiss="modal">Exit</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal3" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Commercial</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>

                </div>
                <div className="modal-body">
                  <center><img src="images/images/comm1.jpg" className="img1" /></center><br /><br />
                  <center><img src="images/images/comm2.jpg" className="img2" /></center><br /><br />
                  <center><img src="images/images/3.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/4.jpeg" className="img1" /></center><br /><br />
                  <center><img src="images/images/5.jpeg" className="img1" /></center><br /><br />

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-bs-dismiss="modal">Exit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <h1 className="text-center text1">Recent Designs</h1>
      <div className="jj">
        <div id="myCarousel" className="carousel" data-bs-ride="carousel">

          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="6"></li>
          </ol>


          <div className="carousel-inner">
           
            
            <div className="carousel-item active">
              <img src="/images/ourprojects/Vijay TV Unit Render.jpg" className="hh" alt="Slide 0" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div><div className="carousel-item">
              <img src="/images/ourprojects/Vijays Living Room.jpg" className="hh" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/Vijays Sitting.jpg" className="hh" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/Vijay Living Room Balcony.jpg" className="hh" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/images/1.jpg" className="hh" alt="Slide 4" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/images/2.jpg" className="hh" alt="Slide 5" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/images/3.jpg" className="hh" alt="Slide 6" />
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
      <br/><br/>
      <h1 className="text-center text1">Recent Completed Projects</h1>
      <div className="jj">
        <div id="myCarousel1" className="carousel" data-bs-ride="carousel">

          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel1" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel1" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel1" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel1" data-bs-slide-to="4"></li>
            <li data-bs-target="#myCarousel1" data-bs-slide-to="5"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/ourprojects/20220312_202913.jpg" className="hh" alt="Slide 0" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div><div className="carousel-item">
              <img src="/images/ourprojects/20220312_204405.jpg" className="hh" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/20220312_204542.jpg" className="hh" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/20220312_205632.jpg" className="hh" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/ourprojects/20220312_220906.jpg" className="hh" alt="Slide 4" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/images/6.jpeg" className="hh" alt="Slide 5" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" href="#myCarousel1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel1" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      <br /><br /><br /><br />

    <ServicesConnectionsection/>
    </>
  );
}

export default First;
