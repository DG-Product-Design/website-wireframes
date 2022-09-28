import React from 'react';
import classNames from 'classnames';
import { Tab } from '@headlessui/react'
import { Button, Link, Icon } from '@j33p1n/component-library';
import Testimonials from '../components/Testimonials/Testimonials';
import EducationCard from '../components/EducationCard';
import Rates from '../components/Rates';
import HeadlineBlock from '../components/HeadlineBlock';


/**
 * PAGE SECTIONS 
 */
const HeroSection = () => {
	const IntroBox = () => {
		return (
			<div className="flex flex-wrap justify-center sm:justify-between items-center text-center bg-white shadow-lg rounded px-8 py-4">
				<div className='w-full sm:w-auto'>
					<p className='text-headline-xl xs:text-7xl'>Zero</p>
					<p className='text-body-default-bold'>Closing Cost homebuying</p>
				</div>
				<div className="hidden sm:block border-l border-slate-200 w-px h-20" />
				<div className="block sm:hidden border-b border-slate-200 w-20 h-px mt-3 mb-1" />
				<div className='w-full sm:w-auto'>
					<p className='text-headline-xl xs:text-7xl'>Zero</p>
					<p className='text-body-default-bold'>Closing Cost refinancing</p>
				</div>
				<div className="hidden sm:block border-l border-slate-200 w-px h-20" />
				<div className="block sm:hidden border-b border-slate-200 w-20 h-px mt-3 mb-1" />
				<div className='w-full sm:w-auto'>
					<p className='text-headline-xl xs:text-7xl'>1%</p>
					<p className='text-body-default-bold'>Listing Fee</p>
				</div>
			</div>
		)
	}

	return (
		<section className='bg-slate-500 transition-all ease-in-out pt-[120px] px-4 lg:px-0'>
			<div className='container max-w-screen-xl mx-auto'>
				<h1 className="text-headline-xl text-white xs:text-7xl text-center">
					Mortgage, Realty &amp; Insurance <span className='whitespace-nowrap'>all in</span> <span className='whitespace-nowrap'>one place.</span>
				</h1>
				<div className="flex justify-center relative max-w-[628px] mx-auto">
					<div className='text-body-lg text-white text-center mt-8 md:mt-4 mb-19 pb-[232px] sm:pb-[78px]'>
						<h2 className="text-body-lg-bold">ZERO guesswork. ZERO closing costs. <span className='whitespace-nowrap'>ZERO confusion.</span></h2>
						<h2>Since 1997, we've provided savings and convenience without compromising service.</h2>
					</div>
					<div className="w-2/3 sm:w-full absolute bottom-[-118px] sm:bottom-[-48px] left-auto right-auto mx-auto">
						<IntroBox  />
					</div>
				</div>
			</div>
		</section>
	)
}

const RatesSection = () => {
	return (
		<section className='w-full flex-wrap flex pt-64 md:pt-28 px-4 md:px-0'>
			<div className="max-w-screen-sm text-center mx-auto">
				<h2 className='text-headline-md mb-2'>
					Zero Closing Cost Interest Rates
				</h2>
				<p className='text-body-lg-bold'>We didn&apos;t change the mortgage process, we just made it better. </p>
				<p className='text-body-lg'>
				Expectations are everything! You&apos;ve been shopping around, finding low rates. But a lot of times the cost of those rates is hidden, and <span className='whitespace-nowrap'>we don&apos;t like that.</span>
				</p>
			</div>
			<div className="w-full text-center mt-4">
				<div className="text-caption text-[#495F61]">
					<p className='w-full mb-1'>Assumes a $320,000 conventional loan in Richmond, VA.</p>
					<p>Rates last updated 08/09/2022, 11:36 AM</p>
				</div>
			</div>
			<Rates  />
			<div className="w-full text-center">
				<Button
					variant='filled'
					color='primary'
					label='View all rates'
					className='font-base font-headline mt-12 mb-6'
				/>
			</div>
		</section>
	)
}

const PreApprovalCTA = () => {
	return (
		<section className="w-full bg-slate-500 text-white py-15 px-20">
			<div className="max-w-screen-xl mx-auto">
				<div className="max-w-[632px]">
					<h3 className="text-headline-lg text-white mb-4">Jumpstart the process with a trusted pre-approval</h3>
					<p className="text-body-lg">A pre-approval shouldn&apos;t hold you up. That&apos;s why we&apos;ve made it quick and easy to get pre-approved with CapCenter. </p>
					<Button
						variant='outline'
						color='white'
						label='Get started'
						className='bg-[transparent] font-semibold mt-6 mb-24'
					/>
					<div>
						<p className="text-body-lg-bold">Not quite ready to apply?</p>
						<a href='/' className='text-body-lg underline hover:cursor-pointer'>Calculate your monthly payment</a>
					</div>
				</div>
			</div>
		</section>
	)
}

