import React from "react";

import { ISectionWrapperProps } from "@/types";

import "./sectionwrapper.css";


export default function SectionWrapper({ children, text }: ISectionWrapperProps): JSX.Element {
	return (
		<div className="h-full" >
			<div className="flex items-center absolute top-[45%] -left-[13.25%] xs:-left-[10.5%] sm:-left-[6%] md:-left-[5%] lg:-left-[4%] xl:-left-[2.25%] -rotate-90" >
				<p className="app__text text-[0.7rem]" >{text}</p>
				<div className="app__sectionwrapper-line w-[40px] h-[1px] ms-6" />
			</div>
			{children}
		</div>
	)
};

