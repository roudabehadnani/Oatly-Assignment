import React from "react";
import styles from "./ArticleMeta.module.css";

interface ArticleMetaProps {
  author: string;
  category: string;
  publishedAt: string;
}

function ArticleMeta({ author, category, publishedAt }: ArticleMetaProps) {
  return (
    <div className={styles.articleMetaContainer}>
      <div className={styles.authorCategory}>
        <p>
          BY {author} &nbsp;•&nbsp; {category}
        </p>
      </div>
      <div className={styles.publishedAt}>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
}

export default ArticleMeta;
