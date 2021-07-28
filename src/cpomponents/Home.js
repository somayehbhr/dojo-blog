import { useState, useEffect } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIspending] = useState(true);
	const [error, setError] = useState(null);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};
	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					if (!res.ok) {
						throw Error("could not fetch the data for that resource");
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					setIspending(false);
					setError(null);
				})
				.catch((e) => {
					setIspending(false);
					setError(e.message);
				});
		}, 1000);
	}, []);
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />}
		</div>
	);
};
