import React from 'react';
import BottomCTA from '../components/BottomCTA';
import EducationCard from '../components/EducationCard';
import HeroSection from '../components/HeroSection';
import Rates from '../components/Rates';
import ToolCards from '../components/ToolCards';

const RatesSection = () => {
	return (
		<section className='bg-white px-4 lg:px-0 py-15'>
			<Rates  />
		</section>
	)
}

const ProcessSection = () => {
	return (
		<section className='bg-slate-100 py-16'>
			<div className="container mx-auto max-w-screen-lg px-16 lg:px-0">
				<h2 className="text-headline-2xl">Our Process</h2>
				<div className="w-full md:w-2/3 text-body-lg">
					<p className="text-body-lg-bold">We didn&apos;t change the mortgage process, we just made it better.</p>
					<p>Expectations are everything! You&apos;ve been shopping around. Finding low rates. But a lot of times the actual cost of those rates are hidden. That doesn&apos;t give you a fair look into what you&apos;re getting, and we don&apos;t like that.</p>
				</div>
			</div>
		</section>
	)
}

const ResourcesSection = () => {
	return (
		<section className='w-full bg-white p-20 md:px-0'>
			<h2 className="text-headline-lg text-center">Other Resources</h2>
			<p className="text-body-lg text-center max-w-[564px] mx-auto mt-6 mb-8">
				We have more in-depth breakdowns of the mortgage processes and how CapCenter can help below.
			</p>
			<div className="w-full max-w-screen-lg flex gap-x-6 mx-auto px-16 lg:px-0">
				<EducationCard
					title='Home Buyer&apos;s Guide'
					description='You can streamline the homebuying process with a pre-approval from CapCenter. Unsure where to go from there? 
					We put together a full guide to help.'
					href='/'
					linkLabel='Read the guide now'
				/>
				<EducationCard
					title='Home Refinance Guide'
					description='Getting ready to refinance is making sure your setting the right goals. We&apos;ll help make sure you&apos;re asking all the right questions.'
					href='/'
					linkLabel='Read the guide now'
				/>
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
					card1title='Savings Calculator'
					card1description='Rates are sometimes easier to find than what they actually cost. Our Savings Calculator helps you understand what you&apos;re savings here and may be paying somewhere else.'
					card1buttonText='Use the tool'
					card1buttonHref='/'
					card2title='Monthly Payment'
					card2description='This is what it all comes down to, right? Our monthly payment calculator makes it easy to compare rates and loan product with easy-to-understand numbers.'
					card2buttonText='Use the tool'
					card2buttonHref='/'
					card3title='Amortization'
					card3description='Seeing how a monthly payment breaks down is a great way to understand the benefits, as well as the negatives, of a potential loan.'
					card3buttonText='Use the tool'
					card3buttonHref='/'
				/>
			</div>
		</section>
	)
}

const MortgagePage = () => {
	return (
		<main>
			<HeroSection
				tagline='Great rates'
				headline='Zero Closing Costs'
				defaultText='We took a complicated, sometimes overwhelming process and simplified it. Bringing everything you need in-house means convenience and efficiency. It also means we can pay for or waive all traditional closing costs. '
				arrowId=''
			/>
			<RatesSection />
			<ProcessSection />
			<ResourcesSection />
			<ToolsSection />
			<BottomCTA button1text='Purchase Application' button1href='/' button2text='Refinance Application' button2href='/'  />
		</main>
	)
}

export default MortgagePage;