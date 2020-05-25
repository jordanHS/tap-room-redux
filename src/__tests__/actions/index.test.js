import * as actions from './../../actions';

describe('help queue actions', () => {
    it('deleteTicket should create DELETE_KEG action', () => {
        expect(actions.deleteKeg(1)).toEqual({
            type: 'DELETE_KEG',
            id: 1
        });
    });

    it('toggleForm should create TOGGLE_FORM action', () => {
        expect(actions.toggleForm()).toEqual({
            type: 'TOGGLE_FORM'
        });
    });

    it('addTicket should create ADD_KEG action', () => {
        expect(actions.addKeg({name: 'Spiced Cider', brand: 'Angry Orchard', price: '$2', alcohol: '5%', id: 1})).toEqual({
            type: 'ADD_KEG',
            name: 'Spiced Cider',
            brand: 'Angry Orchard',
            price: '$2',
            alcohol: '5%',
            id: 1 
        });
    });
});
