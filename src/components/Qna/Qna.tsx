import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import { IQnaPropsTypes } from "@/types";

import "./qna.css";


export default function Qna({ question, answer }: IQnaPropsTypes): JSX.Element {

	const [isAnswerVisible, setIsAnswerVisible] = useState(false)

	function showAnswer() { setIsAnswerVisible(true) }
	function hideAnswer() { setIsAnswerVisible(false) }

	return (
		<div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 pb-3 border-b-[1px] mb-10 border-slate-400" >
			<div className="flex items-start justify-between" >
				<p className="app__primary-text text-lg text-[var(--color-brand)] font-bold" >
					{question}
				</p>
				{isAnswerVisible ?
					<IoRemoveCircleOutline className="text-[1.35rem] text-[var(--color-brand)] cursor-pointer" onClick={hideAnswer} />
					:
					<IoAddCircleOutline className="text-[1.35rem] text-[var(--color-brand)] cursor-pointer" onClick={showAnswer} />
				}
			</div>
			{isAnswerVisible && (
				<>
					{ answer }
				</>
			)}
		</div>
	)
};

