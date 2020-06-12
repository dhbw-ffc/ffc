<template>
  <div class="learn" v-if="numberOfSelectedDecks>0"> <!-- otherwise it will be shortly displayed before it is catched by beforeMount -->
    <v-subheader>{{ card.deckName }}<v-spacer />69/420</v-subheader>
    <div class="max-height">{{ card.q }}</div>
    <div class="max-height">
      <span v-if="card.showAnswer">{{ card.a }}</span>
      <v-btn v-else @click="card.showAnswer = true">Reveal Answer</v-btn>
    </div>

    <Rating ref="rating"
      v-if="card.showAnswer"
      :numberOfStars="numberOfStarsInRating"
      @rated="onRating"
    />
    <v-card-actions>
      <v-btn text color="grey lighten-1">Prev</v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="grey lighten-1">Next</v-btn>
    </v-card-actions>

    <DialogQuit
      ref="confirmQuit"
      @confirmed="confirmedQuit"
    />
  </div>
</template>

<script>
import Rating from './Rating.vue';
import DialogQuit from './DialogQuit.vue';

export default {
  name: "Learn",
  components: {
    Rating,
    DialogQuit,
  },
  props: {
    decks: Array,
    numberOfSelectedDecks: Number,
  },
  data() {
    return {
      numberOfStarsInRating: 5,
      card: {
        q: `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Quisque id nibh venenatis, ultricies odio et, tristique nulla. Aliquam erat volutpat. Quisque eu sollicitudin tortor. Vestibulum ornare ligula vitae magna suscipit sagittis. In vel mattis quam. Vivamus et tincidunt magna, ac suscipit nisi. Donec semper, dui nec interdum lacinia, arcu nisi fermentum turpis, nec venenatis sem arcu non sem. Phasellus ut ipsum ut ex iaculis elementum nec eu sem.

Vivamus ac congue magna. Praesent mollis lacus nec justo porttitor, quis posuere leo vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id efficitur arcu. Pellentesque non erat pulvinar, condimentum leo faucibus, scelerisque nulla. Nam massa erat, vehicula non iaculis eu, aliquam sit amet augue. Nam fringilla faucibus justo, at ultricies tellus viverra vel. Maecenas aliquet dictum ex.

Vestibulum ultricies justo eu mattis tincidunt. Phasellus leo quam, pellentesque hendrerit mauris sit amet, faucibus condimentum lacus. Ut sed erat id risus gravida tempus. Aenean id lorem arcu. Curabitur id ante in velit suscipit sagittis. Etiam molestie pretium sapien, ut cursus diam imperdiet quis. Mauris lectus justo, sodales non magna id, sollicitudin euismod nunc. Nunc laoreet eleifend velit eu pellentesque. Vestibulum fringilla, sapien bibendum vulputate feugiat, nisl nunc hendrerit sapien, quis aliquam mauris felis in orci. Donec ac commodo dolor. In tempor sapien erat, sed semper neque ornare a. In hac habitasse platea dictumst.
Morbi tempor quis justo vitae imperdiet.`,
        a: "Answer",
        showAnswer: false,
        rating: undefined,
        deckName: "Test Deck 42",
      },
    };
  },
  created() {
    this.$eventHub.$on("askForConfirmationToQuitLearning", () => {
      if (this.$refs.confirmQuit) this.$refs.confirmQuit.show();
    });
  },
  beforeMount() {
    if (this.numberOfSelectedDecks === 0) {
      this.$router.replace("/");
    }
  },
  methods: {
    onRating(rating, programmatically=false) {
      // TODO: store rating
      if (programmatically === false) {
        // TODO: jump to next card
      }
    },
    updateVerticalCentering() {
      for (let el of document.getElementsByClassName("max-height")) {
        if (el.scrollHeight > el.clientHeight) {
          el.classList.remove("flex-center");
        } else {
          el.classList.add("flex-center");
        }
      }
    },
    confirmedQuit() {
      this.$router.replace("/");
    },
  },
  mounted() {
    this.updateVerticalCentering();
  },
  updated() {
    this.updateVerticalCentering();
  },
};
</script>

<style scoped>
.learn {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.max-height {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
  align-items: center;
  padding: 0 16px;
}
.flex-center {
  justify-content: center;
}
</style>