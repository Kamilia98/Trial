'use client'
import Header from '@/Components/Header';
import styles from './page.module.css';
import Description from '@/Components/Description';
import Link from 'next/link';
import { useEffect, useState } from 'react';

let x = false;
function Home() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    console.log(4);
  }, [success]);
  return (
    <main className={styles.main}>
      <Link href="./about">Go</Link>
    </main>
  );
}
export default Home;
