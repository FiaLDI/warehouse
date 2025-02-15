import React from 'react';

export const Products: React.FC<{product?: any}> = ({product}) => {
    
    
    return (
        <>
            <div className="product-items">
            {
                product ? (
                    product.message.map( (val: any, idx: number) => ( 
                    <div key={idx} className='product-item'>
                        <div className="product-item--image">
                            <img src={`http://localhost:5000/api/files/img/product/${val.id_product}.jpg`}></img>
                        </div>
                        <div className="product-item--name">
                            {val.product_name}
                        </div>
                        <div className="product-item--description">
                            {val.product_description}
                        </div>
                        <div className="product-item--price">
                            <div className="product-item--price__price">
                                {val.price_product}₽ / {val.count_product} {val.unit_of_measurement}
                            </div>
                            <div className="product-item--price-lc">
                                <div className="product-item--price__love">
                                    <button>
                                        <svg 
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path 
                                                d="M3.409 6.675C1.194 11.265 8.539 17.673 12.027 20c3.693-1.903 10.617-8.515 8.618-13.324-1.847-4.441-7.693-2.566-8.618 0-.616-2.538-6.462-4.47-8.618 0Z" 
                                                fill="none"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.918 20.587a2 2 0 0 1-1.98-.11C9.27 19.4 6.693 17.39 4.755 15.065c-.967-1.16-1.858-2.497-2.352-3.919-.502-1.449-.631-3.122.168-4.729 1.422-2.858 4.14-3.65 6.392-3.359a7.054 7.054 0 0 1 3.13 1.202 7.416 7.416 0 0 1 3.204-1.203c2.245-.282 4.963.52 6.224 3.463.69 1.61.558 3.27.075 4.73-.478 1.445-1.333 2.808-2.287 3.995-1.891 2.355-4.472 4.382-6.392 5.342Zm.585-14.853c-.71.415-1.256.973-1.48 1.574-.154-.618-.678-1.194-1.395-1.616C8.805 4.618 5.74 4.541 4.363 7.308c-1.968 3.957 4.56 9.484 7.66 11.49 3.284-1.641 9.438-7.343 7.661-11.49-1.196-2.79-4.277-2.69-6.181-1.574Z" 
                                                fill="#FFFFFF"/>
                                        </svg>
                                    
                                    </button>
                                </div>
                                <div className="product-item--price__cart">
                                    <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H4.38197C5.04482 2.25 5.65078 2.6245 5.94721 3.21738L5.27639 3.55279L5.94721 3.21738L6.46353 4.25H20.1384C21.0982 4.25 21.6999 5.28685 21.2237 6.12017L17.9391 11.8682C17.6275 12.4135 17.0477 12.75 16.4197 12.75H8.91567L7.59225 14.8675C7.48818 15.034 7.60789 15.25 7.80425 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H7.80425C6.42974 16.75 5.59176 15.2381 6.32025 14.0725L7.67159 11.9103L5.30898 5.295L4.60557 3.8882C4.56322 3.8035 4.47666 3.75 4.38197 3.75H3C2.58579 3.75 2.25 3.41421 2.25 3ZM7.06427 5.75L9.02855 11.25H16.4197C16.5094 11.25 16.5922 11.2019 16.6368 11.124L19.7076 5.75H7.06427ZM10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z" fill="#FFFFFF"></path></svg>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>))
                ) : null
            }
            </div>
        </>
    )
}