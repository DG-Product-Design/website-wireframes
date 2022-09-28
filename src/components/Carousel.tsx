import React from 'react';
import { Icon } from '@j33p1n/component-library';

const Carousel = (props: any) => {
	const {children} = props

	const [currentIndex, setCurrentIndex] = React.useState(1)
	const [length, setLength] = React.useState(children.length)

	const [transitionEnabled, setTransitionEnabled] = React.useState(true)

	const [touchPosition, setTouchPosition] = React.useState(null)

	// Set the length to match current children from props
	React.useEffect(() => {
		setLength(children.length)
	}, [children])

	React.useEffect(() => {
		if (currentIndex === 3 || currentIndex === length) {
			setTransitionEnabled(true)
		}
	}, [currentIndex, length])

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState: number) => prevState - 1)
		}
	}

	const next = () => {
		if (currentIndex < (length + 3)) {
			setCurrentIndex((prevState: number) => prevState + 1)
		}
	}

	const handleTouchStart = (e: any) => {
		const touchDown = e.touches[0].clientX
		setTouchPosition(touchDown)
	}

	const handleTouchMove = (e: any) => {
		const touchDown = touchPosition

		if(touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientX
		const diff = touchDown - currentTouch

		// 5 = swipe velocity; lower value = higher sensitivity
		if (diff < -5) {
			prev()
		}

		if (diff > 5) {
			next()
		}
		setTouchPosition(null)
	}

	const handleTransitionEnd = () => {
		if (currentIndex === 0) {
			setTransitionEnabled(false);
			setCurrentIndex(length);
		} else if (currentIndex === length + 2) {
			setTransitionEnabled(false);
			setCurrentIndex(2);
		}
	}

	const renderExtraPrev = () => {
		let output = []
		for (let index = 1; index <= 6; index++) {
			output.push(children[length - index])
		}
		output.reverse()
		return output
	}
	
	const renderExtraNext = () => {
		let output = []
		for (let index = 0; index < 6; index++) {
			output.push(children[index])
		}
		
		return output
	}

	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex items-center relative mb-4">
				{/* Left arrow button */}
 				<div className="absolute left-0 h-full flex items-center justify-center bg-[linear-gradient(90deg,_#FFFFFF_70%,_transparent_100%)] pr-5 xl:pr-12 z-10">
					<button
						className="flex items-center justify-center rounded-full bg-transparent w-8 h-8 hover:bg-slate-100 text-slate-300 cursor-pointer" 
						onClick={prev}
					>
						<Icon iconName='chevronLeft' />
					</button>
				</div>

				{/* Carousel content */}
				<div
					className="w-full h-full overflow-hidden scrollbar-width-0 z-0"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
				>
					<div
						className='flex items-center justify-center transition-all ease-in-out scrollbar-width-0 -ml-[896px] pt-1'
						style={{
								// 896 = QuoteCard width + (x-margin or gap-x * 2)
								transform: `translateX(-${(currentIndex * 896)}px)`,
								transition: !transitionEnabled ? 'none' : undefined,
						}}
						onTransitionEnd={() => handleTransitionEnd()}
					>
						{(length > 3) && renderExtraPrev()}
						{children}
						{(length > 3) && renderExtraNext()}
					</div>
				</div>

				{/* Right arrow button */}
				<div className="absolute right-0 h-full flex items-center justify-center bg-[linear-gradient(270deg,_#FFFFFF_70%,_transparent_100%)] pr-2 xl:pl-12 z-10">
					<button
						className="flex items-center justify-center rounded-full bg-transparent w-8 h-8 hover:bg-slate-100 text-slate-300 cursor-pointer"
						onClick={next}
					>
						<Icon iconName='chevronRight' />
					</button>
				</div>
			</div>
		</div>
	)
}



export default Carousel;