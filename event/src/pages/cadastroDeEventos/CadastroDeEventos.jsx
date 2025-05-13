import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import banner_cadastroEvento from "../../assets/img/cadastroevento.png"

const CadastroDeEventos = () => {
    return(
        <>
        <Header/>
        
        <Cadastro
        img_banner={banner_cadastroEvento}
        titulo_cadastro = "Cadastro de Evento"
        nomes = "Nome"
        />

        <Lista
        titulo_lista = "Eventos"
        titulo = "Nome"
        visibilidade/>

        <Footer/>
        
        </>
    )
}

export default CadastroDeEventos;