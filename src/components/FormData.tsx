import styles from '../styles/components/FormData.module.css';
import InputMask from 'react-input-mask';
import * as gtag from '../lib/gtag';

export function FormData() {
  const registerClient = (e) => {
    setTimeout(() => {
      e.target.reset();
    }, 2000);
    gtag.event({
      action: 'submit_form_with_data',
      category: 'homepage',
      label: 'Form sended',
      value: 'Form send successful',
    });
    alert('Solicitação enviada com sucesso');
  };

  return (
    <div className={styles.formDataContainer}>
      <section>
        <div>
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
              className={styles.daniloPhoto}
              src="/aboutme.jpg"
              alt="Imagem do Danilo Dominoni"
            />
          </h1>
        </div>
        <div>
          <iframe
            className={styles.iframe}
            title="stonks"
            width="0"
            height="0"
            frameBorder="0"
            name="dummyframe"
            id="dummyframe"
          />
          <form
            onSubmit={registerClient}
            action="/api/client"
            method="POST"
            target="dummyframe"
            className={styles.formulario}
          >
            <h3>
              Solicite um orçamento agora e receba um roadmap do seu projeto em
              até 5 dias
            </h3>
            <input
              className={styles.inputForm}
              type="text"
              required
              name="name"
              placeholder="Primeiro nome"
            />
            <input
              className={styles.inputForm}
              type="text"
              required
              name="surname"
              placeholder="Sobrenome"
            />
            <input
              className={styles.inputForm}
              type="text"
              required
              name="email"
              placeholder="seu@email.com"
            />
            <InputMask
              className={styles.inputForm}
              type="text"
              required
              name="phone"
              placeholder="(41) 99999-9999"
              mask="(99) 99999-9999"
              maskChar=""
            />
            <button className={styles.button} type="submit">
              Quero fazer um orçamento
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
