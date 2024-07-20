export default function Hero() {
	return (
		<header className="  mx-auto max-w-7xl px-4 py-20">
			<div className="text-center bg-color">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span className="block xl:inline">Welcome to</span>{" "}
					<span className="block text-purple-900 xl:inline">Pantip</span>
				</h1>
				<p className="mt-3 text-base text-neutral-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
					ชุมชนออนไลน์ที่คุณจะได้แชร์ความคิดเห็นอย่างสร้างสรรค์
					ไม่ว่าจะเป็นด้านเทคโนโลยีไปจนถึงไลฟสไตล์
				</p>
				<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
					<div className="rounded-md shadow">
						<a
							href="#"
							className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-indigo-900 md:py-4 md:text-lg md:px-10"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
