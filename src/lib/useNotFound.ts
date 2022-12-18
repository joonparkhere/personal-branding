import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../modules";
import error from "../modules/error";

function useNotFound() {
    const dispatch = useDispatch();

    const isNotFound = useSelector(
        (state: RootState) => state.error.errorType === "NOT_FOUND",
    );

    const notFound = useCallback(
        () => dispatch(error.actions.notFound()),
        [dispatch],
    );

    const reset = useCallback(
        () => dispatch(error.actions.reset()),
        [dispatch],
    );

    return { notFound, reset, isNotFound };
}

export default useNotFound;
