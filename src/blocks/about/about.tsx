import React from "react"
import cls from './about.module.scss'

const About = () => {
    return (
        <article className={cls.about} id="about">
            <h2 className={cls.header}>Research and&nbsp;Innovation</h2>
            <p className={cls.content}>MIND is the company’s research and innovation center, where the foundations of future products and technologies are created.</p>

            <p className={cls.card}>Within this direction, we focus on analyzing, developing, and implementing intelligent solutions that ensure sustainable development and the digital transformation of the business.</p>
        </article>
    )   
}

export { About }