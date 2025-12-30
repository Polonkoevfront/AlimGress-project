import { Button, Text } from '../../../shared'
import { Footer, Navbar } from '../../../widgets'
import cls from './MyAccountPage.module.scss'

export const MyAccountPage = () => {
  return (
    <div className={cls.myaccount}>
      <div className="container">
        <Navbar />

        <div className={cls.myaccount_body}>
          <Text className={cls.myaccount_logo} as='h1' fz={44} fw={400}>Мой аккаунт</Text>

          <div className={cls.password_block}>
            <span className={cls.password_txt}>Забыли свой пароль? Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по <span style={{ display: "block", marginTop: "3px" }}>электронной почте.</span></span>

            <div className={cls.input_block}>
              <span className={cls.input_name}>Имя пользователя или Email *</span>
              <div className={cls.label_input}>
                <input className={cls.input} type="username" />
              </div>
            </div>

            <Button size={131} className={cls.btn}>Сброс пароля</Button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

