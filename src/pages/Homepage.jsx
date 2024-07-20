import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import Experiences from "../components/Experiences.jsx";
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
		<div className="bg-gray-100">
			<NavBar />
			<header>
				<Hero />
				<Categories />
			</header>
			{/* Experiences */}
			<main>
				<Experiences />
			</main>
		</div>
	);
}
