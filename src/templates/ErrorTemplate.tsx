import React from "react";
import styled from "styled-components";
import { themedPalette } from "../lib/themes";
import media from "../lib/media";
import RectangleButton from "../components/RectangleButton";

const ScreenBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
    .message {
        color: ${themedPalette.text1};
        margin-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        white-space: pre;
        text-align: center;
        line-height: 1.5;
        font-size: 2.5rem;
        
        ${media.small} {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
    
    .button-wrapper {
        margin-top: 2rem;
        
        ${media.small} {
            margin-top: 1rem;
        }
    }
`;

export type ErrorScreenTemplateProps = {
    message: string;
    buttonText?: string;
    onButtonClick?: () => void;
};

function ErrorTemplate({
    message,
    buttonText,
    onButtonClick,
}: ErrorScreenTemplateProps) {
    return (
        <ScreenBlock>
            <div className="message">{message}</div>
            {buttonText && (
                <div className="button-wrapper">
                    <RectangleButton size="large" onClick={onButtonClick}>
                        {buttonText}
                    </RectangleButton>
                </div>
            )}
        </ScreenBlock>
    );
}

export default ErrorTemplate;
