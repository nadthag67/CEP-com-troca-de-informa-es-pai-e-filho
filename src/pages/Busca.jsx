// src/pages/Busca.jsx
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import BuscaCep from '../components/BuscaCep.jsx'
function Busca() {
  const buscaCepRef = useRef()
  const navigate = useNavigate()
  // Recebe o endereço do componente filho e navega para outra tela
 function handleEnderecoEncontrado(endereco) {
  console.log('ENDERECO RECEBIDO:', endereco)
  navigate('/resultado', { state: endereco })
}
  return (
    <Container className="mt-4">
      <BuscaCep
        ref={buscaCepRef}
        onEnderecoEncontrado={handleEnderecoEncontrado}
      />
      <Button onClick={() => buscaCepRef.current.buscarEndereco()}>
        Buscar CEP
      </Button>
    </Container>
  )
}
export default Busca
