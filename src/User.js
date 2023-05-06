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
        <div class="usuario">
          <img src= {fotoUser} alt="imagem de perfil" onClick ={() => mudarFoto()} />
          <div class="texto">
            <span>
                <strong>{nomeUser}</strong>              
                <ion-icon name="pencil" onClick={() => mudarNome()}></ion-icon>
            </span>
          </div>
        </div>
    );
}

