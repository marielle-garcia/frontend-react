// CRIANDO O COMPONENTE DA HEADER

// iniciando a estrutura com "ra"

import './Header.css'

const Header = () => {
  return (
    <header id='header'>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Quem Somos</li>
                <li>Contato</li>
                {/* alt + shift para baixo copia a linha */}
            </ul>
        </nav>
    </header>
  )
}

export default Header