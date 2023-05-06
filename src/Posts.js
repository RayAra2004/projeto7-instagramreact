export default function Posts(){
    const infoPosts = [
        {
            user: 'meowed',
            post: 'gato-telefone',
            curtida: 'respondeai'
        },
        {
            user: 'barked',
            post: 'dog',
            curtida: 'adorable_animals'
        },
        {
            user: 'memeriagourmet',
            post: 'ponte',
            curtida: 'filomoderna'
        },
        {
            user: 'filomoderna',
            post: 'lago',
            curtida: 'memeriagourmet'
        }
    ]
    
    return(
        <div class="posts">
            {infoPosts.map(post => <Post user = {post.user} post = {post.post} curtida = {post.curtida}/>)}
        </div>
    );
}


function Post(props){
    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={`assets/img/${props.user}.svg`} alt={props.user}/>
                {props.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={`assets/img/${props.post}.svg`} alt={props.post}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={`assets/img/${props.curtida}.svg`} alt={props.curtida}/>
                <div class="texto">
                  Curtido por <strong>{props.curtida}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    );
}