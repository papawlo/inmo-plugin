import { Button } from "@wordpress/components";

import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit(props) {
	console.log("🚀 ~ file: edit.js ~ line 33 ~ Edit ~ props", props);

	const {
		attributes: { title, body, mediaId, mediaUrl },
		setAttributes,
	} = props;
	// console.log("🚀 ~ file: edit.js ~ line 39 ~ Edit ~ attributes", attributes);

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeBody = (value) => {
		setAttributes({ body: value });
	};

	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
		});
	};

	const getImageButton = (openEvent) => {
		return (
			<Button
				className={
					mediaId ? "image-button h-auto" : "button button-large h-auto"
				}
				onClick={openEvent}
			>
				{!mediaId ? (
					"Upload Image"
				) : (
					<img src={mediaUrl} alt={"Upload Image"} />
				)}
			</Button>
		);
		// if (mediaUrl) {
		// 	return <img src={mediaUrl} onClick={openEvent} className="image" />;
		// } else {
		// 	return (
		// 		<div className="button-container">
		// 			<Button onClick={openEvent} className="button button-large">
		// 				Pick an image
		// 			</Button>
		// 		</div>
		// 	);
		// }
	};

	return (
		<>
			<section
				key="inmo-quem-somos"
				id="quem-somos"
				className="quem-somos bg-white py-8"
			>
				<div className="container max-w-6xl sm:p-8 mx-auto">
					<div className="flex flex-wrap">
						<div className="w-full sm:w-1/2 sm:pr-6">
							{/* <h2 className="text-primary mb-10 font-bold">Quem Somos</h2> */}
							<RichText
								className="quem-somos-title text-primary mb-10 font-bold"
								tagName="h2"
								onChange={onChangeTitle}
								value={title || ""}
								placeholder="Escreva o título"
							/>
							<RichText
								className="quem-somos-body text-gray"
								tagName="p"
								onChange={onChangeBody}
								value={body || ""}
								placeholder="A Inmo é especialista em construir conversas automatizadas que facilitam a comunicação entre marcas e pessoas...."
							/>
						</div>
						<div className="w-full sm:w-1/2 pt-16 sm:pt-0 sm:pl-6">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										setAttributes({ mediaId: media.id, mediaUrl: media.url });
									}}
									type="image"
									value={mediaId}
									render={({ open }) => getImageButton(open)}
								/>
							</MediaUploadCheck>
							{/* <MediaUploadCheck>

								<MediaUpload
									allowedTypes={["image"]}
									onSelect={onSelectMedia}
									type="image"
									value={attributes.mediaId || ""}
									render={({ open }) => (
										<Button
											className={
												attributes.mediaId == 0
													? "image-button"
													: "button button-large"
											}
											onClick={open}
										>
											{attributes.mediaId == 0 ? (
												"Upload imagem"
											) : (
												<img src={mediaURL} />
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck> */}
							{/* <img
								className="mx-auto fade"
								src="https://secureservercdn.net/166.62.112.107/753.6ee.myftpupload.com/wp-content/themes/theme-inmo/img/happy-bunch.png"
								alt=""
							/> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
