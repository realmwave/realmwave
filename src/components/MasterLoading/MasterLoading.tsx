import React from "react";
import { IMasterLoadingProps } from "@/types";

import "./masterloading.css";


export default function MasterLoading({ title }: IMasterLoadingProps): JSX.Element {
	return (
		<div id="master-loading" className="w-screen flex justify-center items-center bg-black app__master-loading-animation" >
			<div className="flex justify-center items-center gap-6 app__masterloading_text-animation" >
				<div className="w-[15px] aspect-square rounded-full bg-white" />
				<h1 className="text-white text-[4.5rem] font-bold " >{title}</h1>
			</div>
		</div>
	)
};

