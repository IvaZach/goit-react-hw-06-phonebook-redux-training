import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      if (state.find(contact => contact.name === action.payload.name)){
        alert(`${action.payload.name} is already in contacts.`);
        return state;
      }
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
// const filterInitialState = {
//   filter: '',
// };
const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/findContact':
      return action.payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   ],
//   filter: '',
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filter/findContact':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
