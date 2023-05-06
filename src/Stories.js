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
            user: 'filomoderna'
        },
        {
            user: 'memeriagourmet'
        }
    ]


    return(
        <div className="stories">
            {infoStories.map(storie => <Storie key={storie.user} user = {storie.user}/>)};
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie(props){
    return(
        <div className="story">
            <div className="imagem">
                <img src= {`assets/img/${props.user}.svg`} alt={props.user}/>
            </div>
            <div className="usuario">
              {props.user}
            </div>
        </div>
    );
}