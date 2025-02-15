import React, { useState } from "react";

export const WeightFilter = () => {
    const [priceFfilter, setPriceFilter] = useState({
        min: 0,
        max: 0
    })

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPriceFilter({ ...priceFfilter, [e.target.name]: e.target.value });
    };

    const handlerCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        switch (e.target.id) {
            case "wc100500":
                setPriceFilter({ min: 100, max: 500 });
                break
            case "wc500-1000":
                setPriceFilter({ min: 500, max: 1000 });
                break
            case "wc1000-1500":
                setPriceFilter({ min: 1000, max: 1500 });
                break
            case "wc0":
                setPriceFilter({ min: 0, max: 0 });
                break
            default: 
                return
            
        }
    }

    return <>
        <div className="filter-item">
            <h3>Вес</h3>
            <div className="filter_numbers">
                <div className="filter-number">
                    <input type="number" min={0} name="min" value={priceFfilter.min} onChange={handlerChange}/>
                </div>
                <div className="filter-number">
                    <input type="number" min={0} name="max"  value={priceFfilter.max} onChange={handlerChange}/>
                </div>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="wc100500" name="wc100500" onChange={handlerCheck}/>  
                
                <label htmlFor="wc100500">1 кг</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="wc500-1000" name="wc100500" onChange={handlerCheck}/>
                <label htmlFor="wc500-1000">5-10 кг</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="wc1000-1500" name="wc100500" onChange={handlerCheck}/>
                <label htmlFor="wc1000-1500">10-50 кг</label>
            </div>
            <div className="checkbox-container">
                <input type="radio" id="wc0" name="wc100500" onChange={handlerCheck}/>
                <label htmlFor="wc0">Другое</label>
            </div>
        </div>
    </>
}