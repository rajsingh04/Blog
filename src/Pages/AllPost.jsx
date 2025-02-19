import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";
import Loader from "../Components/Loader/Loader";
const AllPost = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		appwriteService.getAllPosts().then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);
	console.log(posts);

	return (
		<div className="w-full py-8">
			<Container>
				<div className="flex flex-wrap">
					{posts.map((post) => {
						<div
							key={post.$id}
							className="p-2 w-1/4"
						>
							<PostCard {...post} />
						</div>;
					})}
				</div>
			</Container>
		</div>
	);
};

export default AllPost;
