import Header from '@/Components/Header';
import styles from './page.module.css';
import Description from '@/Components/Description';

let x = false;
function Home() {
  return (
    <main className={styles.main}>
      {x && <Header text="Hello m" />}
      <Description desc="let's do it " />
    </main>
  );
}
export default Home;
