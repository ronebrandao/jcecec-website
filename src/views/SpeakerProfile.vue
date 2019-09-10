<template>
  <div>
    <header class="banner" :style="{backgroundImage: `url(${defaults.bgBanner})`}">
      <div>
        <div :style="{backgroundImage: `url(${speaker.img})`}"></div>
        <div>
          <div>
            <h1>{{speaker.name}}</h1>
            <h4>{{speaker.institution}}</h4>
          </div>
        </div>
      </div>
    </header>

    <div class="main">
      <label for="curriculum">
        <h4>Curriculum</h4>
      </label>
      <input type="checkbox" id="curriculum" class="toggle" />
      <div>
        <div>
          <p>{{speaker.description}}</p>
        </div>
      </div>

      <label for="palestra">
        <h4>Palestra</h4>
      </label>
      <input type="checkbox" id="palestra" class="toggle" />
      <div>
        <div>
          <i>
            <h5>{{speaker.speaking}}</h5>
          </i>
          <p>{{speaker.subjectResume}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import speakers from "@/models/speakers";

@Component
export default class SpeakerProfile extends Vue {
  private speaker: any;
  private defaults: any;
  private speakersList: any;

  constructor() {
    super();
    this.speakersList = speakers;
    this.defaults = {
      bgBanner:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    };
  }

  private created() {
    this.speaker = this.speakersList.filter(
      (speaker: any) => speaker.name === this.$router.currentRoute.query.name
    )[0];
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 113.75px;
  height: 250px;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 16.284233901vw;
  margin-bottom: 125px;
}
.banner > div {
  position: absolute;
  height: 250px;
  display: flex;
  bottom: -60%;
  text-align: left;
  width: 67.431532198vw;
}
.banner > div > div:first-child {
  width: 250px;
  height: 250px;
  border-radius: 35px;
  border: 5px solid white;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25),
    0 10px 15px 0 rgba(0, 0, 0, 0.08);
  background-size: cover;
}
.banner > div > div:last-child {
  padding-left: 45px;
  align-self: flex-end;
}

.main {
  padding: 120px 220px;
  text-align: left;
}
.main h4 {
  user-select: none;
  text-transform: uppercase;
  border-bottom: 2px solid;
  padding: 5px 0;
  transition: background-color 300ms ease;
}
.main h4:hover {
  cursor: pointer;
  background-color: lightgray;
}
.main p {
  text-align: justify;
}
.main > div {
  overflow: hidden;
}
.main > div > div {
  padding: 10px 0;
}
.main label {
  display: block;
}
.main input[type="checkbox"] {
  display: none !important;
}
.main .toggle:checked + div {
  height: 0;
}
</style>