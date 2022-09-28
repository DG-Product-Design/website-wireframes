import React from 'react';
import classNames from 'classnames';
import { Button, Logo } from '@j33p1n/component-library';
import NavContent from './NavContent';

import './Nav.css';

const Nav = () => {
	const [scrollDistance, setScrollDistance] = React.useState<number>(0);
	const [activeMenuItem, setActiveMenuItem] = React.useState<number>(0);
	const [menuExpanded, setMenuExpanded] = React.useState(false);
	const rootElement = document.getElementById('root');
	const transparentBg = scrollDistance < 63;

	React.useEffect(() => {
		getDistance();
	});

	function handleMouseOver(index: number) {
		setMenuExpanded(true);
		setActiveMenuItem(index);
	}
	
	function getDistance() {
		if (rootElement) {
			const scrollTop = rootElement.scrollTop;
			return setScrollDistance(scrollTop);
		}
	}

	React.useEffect(() => {
		if (rootElement) {
			rootElement.addEventListener('scroll', getDistance, { passive: true });
			return () => rootElement.removeEventListener('scroll', getDistance);
		}
	});

	const MenuLink = (props: {
		label: string | React.ReactNode;
		href: string;
		className?: string;
		index: number;
	}) => {
		return (
			<a
				onClick={() => {
					setActiveMenuItem(0);
					setMenuExpanded(false);
				}}
				href={props.href}
				className={classNames(
					transparentBg
						? menuExpanded 
							? 'text-slate-600 hover:bg-orange-50' 
							: 'text-white hover:slate-600'
						: 'text-slate-600 hover:bg-orange-50'
					, 
					activeMenuItem === props.index
						? 'bottom-border-svg bg-orange-50'
						: 'border-transparent'
					, 
					'border-b h-full flex items-center text-body-sm-bold px-1 md:px-6'
				)}
				onMouseEnter={() => handleMouseOver(props.index)}
			>
				{props.label}
			</a>
		)
	}

	return (
		<nav 
			className={classNames('absolute top-0 w-full flex flex-wrap items-start transition-all ease-in-out z-50')}
			onMouseLeave={() => {
				setActiveMenuItem(0);
				setMenuExpanded(false);
			}}
		>
			<div 
				className={classNames(
					transparentBg 
						? menuExpanded 
							? 'bg-white border-slate-200' 
							: 'bg-transparent border-transparent'
						: 'bg-white border-slate-200'
					, 
					'w-full h-[63px] border-b z-20'
				)}
			>
				<div className='container h-full flex flex-wrap justify-between px-10 mx-auto'>
					<ul className='flex items-center gap-x-6'>
						<li>
							<a href='/website' className='h-full text-body-default'>
								<Logo white={transparentBg && !menuExpanded} className='h-4 md:h-6'  />
							</a>
						</li>
						<li className='h-full'>
							<MenuLink
								label='Mortgage'
								href='/website/mortgage'
								index={1}
							/>
						</li>
						<li className='h-full'>
							<MenuLink
								label='Realty'
								href='/website/realty'
								index={2}
							/>
						</li>
						<li className="hidden lg:block h-full">
							<MenuLink
								label='Insurance'
								href='/'
								index={3}
							/>
						</li>
						<li className="hidden xl:block h-full">
							<MenuLink
								label='Resource Center'
								href='/'
								index={4}
							/>
						</li>
						<li className="hidden xl:block h-full">
							<MenuLink
								label='Our Company'
								href='/'
								index={5}
							/>
						</li>
					</ul>
					<div className='hidden md:flex items-center'>
						<ul className="flex items-center gap-x-6">
							<li className='hidden md:flex md:flex-shrink-0'>
								<Button
									variant='outline'
									color={
										transparentBg 
											? menuExpanded 
												? 'primary' 
												: 'white'
											: 'primary'
									}
									label='Sign In'
									className='bg-transparent flex items-center h-[34px] px-8'
									labelClass='text-body-sm-bold'
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Expanded menu */}
			<div
				className={classNames(menuExpanded ? 'max-h-[9999px]' : 'max-h-0', 'h-full w-full bg-white transition-all ease-in-out overflow-hidden shadow-md z-10')}
			>
				<div className={classNames(menuExpanded ? 'flex' : 'hidden','container content-center p-10 mx-auto')}>
					<NavContent activeMenuItem={activeMenuItem} />
				</div>
			</div>
		</nav>
	)
}

export default Nav;