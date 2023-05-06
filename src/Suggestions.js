export default function Suggestions(){
    const peoples = [{
        nome: 'bad.vibes.memes',
        img: 'assets/img/bad.vibes.memes.svg',
        descricao: 'Segue você'
    },
    {
        nome: 'chibirdart',
        img: 'assets/img/chibirdart.svg',
        descricao: 'Segue você'
    },
    {
        nome: 'razoesparaacreditar',
        img: 'assets/img/razoesparaacreditar.svg',
        descricao: 'Novo no Instagram'
    },
    {
        nome: 'smallcutecats',
        img: 'assets/img/smallcutecats.svg',
        descricao: 'Segue você'
    },
    {
        nome: 'adorable_animals',
        img: 'assets/img/adorable_animals.svg',
        descricao: 'Segue você'
    }
    ]

    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {peoples.map(people => <Suggestion key = {people.nome} nome = {people.nome} img = {people.img} descricao = {people.descricao}/>)}
          
        </div>
    );
}

function Suggestion(props){
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src= {props.img} alt= {props.img}/>
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.descricao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}