import React from "react";
import { Oswald } from "next/font/google";
import styles from "./Heading.module.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

function Heading({ title }: { title: string }) {
  return <h1 className={`${oswald.className} ${styles.headingContainer}`}>{title}</h1>;
}

export default Heading;
