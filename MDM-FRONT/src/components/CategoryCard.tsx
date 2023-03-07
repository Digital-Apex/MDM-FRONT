import { Category } from '../models/Category.model'

interface Props {
    category:Category
}


export default function CategoryCard({category}:Props) {
    return (
        <div className="col category-budget overflow-hidden">
            <div className="row justify-content-center align-items-center p-2 ps-3">
                <div className="col-md-2 p-0 align-self-center ">
                    <div className="card-icon">
                        <div className='icon-wrapper'>
                            <i className='icon fa fa-bars'></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 align-self-center">
                    <span className="text-center w-100 text-white text-long d-block icon-category">{category.name}</span>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:category.porcent}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
