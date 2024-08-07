import React from "react";
// I have props name as item with it has fields name, price, image, weight, quantity
import { ProductsType } from "@/types/productsType";
import Image from "next/image";
import { Weight } from "./Weight";

export const VerticalCard = ({
  name,
  price,
  image,
  weight,
  quantity,
}: ProductsType) => {
  return (
    <div className="card bg-white shadow-lg rounded-md border">
      <div className="card-image">
        <Image
          src="/avocado.jpg"
          alt="avocado"
          height={300}
          width={300}
          className="w-full h-auto rounded-t-md object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="card-content mx-3 my-3">
        <p className="text-gray-400 font-normal text-sm">Fresh Fruit</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-teal-800">{name}</p>
          {/* Add rating with star*/}
          <div className="flex items-center gap-1 border p-1 rounded-md">
            <p className="text-yellow-400 font-medium">4.5</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
              />
            </svg>
          </div>
        </div>
        <p className="font-bold text-xl flex items-start text-teal-400 drop-shadow">
          ${price}
          <span className="text-sm text-orange-600">.00</span>
        </p>
        <div className="flex justify-start items-center box-border w-3 gap-2">
          {weight.map((item, index) => (
            <Weight key={index} weight={item} />
          ))}
        </div>
        <div className="flex justify-between items-center gap-2 relative">
          <div className="grid grid-cols-2 justify-between items-center rounded-md bg-orange-50 p-1 shadow-sm border w-20">
            <div className="text-orange-800 font-normal text-sm">Qty</div>
            <input
              type="number"
              step={1}
              min={0}
              max={10}
              defaultValue={quantity}
              className="border-l border-orange-800 text-center focus:outline-none focus:border-none bg-transparent bg-orange-50 text-orange-800 font-medium text-lg"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="">
              <svg
                className="h-16 w-16 drop-shadow-sm"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.194 7.55504H8.76001L9.41201 13.944L16.7 13.214C17.1551 13.2156 17.5783 12.9809 17.818 12.594L19.312 9.49404C19.5529 9.09564 19.5581 8.59777 19.3255 8.19445C19.093 7.79112 18.6595 7.54617 18.194 7.55504Z"
                  stroke="#008080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.167 19.063C10.1648 19.5777 9.74612 19.9934 9.23136 19.992C8.7166 19.9905 8.30029 19.5724 8.30103 19.0576C8.30176 18.5429 8.71926 18.126 9.23402 18.126C9.48199 18.1265 9.7196 18.2255 9.89458 18.4012C10.0695 18.577 10.1675 18.815 10.167 19.063V19.063Z"
                  stroke="#008080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.767 19.063C15.7648 19.5777 15.3461 19.9934 14.8313 19.992C14.3166 19.9905 13.9003 19.5724 13.901 19.0576C13.9017 18.5429 14.3192 18.126 14.834 18.126C15.082 18.1265 15.3196 18.2255 15.4946 18.4012C15.6695 18.577 15.7675 18.815 15.767 19.063V19.063Z"
                  stroke="#008080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.03326 7.74034C8.13561 8.14171 8.54395 8.38411 8.94532 8.28176C9.34669 8.17941 9.58909 7.77106 9.48674 7.36969L8.03326 7.74034ZM8.136 5.10801L8.86281 4.92267L8.86017 4.91288L8.136 5.10801ZM7.993 5.00001V5.75009L8.00342 5.74994L7.993 5.00001ZM5.5 4.25001C5.08579 4.25001 4.75 4.5858 4.75 5.00001C4.75 5.41423 5.08579 5.75001 5.5 5.75001V4.25001ZM9.44322 14.6934C9.85707 14.6761 10.1786 14.3267 10.1614 13.9128C10.1441 13.4989 9.79464 13.1774 9.38078 13.1947L9.44322 14.6934ZM9.412 16.25L9.38078 16.9994C9.39118 16.9998 9.40159 17 9.412 17L9.412 16.25ZM16.054 17C16.4682 17 16.804 16.6642 16.804 16.25C16.804 15.8358 16.4682 15.5 16.054 15.5V17ZM9.48674 7.36969L8.86274 4.92269L7.40926 5.29334L8.03326 7.74034L9.48674 7.36969ZM8.86017 4.91288C8.75358 4.51729 8.39224 4.2444 7.98258 4.25009L8.00342 5.74994C7.72726 5.75378 7.48369 5.56982 7.41183 5.30315L8.86017 4.91288ZM7.993 4.25001H5.5V5.75001H7.993V4.25001ZM9.38078 13.1947C8.36094 13.2371 7.55603 14.0763 7.55603 15.097H9.05603C9.05603 14.8804 9.22682 14.7024 9.44322 14.6934L9.38078 13.1947ZM7.55603 15.097C7.55603 16.1177 8.36094 16.9569 9.38078 16.9994L9.44322 15.5007C9.22682 15.4916 9.05603 15.3136 9.05603 15.097H7.55603ZM9.412 17H16.054V15.5H9.412V17Z"
                  fill="#008080"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
