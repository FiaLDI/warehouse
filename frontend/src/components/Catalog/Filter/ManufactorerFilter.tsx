import React, { useEffect, useState } from "react";

export const ManufactorerFilter: React.FC<{product?: {message: any[]}}> = ({product}) => {
    const [manufacorers, setmanufacorers] = useState<string[]>([])

    useEffect(() => {
        if (product && product.message) {
            setmanufacorers([...new Set(product.message.map(val => val.title_manufacturer))]);
        }
    }, [product]);

    // const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPriceFilter({ ...priceFfilter, [e.target.name]: e.target.value });
    // };

    return <>
        <div className="filter-item">
            <h3>Производители</h3>
            <select className="filter-select" name="" id="" multiple > 
                {manufacorers ? manufacorers.map(((val, idx) => (
                    <option  key={idx} value={val}>{val}</option>
                ))): null}
            </select>
        </div>
    </>
}