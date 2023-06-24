import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiPrinter } from 'react-icons/bi';

const AdmissionLetter = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/admin/admissions/${id}`
        );
        const data = await response.json();
        const singleData = data[0];
        setData(singleData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudentData();
  }, [id]);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  // const [printButton, setPrintButton] = useState(true);
  const handlePrint = () => {
    // setPrintButton(false);

    window.print();
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-2 min-w-[1000px]">
      <div className="w-full h-full p-5  max-w-[1000px] relative">
        <div className="flex items-center justify-center gap-10 py-2 border-b-4 border-red-500">
          <Image
            src={`/${data.passport}`}
            width={1000}
            height={1000}
            alt="profile-img"
            className="rounded-full w-[200px] h-[200px]"
          />
          <div className="flex flex-col items-center justify-center font-medium text-green-800">
            <h1 className="text-4xl font-medium text-red-500">
              Maasai Education Center
            </h1>
            <h2 className="">The Style Hotel School</h2>
            <span className="">P.O. Box 32, Lolgorian - Narok County</span>
            <span className="">
              Email:info.maasaieducationcenter2019@gmail.com
            </span>
            <span className="">Tel: +254 713 983 406</span>
          </div>
        </div>
        <div className="mt-1 border-t-2 border-red-500">
          <div className="">
            <h1 className="py-2 font-bold text-red-500 uppercase">
              Student Admission Form
            </h1>
            <table className="w-full border-2 border-black text-start">
              <tbody>
                <tr className="border-b-2 border-black">
                  <th className="p-1 text-lg text-start">Name:</th>
                  <td className="text-lg text-blue-500">{`${data.firstName}  ${data.middleName}  ${data.lastName}`}</td>
                </tr>
                <tr className="border-b-2 border-black">
                  <th className="p-1 text-start">Date of Birth:</th>
                  <td className="text-lg text-blue-500">{data.dob}</td>
                </tr>
                <tr className="border-b-2 border-black">
                  <th className="p-1 text-start">Address:</th>
                  <td className="text-lg text-blue-500">{data.address}</td>
                </tr>
                <tr className="border-b-2 border-black">
                  <th className="p-1 text-start">Telephone Number:</th>
                  <td className="text-lg text-blue-500">{data.phone}</td>
                </tr>
                <tr className="border-b-2 border-black">
                  <th className="p-1 text-start">Village / Sub Location:</th>
                  <td className="text-lg text-blue-500">{data.village}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <h1 className="py-2 font-medium uppercase">
              Academic Qualification{' '}
              <span className="capitalize">
                (Name, School, Year of Completion and Qualification)
              </span>
            </h1>

            <div className="">
              <div className="grid items-center grid-cols-12 gap-2 py-1">
                <h1 className="font-medium">School:</h1>
                <span className="col-span-4 px-3 text-center text-blue-500 border-b-2 border-b-black">
                  {data.school}
                </span>
                <h1 className="font-medium">Year:</h1>
                <span className="col-span-2 px-3 text-center text-blue-500 border-b-2 border-b-black">
                  {data.yoc}
                </span>
                <h1 className="col-span-3 font-medium ">
                  Qualification/Grade:
                </h1>
                <span className="px-3 text-center text-blue-500 border-b-2 border-b-black">
                  {data.grade}
                </span>
              </div>
              <div className="grid items-center grid-cols-12 py-1">
                <h1 className="col-span-3 font-medium">Course Applied For:</h1>
                <span className="col-span-9 px-3 text-xl text-center text-blue-500 border-b-2 border-b-black">
                  {data.course}
                </span>
              </div>
              <div className="grid items-center grid-cols-12 py-1">
                <h1 className="col-span-4 font-medium">
                  Commencement of Course:
                </h1>
                <span className="col-span-8 px-3 text-center text-blue-500 border-b-2 border-b-black">
                  {data.coc}
                </span>
              </div>
              <div className="grid items-center grid-cols-5 py-1">
                <h1 className="col-span-1 font-medium ">End of Course:</h1>
                <span className="col-span-4 px-3 text-center text-blue-500 border-b-2 border-b-black">
                  {data.eoc}
                </span>
              </div>
              <div className="flex flex-col py-3">
                <h1 className="font-medium text-red-500">
                  I have read the school rules and promise to adbide by them
                </h1>
                <div className="grid grid-cols-12 py-2">
                  <h1 className="col-span-2 font-medium ">Student Sign:</h1>
                  <span className="col-span-4 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                </div>
                <div className="grid grid-cols-10 gap-2 py-2">
                  <h1 className="col-span-2 font-medium ">Guardian Sign:</h1>
                  <span className="col-span-3 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                  <h1 className="col-span-1 font-medium ">ID No.:</h1>
                  <span className="col-span-2 px-3 text-center text-blue-500 border-b-2 border-b-black">
                    {data.gid}
                  </span>
                  <span className="col-span-2 text-red-500 font-xs">
                    (Attach a copy)
                  </span>
                </div>
              </div>
              <div className="py-1">
                <h1 className="text-lg font-medium">
                  Other mandatory admission requirements
                </h1>
                <div className="ps-5">
                  - Secondary school leaning certificate, a copy of your ID, Two
                  passport size photograph
                </div>
                <div className="ps-5">
                  - Photocopy of school KCSE Certificate
                </div>
                <div className="ps-5">- A copy of KCPE Certificate</div>
                <div className="ps-5">
                  - Medical Certificate in case of special attention & complete
                  boarding facility
                </div>
                <div className="ps-5">
                  - Boarding equipments (Mattress, 2 blankets, 2 bed sheets), a
                  towel, plate, cup, spoon and folk, washing buckets, school
                  uniform, Maasai shuka/dress
                </div>
                <div className="ps-5">- 7 exercise books A4 size</div>
                <div className="ps-5">
                  - For culinary art students are required to come with the
                  following requirements:-
                  <div className="ps-5">
                    - Black trouser, white chef jacket, neckerchef, 1/2 box
                    file, 2cs recipe cards and a chef hut
                  </div>
                </div>
                <div className="ps-5">
                  - For front office and housing operations:-
                  <div className="ps-5">
                    - 2 white shirts, 2 black trousers and a Maasai Shuka
                  </div>
                </div>
                <div className="ps-5">- UpFront Fee Payment</div>
                <div className="ps-5">- One RIM paper</div>
                <div className="ps-5">- Interview fee kshs.1000</div>
              </div>
              <div className="py-1">
                <h1 className="text-lg font-medium underline uppercase ">
                  For Official Use only
                </h1>
                <div className="grid grid-cols-11 py-2">
                  <h1 className="col-span-3 font-medium ">Interview Score.:</h1>
                  <div className="grid grid-cols-11 col-span-2 gap-2 ">
                    <span className="col-span-5 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                    <span className="col-span-1">/</span>
                    <span className="col-span-5 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                  </div>
                  <h1 className="col-span-2 px-2 font-medium text-end">
                    Accepted.:
                  </h1>
                  <span className="col-span-1 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                  <h1 className="col-span-2 px-2 font-medium text-end">
                    Rejected.:
                  </h1>
                  <span className="col-span-1 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>
                </div>
                <div className="grid items-end grid-cols-10 gap-2 py-2">
                  <h1 className="col-span-2 font-medium uppercase">
                    Handled By:
                  </h1>
                  <span className="col-span-3 px-3 text-center text-blue-500 border-b-2 border-b-black"></span>

                  <h1 className="col-span-5 font-medium text-center ">
                    For Maasai Education Center/Oreteti Mara Lodge School
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {printButton && ( */}
        <button className="fixed bottom-5 right-5">
          <BiPrinter
            onClick={() => handlePrint()}
            className="text-4xl text-red-500 transition-all duration-300 hover:-translate-y-2"
          />
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default AdmissionLetter;
