import { Button } from '@j33p1n/component-library';
import React from 'react';

const ToolCards = (props: {
	title: string;
	subtitle: string;
	card1title: string | React.ReactNode;
	card1description: string;
	card1buttonText: string;
	card1buttonHref: string;
	card2title: string | React.ReactNode;
	card2description: string;
	card2buttonText: string;
	card2buttonHref: string;
	card3title: string | React.ReactNode;
	card3description: string;
	card3buttonText: string;
	card3buttonHref: string;
}) => {
	const ToolCard = (props: {
		title: string | React.ReactNode;
		description: string;
		buttonText: string;
		href: string;
	}) => {
		return (
			<div className='w-full h-full relative bg-white shadow-base rounded-lg overflow-hidden flex flex-col flex-wrap mx-auto'>
				<div className="w-full h-48 bg-slate-200" />

				<div className="flex flex-wrap p-6 mb-14">
					<div className='w-full h-full flex flex-wrap flex-col'>
						<p className="w-full text-headline-sm text-center">{props.title}</p>
						<p className="mt-2">{props.description}</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 text-center mb-2">
					<Button variant='filled' color='secondary' label={props.buttonText} href={props.href} rightIcon={{ iconName: 'chevronRightBold' }} className='text-white' />
				</div>
			</div>
		)
	}
	return (
		<React.Fragment>
			<h2 className="text-headline-lg text-center">{props.title}</h2>
			<p className="text-headline-sm text-center max-w-[620px] mx-auto mt-6 mb-15">{props.subtitle}</p>
			<div className="container mx-auto">
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="max-w-[420px] lg:max-w-none mx-auto">		
						<ToolCard
							title={props.card1title}
							description={props.card1description}
							buttonText={props.card1buttonText}
							href={props.card1buttonHref}
						/>
					</div>
					<div className="max-w-[420px] lg:max-w-none mx-auto">		
						<ToolCard
							title={props.card2title}
							description={props.card2description}
							buttonText={props.card2buttonText}
							href={props.card2buttonHref}
						/>
					</div>
					<div className="max-w-[420px] lg:max-w-none mx-auto">		
						<ToolCard
							title={props.card3title}
							description={props.card3description}
							buttonText={props.card3buttonText}
							href={props.card3buttonHref}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ToolCards;