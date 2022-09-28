import React from 'react';
import classNames from 'classnames';
import TestimonialList from './TestimonialList.json';
import Carousel from '../Carousel';

const QuoteCard = (props: {
	city: string;
	state: string;
	name: string;
	quote: string;
}) => {
	
	const QuoteSVGLeft = (props: { className?: string; }) => {
		return (
			<svg viewBox="0 0 72 55" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames(props.className && props.className)}>
				<path d="M19.5895 0C7.56086 8.62069 0 20.8621 0 35C0 47.5862 8.24821 55 17.5274 55C26.1193 55 33.3365 47.7586 33.3365 38.9655C33.3365 30.5172 27.3222 24.8276 20.105 24.8276C18.3866 24.8276 16.8401 25.1724 16.1527 25.3448C17.8711 19.1379 25.0883 11.7241 30.5871 8.96551L19.5895 0ZM58.253 0C46.2243 8.62069 38.6635 20.8621 38.6635 35C38.6635 47.5862 47.0835 55 56.3628 55C64.7828 55 72 47.7586 72 38.9655C72 30.5172 66.1575 24.8276 58.7685 24.8276C57.0501 24.8276 55.5036 25.1724 54.8162 25.3448C56.7064 19.1379 63.7518 11.7241 69.2506 8.96551L58.253 0Z" fill="currentColor"/>
			</svg>
		)
	}
	
	return (
		<div className="text-lg text-center bg-white border-4 border-slate-200 w-[844px] h-fit relative flex-shrink-0 px-8 pt-14 pb-4 mx-[26px]">
			<p className="w-fit absolute -top-4 left-0 right-0 bg-white text-body-sm-bold text-center px-3 pt-1 pb-2 m-auto">Client Testimonial</p>
			<QuoteSVGLeft className='text-slate-100 absolute top-0 bottom-0 left-0 right-0 w-[121.5px] h-[92.5px] z-0 m-auto' />
			<p className="relative text-headline-xs text-slate-600 mb-6 z-10">{props.quote}</p>
			<p className="relative italic text-slate-600 z-10">{props.name} - {props.city}, {props.state}</p>
		</div>
	)
}

const TrustpilotWidget = () => {
	return (
		<div className="trustpilot-widget -mr-4" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="564e2be20000ff000585ba86" data-style-height="110px" data-style-width="242px" data-theme="light" data-font-family="Lato" data-text-color="#0C2C48">
			<a href="https://www.trustpilot.com/review/www.capcenter.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
		</div>
	)
}

const Testimonials = () => {
	return (
		<React.Fragment>
			<Carousel show={3}>
				{ TestimonialList.map((quote, index: number) => {
					return (
						<QuoteCard
							key={`${quote.name}-${index}`}
							city={quote.city}
							state={quote.state}
							name={quote.name}
							quote={quote.quote}
						/>
					)
				})}
			</Carousel>
			<div className="w-full flex justify-center">
				<TrustpilotWidget  />
			</div>
		</React.Fragment>
	)
}

export default Testimonials;