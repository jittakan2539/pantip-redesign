import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import SiliconValley from "../components/Rooms/SiliconValley.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
	const [pantipData, setPantipData] = useState({});

	//get information from pantip
	async function getDataFromPantip() {
		const response = await fetch(
			"https://pantip.com/api/forum-service/home/get_suggest_topic_popular"
		);
		const { data } = await response.json();
		setPantipData(data);
		console.log(data);
	}

	useEffect(() => {
		getDataFromPantip();
	}, []);

	return (
		<div className="bg-gray-100 ">
			<NavBar />
			<section className="bg-gradient-to-t from-purple-400 to-indigo-200 h-full">
				<Hero />
			</section>

			{/* Experiences */}
			<main>
				<Categories />
				<SiliconValley />
			</main>
			<Footer />
		</div>
	);
}
