import { useState } from 'react'
import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Form, Text } from '../../../shared'
import { Button } from '../../../shared/ui/Button/Button'
import { Footer, Navbar } from '../../../widgets'
import cls from './LoginPage.module.scss'

export const LoginPage = () => {
  const [blockActive, setBlockActive] = useState(false);

  return (
    <div className={cls.account}>
      <div className='container'>
        <Navbar />

        <div className={cls.my_account_block}>
          <div className={cls.block_account}>
            <div className={cls.auth_block}>

              <Text className={cls.login_logo} as='h3' fz={36} fw={400}>Вход</Text>

              <Form className={cls.auth_form}>

                <Text className={cls.name_email_txt} as='h6' fz={18} fw={400}>Имя пользователя или Email *</Text>
                <div className={cls.input_body}>
                  <input className={cls.input} type='username' name='username' />
                </div>
                <Text className={cls.name_email_txt} as='h6' fz={18} fw={400}>Пароль *</Text>
                <div className={cls.input_body2}>
                  <input className={cls.input} type='password' name='password' />
                </div>

                <div className={cls.form_footer_block}>
                  <div className={cls.button_block}>
                    <Button className={cls.btn} type="submit" size={131}>Войти</Button>
                    <div onClick={() => setBlockActive(!blockActive)} className={cls.block_figure}>
                      {blockActive ? <svg style={{ position: "absolute", left: "578px", top: "397px", width: "18px", cursor: "pointer" }} xmlns='http://www.w3.org/2000/svg'>
                        <path d='M9 16.2L6.1 13l-1.4 1.4L9 19 19 10l-1.4-1.4L9 16.2z'></path>
                      </svg> : ''}
                    </div>
                    <p className={cls.remember_me}>Запомнить меня</p>
                  </div>

                  <AppLink className={cls.recovery_passoword} to="/my:account">
                    <p className={cls.recovery_passoword}>Забыли свой пароль?</p>
                  </AppLink>
                </div>
              </Form>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

