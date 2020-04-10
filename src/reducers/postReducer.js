import { FETCH_POSTS, NEW_POST } from '../actions/types.js';

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
        
    }
}