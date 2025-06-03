import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/Comentario.png";
import "./ListagemDeEventos.css";
import Toggle from "../../components/toggle/Toggle";
import descricao from "../../assets/img/informacao(preto).png";
import { useEffect, useState } from "react";
import api from "../../Services/services";
import { format } from "date-fns";
import { Modal } from "../../components/modal/Modal";


function ListagemEvento() {

    const [listaEvento, setListaEvento] = useState([])

    async function listarEventos() {
        try {
            const eventoListado = await api.get("eventos")
            setListaEvento(eventoListado.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarEventos();
    },[])

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
                            {listaEvento.length > 0 ? (

                                listaEvento.map((item) => (
                                <tr className="item_listagem espaco">
                                    <td className="" data-cell="Título">{item.nomeEvento}</td>
                                    <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td className="" data-cell="Tipo Evento">{item.tiposEvento.tituloTipoEvento}</td>
                                    <td className=" img_descricao"><img src={descricao} alt="" /></td>
                                    <td className="" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                    <td className="" data-cell="Participar"><Toggle/></td>
                                </tr>
                                )) 
                            ) : (
                                <p>Nenhum evento encontrado</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />

            <Modal/>
        </>
    )
}

export default ListagemEvento;
