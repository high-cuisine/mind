import cls from './header.module.scss';
import logo from '../../assets/logo.svg'
import { useOpenMenu } from './openMenu';
import { useEffect, useRef } from 'react';

const Header = () => {
    
    const modalRef = useRef(null);
    const burgerRef = useRef(null);
    const { handleModal } = useOpenMenu(modalRef, burgerRef, cls.active);

    return (
        <header className={cls.header}>
            <a href="#about" className={`${cls.item} ${cls.secondary}`}>About us</a>
            <a href="#services" className={`${cls.item} ${cls.secondary}`}>Servises</a>
            <a className={`${cls.item} ${cls.secondary}`}>
                <img src={logo} />
            </a>
            <a href="#projects" className={`${cls.item} ${cls.secondary}`}>Projects</a>
            <a href="#contacts">
                <button className={cls.item}>Contact us</button>
            </a>

           
              <div className={cls.burger}
                ref={burgerRef}
                onClick={handleModal}
              >
                <div className={cls.line}></div>
                <div className={cls.line}></div>
                <div className={cls.line}></div>
              </div>  

              <div className={cls.modileMenu} ref={modalRef}>
                <a href="#about" className={`${cls.item} ${cls.secondary}`}>About us</a>
                <a href="#services" className={`${cls.item} ${cls.secondary}`}>Servises</a>
                <a className={`${cls.item} ${cls.secondary}`}>
                    <img src={logo} />
                </a>
                <a href="#projects" className={`${cls.item} ${cls.secondary}`}>Projects</a>
              </div>
           
        </header>
    )
}

export { Header }