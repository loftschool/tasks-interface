import tasksPage from "../pages/tasksPage";
import commonPage from "../pages/commonPage";
import domPage from "../pages/domPage";

export default [
  {
    path: "/",
    component: tasksPage,
    children: [
      { path: "/", component: commonPage },
      { path: "/dom", component: domPage }
    ],
  },
];
