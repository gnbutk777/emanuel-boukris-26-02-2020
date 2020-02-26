import actionsTypes from './actionsType';

export const addToFavorites = (id) => ({
    type: actionsTypes.ADD_TO_FAVORITES,
    payload: id
});

export const removeFormFavorites = (id) => ({
    type: actionsTypes.REMOVE_FROM_FAVORITES,
    payload: id
});