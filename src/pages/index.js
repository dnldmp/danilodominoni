import Foto from '../components/Foto'
import style from '../../styles/Home.module.css'

function Home(){
    return(
        <div>
           <Foto />

            <section className={style.menuSection}>
                <div className="center">
                    <div className={style.menuItens}>
                        <a href="https://youtu.be/SMi_srTBMnk">
                            <h3>Novo Vídeo</h3>
                            <p>Venha conferir meu novo vídeo sobre git.</p>
                        </a>
                        <a href="https://bit.ly/3k6bNu1">
                            <h3>YouTube</h3>
                            <p>Local para ver conteúdos incríveis sobre programação</p>
                        </a>
                        <a href="https://www.instagram.com/danilodominoni/">
                            <h3>Instagram</h3>
                            <p>Melhor local para você acompanhar meu dia a dia.</p>
                        </a>
                        <a href="https://t.me/joinchat/KaBbHhVvoL5VbiXyHm3BAg">
                            <h3>Telegram</h3>
                            <p>Fique por dentro de todas as novidades.</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;