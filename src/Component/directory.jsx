
import CategoryItem from './category-item/CategoryItem';
import  { CategoriesContainer }  from './directory.styles.jsx';

const  menu = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      "routes": "shop/hats"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "routes": "shop/jackets"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "routes": "shop/sneakers"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "routes": "shop/womens"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "routes": "shop/mens"
    }
  ];
const Directive = () => {

    return(
        <CategoriesContainer >
            {menu.map(ele => {
                return (
                    <CategoryItem key={ele.id} title={ele.title} route={ele.routes} imageUrl={ele.imageUrl} />
                )
            })}
        </CategoriesContainer>
    )

}

export default Directive;