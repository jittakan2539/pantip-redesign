import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import SiliconValley from "../components/Rooms/SiliconValley.jsx";
import Library from "../components/Rooms/Library.jsx";
import Tv from "../components/Rooms/Tv.jsx";
import Abroad from "../components/Rooms/Abroad.jsx";
import Movie from "../components/Rooms/Movie.jsx";
import Cartoon from "../components/Rooms/Cartoon.jsx";
import Music from "../components/Rooms/Music.jsx";
import Camera from "../components/Rooms/Camera.jsx";
import Footer from "../components/Footer.jsx";
import { FaCircleUp } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
	const [pantipData, setPantipData] = useState({});

	//get information from pantip
	/* async function getDataFromPantip() {
		const response = await fetch(
			"https://pantip.com/api/forum-service/home/get_suggest_topic_popular"
		);
		const { data } = await response.json();
		setPantipData(data);
		console.log(data);
	} */

	function scrollToTop() {
		window.scroll({ top: 0 });
	}

	// useEffect(() => {
	// 	getDataFromPantip();
	// }, []);

	return (
		<div className="bg-gray-100 ">
			<NavBar />
			<section className="bg-gradient-to-t from-purple-400 to-indigo-200 h-full">
				<Hero />
			</section>
			<FaCircleUp
				className="fixed bottom-10 right-10 text-4xl text-purple-600 cursor-pointer hover:text-indigo-400 transition-all duration-300"
				onClick={scrollToTop}
			/>

			{/* Experiences */}
			<main>
				<Categories />
				<SiliconValley />
				<Library />
				<Tv />
				<Abroad />
				<Movie />
				<Cartoon />
				<Music />
				<Camera />
			</main>

			<Footer />
		</div>
	);
}
