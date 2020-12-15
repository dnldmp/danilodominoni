import Foto from '../components/Foto'

function Home(){
    return(
        <div>
           <Foto />

            <section className={style.menuSection}>
                <div className="center">
                    <ul class={style.menuItens}>
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