import cls from './explore.module.scss';

const Explore = () => {
    return (
        <div className={cls.explore} id="services">
            <h3 className={cls.header}>What we Explore</h3>
            <p className={cls.content}>From research and analytics to advanced AI engineering, we turn innovation into practical, scalable solutions.</p>

            <div className={cls.cards}>
                <a href='https://youtube.com' className={cls.card}>
                    <span className={cls.cardHeader}>R&D</span>
                    <p className={cls.cardContent}>
                        Research and technology that form the intellectual core of our product.
                        We combine research, analytics, and design to turn innovation into measurable results.
                        <br/>
                        <br/>
                        R&D helps companies make informed decisions and launch products built on data and market insights.</p>

                        <div className={cls.arrow}>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L58 58M58 58V2M58 58H2" stroke="url(#paint0_linear_260_335)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_260_335" x1="2" y1="2" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.2"/>
                                    <stop offset="1" stop-color="white"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                </a>

                <a href='https://youtube.com' className={cls.card}>
                    <span className={cls.cardHeader}>AI Engineering</span>
                    <p className={cls.cardContent}>
                    AI Engineering focuses on designing and implementing intelligent systems that drive business performance.
                    
                    <br/><br/>We develop, train, and integrate AI models to automate processes, enhance decision-making, and create scalable digital solutions.</p>

                    <div className={cls.arrow}>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L58 58M58 58V2M58 58H2" stroke="url(#paint0_linear_260_335)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_260_335" x1="2" y1="2" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.2"/>
                                    <stop offset="1" stop-color="white"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                    </div>
                </a>
            </div>
        </div>
    );
};

export { Explore }
