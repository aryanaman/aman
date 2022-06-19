import React from "react";
import "./Testimonials.css";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar:
      "https://media-exp2.licdn.com/dms/image/C4E03AQHgm76bj5yjHw/profile-displayphoto-shrink_800_800/0/1643474649550?e=1660780800&v=beta&t=4Km09HBeUAy-p3nuNlLi1t-jtHetCQsRK66yh8qAbzI",
    name: "Shubham Kumar",
    review:
      "We both are working together in wobb. He is responsible and a team player, he generally used to take initiative of the work and used to deliver before the deadline.",
  },
  {
    id: 2,
    avatar:
      "https://media-exp2.licdn.com/dms/image/C4D03AQFCWoAjA49tHQ/profile-displayphoto-shrink_400_400/0/1653238835342?e=1660780800&v=beta&t=Yoh6qU3FwJqnzCvAtr74v1NWUltMXv2jXllXMMgDHig",
    name: "Anshu Pal",
    review:
      "Aman is very professional and kind in nature. We works together at Wobb as frontend developer. He was dedicated to his work and timeline. His approach toward any problem was very fascinating to me.",
  },
];

function Testimonial() {
  return (
    <section id="testimonials">
      <h5>Review from industry peaople</h5>
      <h2>Testomials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className="testimonial" key={item.id}>
              <div className="client__avatar">
                <img src={item.avatar} alt="avatar1" />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
