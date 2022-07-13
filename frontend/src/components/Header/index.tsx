import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DS Meta Dashboard" />
        <h1>DS Meta</h1>
        <p>
          Desenvolvido por
          <a href="https://linkedin.com/in/ramiro-arce"> Ramiro Zavala</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
