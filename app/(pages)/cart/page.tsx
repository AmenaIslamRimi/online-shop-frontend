"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto w-auto  border-l-4 border-teal-100 bg-slate-50 rounded-md shadow my-5 py-3 pl-4 justify-start items-center flex">
        <h3 className=""> Home {">"}Your Shopping Cart</h3>
      </section>

      <section className=" max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <h2 className=" text-black text-3xl font-semibold justify-start items-start">
            Your Cart
          </h2>
          <button className="bg-transparent text-black  justify-end items-end">
            <u>Continue Shopping</u>
          </button>
        </div>

        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-3 mb-3">
          <table className="px-10 w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr className="">
                <th scope="col" className="px-3 py-3">
                  Product
                </th>
                <th scope="col" className="px-3 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-3 py-3 text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-8">
                    <Image
                      src="/avocado.jpg"
                      alt="avocado"
                      height={100}
                      width={100}
                      className="w-auto h-40 rounded-md"
                    />
                    <div className="flex flex-col justify-center gap-2">
                      <Link href={"/shop"}>Avocado-Small</Link>
                      <span>$10.00</span>
                      <label>
                        <span className="">Size:</span>
                        <span className="font-bold">5kg</span>
                      </label>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-3">
                  <input
                    type="number"
                    step={1}
                    min={0}
                    max={10}
                    defaultValue={1}
                    className="border border-black rounded-md active:bg-red-200 focus:bg-blue-200 hover:bg-green-200 p-2"
                  />
                </td>
                <td className="px-3 py-3 text-right">
                  <p className="text-lg font-semibold">$10.00</p>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-8">
                    <Image
                      src="/avocado.jpg"
                      alt="avocado"
                      height={100}
                      width={100}
                      className="w-auto h-40 rounded-md"
                    />
                    <div className="flex flex-col justify-center gap-2">
                      <Link href={"/shop"}>Avocado-Small</Link>
                      <span>$10.00</span>
                      <label>
                        <span className="">Size:</span>
                        <span className="font-bold">5kg</span>
                      </label>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-3">
                  <input
                    type="number"
                    step={1}
                    min={0}
                    max={10}
                    defaultValue={1}
                    className="border border-black rounded-md active:bg-red-200 focus:bg-blue-200 hover:bg-green-200 p-2"
                  />
                </td>
                <td className="px-3 py-3 text-right">
                  <p className="text-lg font-semibold">$10.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-end">
          <label>
            <span>Subtotal:</span>
            {"  "}
            <span className="text-xl font-semibold">$20.00</span>
          </label>
          <p>Taxes and shipping calculated at checkout </p>
          <button className="bg-blue-500 w-fit text-white px-28 py-2 rounded-md mt-3">
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
