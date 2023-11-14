import axios from 'axios';

/**
* Function for getting shows
* @param {string} quary  
* @param {function} getTvShows
*/
export const getTvShows = async (quary) => {

    let response;

    try {

        let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${quary}`);

        if(res.status === 200){
            response = res.data;
        }
        
    } catch (err) {
        throw 'Cannot connect';
    }

    return response;
};
