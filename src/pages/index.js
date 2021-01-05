import Foto from '../components/Foto'
import Menu from '../components/Menu'
import menuStyle from '../../styles/Menu.module.css'

function Home(){
    return(
        <div>
            <Foto />
            <div className="center">
                <div className={menuStyle.menuItens}>
                    <Menu 
                        href="https://youtu.be/uU2ABc57ztU" 
                        title="Novo Vídeo" 
                        subtitle="Venha entender como ser mais produtivo como programador"
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
                </div>
            </div>
        </div>
    )
}
export default Home;