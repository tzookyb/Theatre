<template>
  <section class="seat-info flex column align-center justify-center">
    <h3>Selected Seat:</h3>
    <p>Price: ${{ selectedSeat.price }}</p>
    <button @click="bookSeat">Book Seat</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    selectedSeat: Object,
  },

  methods: {
    bookSeat() {
      this.$emit("book", this.selectedSeat);
    },
  },
};
</script>