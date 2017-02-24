import * as types from './types';
import API from '../lib/api';

export function fetchRecipes(ingredients){
    return (dispatch, getState) => {
        // tmp API url http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=1
        const params = [
            `i=${encodeURIComponent(ingredients)}`,
            'q=',
            'p=1',
        ].join('&');

        return API.get('/api/').then(response => {
            dispatch(setSearchedrecipes({recipes: response}))
        }).catch( (exception) => {
            console.log(exception);
        })
    }
}

export function setSearchedrecipes({recipes}) {
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes
    }
}

export function addRecipe() {
    return {
        type: types.ADD_RECIPE,
    }
}