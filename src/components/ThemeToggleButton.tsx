import React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import { themedPalette } from "../lib/themes";
import useToggleTheme from "../lib/useToggleTheme";
import { MoonIcon, SunIcon } from "../static/svg";

const IconButtonBlock = styled.div`
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.25rem;
    position: relative;

    &:hover {
        background: ${themedPalette.slight_layer};
    }
`;

const PositionerBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SVGWrapperBlock = styled.div`
    color: ${themedPalette.text1};
    svg {
        display: block;
    }
`;

const AnimatedSVGWrapperBlock = animated(SVGWrapperBlock);

export interface Props {}

function ThemeToggleButton(props: Props) {
    const [theme, toggle] = useToggleTheme();

    const isDark = theme === "dark";
    const transitions = useTransition(isDark, {
        initial: {
            transform: "scale(1) rotate(0deg)",
            opacity: 1,
        },
        from: {
            transform: "scale(0) rotate(-180deg)",
            opacity: 0,
        },
        enter: {
            transform: "scale(1) rotate(0deg)",
            opacity: 1,
        },
        leave: {
            transform: "scale(0) rotate(180deg)",
            opacity: 0,
        },
        reverse: true,
    });

    return (
        <IconButtonBlock onClick={toggle}>
            {transitions((style, item) => (item ? (
                <PositionerBlock>
                    <AnimatedSVGWrapperBlock style={style}>
                        <MoonIcon />
                    </AnimatedSVGWrapperBlock>
                </PositionerBlock>
            ) : (
                <PositionerBlock>
                    <AnimatedSVGWrapperBlock style={style}>
                        <SunIcon />
                    </AnimatedSVGWrapperBlock>
                </PositionerBlock>
            )))}
        </IconButtonBlock>
    );
}

export default ThemeToggleButton;
