const initialState = {

}

const statsReducers = (state=initialState, action) => {
    switch(action.type){
        case SET_STATS:{
            return action.payload
        }

        default: 
            return initialState;
    }
}

module.exports = statsReducers;