import React from "react";
import styles from "./FeaturedMovie.module.css";

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let descr = item.overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + "...";
  }

  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featuredvertical}>
        <div className={styles.featuredhorizontal}>
          <div>{item.id}</div>
          <div className={styles.featuredname}>{item.original_name}</div>
          <div className={styles.featuredinfo}>
            <div className={styles.featuredpoints}>
              {item.vote_average} pontos
            </div>
            <div className={styles.featuredyear}>{firstDate.getFullYear()}</div>
            <div className={styles.featuredseasons}>
              {item.number_of_seasons} temporada
              {item.number_of_season !== 1 ? "s" : ""}
            </div>
          </div>
          <div className={styles.featureddescription}>{descr}</div>
          <div className={styles.featuredbuttons}>
            <a
              href={`/watch/${item.id}`}
              className={styles.featuredwatchbutton}
            >
              ► Assistir
            </a>
            <a
              href={`/list/add/${item.id}`}
              className={styles.featuredmylistbutton}
            >
              + Minha Lista
            </a>
          </div>
          <div className={styles.featuredgenres}>
            Gêneros: <strong> {genres.join(", ")} </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
