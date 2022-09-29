import React from 'react';

/* header sous forme de fonction */
export default function Navbar(props) {
  return (
    <div class="d-flex">
      <div class="beige">
        <img src="paw-entrechats.png" alt="patte de chat" class="paw" />
      </div>
      <div class="navbar">
        <p>Accueil</p>
        <p>Comment ça marche ?</p>
        <p>Devenir Pet-sitter</p>
        <div class="d-flex align">
          <p>Connexion</p>
          <img src="leave-entrechats.png" alt="quitter" class="leave" />
        </div>
      </div>
    </div>
  )
}
