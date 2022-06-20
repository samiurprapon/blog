import React from "react";
import "./GithubProfile.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  return (
		<Fade bottom duration={1000} distance='20px'>
			<div className='main'>
				<h1 className='prof-title'>Author</h1>
				<div className='row'>
					<div className='image-content-profile'>
						<img src={prof.avatarUrl} alt={prof.name} className='profile-image' />
					</div>
					<div className='main-content-profile'>
						<h2 className='bio-text'>"{emoji(String(prof.bio) + '"')}</h2>
						<SocialMedia />
					</div>
				</div>
			</div>
		</Fade>
	);
}
