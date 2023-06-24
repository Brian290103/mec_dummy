import Wrapper from '@/components/Wrapper';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import Image from 'next/image';
import React from 'react';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const onSubmit = async (values, actions, router) => {
  // console.log('Submitted');
  // console.log(values);
  axios
    .post('api/admin/login', values, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      // console.log(res.data);
      // console.log(res.status);
      // console.log(res.data.message);
      if (res.data.message === 'Login successful') {
        console.log('Success');
        // Cookies.set('username', values.username);
        // Cookies.set('password', values.password);

        Cookies.set(
          'credentials',
          JSON.stringify({
            username: values.username,
            password: values.password,
          })
        );

        router.push('/admin/dashboard');
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      // console.error(error);
    });

  // try {
  //   const result = await signIn('credentials', {
  //     redirect: false, // Prevent redirection
  //     username: values.username,
  //     password: values.password,
  //   });

  //   if (result.error) {
  //     console.log(result.error);
  //   } else {
  //     console.log('Login successful');
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
const Login = () => {
  const router = useRouter();

  // Check if the user is logged in
  const isLoggedIn = !!Cookies.get('credentials');
  // If the user is logged in, redirect to the dashboard
  if (isLoggedIn) {
    router.push('/admin/dashboard');
  }

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
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(3, 'Minimum 3 characters')
        .required('Username is required'),
      password: yup
        .string()
        .min(8, 'Minimum 8 characters')
        .required('Password is required'),
    }),
    onSubmit: (values, actions) => onSubmit(values, actions, router),
  });

  // If the user is not logged in, render the login page

  return (
    <Wrapper className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="grid-cols-2 gap-5 md:grid">
        {/* LEFT COL */}
        <div className="flex-col items-center justify-center hidden md:flex">
          <Image
            src="/logo.jpg"
            width={2000}
            height={2000}
            alt="logo"
            className="w-[100px] h-[100px] rounded-full"
          />
          <h1 className="text-3xl font-medium">Maasai Education Center</h1>
          <span className="text-xl">the Style Hotel School</span>
          <p className="text-red-500 ">Admin Login</p>
        </div>
        {/* RIGHT COL */}
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <Image
              src="/logo.jpg"
              width={2000}
              height={2000}
              alt="logo"
              className="w-[100px] h-[100px] rounded-full"
            />
            <p className="mt-3 text-xl font-medium text-red-500">Admin Login</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="sec">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={
                  errors.username && touched.username
                    ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                    : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                }
              />
              {errors.username && touched.username && (
                <div className="font-medium text-red-500">
                  {errors.username}
                </div>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="sec">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  errors.password && touched.password
                    ? 'ring-red-500 w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 focus:ring-red-500'
                    : 'w-full px-2 py-2 mt-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500'
                }
              />
              {errors.password && touched.password && (
                <div className="font-medium text-red-500">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="flex items-center pt-2">
              {' '}
              <button
                type="submit"
                className="w-full p-3 text-white transition-transform bg-red-500 rounded-lg active:scale-95 hover:bg-red-500/80"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
