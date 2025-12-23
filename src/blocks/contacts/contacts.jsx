import cls from './contacts.module.scss';

const Contacts = () => {

    return (
        <div className={cls.contacts} id='contacts'>

            <div className={cls.blobs}>
                <div className={cls.blob}></div>
                <div className={cls.blob}></div>
                <div className={cls.blob}></div>
                <div className={cls.blob}></div>
            </div>

            <div className={cls.body}>
                <h3 className={cls.header}>Contacts</h3>
                <ul className={cls.list}>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                </ul>

                <ul className={cls.info}>
                    <li>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Contacts }