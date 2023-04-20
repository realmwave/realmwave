import React from "react";

import { SectionWrapper, AskAIFeatureCard } from "@/components";

import "./askaifeature.css";


const features = [
	{
		id: 1,
		image: "",
		title: "Immersive UI",
		descriptions: "Revolutionize information seeking with Ask AI's sophisticated UI - a powerful and engaging experience."
	},
	{
		id: 2,
		image: "",
		title: "Scan & Ask",
		descriptions: "Unleash sophisticated text analysis with Ask AI's feature-rich scanning. What's your query?"
	},
	{
		id: 3,
		image: "",
		title: "Chat fluently",
		descriptions: "Experience the next level of conversational AI with Ask AI. Engage with effortless ease."
	},
	{
		id: 4,
		image: "",
		title: "Powered by ChatGPT Turbo",
		descriptions: "Fuel your chatbot capabilities with Ask AI's Turbo-powered backend. Explore boundless possibilities."
	},
];

export default function AskAIFeatureSection(): JSX.Element {
	return (
		<section className="w-full pt-20 md:pt-24 lg:pt-28 relative" >
			<SectionWrapper text={"Features".toUpperCase()} >
				<div className="app__shape-circle w-[200px] xs:w-[250px] lg:w-[300px] aspect-square rounded-full absolute top-[30%] md:top-[40%] lg:bottom-[5%] left-[10%] xs:left-[10%] sm:left-[20%] md:left-[35%] lg:left-[25%]" />
				<div className="w-full h-full flex flex-col justify-center items-center" >
					<div className="w-full flex flex-col items-center justify-center" > 
						<h1 className="app__brand-text text-[2rem] xs:text-[2.25rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] font-bold" >Like an assistant,</h1>
						<h1 className="app__brand-text text-[2rem] xs:text-[2.25rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] font-bold leading-10" >unlike any assistant</h1>
						<div className="mt-10 text-center" >
							<p className="app__brand-text text-[var(--color-brand)] text-[0.725rem] xs:text-[0.75rem] sm:text-[0.825rem] md:text-[0.85rem] lg:text-[0.875rem]" >We shape Our core capabilities around</p>
							<p className="app__brand-text text-[var(--color-brand)] text-[0.725rem] xs:text-[0.75rem] sm:text-[0.825rem] md:text-[0.85rem] lg:text-[0.875rem]" >lean product teams capable of delivering immense</p>
							<p className="app__brand-text text-[var(--color-brand)] text-[0.725rem] xs:text-[0.75rem] sm:text-[0.825rem] md:text-[0.85rem] lg:text-[0.875rem]" >value to individual or organizations worldwide.</p>
						</div>
						<div className="app__featurecard-container w-5/6 flex justify-center items-center py-20" >
							<div className="w-11/12 flex justify-center items-center flex-wrap gap-6" >
								{features.map(item => (
									<AskAIFeatureCard key={item.id.toString()} image={item.image} title={item.title} descriptions={item.descriptions} />
								))}
							</div>
						</div>
					</div>
				</div>
			</SectionWrapper>
		</section>
	)
};

