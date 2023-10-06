import React from "react";
import styles from "./Card.module.css";

const Card = ({ image_url, followers, title }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_inner_container}>
        <div className={styles.card_image}>
          <img src={image_url} alt={title} />
        </div>
        <div className={styles.card_pill}>{followers} Follows</div>
      </div>
      <div className={styles.card_title}>{title}</div>
    </div>
  );
};

export default Card;
