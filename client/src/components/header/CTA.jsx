import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className='grid grid-flow-col space-x-0 w-full gap-4'>
      <Link className='bg-eco-green dark:bg-eco-green-dark border-2 rounded-md px-4 py-2 text-center text-white dark:text-black dark:border-eco-green hover:text-eco-green-dark active:text-slate-100 hover:bg-white hover:border-eco-green'>
        See More
      </Link>
      <Link className='border-2 rounded-md text-center text-eco-green-dark border-eco-green hover:bg-eco-green px-4 py-2 hover:text-white dark:text-eco-green hover:border-eco-green-dark'>
        Projects
      </Link>
      <Link className='border-2 rounded-md text-center text-eco-green-dark dark:text-eco-green border-eco-green hover:bg-eco-green px-4 py-2 hover:text-white hover:border-eco-green-dark'>
        Goals
      </Link>
    </div>
  );
}

export default CTA;
