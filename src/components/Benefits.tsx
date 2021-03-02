import styles from '../styles/components/Benefits.module.css';
import Lottie from 'react-lottie';
import animationData from '../lotties/work.json';
import React from 'react';
import Link from 'next/link';

export function Benefits() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.benefitsContainer}>
      <header>
        <h3>Time qualificado</h3>
      </header>
      <main>
        <div>
          <Lottie options={defaultOptions} />
        </div>
        <div>
          <p>
            Contamos com um time de desenvolvedores qualificados que vão fazer
            sua idea sair do papel
          </p>
        </div>
      </main>
      <footer>
        <Link href="#form" scroll={true}>
          <button type="button">Quero falar com os especialistas</button>
        </Link>
      </footer>
    </div>
  );
}
