import cls from './intended.module.scss';

const Indended = () => {

    const cards = [
        {
            title: 'Early-stage startups shaping their product',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        },
        {
            title: 'Growing mid-size businesses preparing to scale',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        },
        {
            title: 'Large companies adopting new technologies',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        },
        {
            title: 'Product teams building digital solutions',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        },
        {
            title: 'Innovation and R&D departments',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        },
        {
            title: 'For anyone seeking clarity in decision-making',
            content: 'When it’s crucial to validate the idea, understand the market and define a clear direction.'
        }
    ]

    return (
        <div className={cls.indended} id="contact">
            <h3 className={cls.header}>Intended For</h3>
            <p className={cls.content}>For teams that rely on data-driven decisions and strategic clarity.</p>

            <ul className={cls.cards}>
                {cards.map((el, index) => 
                    <li className={cls.card}>
                        <span className={cls.cardNumber}>0{index+1}</span>
                        <span className={cls.cardHeader}>{el.title}</span>
                        <p className={cls.cardBody}>{el.content}</p>
                    </li>
                )}
            </ul>
            <div className={cls.contact}>
                <a className={cls.link} href='#contacts'>Contact us</a>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4668 1.46655L42.5335 42.5332M42.5335 42.5332V1.46655M42.5335 42.5332H1.4668" stroke="black"/>
                </svg>
            </div>
            
        </div>
    )
}

export { Indended }