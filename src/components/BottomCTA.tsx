import React from 'react';
import { Button } from '@j33p1n/component-library';

const BottomCTA = (props: {
	button1text: string;
	button1href: string;
	button2text: string;
	button2href: string;
}) => {
	return (
		<section className='w-full bg-white px-4 lg:px-0 pt-15 pb-17'>
			<h1 className="text-headline-lg text-center mb-9">Start your journey today!</h1>
			<div className="flex justify-center gap-x-4">
				<Button
					variant='filled'
					color='primary'
					label={props.button1text}
					href={props.button1href}
				/>
				<Button
					variant='filled'
					color='primary'
					label={props.button2text}
					href={props.button2href}
				/>
			</div>
		</section>
	)
}

export default BottomCTA;