import style from '../../styles/Home.module.css'

export default function Foto(){
    return(
        <section className={style.fotoSection}>
            <div className="center">
                <div className={style.foto}>
                    <img src="/danilodominoni.png" />
                </div>
                <h2>Danilo Dominoni</h2>
            </div>
        </section>
    )
}