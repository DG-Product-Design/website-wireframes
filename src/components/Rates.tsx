import React from 'react';
import classNames from 'classnames';
import { Icon } from '@j33p1n/component-library';
import { getRates } from '../services/getRates';

const Rates = () => {
	const [rates, setRates] = React.useState<any>([]);
	
	const getRateData = async () => {
		const ratesData = await getRates();
		if (ratesData !== false ) {
			setRates(ratesData);
		}
	};

	React.useEffect(() => {
		getRateData();
	}, [])

	const RateCardDisplay = () => {
		const RateCard = (props: {
			program: string;
			rate: number;
			apr: number;
			pts: number;
			className?: string;
			highlight?: boolean;
		}) => {
			return (
				<div className={classNames(props.className && props.className, props.highlight ? 'rounded-b' : 'rounded', 'flex flex-1 flex-wrap items-stretch justify-center w-full md:w-1/5 max-w-[192px] h-max text-center relative px-8 py-3')}>
					{props.highlight && (
						<div className="w-full absolute flex items-center justify-center h-[37px] -top-[37px] bg-slate-600 text-center rounded-t py-2">
							<p className="text-headline-xxs text-white pr-2">Lowest Rate</p>
							<Icon iconName='infoSolid' className='text-white' width='18' height='18' />
						</div>
					)}
					<h5 className='text-headline-xxs mb-3.5'>{props.program}</h5>
					<p className='text-body-lg text-blue-500'>{(props.rate).toFixed(3)}%</p>
					<hr className='text-slate-200 w-[114px] mx-auto my-2'  />
					<p className="w-full text-caption text-slate-400">{(props.apr).toFixed(3)}% APR</p>
					<p className="w-full text-caption text-slate-400">{props.pts} PTS</p>
				</div>
			)
		}
		return (
			rates.Products ? (
				<div className='flex flex-wrap justify-center transition-all ease-in-out lg:justify-between gap-6 md:gap-4 xl:gap-6 pt-12 lg:pt-0'>
					<div className="w-full lg:w-auto flex flex-wrap justify-center gap-6 md:gap-4 xl:gap-6">
						<RateCard
							program='30 Year Fixed Conventional'
							rate={rates.Products[3].Rates[0].BaseRate}
							apr={rates.Products[3].Rates[0].Apr}
							pts={rates.Products[3].Rates[0].Points}
							className='shadow-base z-0'
						/>
						<RateCard
							program='30 Year Fixed Conventional'
							rate={rates.Products[3].Rates[1].BaseRate}
							apr={rates.Products[3].Rates[1].Apr}
							pts={rates.Products[3].Rates[1].Points}
							className='shadow-lg lg:mt-8 z-10' 
						/>
					</div>
					<div className="w-full lg:w-auto flex justify-center">
						<RateCard
							highlight
							program='10 Year Fixed Conventional'
							rate={rates.Products[0].Rates[2].BaseRate}
							apr={rates.Products[0].Rates[2].Apr}
							pts={rates.Products[0].Rates[2].Points}
							className='shadow-xl mt-8 lg:mt-22 z-20' 
						/>
					</div>
					<div className="w-full lg:w-auto flex flex-wrap justify-center gap-6 md:gap-4 xl:gap-6">
						<RateCard
							program='20 Year Fixed Conventional'
							rate={rates.Products[2].Rates[0].BaseRate}
							apr={rates.Products[2].Rates[0].Apr}
							pts={rates.Products[2].Rates[0].Points}
							className='shadow-lg lg:mt-8 z-10' 
						/>
						<RateCard
							program='15 Year Fixed Conventional'
							rate={rates.Products[1].Rates[0].BaseRate}
							apr={rates.Products[1].Rates[0].Apr}
							pts={rates.Products[1].Rates[0].Points}
							className='shadow-base z-0'
						/>
					</div>
				</div>
			) : (
				<h1 className="text-headline-xl mx-auto pt-12">Rates Loading...</h1>
			)
		)
	}
	
	return (
		<div className="w-full flex flex-wrap justify-center">
			<RateCardDisplay  />
		</div>
	)
}

export default Rates;