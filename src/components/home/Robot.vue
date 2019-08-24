<template>
  <v-container class="robot-card">
    <v-layout row wrap>
      <v-flex xs12 md5>
        <span class="img-robot">
          <img src="/assets/img/robot/rb1.jpg" height="625" width="560" />
        </span>
      </v-flex>
      <v-flex xs12 md5 offset-md-1>
        <div class="name-robot">
          <span class="name">
            <h2>Competição de robôs</h2>
          </span>
        </div>
        <div class="f-desc text-left">
          <p>"lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"</p>
        </div>
        <div class="s-desc text-left">
          <p>"lievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"</p>
        </div>
        <div class="more">
          <v-btn color="primary">Saiba mais</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Speakers extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
  padding: 10px;
}

.more {
  text-align: start;
}

.more button {
  width: 140px;
}

.img-robot {
  border: 1px solid #ececec;
}

.name-robot {
  text-align: left;
  margin-top: 40px;
}

@media screen and (max-width: 576px) {
  .img-robot img {
    width: 375px !important;
    height: 440px !important;
  }
  .more {
    margin-left: 10px !important;
  }
}

.robot-card {
  margin: 0 auto;
}

.name {
  font-size: 30px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  color: #2776f5;
  text-align: left;
}

.name h2 {
  margin-left: 10px;
}

.f-desc,
.s-desc {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  color: #626262;
  text-align: center;
  margin-top: 30px;
  padding: 0 20px;
}

.f-desc {
  font-size: 16px;
}

.s-desc {
  line-height: 1.7;
}

.container {
  max-width: 1170px;
}

h2 {
  font-family: "Roboto", Helvetica, Arial, sans-serif !important;
}
</style>
