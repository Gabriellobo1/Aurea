import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/_Layout/app";
import NotFound from "./pages/404/page";
import Home from "./pages/Home/page";
import { Login } from "./pages/Login/page";
import { SignUp } from "./pages/Register/page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Login",
				element: <Login/>
			},
			{
				path: "/Cadastro",
				element: <SignUp/>
			}
		],
	},
]);
