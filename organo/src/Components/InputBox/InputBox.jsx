import DropDownList from "../DropDownList/DropDownList";
import InputText from "../InputUserData/input";
import ButtonForm from "../ButtonForm/Button";
import "./Inputbox.css"
import { useState } from "react";

const InputBox = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const Salvar = (e) => {
        e.preventDefault()
        props.cadastroColaborador({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="d-flex justify-content-center FormSec">
            <form className='formulario py-4 border rounded shadow-lg w-75' onSubmit={Salvar}>
                <h2 className="textForm">Preencha os dados do </h2>
                <InputText necessary={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    alterado={valor => setNome(valor)}
                ></InputText>
                <InputText
                    necessary={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                ></InputText>
                <InputText
                    label="Imagem"
                    placeholder="Digite o Endereço Url da Imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                ></InputText>
                <DropDownList
                    necessary={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    changed={escolha => setTime(escolha)}
                ></DropDownList>
                <ButtonForm >Criar Card</ButtonForm>
            </form>

        </section>



    )
}

export default InputBox;