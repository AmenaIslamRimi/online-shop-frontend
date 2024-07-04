import Link from "next/link";
import Image from "next/image";

export const DesktopNavBar = () => {
  return (
    // <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a
    //       href="https://flowbite.com/"
    //       className="flex items-center space-x-3 rtl:space-x-reverse"
    //     >
    //       {/* <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
    //       <Image
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         className="h-8"
    //         alt="Flowbite Logo"
    //         width={32}
    //         height={32}
    //       />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         Flowbite
    //       </span>
    //     </a>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <button
    //         type="button"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Get started
    //       </button>
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-sticky"
    //     >
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="sticky">
      <div className="bg-blue-500 w-full h-16"></div>
      <div className="bg-gray-50 rounded-xl shadow-md -mt-8 mx-5">
        <div className="flex justify-between items-center px-3 py-3 ">
          <Link href="/">
            <Image
              src="/super_shop_logo.png"
              alt="logo"
              width={100}
              height={100}
              className=" cursor-pointer h-10 w-auto "
            />
          </Link>
          <div className="flex gap-5 w-auto justify-center text-center  max-w-screen-xl mx-auto">
            <Link href="/" className=" ">
              {" "}
              Home{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              Services{" "}
            </Link>
            <Link href="/" className="">
              {" "}
              About Us{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              Appointment{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              Blog{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              Contact Us{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 relative">
            <div className="flex justify-center items-center border rounded-l-md border-gray-300 bg-white p-0">
              <input
                type="text"
                className=" m-0 active:bg-red-200 focus:bg-blue-200 hover:bg-green-200 focus:outline-none focus:bg-transparent focus:border-transparent active:bg-transparent hover:bg-transparent"
                placeholder="Search....."
              />

              <button className="text-white border-none bg-pink-300 p-0 m-0">
                <svg
                  className="w-6 h-6 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"
                    fill="#000000"
                  />
                  <path
                    d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>

            <Link href="/" className=" ">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="9"
                  r="3"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </Link>

            <Link href="/" className=" ">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* <Link href="/" className=" ">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="24 wishlist" id="_24_wishlist">
                  <path d="M27.11,17.74a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,17.74Z" />

                  <path d="M39.79,16.65,35.71,20a1.025,1.025,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,16.65Z" />

                  <path d="M27.11,27.06a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,27.06Z" />

                  <path d="M39.79,25.97l-4.08,3.35a.97.97,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,25.97Z" />

                  <path d="M27.11,36.38a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,36.38Z" />

                  <path d="M39.79,35.29l-4.08,3.36a1.015,1.015,0,0,1-.64.22.987.987,0,0,1-.65-.24L31.64,36.2a1,1,0,0,1-.1-1.41,1.01,1.01,0,0,1,1.42-.09l2.13,1.86,3.44-2.82a1,1,0,0,1,1.26,1.55Z" />

                  <path d="M27.11,45.7a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,45.7Z" />

                  <path d="M45.75,38.46V9.93A3.718,3.718,0,0,0,41.96,6.3H35.5V5.5a2.006,2.006,0,0,0-2-2H22.45a2.006,2.006,0,0,0-2,2v.8H13.99a3.727,3.727,0,0,0-3.8,3.63V52.2a3.728,3.728,0,0,0,3.8,3.64H33.45a11.248,11.248,0,1,0,12.3-17.38ZM22.45,5.5H33.5V9.09H22.45ZM13.99,53.84a1.752,1.752,0,0,1-1.8-1.64V9.93a1.751,1.751,0,0,1,1.8-1.63h6.46v.79a2,2,0,0,0,2,2H33.5a2,2,0,0,0,2-2V8.3h6.46a1.741,1.741,0,0,1,1.79,1.63V38.06a11.726,11.726,0,0,0-1.2-.07A11.238,11.238,0,0,0,32.29,53.84ZM42.55,58.5a9.255,9.255,0,1,1,9.26-9.25A9.261,9.261,0,0,1,42.55,58.5Z" />

                  <path d="M49.52,46.61c-.01-.11-.03-.21-.05-.32a3.519,3.519,0,0,0-3.48-2.94h-.02a5,5,0,0,0-3.42,1.46,4.963,4.963,0,0,0-3.42-1.46h-.01a3.326,3.326,0,0,0-.96.15.749.749,0,0,0-.16.04,3.5,3.5,0,0,0-2.01,1.73c-.01.03-.02.05-.03.08a3.682,3.682,0,0,0-.33.95c-.02.1-.03.2-.05.31-.65,4.9,4.37,8.58,5.89,9.57l.51.35a.931.931,0,0,0,.57.19.959.959,0,0,0,.58-.19l.47-.33C45.15,55.19,50.17,51.51,49.52,46.61ZM42.55,54.5c-2.67-1.76-5.38-4.67-4.98-7.63l.03-.21a1.526,1.526,0,0,1,1.52-1.31,3.026,3.026,0,0,1,2.54,1.58,1.039,1.039,0,0,0,1.78,0,3.039,3.039,0,0,1,2.54-1.58,1.518,1.518,0,0,1,1.52,1.3l.04.22C47.93,49.82,45.25,52.72,42.55,54.5Z" />
                </g>
              </svg>
            </Link> */
