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
	return (
		// <section {...useBlockProps.save()}>
		<section id="inicio" class="inicio min-h-screen flex flex-col">
			<header>
				<div className="mx-auto container max-w-full px-4">
					<div className="lg:flex lg:justify-between lg:items-center py-6">
						<div className="flex justify-between items-center">
							<a
								href="https://inmo.work/"
								className="custom-logo-link"
								rel="home"
								aria-current="page"
							>
								<img
									src="https://secureservercdn.net/166.62.112.107/753.6ee.myftpupload.com/wp-content/uploads/2021/03/cropped-logo.png?time=1615350937"
									className="custom-logo"
									alt="Inmo"
									width="81"
									height="25"
								/>
							</a>
							<div class="lg:hidden">
								<a
									href="#"
									aria-label="Toggle navigation"
									id="primary-menu-toggle"
								>
									<svg
										viewBox="0 0 20 20"
										className="inline-block w-6 h-6"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<g
											stroke="none"
											stroke-width="1"
											fill="currentColor"
											fill-rule="evenodd"
										>
											<g id="icon-shape">
												<path
													d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
													id="Combined-Shape"
												></path>
											</g>
										</g>
									</svg>
								</a>
							</div>
							{/*<!--fim hamburger menu--> */}
						</div>
						{/*<!--fim logo e hamburger mobile menu--> */}
						<div
							id="primary-menu"
							className="hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block"
						>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</header>
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
					className="inicio-btn-primary bg-white px-12 py-8 rounded-full text-primary mt-6 border-none focus:ring-4 focus:ring-purple-500 focus:outline-none text-base transform hover:scale-110 transition duration-500 ease-in-out hover:shadow-lg uppercase"
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
