import axios from 'axios';

const defaultLocation = { x: 0, y: 0 };

export const getMoves = async ({ sideLength = 4, impassables = [], startingLoc = defaultLocation, endingLoc = defaultLocation }) => {
    try {
        const result = await axios.post(`https://frozen-reef-96768.herokuapp.com/find-path`, { 
            sideLength,
            impassables,
            startingLoc,
            endingLoc
        });

        return result.data;
    } catch (e) {
        console.log('error on getPath', e);
        alert('Unable to retrieve the path');
    }
}