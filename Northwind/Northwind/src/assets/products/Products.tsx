import { useEffect, useState } from 'react'
import './Products.css'
import Product from '../../models/product/product'
import productsService from '../../services/auth-aware/Products'

export default function Products(): JSX.Element {

    const [productList, setProductList] = useState<Product[]>([]) 

    useEffect(() => {
        productsService.getProducts()  
            .then(setProductList)      
            .catch(alert)             
    }, [])

return (
        <div className='Profile'>
            <ul> 
                {productList.map(({ imageUrl, name, price }) => (
                    <li key={name}>
                        <div>
                            <img src={imageUrl} alt={name} style={{ maxWidth: '100px', height: 'auto' }} />
                        </div>
                        <div>{name}</div>
                        <div>{price}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
