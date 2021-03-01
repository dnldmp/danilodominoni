import React from 'react';
import styles from '../styles/components/Foto.module.css';

export default function Foto() {
  return (
    <div className={styles.fotoContainer}>
      <div className={styles.foto}>
        <img src="/danilodominoni.png" alt="danilo dominoni" />
      </div>
      <h1>Danilo Dominoni</h1>
      <p>Tudo se resolve com um bom código!</p>
    </div>
  );
}
