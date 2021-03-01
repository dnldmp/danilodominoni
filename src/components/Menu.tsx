import React from 'react';
import styles from '../styles/components/Menu.module.css';

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <a href="https://youtu.be/LXGKX9ALAxk">
        <h3>Novo Vídeo</h3>
        <p>
          Venha aprender o que é front-end e back-end e quais tecnologias
          aprender
        </p>
      </a>
      <a href="https://www.hostgator.com.br/40817-77-3-32.html">
        <h3>Desconto Hospedagem</h3>
        <p>
          Ganhe um desconto de 55% na sua hospedagem + domínio totalmente grátis
        </p>
      </a>
      <a href="https://bit.ly/3k6bNu1">
        <h3>YouTube</h3>
        <p>Local para ver conteúdos incríveis sobre programação</p>
      </a>
      <a href="https://www.instagram.com/danilodominoni/">
        <h3>Instagram</h3>
        <p>Melhor local para você acompanhar meu dia a dia.</p>
      </a>
      <a href="https://github.com/dnldmp/">
        <h3>GitHub</h3>
        <p>Da uma olhada na minha stack e nos meus códigos.</p>
      </a>
      <a href="https://transferwise.com/invite/u/danilod586">
        <h3>TransferWise</h3>
        <p>
          Conheça como você pode enviar dinheiro para fora do brasil de forma
          rápida e barata
        </p>
      </a>
    </div>
  );
}

export default Menu;
