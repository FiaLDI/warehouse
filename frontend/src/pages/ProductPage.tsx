import React from "react";
import { Products } from "../components/Catalog/Products";
import { TopFilter } from "../components/Catalog/TopFilter";
import { AsideFilter } from "../components/Catalog/AsideFilter";
import { useCurrentProductQuery } from "../services/api";
import { useParams } from "react-router-dom";

////<Products />

export const ProductPage: React.FC = () => {
    
    const  {type} = useParams();
    const {data: product} = useCurrentProductQuery({type});

    return <>
        <div className="product-main">
            <AsideFilter product={product}/>
            <div className="product">
                <TopFilter />
                {product ? (<Products product={product}/>) : null}
            </div>
            
        </div>
    </>;
};
