export default function Library() {
	return (
		<section id="library" className="py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl font-extrabold text-gray-900 mb-6">ห้องสมุด</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							title: "Go VIP with Kevin Hart",
							host: "Kevin Hart",
							date: "Coming July",
							image: "kevin-hart.jpg",
						},
						{
							title: "Join a living room session with Doja",
							host: "Doja Cat",
							date: "Coming October",
							image: "doja-cat.jpg",
						},
						{
							title: "Stay in Prince’s Purple Rain house",
							host: "Wendy and Lisa",
							date: "Coming October",
							image: "purple-rain.jpg",
						},
						{
							title: "Train at the X-Mansion",
							host: "Jubilee",
							date: "Booking closed",
							image: "x-mansion.jpg",
						},
						{
							title: "Open the Olympic Games at Musée d’Orsay",
							host: "Mathieu Lehanneur",
							date: "Sold out",
							image: "olympic-games.jpg",
						},
						{
							title: "Wake up in the Musée d’Orsay",
							host: "Mathieu Lehanneur",
							date: "Sold out",
							image: "musee-dorsay.jpg",
						},
					].map((exp) => (
						<div
							key={exp.title}
							className="bg-white shadow-lg rounded-lg overflow-hidden"
						>
							<img
								src={exp.image}
								alt={exp.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-semibold">{exp.title}</h3>
								<p className="text-gray-600">Hosted by {exp.host}</p>
								<p className="text-gray-500">{exp.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
