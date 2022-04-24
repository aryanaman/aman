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
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam fugiat minima similique dolorum, quaerat porro consequatur sequi quibusdam voluptatibus, fugit quam! Cumque, recusandae saepe? Illum voluptates excepturi nihil architecto mollitia ",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam fugiat minima similique dolorum, quaerat porro consequatur sequi quibusdam voluptatibus, fugit quam! Cumque, recusandae saepe? Illum voluptates excepturi nihil architecto mollitia ",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam fugiat minima similique dolorum, quaerat porro consequatur sequi quibusdam voluptatibus, fugit quam! Cumque, recusandae saepe? Illum voluptates excepturi nihil architecto mollitia ",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam fugiat minima similique dolorum, quaerat porro consequatur sequi quibusdam voluptatibus, fugit quam! Cumque, recusandae saepe? Illum voluptates excepturi nihil architecto mollitia ",
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
