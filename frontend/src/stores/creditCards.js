import { ref } from 'vue';

const state = {
  selectedCard: null,
};

const mutations = {
  setSelectedCard(state, card) {
    state.selectedCard = card;
  },
};

export default {
  state,
  mutations,
};