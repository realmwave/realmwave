import React, { useEffect } from "react";
//import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { SectionWrapper, AskAIFeedbackCard } from "@/components";

import review1 from "@/assets/images/review-1.jpg";
import review2 from "@/assets/images/review-2.jpg";
import review3 from "@/assets/images/review-3.jpg";
import AskAIHomeSS from "@/assets/images/askai-home-ss.png";

import "./askaisocialproof.css";


const socialProofs = [
	{
		id: 1,
		userProfile: review1,
		username: "Nishant Ambastha",
		rating: 5,
		reviewText: "Great app with awesome knowledge."
	},
	{
		id: 2,
		userProfile: review3,
		username: "Soumyaranjan Sahu",
		rating: 4,
		reviewText: "Currently the fastest and easiest to use ChatGPT in Play Market."
	},
	{
		id: 3,
		userProfile: review2,
		username: "Rahulkumar Verma",
		rating: 5,
		reviewText: "Excellent"
	},
]

export default function AskAISocialProof(): JSX.Element {

	useEffect(() => {
		function onScroll() {
			/* TODO */
		}

		window.addEventListener("scroll", onScroll)
	
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	

	return (
		<section className="w-full h-full relative" >
			<SectionWrapper text={"Social Proof".toUpperCase()} >
				<div className="w-full h-full flex justify-center items-center" >
					<div className="realtive w-4/5 xs:w-5/6 h-full flex flex-col bg-[var(--color-background)]" >
						<div className="w-[47%] xs:w-1/2 lg:w-2/5 h-3/4 flex flex-col items-center justify-center mx-[0.875rem] z-10" >
							<div>
								<h1 className="app__brand-text text-[1.25rem] xs:text-[1.875rem] sm:text-[2.25rem] md:text-[2.85rem] lg:text-[3rem] xl:text-[3.5rem] font-bold" >Global Reach</h1>
								<p className="app__primary-text text-[0.385rem] xs:text-[0.55rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.825rem] xl:text-[0.85rem] text-[var(--color-grey)]" >Our App Seamlessly Connects Users Across</p>
								<p className="app__primary-text text-[0.385rem] xs:text-[0.55rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.825rem] xl:text-[0.85rem] text-[var(--color-grey)]" >the United States, United Kingdom, India, Russia,</p>
								<p className="app__primary-text text-[0.385rem] xs:text-[0.55rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.825rem] xl:text-[0.85rem] text-[var(--color-grey)]" >Spain and Egypt for a Truly Revolutionary Experience!</p>
							</div>
						</div>
						<div className="absolute right-0 w-[65%] sm:w-3/5 lg:w-3/4 h-4/5 flex xs:items-start items-center xs:pt-40 sm:pt-28 md:pt-16 lg:pt-6 justify-center aspect-square bg-white z-0" >
							<img src={AskAIHomeSS} alt="askai-home" className="w-1/3 sm:w-1/3 lg:w-1/6 object-cover z-10" />
						</div>
						<div className="absolute right-0 bottom-0 w-full md:w-4/5 lg:w-2/3 h-fit overflow-x-scroll px-7 py-12 rounded-2xl z-10" >
							<div className="flex items-center gap-4 w-fit" >
								{socialProofs.map(item => (
									<AskAIFeedbackCard key={item.id.toString()} review={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</section>
	)
};

