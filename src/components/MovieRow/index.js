import React, { useState } from "react";
import Link from "next/link";
import styles from "./MovieRow.module.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const MovieRow = ({ title, items, type }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.movieRowleft} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowright} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className={styles.movieRowlistarea}>
        <div
          className={styles.movieRowlist}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.movieRowitem}>
                <Link href={`/View/${item.id}`}>
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}?${item.poster_path}:${item.backdrop_path}`}
                    />
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
