import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ShowPath = () => {
    const location = useLocation();
    const navigator = useNavigate();
    const [paths, setPaths] = useState<string[]>();

    useEffect(() => {
        const paths = location.pathname
            .split("/")
            .reduce((acc: string[], part, index, array) => {
                if (part) {
                    const newPath: string = 
                        `/${array.slice(1, index + 1).join("/")}`;
                    acc.push(newPath);
                }
                return acc;
            }, []);
        setPaths(paths);
    }, [location]);

    return (
        <>
            {paths && paths?.length > 0 ? (
                <div className="locations">
                    {paths.map((val, idx) => (
                        <span
                            className="locations-item"
                            key={idx}
                            onClick={() => navigator(`${val}`)}
                        >
                            {val.split("/")[val.split("/").length - 1]}/
                        </span>
                    ))}
                </div>
            ) : null}
        </>
    );
};
