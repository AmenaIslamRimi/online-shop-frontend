import React from "react";
// I have props name as item with it has fields name, price, image, weight, quantity
import { ProductsType } from "@/types/productsType";

export const VerticalCard = ({
  name,
  price,
  image,
  weight,
  quantity,
}: ProductsType) => {
  return (
    <>
      <div>
        <div className="card border border-gray-400 rounded-lg">
          <div className="card-image">
            <img
              src="/avocado.jpg"
              alt="avocado"
              className="rounded-lg scale-95"
            />
          </div>
          <div className="card-content mx-3 my-3">
            <p>{name}</p>
            <p className="font-bold text-2xl">${price}</p>

            <div className="flex justify-start items-center box-border w-3 gap-2">
              <button className="flex border border-gray-400  mx-auto my-3 px-2 py-1 rounded-md items-center cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
                {/* {weight?.map((w: string) => (w === "5kg" ? w : null))} */}
                {weight?.[0]}
              </button>

              <button className="flex border border-gray-400  mx-auto my-3 px-2 py-1 rounded-md items-center cursor-pointer focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
                {/* {weight?.map((w: string) => (w === "10kg" ? w : null))} */}
                {weight?.[1]}
              </button>
            </div>
            <div className="flex justify-between items-center gap-2 relative">
              <div className=" flex justify-start items-center border rounded-md border-black bg-white p-1 ">
                <input
                  type="number"
                  placeholder="Quantity"
                  step={1}
                  min={0}
                  defaultValue={quantity}
                  className="w-20 h-8 text-center border-none focus:outline-none focus:border-none focus:ring-0 focus:ring-transparent"
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <button className="border border-black bg-blue-600 text-white hover:bg-slate-900 mx-3 p-2 rounded-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
