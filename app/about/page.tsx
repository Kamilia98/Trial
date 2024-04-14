'use client';
import Header from '@/Components/Header';
import styles from './page.module.css';
import Description from '@/Components/Description';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function About() {
  const [counter, setCounter] = useState(0);

  const dothis = () => {
    setCounter(counter + 1);
  };
  
  return (
    <main className={styles.main}>
      <div>{counter}</div>
      <button onClick={dothis}>Click</button>
      <Link href="./"> Home</Link>
    </main>
  );
}

export default About;
