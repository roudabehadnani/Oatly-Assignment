import Image from "next/image";
import styles from "./page.module.css";
import data from "../data/data.json";
import ArticleMeta from "@/components/ArticleMeta/ArticleMeta";
import Heading from "@/components/Heading/Heading";
import Prelude from "@/components/Prelude/Prelude";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import ParagraphContentRow from "@/components/Paragraphs/ParagraphContentRow";
import ParagraphContentColumn from "@/components/Paragraphs/ParagraphContentColumn";

export default function Home() {
  const paragraphRowData = data.paragraphs.slice(0, 3);
  const paragraphColumnData = data.paragraphs.slice(3);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.rowTop}>
          <div className={styles.titleBox}>
            <Heading title={data.title} />
          </div>
          <div className={styles.rowTopLeft}>
            <ArticleMeta author={data.author} category={data.category} publishedAt={data.publishedAt} />
            <div className={styles.preludeWrapper}>
              <Prelude prelude={data.prelude} />
            </div>
            <ParagraphContentRow paragraphRowData={paragraphRowData} />
          </div>
          <div className={styles.rowTopRight}>
            <ImageComponent />
          </div>
        </div>
        <div className={styles.rowBottom}>
          <ParagraphContentColumn paragraphColumnData={paragraphColumnData} />
        </div>
      </div>
    </div>
  );
}
