import React from "react";
import styles from "./Card.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Card = ({ image_url, followers=0,likes=0, title, forSongs = false }) => {
  if (forSongs) {
    return (
      <Tippy content="songs">
        <div className={styles.card_container}>
          <div className={styles.card_inner_container}>
            <div className={styles.card_image}>
              <img src={image_url} alt={title} />
            </div>
            <div className={styles.card_pill}>{likes} Likes</div>
          </div>
          <div className={styles.card_title}>{title}</div>
        </div>
      </Tippy>
    );
  } else {
    return (
      <Tippy content="albums">
        <div className={styles.card_container}>
          <div className={styles.card_inner_container}>
            <div className={styles.card_image}>
              <img src={image_url} alt={title} />
            </div>
            <div className={styles.card_pill}>{followers} Follows</div>
          </div>
          <div className={styles.card_title}>{title}</div>
        </div>
      </Tippy>
    );
  }
};

export default Card;
