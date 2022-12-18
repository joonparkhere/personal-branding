import styled, { css } from "styled-components";
import React from "react";
import palette, { buttonColorMap } from "../lib/palette";

type ColorType =
    | "violet"
    | "lightGray"
    | "gray"
    | "darkGray"
    | "transparent"
    | "red";
type ButtonSize = "small" | "medium" | "large";

type RectangleButtonBlockProps = {
    color: ColorType;
    size: ButtonSize;
    inline: boolean;
};

const RectangleButtonBlock = styled.button<RectangleButtonBlockProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => buttonColorMap[props.color].background};
    color: ${(props) => buttonColorMap[props.color].color};
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 4px;
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${(props) => buttonColorMap[props.color].hoverBackground};
    }

    &:disabled {
        cursor: not-allowed;
        background: ${palette.gray3};
        color: ${palette.gray5};
        
        &:hover {
            background: ${palette.gray3};
            color: ${palette.gray5};
        }
    }

    ${(props) => props.inline
    && css`
            & + & {
                margin-left: 0.5rem;
            }
        `}

    ${(props) => props.size === "small"
    && css`
            height: 1.5rem;
            padding-left: 0.9375rem;
            padding-right: 0.9375rem;
            font-size: 0.75rem;
        `}
    ${(props) => props.size === "medium"
    && css`
            height: 2rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            font-size: 1rem;
        `}
    ${(props) => props.size === "large"
    && css`
            height: 2.5rem;
            padding-left: 1.125rem;
            padding-right: 1.125rem;
            & + & {
                margin-left: 0.875rem;
            }
            font-size: 1.125rem;
        `}
`;

interface RectangleButtonProps
    extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
    color?: ColorType;
    size?: ButtonSize;
    inline?: boolean;
}

function RectangleButton({
    color = "violet",
    size = "medium",
    inline = false,
    children,
    ...rest
}: RectangleButtonProps) {
    const htmlProps = rest as any;
    const onClick = (e: Event) => {
        if (htmlProps.onClick) {
            htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
    };

    return (
        <RectangleButtonBlock
            color={color}
            size={size}
            inline={inline}
            {...htmlProps}
            onClick={onClick}
        >
            {children}
        </RectangleButtonBlock>
    );
}

export default RectangleButton;
