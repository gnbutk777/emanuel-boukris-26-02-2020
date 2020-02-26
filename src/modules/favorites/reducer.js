import ActionsType from './actionsType';


const initialState = {
    favorites: []
};

const favoritesReducer = (state = initialState, action) => {
    let favorites;

    switch (action.type) {
        case ActionsType.ADD_TO_FAVORITES:
            favorites = state.favorites.slice();
            favorites.push(action.payload);
        return {...state, favorites};

        case ActionsType.REMOVE_FROM_FAVORITES:
            favorites = state.favorites.filter((id) => {
                return id !== action.payload;
            })
        return {...state, favorites};
      default:
        return state;
    }
};

export default favoritesReducer;