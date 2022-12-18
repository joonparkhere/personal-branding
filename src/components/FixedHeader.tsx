import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import BaseResponsive from "./BaseResponsive";
import { RootState } from "../modules";
import ThemeToggleButton from "./ThemeToggleButton";
import RoundButton from "./RoundButton";

const OuterBlock = styled.div`
    height: 4rem;
`;

const InnerBlock = styled(BaseResponsive)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UnitBlock = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

interface HeaderProps {}

function FixedHeader(props: HeaderProps) {
    const themeReady = useSelector(
        (state: RootState) => state.displayMode.systemTheme !== "not-ready",
    );

    return (
        <OuterBlock>
            <InnerBlock>
                <UnitBlock>
                    {themeReady && <ThemeToggleButton />}
                </UnitBlock>
                <UnitBlock>
                    <RoundButton
                        to="/"
                        color="darkGray"
                        border
                        className="go-home"
                    >
                        Home
                    </RoundButton>
                </UnitBlock>
            </InnerBlock>
        </OuterBlock>
    );
}

export default FixedHeader;
