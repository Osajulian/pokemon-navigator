import React from 'react';
import './Tile.css';
import TileTypes from '../common/TileTypes';

const Tile = ({ onClick, tile }) => {
    let typeClass = null;
    const tileType = TileTypes.find(t => t.name === tile.type);
    if (tileType)
    {
        typeClass = tileType.classes;
    }

    const clickHandler = React.useCallback(() => {
        onClick(tile);
    }, [onClick, tile])

    return (
        <div className='tile' onClick={clickHandler}>
            <span className={['type', typeClass].join(' ')}></span>
            {tile.paths && <span className={['nav-path', 'path-' + tile.paths.join('')].join(' ')}></span>}
        </div>
    )
}

export default Tile;