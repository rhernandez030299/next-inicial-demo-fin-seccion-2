import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'


export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}