export default function NavBar() {
	return (
		<nav className="bg-white shadow">
			<section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
				<picture className="flex gap-2 text-3xl font-bold text-gray-900">
					<img src="./pantip-logo.png" alt="Pantip-logo" className="h-8" />
					<img
						src="./pantip-name.png"
						alt="Pantip-text"
						className="hidden md:block h-8"
					/>
				</picture>
				<nav className="space-x-4">
					<a href="#" className="text-gray-500 hover:text-gray-900">
						Home
					</a>
					<a href="#" className="text-gray-500 hover:text-gray-900">
						Topics
					</a>
					<a href="#" className="text-gray-500 hover:text-gray-900">
						Login
					</a>
					<a href="#" className="text-gray-500 hover:text-gray-900">
						Sign Up
					</a>
				</nav>
			</section>
		</nav>
	);
}
