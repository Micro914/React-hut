import {Fragment} from 'react';
import HeaderCardButton from './HeaderCardButton';
import pizzaImage from '../../assets/meal.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        //Importing only Fragment instead of React.Fragment
        <Fragment>
            <header className={classes.header}>
                <h1>React Hut</h1>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={pizzaImage} alt="A delicious pizza slice getting picked up" />
            </div>
        </Fragment>
    )
}

export default Header
