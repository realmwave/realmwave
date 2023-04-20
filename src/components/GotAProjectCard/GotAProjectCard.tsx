import React from "react";

import { IGotAProjectCardProps } from "@/types";

import "./gotaprojectcard.css";


export default function GotAProjectCard({ _id, headline, icon, bodyText, textColor, ...containerProps }: IGotAProjectCardProps): JSX.Element {
	return (
		<div {...containerProps} >
			{_id && <h1 className="absolute app__primary-text font-extrabold text-[#292E33] -top-10 xs:-top-6 md:-top-8 xl:-top-10 right-3 xs:right-6 md:right-4 xl:right-2 text-[10rem] lg:text-[8rem] xl:text-[10rem]" >{`0${_id}`}</h1>}
			<div className="w-2/3 h-[70%] flex justify-start flex-col z-10" >
				<img src={icon} className="w-[30px] aspect-square mb-16" />
				<h3 className={`app__brand-text font-bold text-[0.875rem] text-${textColor}`} >{headline}</h3>
				<p className={`app__primary-text mt-3 text-xs text-${textColor}`} >{bodyText}</p>
			</div>
		</div>
	)
};

