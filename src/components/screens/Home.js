import React from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="container mx-auto flex px-36">
        <div className="w-7/12 p-5">
          <div className="border rounded mb-10">
            <div className="flex items-center py-3">
              <div className=" flex items-center gap-5 w-20 sm:w-20 px-4">
                <img
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt="..."
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                />
                <span className="text-lg font-bold">felixyunianto</span>
              </div>
            </div>
            <div className="bg-green-300 w-full h-full">
              <img
                className="object-contain w-full"
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
            </div>
            <div className="flex items-center px-4 py-4">
              <div className="flex gap-5">
                <FaRegHeart className="text-3xl" />
                <FaRegComment className="text-3xl" />
                <FaRegPaperPlane className="text-3xl" />
              </div>
            </div>
          </div>
          <div className="border rounded mb-10">
            <div className="flex items-center py-3">
              <div className=" flex items-center gap-5 w-20 sm:w-20 px-4">
                <img
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt="..."
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                />
                <span className="text-lg font-bold">felixyunianto</span>
              </div>
            </div>
            <div className="bg-green-300 w-full h-full">
              <img
                className="object-contain w-full"
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
            </div>
            <div className="flex items-center px-4 py-4">
              <div className="flex gap-5">
                <FaRegHeart className="text-3xl" />
                <FaRegComment className="text-3xl" />
                <FaRegPaperPlane className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
