import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/Comentario.png";
import "./ListagemDeEventos.css";
import Toggle from "../../components/toggle/Toggle";


function ListagemEvento() {
    return (
        <>
            <Header />

            <section className="lista_evento">
                <h1>Eventos</h1>
                <hr className="linha_titulo" />


                <div className="tabela_listagem layout_grid">

                    <div className="left  seletor">
                        <label htmlFor="eventos"></label>
                        <select name="eventos" id="">
                            <option value="" disabled selected>Todos os eventos</option>
                            <option value="">xxxx</option>
                            <option value="">yyyy</option>
                            <option value="">zzzz</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th className="left">Título</th>
                                <th className="left">Tipo Evento</th>
                                <th className="right">Comentários</th>
                                <th className="right">Participar</th>
                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            <tr className="item_listagem espaco">
                                <td className="left" data-cell="Título">xxxxxxxxx</td>
                                <td className="left" data-cell="Tipo Evento">xxxxxxxxx</td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="right" data-cell="Participar"><Toggle/></td>

                            </tr>


                        </tbody>

                        <tbody>
                            <tr className="item_listagem dividi">
                                <td className="left" data-cell="Título">xxxxxxxxx</td>
                                <td className="left" data-cell="Tipo Evento">xxxxxxxxx</td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="right" data-cell="Participar"><Toggle/></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ListagemEvento;
