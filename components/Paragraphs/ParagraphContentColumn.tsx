import React from "react";
import { Courier_Prime } from "next/font/google";
import styles from "./ParagraphContentColumn.module.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function ParagraphContentColumn({ paragraphContent }: { paragraphContent: string[] }) {
  return (
    <div className={`${courierPrime.className} ${styles.paragraphContentColumnContainer}`}>
      {paragraphContent.map((paragraph, index) => {
        return (
          <p className={styles.paragraphColumn} key={index}>
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

export default ParagraphContentColumn;
