import React from "react";
import Card from "../Card/Card";
import styles from "./GridOfCards.module.css";

const GridOfCards = ({ albums }) => {
  return (
    <div style={{ margin: "25px" }}>
      <div className={styles.title_container}>
        <span className={styles.left_heading}>Top Albums</span>
        <span className={styles.right_heading}>Collapse</span>
      </div>
      <div className={styles.container}>
        {albums.map((album) => {
          return (
            <Card
              image_url={album.image}
              followers={album.follows}
              title={album.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridOfCards;
