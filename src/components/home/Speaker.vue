<template>
  <div class="speaker">
    <div>
      <div v-bind:style="avatarStyle()"></div>
    </div>

    <div>
      <h3>{{ speaker.name }}</h3>
      <p>{{ speaker.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Speaker",
  props: ["speaker"],
  data() {
    return {
      avatarStyle() {
        return {
          backgroundImage: this.speaker.avatar ?
          `url(${this.speaker.avatar})` :
          `url(https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png)`
        };
      }
    };
  }
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.speaker {
  display: flex;
}
.speaker > div:first-child {
  border-radius: 50%;
  border: 2px solid black;
  overflow: hidden;
  margin: 5px 15px 5px 5px;
}
.speaker > div:first-child div {
  width: 60px;
  height: 60px;
  background-size: cover;
  object-fit: cover;
}
.speaker > div:last-child {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 15px;
}
.speaker > div:last-child > *:not(:last-child) {
  margin-bottom: 5px;
}

</style>