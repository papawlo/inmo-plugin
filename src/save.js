/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();
	return (
		// <section {...useBlockProps.save()}>
		<section id="inicio" class="inicio min-h-screen flex flex-col">
			<div class="flex flex-col justify-center items-center mx-auto container">
				<RichText.Content
					className="inicio-title text-2xl font-bold text-center mt-8 text-white"
					tagName="h1"
					value={props.attributes.title}
				/>
				<RichText.Content
					className="inicio-line-1 mt-10 text-base text-white text-center leading-10 tracking-wide"
					tagName="p"
					value={props.attributes.paragraph1}
				/>
				<RichText.Content
					className="inicio-line-2 mt-10 text-base text-white text-center leading-10 tracking-wide"
					tagName="p"
					value={props.attributes.paragraph2}
				/>
				<button
					id="takebot"
					className="inicio-btn-primary bg-white px-12 py-8 rounded-full text-primary mt-6 border-none"
				>
					{props.attributes.buttonPrimaryText}
				</button>
				<a
					className="inicio-btn-secondary mt-5 mb-4 text-white no-underline"
					href={props.attributes.buttonSecondaryUrl}
				>
					{props.attributes.buttonSecondaryText}
				</a>
			</div>
		</section>
	);
}
