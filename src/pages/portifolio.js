import style from '../../styles/Portifolio.module.css'

export default function Portifolio(){
    return (
        <div>
            <section className={style.sectionAbout}>  
                <div className={style.center}>
                    <h2>Sobre mim</h2>
                    <div className={style.fifityp}>
                        <img src="/aboutme.jpg" />
                    </div>
                    <div className={style.fifityp}>
                        <p>Oi, meu nome é Danilo Dominoni, sou Desenvolvedor de Sistemas desde 2014.</p>
                        <p>Ja parou para pensar, como seria aproveitar a vida ao máximo, 
                            sem preocupações? Hoje eu posso te proporcionar tudo isso, durante o desenvolvimento
                            do seu projeto dos sonhos. Por este motivo, separei abaixo alguns dos meus 
                            melhores trabalhos para você me cohecer melhor.    
                        </p>
                    </div>
                    <div className="clear"></div>
                    {/* <style jsx global>{`
                        body {
                            background: black;
                        }
                    `}</style>        */}
                </div>
            </section>
        </div>
    )
}