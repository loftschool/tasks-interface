import mainPage from "../pages/mainPage";
import taskList from "../pages/taskListPage";

export default [
  {
    path: "/",
    component: mainPage,
    children: [{ path: "/:category", component: taskList }],
  },
];
