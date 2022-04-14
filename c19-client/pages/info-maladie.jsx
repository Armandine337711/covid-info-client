import React from "react";
import Desease from "../components/Desease";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const infoMaladie = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className="text-center">Les infos sur la maladie</h1>
      <Desease />
      <Footer />
    </div>
  );
};

export default infoMaladie;
