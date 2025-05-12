import React from "react";
import styles from "./ImageComponent.module.css";
import Image from "next/image";

function ImageComponent() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/NordGen.webp"
        alt="Pic of NordGen"
        fill
        priority
        sizes="100vw"
        style={{
        objectFit: "cover",
        objectPosition: "bottom",
        }}
      />
    </div>
  );
}

export default ImageComponent;
