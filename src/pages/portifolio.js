import React from 'react';
import style from '../../styles/Portifolio.module.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function Portifolio() {
  const appresentation = `Ja parou para pensar, como seria aproveitar o seu tempo de
    forma mais eficiente, focando nas coisas mais importantes sem preocupações? 
    Hoje eu posso te proporcionar tudo isso, durante o desenvolvimento
    do seu projeto. Por este motivo, separei abaixo alguns dos meus 
    melhores trabalhos para você me cohecer melhor.`;
  return (
    <div>
      <GoogleAnalytics />
      <style jsx global>
        {`
          body {
            background: black;
          }
        `}
      </style>
      <section className={style.sectionAbout}>
        <div className={style.center}>
          <h2>Sobre mim</h2>
          <div className={style.fifityp}>
            <img src="/aboutme.jpg" alt="sobre" />
          </div>
          <div className={style.fifityp}>
            <p>
              Oi, meu nome é Danilo Dominoni, estou desenvolvendo sistemas desde
              2014.
            </p>
            <p>{appresentation}</p>
          </div>
          <a target="_blank" rel="noreferrer" href="https://bit.ly/3u4e12O">
            <button className={style.contactUsBtn} type="button">
              fale conosco
            </button>
          </a>
        </div>
      </section>
      <div className="clear">
        <section className={style.sectionProject}>
          <div className={style.center}>
            <img src="/background-1-site.png" alt="background" />
          </div>
        </section>
        <section className={style.sectionProject}>
          <div className={style.center}>
            <img src="/lp1.png" alt="background" />
          </div>
        </section>
        <section className={style.sectionProject}>
          <div className={style.center}>
            <img src="/lp2.png" alt="background" />
          </div>
        </section>
      </div>
    </div>
  );
}
