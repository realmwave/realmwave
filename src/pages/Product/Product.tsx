/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { MasterLoading } from "@/components";


export default function Product(): JSX.Element {
	return (
		<div className="w-full h-full relative" >
			<MasterLoading title="Ask AI" />
		</div>
	)
};

