<template>
  <div class="navbar-h">
    <div class="nav-info">
      <img src="assets/img/lampada.png" alt="">
      <div>
        <span class="title">IV JCECEC</span><br>
        <span>Jornada Científica da Escola de<br> Ciências Exatas e da Computação</span>
      </div>
      
      <div class="nav-date">
        <span>
          De 6 a 9 de Novembro<br>
          PUC Goiás<br>
          Goiânia-GO
        </span>
      </div>
    </div>
    <div class="nav-container">
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
.navbar-h .nav-info span, .navbar-h .nav-info p, .navbar-h .nav-info h1, .navbar-h .nav-info h2, .navbar-h .nav-info h3 {
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
</style>