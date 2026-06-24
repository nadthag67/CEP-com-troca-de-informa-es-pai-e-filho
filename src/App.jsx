// Hook useRef permite acessar funções do componente filho
import { useRef } from 'react'
// Componentes visuais
import { Button, Container } from 'react-bootstrap'
// Importa o componente filho
import BuscaCep from './components/BuscaCep'
function App() {
 // Referência para o componente BuscaCep
 const buscaCepRef = useRef()
 // Função chamada quando o filho retorna o endereço
 function handleEnderecoEncontrado(endereco) {
 alert(
 `Rua: ${endereco.logradouro}
` +
 `Bairro: ${endereco.bairro}
` +
 `Cidade: ${endereco.localidade}/${endereco.uf}`
 )
 }
 return (
 <Container className="mt-4">
 {/* Componente filho */}
 <BuscaCep
 ref={buscaCepRef}
 onEnderecoEncontrado={handleEnderecoEncontrado}
 />
 {/* Botão que dispara a busca no componente filho */}
 <Button
 className="mt-3"
 onClick={() => buscaCepRef.current.buscarEndereco()}
 >
 Buscar CEP
 </Button>
 </Container>
 )
}
// Exporta o componente principal
export default App