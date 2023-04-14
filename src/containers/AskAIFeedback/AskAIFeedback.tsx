import React from "react";

import "./askaifeedback.css";


const feedbacks = [
	{
		id: 1,
		username: "",
		profile_pic: "",
		feedback: "",
		rating: "",
	}
];

export default function AskAIFeedback(): JSX.Element {
	return (
		<section className="w-full" >
			<div className="flex flex-row items-center justify-center flex-wrap" >
				{feedbacks.map((item, index) => (
					<div key={index.toString()} ></div>
				))}
			</div>
		</section>
	)
};

