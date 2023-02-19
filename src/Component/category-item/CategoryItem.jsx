import './category.scss';

const CategoryItem = ({title, imageUrl}) => {

    
    return(
        <div className="category-container">
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="category-body-container">
            <h4>{title}</h4>
            <p>Shop Now</p>
        </div>
        </div>
    );
}

export default CategoryItem;