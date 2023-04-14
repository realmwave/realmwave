import React from "react";

import { IAskAIFeatureCardProps } from "@/types";

import "./askaifeaturecard.css";


export default function AskAIFeatureCard({ image, title, descriptions }: IAskAIFeatureCardProps): JSX.Element {
	return (
		<div className="w-[270px] aspect-[3/4] rounded-3xl shadow-2xl hover:scale-105 duration-200 relative card overflow-hidden bg-white" >
			<div className="overlay -z-10" />
			<div className="w-full h-full flex flex-col justify-center items-center p-5" >
				<div className="flex w-full h-2/3 rounded-t-2xl pb-3" >
					<img src={image} alt="feature" className="w-full rounded-t-2xl" />
				</div>
				<div className="flex flex-col w-full h-1/3 rounded-b-2xl p-3 bg-gray-50" >
					<h3 className="app__brand-text font-semibold text-[0.9rem]" >{title}</h3>
					<p className="app__primary-text text-[0.7rem] mt-2" >{descriptions}</p>
				</div>
			</div>
		</div>
	)
};

