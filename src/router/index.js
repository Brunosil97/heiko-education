import { createRouter as _createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "journals" },
  },
  {
    path: "/journals",
    name: "journals",
    component: () => import("@/components/BlogContainer.vue"),
    meta: {
      title: "Heiko Journals",
    },
  },
  {
    path: "/journal/:slug",
    name: "journalEntry",
    component: () => import("@/components/JournalRender.vue"),
    props: true,
    meta: {
      title: "Journal Entry",
    },
  },
];

const createRouter = (app) => {
  const router = _createRouter({
    scrollBehavior: (_to, _from, savedPosition) => {
      return savedPosition || { left: 0, top: 0 };
    },
    history: createWebHistory(),
    base: "/",
    routes,
  });

  return router;
};

export default (app) => createRouter(app);
