import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 196,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 102341,
    createdAt: moment(0).subtract(4,'days').valueOf()
}];