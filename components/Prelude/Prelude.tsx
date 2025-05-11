import React from "react";
import styles from "./Prelude.module.css";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Prelude({ prelude }: { prelude: string }) {
  return <div className={`${courierPrime.className} ${styles.preludeContainer}`}>{prelude}</div>;
}

export default Prelude;
