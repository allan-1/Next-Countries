import Head from 'next/head';
import Country from '../components/country/Country';
import Layout from '../components/layout/Layout';
import Search from '../components/searchfilter/Search';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <Search />
          <Country />
        </Layout>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://allanmuturi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Allan Muturi
        </a>
      </footer>
    </div>
  );
}
