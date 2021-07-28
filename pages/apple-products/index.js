import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function AppleProductList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Apple Products</h1>
        <ul>
          <li>
            <Link href="/apple-products/iPhones">
              <a>iPhones</a>
            </Link>
          </li>
          <li>
            <Link href="/apple-products/macbooks">
              <a>MacBooks</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
