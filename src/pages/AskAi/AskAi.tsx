/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { MasterLoading } from "@/components";
import { Navbar, AskAIHeroSection, NavbarModal, AskAIFeatureSection } from "@/containers";

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
			<AnimatePresence>
				{isModalVisible && <NavbarModal closeNavbarModal={closeNavbarModal} /> }
			</AnimatePresence>
		</div>
	)
};

