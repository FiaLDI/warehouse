import React, { useState } from "react";

export const PriceFilter = () => {
    const [priceFfilter, setPriceFilter] = useState({
        min: 0,
        max: 0
    })

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPriceFilter({ ...priceFfilter, [e.target.name]: e.target.value });
    };

    const handlerCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        switch (e.target.id) {
            case "c100500":
                setPriceFilter({ min: 100, max: 500 });
                break
            case "c500-1000":
                setPriceFilter({ min: 500, max: 1000 });
                break
            case "c1000-1500":
                setPriceFilter({ min: 1000, max: 1500 });
                break
            case "c0":
                setPriceFilter({ min: 0, max: 0 });
                break
            default: 
                return
            
        }
    }

    return <>
    
        <div className="filter-item">
        <h3>Стоимость</h3>
            <div className="filter_numbers">
            
                <div className="filter-number">
                    <input type="number" min={0} name="min" value={priceFfilter.min} onChange={handlerChange}/>
                </div>
                <div className="filter-number">
                    <input type="number" min={0} name="max"  value={priceFfilter.max} onChange={handlerChange}/>
                </div>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="c100500" name="c100500" onChange={handlerCheck}/>  
                
                <label htmlFor="c100500">100-500 руб/ед.товара</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="c500-1000" name="c100500" onChange={handlerCheck}/>
                <label htmlFor="c500-1000">до 500-1000 руб/ед.товара</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="c1000-1500" name="c100500" onChange={handlerCheck}/>
                <label htmlFor="c1000-1500">до 1000-1500 руб/ед.товара</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="c0" name="c100500" onChange={handlerCheck}/>
                <label htmlFor="c0">Другое</label>
            </div>
        </div>
    </>
}