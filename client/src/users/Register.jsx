import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../context/ToggleContext';
import { Navbar, PhoneNav } from '../components/nav/Navbar';

function Register() {
  const { toggleNavigation } = useContext(ToggleContext);
  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black h-screen'>
          <div className='h-screen grid lg:pt-4'>
            <Navbar />
            <article className='hidden lg:block text-eco-green text-center text-6xl font-extrabold'>
              <h1>myecoapp</h1>
            </article>
            <section className='dark:bg-black grid justify-center'>
              <div className='container px-6 py-6 h-full'>
                <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800 lg:mb-6'>
                  <div className='flex flex-col lg:pl-12 md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
                  <div className='section__title'>
                      <h1 className='my-4'>REGISTER</h1>
                    </div>
                    <div>
                      <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                        className='w-full lg:w-eighty'
                        alt='Phone'
                      />
                    </div>
                  </div>
                  <section className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                    <form>
                      {/* <!-- Email input --> */}
                      <div className='mb-6'>
                        <input
                          type='text'
                          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                          placeholder='Email address'
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <div className='mb-6'>
                        <input
                          type='password'
                          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                          placeholder='Password'
                        />
                      </div>

                      {/* <!--Confirm Password input --> */}
                      <div className='mb-6'>
                        <input
                          type='password'
                          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                          placeholder='Confirm Password'
                        />
                      </div>

                      {/* <!-- Submit button --> */}
                      <button
                        type='submit'
                        className='inline-block px-7 py-3 bg-eco-green text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-eco-green-med hover:shadow-lg focus:bg-eco-green-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-eco-green-dark active:shadow-lg transition duration-150 ease-in-out w-full'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Register
                      </button>

                      <div className='flex items-center my-4 before:flex-1 before:border-t before:border-eco-green before:mt-0.5 after:flex-1 after:border-t after:border-eco-green after:mt-0.5'>
                        <p className='text-center font-semibold mx-4 mb-0 dark:text-white'>
                          OR
                        </p>
                      </div>

                      <Link
                        className='bg-eco-green-med focus:bg-eco-green-light active:bg-eco-green-dark px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
                        href='#!'
                        role='button'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        {/* <!-- Facebook --> */}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 320 512'
                          className='w-3.5 h-3.5 mr-2'
                        >
                          <path
                            fill='currentColor'
                            d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                          />
                        </svg>
                        Register with Facebook
                      </Link>
                      <Link
                        className='bg-eco-green-dark px-7 py-3 focus:bg-eco-green-pale active:bg-eco-green-dark text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center'
                        href='#!'
                        role='button'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        {/* <!-- Gmail --> */}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          className='w-3.5 h-3.5 mr-2'
                        >
                          <path
                            fill='currentColor'
                            d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                          />
                        </svg>
                        Register with Gmail
                      </Link>
                    </form>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
