import React from "react";
import { useAllTypeQuery } from "../../services/api";
import { useNavigate } from "react-router-dom";


export const TypeProduct: React.FC = () => {
    const {data: types} = useAllTypeQuery({});
    const navigator = useNavigate();

    return <>
        <div className="producttype-main">
            <div className="producttype-items">
                {types && types.message && types.message.length > 0 ? types.message.map((val:any) => (
                    <div key={val.id_type_product} className="producttype-item" onClick={() => navigator(`/catalog/${String(val.typeproduct_name).toLocaleLowerCase()}`)}>
                        <div className="producttype-item--image">
                            <img src={`http://localhost:5000/api/files/img/typeproduct/${val.id_type_product}.jpg`} alt="" />
                            <div className="producttype-item--name">
                                {val.typeproduct_name} 
                            </div>
                            <div className="producttype-item--description">
                                {val.typeproduct_description}
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    </>;
};
