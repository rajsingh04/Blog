import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "../Components";
import { useSelector } from "react-redux";
import { PostCard } from "../Components";
import Loader from "../Components/Loader/Loader";
const Home = () => {
	const [posts, setPosts] = useState([]);
	const [loader, setLoader] = useState(true);
	const authstatus = useSelector((state) => state.auth.status);

	useEffect(() => {
		appwriteService.getAllPosts().then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
			setLoader(false);
		});
	}, []);
	// if (posts.length === 0) {
	// 	return (
	// 		<div className="w-full py-8 mt-4 text-center">
	// 			<Container>
	// 				<div className="flex flex-wrap">
	// 					<div className="p-2 w-full">
	// 						<h1 className="text-2xl font-bold hover:text-gray-500">
	// 							{!authstatus ? "Login to see posts" : "No posts"}
	// 						</h1>
	// 					</div>
	// 				</div>
	// 			</Container>
	// 		</div>
	// 	);
	// }
	if (loader) {
		return <Loader />;
	}
	return (
		<div className="w-full py-8">
			<Container>
				<div className="flex flex-wrap">
					{posts.map((post) => (
						<div
							key={post.$id}
							className="p-2 w-1/4"
						>
							<PostCard {...post} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Home;
