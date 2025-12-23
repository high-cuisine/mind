import cls from './banner.module.scss'
import headerSvg from '../../assets/MIND.svg'

import AnimatedLines from '../../components/lines/lines';
import cloudPurple from '../../assets/purpleCloud.svg'


const Banner = () => {

    return (
        <acticle className={cls.banner}>
            <div className={cls.container}>
                <img src={headerSvg} alt="header" className={cls.header}/>
                <p>Research & Innovation Section
                Creates ideas, concepts, and technologies of the future</p>

                {/* <img src={background} className={cls.background}></img> */}
                
                <div className={cls.background}>
                    <AnimatedLines />
                </div>
                <div className={cls.canvas}>
                    <div className={cls.blob}></div>
                    <div className={cls.blob}></div>
                    <div className={cls.blob}></div>
                    <div className={cls.blob}></div>
                    <div className={cls.blob}></div>
                </div>
            </div>
        </acticle>
    )
}

export { Banner }