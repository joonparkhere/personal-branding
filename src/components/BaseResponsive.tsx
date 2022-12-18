import styled from "styled-components";
import React from "react";
import { mediaQuery } from "../lib/media";

const BaseResponsiveBlock = styled.div`
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    
    ${mediaQuery(1919)} {
        width: 1376px;
    }
    ${mediaQuery(1440)} {
        width: 1024px;
    }
    ${mediaQuery(1056)} {
        width: calc(100% - 2rem);
    }
`;

export interface BaseResponsiveProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

function BaseResponsive({ className, style, children }: BaseResponsiveProps) {
    return (
        <BaseResponsiveBlock className={className} style={style}>
            {children}
        </BaseResponsiveBlock>
    );
}

export default BaseResponsive;
