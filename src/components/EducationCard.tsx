import { Link } from '@j33p1n/component-library';
import React from 'react';

const EducationCard = (props: {
	title: string;
	description: string | React.ReactNode;
	href: string;
	linkLabel: string | React.ReactNode;
}) => {
	return (
		<div className='w-full h-full'>
			<svg width="100%" height="auto" viewBox="0 0 628 277" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0.00012207H628V203L520 277H0V0.00012207Z" fill="#EBF1F2"/>
			</svg>
			<h5 className="text-headline-sm md:text-3xl mt-6 mb-2">{props.title}</h5>
			<p>{props.description}</p>
			<div className="w-15 h-1 bg-orange-300 mt-11 mb-2" />
			<Link href={props.href} label={props.linkLabel} rightIcon={{ iconName: 'chevronRight' }}  />
		</div>
	)
}

export default EducationCard;