import {Location} from "@remix-run/router";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";

export interface WithRouterProps {
    location: Location;
    params: Record<string, string>;
    navigate: NavigateFunction;
}

export const withRouter = (Component: any) => {
    return (props: any) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};