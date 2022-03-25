import React from 'react';
import './TextArea.css';

const nodeIndetation = 25;

export const TextArea = ({ style, children, onUpdate, indentation }) => {
	const getWrapperStyles = () => {
		const wrapper = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
		};
		return {
			...wrapper,
			...style,
			marginLeft: nodeIndetation * indentation + 'px',
		};
	};

	const getTextStyles = () => {
		let style = {
			flex: '1',
			cursor: 'pointer',
			border: '0',
			padding: '1rem',
			fontSize: '1rem',
		};

		switch (indentation) {
			case 0:
				style.color = '#00C6CC';
				style.fontWeight = 600;
				break;
			case 1:
				style.color = '#000000';
				style.fontWeight = 600;
				break;
			default:
				style.color = '#707070';
				break;
		}

		return style;
	};

	return (
		<div style={getWrapperStyles()}>
			<div className='block-pointer'> - </div>
			<input
				onChange={(event) =>
					onUpdate ? onUpdate(event.target.value) : () => {}
				}
				style={getTextStyles()}
				value={children}
				placeholder='Type standard here (e.g. Numbers)'
			/>
		</div>
	);
};
export default TextArea;
