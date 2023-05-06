import { useState } from 'react';

export default function User(){
    let [nomeUser, setNomeUser] = useState('catanacomics');
    let [fotoUser, setFotoUser] = useState("assets/img/catanacomics.svg");

    function mudarNome(){
        let novoNome = prompt('Digite o nome:');
        if(novoNome){
            setNomeUser(novoNome);
        }
    }

    function mudarFoto(){
        let novaFoto = prompt('Digite a URL da foto:');
        if(novaFoto){
            setFotoUser(novaFoto);
        } 
    }

    return (
        <div className="usuario">
          <img src= {fotoUser} alt="imagem de perfil" onClick ={() => mudarFoto()} data-test="profile-image"/>
          <div className="texto">
            <span>
                <strong data-test="name">{nomeUser}</strong>              
                <ion-icon name="pencil" onClick={() => mudarNome()} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    );
}

