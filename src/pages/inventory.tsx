import React from 'react';
import Foto from '../components/Foto';
import Menu from '../components/Menu';
import styles from '../styles/pages/Inventory.module.css';

function Inventory() {
  return (
    <div className={styles.inventoryContainer}>
      <Foto />
      <Menu />
      <a
        href="https://www.hostgator.com.br/40817-77-1-837.html"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ border: 0, width: 336, height: 280 }}
          src="https://latam-files.hostgator.com/br/afiliados/hospedagem/336x280.png"
          alt="hostgator"
        />
      </a>
    </div>
  );
}
export default Inventory;
