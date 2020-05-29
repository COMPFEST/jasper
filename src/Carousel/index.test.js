import React from "react";
import { shallow } from 'enzyme';
import Carousel from '.';

describe('Carousel', () =>{
	it('renders correctly', () => {
		const DOM = [];
		const data = [
			{
				className:"foo",
				text:"Content 1",
			},
			{
				className:"bar",
				text:"Content 2"
			},
			{
				className:"baz",
				text:"Content 3"
			}
		];
		// for (let i = 0; i< data.length; ++i){
		// 	let item = data[i];
		// 	DOM.push(
		// 		<div id={item.id}>
		// 			{item.text}
		// 		</div>
		// 	);
		// };
		const wrapper=shallow(
			<Carousel>	
				{data.map(({ className, text}) => (
					<div 
						key={className}
						className={className}
					>
						{text}
					</div>
				))}
			</Carousel>
		);
		const divFoo = wrapper.find('.foo');
		const divBar = wrapper.find('.bar');
		const divBaz = wrapper.find('.baz');
		expect(divFoo.text()).toBe("Content 1");
		expect(divBar.text()).toBe("Content 2");
		expect(divBaz.text()).toBe("Content 3");
	})

	// TODO: Works correctly, to be able to be dragged when it's mobile,
	// Next TODO after: Other Carousel

});