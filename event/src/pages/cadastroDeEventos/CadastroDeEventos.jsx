import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import banner_cadastroEvento from "../../assets/img/cadastroevento.png"
import { useEffect, useState } from "react";

import api from "../../Services/services";
import Swal from 'sweetalert2';

const CadastroDeEventos = () => {

    const [evento, setEvento] = useState("");
    const [tipoEvento, setTipoEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("3FA85F64-5717-4562-B3FC-2C963F66AFA6");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("tiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }

    }


    async function listarEvento() {
        try {
            const resposta = await api.get("eventos")
            setListaEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }

    async function cadastrarEvento(evt) {
        evt.preventDefault();
        if (evento.trim() != "") {
            try {
                await api.post("eventos", { nomeEvento: evento, idTipoEvento: tipoEvento, dataEvento: dataEvento, descricao: descricao, idInstituicao: instituicao });
                alertar("success", "Deu certo");
                setEvento("");
                setDataEvento("");
                setDescricao("");
                setTipoEvento("");

            } catch (error) {
                alertar("error", "Entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")

        }
    }





    async function deletarEvento (id) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#B51d44",
            cancelButtonColor: "#000000",
            confirmButtonText: 'Sim, apagar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`TiposEventos/${id.idTipoEvento}`);
                alertar("success", "Tipo de evento excluído!");
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao excluir")
        })
    }


    useEffect(() => {
        listarTipoEvento();
        listarEvento();
    }, [listaEvento]);



    return (
        <>
            <Header />

            <Cadastro
                img_banner={banner_cadastroEvento}
                titulo_cadastro="Cadastro de Evento"
                nomes="Nome"
                funcCadastro={cadastrarEvento}
                valorInput={evento}
                setValorInput={setEvento}

                valorSelect={tipoEvento}
                setValorSelect={setTipoEvento}

                valorSelect2={instituicao}
                setValorSelect2={setInstituicao}

                valorDate={dataEvento}
                
                setValorDate={setDataEvento}

                valorText={descricao}
                setValorText={setDescricao}

                lista={listaTipoEvento}
            />

            <Lista
                titulo_lista="Eventos"
                titulo="Nome"
                tipoLista="Eventos"
                lista={listaEvento}
                dataEvento ={dataEvento}
                funcExcluir={deletarEvento}
                
            />

            <Footer />

        </>
    )
}

export default CadastroDeEventos;