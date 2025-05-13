import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form action="" className="layuot_grid form_cadastro">
                <h1>{props.titulo_cadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="banner_cadastro">
                        <img src={props.img_banner} />
                    </div>
                    <div className="campo_preen">
                        <div className="campo_cad_nome">
                            <label htmlFor=""></label>
                            <input type="text" nome="nome" placeholder={props.nomes} />
                        </div>
                        <div className="campo_cad_evento" style={{ display: props.visible }}>
                            <label htmlFor="evento"></label>
                            <select name="evento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">xxxx</option>
                                <option value="">zpto</option>
                                <option value="">yyyyy</option>
                            </select>
                        </div>
                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;