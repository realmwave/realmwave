/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { MasterLoading } from "@/components";
import { Navbar, AskAIHeroSection, NavbarModal, AskAIFeatureSection, AskAISocialProof, Faq, AskaiFooter, GotAProjectSection } from "@/containers";

import AskAIHomeSS from "@/assets/images/askai-home-ss.png";
import GooglePlayBadge from "@/assets/images/google-play-badge.png";

import "./askai.css";


export default function AskAi(): JSX.Element {

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	function closeNavbarModal() { setIsModalVisible(false) }
	function openNavbarModal() { setIsModalVisible(true) }

	return (
		<div className="w-full h-full relative" >
			<MasterLoading title="Ask AI" />
			<Navbar openNavbarModal={openNavbarModal} />
			<div className="app__shape-circle w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-square rounded-full absolute bottom-[10%] sm:-bottom-[0%] lg:-bottom-[5%] -right-[3%]" />
			<div className="w-[70%] h-[80%] bg-[#FBFBFD] absolute top-0 right-0 opacity-60" />
			<div className="app__shape-circle w-[150px] md:w-[200px] lg:w-[250px] aspect-square rounded-full absolute bottom-[34%] md:bottom-[22%] lg:bottom-[15.5%] -left-[9%]" />
			<AskAIHeroSection />
			<AskAIFeatureSection />
			<AskAISocialProof />
			<Faq />
			<div className="w-full flex flex-col items-center justify-center mb-16 sm:mb-20 md:mb-32" >
				<h1 className="app__brand-text text-base xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" >{"Get Instant Answers with Ask AI's"}</h1>
				<h1 className="app__brand-text text-base xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" >{"ChatGPT3.5 Turbo & Text Recognition!"}</h1>
				<img src={AskAIHomeSS} alt="" className="w-[160px] sm:w-[180px] md:w-[200px] my-10" />
				<a href="https://play.google.com/store/apps/details?id=com.realm.askai" target="_blank" className="cursor-pointer hover:scale-[1.05] duration-200" rel="noreferrer" >
					<img src={GooglePlayBadge} alt="google-play-badge" className="w-[135px] xl:w-[150px] object-cover" />
				</a>
			</div>
			<GotAProjectSection />
			<AskaiFooter />
			<AnimatePresence>
				{isModalVisible && <NavbarModal closeNavbarModal={closeNavbarModal} /> }
			</AnimatePresence>
		</div>
	)
};

