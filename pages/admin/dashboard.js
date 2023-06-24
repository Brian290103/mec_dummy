import Wrapper from '@/components/Wrapper';
import AddStaff from '@/components/forms/AddStaff';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiMenu, BiUserPin } from 'react-icons/bi';
import {
  FaBars,
  FaCertificate,
  FaEye,
  FaNewspaper,
  FaPhotoVideo,
  FaSignOutAlt,
  FaUserPlus,
} from 'react-icons/fa';
import Navigation from './components/Navigation';
import AdminLayout from './components/AdminLayout';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Dashboard = ({ admissionsData }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = Cookies.get('credentials'); // Replace 'your_cookie_name' with the actual name of your cookie

    if (!isLoggedIn) {
      router.push('/admin'); // Redirect to the login page if the cookie doesn't exist
    }
  }, [router]);

  const handleView = ({ id }) => {
    router.push(`/admin/admissions/admissionLetter/${id}`);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen px-3 py-3 md:col-span-2 lg:col-span-3 xl:col-span-4">
        {/* Row 1 */}
        <div className="grid grid-cols-5 px-5 py-5 bg-white rounded-lg shadow">
          <div className="flex flex-col justify-center col-span-4">
            <h1 className="text-xl font-medium md:text-3xl">Hello, Jane Doe</h1>
            <span className="text-lg md:text-xl ">August 18, 2020</span>
          </div>
          <div className="flex flex-col items-center justify-center col-span-1 ">
            <Image
              src="/logo.jpg"
              width={70}
              height={70}
              alt="profile-img"
              className="rounded-full"
            />
            <span className="flex items-center gap-2 mt-2 font-medium text-red-500">
              <FaSignOutAlt />
              Logout
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 pt-5  min-h-[75vh] max-h-[75vh] gap-2">
          {/* Col 1 */}
          <div className="max-h-[73vh]  col-span-2 p-5 bg-white rounded-lg shadow lg:col-span-1">
            <h1 className="text-xl font-medium text-red-500">
              New Admissions Posted
            </h1>{' '}
            <div className="h-full pt-3 overflow-auto">
              <table className="  min-w-[1000px]  text-center">
                <thead>
                  <tr>
                    <th>sno</th>
                    <th>Passport</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Id Number</th>
                    <th>Phone Number</th>
                    <th>Village</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionsData.map((data) => {
                    return (
                      <tr key={data.id} className="border-b ">
                        <th>{data.id} </th>
                        <td>
                          <div className="flex items-center justify-center my-2 ">
                            <Image
                              src={`/${data.passport}`}
                              width={50}
                              height={50}
                              alt="profile-img"
                              className="rounded-full h-[50px] w-[50px]"
                            />
                          </div>
                        </td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.gender}</td>
                        <td>{data.idno}</td>
                        <td>{data.phone}</td>
                        <td>{data.village}</td>
                        <td>
                          <button onClick={() => handleView(data)}>
                            <FaEye className="text-red-500" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Col 2 */}
          <div className="grid h-full grid-cols-1 col-span-2 grid-rows-2 gap-2 mt-5 lg:mt-0 lg:col-span-1">
            {/* Row1 */}
            <div className="p-3 bg-white rounded-lg shadow">
              <h1 className="text-xl font-medium text-red-500">
                Received Messages
              </h1>
              <div className="mt-3  max-h-[180px] overflow-y-auto">
                {/* Card */}
                <div className="flex gap-5 px-3 py-2 border-b">
                  <Image
                    src="/logo.jpg"
                    width={50}
                    height={50}
                    alt="profile-img"
                    className="col-span-1 rounded-full w-[50px] h-[50px]"
                  />{' '}
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium">John Doe</h1>
                    <span className="text-lg">johndoe@gmail.com</span>
                    <p className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repudiandae voluptatum reiciendis cum est molestias
                      similique praesentium magnam minus possimus placeat.
                    </p>
                    <span className="text-sm italic text-right">
                      11 Jun, 2023
                    </span>
                  </div>
                </div>

                {/* Card2 */}
                <div className="flex gap-5 px-3 py-2 border-b">
                  <Image
                    src="/logo.jpg"
                    width={50}
                    height={50}
                    alt="profile-img"
                    className="col-span-1 rounded-full w-[50px] h-[50px]"
                  />{' '}
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium">John Doe</h1>
                    <span className="text-lg">johndoe@gmail.com</span>
                    <p className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repudiandae voluptatum reiciendis cum est molestias
                      similique praesentium magnam minus possimus placeat.
                    </p>
                    <span className="text-sm italic text-right">
                      11 Jun, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Row2 */}
            <div className="p-3 bg-white rounded-lg shadow">
              <h1 className="text-xl font-medium text-red-500">
                Newsletter Subscribers
              </h1>
              <div className="mt-3  max-h-[180px]  overflow-auto ">
                <table className=" min-w-[800px] text-center">
                  <thead>
                    <tr>
                      <th>sno</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                    <tr>
                      <th>001</th>
                      <td>Brian Saitabau</td>
                      <td>briansaitabau29@gmail.com</td>
                      <td>2023-06-12 00:45:34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  // newsData;
  try {
    const resAdmissions = await fetch(
      'http://localhost:3000/api/admin/admissions'
    );
    const resMessages = await fetch(
      'http://localhost:3000/api/admin/admissions'
    );
    const resNewsletters = await fetch(
      'http://localhost:3000/api/admin/admissions'
    );

    if (!resAdmissions.ok && !resMessages.ok && !resNewsletters.ok) {
      throw new Error('Server Error');
    }
    // console.log(resTestimonials);
    const admissionsData = await resAdmissions.json();
    const messagesData = await resMessages.json();
    const newsletterData = await resNewsletters.json();
    return {
      props: {
        admissionsData,
        messagesData,
        newsletterData,
      },
    };
  } catch (error) {
    console.error('Error: ', error);

    return {
      props: {
        admissionsData: [],
        messagesData: [],
        newsletterData: [],
        error: 'Failed to fetch data',
      },
    };
  }
}
