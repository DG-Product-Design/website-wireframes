import { Icon } from '@j33p1n/component-library';
import React from 'react';

const HeroSection = (props: {
	tagline: string;
	headline: string;
	defaultText: string | React.ReactNode;
	arrowId: string;  // id of section to scroll to
}) => {
	return (
		<section className='w-full bg-slate-500 pt-[119px] pb-15'>
			<div className="container px-10 mx-auto">
				<p className="text-white font-bold uppercase text-[20px] leading-6 tracking-[8px] mb-4">{props.tagline}</p>
				<div className="bg-slate-200 h-1 w-[76px] mb-10" />
				<div className="max-w-[652px] text-white">
					<h1 className="text-headline-2xl text-white mb-1">{props.headline}</h1>
					<p className="text-body-lg mb-5">{props.defaultText}</p>
					<a href={`/#${props.arrowId}`}>
						<Icon iconName='arrowDown' />
					</a>
				</div>
			</div>

		</section>
	);
}

export default HeroSection;