import favoritesReducer from './reducer';
import actionsType from './actionsType';


describe('favorites Reducer', () => {
    it('should return the initial state', () => {
        expect(favoritesReducer(undefined, {})).toEqual({favorites: []})
    });
    it('should handle REMOVE_FROM_FAVORITES', () => {
        expect(favoritesReducer({favorites: [{id:2453, name: "tena"}]}, {
            type: actionsType.REMOVE_FROM_FAVORITES,
            payload: 2453
        })
        ).toEqual({favorites: []});
        expect(favoritesReducer({favorites: [{id:2453, name: "tena"}]}, {
            type: actionsType.REMOVE_FROM_FAVORITES,
            payload: 25      
        })
        ).toEqual({favorites: [{id:2453, name: "tena"}]})
    });
    it('should handle ADD_TO_FAVORITES', () => {
        expect(
            favoritesReducer(undefined, {
            type: actionsType.ADD_TO_FAVORITES,
            payload: {id:2453, name: "tena"}
        })
        ).toEqual({favorites: [{id:2453, name: "tena"}]});
        expect(
            favoritesReducer({favorites: [{id:2453, name: "tena"},{id:2452, name: "tamar"}]}, {
                type: actionsType.ADD_TO_FAVORITES,
                payload: {id:2451, name: "telAviv"} 
            })
        ).toEqual({favorites: [{id:2453, name: "tena"}, {id:2452, name: "tamar"}, {id:2451, name: "telAviv"}]});
        expect(
            favoritesReducer({favorites: []}, {
                type: actionsType.ADD_TO_FAVORITES,
                payload: "tzachi"     
            })
        ).toEqual({favorites: ['tzachi']});
    });
})