import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { usePrevious } from "react-use";
import { Helmet } from "react-helmet-async";
import useNotFound from "../lib/useNotFound";
import ErrorTemplate from "../templates/ErrorTemplate";
import StatusCode from "./StatusCode";

export interface NotFoundErrorProps {}

function NotFoundError(props: NotFoundErrorProps) {
    const history = useHistory();
    const { reset } = useNotFound();
    const location = useLocation();
    const prevPathname = usePrevious(location.pathname);

    useEffect(() => {
        if (prevPathname && prevPathname !== location.pathname) {
            reset();
        }
    }, [location.pathname, prevPathname, reset]);

    const onClick = () => {
        history.push("/");
        reset();
    };

    // <Helmet>
    //     <title>404</title>
    //     <meta name="robots" content="noindex" />
    // </Helmet>

    return (
        <>
            <ErrorTemplate
                message="Not Thing!"
                buttonText="Go Home"
                onButtonClick={onClick}
            />
            <StatusCode statusCode={404} />
        </>
    );
}

export default NotFoundError;
