// src/pages/Resultado.jsx
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
function Resultado() {
  // Recebe os dados enviados pela navegação
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <Container className="mt-4">
      <h3>Endereço Encontrado</h3>
      <p><b>Rua:</b> {state.logradouro}</p>
      <p><b>Bairro:</b> {state.bairro}</p>
      <p><b>Cidade:</b> {state.localidade} / {state.uf}</p>
      <Button onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  )
}
export default Resultado
