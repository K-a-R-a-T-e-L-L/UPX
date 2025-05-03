import { useMyContext } from '../Context/Context';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import style from './styles.module.scss';

const Layout = () => {

    const {state} = useMyContext();

    return (
        <>
            <div className={style.layout}>
                <Header/>
                {state ? <Navigation/> : null}
            </div>
        </>
    );
};

export default Layout;