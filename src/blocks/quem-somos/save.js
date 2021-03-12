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
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

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
	const {
		attributes: { title, mediaUrl, body },
	} = props;

	const cardImage = (src) => {
		if (!src) return null;

		// No alt set, so let's hide it from screen readers
		return <img className="mx-auto fade" src={src} alt="" />;
	};
	return (
		// <section {...useBlockProps.save()}>
		<section
			key="inmo-inicio"
			id="quem-somos"
			className="quem-somos bg-white py-8"
		>
			<div className="container max-w-6xl sm:p-8 mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 sm:pr-6">
						<RichText.Content
							className="quem-somos-title text-primary mb-10 font-bold"
							tagName="h2"
							value={title || ""}
						/>
						<RichText.Content
							className="quem-somos-body text-gray"
							tagName="p"
							value={body || ""}
						/>
					</div>
					<div className="w-full sm:w-1/2 pt-16 sm:pt-0 sm:pl-6">
						{cardImage(mediaUrl)}
						{/* <img
								className="mx-auto fade"
								src="https://secureservercdn.net/166.62.112.107/753.6ee.myftpupload.com/wp-content/themes/theme-inmo/img/happy-bunch.png"
								alt=""
							/> */}
					</div>
				</div>
			</div>
		</section>
	);
}
