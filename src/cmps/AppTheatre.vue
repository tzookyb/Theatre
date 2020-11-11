<template>
  <section class="">
    <div vif="theatre" class="seats">
      <div
        v-for="(row, rowIdx) in theatre"
        :key="rowIdx"
        class="row flex align-center justify-center"
      >
        <div
          v-for="(batch, batchIdx) in row"
          :key="rowIdx + '' + batchIdx"
          class="batch flex"
        >
          <div
            v-for="seat in batch"
            :key="seat.id"
            @click="selectSeat(seat, rowIdx, batchIdx)"
            class="seat"
            :class="{
              selected: selectedSeatId === seat.id,
              booked: !seat.isAvailable,
              'cursor-pointer': seat.isAvailable,
            }"
          ></div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <seat-info
        v-if="selectedSeat"
        :selectedSeat="selectedSeat"
        class="seat-info"
        @book="bookSeat"
      ></seat-info>
    </transition>
    <div class="msg">{{msg}}</div>
  </section>
</template>

<script>
import SeatInfo from "./SeatInfo.vue";
import { theatreService } from "@/services/theatreService";

export default {
  components: { SeatInfo },
  created() {
    this.loadTheatre();
  },

  data() {
    return {
      theatre: null,
      selectedSeatId: null,
      selectedSeat: null,
      msg: null,
    };
  },

  methods: {
    loadTheatre() {
      this.theatre = theatreService.getTheatre();
    },

    selectSeat(seat, rowIdx, batchIdx) {
      if (!seat.isAvailable) return;
      setTimeout(this.resetSelected, 5000);
      this.selectedSeat = { ...seat, rowIdx, batchIdx };
      this.selectedSeatId = seat.id;
    },

    resetSelected() {
      this.selectedSeat = null;
      this.selectedSeatId = null;
    },

    bookSeat(seat) {
      this.msg = "Seat booked";
      setTimeout(() => {
        this.msg = null;
      }, 2000);
      this.resetSelected();
      theatreService.book(seat);
      this.loadTheatre();
    },
  },
};
</script>