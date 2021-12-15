import {
  CalendarIcon,
  HomeIcon,
  TagIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import React from "react";
import { RouteProps, RouteObject, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Tasks from "./pages/Tasks";
import MainLayout from "./components/Layout/MainLayout";
import AppLayout from "./components/Layout/AppLayout";
import Register from "./pages/Auth/Register";
import Tags from "./pages/Tags";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import Error404 from "./pages/Error/Error404";
import Profile from "./pages/Profile";

export enum MenuKey {
  DEFAULT = "Default",
  LANDING = "Landing",

  HOME = "Home",
  TASKS = "Tasks",
  VIEWTASK = "ViewTask",
  EDITTASK = "EditTask",
  ADDTASK = "AddTask",
  TAGS = "Tags",
  EVENTS = "Events",

  LOGIN = "Login",
  REGISTER = "Register",

  SETTINGS = "Settings",
  PROFILE = "Profile",
}

interface NavProps extends RouteProps {
  icon: React.FC<React.ComponentProps<"svg">>;
  current: boolean;
}

export const nav: { [key: string]: NavProps } = {
  [MenuKey.HOME]: {
    icon: HomeIcon,
    current: false,
    path: "home",
    element: <Home />,
  },
  [MenuKey.TASKS]: {
    icon: ViewListIcon,
    current: false,
    path: "tasks",
    element: <Tasks />,
    children: [
      {
        path: "add",
        element: <Tasks />,
      },
      {
        path: "view/:id",
        element: <Tasks />,
      },
      {
        path: "edit/:id",
        element: <Tasks />,
      },
    ],
  },
  [MenuKey.TAGS]: {
    icon: TagIcon,
    current: false,
    path: "tags",
    element: <Tags />,
  },
  [MenuKey.EVENTS]: {
    icon: CalendarIcon,
    current: false,
    path: "events",
    element: <Events />,
  },
};

export const menu: { [key: string]: RouteObject } = {
  [MenuKey.DEFAULT]: { path: "*", element: <Error404 /> },
  [MenuKey.LANDING]: { path: "/", element: <Landing /> },

  [MenuKey.LOGIN]: { path: "/login", element: <Login /> },
  [MenuKey.REGISTER]: { path: "/register", element: <Register /> },
};

const settings: { [key: string]: RouteObject } = {
  [MenuKey.PROFILE]: { path: "profile", element: <Profile /> },
  [MenuKey.SETTINGS]: { path: "settings", element: <Settings /> },
  // [MenuKey.NOTIFICATIONS]: { path: "/notifications", element: <Notification /> },
};

export const getPath = (key: MenuKey): string => menu[key].path as string;

export default function routes(isLoggedIn: boolean): RouteObject[] {
  const navRoutes: RouteObject[] = Object.values(nav) as RouteObject[];
  const menuRoutes: RouteObject[] = Object.values(menu) as RouteObject[];
  const settingsRoutes: RouteObject[] = Object.values(
    settings
  ) as RouteObject[];

  return [
    {
      path: "/app",
      element: isLoggedIn ? <AppLayout /> : <Navigate to="/login" />,
      children: [...navRoutes, ...settingsRoutes],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [...menuRoutes],
    },
  ];
}
