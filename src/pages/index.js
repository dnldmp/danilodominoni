import Foto from '../components/Foto'
import style from '../../styles/Home.module.css'

function Home(){
    return(
        <div>
           <Foto />

            <section className={style.menuSection}>
                <div className="center">
                    <ul className={style.menuItens}>
                        <a href="https://bit.ly/3k6bNu1"><li>youtube</li></a>
                        <a href="https://www.instagram.com/danilodominoni/"><li>instagram</li></a>
                        <a href="#"><li>agende sua reunião</li></a>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Home;