import cls from './discover.module.scss';

const Discover = () => {

    const cards = [
        {
            title: 'FORM',
            content: 'We combine research, analytics, and design to turn innovation into measurable results.',
            link: 'https://youtube.com'
        },
        {
            title: 'CORE',
            content: 'We combine research, analytics, and design to turn innovation into measurable results.',
            link: 'https://youtube.com'
        },
        {
            title: 'FLOW',
            content: 'We combine research, analytics, and design to turn innovation into measurable results.',
            link: 'https://youtube.com'
        },
    ]

    return (
        <article className={cls.discover} id='projects'>
            <h3 className={cls.header}>Discover More
            Possibilities</h3>
            <p className={cls.content}>Explore our other service areas to find the solutions you need</p>
            <ul className={cls.cards}>
                {
                    cards.map(el => 
                        <li className={cls.card}>
                            <a href={el.link} className={cls.cardLink}>
                                <div className={cls.cardUpContainer}>
                                    <span className={cls.cardHeader}>{el.title}</span>
                                        <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5889 0.576571V47.423C17.5889 47.7415 17.3309 47.9995 17.0123 47.9995H7.78718C7.46863 47.9995 7.21061 47.7415 7.21061 47.423V10.9419C7.21061 10.6233 6.95116 10.3639 6.6326 10.3653L0.582928 10.3768C0.107257 10.3768 -0.165176 9.83486 0.120227 9.45432L7.0362 0.230628C7.14575 0.0850442 7.31584 0 7.49746 0H17.0109C17.3294 0 17.5875 0.258016 17.5875 0.576571H17.5889Z" fill="#222222"/>
                                        <path d="M39.0655 0.576571V47.423C39.0655 47.7415 38.8074 47.9995 38.4889 47.9995H29.2637C28.9452 47.9995 28.6872 47.7415 28.6872 47.423V10.9419C28.6872 10.6233 28.4277 10.3639 28.1092 10.3653L22.0595 10.3768C21.5838 10.3768 21.3114 9.83486 21.5968 9.45432L28.5128 0.230628C28.6223 0.0850442 28.7924 0 28.974 0H38.4874C38.806 0 39.064 0.258016 39.064 0.576571H39.0655Z" fill="#222222"/>
                                        <path d="M5.19058 12.9721V47.4193C5.19058 47.9743 4.48428 48.2092 4.15131 47.7638L0.115312 42.3599C0.0403582 42.2604 0 42.1394 0 42.0154V12.9721C0 12.6535 0.258016 12.3955 0.576571 12.3955H4.61257C4.93112 12.3955 5.18914 12.6535 5.18914 12.9721H5.19058Z" fill="#222222"/>
                                        <path d="M26.6695 12.973L26.6652 47.4217C26.6652 47.9767 25.9589 48.2116 25.6259 47.7677L21.5899 42.3652C21.515 42.2657 21.4746 42.1447 21.4746 42.0192L21.4789 12.9716C21.4789 12.653 21.7369 12.395 22.0555 12.395H26.0915C26.4101 12.395 26.6681 12.653 26.6681 12.9716L26.6695 12.973Z" fill="#222222"/>
                                    </svg>
                                </div>
                                <p className={cls.cardContent}>{el.content}</p>

                                <div className={cls.iconContainer}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.353516 0.353516L39.3535 39.3535M39.3535 39.3535V0.353516M39.3535 39.3535H0.353516" stroke="black"/>
                                    </svg>
                                </div>
                            </a>
                            
                        </li>
                    )
                }
            </ul>
        </article>
    )
}

export { Discover }