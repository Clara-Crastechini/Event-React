import React, { useEffect, useState } from 'react'
import Lixeira from "../../assets/img/lixeiravermelho.png"
import api from '../../Services/services'
import "./Modal.css"


export const Modal = (props) => {

    const [comentarios, setComentarios] = useState([]);

    const [novoComentario, setNovoComentario] = useState("");
    const [usuarioId, setUsuarioId] = useState("");



    async function listarComentarios() {
        try {
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`)
            setComentarios(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarComentarios();
    },[comentarios])


    async function cadastrarComentario(comentario) {
            try {
                await api.post("comentariosEventos", {
                    idUsuario: usuarioId,
                    idEvento: props.idEvento,
                    Descricao: comentario

                })
            } catch (error) {
                console.log(error);
                
            }
        
    }


    async function deletarComentario(idComentario) {
        try {
            await api.delete(`comentariosEventos/${idComentario}`);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="model-overlay" onClick={props.fecharModal}> </div>
            <div className="model">
                <h1>{props.titulo}</h1>
                <div className="model_conteudo">
                    {props.tipoModal === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => 
                                <div key={item.idComentarioEvento}>
                                    <strong>
                                        {item.usuario.nomeUsuario}
                                    </strong>
                                    <img src={Lixeira} alt="Deletar" 
                                    onClick={() => deletarComentario(item.idComentarioEvento)}/>
                                    <p>{item.descricao}</p>
                                    <hr />
                                </div>
                            )}
                            <div>
                                <input type="text" placeholder="Escreva seu comentário..."
                                value={novoComentario}
                                onChange={(e) => setNovoComentario(e.target.value)} />
                                <button onClick={() => cadastrarComentario(novoComentario)}>Cadastrar</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal;