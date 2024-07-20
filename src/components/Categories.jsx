import {
	FaComputer,
	FaBook,
	FaTv,
	FaPlaneUp,
	FaFilm,
	FaBookOpen,
	FaMusic,
	FaCamera,
} from "react-icons/fa6";

const rooms = [
	{ id: "silicon", Component: FaComputer, label: "ซิลิคอนวัลเลย์" },
	{ id: "library", Component: FaBook, label: "ห้องสมุด" },
	{ id: "tv", Component: FaTv, label: "บางขุนพรหม" },
	{ id: "abroad", Component: FaPlaneUp, label: "ไกลบ้าน" },
	{ id: "movie", Component: FaFilm, label: "เฉลิมไทย" },
	{ id: "cartoon", Component: FaBookOpen, label: "การ์ตูน" },
	{ id: "music", Component: FaMusic, label: "เฉลิมกรุง" },
	{ id: "camera", Component: FaCamera, label: "กล้อง" },
];

export default function Categories() {
	const handleScroll = (event, id) => {
		event.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="bg-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-center text-2xl font-bold">เลือกห้อง</h1>
				<div className="grid grid-cols-4 gap-4 my-4 text-purple-600">
					{rooms.map(({ id, Component, label }) => (
						<a
							href={`#${id}`}
							key={id}
							onClick={(event) => handleScroll(event, id)}
						>
							<div className="text-4xl md:text-5xl transition-all duration-300 transform hover:scale-110 hover:text-indigo-400 flex flex-col items-center hover:cursor">
								<Component />
								<p className="text-sm mt-2 text-center">{label}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
