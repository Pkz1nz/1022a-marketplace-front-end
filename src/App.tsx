import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  idade: number,
  avatar: string
}

function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  useEffect(() => {
    setNome("Pkz1nz")

    // Buscar os dados de produtos no Backend
    fetch("https://one022a-marketplace-1-nnwc.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))

    // Buscar os dados de usuários no Backend
    fetch("https://one022a-marketplace-1-nnwc.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>
      <h1>{nome}</h1>

      <div className="produtos-container">
        <h2>Produtos</h2>
        {
          produtos.map(produto => {
            return (
              <div key={produto.id} className="produto-item">
                <h3>{produto.nome}</h3>
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p>{produto.preco}</p>
                <p>{produto.descricao}</p>
              </div>
            )
          })
        }
      </div>

      <div className="usuarios-container">
        <h2>Usuários</h2>
        {
          usuarios.map(usuario => {
            return (
              <div key={usuario.id} className="usuario-item">
                <h3>{usuario.nome}</h3>
                <div className='container-avatar'>
                  <img src={usuario.avatar} alt="Avatar do usuário" />
                </div>
                <p>{usuario.email}</p>
                <p>Idade: {usuario.idade}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
