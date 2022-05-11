import Head from 'next/head';
import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

type MainLayoutProps = {
  children: React.ReactNode; // added type for children
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
