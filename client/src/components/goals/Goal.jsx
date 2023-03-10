import React from 'react';

function Goal({ goal }) {
  return (
    <>
      <div>
        <div className='flex justify-center mt-4 mb-2'>
          <h3 className='small__title__hover'>
            {goal.title}
          </h3>
        </div>
        <p className='whiteText__container'>{goal.content}</p>
      </div>
      <div className='border-2 group-hover:border-2 border-white group-hover:border-eco-green-dark rounded-md overflow-hidden m-2 box-content md:object-cover lg:object-cover'>
        <img className='w-full h-[250px]' src={goal.image} alt={goal.title} />
      </div>
    </>
  );
}

export default Goal;
