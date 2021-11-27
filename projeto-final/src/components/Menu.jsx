import React from "react";
import BotaoMenu from "./BotaoMenu";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  
      render() {
        return (
          <nav className="navbar">
          <Link to="/"><BotaoMenu>Home</BotaoMenu></Link> {" ↔️ "}
          <Link to="/carrinho"><BotaoMenu>Seu carrinho</BotaoMenu></Link>
          </nav>
        )
      }
}

export default Menu;