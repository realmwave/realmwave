import React from "react";

import { ISectionWrapperProps } from "@/types";

import "./sectionwrapper.css";


export default function SectionWrapper({ children, text }: ISectionWrapperProps): JSX.Element {
	return (
		<div className="w-full h-full" >
			<div className="flex items-center gap-12 absolute top-[45%] -left-[3%] -rotate-90" >
				<p className="app__text text-[0.7rem] " >{text}</p>
				<div className="app__sectionwrapper-line w-[40px] h-[1px]" />
			</div>
			{children}
		</div>
	)
};

