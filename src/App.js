import React from 'react';
import './index.css';

function App() {
  return(
    <NavBar>
      <NavList icon="🔥"/>
      <NavList icon="😬"/>
      <NavList icon="🍤"/>
    </NavBar>
  );
}

function NavBar(props) {
  return(
    <nav className="nav-bar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavList(props){
  return(
    <li className="navbar-list">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}


export default App;