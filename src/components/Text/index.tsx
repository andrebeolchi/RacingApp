import React from "react";
import { Text as RNText } from "react-native";
import {
    getColor,
    getFontSize,
    getFontWeight, getTextAlign
} from "./styles";
import { TextProps } from "./types";

/**
 * Component to render text.
 *
 * @param {TextProps} [props]
 * @param {boolean} [props.primary] - Primary text color
 * @param {boolean} [props.primary80] - Primary text color with 80% opacity
 * @param {boolean} [props.secondary] - Secondary text color
 * @param {boolean} [props.link] - Link text color
 * @param {boolean} [props.title] - Title text size
 * @param {boolean} [props.subtitle] - Subtitle text size
 * @param {boolean} [props.body] - Body text size
 * @param {boolean} [props.body2] - Body2 text size
 * @param {boolean} [props.caption] - Caption text size
 * @param {boolean} [props.light] - Light text weight
 * @param {boolean} [props.medium] - Medium text weight
 * @param {boolean} [props.bold] - Bold text weight
 * @param {boolean} [props.black] - Black text weight
 * @param {boolean} [props.center] - Center text alignment
 * @param {boolean} [props.right] - Right text alignment
 * @param {string} props.children - Text to render
 *
 * @returns {JSX.Element} Text component
 * @example
 * import { Text } from "./components/Text";
 *
 * export default function App() {
 * return (
 *     <Text primary> Hello World </Text>
 * );
 */
export default function Text(props: TextProps): JSX.Element {
    const color = getColor(props);
    const fontSize = getFontSize(props);
    const fontWeight = getFontWeight(props);
    const textAlign = getTextAlign(props);

    return (
        <RNText
            style={{
                color,
                fontSize,
                fontWeight,
                textAlign,
            }}
        >
            {props.children}
        </RNText>
    );
}
