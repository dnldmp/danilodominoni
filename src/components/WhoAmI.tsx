import styles from '../styles/components/WhoAmI.module.css';
import React from 'react';
import Typewriter from 'typewriter-effect';

export function WhoAmI() {
  return (
    <div className={styles.whoAmIContainer}>
      <header>
        <h3>Quem sou eu</h3>
      </header>
      <main>
        <img
          className={styles.daniloPhoto}
          src="/aboutme.jpg"
          alt="Imagem do Danilo Dominoni"
        />
        <div>
          <p>
            <strong>Oi tudo bem?</strong>
          </p>
          <p>
            <br />
            Prazer eu sou o Danilo Dominoni, já trabalhei em diversos projetos
            diverentes. Um dos mais conhecidos com toda certeza foi o aplicativo
            da Bradesco Seguros.
            <p>
              <br />
              <strong>Seja você mais um case de sucesso!</strong>
            </p>
          </p>
        </div>
      </main>
      <footer>
        <div>
          <Typewriter
            onInit={() => {}}
            options={{
              strings: [
                'HTML',
                'CSS',
                'JAVASCRIPT',
                'ANGULAR',
                'REACT',
                'JAVA',
                'NODE',
                'IONIC',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </footer>
    </div>
  );
}
