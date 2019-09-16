<template>
  <div class="navbar-h">
    <input type="checkbox" id="open-mmenu" :style="{display:'none'}" />
    <div class="mobile menu-mobile">
      <div>
        <dir>
          <label for="open-mmenu">
            <i class="fa fa-times"></i>
          </label>
        </dir>
      </div>
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/evento">Evento</router-link>
        </li>
        <li>
          <router-link to="/organizacao">Organização</router-link>
        </li>
        <li>
          <router-link to="/cadastro">Inscrição</router-link>
        </li>
        <li>
          <router-link to="/submissao">Submissão</router-link>
        </li>
      </ul>
    </div>

    <div class="nav-info">
      <img src="assets/img/lampada.png" alt />
      <div>
        <span class="title">IV JCECEC</span>
        <br />
        <span>
          Jornada Científica da Escola de
          <br />Ciências Exatas e da Computação
        </span>
      </div>

      <div class="nav-date">
        <span class="desktop" :style="{textAlign: 'right'}">
          De 6 a 9 de Novembro
          <br />PUC Goiás
          <br />Goiânia-GO
        </span>

        <span class="mobile sm-device">
          De 6 a 9 de Novembro
          PUC Goiás
          Goiânia-GO
        </span>
      </div>

      <div class="mobile">
        <label for="open-mmenu">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div>
    <div class="nav-container desktop">
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/evento">Evento</router-link>
        </li>
        <li>
          <router-link to="/cadastro">Inscrição</router-link>
        </li>
        <li>
          <router-link to="/submissao">Submissão</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped >
.navbar-h {
  position: relative;
  padding: 20px 0;
  background-color: white;
  margin: auto;
  max-width: 1000px;
}
.navbar-h .nav-info {
  color: #576574;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.navbar-h .nav-info img {
  position: absolute;
  height: 113px;
  left: -80px;
}
.navbar-h .nav-info .title {
  font-size: 30px;
}
.navbar-h .nav-info > div {
  position: relative;
}
.navbar-h .nav-info > div:nth-child(2) {
  text-align: left;
}
.navbar-h .nav-info > div:last-child {
  text-align: right;
}
.navbar-h .nav-info span,
.navbar-h .nav-info p,
.navbar-h .nav-info h1,
.navbar-h .nav-info h2,
.navbar-h .nav-info h3 {
  color: inherit;
}
.navbar-h .nav-date {
  font-style: italic;
  font-size: smaller;
  display: flex;
  align-items: flex-end;
}
.navbar-h .nav-container {
  display: flex;
  justify-content: center;
}
.navbar-h .nav-container > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #576574;
}
.navbar-h .nav-container > ul li {
  position: relative;
  padding: 15px 45px;
  font-family: "Montserrat", sans-serif;
  color: #576574;
  transition: all 300ms ease;
}
.navbar-h .nav-container > ul li:hover {
  border-bottom: 2px solid #576574;
  margin-bottom: -2px;
  cursor: pointer;
}
.navbar-h .nav-container > ul li a {
  color: inherit;
}
.navbar-h .nav-container > ul li a:link {
  color: inherit;
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:active {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:visited {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:hover {
  border: none;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .navbar-h {
    position: unset;
    padding: 10px 0;
    margin: 0 15px;
  }
  .navbar-h .nav-info {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "lg t1 mn" "lg t2 mn";
  }
  .navbar-h .nav-info label {
    margin: 0;
  }
  .navbar-h .nav-info img {
    grid-area: lg;
    position: unset;
    left: unset;
    height: 90px;
    margin-right: 22px;
  }
  .navbar-h .nav-info > div {
    grid-area: t1;
  }
  .navbar-h .nav-info > div:last-child {
    grid-area: mn;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22pt;
  }
  .navbar-h .nav-info > div:last-child i {
    margin: 15px;
  }
  .navbar-h .nav-info .nav-date {
    grid-area: t2;
  }
}
@media screen and (max-width: 425px) {
  .navbar-h .nav-info > div:last-child i {
    margin: 5px;
  }
}
@media screen and (max-width: 375px) {
  .navbar-h .nav-info span {
    font-size: 12px;
    text-align: left;
  }
}
@media screen and (max-width: 320px) {
  .navbar-h {
    margin: 0 5px;
  }
  .navbar-h .nav-info img {
    margin-right: 10px;
  }
}

#open-mmenu:checked + div {
  right: 0;
}

.menu-mobile {
  position: absolute;
  z-index: 1000;
  background-color: white;
  padding: 15px;
  top: 0;
  right: -100%;
  bottom: 0;
  box-shadow: -2px -2px 16px;
  transition: right 800ms ease-in-out;
}
.menu-mobile ul {
  padding: 0;
  margin: 0;
}
.menu-mobile ul li {
  padding: 15px;
}
.menu-mobile > div {
  display: flex;
  justify-content: flex-end;
}
.menu-mobile > div i {
  margin: 15px;
}
.menu-mobile a {
  color: inherit;
}
.menu-mobile a:link {
  color: inherit;
  text-decoration: none;
}
.menu-mobile a:active {
  text-decoration: none;
}
.menu-mobile a:visited {
  text-decoration: none;
}
.menu-mobile a:hover {
  border: none;
  text-decoration: none;
}

@media screen and (min-width: 769px) {
  .mobile {
    display: none !important;
  }
}
@media screen and (max-width: 768px) {
  .desktop {
    display: none !important;
  }
}
@media screen and (max-width: 425px) {
  .lg-device {
    display: none !important;
  }
}
@media screen and (max-width: 375px) {
  .md-device {
    display: none !important;
  }
}
@media screen and (max-width: 320px) {
  .sm-device {
    display: none !important;
  }
}
</style>