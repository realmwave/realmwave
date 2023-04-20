import React from "react";
import { RxExternalLink } from "react-icons/rx";

import { SectionWrapper, Qna } from "@/components";

import "./faq.css";


const qnas = [
	{
		id: 1,
		question: "How can I download the app?",
		answerChild: () => (
			<div className="w-full flex items-center gap-1 mt-5" >
				<p className="app__primary-text text-[0.8rem] sm:text-sm text-[var(--color-brand)]" >
          You can download the app from Google Playstore.
				</p>
				<a href="https://play.google.com/store/apps/details?id=com.realm.askai" target="_blank" rel="noreferrer"  >
					<RxExternalLink className="text-base text-blue-500" />
				</a>
			</div>
		)
	},
	{
		id: 2,
		question: "Do I need subscription to use the app?",
		answerChild: () => (
			<div className="w-full flex items-center gap-1 mt-5" >
				<p className="app__primary-text text-[0.8rem] sm:text-sm text-[var(--color-brand)]" >
					{"No, Currently there is no subscription service to use the app. It's free to use."}
				</p>
			</div>
		)
	},
	{
		id: 3,
		question: "How does the text recognition works?",
		answerChild: () => (
			<div className="w-full flex items-center gap-1 mt-5" >
				<p className="app__primary-text text-[0.8rem] sm:text-sm text-[var(--color-brand)]" >
					{"Our application is equipped with a built-in text recognition feature, which can be accessed upon granting camera permissions. When a user captures an image or selects an image on their device, the app automatically scans for any text present in the picture. It is important to note that this feature is still in an experimental phase, and may not recognize handwriting. Additionally, it is optimized to recognize computer-generated text."}
				</p>
			</div>
		)
	},
	{
		id: 4,
		question: "Will there be a speech to text feature?",
		answerChild: () => (
			<div className="w-full flex items-center gap-1 mt-5" >
				<p className="app__primary-text text-[0.8rem] sm:text-sm text-[var(--color-brand)]" >
					{"Yes, Our platform will include a speech-to-text feature, enabling users to ask questions through voice commands. Additionally, our AI will have the capability to speak through a text-to-speech feature."}
				</p>
			</div>
		)
	},
]

export default function Faq(): JSX.Element {
	return (
		<section className="relative w-full mt-20 bg-white"  >
			<SectionWrapper text={"faq".toUpperCase()} >
				<div className="w-full h-full flex flex-col items-center justify-center" >
					<h3 className="app__brand-text text-sm sm:text-base text-[var(--color-brand)] font-medium" >FAQs</h3>
					<h1 className="app__brand-text text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-4xl text-[var(--color-brand)] font-bold mt-4 mb-2 sm:mb-4 md:mb-6" >Frequently asked questions</h1>
					<p className="app__primary-text text-base text-slate-400 font-medium" >{"Have questions?We're here to help."}</p>
					<div className="w-full flex flex-col items-center mt-20 mb-20" >
						{qnas.map(item => (
							<Qna key={item.id.toString()} question={item.question} answer={item.answerChild()} />
						))}
					</div>
				</div>
			</SectionWrapper>
		</section>
	)
};

