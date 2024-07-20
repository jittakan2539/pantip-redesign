import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "./pages/Homepage";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<HomePage />
					<Outlet />
				</>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
