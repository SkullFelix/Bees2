import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Welcome to Hive!</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <h2 className={styles.selectBoxTitle}>Mint a new BEE</h2>
          <p className={styles.selectBoxDescription}>
            You can claim 5 NFT per wallet.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <h2 className={styles.selectBoxTitle}>Stake Your Bees!</h2>
          <p className={styles.selectBoxDescription}>
            STAKE your <b>BEES</b>{" "}
            and receive <b>HoneyBees</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
