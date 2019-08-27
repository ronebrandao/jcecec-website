<template>
  <div class="speaker">
    <div class="avatar">
      <div></div>
    </div>
    <span class="name">
      <h4>PROFILE NAME</h4>
    </span>
    <div class="institution">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio!
    </div>
    <div class="speaking">
      <i>Lorem, ipsum dolor.</i>
    </div>
    <div class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque aperiam velit, voluptate necessitatibus distinctio corporis veniam ut assumenda. Fugit consectetur cumque sapiente ab consequuntur beatae tempore perspiciatis magni repellendus, sed facere error. Distinctio quibusdam quis rem, unde impedit soluta inventore ratione enim illo eligendi saepe, necessitatibus, mollitia vel deleniti maxime earum error dicta maiores sapiente dolorem ullam at architecto? Facilis modi consequatur veritatis similique architecto, expedita accusantium porro! Doloribus.
    </div>
    <div class="more">
      <v-btn color="primary">Leia completo</v-btn>
    </div>
  </div>
</template>

<script>

import { Component, Vue, Prop } from "vue-property-decorator";

export default class Speaker extends Vue {

}

</script>

<style scoped>

.speaker {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(6, auto);
  grid-template-areas: "avatar name" "avatar institution" "avatar speaking" "avatar description" "null more";
}
.speaker > * {
  margin: 0;
  padding: 0;
}
.speaker > * button {
  margin: 0;
}
.speaker .avatar {
  grid-area: avatar;
}
.speaker .avatar > div {
  width: 240px;
  height: 240px;
  margin-right: 25px;
  border-radius: 50%;
  background-image: url(https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg);
  background-size: cover;
}
.speaker .name {
  font-weight: 350;
  grid-area: name;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.speaker .name h1, .speaker .name h2, .speaker .name h3, .speaker .name h4, .speaker .name h5, .speaker .name h6 {
  font-weight: inherit;
  text-transform: uppercase;
}
.speaker .institution {
  grid-area: institution;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.speaker .speaking {
  grid-area: speaking;
  font-weight: bold;
}
.speaker .description {
  grid-area: description;
  margin: 15px 0;
}
.speaker .more {
  grid-area: more;
}
@media screen and (max-width: 768px) {
  .speaker {
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: "avatar" "name" "institution" "speaking" "description" "more";
    text-align: center;
  }
  .speaker .avatar > div {
    display: inline-block;
    margin: 0;
    margin-bottom: 22px;
  }
}
@media screen and (max-width: 425px) {
  .speaker .avatar > div {
    width: 180px;
    height: 180px;
  }
}
@media screen and (max-width: 375px) {
  .speaker .avatar > div {
    width: 160px;
    height: 160px;
  }
}
@media screen and (max-width: 320px) {
  .speaker {
    grid-template-columns: 100%;
  }
  .speaker .avatar > div {
    width: 140px;
    height: 140px;
  }
}

</style>