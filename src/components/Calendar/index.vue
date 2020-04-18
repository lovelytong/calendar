<template>
  <div class="Calendar">
    <h3>
      {{ moment(current).format("YYYY[年]MM[月]") }}
      <button @click="gotoPreMonth">上一月</button>
      &nbsp;
      <button @click="gotoNextMonth">下一月</button>
    </h3>
    <div class="Calendar__body">
      <div v-for="item in weekDays" :key="item" class="Calendar__body--cell">
        {{ item }}
      </div>
      <div
        v-for="(item, index) in monthDays"
        :key="`date${index}`"
        @click="onDateClick(item)"
        class="Calendar__body--cell"
        :class="{
          'no-current-month': item.type !== 'current',
          'current-date': isToday(item.date),
          'has-agenda': hasAgenda(item.date),
          'pick-day': highlightPickday(item.date)
        }"
      >
        {{ moment(item.date).format("D") }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import './index.scss';
</style>

<script>
import moment from "moment";
export default {
  name: "Calendaar",
  props: {
    agendaList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: moment(new Date()),
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      pickDay: moment()
    };
  },
  computed: {
    monthDays() {
      const monthDays = this.getMonthDays(this.current).map(item => ({
        date: item,
        type: "current"
      }));
      const prevMonthDays = this.getPrevMonthDays(this.current).map(item => ({
        date: item,
        type: "pre"
      }));
      const nextMonthDays = this.getNextMonthDays(this.current).map(item => ({
        date: item,
        type: "next"
      }));
      return prevMonthDays.concat(monthDays, nextMonthDays);
    }
  },

  methods: {
    moment,

    onDateClick(item) {
      if (item.type === "pre") {
        this.gotoPreMonth();
      }
      if (item.type === "next") {
        this.gotoNextMonth();
      }
      this.pickDay = item.date;
    },
    highlightPickday(date) {
      return (
        moment(date).format("YYYY-MM--DD") ===
        moment(this.pickDay).format("YYYY-MM--DD")
      );
    },
    hasAgenda(date) {
      return this.agendaList.some(
        item =>
          moment(date).format("YYYY-MM--DD") ===
          moment(item).format("YYYY-MM--DD")
      );
    },
    isToday(date) {
      return (
        moment(date).format("YYYY-MM--DD") === moment().format("YYYY-MM--DD")
      );
    },
    gotoNextMonth() {
      this.current = moment(this.current).add(1, "month");
    },
    gotoPreMonth() {
      this.current = moment(this.current).subtract(1, "month");
    },
    getPrevMonthDays(current) {
      let lastMontEndDate = moment(current)
        .subtract(1, "month")
        .endOf("month");
      const prevMonthDays = [lastMontEndDate];
      const preLength = lastMontEndDate.day();
      if (preLength === 6) {
        return [];
      }
      for (let i = preLength; i > 0; i--) {
        prevMonthDays.unshift(moment(prevMonthDays[0]).subtract(1, "days"));
      }
      return prevMonthDays;
    },
    getNextMonthDays(current) {
      let nextMontStartDate = moment(current)
        .add(1, "month")
        .startOf("month");
      if (nextMontStartDate.day() === 0) {
        return [];
      }
      const nextMonthDays = [nextMontStartDate];

      const nextLength = 6 - nextMontStartDate.day();
      for (let i = 0; i < nextLength; i++) {
        nextMonthDays.push(
          moment(nextMonthDays[nextMonthDays.length - 1]).add(1, "days")
        );
      }
      return nextMonthDays;
    },
    getMonthDays(current) {
      const monthLength = current.endOf("month").date();
      const monthFirstDate = current.startOf("month");
      const monthDays = [monthFirstDate];
      for (let i = 1; i < monthLength; i++) {
        let newDay = moment(monthDays[i - 1]).add(1, "days");
        monthDays.push(newDay);
      }
      return monthDays;
    }
  },
  mounted() {}
};
</script>
