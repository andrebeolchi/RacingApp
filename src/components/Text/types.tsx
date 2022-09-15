export interface TextProps {
    children: string;

    // The color of the text
    primary80?: boolean;
    secondary?: boolean;
    link?: boolean;

    // The size of the text
    title?: boolean;
    subtitle?: boolean;
    body2?: boolean;
    caption?: boolean;

    // The style of the text
    light?: boolean;
    medium?: boolean;
    bold?: boolean;
    black?: boolean;

    // The alignment of the text
    center?: boolean;
    right?: boolean;
}
