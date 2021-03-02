import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css';
import { FormData } from '../components/FormData';
import { Benefits } from '../components/Benefits';

class Portifolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const scroll = true;

    return (
      <div>
        <div className={styles.backgroundImage} id="form">
          <div className={styles.backgroundOpacity}>
            <div className={styles.homeContainer}>
              <FormData />
            </div>
          </div>
        </div>
        <div className={styles.homeContainer}>
          <Benefits />
        </div>
      </div>
    );
  }
}

export default Portifolio;
