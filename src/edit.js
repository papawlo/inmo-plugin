/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

import { Fragment } from "@wordpress/element";
import { TextControl, PanelBody } from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: {
			title,
			paragraph1,
			paragraph2,
			buttonPrimaryText,
			buttonSecondaryText,
			buttonSecondaryUrl,
		},
	} = props;
	const onChangeTitle = (newTitle) => {
		props.setAttributes({ title: newTitle });
	};

	function onChangeButtonPrimaryText(value) {
		props.setAttributes({ buttonPrimaryText: value });
	}
	function onChangeButtonSecondaryText(value) {
		props.setAttributes({ buttonSecondaryText: value });
	}

	function onChangeButtonSecondaryUrl(value) {
		props.setAttributes({ buttonSecondaryUrl: value });
	}

	return (
		// <section {...useBlockProps()}>
		[
			<Fragment>
				<InspectorControls>
					{/* Whatever is inside this block will be displayed on the sidebar */}

					{/* WordPress class for labels */}
					<PanelBody title="Configurações" initialOpen={true}>
						<TextControl
							help="Insira a url do link de WhatsApp"
							label="WhatsApp URL"
							value={buttonSecondaryUrl}
							onChange={onChangeButtonSecondaryUrl}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>,
			<section id="inicio" className="inicio min-h-screen flex flex-col">
				<div className="flex flex-col justify-center items-center mx-auto container">
					<RichText
						className="inicio-title text-2xl font-bold text-center mt-8 text-white"
						tagName="h1"
						onChange={onChangeTitle}
						value={title}
						placeholder="Olá, é bom receber você aqui"
						default="Olá, é bom receber você aqui"
					/>
					<RichText
						className="inicio-line-1 mt-10 text-base text-white text-center leading-10 tracking-wide"
						tagName="p"
						onChange={(value) => props.setAttributes({ paragraph1: value })}
						value={paragraph1}
						placeholder="Nós somos a Inmo, estamos aqui para ajudar você na construção do seu chatbot."
					/>
					<RichText
						className="inicio-line-2 mt-10 text-base text-white text-center leading-10 tracking-wide"
						tagName="p"
						onChange={(value) => props.setAttributes({ paragraph2: value })}
						value={paragraph2}
						placeholder="linha 2"
					/>
					<button className="inicio-btn-primary bg-white px-12 py-8 rounded-full text-primary mt-6 border-none">
						<RichText
							onChange={onChangeButtonPrimaryText} // onChange event callback
							value={buttonPrimaryText} // Input Binding
							placeholder="Name of the link"
						/>
					</button>

					{/* You have to have a wrapper tag when your markup has more than 1 tag */}
					<a className="inicio-btn-secondary mt-5 mb-4 text-white no-underline">
						<RichText
							onChange={onChangeButtonSecondaryText} // onChange event callback
							value={buttonSecondaryText} // Input Binding
							placeholder="Falar no Whatsapp"
						/>
					</a>
				</div>
			</section>,
		]
	);
}
