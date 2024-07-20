export default function Footer() {
	return (
		<footer className="bg-neutral-200 flex flex-col gap-4 p-4 md:py-8 md:px-20  border-[#B5C18E]">
			<div className="flex flex-col items-center gap-5">
				<div className="rounded-md shadow">
					<a
						href="#"
						className=" w-full flex  justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
					>
						Get Started
					</a>
				</div>
				<div className="hidden md:flex gap-36 justify-center mx-auto">
					<p className="text-neutral-500">กฎกติกา</p>
					<p className="text-neutral-500">ลงโฆษณา</p>
					<p className="text-neutral-500">สมัครงาน</p>
					<p className="text-neutral-500">ติดต่อทีมงาน</p>
				</div>
			</div>

			<p>&copy; This is a non-commercial project.</p>
		</footer>
	);
}
