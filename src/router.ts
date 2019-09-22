import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SignUp/SignUp.vue")
    },
    {
      path: "/cadastro/confirmacao",
      name: "confirmacao",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SignUp/Confirm.vue")
    },
    {
      path: "/submissao",
      name: "submissao",
      component: () =>
        import(/* webpackChunkName: "submissions" */ "./views/SubmissionRules.vue")
    },
    {
      path: "/conta",
      name: "conta",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Admin/MyAccount.vue")
    },
    {
      path: "/evento",
      name: "evento",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Evento.vue")
    },
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/SpeakerProfile.vue")
    },
    {
      path: "/manutencao",
      name: "manutencao",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Maintenance.vue")
    },
    {
      path: "/minicursos",
      name: "minicursos",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/MaintenancePage.vue")
    },
    {
      path: "/competicao",
      name: "competicao",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/MaintenancePage.vue")
    },
    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/four04.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith("/manutencao")) {
//     next();
//   } else {
//     next("/manutencao");
//   }
// });

export default router;
