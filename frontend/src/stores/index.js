import { createStore } from 'vuex';
import creditCards from './creditCards'; // Import the creditCards module

const store = createStore({
  modules: {
    creditCards, // Register the creditCards module
  },
});

export default store;