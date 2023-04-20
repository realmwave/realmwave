import React from "react";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

import { IAskAIFeedbackCardProps } from "@/types";

import "./askaifeedbackcard.css";


export default function AskAIFeedbackCard({ review }: IAskAIFeedbackCardProps): JSX.Element {
	return (
		<div className="w-[280px] xs:w-[300px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[140px] xs:h-[150px] sm:h-[160px] md:h-[180px] lg:h-[190px] xl:w-[400px] xl:h-[200px] bg-white rounded-2xl p-4 overflow-hidden shadow-xl" >
			<div className="flex items-center justify-between" >
				<div className="flex items-center justify-center gap-2" >
					<img src={review.userProfile} alt="" className="w-[30px] xs:w-[32px] md:w-[35px] aspect-square rounded-full" />
					<div className="flex flex-col items-start justify-center" >
						<h4 className="app__primary-text text-[0.65rem] xs:text-[0.675rem] sm:text-[0.65rem] md:text-xs font-semibold text-black" >{review.username}</h4>
						<p className="app__secondary-text text-[0.6rem] xs:text-[0.55rem] sm:text-[0.57rem] md:text-[0.585rem] lg:text-[0.6rem] leading-2 text-[var(--color-grey)]" >On GooglePlay</p>
					</div>
				</div>
				<div className="flex items-center gap-[1px]" >
					{[...Array(Math.floor(review.rating)).keys()].map(i => (
						<BsFillStarFill key={i.toString()} className="text-[0.725rem] sm:text-[0.75rem] md:text-sm xl:text-base text-[#ffa534]" />
					))}
					{review.rating - Math.floor(review.rating) > 0 && <BsStarHalf className="text-[0.725rem] sm:text-[0.75rem] md:text-sm xl:text-base text-[#ffa534]" />}
				</div>
			</div>
			<div className="w-full mt-5" >
				<p className="app__secondary-text text-[0.775rem] xs:text-[0.8rem] sm:text-[0.85rem] md:text-sm xl:text-base text-black" >{review.reviewText}</p>
			</div>
		</div>
	)
};

