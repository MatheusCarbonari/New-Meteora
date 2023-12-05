import style from './CardsCategory.module.css';

const CardsCategory = ({ category, image }) => {

    return (

        <div className={style.cardContainer}>
            <img src={image} />
            <p className={style.cardsText}>{category}</p>
        </div>


    )
}

export default CardsCategory;