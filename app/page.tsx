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
import { VerticalCard } from "@/components/card";

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
      <div className="flex max-w-screen-xl mx-auto my-16 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="0"
            className="aos-init aos-animate"
          >
            <div className="bg-slate-50 border rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105">
              <div className=" p-0">
                <Image
                  src="/grocery_image_1.jpeg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="text-small block text-left mt-4">
                <h2 className="text-default-500 text-lg font-bold line-clamp-1 mb-2">
                  Consolidating Child Related Benefits in Taxes, Is Your Child
                  Missing Out on FREE Money?
                </h2>
                <button
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 rounded-small [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-[#0E758B] text-white shadow-lg font-medium text-lg px-5 py-4 mb-2"
                  type="button"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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

      <div>
        <div className="max-w-screen-xl mx-auto my-16">
          <h1 className="text-4xl font-bold text-center my-5">Our Products</h1>
          <div className="grid grid-cols-4 gap-5">
            <VerticalCard
              name="Avocado"
              price={5.0}
              image="/avocado.jpg"
              weight={["5kg", "10kg"]}
              quantity={1}
            />
            <VerticalCard
              name="Banana"
              price={2.0}
              image="/banana.jpg"
              weight={["5kg", "10kg"]}
              quantity={1}
            />
            <VerticalCard
              name="Apple"
              price={3.0}
              image="/apple.jpg"
              weight={["5kg", "10kg"]}
              quantity={1}
            />
            <VerticalCard
              name="Orange"
              price={4.0}
              image="/orange.jpg"
              weight={["5kg", "10kg"]}
              quantity={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
