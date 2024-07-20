export default function Categories() {
	return (
		<section className="bg-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center overflow-x-scroll py-4 space-x-4">
					{[
						"Icons",
						"Beachfront",
						"Rooms",
						"Amazing views",
						"Design",
						"Castles",
						"OMG!",
						"Cabins",
					].map((category) => (
						<div key={category} className="flex-shrink-0">
							<div className="text-center px-4">
								<img
									className="h-12 w-12 rounded-full mx-auto"
									src={`/${category.toLowerCase().replace(/ /g, "-")}.png`}
									alt={category}
								/>
								<p className="mt-2 text-gray-600">{category}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
