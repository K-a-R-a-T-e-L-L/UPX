import style from './styles.module.scss';
import Logo from '/svg/logo.svg';
import GamesIcon from '/svg/games.svg';
import TournamentsIcon from '/svg/tournaments.svg';
import RanksIcon from '/svg/ranks.svg';
import CommentsIcon from '/svg/comments.svg';
import HelpIcon from '/svg/help.svg';
import BonusesIcon from '/svg/bonuses.svg';
import RegisrtIcon from '/svg/registr.svg';
import { useMyContext } from '../Context/Context';

const Header = () => {

    const {setState} = useMyContext();

    return (
        <>
            <header className={style.header}>
                <div className={style.header__box}>
                    <img className={style.box__logo} src={Logo} alt="logo" />
                </div>
                <div className={`${style.header__box} ${style.header__box_links}`}>
                    <a href="" className={style.box__link}>
                        <img src={GamesIcon} alt="games" className={style.link__icon} />
                        <span className={style.link__span}>игры</span>
                    </a>
                    <a href="" className={style.box__link}>
                        <img src={TournamentsIcon} alt="tournaments" className={style.link__icon} />
                        <span className={style.link__span}>турниры</span>
                    </a>
                    <a href="" className={style.box__link}>
                        <img src={RanksIcon} alt="ranks" className={style.link__icon} />
                        <span className={style.link__span}>ранги</span>
                    </a>
                    <a href="" className={style.box__link}>
                        <img src={CommentsIcon} alt="comments" className={style.link__icon} />
                        <span className={style.link__span}>отзывы</span>
                    </a>
                    <a href="" className={style.box__link}>
                        <img src={HelpIcon} alt="help" className={style.link__icon} />
                        <span className={style.link__span}>помощь</span>
                    </a>
                    <a href="" className={style.box__link}>
                        <img src={BonusesIcon} alt="bonuses" className={style.link__icon} />
                        <span className={`${style.link__span} ${style.link__span_bonuses}`}>бонусы</span>
                    </a>
                </div>
                <div className={`${style.header__box} ${style.header__box_info}`}>
                    <button className={`${style.box__circle} ${style.box__circle_ranks}`}></button>
                    <button className={`${style.box__circle} ${style.box__circle_cashback}`}></button>
                    <button className={`${style.box__circle} ${style.box__circle_vk}`}></button>
                    <button className={`${style.box__circle} ${style.box__circle_tg}`}></button>
                    <button className={`${style.box__circle} ${style.box__circle_inst}`}></button>
                    <div className={style.box__language_sound}>
                        <div className={style.language_sound__language}>
                            <div className={style.language__lang}>
                                <div className={style.lang__flag} style={{ backgroundImage: `url(/svg/russia.svg)` }}></div>
                                <div className={style.lang__text}>RU</div>
                            </div>
                            <span className={style.language__arrow}>⏷</span>
                        </div>
                        <button className={style.language_sound__sound}></button>
                    </div>
                </div>
                <div className={`${style.header__box} ${style.header__box_auth}`}>
                    <div className={style.box__buttons}>
                        <button className={style.buttons__login}>ВОЙТИ</button>
                        <button className={style.buttons__registr}>
                            <img src={RegisrtIcon} alt="Regisrt" className={style.regisrt__img} />
                            РЕГИСТРАЦИЯ
                        </button>
                    </div>
                </div>
                <div className={`${style.header__box} ${style.header__box_menu}`}>
                    <button onClick={() => setState(state => !state)}></button>
                </div>
            </header>
        </>
    );
};

export default Header;