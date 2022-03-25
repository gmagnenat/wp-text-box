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
	AlignmentToolbar,
} from '@wordpress/block-editor';

// eslint-disable-next-line
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const { __Visualizer: BoxControlVisualizer } = BoxControl;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {any}  props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const { text, alignment, style } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<div
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
			>
				<RichText
					className="text-box-title"
					onChange={onChangeText}
					value={text}
					placeholder={__('Your Text', 'text-box-a')}
					tagName="h4"
					allowedFormats={[]}
				/>
				<BoxControlVisualizer
					values={style && style.spacing && style.spacing.padding}
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/>
			</div>
		</>
	);
}
