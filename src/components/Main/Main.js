import Tile from '../Tile/Tile';
import './Main.scss';
import traduction from '../../traducciones/traducciones'
import mySelft from './mi-perfil.jpg'
const Main = ({ lang }) => {
    const tiles = [
        {
            title: traduction[lang].title1,
            content: traduction[lang].contenido1,
            isMediaLeft: true,
            media: mySelft,
           
        },
        {
            title: traduction[lang].title2,
            content: traduction[lang].contenido2,
            isMediaLeft: false,
            media: "https://tfagroup.co.uk/wp-content/uploads/2020/11/TFA-goals_blue-yellow.png",
           
        },
    ]

    return (
        <div className="cmp-main">
            {
                tiles.map((tile, i) => <Tile key={i} {...tile} />)
            }
        </div>
    )
}

export default Main;