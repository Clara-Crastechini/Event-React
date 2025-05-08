import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastroUsuario from "../../assets/img/cadastrousuario.png"


const TipoUsuarios = () => {
    return(
    <>
        <Header />

        <Cadastro
            img_banner={banner_cadastroUsuario}
            tituloCadastro="Cadastro Tipo de Usuario"
            nomes="Titulo"
            visible="none"/>

        <Lista
            tituloLista="Tipo Usuario"
            titulo="Titulo"
            visibilidade="none"

        />


        <Footer />
        </>
    )
}

        export default TipoUsuarios;