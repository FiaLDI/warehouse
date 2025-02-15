
import React, { useState } from 'react';
import { sortView } from '../../../features/products/types';
import { useAppDispatch } from '../../../app/hooks';
import { setSort } from '../../../features/products/productSlice';

export const SortByFilter = () => {

    const dispatch = useAppDispatch()
    const [sortBy, setSortBy] = useState(
        {
            Popular: true,
            Cheap: false,
            Expensive: false,
            Rating: false,
            Reviews: false,
            New: false,
            Sale: false
        }
    )
    const [isOpen, setIsOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState<string>("Популярные")

    const openerHandler = (key: keyof typeof sortBy) => {
        const updatedSortBy = Object.keys(sortBy).reduce((acc, key) => {
            
            acc[key as keyof typeof sortBy] = false; // Устанавливаем все значения в false
            return acc;
        }, {} as typeof sortBy);
        updatedSortBy[key] = true;
        setSortBy(updatedSortBy);
        setCurrentSort(translateRu[key])
        dispatch(setSort(key));
    }

    const handleBlur = () => {
        // Используем setTimeout, чтобы дать возможность onClick сработать
        setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    const translateRu = {
        Popular: "Популярные",
        Cheap: "Сначала дешёвые",
        Expensive: "Сначала дорогие",
        Rating: "Высокий рейтинг",
        Reviews: "Много отзывов",
        New: "Новинки",
        Sale: "Сниженная цена"
    }

    return (
        <>
                <div className="sortby-filter-core">
                    <input 
                        type="text" 
                        className='input-form--core input-sortby' 
                        value={currentSort} 
                        readOnly 
                        onFocus={() =>setIsOpen(true)}
                        onBlur={handleBlur}
                        />
                    <div className={isOpen ? "sortby-opener" : "hide"}>
                        <div className="" onClick={() => openerHandler('Popular')}>Популярные</div>
                        <div className="" onClick={() => openerHandler('Cheap')}>Сначала дешёвые</div>
                        <div className="" onClick={() => openerHandler('Expensive')}>Сначала дорогие</div>
                        <div className="" onClick={() => openerHandler('Rating')}>Высокий рейтинг</div>
                        <div className="" onClick={() => openerHandler('Reviews')}>Много отзывов</div>
                        <div className='' onClick={() => openerHandler('New')}>Новинки</div>
                        <div className="" onClick={() => openerHandler('Sale')}>Сниженная цена</div>
                    </div>
                </div>
                
        </>
    )
}