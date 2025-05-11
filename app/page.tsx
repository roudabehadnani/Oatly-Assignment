import Image from "next/image";
import styles from "./page.module.css";
import data from "../data/data.json";
import ArticleMeta from "@/components/ArticleMeta/ArticleMeta";
import Heading from "@/components/Heading/Heading";

export default function Home() {
  return (
    <div className={styles.page}>
      <ArticleMeta author ={data.author} category ={data.category} publishedAt ={data.publishedAt}/>
      <Heading title={data.title}/>
    </div>
  );
}
