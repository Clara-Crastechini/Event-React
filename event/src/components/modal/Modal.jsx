import React from 'react'
import Excluir from "../../assets/img/Excluir.png"

export const Modal = (props) => {
  return (
    <>
    <div className="modal-overlay" onClick={props.fecharModal}> </div>
    <div className="model">
        <h1>{props.titulo}</h1>
        <div className="model_conteudo">
            {props.tipoModel === "descricaoEvento" ? (
                <p>{props.descricao}</p>
            ) : (
                <>
                    {comentarios.map((item) => (
                        <div key={item.idComentarioEvento}>
                            <strong>
                                {item.usuario.nomeUsuario}
                            </strong>
                            <img src={Excluir} alt="Deletar" />
                            <p>{item.descricao}</p>
                        </div>
                    ))}
                    <div>
                        <input type="text" placeholder="Escreva seu comentário..." />
                        <button>Cadastrar</button>
                    </div>
                </>
            )}
        </div>
    </div>
    </>
  )
}

export default Modal;