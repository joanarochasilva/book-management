import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
  const [address, setAddress] = useState('');

  const schema = yup.object({
    name: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    cep: yup.string.required('Você deve fornecer um CEP válido!').min(8, "O CEP deve conter ao menor 8 caracteres"),
    password: yup.number().required('Você deve fornecer uma senha!').min(8, 'A senha deve conter pelo menos 8 caracteres.'),
  }).required();

  const {
    data,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const searchAddress = async () => {
    setLoading(true);
    setErro('');
    setEndereco(null);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        setErro('CEP não encontrado.');
      } else {
        setAddress(response.data);
      }
    } catch (error) {
      setErro('Erro ao buscar o CEP.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (data) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { data: insertedData, error } = await supabase
        .from('usuarios')
        .insert([
          { nome: data.nome, email: data.email, idade: data.idade }
        ]);

      if (error) {
        setErrorMessage('Erro ao salvar no banco de dados: ' + error.message);
      } else {
        setSuccessMessage('Dados enviados com sucesso!');
      }
    } catch (error) {
      setErrorMessage('Erro inesperado: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Formulário de Registro</h1>
      <form action="post" method="post" onSubmit={handleSignUp}>
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" id="name" {...register('name')}/>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" {...register('email')} />
        <label htmlFor="cep">CEP: </label>
        <input type="number" name="cep" id="cep" onChange={searchAddress}/>
        <label htmlFor="city" >Cidade: </label>
        <input type="text" name="city" id="city" value={address.localidade} {...register('city')} disabled/>
        <label htmlFor="state">Estado: </label>
        <input type="text" name="state" id="state" value={address.estado} {...register('state')} disabled/>
        <label htmlFor="password">Senha: </label>
        <input type="password" name="password" id="password" {...register('password')}/>
        <input type="submit" value="Cadastrar"  />
      </form>
    </div>
  );
}
