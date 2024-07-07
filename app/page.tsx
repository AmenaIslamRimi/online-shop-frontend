"use client";
import Link from "next/link";
import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <div className="w-full h-auto relative -z-10 -mt-8 body_image">
        <div className="background absolute justify-start items-start inset-y-0 left-0 top-20 "></div>

        <div className="content flex flex-col h-full justify-center ">
          <h1 className="text-5xl font-bold text-left my-5 mx-20 text-white">
            Our Fresh Grocery Store
          </h1>
          <p className=" text-left text-xl my-5 mx-20 text-white">
            We provide fresh groceries for your daily needs at affordable
            <br />
            prices and high quality.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14 mx-20 w-fit">
            Shop Now
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          Slide 1
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 2
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 3
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 4
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 5
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          Slide 6
          <Image
            src="/grocery_image_1.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>

      <div className=" max-w-screen-xl mx-auto my-5 grid grid-cols-3 gap-5">
        <div className="rounded-lg shadow-md col-span-1 grocery_image_1">
          <div className="background1 "></div>
          <div className="content1 flex flex-col gap-2 justify-center items-center h-full">
            <h4 className="text-xl font-bold text-center text-white ">
              We Supply 100% Fresh
            </h4>
            <h2 className="text-2xl font-bold text-center text-white">
              Organic Healthy Foods
            </h2>
            <button className="bg-transparent text-white font-bold py-2 px-2 rounded mx-30">
              <u>Shop Now</u>
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-2 col-span-2 gap-5">
          <div className=" rounded-lg shadow-md col-span-1 grocery_image_2">
            <div className="background2 "></div>
            <div className="content2 flex flex-col gap-2 justify-center items-center h-full">
              <h4 className="text-xl font-bold text-center text-white ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-center text-white">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent text-white font-bold py-2 px-2 rounded mx-30">
                <u>Shop Now</u>
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-md col-span-1 grocery_image_3">
            <div className="background3 "></div>
            <div className="content3 flex flex-col gap-2 justify-center items-center h-full">
              <h4 className="text-xl font-bold text-center text-white ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-center text-white">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent text-white font-bold py-2 px-2 rounded mx-30">
                <u>Shop Now</u>
              </button>
            </div>
          </div>
          <div className="rounded-lg shadow-md col-span-2 grocery_image_4">
            <div className="background4 "></div>
            <div className="content4 flex flex-col gap-2 justify-center items-center h-full">
              <h4 className="text-xl font-bold text-center text-white ">
                We Supply 100% Fresh
              </h4>
              <h2 className="text-2xl font-bold text-center text-white">
                Organic Healthy Foods
              </h2>
              <button className="bg-transparent text-white font-bold py-2 px-2 rounded mx-30">
                <u>Shop Now</u>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
