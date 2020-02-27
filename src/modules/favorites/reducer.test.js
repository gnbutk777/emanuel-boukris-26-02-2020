import favoritesReducer from './reducer';
import actionsType from './actionsType';


describe('favorites Reducer', () => {
    it('should return the initial state', () => {
        expect(favoritesReducer(undefined, {})).toEqual({favorites: []})
    });
    it('should handle REMOVE_FROM_FAVORITES', () => {
        expect(favoritesReducer({favorites: [15]}, {
            type: actionsType.REMOVE_FROM_FAVORITES,
            payload: 15      
        })
        ).toEqual({favorites: []});
        expect(favoritesReducer({favorites: [15]}, {
            type: actionsType.REMOVE_FROM_FAVORITES,
            payload: 25      
        })
        ).toEqual({favorites: [15]})
    });
    it('should handle ADD_TO_FAVORITES', () => {
        expect(
            favoritesReducer(undefined, {
            type: actionsType.ADD_TO_FAVORITES,
            payload: 25
        })
        ).toEqual({favorites: [25]});
        expect(
            favoritesReducer({favorites: [15,12,15,55444]}, {
                type: actionsType.ADD_TO_FAVORITES,
                payload: 35     
            })
        ).toEqual({favorites: [15,12,15,55444, 35]});
        expect(
            favoritesReducer({favorites: []}, {
                type: actionsType.ADD_TO_FAVORITES,
                payload: "tzachi"     
            })
        ).toEqual({favorites: ['tzachi']});
    });
})