import styled, { css } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import zIndexes from "../lib/zIndexes";
import transitions from "../lib/transitions";

const OpaqueLayerBlock = styled.div<{
    animate: boolean;
    visible: boolean;
}>`
    position: fixed;
    background: rgba(249, 249, 249, 0.85);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndexes.OpaqueLayer};
    
    ${(props) => (props.visible
        ? css`
            animation: ${transitions.fadeIn} 0.25s forwards;
        `
        : css`
            animation: ${transitions.fadeOut} 0.25s forwards;
        `
    )}
`;

interface OpaqueLayerProps {
    visible: boolean;
}

function OpaqueLayer({ visible }: OpaqueLayerProps) {
    const [animate, setAnimate] = useState(false);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mounted = useRef(false);
    const [closed, setClosed] = useState(true);

    useEffect(() => {
        document.body.style.overflowY = visible ? "hidden" : "initial";

        if (!mounted.current) {
            mounted.current = true;
        } else {
            setAnimate(true);
            timeoutId.current = setTimeout(() => {
                setAnimate(false);
                if (!visible) {
                    setClosed(true);
                }
            }, 250);
        }

        if (visible) {
            setClosed(false);
        }

        return () => {
            if (!timeoutId.current) return;
            clearTimeout(timeoutId.current);
        };
    }, [visible]);

    useEffect(() => () => {
        document.body.style.overflowY = "initial";
    }, []);

    if (!animate && !visible && closed) return null;

    return <OpaqueLayerBlock animate={animate} visible={visible} />;
}

export default OpaqueLayer;
