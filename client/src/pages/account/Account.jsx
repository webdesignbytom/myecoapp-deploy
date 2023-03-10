import React from 'react';
import { Link } from 'react-router-dom';
// Context
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import { Navbar, PhoneNav } from '../../components/nav/Navbar';
// Data
import {
  PrivacyData,
  AccountData,
  GameData,
  HelpData,
  UsefulLinks,
} from '../../utils/AccountLinks';

function Account() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='grid bg-white dark:bg-black'>
          <div className='lg:pt-4'>
            <Navbar />
          </div>
          <section className='grid grid-rows-a-1fr bg-eco-green dark:bg-black mt-4 lg:mx-8 font-poppins mx-2'>
            <div className='text-center py-4 lg:py-8'>
              <h2 className='text-3xl text-white'>Account</h2>
            </div>
            {/* Options */}
            <div className='grid md:grid-cols-3 lg:grid-cols-5 px-2 lg:px-6 text-center'>
              {/* Personal Data */}
              <section>
                <div className='account__header'>
                  <h3>Personal Data</h3>
                </div>
                <ul className='my-2'>
                  {AccountData.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link className='account__link' to='/profile'>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Game Data */}
              <div className='lg:hidden border-b-2 border-white my-2'></div>
              <section>
                <div className='account__header'>
                  <h3>Game Data</h3>
                </div>
                <ul className='my-2'>
                  {GameData.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link className='account__link' to='/profile'>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <div className='lg:hidden border-b-2 border-white my-2'></div>

              {/* Privacy Data */}
              <section>
                <div className='account__header'>
                  <h3>Privacy Data</h3>
                </div>
                <ul className='my-2'>
                  {PrivacyData.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link className='account__link' to='/profile'>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Help Data */}
              <section>
                <div className='account__header'>
                  <h3>Help Info</h3>
                </div>
                <ul className='my-2'>
                  {HelpData.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link className='account__link' to='/profile'>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Links */}
              <section>
                <div className='account__header'>
                  <h3>Privacy Data</h3>
                </div>
                <ul className='my-2'>
                  {UsefulLinks.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link className='account__link' to='/profile'>
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Account;
