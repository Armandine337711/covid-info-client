import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className="text-center">Covid Info - Les actualités</h1>
      <News />
      <Footer />
    </div>
  );
}
