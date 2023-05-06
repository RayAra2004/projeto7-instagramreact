import { useState } from 'react';

export default function User(){
    let [nomeUser, setNomeUser] = useState('catanacomics');

    function mudarNome(){
        let novoNome = prompt('Digite o nome:');
        if(!novoNome){
            setNomeUser(novoNome);
        }
    }

    return (
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
          <div class="texto">
            <span>
                <strong>{nomeUser}</strong>              
                <ion-icon name="pencil" onClick={() => mudarNome()}></ion-icon>
            </span>
          </div>
        </div>
    );
}

