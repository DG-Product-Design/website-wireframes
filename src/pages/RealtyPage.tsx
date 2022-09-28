import { Button } from '@j33p1n/component-library';
import React from 'react';
import BottomCTA from '../components/BottomCTA';
import EducationCard from '../components/EducationCard';
import HeroSection from '../components/HeroSection';
import HomeSearchInput from '../components/Inputs/HomeSearchInput';
import Testimonials from '../components/Testimonials/Testimonials';
import ToolCards from '../components/ToolCards';

/**
 * PAGE SECTIONS 
 */

const FindSellHomeSection = () => {
	return (
		<section className='w-full bg-white p-20 md:px-0'>
			<div className="container mx-auto max-w-screen-lg px-16 lg:px-0">
				<div className="flex items-center gap-x-6 mb-20">
					<div className="w-full md:w-1/2">
						<h3 className="text-headline-md mb-1">Find Your new home</h3>
						<p className="mb-6">CapCenter has everything you need to buy a new home. From starting the search to celebrating the closing, we&apos;re with you every step of the way. Start your search today!</p>
						<HomeSearchInput type='homeSearch' className='max-w-screen-xs' />
						<p className="text-body-sm-bold mt-2.5">
							Questions? <a href='/' className='no-underline link'>Talk to an agent.</a>
						</p>
					</div>
					<div className="bg-slate-100 h-[362px] rounded w-full md:w-1/2" />
				</div>
				<div className="flex items-center gap-x-6">
					<div className="bg-slate-100 h-[362px] rounded w-full md:w-1/2" />
					<div className="w-full md:w-1/2">
						<h3 className="text-headline-md mb-1">Sell your current home</h3>
						<p className="mb-6">Selling your home has never been easier. From helping you prepare, taking photos and listing your home, to negotiating the best deal, our team of full-service, salaried realtors doesn&apos;t chase commissions. Instead, our local agents work around the clock to provide a world class experience while saving you thousands!</p>
						<p className="text-headline-xxs mb-2">See your home&apos;s estimated value:</p>
						<HomeSearchInput type='homeVal' className='max-w-screen-xs' />
						<p className="text-body-sm-bold mt-2.5">
							Questions? <a href='/' className='no-underline link'>Talk to an agent.</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

const HomeLoanCTA = () => {
	return (
		<section className='w-full text-center bg-slate-100 px-4 lg:px-0 py-20'>
			<div className="bg-slate-200 opacity-30 w-[80vw] max-w-[637px] h-[56px] mx-auto" />
			<h4 className="text-headline-md mt-9">Need help with your home loan?</h4>
			<p className="max-w-[868px] mx-auto my-8">
				You don&apos;t have to use CapCenter&apos;s mortgage services when you use our realty services, but we&apos;re pretty sure you&apos;ll want to... Our teams work together to make the process as seamless as possible. Also, you save even more when combining our realty and mortgage services. 
			</p>
			<h4 className="text-headline-sm max-w-[590px] mx-auto">
				See how much you can save by using CapCenter for <span className="whitespace-nowrap">both mortgage and realty.</span>
			</h4>
			<Button
				variant='filled'
				color='primary'
				label='Savings Calculator'
				rightIcon={{iconName: 'chevronRightBold'}}
				className='mt-14 py-2'
			/>
		</section>
	)
}

const LearningProcessSection = () => {
	return (
		<section className='w-full bg-white p-20 md:px-0'>
			<h2 className="text-headline-lg text-center">Learning the Process</h2>
			<p className="text-body-lg text-center mt-6 mb-8">
				We didn&apos;t change the realty process, we just made it better.
				<br  />
				Visit our <a href='/' className='link'>Seller Resource Center</a> for more.
			</p>
			<div className="w-full flex gap-x-6 max-w-screen-lg px-16 lg:px-0 mx-auto">
				<EducationCard
					title='Home Buyer&apos;s Guide'
					description='You can streamline the homebuying process with a pre-approval from CapCenter. Unsure where to go from there? 
					We put together a full guide to help.'
					href='/'
					linkLabel='Read the guide now'
				/>
				<EducationCard
					title='Home Seller&apos;s Guide'
					description='Selling a home seems easy enough. But there are plenty of things that can pop up throughout the process. We&apos;ll help you understand what to expect.'
					href='/'
					linkLabel='Read the guide now'
				/>
			</div>
		</section>
	)
}

const PreApprovalCTA = () => {
	return (
		<section className='w-full bg-[linear-gradient(135deg,_#FFFFFF_0%,_#EBF1F2_100%)] py-15'>
			<div className="w-full max-w-screen-lg flex gap-x-12 items-center justify-center mx-auto">
				<div className="bg-slate-200 w-2/5 h-52 rounded-lg" />
				<div className='w-3/5'>
					<h3 className="text-headline-md mb-4">Get Pre-Approved Today</h3>
					<p className="text-body-lg mb-6">It only takes a few minutes and then you&apos;ll be ready to start offering on homes!</p>
					<Button
						variant='filled'
						color='primary'
						label='Get Pre-Approved Now'
						rightIcon={{ iconName: 'chevronRightBold' }}
					/>
				</div>
			</div>
		</section>
	)
}

const ToolsSection = () => {
	return (
		<section className='w-full bg-white px-4 lg:px-0 py-20'>
			<div className="container max-w-screen-lg px-16 lg:px-0 mx-auto">
				<ToolCards
					title='Helpful Tools'
					subtitle='We&apos;ve created all the tools you need to be successful in your home buying and selling journey.'
					card1title='Home Search'
					card1description='It doesn&apos;t matter if you&apos;re just looking around or already have a CapCenter real estate agent, our Home Search tool helps you see what&apos;s in your area.'
					card1buttonText='Use the tool'
					card1buttonHref='/'
					card2title='Home Valuation'
					card2description='Part of homeownership is keeping up with the value of your most valuable asset. Just type in your address and we&apos;ll give you a break down.'
					card2buttonText='Use the tool'
					card2buttonHref='/'
					card3title={<React.Fragment>Net Proceeds / <span className="whitespace-nowrap">Sale Calculator</span></React.Fragment>}
					card3description='Want to sell your home but not quite ready to talk to a realtor? Our Net Proceeds calculator helps you understand what you&apos;ll walk away with.'
					card3buttonText='Use the tool'
					card3buttonHref='/'
				/>
			</div>
		</section>
	)
}

const TestimonialSection = () => {
	return (
		<section className='w-full bg-slate-50 py-20'>
			<h2 className="text-center text-headline-lg">Client Testimonials</h2>
			<p className="text-center text-headline-sm max-w-[550px] mx-auto mt-6 mb-15">Our core values are at the heart of what we do. But don&apos;t just take our word for it...</p>
			<Testimonials  />
		</section>
	)
}

const RealtyPage = () => {
	return (
		<main>
			<HeroSection
				tagline='Buy &amp; Sell for less'
				headline='Local, full-service real estate'
				defaultText={
					<React.Fragment>
						Save thousands when selling your home with a <span className='text-body-lg-bold'>1% listing fee.</span> Combine that savings with a <span className='text-body-lg-bold'>ZERO Closing Cost</span> purchase mortgage!The deal is simple - use one of our Real Estate agents to help find your new home and sell your old one. 
					</React.Fragment>
				}
				arrowId=''
			/>
			<FindSellHomeSection  />
			<HomeLoanCTA  />
			<LearningProcessSection  />
			<PreApprovalCTA  />
			<ToolsSection  />
			<TestimonialSection  />
			<BottomCTA 
				button1text='Get Pre-Approved to Buy'
				button1href='/'
				button2text='Speak with a Local Realty Agent'
				button2href='/'
			/>
		</main>
	)
}

export default RealtyPage;