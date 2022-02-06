import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";

function Home() {
	return (
		<div>
			<div className="flex justify-between text-center md:mx-20 pt-32">
				<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
					<Image
						src={heroImage}
						alt="heroImage"
						layout="fill"
						objectFit="cover"
						className=" rounded-full cursor-pointer hidden md:block"
					/>
				</div>
				<div className="flex flex-col ml-20 mt-10">
					<h1 className="font-bold text-7xl text-left mb-5">
						Hello, I am <span className="text-indigo-900">Jenny</span>
					</h1>
					<p className="text-left font-normal mb-5 flex-wrap">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
						aperiam placeat molestiae atque tempore perspiciatis laboriosam
						quasi pariatur, vitae sequi veritatis veniam rerum, quos consectetur
						commodi rem totam voluptatum? Hic!
					</p>
					<a
						href="#"
						className="font-semibold text-white mt-10 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black"
					>
						See My Portfolio !
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
