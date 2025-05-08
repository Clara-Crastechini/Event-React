import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ListagemDeEventos.css";
import Comentario from "../../assets/img/Comentario.png"
import Participar from "../../assets/img/Participar.png"
import NaoParticipar from "../../assets/img/NaoParticipar.png"

const ListagemDeEventos = () => {
    return(
    <>
    <Header/>
    
    <main>
        <section className="listagem_evento">
            <h1>Eventos</h1>
            <hr className="linha_title"/>
            <select name="" id=""></select>


            <div className="layout_grid lista">
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Tipo Evento</th>
                            <th>Comentarios</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-cell="Titulo">xxxxxxxx</td>
                            <td data-cell="Tipo Evento">yyyyyyyy</td>
                            <td data-cell="Comentario"><img src={Comentario} alt="" /></td>
                            <td data-cell="Participar"><img src={Participar} alt="" /></td>

                            <td data-cell="Titulo">xxxxxxxx</td>
                            <td data-cell="Tipo Evento">yyyyyyyy</td>
                            <td data-cell="Comentario"><img src={Comentario} alt="" /></td>
                            <td data-cell="Participar"><img src={NaoParticipar} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>


    </main>

    <Footer/>
    
    </>
    )
}

export default ListagemDeEventos;