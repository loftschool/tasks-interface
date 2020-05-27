import mainPage from "../pages/mainPage";
import taskList from "../pages/taskListPage";
import singleTask from "../pages/singleTaskPage";

export default [
  {
    path: "/",
    component: mainPage,
    redirect: "/common",
    children: [
      {
        path: ":category",
        component: taskList,
      },
    ],
  },
  {
    path: "/:category/:alias",
    component: singleTask,
  },
];
