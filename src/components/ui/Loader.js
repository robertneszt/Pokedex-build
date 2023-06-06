import React from "react";
import styles from "./Loader.module.css";
import pokeballImage from "../../img/pokeballloader.png";
//spins a pokeball as a loading symbol. Could 
function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loaderImage} src={pokeballImage} alt="Loading" />
    </div>
  );
}

export default Loader;