<template>
  <div class="home">
    <Calendar></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar";
import solarLunar from "./solarlunar";
export default {
  name: "Home",
  components: {
    Calendar
  },
  created() {
    const solar2lunarData = solarLunar.solar2lunar(2015, 10, 8);
    console.log("solar2lunarData", solar2lunarData);
  }
};
</script>
