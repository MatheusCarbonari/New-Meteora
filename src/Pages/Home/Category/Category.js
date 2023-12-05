import CardsCategory from '../../../Components/CardsCategory';
import style from './Category.module.css';
import categorias from '../../../Categorias.json';

const Categorys = () => {

    const listOfCategory = categorias;

    return (
        <section className={style.categoryContainer}>
            <h2 className={style.categorysTitle}>Busque por Categoria</h2>
            <div className={style.categoryContainerForCards}>
                {listOfCategory.map((category) => (
                    <CardsCategory
                        key={category.category}
                        category={category.category}
                        image={category.Image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Categorys;