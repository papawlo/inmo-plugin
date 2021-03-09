/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("create-block/inmo", {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Inmo", "inmo"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __("Bloco Início Header INMO", "inmo"),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: "common",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "smiley",

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		title: {
			type: "string",
			source: "text",
			selector: ".inicio-title",
			default: "Olá, é bom receber você aqui",
		},
		paragraph1: {
			type: "string",
			source: "text",
			selector: ".inicio-line-1",
			default:
				"Nós somos a Inmo, estamos aqui para ajudar você na construção do seu chatbot.",
		},
		paragraph2: {
			type: "string",
			source: "text",
			selector: ".inicio-line-2",
			default:
				"Converse com o <i>Mô</i>, o robô que criamos para entender a sua necessidade ;)",
		},
		buttonPrimaryText: {
			type: "string",
			source: "text",
			selector: ".inicio-btn-primary",
		},
		buttonSecondaryText: {
			attribute: "text",
			selector: ".btn-secondary",
			source: "children",
		},
		buttonSecondaryUrl: {
			selector: "a.inicio-btn-secondary",
			source: "attribute", // binds an attribute of the tag
			attribute: "href", // binds href of a: the link url
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
