import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { AuthLayout } from "./Components/index.js";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import AllPosts from "./Pages/AllPost.jsx";
import EditPost from "./Pages/EditPost.jsx";
import AddForm from "./Pages/AddForm.jsx";
import Post from "./Pages/Post.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
		>
			<Route
				path=""
				element={<Home />}
			/>
			<Route
				path="login"
				element={
					// <AuthLayout authentication={false}>
					<Login />
					// </AuthLayout>
				}
			/>
			<Route
				path="signup"
				element={
					// <AuthLayout authentication={false}>
					<Signup />
					// </AuthLayout>
				}
			/>
			<Route
				path="all-posts"
				element={
					// <AuthLayout authentication={true}>
					<AllPosts />
					// </AuthLayout>
				}
			/>
			<Route
				path="add-post"
				element={
					// <AuthLayout authentication={true}>
					<AddForm />
					// </AuthLayout>
				}
			/>
			<Route
				path="edit-post/:slug"
				element={
					// <AuthLayout authentication={true}>
					<EditPost />
					// </AuthLayout>
				}
			/>
			<Route
				path="post/:slug"
				element={<Post />}
			/>
		</Route>
	)
);
createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
