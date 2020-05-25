import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

    let action;
    const kegData = {
        name: "Spiced Cider",
        brand: "Angry Orchard",
        price: "$2",
        alcohol: "5%",
        id: 1
    };
    test('Should return default state if there is no action passed into the reducer', () =>{
        expect(kegListReducer({}, { type: null})).toEqual({});
    });

    test('Should successfully add new keg data to masterKegList', () => {
        const { name, brand, price, alcohol, id } = kegData;
        action = {
            type: 'ADD_KEG',
            name: name,
            brand: brand,
            price: price,
            alcohol: alcohol,
            id: id
        };

        expect(kegListReducer({}, action)).toEqual({
            [id]: {
                name: name,
                brand: brand,
                price: price,
                alcohol: alcohol,
                id: id
            }
        })
    })
});