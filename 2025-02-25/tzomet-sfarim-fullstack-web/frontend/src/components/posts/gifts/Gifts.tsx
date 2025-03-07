import './Gifts.css'
import { ChangeEvent, useEffect, useState } from 'react'
import Present from '../present/present'
import categoriesService from '../../../services/auth-aware/Type'
import Type from '../../../models/type/Type'
import PresentModel from '../../../models/present/Present'
import giftsService from '../../../services/auth-aware/Gifts'

export default function Gifts(): JSX.Element {

    const [categories, setCategories] = useState<Type[]>([])
    const [presents, setPresents] = useState<PresentModel[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categoriesService.getAllTypes()
                setCategories(categories)
            } catch (e) {
                alert(e)
            }
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchPresents = async () => {
            try {
                if (selectedCategory === '') {
                    const allPresents = await giftsService.getAllGifts()
                    setPresents(allPresents)
                }
                 else {
                    const filteredPresents = await giftsService.getGifts(selectedCategory)
                    setPresents(filteredPresents)
                }
            } catch (e) {
                alert(e)
            }
        }

        fetchPresents()
    }, [selectedCategory]) 

    async function categoryChanged(event: ChangeEvent<HTMLSelectElement>) {
        const selectedCategoryId = event.target.value
        setSelectedCategory(selectedCategoryId) 
    }

    function removePresent(code: string) {
        setPresents(presents.filter(p => p.code !== code))
    }

    return (
        <div className='List'>
            <select className='selectCategories' value={selectedCategory} onChange={categoryChanged}>
                <option key='dis' disabled value=''>please select category...</option>
                <option key='all' value=''>All presents</option>
                {categories.map(({ code, type }) => (
                    <option key={type} value={code}>{type}</option>
                ))}
            </select>
            <div className='cards'>
                {presents.map(p => (
                    <Present key={p.code} present={p} removePresent={removePresent}/>
                ))}
            </div>
        </div>
    )
}
