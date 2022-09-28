import React from 'react';
import classNames from 'classnames';
import { Icon } from '@j33p1n/component-library';

const HomeSearchInput = (props: {
	type: 'homeSearch' | 'homeVal';
	placeholder?: string;
	className?: string;
}) => {
	return (
		<div className={classNames(props.className ? props.className : 'w-full')}>
			<div className="flex items-center rounded-full bg-white border border-slate-400 pl-6 pr-2 py-0">
				<input defaultValue='' placeholder={props.placeholder ? props.placeholder : props.type === 'homeSearch' ? 'Enter City, County, or Zip...' : 'Enter property address...'} className='w-full text-ellipsis' />
				<div className="flex justify-center items-center w-10 h-full rounded-full hover:bg-slate-100 hover:cursor-pointer ml-4 p-2">
					<Icon iconName='searchBold' className='h-6'  />
				</div>
			</div>
		</div>
	)
}

export default HomeSearchInput;