import React from 'react';
import { SortByFilter } from './Filter/SortByFilter';

export const TopFilter = () => {

    return (
        <>
            <div className="top-filter">
                <SortByFilter />
                <div className="search">
                    <input type="text" className='input-form--core input-sortby input-search' placeholder='Поиск продуктов'/>
                </div>
                <div className="filter-hv">
                    <span className='hv'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill="#000"  d="M3 5.174C3 3.974 3.973 3 5.174 3h13.652C20.026 3 21 3.973 21 5.174v3.55c0 1.2-.973 2.174-2.174 2.174H5.174C3.974 10.898 3 9.924 3 8.724v-3.55Zm15.927 3.65V5.074H5.073v3.752h13.854ZM3 15.276c0-1.2.973-2.174 2.174-2.174h13.652c1.2 0 2.174.974 2.174 2.174v3.55c0 1.2-.973 2.174-2.174 2.174H5.174C3.974 21 3 20.027 3 18.826v-3.55Zm15.927 3.651v-3.752H5.073v3.752h13.854Z" fillRule="evenodd"></path></svg></span>
                    <span className='hv'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"><path fill="#000"  d="M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0h4v4H5V5ZM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm2 0h4v4H5v-4ZM15 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4Zm4 2h-4v4h4V5ZM13 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Zm2 0h4v4h-4v-4Z" fillRule="evenodd"></path></svg></span>
                
                </div>
            </div>
        </>
    )
}