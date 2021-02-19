import React, { Component } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import style from '../../styles/Portifolio.module.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

class Portifolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const scroll = true;

  render() {
    const registerClient = () => {
      alert('Solicitação enviada com sucesso');
    };

    return (
      <div>
        <GoogleAnalytics />
        <section id="form" className={style.sectionAbout}>
          <Image
            className={style.siteBackground}
            layout="fill"
            objectFit="cover"
            alt="imagem de fundo site"
            objectPosition="center"
            src="/sitebackground.jpg"
          />
          <div className={style.center}>
            <div className={style.fifityp}>
              <h1>
                <p>
                  Desenvolva seu
                  <strong> software </strong>
                  ou
                  <strong> aplicativo </strong>
                  com
                  <strong> Danilo Dominoni</strong>
                </p>
                <img
                  className={style.daniloPhoto}
                  src="/aboutme.jpg"
                  alt="Imagem do Danilo Dominoni"
                />
              </h1>
            </div>
            <div className={style.fifityp}>
              <iframe
                className={style.iframe}
                title="stonks"
                width="0"
                height="0"
                border="0"
                name="dummyframe"
                id="dummyframe"
              />
              <form
                onSubmit={registerClient}
                action="/api/client"
                method="POST"
                target="dummyframe"
                className={style.formulario}
              >
                <h3>
                  Solicite um orçamento agora e receba um roadmap do seu projeto
                  em até 5 dias
                </h3>
                <input
                  className={style.inputForm}
                  type="text"
                  required
                  name="name"
                  placeholder="Primeiro nome"
                />
                <input
                  className={style.inputForm}
                  type="text"
                  required
                  name="surname"
                  placeholder="Sobrenome"
                />
                <input
                  className={style.inputForm}
                  type="text"
                  required
                  name="email"
                  placeholder="seu@email.com"
                />
                <input
                  className={style.inputForm}
                  type="text"
                  required
                  name="phone"
                  placeholder="(41) 99999-9999"
                />
                <button className={style.button} type="submit">
                  Quero fazer um orçamento
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <div className="clear">
        <section className={style.sectionHelp}>
          <div className={style.center}>
            <div>
              <img src="/danilodominoni.png" alt="imagem1" />
              <p>danilo</p>
              <Link href="#form" scroll={scroll}>
                <button type="button" className={style.button}>
                  Quero falar com os especialistas
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div> */}
      </div>
    );
  }
}

export default Portifolio;
