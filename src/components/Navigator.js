import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import Modal from './Modal';
import SelectTileForm from './SelectTileForm';

import TileTypes, { start, finish, rock } from '../common/TileTypes';

import { getMoves } from '../services/PathService';
import * as utils from '../common/utils';

var gridOptions = ['select', 4,5,6,7,8];

const Navigator = () =>{
    const [tiles, setTiles] = useState([]);
    const [gridSize, setGridSize] = useState(0);
    const [activeTile, setActiveTile] = useState(null);

    const handleTileClick = React.useCallback((tile) => {
        setActiveTile(tile);
    }, []);

    const setTileType = React.useCallback((_, values) => {

        const selectedType = values.type;
        if (!selectedType) {
            alert('Please select a type');
            return;
        }

        const newTiles = utils.updateTile(tiles, activeTile, values)
        
        setActiveTile(null);
        setTiles(newTiles);

    }, [tiles, activeTile]);

    const setGrid = React.useCallback((event) => {
        setGridSize(event.target.value);
    }, []);

    const startingLoc = tiles.find(item => item.type === start.name);
    const endingLoc = tiles.find(item => item.type === finish.name);

    const calculatePath = async () => {
        const impassables = tiles.filter(item => item.type === rock.name);
        const result = await getMoves({ sideLength: gridSize, impassables, startingLoc, endingLoc });

        let position = {...startingLoc};
        const newTiles = utils.updateTilePath(tiles, result, position);
        setTiles(newTiles);
    };

    useEffect(() => {
        const newTiles = utils.generateTiles(gridSize)
        setTiles(newTiles);
    }, [gridSize]);

    const canCalculate = startingLoc && endingLoc;

    const modal = activeTile && (
        <Modal onClose={() => setActiveTile(null)} isOpen={true}>
            <h3>Select your type</h3>
            <SelectTileForm types={TileTypes} selected={activeTile ? activeTile.type : null} onSubmit={setTileType} />
        </Modal>
    );

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            {modal}
            <Grid gridSize={gridSize} tiles={tiles} onTileClick={handleTileClick} />
            <select onChange={setGrid} value={gridSize}>
            {gridOptions.map(opt => {
                return <option key={opt}>{opt}</option>
            })}
            </select>
            <button className='button-primary' type="button" disabled={!canCalculate} onClick={calculatePath}>Calculate</button>
            <button type="button" disabled={!canCalculate} onClick={()=>setGridSize(0)}>Reset</button>
        </div>
    )
}

export default Navigator;