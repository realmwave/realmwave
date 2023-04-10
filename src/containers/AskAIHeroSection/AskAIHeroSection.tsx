import React from "react";

import { SectionWrapper } from "@/components";
import GooglePlayBadge from "@/assets/images/google-play-badge.png";
import AskAIHomeSS from "@/assets/images/askai-home-ss.png";

import "./askaihero.css";


export default function AskAIHeroSection(): JSX.Element {
	return (
		<SectionWrapper text={"Hello World".toUpperCase()} >
			<section className="w-full h-full flex flex-col items-center justify-center" >
				<div className="w-full lg:h-[85%] relative flex items-center justify-center" >
					<div className="lg:w-[75%] xl:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-0" >
						<div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center pt-8 lg:pt-0" >
							<h1 className="hidden lg:visible lg:block app__h1 lg:text-[2.65rem] xl:text-[3.4rem] font-bold " >Ask Ai</h1>
							<h1 className="hidden lg:visible lg:block app__h1 lg:text-[2.65rem] xl:text-[3.4rem] font-bold md:leading-[1.875rem] lg:leading-[2rem] xl:leading-[3rem]" >Powered by</h1>
							<h1 className="hidden lg:visible lg:block app__h1 lg:text-[2.65rem] xl:text-[3.4rem] font-bold " >ChatGPT3.5 Turbo</h1>
							<div className="visible lg:hidden flex flex-col items-center" >
								<h1 className="app__h1 text-[1.65rem] xs:text-[2rem] sm:text-[2.5rem] lg:text-[2.875rem] xl:text-[3.4rem] font-bold leading-[1.875rem]" >Ask Ai Powered by</h1>
								<h1 className="app__h1 text-[1.65rem] xs:text-[2rem] sm:text-[2.5rem] lg:text-[2.875rem] xl:text-[3.4rem] font-bold " > ChatGPT3.5 Turbo</h1>
							</div>
							<p className="app__p w-3/4 xs:w-3/5 sm:w-1/2 lg:w-4/5 xl:w-2/3 text-[0.65rem] xs:text-[0.675rem] sm:text-[0.7rem] lg:text-[0.725rem] xl:text-[0.8rem] text-center lg:text-start text-[var(--color-grey)] mt-4" >
								{"Ask AI allows effortless communication with ChatGPT, querying and extracting knowledge by scanning texts with a sophisticated text recognition feature."}
							</p>
							<div className="w-3/5 md:w-1/2 lg:w-auto flex items-center justify-center lg:justify-start gap-4 mt-7 lg:mt-10" >
								<a href="https://play.google.com/store/apps/details?id=com.realm.askai" target="_blank" className="cursor-pointer hover:scale-[1.05] duration-200" rel="noreferrer" >
									<img src={GooglePlayBadge} alt="google-play-badge" className="w-[135px] xl:w-[150px] object-cover" />
								</a>
								<p className="app__p w-[95%] xs:w-3/5 sm:w-1/2 text-[0.5rem] xs:text-[0.7rem] sm:text-[0.75rem] text-[var(--color-brand)] font-medium" >{"Join our revolution to transform information search forever."}</p>
							</div>
						</div>
						<div className="w-3/4 sm:w-2/3 md:w-[45%] flex justify-center items-center" >
							<div className="relative w-[70%] md:w-[80%] flex items-center justify-center" >
								<img src={AskAIHomeSS} alt="askai-scan" className="absolute w-1/2 xs:w-[35%] md:w-[40%] -right-10 xs:right-0 md:-right-5 lg:-right-5 xl:-right-8 scale-90 object-cover" />
								<img src={AskAIHomeSS} alt="askai-chat" className="absolute w-1/2 xs:w-[35%] md:w-[40%] -left-10 xs:left-0 md:-left-5 lg:-left-5 xl:-left-8 scale-90 object-cover" />
								<img src={AskAIHomeSS} alt="askai-home" className="w-1/2 xs:w-[35%] md:w-[40%] object-cover z-10" />
							</div>
						</div>
					</div>
				</div>
				<div className="visible absolute bottom-0 flex flex-col justify-center items-center" >
					<div className="w-[25px] h-[40px] border-[2px] border-[var(--color-brand)] rounded-3xl" >
						<div className="app__scroll-indicator" />
					</div>
					<p className="app__p text-[0.75rem] font-medium mt-2" >Scroll Down</p>
				</div>
			</section>
		</SectionWrapper>
	)
};

