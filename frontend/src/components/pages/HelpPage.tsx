import React from "react";

export const HelpPage: React.FC<{ type?: string }> = ({ type }) => {
    switch (type) {
        case "delivery":
            return <>del</>;
        case "shops":
            return <>shops</>;
        case "vacancy":
            return <>vac</>;
        default:
                return <>any</>;
    }
};
