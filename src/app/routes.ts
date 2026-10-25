import { createBrowserRouter } from "react-router"
import { Layout } from "./components"
import {
  About,
  Contact,
  Home,
  NotFound,
  Privacy,
  ServiceDetail,
  ServicesPage,
  Tours,
} from "./pages"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: ServicesPage },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "tours", Component: Tours },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
])
