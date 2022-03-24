/* eslint-disable jsdoc/check-line-alignment */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}  root0
 * @param {Object}  root0.attributes
 * @param {*} 		root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, checked } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onChangeToggle = (newCheck) => {
		if (checked === true) {
			setAttributes({ checked: newCheck });
		} else {
			setAttributes({ checked: newCheck });
		}
	};
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						helo="help"
					/>
					<TextareaControl
						label="Text Area Label"
						value={text}
						onChange={onChangeText}
						helo="help"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={checked}
						onChange={onChangeToggle}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: false,
						// onClick: () => console.log('Button 1 clicked'),
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						isActive: true,
						// onClick: () => console.log('Button 2 clicked'),
					},
				]}
			></BlockControls>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
