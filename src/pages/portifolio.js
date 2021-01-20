import style from '../../styles/Portifolio.module.css'

export default function Portifolio(){
    const appresentation = `Ja parou para pensar, como seria aproveitar a vida ao máximo, 
    sem preocupações? Hoje eu posso te proporcionar tudo isso, durante o desenvolvimento
    do seu projeto dos sonhos. Por este motivo, separei abaixo alguns dos meus 
    melhores trabalhos para você me cohecer melhor.`;
    return (
        <div>
            <style jsx global>{`
                body {
                    background: black;
                }
            `}</style>  
            <section className={style.sectionAbout}>  
                <div className={style.center}>
                    <h2>Sobre mim</h2>
                    <div className={style.fifityp}>
                        <img src="/aboutme.jpg" />
                    </div>
                    <div className={style.fifityp}>
                        <p>Oi, meu nome é Danilo Dominoni, sou Desenvolvedor de Sistemas desde 2014.</p>
                        <p>{appresentation}</p>
                    </div>
                    <div className="clear"></div>
     
                </div>
            </section>
            <section className={style.sectionProject}>
                <div className={style.center}>
                    <img src="/background-1-site.png" />
                </div>
            </section>
            <section className={style.sectionProject}>
                <div className={style.center}>
                    <img src="/lp1.png" />
                </div>
            </section>
            <section className={style.sectionProject}>
                <div className={style.center}>
                    <img src="/lp2.png" />
                </div>
            </section>
        </div>
    )
}