const LearningProcessSection = () => {
	return (
		<section className="bg-white px-4 md:px-20 py-15">
			<h3 className='text-headline-lg text-center mb-8'>Mortgage explained.</h3>
			<div className="container mx-auto">
				<div className="w-full max-w-screen-lg flex gap-y-6 flex-wrap mx-auto">
					<div className="w-full h-full sm:w-1/2 sm:pr-3">
						<EducationCard
							title='Understanding Mortgages'
							description='It can be hard to understand something when the processes are unique and the explanations are full of jargon. We&apos;re trying to change that too.'
							href='/'
							linkLabel={<>Learn which mortgage may be <span className='whitespace-nowrap'>right for you</span></>}
						/>
					</div>
					<div className="w-full h-full sm:w-1/2 sm:pl-3">
						<EducationCard
							title='Mortgages with CapCenter'
							description='Having everything in-house allows us to keep things simple and straightforward. The result is a streamlined mortgage that avoids unnecessary hiccups.'
							href='/'
							linkLabel='View our mortgage process'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

const ToolboxCTA = () => {
	const Toolbox = () => {
		return (
			<div className='w-full max-w-screen-sm'>
				<div className="flex flex-wrap gap-x-8">
					<Tab.Group defaultIndex={0}>
						<Tab.List>
							<Tab>
								{({ selected }) => (
									<div className={classNames(selected ? 'bg-white' : 'bg-transparent', ' hover:bg-white hover:rounded-tr-none group rounded-t-sm px-6')}>
										<div className={classNames(selected ? 'bg-white border-orange-300 text-blue-500' : 'bg-transparent border-transparent text-white', 'border-b-4 text-left hover:border-orange-300 focus:border-orange-300 text-body-lg-bold group-hover:text-blue-500 transition-all ease-in-out pt-2.5 pb-2.5')}>Homes for sale</div>
									</div>
								)}
							</Tab>
							<Tab>
								{({ selected }) => (
									<div className={classNames(selected ? 'bg-white' : 'bg-transparent', ' hover:bg-white hover:rounded-tl-none group rounded-t-sm px-6')}>
										<div className={classNames(selected ? 'bg-white border-orange-300 text-blue-500' : 'bg-transparent border-transparent text-white', 'border-b-4 text-left hover:border-orange-300 focus:border-orange-300 text-body-lg-bold group-hover:text-blue-500 transition-all ease-in-out pt-2.5 pb-2.5')}>Current home value</div>
									</div>
								)}
							</Tab>
						</Tab.List>
						<Tab.Panels className='w-full'>
							<Tab.Panel>
								<div className='shadow-lg bg-white rounded-sm rounded-tl-none p-6'>
									<div className="flex items-center w-full h-10 bg-white border border-slate-400 rounded-sm">
										<input defaultValue='' placeholder='City, County, or Zip...' className='h-full w-full text-ellipsis px-4' />
										<button className='h-full'>
											<Icon iconName='arrowRightBold' height='12' width='12' className='text-blue-300 px-4' />
										</button>
									</div>
								</div>
							</Tab.Panel>
							
							<Tab.Panel>
								<div className='shadow-lg bg-white rounded-sm rounded-tl-none p-6'>
									<div className="flex items-center w-full h-10 bg-white border border-slate-400 rounded-sm">
										<input defaultValue='' placeholder='Enter property address...' className='h-full w-full text-ellipsis px-4' />
										<button className='h-full'>
											<Icon iconName='arrowRightBold' height='12' width='12' className='text-blue-300 px-4' />
										</button>
									</div>
								</div>
							</Tab.Panel>

						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		);
	}

	return (
		<section className="bg-slate-500 px-14 py-32">
			<div className="container mx-auto">
				<h4 className="text-headline-lg text-white max-w-screen-sm pl-6 mb-4">
					Your home buying &amp; selling journey starts here.
				</h4>
				<p className="text-body-lg text-white max-w-[564px] pl-6 mb-6">Our easy to use tools are the perfect way to start thinking about your next big home decision.</p>
				<Toolbox  />
			</div>
		</section>
	)
}

const RealtySection = () => {
	const AgentImage = () => {
		return (
			<div className='bg-slate-200 w-[193px] h-[193px]' />
		)
	}
	return (
		<section className='bg-white w-full pt-13 pb-8'>
			<div className="flex flex-wrap justify-center items-center gap-6">
				<div className="flex items-center gap-x-6">
					<div className="flex flex-col gap-y-6">
						<AgentImage  />
						<AgentImage  />
						<AgentImage  />
					</div>
					<div className="flex flex-col gap-y-6">
						<AgentImage  />
						<AgentImage  />
					</div>
				</div>
				<div className='align-self-center max-w-[420px]'>
					<h4 className="text-headline-lg mb-2">
						Local real estate team
					</h4>
					<p className="text-body-lg">
						To know an area you&apos;ve got to be there, so we are. Our team of local experts can help you find what you&apos;re looking for, even if you&apos;re not quite sure what it is yet.
					</p>
					<div className="flex gap-[34px]">
						<Button variant='filled' color='primary' label='Talk to a Realtor' className='font-semibold mt-8 mb-6' />
						<Link href='/' label='Find out more' rightIcon={{iconName: 'chevronRight'}} />
					</div>
				</div>
			</div>
		</section>
	)
}

const AssetCoverageCTA = () => {
	const AssetImage = () => <div className='bg-slate-50 h-[193px] w-[193px] flex-shrink-0' />
	return (
		<section className='bg-slate-500 overflow-hidden px-20 py-15'>
			<div className="container flex gap-x-6 items-center justify-center mx-auto">
				<div className='w-full md:w-1/2 max-w-screen-sm'>
					<h4 className="text-headline-lg text-white mb-4">
						Get the right coverage for all your assets.
					</h4>
					<p className="text-body-lg text-white mb-6">We help you prepare for the unexpected with original protection <span className='whitespace-nowrap'>as well</span> as umbrella policies for those items that need a little extra.</p>
					<Button variant='outline' color='white' label='Get a customized quote' className='bg-transparent font-semibold mt-13' />
				</div>
				<div className="w-full md:w-1/2">
					<div className="flex gap-x-6 mb-6">
						<AssetImage  />
						<AssetImage  />
						<AssetImage  />
					</div>
					<div className="flex gap-x-6 -mr-20">
						<div className='bg-transparent w-[97px]'  />
						<AssetImage  />
						<AssetImage  />
						<AssetImage  />
					</div>
				</div>
			</div>
		</section>
	)
}

const TestimonialSection = () => {
	return (
		<section className='w-full bg-white pt-[90px] pb-15'>
			<div className="container mx-auto">
				<Testimonials  />
			</div>
		</section>
	)
}

const ServiceAreaSection = () => {
	return (
		<section className="bg-white px-4 lg:px-0 pb-24">
			<h1 className="text-headline-md text-center mb-4">We offer mortgage services in:</h1>
			<div className="w-full max-w-fit flex flex-wrap justify-center gap-x-[54px] gap-y-6 mb-11 mx-auto">
				<Link href='/' label='Virginia' className='text-slate-600'  />
				<Link href='/' label='Maryland' className='text-slate-600'  />
				<Link href='/' label='North Carolina' className='text-slate-600'  />
				<Link href='/' label='South Carolina' className='text-slate-600'  />
				<Link href='/' label='Georgia' className='text-slate-600'  />
				<Link href='/' label='Florida' className='text-slate-600'  />
				<Link href='/' label='Washington, D.C.' className='text-slate-600'  />
			</div>
			<h1 className="text-headline-md text-center mb-4">Realty services offered in the following counties:</h1>
			<div className="w-full max-w-fit mx-auto">
				
			</div>
		</section>
	)
}

const Homepage = () => {
	return (
		<main className='w-full h-full'>
			<HeroSection  />
			<RatesSection  />
			<HeadlineBlock  
				headline={<>Great Mortgages <span className='whitespace-nowrap'>done right.</span></>}
				boldText='Great rates and Zero Closing Costs. Believe it.'
				defaultText='We make the process easier, helping you find, finance and protect your most valuable asset. All under one roof.'
				linkText='View our savings calculator'
				href='/'
				className='bg-slate-50 px-4 2xl:px-0 py-10 mt-15'
			/>
			<PreApprovalCTA  />
			<LearningProcessSection  />
			<HeadlineBlock  
				headline={<>Real Estate experts you <span className='whitespace-nowrap'>can trust.</span></>}
				boldText='Local agents and a 1% listing fee. Believe it.'
				defaultText='Whether you&apos;re buying or selling — or both — we&apos;ll take you from 
				start to finish, saving you money along the way.'
				linkText='Talk to a Realtor'
				href='/'
				className='bg-slate-50 px-4 2xl:px-0 py-10 mt-15'
			/>
			<ToolboxCTA  />
			<RealtySection  />
			<HeadlineBlock  
				headline='Insurance made simple.'
				defaultText={
					<React.Fragment>
						Sit back and relax while our team of insurance professionals shop over <span className='text-body-lg-bold'>30 vendors</span> to find you the right protection at the best price.
					</React.Fragment>
				}
				linkText='Learn more about our insurance offerings'
				href='/insurance'
				className='bg-slate-50 px-4 2xl:px-0 py-10 mt-15'
			/>
			<AssetCoverageCTA  />
			<TestimonialSection  />
			<ServiceAreaSection  />
		</main>
	)
}

export default Homepage;