import React from 'react';
import BookOutlineSVG from '../../assets/svg/BookOutlineSVG';
import ClipboardOutlineSVG from '../../assets/svg/ClipboardOutlineSVG';
import HeartShapedHouseSVG from '../../assets/svg/HeartShapedHouseSVG';
import HomeWithDollarSignSVG from '../../assets/svg/HomeWithDollarSignSVG';
import HomeWithPodiumSVG from '../../assets/svg/HomeWithPodiumSVG';
import HomeWithThumbsSVG from '../../assets/svg/HomeWithThumbsSVG';
import MailOutlineSVG from '../../assets/svg/MailOutlineSVG';
import MapOutlineSVG from '../../assets/svg/MapOutlineSVG';
import PeopleOutlineSVG from '../../assets/svg/PeopleOutlineSVG';


const manWithHeadphones = require('../../assets/img/manWithHeadphones.jpg');
const womanOnCouch = require('../../assets/img/womanOnCouch.jpg');
const card1Bg: React.CSSProperties = { backgroundImage: 'url("' + manWithHeadphones + '")' }
const card2Bg: React.CSSProperties = { backgroundImage: 'url("' + womanOnCouch + '")' }


const MortgageMenuContent = {
	card1: {
		title: 'Purchase',
		text: 'New home purchase mortgages.',
		icon: <HomeWithThumbsSVG />,
		onClick: {},
	},
	card2: {
		title: 'Refinance',
		text: 'Cash-out or Rate & Term, we have it.',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	card3: {
		title: 'Apply for a mortgage',
		text: 'Complete an application in as little as 15 minutes.',
		icon: <ClipboardOutlineSVG />,
		onClick: {},
	},
	col1Title: 'Helpful Tools',
	col2Title: 'Education',
	col1data: [
		{ label: 'Mortgage rates', href: '/' },
		{ label: 'Affordability calculator', href: '/' },
		{ label: 'Monthly payment calculator', href: '/' },
		{ label: 'Savings with CapCenter', href: '/' },
	],
	col2data: [
		{ label: 'Zero Closing Costs?', href: '/' },
		{ label: 'Understanding my credit', href: '/' },
		{ label: 'Mortgage process', href: '/' },
		{ label: 'Mortgage resources', href: '/' },
	]
}

const RealtyMenuContent = {
	card1: {
		title: 'Buy',
		text: 'Let our full-service realty team help.',
		icon: <HomeWithThumbsSVG />,
		onClick: {},
	},
	card2: {
		title: 'Sell',
		text: 'Sell with confidence and save big.',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	card3: {
		title: 'Request a consultation',
		text: 'Let our team of realty professionals help',
		icon: <HomeWithPodiumSVG />,
		onClick: {},
	},
	col1Title: 'Helpful Tools',
	col2Title: 'Education',
	col1data: [
		{ label: 'Homes for sale', href: '/' },
		{ label: 'Market reports', href: '/' },
		{ label: 'Home value estimate', href: '/' },
		{ label: 'Savings with CapCenter', href: '/' },
	],
	col2data: [
		{ label: '1% Listing Fee?', href: '/' },
		{ label: 'Meet the realty team', href: '/' },
		{ label: 'Realty process', href: '/' },
		{ label: 'Realty resources', href: '/' },
	]
}

const InsuranceMenuContent = {
	card1: {
		title: 'Insurance offerings',
		text: 'Protect your most valuable asset.',
		icon: <HomeWithThumbsSVG />,
		onClick: {},
	},
	card2: {
		title: 'Why shop around?',
		text: 'Let us help you get the best auto rate.',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	card3: {
		title: 'Talk to an insurance pro',
		text: 'Let our team of insurance professionals help.',
		icon: <HeartShapedHouseSVG />,
		onClick: {},
	},
	col1Title: 'Helpful Tools',
	col2Title: 'Education',
	col1data: [
		{ label: 'Coverage calculator', href: '/' },
		{ label: 'Personal property calculator', href: '/' },
		{ label: 'Monthly mortgage payment', href: '/' },
		{ label: 'Financial success', href: '/' },
	],
	col2data: [
		{ label: 'What is independent?', href: '/' },
		{ label: 'Meet the insurance team', href: '/' },
		{ label: 'Insurance process', href: '/' },
		{ label: 'Insurance resources', href: '/' },
	]
}

const ResourcesMenuContent = {
	card1: {
		title: 'Purchase',
		text: 'New home purchase mortgages.',
		icon: <HomeWithThumbsSVG />,
		onClick: {},
	},
	card2: {
		title: 'RefinanceSell',
		text: 'Cash-out or Rate & Term, we have it.',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	card3: {
		title: 'Apply for a mortgage',
		text: 'Complete our simple application in as little as 15 minutes!',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	col1Title: 'Featured Sections',
	col2Title: 'Resource Categories',
	col1data: [
		{ label: 'Understanding Mortgages', href: '/' },
		{ label: 'CapCenter Realty', href: '/' },
		{ label: 'Understanding Credit', href: '/' },
		{ label: 'How we Insurance', href: '/' },
	],
	col2data: [
		{ label: 'Home buying', href: '/' },
		{ label: 'Selling a home', href: '/' },
		{ label: 'Refinancing', href: '/' },
		{ label: 'Insurance', href: '/' },
	]
}

const CompanyMenuContent = {
	card1: {
		title: 'Purchase',
		text: 'New home purchase mortgages.',
		icon: <HomeWithThumbsSVG />,
		onClick: {},
	},
	card2: {
		title: 'RefinanceSell',
		text: 'Cash-out or Rate & Term, we have it.',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	card3: {
		title: 'Apply for a mortgage',
		text: 'Complete our simple application in as little as 15 minutes!',
		icon: <HomeWithDollarSignSVG />,
		onClick: {},
	},
	col1Title: 'Helpful Tools',
	col2Title: 'Education',
	col1data: [
		{ label: 'Mortgage rates', href: '/' },
		{ label: 'Affordability calculator', href: '/' },
		{ label: 'Monthly payment calculator', href: '/' },
		{ label: 'Savings with CapCenter', href: '/' },
	],
	col2data: [
		{ label: 'Mortgage rates', href: '/' },
		{ label: 'Affordability calculator', href: '/' },
		{ label: 'Monthly payment calculator', href: '/' },
		{ label: 'Savings with CapCenter', href: '/' },
	]
}

const MenuButton = (props: {
	icon: React.ReactNode;
	title: string;
	text: string;
}) => {
	return (
		<div className="flex items-center w-full border border-slate-200 hover:bg-orange-50 hover:border-primary cursor-pointer transition-all ease-in-out rounded px-4 py-3">
			<div className="flex justify-between items-center">
				<div className="mr-4">
					{props.icon}
				</div>
				<div className='w-full'>
					<p className="text-body-sm-bold text-blue-500">{props.title}</p>
					<p className="w-full text-caption">{props.text}</p>
				</div>
			</div>
		</div>
	)
}

const MenuCard = (props: {
	icon: React.ReactNode;
	title: string | undefined;
	text: string | undefined;
	onClick: any;
}) => {
	return (
		<div
			className='w-[198px] h-[172px] flex flex-wrap content-center text-center bg-white border border-slate-100 hover:bg-orange-50 hover:border-primary cursor-pointer transition-all ease-in-out rounded flex-shrink-0 px-5'
			onClick={() => props.onClick}
		>
			<div className="mb-2 mx-auto">{props.icon}</div>
			<p className="w-full text-body-sm-bold">{props.title}</p>
			<p className="w-full text-caption">{props.text}</p>
		</div>
	)
}

const ImageCard = (props: {
	style: any;
	title: string;
	text: string;
}) => {
	return (
		<div className='w-[302px] h-[172px] flex items-end content-end' style={props.style ? props.style : ''}>
			<div className='h-full max-h-[50%] flex flex-wrap content-end px-4 pb-3' style={{background: 'linear-gradient(180deg, rgba(33, 48, 53, 0) 0%, rgba(33, 48, 53, 0.9) 47.87%, rgba(33, 48, 53, 0.9) 100%'}}>
				<p className="text-headline-xxs text-white mb-1">
					{props.title}
				</p>
				<p className="w-full text-caption text-white">
					{props.text}
				</p>
			</div>
		</div>
	)
}

const NavContent = (props: {
	activeMenuItem: number
}) => {
	let content;

	if (props.activeMenuItem === 1) { content = MortgageMenuContent };
	if (props.activeMenuItem === 2) { content = RealtyMenuContent };
	if (props.activeMenuItem === 3) { content = InsuranceMenuContent };
	if (props.activeMenuItem === 4) { content = ResourcesMenuContent };
	if (props.activeMenuItem === 5) { content = CompanyMenuContent };

	return (
		<React.Fragment>
			<div className="w-full flex items-center">
			
				{ content !== ResourcesMenuContent && content !== CompanyMenuContent && (
					<div className="flex justify-between gap-4">
						<MenuCard  
							title={content?.card1.title}
							text={content?.card1.text}
							icon={content?.card1.icon}
							onClick={content?.card1.onClick}
						/>
						<MenuCard  
							title={content?.card2.title}
							text={content?.card2.text}
							icon={content?.card2.icon}
							onClick={content?.card2.onClick}
						/>
						<MenuCard  
							title={content?.card3.title}
							text={content?.card3.text}
							icon={content?.card3.icon}
							onClick={content?.card3.onClick}
						/>
					</div>
				)} 
				
				{ content === ResourcesMenuContent && (
					<div className="flex justify-between gap-4">
						<ImageCard  
							title='Understanding Your Credit'
							text='Your credit history plays an important role in determining whether you qualify for a loan...'
							style={card1Bg}
						/>
						<ImageCard  
							title='Understanding Your Credit'
							text='Your credit history plays an important role in determining whether you qualify for a loan...'
							style={card2Bg}
						/>
					</div>
				)}

				{ content === CompanyMenuContent && (
					<div className="w-full flex justify-between gap-6">
						<MenuButton
							icon={<BookOutlineSVG />}
							title='CapCenter History'
							text='Twenty-five years of savings &amp; service.'
						/>
						<MenuButton
							icon={<MapOutlineSVG />}
							title='Markets we serve'
							text='Areas we offer our services.'
						/>
						<MenuButton
							icon={<PeopleOutlineSVG />}
							title='Careers'
							text='Join a world class team.'
						/>
						<MenuButton
							icon={<MailOutlineSVG />}
							title='Contact us'
							text='Let&apos;s find the right solution for you.'
						/>
					</div>
				)}
			</div>

			{ content !== CompanyMenuContent && (
				<React.Fragment>
					<div className="w-px bg-slate-200 mx-16 hidden md:block" />
					<div className="w-full flex">
						<ul className='pr-22'>
							<li className='text-caption text-blue-500 font-semibold mb-4'>{content?.col1Title}</li>
							{content?.col1data.map((data: any) => {
								return (
									<li className='mb-3 last:mb-0' key={data.label}>
										<a className='text-body-sm text-slate-600 hover:underline' href={data.href}>{data.label}</a>
									</li>
								)
							})}
						</ul>
						<ul>
							<li className='text-caption text-blue-500 font-semibold mb-4'>{content?.col2Title}</li>
							{content?.col2data.map((data: any) => {
								return (
									<li className='mb-3 last:mb-0' key={data.label}>
										<a className='text-body-sm text-slate-600 hover:underline' href={data.href}>{data.label}</a>
									</li>
								)
							})}
						</ul>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	)
}


export default NavContent;