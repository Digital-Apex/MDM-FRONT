import { Category } from '../models/Category.model'
import CategoryCard from './CategoryCard'

interface Props {
    categories: Category[]
}

export default function CategoryList({categories}:Props) {
    return (
        <div className="col-md-6 scroll-card p-0">
            <div className="row row-cols-1 rows-cols-lg-2">
                {categories.map(category => {
                    return <CategoryCard category={category}/>
                })}
            </div>
        </div>
    )
}
