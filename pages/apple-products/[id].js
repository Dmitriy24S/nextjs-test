import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Product({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>{product.id}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{id}</h1>
        <div className="image-container">
          {product.image.map((item) => {
            return <img src={item.image} height="600px" width="400px" />;
          })}
        </div>
      </main>
    </div>
  );
}

// Server Side Render SSR

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { product: data },
  };
}

// Static Generation

// export async function getStaticProps({ params }) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { product: data },
//     }
// }

// export async function getStaticPaths() {

//     const req = await fetch('http://localhost:3000/products.json');
//     const data = await req.json();

//     const paths = data.map(item => {
//         return { params: { id: item } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }
