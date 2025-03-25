function Card(props) {
	return (
		<div className="min-w-[400px] rounded overflow-hidden shadow-lg flex justify-center flex-col items-center">
			<div className="display flex flex-row">
				<div className="w-1/2">
					<img
						className="w-[300px] pl-2"
						src={props.image}
						alt="Image Not found :/"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center justify-center">
					<div className="px-6 py-4">
						<div className="font-bold text-purple-500 text-xl mb-2">
							{props.title}
						</div>
						<p className="text-gray-700 text-base">{props.year}</p>
					</div>
				</div>
			</div>

			<div className="px-6 py-4 flex flex-wrap gap-2 flex-row justify-center items-center">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
					Rating:&nbsp;{props.rating}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
					{props.genre}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
					{props.director}
				</span>
			</div>
		</div>
	);
}
export default Card;
