import styles from '../styles/components/MyProjects.module.css';
import { ProjectList } from './ProjectsList';

export function MyProjects() {
  return (
    <div className={styles.myProjectsContainer}>
      <div>
        <ProjectList
          challenge="Desenvolver um aplicativo capaz de centralizar todos os seguros da
          Bradesco Seguros em um único lugar."
          image="/bsc.png"
        />
        <ProjectList
          challenge="Desenvolver um pomodoro gameficado para acumular xp
          e subir de level toda vez que completa um exercício, o mesmo
          deve ser mostrado somente quando completa um ciclo, ou seja 25
          minutos."
          image="/moveit.png"
        />
        <ProjectList
          challenge="Migrar um ERP que funciona somente no desktop para
          a nuvem."
          image="/gds.png"
        />

        <h4>Gostaria de ver mais projetos?</h4>
        <a href="https://github.com/dnldmp">Entrar no GitHub</a>
      </div>
    </div>
  );
}
