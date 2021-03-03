import styles from '../styles/components/Steps.module.css';
import Link from 'next/link';
import animationData from '../lotties/keywords.json';
import Lottie from 'react-lottie';

export function Steps() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={styles.stepsContainer}>
      <header>
        <h3>Etapas</h3>
      </header>
      <main>
        <div>
          <Lottie options={defaultOptions} />
        </div>
        <div>
          <h4>
            <strong>1</strong>
            <strong>.</strong>
            Prototipação
          </h4>
          <h4>
            <strong>2</strong>
            <strong>.</strong>
            Arquitetura
          </h4>
          <h4>
            <strong>3</strong>
            <strong>.</strong>
            Back-end
          </h4>
          <h4>
            <strong>4</strong>
            <strong>.</strong>
            Front-end
          </h4>
        </div>
      </main>
      <footer>
        <Link href="#form" scroll={true}>
          <button type="button">
            SIM, EU QUERO TIRAR MINHA IDEIA DO PAPEL
          </button>
        </Link>
      </footer>
    </div>
  );
}
