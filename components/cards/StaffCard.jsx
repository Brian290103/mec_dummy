import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const StaffCard = ({ staff }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-3 border-t rounded-lg shadow">
        <div className="">
          <Image
            src="/logo.jpg"
            width={1000}
            height={1000}
            className="rounded-full w-[100px] mb-3 cursor-pointer hover:opacity-80 hover:scale-105 transition-transform "
            alt="jane"
          />
        </div>

        <table className="text-sm">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{staff.name}</td>
            </tr>
            <tr>
              <th className="pe-3">Occupation:</th>
              <td>{staff.occupation}</td>
            </tr>
            <tr>
              <th>Course:</th>
              <td>{staff.course}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Link
            href={`https://www.facebook.com/${staff.facebook}`}
            target="_blank"
          >
            <FaFacebook className="text-2xl text-red-500 transition-all duration-300 cursor-pointer hover:rotate-12" />
          </Link>
          <Link
            href={`https://www.twitter.com/${staff.twitter}`}
            target="_blank"
          >
            <FaTwitter className="text-2xl text-red-500 transition-all duration-300 cursor-pointer hover:rotate-12" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
