import { useEffect, useState } from 'react'
import './List.css'
import Card from '../card/Card'
import furnituresService from '../../../services/auth-aware/furniture'
import Furniture from '../../../models/furniture/Furniture'
// import productsService from '../../../services/products'

export default function List(): JSX.Element {

    const [ furnitures, setFurnitures ] = useState<Furniture[]>([])
    // const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        (async() => {
            try {
                const categories = await furnituresService.getFurniture()
                setFurnitures(categories)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return (
        <div className='List'>
            <div className="CardContainer">
                {furnitures.map(furniture => <Card key={furniture.id} furniture={furniture}/>)}
            </div>

        </div>
    )
}