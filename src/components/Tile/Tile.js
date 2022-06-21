import './Tile.scss';

const Tile = ({ media, title, content, isMediaLeft}) => {

    const mediaMarkup = () => (
        <div className="cmp-tile-media cmp-tile-wrapper">
            {isMediaLeft&& <img className='profile-picture' src={media} alt={title} />}
            {!isMediaLeft&&<img  src={media} alt={title} />}
            
        </div>
    );
    return (
        <div className="cmp-tile">
            {isMediaLeft && mediaMarkup()}
            <div className="cmp-tile-content cmp-tile-wrapper">
                <h4 className="cmp-tile-content__title">{title}</h4>
                <div className="cmp-tile-content__text">{content}</div>
            </div>
            {!isMediaLeft && mediaMarkup()}
        </div>
    )
}

export default Tile;