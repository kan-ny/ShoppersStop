import { DirectoryItemContainer, BackgroundImage, Body } from './category.styles.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({title, imageUrl, route}) => {
    
    const navigate  = useNavigate();
    const handleShop = () => navigate(route);
    
    return(
        <DirectoryItemContainer onClick={handleShop} >
        <BackgroundImage imageUrl={imageUrl} ></BackgroundImage>
        <Body>
            <h4>{title}</h4>
            <p>Shop Now</p>
        </Body>
        </DirectoryItemContainer>
    );
}

export default CategoryItem;