import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <nav className={styles.mainNav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={`${styles.main} ${inter.className}`}>
        <h1>Hunting Coder</h1>
        <div className={styles.imgwrap}>
          <Image
            className={styles.img}
            src="/code pic.jpg"
            alt=""
            width={180}
            height={100}
          />
        </div>

        <p className={styles.description}>Get started to help coders</p>
        <div className={styles.blogs}>
          <div className="blogItems">
            <h3>How to learn javascript in 2024</h3>
            <p>Javascript is the language to design logic for web</p>
          </div>
        </div>

        <div className={styles.blogs}>
          <div className="blogItems">
            <h3>How to learn javascript in 2024</h3>
            <p>Javascript is the language to design logic for web</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className="blogItems">
            <h3>How to learn javascript in 2024</h3>
            <p>Javascript is the language to design logic for web</p>
          </div>
        </div>
      </main>
    </>
  );
}
