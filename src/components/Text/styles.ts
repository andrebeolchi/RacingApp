import { useTheme } from "../../hooks/useTheme";
import { TextProps } from "./types";

/**
 * This function is used to get the color for the Text component.
 * @param {TextProps} props The props of the Text component.
 * @returns {string} The color of the Text component.
 * @example
 * const color = getColor(props);
 */
export function getColor(props: TextProps) {
    const { theme } = useTheme();

    switch (true) {
        case props.primary80:
            return theme.text.primary80;
        case props.secondary:
            return theme.text.secondary;
        case props.link:
            return theme.text.link;
        default:
            return theme.text.primary;
    }
}

/**
 * This function is used to get the font size for the Text component.
 * @param {TextProps} props The props of the Text component.
 * @returns {string} The font size of the Text component.
 * @example
 * const fontSize = getFontSize(props);
 */
export function getFontSize(props: TextProps) {
    switch (true) {
        case props.title:
            return 20;
        case props.subtitle:
            return 16;
        case props.body2:
            return 12;
        case props.caption:
            return 10;
        default:
            return 14;
    }
}

/**
 * This function is used to get the style for the Text component.
 * @param {TextProps} props The props of the Text component.
 * @returns {string} The weight of the Text component.
 * @example
 * const weight = getFontWeight(props);
 */
export function getFontWeight(props: TextProps) {
    switch (true) {
        case props.light:
            return "200";
        case props.medium:
            return "500";
        case props.bold:
            return "700";
        case props.black:
            return "900";
        default:
            return "400";
    }
}

/**
 * This function is used to get the alignment for the Text component.
 * @param {TextProps} props The props of the Text component.
 * @returns {string} The style of the Text component.
 * @example
 * const textAlign = getTextAlign(props);
 */
export function getTextAlign(props: TextProps) {
    switch (true) {
        case props.center:
            return "center";
        case props.right:
            return "right";
        default:
            return "left";
    }
}
