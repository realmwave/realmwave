import React from "react";
import { VscMenu } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

import { INavbarProps } from "@/types";

import BrandLogo from "@/assets/images/Realmwave-logo.png";

import "./navbar.css";


export default function Navbar({ openNavbarModal }: INavbarProps): JSX.Element {
	return (
		<nav className="absolute inset-auto w-full flex items-center justify-between px-4 xs:px-6 sm:px-8 py-4 z-50" >
			<div className="flex items-center gap-8 xs:gap-10 sm:gap-12 md:gap-24 z-50" >
				<VscMenu className="text-[var(--color-brand)] cursor-pointer text-[1.45rem] sm:text-[1.5rem] md:text-[1.75rem] scale-100 active:scale-90 hover:rotate-90 hover:scale-90 duration-100" onClick={openNavbarModal} />
				<a href="/" className="" >
					<div className="flex items-center gap-2 xs:gap-3 cursor-pointer" >
						<img src={BrandLogo} className="w-[30px] md:w-[35px] aspect-square" />
						<p className="app__brand text-[0.95rem] md:text-[1rem] font-bold" >Realmwave</p>
					</div>
				</a>
			</div>
			<div className="app__nav_button w-[85px] xs:w-[110px] md:w-[115px] h-[27px] md:h-[35px] flex items-center justify-center gap-1 bg-[var(--color-brand)] rounded-full cursor-pointer z-50" >
				<IoIosArrowForward className="text-white opacity-60 text-[0.7rem] xs:text-[0.775rem] md:text-[0.8rem]" />
				<button className="app__nav_button-text text-white text-[0.5rem] xs:text-[0.7rem] md:text-[0.725rem] font-semibold" >Get in touch</button>
			</div>
		</nav>
	)
};

