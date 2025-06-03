import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/Comentario.png";
import "./ListagemDeEventos.css";
import Toggle from "../../components/toggle/Toggle";
import descricao from "../../assets/img/informacao(preto).png";

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
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th className="">Título</th>
                                <th className="">Data Do Evento</th>
                                <th className="">Tipo Evento</th>
                                <th className="">Descrição</th>
                                <th className="">Comentários</th>
                                <th className="">Participar</th>
                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            <tr className="item_listagem espaco">
                                <td className="" data-cell="Título">xxxxxxxxx</td>
                                <td className="" data-cell="Tipo Evento"></td>
                                <td className=" img_descricao"><img src={descricao} alt="" /></td>
                                <td className="" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="" data-cell="Participar"><Toggle/></td>
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
