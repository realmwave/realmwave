import React from "react";

import { SectionWrapper } from "@/components";
import GooglePlayBadge from "@/assets/images/google-play-badge.png";

import "./askaihero.css";


export default function AskAIHeroSection(): JSX.Element {
	return (
		<SectionWrapper text={"Hello World".toUpperCase()} >
			<section className="w-full h-[85%] relative flex items-center justify-center" >
				<div className="w-[80%] flex items-center justify-between" >
					<div className="w-[45%] flex flex-col justify-center" >
						<h1 className="app__h1 text-[3.5rem] font-bold " >Ask Ai</h1>
						<h1 className="app__h1 text-[3.5rem] font-bold leading-[3rem]" >Powered by</h1>
						<h1 className="app__h1 text-[3.5rem] font-bold " >ChatGPT3.5 Turbo</h1>
						<p className="app__p w-2/3 text-[0.85rem] text-[var(--color-grey)] mt-2" >
							{"Ask AI allows effortless communication with ChatGPT, querying and extracting knowledge by scanning texts with a sophisticated text recognition feature."}
						</p>
						<div className="flex items-center gap-4 mt-10" >
							<a href="https://play.google.com/store/apps/details?id=com.realm.askai" target="_blank" className="cursor-pointer hover:scale-[1.05] duration-200" rel="noreferrer" >
								<img src={GooglePlayBadge} alt="google-play-badge" className="w-[150px] object-cover" />
							</a>
							<p className="app__p w-1/2 text-[0.85rem] text-[var(--color-brand)] font-medium" >{"Join our revolution to transform information search forever."}</p>
						</div>
					</div>
					<div className="w-[45%] bg-yellow-50" >
            w
					</div>
				</div>      
			</section>
		</SectionWrapper>
	)
};

