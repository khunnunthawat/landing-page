import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import Vercel from '~/svg/Vercel.svg';

const IndexPage = () => {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center space-y-8 text-center'>
          <Vercel className='text-5xl' />
          <h2 className='text-3xl text-gray-900 md:text-4xl'>
            Next.js +<span className='text-blue-500'>Tailwind CSS</span> +
            TypeScript Starter
          </h2>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky
          </p>
          <ButtonLink className='mt-6' href='/components' variant='dark'>
            See all components
          </ButtonLink>
          <ArrowLink
            href='https://github.com/khunnunthawat/landing-page'
            className='mt-2 flex justify-center text-sm'
          >
            See the repository
          </ArrowLink>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
