import React from 'react';
import { useParams } from 'react-router-dom';
import { PriceFilter } from './Filter/PriceFilter';
import { ManufactorerFilter } from './Filter/ManufactorerFilter';
import { WeightFilter } from './Filter/WeightFilter';


export const AsideFilter: React.FC<{product?: {message: any[]}}> = ({product}) => {
    const  {type} = useParams();
    
    
    return (
        <>
            <div className="AsideFilter">
                {product ? <>
                    <PriceFilter />
                    <ManufactorerFilter product={product}/>
                    <WeightFilter />
                </>: null}
                
                
            </div>
        </>
    )
}