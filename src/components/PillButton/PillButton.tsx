import React from "react";

import { IPillButtonProps } from "@/types";

import "./pillbutton.css";


export default function PillButton({ children, ...containerProps }: IPillButtonProps):JSX.Element {
	return (
		<div {...containerProps} >
			{children}
		</div>
	)
};

