import React from 'react';
// Data
import { GoalsList } from '../../utils/GoalsList';
// Components
import Goal from './Goal';

function Goals() {
  return (
    <>
      <section id='goals' className='section__container'>
        <section className='flex flex-col justify-between w-full'>
          <article className='pb-4'>
            <h4 className='small__title'>What will be do?</h4>
            <h2 className='section__title'>Goals</h2>
          </article>
          <section className=''>
            <article className='mb-2'>
              <p className='text__container mx-6'>
                We have three main goals we hope to achieve. Again everything we
                are doing, is to try and help the environment and people in need
                of help with rising fuel costs. We have three main goals we hope to achieve. Again everything we
                are doing, is to try and help the environment and people in need
                of help with rising fuel costs.
              </p>
            </article>
          </section>

          {/* Secondary info */}
          <section className='grid'>
            <div className='text-center mt-2 mb-6'>
              <h3 className='secondary__title'>Our Ideas</h3>
            </div>
            <section className='grid lg:grid-cols-3 gap-4'>
              {GoalsList.map((goal, index) => {
                return (
                  <article className='group border-2 border-eco-green-dark rounded-lg overflow-hidden bg-eco-green hover:bg-white hover:border-eco-green-dark hover:border-2 dark:hover:bg-black'>
                    <Goal goal={goal} key={index} />
                  </article>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Goals;