import React from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

import { INavbarModalProps } from "@/types";

import "./navbarmodal.css";


export default function NavbarModal({ closeNavbarModal }: INavbarModalProps): JSX.Element {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.25, type: "tween", ease: "easeInOut", } }} exit={{ opacity: 0, transition: { duration: 1, type: "tween", ease: "easeInOut" } }} className="fixed top-0 left-0 w-full z-50 bg-black h-screen" >
			<div className="absolute top-7 right-7 p-4 md:p-5 rounded-full bg-white cursor-pointer z-10 close" onClick={closeNavbarModal} >
				<IoCloseSharp color="#000000" className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem]" />
			</div>
			<div className="app__nav-container relative w-full h-full flex flex-col justify-end ps-16 pb-10" >
				<motion.h1 initial={{ y:"100px", opacity: 0 }} animate={{ y: "0px", opacity: 1, transition: { type: "spring", duration: 0.2, delay: 0 } }} exit={{ y: "-100px", opacity: 0, transition: { type: "spring", duration: 0.2, delay: 0 } }} className="brand-text text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] tracking-wide font-bold text-gray-400 hover:text-white duration-200 w-fit" >Realmwave</motion.h1>
				<motion.h1 initial={{ y:"100px", opacity: 0 }} animate={{ y: "0px", opacity: 1, transition: { type: "spring", duration: 0.25, delay: 0.1 } }} exit={{ y: "-100px", opacity: 0, transition: { type: "spring", duration: 0.2, delay: 0.05 } }} className="nav-text text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] tracking-wide font-bold leading-[4rem] text-gray-400 hover:text-white duration-200 w-fit" >Ask AI</motion.h1>
				<motion.h1 initial={{ y:"100px", opacity: 0 }} animate={{ y: "0px", opacity: 1, transition: { type: "spring", duration: 0.3, delay: 0.11 } }} exit={{ y: "-100px", opacity: 0, transition: { type: "spring", duration: 0.2, delay: 0.1 } }} className="nav-text text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] tracking-wide font-bold text-gray-400 hover:text-white duration-200 w-fit" >About</motion.h1>
				<motion.h1 initial={{ y:"100px", opacity: 0 }} animate={{ y: "0px", opacity: 1, transition: { type: "spring", duration: 0.35, delay: 0.12 } }} exit={{ y: "-100px", opacity: 0, transition: { type: "spring", duration: 0.2, delay: 0.15 } }} className="nav-text text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] tracking-wide font-bold leading-[4rem] text-gray-400 hover:text-white duration-200 w-fit" >Contact</motion.h1>
				{/*<div className="absolute -bottom-[30%] -right-[20%] -z-10" >
					<div className="rings realtive w-[720px] aspect-square border  rounded-full " >
						<div className="absolute w-4/5 aspect-square border  rounded-full " >
							<div className="absolute w-4/5 aspect-square border  rounded-full " >
								<div className=" absolute w-4/5 aspect-square border  rounded-full " >
									<div className=" absolute w-4/5 aspect-square border  rounded-full " >
										<div className=" absolute w-4/5 aspect-square border  rounded-full " >
											<div className=" absolute w-4/5 aspect-square border  rounded-full " >
												<div className=" absolute w-4/5 aspect-square border  rounded-full " >
													<div className=" absolute w-4/5 aspect-square border  rounded-full " >
														<div className=" absolute w-4/5 aspect-square border  rounded-full " />
													</div>
												</div>
											</div>
										</div>  
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>*/}
			</div>
		</motion.div>
	)
};

