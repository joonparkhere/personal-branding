import React from "react";
import { Route } from "react-router";
import styled, { css } from "styled-components";
import { buttonColorMap } from "../lib/palette";

type ColorType =
    | "violet"
    | "lightGray"
    | "gray"
    | "darkGray"
    | "transparent"
    | "red";
type ButtonSize = "small" | "medium" | "large";

type RoundButtonBlockProps = {
    color: ColorType;
    size: ButtonSize;
    border: boolean;
    inline?: boolean;
    [props: string]: any;
};

const RoundButtonBlock = styled.button<RoundButtonBlockProps>`
    background: ${(props) => buttonColorMap[props.color].background};
    color: ${(props) => buttonColorMap[props.color].color};
    font-weight: bold;
    word-break: keep-all;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.125s all ease-in;

    &:hover {
        background: ${(props) => buttonColorMap[props.color].hoverBackground};
    }

    &:focus {
        box-shadow: 0 2px 12px #00000030;
    }

    ${(props) => props.inline
    && css`
            & + & {
                margin-left: 1rem;
            }
        `}

    ${(props) => props.size === "small"
    && css`
            height: 1.5rem;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            font-size: 0.875rem;
            border-radius: 0.75rem;
        `};
    ${(props) => props.size === "medium"
    && css`
            height: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1rem;
            border-radius: 1rem;
        `};
    ${(props) => props.size === "large"
    && css`
            height: 3rem;
            font-size: 1.5rem;
            padding-left: 2rem;
            padding-right: 2rem;
            border-radius: 1.5rem;
        `}

    ${(props) => props.border
    && css<RoundButtonBlockProps>`
            background: white;
            color: ${(subProps) => buttonColorMap[subProps.color].background};
            border: 1px solid
                ${(subProps) => buttonColorMap[subProps.color].background};

            &:hover {
                background: ${(subProps) => buttonColorMap[subProps.color].background};
                color: white;
            }
        `}
`;

interface RoundButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    to?: string;
    color?: ColorType;
    size?: ButtonSize;
    border?: boolean;
    inline?: boolean;
}

function RoundButton({
    to = "",
    color = "violet",
    size = "medium",
    border = false,
    inline = false,
    ...rest
}: RoundButtonProps) {
    if (to) {
        return (
            <Route
                render={({ history }) => (
                    <RoundButtonBlock
                        color={color}
                        size={size}
                        border={border}
                        inline={inline}
                        onClick={(e: Event) => {
                            e.preventDefault();
                            history.push(to);
                        }}
                        {...rest}
                    />
                )}
            />
        );
    }
    return (
        <RoundButtonBlock
            color={color}
            size={size}
            border={border}
            inline={inline}
            {...rest}
        />
    );
}

export default RoundButton;
