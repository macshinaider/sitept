import React from "react";

const Header: React.FC = () => {
	return (
		<header className="bg-black">
			<div className="container mx-auto flex items-center justify-center h-full ">
				<div className="text-center">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
						Larean Priston Tale
					</h1>
					<p className="text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300">
						Servidor Totalmente Free To Play.
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
