import "./App.css";

import cardImg1 from "./assets/cardImg1.jpg";
import cardImg2 from "./assets/cardImg2.jpg";
import cardImg3 from "./assets/cardImg3.jpg";

import { FaUserFriends } from "react-icons/fa";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Swal from "sweetalert2";

function App() {
      const showToast = (message) => {
        console.log(message);
          const isMobile = window.innerWidth <= 768;
          Swal.fire({
              toast: true,
              position: isMobile ? "bottom" : "top-bottom",
              icon: "success",
              title: message,
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              background: "#fff",
              /* background: "url('./assets/aerial-bg.jpg') center / cover no-repeat", */
              color: "green",
          });
      };
  return (
    <div className="main-container">
      <Navbar />
      <div className="inner-wrapper">
      
        <div className="left-box">

          <div className="icon-box reposition"></div>

          <div className="grid">
            {/* Mountains */}
            <div className="row-1 flex flex-wrap">
              <div onClick={() => showToast("Mountains Clicked")} className="cardTitles">Mountains</div>
              <div className="cardTitles">|</div>
              <div onClick={() => showToast("Plateaus Clicked")} className="cardTitles">Plateaus</div>
              <div className="cardTitles">|</div>
              <div onClick={() => showToast("Beaches Clicked")} className="cardTitles">Beaches</div>
              
            </div>

            {/* Spend your vacation */}
            <div className="row-1 flex flex-wrap">
              <div className="cardSubTitle">
                Spend your vacation <br />
                with our activities
              </div>
            </div>

            {/* Most Popular */}
            <div className="row-1 flex flex-wrap">
              <div className="cardSubNextTitle">
                Most Popular
              </div>
            </div>

            <div className="row-1 flex flex-wrap">
            {/* 11111111111111111111111111111 */}
              <div className="card">
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    <img src={cardImg1} alt="icon" className="cardIcon" />
                  </div>
                </div>
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    Trip to Scotland
                  </div>
                </div>
                <div className="row-1 flex flex-wrap items-center gap-2">
                  <div className="cardSubImgTitlex flex items-center gap-2">
                    <FaUserFriends />
                    <span style={{ marginLeft: '-5px' }}>31 people going</span>
                  </div>
                </div>
              </div>
              {/* 22222222222222222222222222222 */}
              <div className="card">
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    <img src={cardImg2} alt="icon" className="cardIcon" />
                  </div>
                </div>
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    Trip to Egypt
                  </div>
                </div>
                <div className="row-1 flex flex-wrap items-center gap-2">
                  <div className="cardSubImgTitlex flex items-center gap-2">
                    <FaUserFriends />
                    <span style={{ marginLeft: '-5px' }}>22 people going</span>
                  </div>
                </div>
              </div>
              {/* 33333333333333333333333333333 */}

              <div className="card">
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    <img src={cardImg3} alt="icon" className="cardIcon" />
                  </div>
                </div>
                <div className="row-1 flex flex-wrap">
                  <div className="cardSubImgTitle">
                    Trip to Greece
                  </div>
                </div>
                <div className="row-1 flex flex-wrap items-center gap-2">
                  <div className="cardSubImgTitlex flex items-center gap-2">
                    <FaUserFriends />
                    <span style={{ marginLeft: '-5px' }}>20 people going</span>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>

        <div className="middle-box"></div>
        <div className="right-box">
         {/*  <div className="right-grid">
            <div>Home</div>
            <div>Aboutus</div>
            <div>Premium</div>
            <div>Blogs</div>
            <div className="explore">Explore</div>
          </div> */}          
        </div>

      <Hero />

      </div>
    </div>
  );
}

export default App;