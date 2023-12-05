import Categorys from './Category';
import Carrousel from './Carrousel';
import style from './Home.module.css';

const Home = () => {
    return (
        <main className={style.mainHomeContainer}>
            <section>
                <Carrousel />
                <Categorys />
            </section>
        </main>
    )
}

export default Home;