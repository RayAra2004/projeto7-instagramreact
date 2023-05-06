import { useState } from "react";

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
        <div className="posts">
            {infoPosts.map(post => <Post key={post.post} user = {post.user} post = {post.post} curtida = {post.curtida}/>)}
        </div>
    );
}


function Post(props){
    let [savePost, setSavepost] = useState("bookmark-outline");
    let [likePost, setLikePost] = useState("heart-outline");
    let [curtiu, setCurtui] = useState("no-like");
    let [qtdCurtidas, setQtdCurtidas] = useState(101.523);
    let [animate, setAnimate] = useState('hidden');


    function salvaPost(){
      if(savePost === "bookmark-outline"){
        setSavepost("bookmark")
      } else{
        setSavepost("bookmark-outline");
      }
    }

    function like(){
      if(likePost === "heart-outline"){
        setLikePost("heart");
        setCurtui('like');
        setQtdCurtidas(qtdCurtidas + 0.001);
      } else{
        setLikePost("heart-outline");
        setCurtui('no-like');
        setQtdCurtidas(qtdCurtidas - 0.001);
      }
    }

    function likeImg(){
      if(likePost === "heart-outline"){
        setLikePost("heart");
        setCurtui('like');
        setQtdCurtidas(qtdCurtidas + 0.001);
        setAnimate('animate');
        setTimeout(() =>{
          setAnimate('hidden')
        },500);
      }
    }

    return(
        <div className="post" data-test="post">
            <div className="topo">
              <div className="usuario">
                <img src={`assets/img/${props.user}.svg`} alt={props.user}/>
                {props.user}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={`assets/img/${props.post}.svg`} alt={props.post} onDoubleClick={() => likeImg()} data-test="post-image"/>
              {/*<img src="assets/img/heart.png" className={`heart ${animate}`}/>*/}
              <div className={`heart ${animate}`} >
                <ion-icon name="heart" ></ion-icon>
              </div>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name={likePost} className={curtiu} onClick = {() => like()} data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={savePost} onClick = {() => salvaPost()} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={`assets/img/${props.curtida}.svg`} alt={props.curtida}/>
                <div className="texto">
                  Curtido por <strong>{props.curtida}</strong> e <strong>outras <strong data-test="likes-number">{qtdCurtidas}</strong> pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    );
}