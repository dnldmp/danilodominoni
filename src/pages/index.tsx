import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css';
import { FormData } from '../components/FormData';

class Portifolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const scroll = true;

    return (
      <div>
        <div className={styles.backgroundImage}>
          <div className={styles.backgroundOpacity}>
            <div className={styles.homeContainer}>
              <FormData />
            </div>
          </div>
        </div>
      </div>
      /* <GoogleAnalytics />
        <section id="form" className={styles.sectionAbout}>

        </section>
        <div className="clear">
          <section className={styles.sectionHelp}>
            <div className={styles.center}>
              <div className={styles.flexcolumn}>
                <div>
                  <img src="/danilodominoni.png" alt="imagem1" />
                  <p>danilo</p>
                  <Link href="#form" scroll={scroll}>
                    <button type="button" className={styles.button}>
                      Quero falar com os especialistas
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/danilodominoni.png" alt="imagem1" />
                  <p>danilo</p>
                  <Link href="#form" scroll={scroll}>
                    <button type="button" className={styles.button}>
                      Quero falar com os especialistas
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/danilodominoni.png" alt="imagem1" />
                  <p>danilo</p>
                  <Link href="#form" scroll={scroll}>
                    <button type="button" className={styles.button}>
                      Quero falar com os especialistas
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>*/
    );
  }
}

export default Portifolio;
