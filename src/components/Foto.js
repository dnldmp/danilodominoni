import React from "react";
import style from "../../styles/Home.module.css";

export default function Foto() {
  return (
    <section className={style.fotoSection}>
      <div className="center">
        <div className={style.foto}>
          <img src="/danilodominoni.png" alt="danilo dominoni" />
        </div>
        <h1>Danilo Dominoni</h1>
        <p>Tudo se resolve com um bom código!</p>
      </div>
    </section>
  );
}
