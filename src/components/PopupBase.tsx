import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import zIndexes from "../lib/zIndexes";
import media from "../lib/media";
import transitions from "../lib/transitions";
import OpaqueLayer from "./OpaqueLayer";

const PopupBaseBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndexes.Popup};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopupWrapperBlock = styled.div<{ visible: boolean }>`
    width: 25rem;
    background: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    border-radius: 4px;
    padding: 2rem 1.5rem;

    ${media.small} {
        width: calc(100% - 2rem);
    }
    
    ${(props) => (props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
        `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `
    )}
`;

interface PopupBaseProps {
    visible: boolean;
    children: React.ReactNode;
}

function PopupBase({ visible, children }: PopupBaseProps) {
    const [closed, setClosed] = useState(true);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        if (visible) {
            setClosed(false);
        } else {
            timeoutId = setTimeout(() => {
                setClosed(true);
            }, 200);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [visible]);

    if (!visible && closed) return null;

    return (
        <>
            <OpaqueLayer visible={visible} />
            <PopupBaseBlock>
                <PopupWrapperBlock visible={visible}>
                    {children}
                </PopupWrapperBlock>
            </PopupBaseBlock>
        </>
    );
}

export default PopupBase;
