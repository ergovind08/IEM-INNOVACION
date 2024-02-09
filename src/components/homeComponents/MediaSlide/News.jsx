import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// // import "swiper/swiper.min.css";
// import "./news.css";
// import "swiper/modules/pagination/pagination.min.css";
// import image1 from "./ImageFolder/1.jpeg";
// import image2 from "./ImageFolder/2.jpeg";
// import image3 from "./ImageFolder/3.jpeg";
// import image4 from "./ImageFolder/4.jpeg";
// import image5 from "./ImageFolder/5.jpeg";
// import image6 from "./ImageFolder/6.jpeg";
// import image7 from "./ImageFolder/7.jpeg";
// import image8 from "./ImageFolder/8.jpeg";
// import image9 from "./ImageFolder/9.jpeg";
// import image10 from "./ImageFolder/10.jpeg";
// import image11 from "./ImageFolder/11.jpeg";
// import image12 from "./ImageFolder/12.jpeg";
// import SwiperCore, { Autoplay } from "swiper";

const News = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="news" className="pt-0 pb-5" data-os="fade-up">
      <div className="container">
        <div className="header mb-5">
          <h2>News & Media</h2>
        </div>
        <div className=" swiper colaboration">
          <div className="swiper-wrapper align-items-center">
            <>
              <Swiper
                slidesPerView={2}
                spaceBetween={50}
                loop={true}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div className="row mt-0 center">
                    <div className="imgcenter col-lg-5 mt-0 mx-5">
                      <img src={image1} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="center col-lg-12 mt-0">
                      <a
                        className="btn-get-started"
                        href="https://www.facebook.com/Zee24Ghanta/videos/216840867165412/?mibextid=jnPKxsCKaeeGyS9o"
                        rel="noopener noreferrer"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mt-0 center">
                    <div className="imgcenter col-lg-5 mt-0 mx-5">
                      <img src={image2} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="center col-lg-12 mt-0">
                      <a
                        className="btn-get-started"
                        href="https://fb.watch/eVDfeLropG/"
                        rel="noopener noreferrer"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mt-0 center">
                    <div className="imgcenter col-lg-5 mt-0 mx-5">
                      <img src={image3} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="center col-lg-12 mt-0">
                      <a
                        className="btn-get-started"
                        href="https://fb.watch/eVDk8KgkJf/"
                        rel="noopener noreferrer"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mt-0 center">
                    <div className="imgcenter col-lg-5 mt-0 mx-5">
                      <img src={image4} className="img-fluid" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mt-0 center">
                    <div className="imgcenter col-lg-5 mt-0 mx-5">
                      <img src={image5} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="center col-lg-12 mt-0">
                      <a
                        className="btn-get-started"
                        href="https://www.telegraphindia.com/edugraph/campus/colleges-across-kolkata-celebrated-76th-independence-day-in-snapshots-photogallery/cid/1880686?slide=10"
                        rel="noopener noreferrer"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
