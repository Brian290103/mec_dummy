import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiReceipt, BiTable } from 'react-icons/bi';
import { BsAirplane, BsPaintBucket } from 'react-icons/bs';
import {
  FaConciergeBell,
  FaDesktop,
  FaMortarPestle,
  FaPlane,
} from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';

const CourseCard = ({ course }) => {
  let icon = course.icon;
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => router.push(`/about/courses/${course.id}`)}
        className="p-3 transition-transform border-t shadow cursor-pointer hover:scale-95 h-[150px] items-center flex"
      >
        <div className="grid items-center grid-cols-5">
          <div className="col-span-1">
            {/* <FaConciergeBell className="text-3xl text-red-500" /> */}
            <Image src={`/${icon}.svg`} alt="icon" width={45} height={45} />
          </div>
          <div className="col-span-4">
            <h1 className="mb-1 text-xl font-medium">{course.name}</h1>
            <p className="text-sm">{course.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
