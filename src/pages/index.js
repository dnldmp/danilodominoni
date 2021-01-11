import Foto from '../components/Foto'
import Menu from '../components/Menu'
import menuStyle from '../../styles/Menu.module.css'

function Home(){
    return(
        <div style={{textAlign: 'center'}}>
            <Foto />
            <div className="center">
                <div className={menuStyle.menuItens}>
                    <Menu 
                        href="https://youtu.be/LXGKX9ALAxk" 
                        title="Novo Vídeo" 
                        subtitle="Venha aprender o que é front-end e back-end e quais tecnologias aprender"
                    />
                    <Menu 
                        href="https://www.hostgator.com.br/40817-77-3-32.html"
                        title="Desconto Hospedagem"
                        subtitle="Ganhe um desconto de 55% na sua hospedagem + domínio totalmente grátis"
                    />
                    <Menu 
                        href="https://www.upwork.com/ab/flservices/cl/public/org/1348703836003749889"
                        title="Seja meu Cliente"
                        subtitle="Faça uma proposta para que eu desenvolva o seu projeto :)"
                    />
                    <Menu 
                        href="https://bit.ly/3k6bNu1" 
                        title="YouTube" 
                        subtitle="Local para ver conteúdos incríveis sobre programação"
                    />
                    <Menu 
                        href="https://www.instagram.com/danilodominoni/" 
                        title="Instagram" 
                        subtitle="Melhor local para você acompanhar meu dia a dia."
                    />
                    <Menu 
                        href="https://t.me/joinchat/KaBbHhVvoL5VbiXyHm3BAg" 
                        title="Telegram" 
                        subtitle="Fique por dentro de todas as novidades."
                    />
                    {/* <Menu 
                        href="/portifolio" 
                        title="Portifólio" 
                        subtitle="Conheça os meus melhores projetos."
                    /> */}
                    <Menu 
                        href="https://github.com/dnldmp/" 
                        title="GitHub" 
                        subtitle="Da uma olhada na minha stack e nos meus códigos."
                    />
                    <Menu 
                        href="https://transferwise.com/invite/u/danilod586" 
                        title="TransferWise" 
                        subtitle="Conheça como você pode enviar dinheiro para fora do brasil de forma rápida e barata"
                    />
                </div>
            </div>
            <a href="https://www.hostgator.com.br/40817-77-1-837.html" target="_blank" rel="nofollow">
                <img style={{border:0, width:336, height:280}} src="https://latam-files.hostgator.com/br/afiliados/hospedagem/336x280.png" alt="hostgator"/>
            </a>
        </div>
    )
}
export default Home;