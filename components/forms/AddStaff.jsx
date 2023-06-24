import React from 'react';
import { BiUserPlus, BiX, BiXCircle } from 'react-icons/bi';

const AddStaff = ({ setAddStaff }) => {
  return (
    <div className="px-5 py-2 bg-white rounded-md ">
      <form action="" className="">
        <div className="my-2 ">
          <h1 className="text-xl font-medium text-center text-red-500">
            Add Staff
          </h1>
        </div>
        <div className="mb-2">
          <label htmlFor="sec">FullName</label>
          <input
            type="text"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sec">Occupation</label>
          <input
            type="text"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sec">Course</label>
          <input
            type="text"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sec">Image</label>
          <input
            type="file"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sec">Facebook URL</label>
          <input
            type="url"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sec">Twitter URL</label>
          <input
            type="url"
            className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
          />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div
            type="submit"
            onClick={() => setAddStaff(false)}
            className="flex items-center justify-between gap-2 p-3 text-white transition-transform bg-red-500 rounded-lg cursor-pointer active:scale-95 hover:bg-red-500/80"
          >
            Cancel
            <BiXCircle />
          </div>
          <button
            type="submit"
            className="flex items-center justify-between gap-2 p-3 text-white transition-transform bg-green-600 rounded-lg active:scale-95 hover:bg-green-600/80"
          >
            Add Staff
            <BiUserPlus />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
