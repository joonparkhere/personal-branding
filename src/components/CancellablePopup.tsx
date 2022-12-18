import styled from "styled-components";
import React from "react";
import palette from "../lib/palette";
import PopupBase from "./PopupBase";
import RectangleButton from "./RectangleButton";

const CancellablePopupBlock = styled.div`
    h3 {
        color: ${palette.gray8};
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: bold;
    }
    
    .message {
        color: ${palette.gray7};
        margin-top: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
        font-size: 1rem;
        white-space: pre-wrap;
    }
    
    .button-area {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
        
        button + button {
            margin-left: 0.75rem;
        }
    }
`;

interface CancellablePopupProps {
    visible: boolean;
    title?: string;
    onConfirm?: () => any;
    onCancel?: () => any;
    children: React.ReactNode;
}

function CancellablePopup({
    visible,
    title,
    onConfirm,
    onCancel,
    children,
}: CancellablePopupProps) {
    return (
        <PopupBase visible={visible}>
            <CancellablePopupBlock>
                {title && <h3>{title}</h3>}
                <div className="message">{children}</div>
                <div className="button-area">
                    {onCancel && (
                        <RectangleButton color="lightGray" onClick={onCancel}>
                            Cancel
                        </RectangleButton>
                    )}
                    {onConfirm && (
                        <RectangleButton onClick={onConfirm}>
                            Confirm
                        </RectangleButton>
                    )}
                </div>
            </CancellablePopupBlock>
        </PopupBase>
    );
}

export default CancellablePopup;
