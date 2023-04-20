import React from "react";

import LinkedInIcon from "@/assets/svg/linkedin-logo.svg";
import InstagramIcon from "@/assets/svg/instagram-logo.svg";
import YoutubeIcon from "@/assets/svg/youtube-logo.svg";
import GithubIcon from "@/assets/svg/github-logo.svg";
import BrandLogo from "@/assets/images/Realmwave-Logo.png";

import "./askaifooter.css";


export default function AskaiFooter(): JSX.Element {
  
	const today = new Date() // yyyy-mm-dd
	
	return (
		<section className="w-full" >
			
			<footer className="w-full bg-[#f8f8fb]" >
				<div className="w-full flex items-center justify-center" >
					<div className="w-[250vw] bg-white rounded-b-[100%] h-[100px]" />
				</div>
				<div className="w-full p-20 flex items-start justify-between" >
					<div>
						<p className="app__brand-text" >&#169; {`${today.getFullYear()}`}</p>
						<a href="" className="flex items-center gap-3 mt-3" >
							<img src={BrandLogo} className="w-[30px] md:w-[35px] aspect-square" />
							<p className="app__brand text-[0.95rem] md:text-[1rem] font-bold" >Realmwave</p>
						</a>
					</div>
					<div className="" >
						<h3 className="app__brand-text text-base font-bold" >Follow Us</h3>
						<div className="flex items-center gap-5 mt-3" >
							<a href="">
								<img src={GithubIcon} alt="" className="w-[21px]" />
							</a>
							<a href="">
								<img src={LinkedInIcon} alt="" className="w-[20px]" />
							</a>
							<a href="">
								<img src={InstagramIcon} alt="" className="w-[21px]" />
							</a>
							<a href="">
								<img src={YoutubeIcon} alt="" className="w-[26px]" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</section>
	)
};

