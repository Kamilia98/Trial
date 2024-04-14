import Header from '@/Components/Header';
import styles from './page.module.css';

function Description() {
  return (
    <>
      <div>DES</div>
      <div>DES</div>
    </>
  );
}
function Home() {
  return (
    <main className={styles.main}>
      <Header text="Hello m" />
      <Description />
    </main>
  );
}
export default Home;
