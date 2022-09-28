import React from 'react';
import classNames from 'classnames';
import { Link } from '@j33p1n/component-library';

const HeadlineBlock = (props: {
	headline: string | React.ReactNode;
	boldText?: string | React.ReactNode;
	defaultText: string | React.ReactNode;
	linkText: string;
	href: string;
	className?: string;
}) => {
	return (
		<div className={classNames(props.className && props.className, 'w-full')}>
			<h1 className="text-headline-xl sm:text-7xl text-center mb-4">{props.headline}</h1>
			<div className="text-body-lg text-center max-w-screen-sm mt-4 mx-auto">
				{props.boldText && (
					<React.Fragment>
						<p className="text-body-lg-bold">{props.boldText}</p>
					</React.Fragment>
				)}
				{props.defaultText}
				<div className="flex items-center justify-center mt-2 mx-auto">
					<Link href={props.href} label={props.linkText} rightIcon={{ iconName: 'chevronRight'}} />
				</div>
			</div>
		</div>
	)
}

export default HeadlineBlock;