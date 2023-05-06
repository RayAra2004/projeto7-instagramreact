export default function Stories(){
    const infoStories = [
        {
            user: '9gag'
        },
        {
            user: 'meowed'
        },
        {
            user: 'barked'
        },
        {
            user: 'nathanwpylestrangeplanet'
        },
        {
            user: 'wawawicomics'
        },
        {
            user: 'respondeai'
        },
        {
            user: 'wawawicomics'
        },
        {
            user: 'filomoderna'
        },
        {
            user: 'memeriagourmet'
        }
    ]


    return(
        <div class="stories">
            {infoStories.map(storie => <Storie user = {storie.user}/>)};
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src= {`assets/img/${props.user}.svg`} alt={props.user}/>
            </div>
            <div class="usuario">
              {props.user}
            </div>
        </div>
    );
}