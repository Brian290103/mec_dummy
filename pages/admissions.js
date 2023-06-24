import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '@/schemas';
import axios from 'axios';

const onSubmit = async (values, actions) => {
  console.log('Submitted');
  // console.log(values);
  // console.log(actions);

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // actions.resetForm();

  let formData = new FormData();
  formData.append('formData', values);

  axios
    .post('api/admissions', values, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log(values);
};

const Admissions = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: 'male',
      idno: '',
      phone: '',
      email: '',
      address: '',
      village: '',
      gname: '',
      occupation: '',
      gid: '',
      gphone: '',
      school: '',
      yoc: '2023',
      grade: 'A',
      course: 'TTO',
      coc: '',
      eoc: '',
      passport: '',
      idCard: '',
      gIdCard: '',
      kcpeCert: '',
      kcseCert: '',
      leavingCert: '',
      medCert: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // States fro handling Forms
  const [passport, setPassport] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [gIdCard, setGIdCard] = useState(null);
  const [kcpeCert, setKcpeCert] = useState(null);
  const [kcseCert, setKcseCert] = useState(null);
  const [leavingCert, setLeavingCert] = useState(null);
  const [medCert, setMedCert] = useState(null);
  const [isRead, setIsRead] = useState(false);

  values.passport = passport;
  values.idCard = idCard;
  values.gIdCard = gIdCard;
  values.kcpeCert = kcpeCert;
  values.kcseCert = kcseCert;
  values.medCert = medCert;
  values.leavingCert = leavingCert;

  // console.log(passport);

  // console.log(values);

  return (
    <div>
      {' '}
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">Admissions</h1>
          <span className="">
            Home - <b>Admissions</b>
          </span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="flex flex-col items-center justify-start gap-5 mb-5 md:flex-row">
          <Image
            src="/logo.jpg"
            width={1000}
            height={1000}
            className="rounded-full w-[100px]"
            alt="school logo"
          />
          <div className="">
            <h1 className="text-3xl font-medium text-center">
              Maasai Education Center
            </h1>
            <h1 className="text-2xl">Student Admission Form</h1>
            <p className="text-sm text-red-500">
              Kindly fill all the details appropriately *
            </p>
          </div>
        </div>
        {/* FORM */}

        <form action="" className="" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Personal Information</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstName"
                  className={
                    errors.firstName && touched.firstName
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.firstName && touched.firstName && (
                  <div className="font-medium text-red-500">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="mname">Middle Name</label>
                <input
                  type="text"
                  value={values.middleName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="middleName"
                  className={
                    errors.middleName && touched.middleName
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.middleName && touched.middleName && (
                  <div className="font-medium text-red-500">
                    {errors.middleName}
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="lastName"
                  className={
                    errors.lastName && touched.lastName
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="font-medium text-red-500">
                    {errors.lastName}
                  </div>
                )}
              </div>
              {/* DOB */}
              <div className="mb-2">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="dob"
                  className={
                    errors.dob && touched.dob
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.dob && touched.dob && (
                  <div className="font-medium text-red-500">{errors.dob}</div>
                )}
              </div>
              {/* Gender */}
              <div className="flex flex-col justify-center mb-2">
                <label htmlFor="gender">Gender</label>

                <select
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* Id Number */}
              <div className="mb-2">
                <label htmlFor="idno">Id Number</label>
                <input
                  type="number"
                  value={values.idno}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="idno"
                  className={
                    errors.idno && touched.idno
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.idno && touched.idno && (
                  <div className="font-medium text-red-500">{errors.idno}</div>
                )}
              </div>
            </div>
          </div>
          {/*Contact Details */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Contact Details</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* Phone */}
              <div className="mb-2">
                <label htmlFor="phone">Phone</label>
                <div className="flex flex-row items-center">
                  <label
                    htmlFor="phone"
                    className="px-2 py-2 mt-1 font-medium text-white bg-red-500 rounded-s-md ring-2 ring-red-500"
                  >
                    +254
                  </label>
                  <input
                    type="number"
                    placeholder="712 123 332"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="phone"
                    className={
                      errors.phone && touched.phone
                        ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-e-md outline-none ring-2 focus:ring-red-500'
                        : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-e-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                    }
                  />
                </div>

                {errors.phone && touched.phone && (
                  <div className="font-medium text-red-500">{errors.phone}</div>
                )}
              </div>
              {/* Email */}
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  className={
                    errors.email && touched.email
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.email && touched.email && (
                  <div className="font-medium text-red-500">{errors.email}</div>
                )}
              </div>
              {/* Address */}
              <div className="mb-2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="address"
                  className={
                    errors.address && touched.address
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.address && touched.address && (
                  <div className="font-medium text-red-500">
                    {errors.address}
                  </div>
                )}
              </div>
              {/* Village */}
              <div className="mb-2">
                <label htmlFor="village">Village / Sub Location</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="village"
                  className={
                    errors.village && touched.village
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.village && touched.village && (
                  <div className="font-medium text-red-500">
                    {errors.village}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*Guardian Information */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Guardian Information</h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* G Name */}
              <div className="mb-2">
                <label htmlFor="gname">Name</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="gname"
                  className={
                    errors.gname && touched.gname
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.gname && touched.gname && (
                  <div className="font-medium text-red-500">{errors.gname}</div>
                )}
              </div>
              {/* G Occupation */}
              <div className="mb-2">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="occupation"
                  className={
                    errors.occupation && touched.occupation
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.occupation && touched.occupation && (
                  <div className="font-medium text-red-500">
                    {errors.occupation}
                  </div>
                )}
              </div>
              {/* G ID */}
              <div className="mb-2">
                <label htmlFor="gid">Id Number</label>
                <input
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="gid"
                  className={
                    errors.gid && touched.gid
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.gid && touched.gid && (
                  <div className="font-medium text-red-500">{errors.gid}</div>
                )}
              </div>
              {/* G Phone */}
              <div className="mb-2">
                <label htmlFor="gphone">Phone</label>
                <div className="flex flex-row items-center">
                  <label
                    htmlFor="gphone"
                    className="px-2 py-2 mt-1 font-medium text-white bg-red-500 rounded-s-md ring-2 ring-red-500"
                  >
                    +254
                  </label>
                  <input
                    type="number"
                    placeholder="712 123 332"
                    value={values.gphone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="gphone"
                    className={
                      errors.gphone && touched.gphone
                        ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-e-md outline-none ring-2 focus:ring-red-500'
                        : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-e-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                    }
                  />
                </div>
                {errors.gphone && touched.gphone && (
                  <div className="font-medium text-red-500">
                    {errors.gphone}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*Academic Qualifiication */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">
              Academic Qualifiication
            </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* School */}
              <div className="mb-2">
                <label htmlFor="school">School</label>
                <input
                  type="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id="school"
                  className={
                    errors.school && touched.school
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.school && touched.school && (
                  <div className="font-medium text-red-500">
                    {errors.school}
                  </div>
                )}
              </div>
              {/* YOC */}
              <div className="mb-2">
                <label htmlFor="yoc">Year of Completion</label>
                <select
                  name="yoc"
                  id="yoc"
                  value={values.yoc}
                  onChange={handleChange}
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                </select>
              </div>
              {/* GRADE */}
              <div className="mb-2">
                <label htmlFor="grade">Grade Attained</label>
                <select
                  name="grade"
                  id="grade"
                  value={values.grade}
                  onChange={handleChange}
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>
            </div>
          </div>
          {/*Course Application */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Course Application </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* Course */}
              <div className="mb-2">
                <label htmlFor="year">Course Applying For</label>
                <select
                  name="course"
                  id="course"
                  value={values.course}
                  onChange={handleChange}
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                >
                  <option value="Tour and Travel Operations">
                    Tour and Travel Operations
                  </option>
                  <option value="Culinary Arts">Culinary Arts</option>
                  <option value="Front Office Operations">
                    Front Office Operations
                  </option>
                  <option value="Housekeeping and Laundry">
                    Housekeeping and Laundry
                  </option>
                  <option value="Computer Packages">Computer Packages</option>
                </select>
              </div>

              {/* COC */}
              <div className="mb-2">
                <label htmlFor="coc">Commencement of Course</label>
                <input
                  type="date"
                  value={values.coc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="coc"
                  className={
                    errors.coc && touched.coc
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.coc && touched.coc && (
                  <div className="font-medium text-red-500">{errors.coc}</div>
                )}
              </div>
              {/* EOC */}
              <div className="mb-2">
                <label htmlFor="eoc">End of Course</label>
                <input
                  type="date"
                  value={values.eoc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="eoc"
                  className={
                    errors.eoc && touched.eoc
                      ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                      : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                  }
                />
                {errors.eoc && touched.eoc && (
                  <div className="font-medium text-red-500">{errors.eoc}</div>
                )}
              </div>
            </div>
          </div>
          {/*Upload the following supporting documents */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">
              Upload the following supporting documents{' '}
            </h1>
            <div className="grid grid-cols-1 gap-5 my-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="mb-2">
                <label htmlFor="passport">Student Passport Photo</label>
                <input
                  type="file"
                  id="passport"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setPassport(e.target.files[0])}
                />
                {/* {passport && (
                  <div className="font-medium text-red-500">
                    {errors.passport}
                  </div>
                )} */}
              </div>
              <div className="mb-2">
                <label htmlFor="sid">Student Identity Card (ID)</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setIdCard(e.target.files[0])}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="gid">Guardian Identity Card (ID)</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setGIdCard(e.target.files[0])}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="kcpe">KCPE Certificate</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setKcpeCert(e.target.files[0])}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="sec">
                  Secondary School Leaving Certificate
                </label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setLeavingCert(e.target.files[0])}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="kcse">KCSE Certificate</label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setKcseCert(e.target.files[0])}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="med">
                  Medical Certificate{' '}
                  <span className="text-red-500">
                    ( In case of special attention)
                  </span>
                </label>
                <input
                  type="file"
                  className="w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
                  onChange={(e) => setMedCert(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          {/*Signing Off */}
          <div className="mb-5">
            <h1 className="font-medium text-red-500">Signing Off</h1>
            <div className="grid grid-cols-1 gap-5 my-2 mt-4 md:mt-0 lg:grid-cols-3">
              <div className="mb-2 md:mt-5 ">
                <Link
                  href="/"
                  className="px-2 py-3 text-sm text-white transition-transform bg-red-500 rounded-lg md:text-lg lg:text-base sm:p-3 active:scale-95 hover:bg-red-500/80"
                >
                  Download School Rules and Regulations
                </Link>
              </div>
              <div className="mb-2">
                <input
                  type="checkbox"
                  id="confirm"
                  className="px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none me-2 "
                />
                <label htmlFor="confirm">
                  I have read the school rules and promise to abide by them
                </label>
              </div>
            </div>
          </div>{' '}
          <div className="flex items-center justify-end ">
            {' '}
            <button
              disabled={isSubmitting}
              type="submit"
              className="p-3 text-white transition-transform bg-red-500 rounded-lg active:scale-95 hover:bg-red-500/80"
            >
              Submit Application Form
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Admissions;
