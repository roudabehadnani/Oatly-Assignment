import React from "react";
import { Courier_Prime } from "next/font/google";
import styles from "./ParagraphContentRow.module.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function ParagraphContentRow({ paragraphContent }: { paragraphContent: string[] }) {
  return (
    <div className={`${courierPrime.className} ${styles.paragraphContentRowContainer}`}>
      {paragraphContent.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
}

export default ParagraphContentRow;
