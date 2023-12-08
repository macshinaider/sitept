export const Prompt = () => {
	return (
		<div className="container">
			<div className="terminal_toolbar flex justify-between items-center px-8 bg-gray-800 rounded-t-lg">
				<div className="butt flex items-center">
					<button className="btn"></button>
					<button className="btn"></button>
					<button className="btn btn-color"></button>
				</div>
				<p className="user text-gray-400 text-sm ml-6">
					Larean Priston Tale: ~
				</p>
				<div className="add_tab border border-white text-white px-6 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer">
					+
				</div>
			</div>
			<div className="terminal_body bg-opacity-60 bg-black rounded-bl-lg rounded-br-lg">
				<div className="terminal_promt flex">
					<span className="terminal_user text-green-500">
						lucassantana@larean.com.br:
					</span>
					<span className="terminal_location text-blue-500">~</span>
					<span className="terminal_bling text-gray-700">$</span>
					<span className="terminal_cursor  text-white">
						{" "}
						Servidor em Fase de Beta, Tenha Paciencia{" "}
					</span>
				</div>
			</div>
		</div>
	);
};
