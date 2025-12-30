import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Button, Form, Text } from '../../../shared'
import { Footer, Navbar } from '../../../widgets'
import cls from './RegisterPage.module.scss'

export const RegisterPage = () => {
    return (
        <div>
            <Navbar />

            <div className={cls.register_block}>
                <Text className={cls.register_logo} as='h3' fz={36} fw={400}>Регистрация</Text>

                <Form className={cls.register_form}>

                    <Text className={cls.input_name} as='h6' fz={18} fw={400}>Имя *</Text>
                    <div className={cls.input_body}>
                        <input className={cls.input} type='username' name='username' />
                    </div>

                    <Text className={cls.input_name} as='h6' fz={18} fw={400}>Пароль *</Text>
                    <div className={cls.input_body}>
                        <input className={cls.input} type='password' name='password' />
                    </div>

                    <Text className={cls.input_name} as='h6' fz={18} fw={400}>Эл. адрес *</Text>
                    <div className={cls.input_body}>
                        <input className={cls.input} type='email' name='email' />
                    </div>

                    <div className={cls.register_txt}>
                        <div>
                            <span className={cls.item_txt}>Ссылка для установки нового пароля будет</span>
                            <span className={cls.item_txt}>отправлена на ваш адрес электронной почты.</span>
                        </div>

                        <div className={cls.miniBlock2}>
                            <span className={cls.item_txt2}>
                                Ваши личные данные будут использоваться для
                            </span>
                            <span className={cls.item_txt2}>
                                упрощения вашего дальнейшего взаимодействия
                            </span>
                            <span className={cls.item_txt2}>
                                с сайтом, управления доступом к вашему аккаунту
                            </span>

                            <span className={cls.item_txt4}>
                                и других целей, описанных в документе
                            </span>

                            <AppLink className={cls.item_txt3} to="">
                                <span className={cls.item_txt3}>политика конфиденциальности.</span>
                            </AppLink>
                        </div>

                        <Button type='submit' className={cls.btn} size={135}>Регистрация</Button>

                        <AppLink className={cls.account_link} to="/login">Уже есть аккаунт?</AppLink>
                    </div>
                </Form>
            </div>
            <div style={{ marginTop: "1100px" }}>
                <Footer />
            </div>
        </div>
    )
}