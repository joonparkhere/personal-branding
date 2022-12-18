import React from "react";
import * as Matter from "gray-matter";
import { sync } from "glob";
import * as fs from "fs";
import BaseTemplate from "../templates/BaseTemplate";
import FixedHeader from "../components/FixedHeader";

interface HomePageProps {}

function HomePage(props: HomePageProps) {
    return (
        <BaseTemplate>
            <FixedHeader />
        </BaseTemplate>
    );
}

export default HomePage;
