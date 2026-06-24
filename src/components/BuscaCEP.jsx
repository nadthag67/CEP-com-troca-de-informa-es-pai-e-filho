// Importa hooks do React
import { forwardRef, useImperativeHandle, useState } from 'react'
// Importa o Axios para chamadas HTTP
import axios from 'axios'
// Importa componentes visuais do Bootstrap
import { Form } from 'react-bootstrap'
// forwardRef permite que o componente pai chame funções do filho
const BuscaCep = forwardRef(({ onEnderecoEncontrado }, ref) => {
 // Estado para armazenar o CEP digitado
 const [cep, setCep] = useState('')
 // Expõe a função buscarEndereco para o componente pai
 useImperativeHandle(ref, () => ({ buscarEndereco }))
 // Função responsável por buscar o endereço no ViaCEP
 async function buscarEndereco() {
 // Validação simples do CEP
 if (cep.length !== 8) {
 alert('CEP inválido')
 return
 }
 // Requisição para a API ViaCEP
 const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
 // Envia o endereço encontrado para o componente pai
 onEnderecoEncontrado(response.data)
 }
 return (
 <Form.Group className="mb-3">
 <Form.Label>CEP</Form.Label>
 <Form.Control
 type="text"
 value={cep}
 maxLength={8}
 // Permite apenas números no campo
 onChange={e => setCep(e.target.value.replace(/\D/g, ''))}
 />
 </Form.Group>
 )
})
// Exporta o componente
export default BuscaCep