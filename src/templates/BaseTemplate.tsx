import React from "react";
import styled from "styled-components";

const Block = styled.div``;

type BaseTemplateProps = {
    children: React.ReactNode;
};

function BaseTemplate({ children }: BaseTemplateProps) {
    return (
        <Block>{children}</Block>
    );
}

export default BaseTemplate;
