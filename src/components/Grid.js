import React from 'react';
import Tile from './Tile';
import './Grid.css';

const Grid = ({ tiles, onTileClick, gridSize }) => {

    const style = {
        width: (33 * gridSize) + 'px'
    }
    
    return (
        <div className='grid'>
            <div className='tiles' style={style}>
                {tiles.map((tile, tileId) => {
                    return (
                        <Tile onClick={onTileClick} key={`tile-${tileId}`} tile={tile} />
                    )
                })}
            </div>
        </div>
    )
}

export default Grid;