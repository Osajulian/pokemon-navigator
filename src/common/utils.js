import TileTypes from '../common/TileTypes';

export const generateTiles = (gridSize) => {
    const tiles = [];
    [...Array((gridSize ** 2)).keys()].forEach((number, index) => {
        tiles[index] = {
            ...getTileCoords(index, gridSize),
            number
        }
    });
    return tiles;
}

const getTileCoords = (index, gridSize) => {

    const x = index % gridSize;
    const y = index / gridSize << 0;

    return {
        y, 
        x,
        tileId: index
    }
}

export const updateTile = (tiles, tileToUpdate, values) => {
    const newTiles = [...tiles];
    var tileIndex = newTiles.indexOf(tileToUpdate);

    var newTile = {...tileToUpdate};
    newTile.type = values.type;

    var tileType = TileTypes.find(t => t.name === values.type);
    if (values.type === tileType.name && tileType.useOnce) {
        var previousTile = newTiles.findIndex(item => item.type === tileType.name);
        if (previousTile >= 0)
        {
            var oldTile = {...newTiles[previousTile]};
            oldTile.type = undefined;
            newTiles[previousTile] = oldTile;
        }
    }
    newTiles[tileIndex] = newTile;

    return newTiles;
}

export const updateTilePath = (tiles, result, position) => {
    const newTiles = [...tiles];
    //reset the path
    newTiles.forEach(t => t.paths = undefined);

    for (let i = 0; i < result.moves.length; i++) {

        const moveTo = result.moves[i];

        const hasNextMove = result.moves.length > i+1;
        const nextMove = hasNextMove && result.moves[i+1];

        if (moveTo === 'R') position.x++;
        if (moveTo === 'D') position.y++;
        if (moveTo === 'L') position.x--;
        if (moveTo === 'U') position.y--;

        var tileIndex = tiles.findIndex(pos => pos.x === position.x && pos.y === position.y);
        var moves = [moveTo];

        if (nextMove && moveTo !== nextMove){
            moves.push(nextMove);
        }

        if (hasNextMove)
            newTiles[tileIndex].paths = moves;
    }
    return newTiles;
}