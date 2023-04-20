import React from "react";

import OrbitLogo from "@/assets/svg/orbit-logo.svg";
import RocketWhiteLogo from "@/assets/svg/rocket-logo-white.svg";
import TestTubeLogo from "@/assets/svg/test-tube-logo.svg";
import UfoLogo from "@/assets/svg/ufo-logo.svg";
import { SectionWrapper, GotAProjectCard } from "@/components";

import "./gotaprojectsection.css";
import { IoIosArrowForward } from "react-icons/io";


const gotaproject = [
	{
		id: 1,
		icon: OrbitLogo,
		headline: "Stakeholders over placehoders",
		bodyText: "Digital Ecosystem continously keeps evolving.",
		containerClass: "relative w-full h-[450px] rounded-[3rem] justify-end flex flex-col items-center",
	},
	{
		id: 2,
		icon: TestTubeLogo,
		headline: "Small teams,\nBig Ideas.",
		bodyText: "To remain successful we have to experiment with trending technologies and new approaches.",
		containerClass: "relative w-full h-[450px] rounded-[3rem] justify-end flex flex-col items-center bg-[var(--color-brand)]",
	},
	{
		id: 3,
		icon: UfoLogo,
		headline: "Rise by lifting others.",
		bodyText: "While everything changes, the key to a successful digital product remains the same.",
		containerClass: "relative w-full h-[450px] rounded-[3rem] justify-end flex flex-col items-center",
	},
	{
		id: 4,
		icon: RocketWhiteLogo,
		headline: "Start small,\nDream big.",
		bodyText: "Our product teams excel at building high performence digital products, across all platforms and devices.",
		containerClass: "relative w-full h-[450px] rounded-[3rem] justify-end flex flex-col items-center bg-[var(--color-brand)]",
	},
]

export default function GotAProjectSection(): JSX.Element {
	return (
		<section className="w-full relative my-32" >
			<SectionWrapper text={"Contact US".toUpperCase()} >
				<div className="w-full flex flex-col justify-center items-center " >
					<div className="w-5/6 h-4/5 flex flex-col justify-center items-center py-20 px-6 sm:px-16 bg-[#F0F0F0]" >
						<div className="w-full" >
							<div className="px-4 py-2 bg-white rounded-full w-fit" >
								<p className="app__brand-text text-[0.75rem] xs:text-[0.8rem] lg:text-[0.85rem] font-semibold" >Our Core Values</p>
							</div>
							<h1 className="app__primary-text text-[1.25rem] xs:text-[1.45rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold mt-4 sm:mt-0" >{"Want to Make something"}</h1>
							<h1 className="app__primary-text text-[1.25rem] xs:text-[1.45rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-6 mb-6 md:mb-12" >{"you are Proud of?"}</h1>
							<p className="app__primary-text text-[0.725rem] sm:text-[0.75rem] md:text-[0.825rem] lg:text-[0.85rem] text-[var(--color-grey)]" >Successful project relationships transform us from</p>
							<p className="app__primary-text text-[0.725rem] sm:text-[0.75rem] md:text-[0.825rem] lg:text-[0.85rem] text-[var(--color-grey)] md:mb-20" >suppliers to partners and beyond.</p>
						</div>
						<div className="w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-0 mb-28" >
							{gotaproject.map(item => (
								<GotAProjectCard
									_id={(item.id === 2) || (item.id === 4) ? item.id : null}
									key={item.id.toString()}
									headline={item.headline}
									icon={item.icon}
									bodyText={item.bodyText}
									className={item.containerClass}
									textColor={(item.id === 2) || (item.id === 4) ? "white" : "black"}
								/>
							))}
						</div>
						<div className="app__nav_button w-fit ps-6 pe-14 py-4 flex items-center gap-1 bg-[var(--color-brand)] rounded-full cursor-pointer" >
							<IoIosArrowForward className="text-white opacity-60 text-[0.75rem] md:text-[0.875rem]" />
							<p className="app__nav_button-text text-white text-[0.75rem] md:text-base font-semibold" >Get in touch</p>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</section>
	)
};

