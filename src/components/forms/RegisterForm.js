import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as accountServices from '../../services/account-services';
import textFieldValidation from '../../validations/textfield-validation';
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password-validation';

export default function RegisterForm() {

    //criando variaveis no state do componente utilizando REACT HOOKS
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    //criando um formulário utilizando o REACT HOOK FORMS
    const {
        control, //capturar os campos do formulário
        handleSubmit, //capturar o evento SUBMIT do formulário
        formState: {
            errors //erros de validação do formulário
        },
        reset //limpar os campos do formulário
    } = useForm();

    //função executada no SUBMIT do formulário
    const onSubmit = (data) => {

        //limpar as mensagens
        setMensagemSucesso('');
        setMensagemErro('');

        //executando o serviço da API
        accountServices.postRegister(data)
            .then( //callback de sucesso
                result => {
                    //capturando mensagem de sucesso
                    setMensagemSucesso(result.message);
                    //limpar os campos do formulário
                    reset({
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    });
                }
            )
            .catch( //callback de erro
                e => {
                    //capturando mensagem de erro
                    setMensagemErro(e.response.data);
                }
            );
    }

    //renderizar o conteudo HTML do componente
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {
                mensagemSucesso && <div className='alert alert-success'>
                    <strong>Sucesso!</strong> {mensagemSucesso}
                </div>
            }

            {
                mensagemErro && <div className='alert alert-danger'>
                    <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Nome do usuário:</label>
                    <Controller
                        control={control}
                        name="nome"
                        defaultValue=""
                        rules={{ validate: textFieldValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    placeholder='Ex: João Carlos'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.nome && <div className='text-danger'>
                            {errors.nome.message}
                        </div>
                    }
                </div>
                <div className='col-md-6'>
                    <label>Email de acesso:</label>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validate: emailValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="email"
                                    placeholder='Ex: joaocarlos@gmail.com'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.email && <div className='text-danger'>
                            {errors.email.message}
                        </div>
                    }
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Senha de acesso:</label>
                    <Controller
                        control={control}
                        name="senha"
                        defaultValue=""
                        rules={{ validate: passwordValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    placeholder='Digite aqui sua senha'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.senha && <div className='text-danger'>
                            {errors.senha.message}
                        </div>
                    }
                </div>
                <div className='col-md-6'>
                    <label>Confirme a senha:</label>
                    <Controller
                        control={control}
                        name="senhaConfirmacao"
                        defaultValue=""
                        rules={{ validate: passwordValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    placeholder='Confirme sua senha'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.senhaConfirmacao && <div className='text-danger'>
                            {errors.senhaConfirmacao.message}
                        </div>
                    }
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-12'>
                    <input type="submit" value="Realizar Cadastro"
                        className='btn btn-success' />
                </div>
            </div>

        </form>
    )

}