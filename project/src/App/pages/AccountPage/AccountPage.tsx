import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Text } from '../../shared'
import { Button } from '../../shared/ui/Button/Button'
import { Footer, Navbar } from '../../widgets'
import cls from './AccountPage.module.scss'

export const AccountPage = () => {
  return (
    <div className={cls.account}>
      <div className='container'>
            <Navbar/>

             <Text className={cls.account_logo_txt} as='h1' fz={44} fw={400}>Мой аккаунт</Text>
            <div className={cls.my_account_block}>
                <div className={cls.block_account}>
                <div className={cls.auth_block}>
                    <Text as='h3' fz={36} fw={400}>Вход</Text>
                    <div className={cls.auth_form}>
                        <Text className={cls.name_email_txt} as='h6' fz={18} fw={400}>Имя пользователя или Email *</Text>
                        <div className={cls.input_body}>
                          <input className={cls.input} type='username&email'/>
                        </div>
                        <Text className={cls.name_email_txt} as='h6' fz={18} fw={400}>Пароль *</Text>
                        <div className={cls.input_body2}>
                          <input className={cls.input} type='password'/>
                        </div>

                        <div className={cls.form_footer_block}>
                          <div className={cls.button_block}>
                            <Button size={42}>Войти</Button>
                            <img src="" alt="" />
                            <p className={cls.remember_me}>Запомнить меня</p>
                          </div>

                          <AppLink className={cls.recovery_passoword} to="">
                            <p className={cls.recovery_passoword}>Забыли свой пароль?</p>
                          </AppLink>
                        </div>
                    </div>
            </div>
                <div className={cls.register_block}>
                    <Text as='h3' fz={36} fw={400}>Регистрация</Text>
                    <div className={cls.register_form}>
                      <Text className={cls.name_email_txt2} as='h6' fz={18} fw={400}>Email *</Text>
                       <div className={cls.input_body3}>
                          <input className={cls.input2} type='email'/>
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
                              упрощения вашего дальнейшего взаимодействия с
                            </span>
                            <span className={cls.item_txt2}> 
                              сайтом, управления доступом к вашему аккаунту и других целей, описанных в документе <AppLink className={cls.item_txt3} to="">
                                <span className={cls.item_txt3}>политика конфиденциальности.</span>
                              </AppLink>
                            </span>
                            </div>

                            <Button className={cls.btn} size={91}>Регистрация</Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <Footer/>
      </div>
    </div>
  )
}

