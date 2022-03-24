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
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
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
	const { text } = attributes;
	return (
		<>
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
			>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon="editor-alignleft"
						// onClick={() => console.log('Align left')}
					/>
					<ToolbarButton
						title="Align Center"
						icon="editor-aligncenter"
						// onClick={() => console.log('Align left')}
					/>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						// onClick={() => console.log('Align left')}
					/>
					<ToolbarDropdownMenu
						icon="arrow-down-alt2"
						label={__('More Alignments', 'text-box')}
						controls={[
							{
								title: __('Wide', 'text-box'),
								icon: 'align-wide',
							},
							{
								title: __('Full', 'text-box'),
								icon: 'align-full-width',
							},
						]}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						// onClick={() => console.log('Align left')}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
