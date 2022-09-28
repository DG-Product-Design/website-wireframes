import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full'>

			{/* Contact and links */}
			<div className="w-full bg-slate-100 px-4 mx-auto">
				<div className="lg:container lg:mx-auto">
					<div className="flex flex-wrap gap-y-16 justify-between py-11 mx-auto">
						<div className='flex flex-wrap order-2 lg:order-1 justify-center lg:justify-between w-full max-w-[424px] mx-auto lg:mx-0'>
							<div className='flex flex-col items-start justify-between text-body-sm pr-22 lg:pr-4'>
								<p className="text-body-sm-bold mb-6">Hours of Operation</p>
								<div>
									<p className="text-body-sm-bold">Monday-Friday</p>
									<p className='mb-6'>8:30 AM - 6 PM</p>
								</div>
								<div>
									<p className="text-body-sm-bold">Saturday</p>
									<p>10 AM - 4 PM</p>
								</div>
							</div>
							<div className='flex flex-col items-start justify-between text-body-sm'>
								<div>
									<p className="text-body-sm-bold">Contact Us</p>
									<p className="w-full">1-800-968-5844</p>
									<p className="w-full">customerservice@capcenter.com</p>
								</div>
								<div>
									<p className="text-body-sm-bold">Location</p>
									<p className="w-full">4461 Cox Road</p>
									<p className="w-full">Glen Allen, VA 23060</p>
								</div>
							</div>
						</div>
						<div className='w-full lg:max-w-fit flex flex-wrap order-1 justify-center lg:justify-between gap-y-4 mx-auto lg:mx-0'>
							<div>
								<p className="text-headline-xs mb-6">Join Our Team</p>
								<div className='flex flex-col items-start justify-between h-[126px] text-body-sm'>
									<a href='/' className='text-body-sm text-slate-600'>Developers</a>
									<a href='/' className='text-body-sm text-slate-600'>Real Estate Agents</a>
									<a href='/' className='text-body-sm text-slate-600'>All Careers</a>
									<br />
								</div>
							</div>
							<div className='px-22'>
								<p className="text-headline-xs mb-6">Get in Touch</p>
								<div className='flex flex-col items-start justify-between h-[126px] text-body-sm'>
									<a href='/' className='text-body-sm text-slate-600'>Contact Us</a>
									<a href='/' className='text-body-sm text-slate-600'>Find an Agent</a>
									<a href='/' className='text-body-sm text-slate-600'>Listing Consultation</a>
									<div className='flex gap-x-2'>
										<div className="bg-blue-500 w-[18px] h-[16px]" />
										<div className="bg-blue-500 w-[18px] h-[16px]" />
										<div className="bg-blue-500 w-[18px] h-[16px]" />
									</div>
								</div>
							</div>
							<div>
								<p className="text-headline-xs mb-6">Legal</p>
								<div className='flex flex-col items-start justify-between h-[126px] text-body-sm'>
									<a href='/' className='text-body-sm text-slate-600'>Terms &amp; Conditions</a>
									<a href='/' className='text-body-sm text-slate-600'>Privacy Policy</a>
									<a href='/' className='text-body-sm text-slate-600'>Disclosures</a>
									<a href='/' className='text-body-sm text-slate-600'>FAQs</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright and disclosures */}
			<div className="w-full flex flex-wrap items-center bg-slate-600 text-slate-200 text-[10px] font-base text-center px-4 lg:px-0 pt-8 pb-4">
				<div className="w-full justify-center flex gap-x-6 mx-auto">
					<div className="bg-slate-300 w-[46px] h-6" />
					<div className="bg-slate-300 w-[46px] h-6" />
				</div>
				<p className='w-full text-center mx-auto my-5'>Copyright ©2022 CapCenter</p>
				<p className='w-full text-center mx-auto'>
					Capital Center, L.L.C. d/b/a CapCenter is both a licensed mortgage lender in Virginia, North Carolina, South Carolina, Maryland, Georgia, and the District of Columbia, NMLS ID#67717
					<br  />
					(www.nmlsconsumeraccess.org ) and a licensed real estate broker in Virginia, North Carolina, South Carolina, Maryland, and the District of Columbia. Our primary office is located in Glen Allen, Virginia.
				</p>
			</div>
		</footer>
	)
}

export default Footer;