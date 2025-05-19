import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Button, Form, Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './ContactUsPage.module.scss'

export const ContactUsPage = () => {
  return (
    <div className={cls.contactus}>
      <div className="container">
        <Navbar/>

        <div>
            <Text className={cls.contactus_logo} as='h1' fz={44} fw={400}>Контакты</Text>

            <Form className={cls.contactus_form}>
                <span className={cls.contactus_form_logo}>Контакты – если у вас возникли вопросы, свяжитесь с нами любым</span>
                <span className={cls.contactus_form_logo2}>удобным для вас способом.</span>

                <div className={cls.adress_block}>
                    <span className={cls.adress_txt}>
                        <strong className={cls.text_item}>
                            🏠Адрес:
                        </strong>      
                        г. Москва, Чермянский пр‑д, д. 7, офис №211              
                    </span>
                    <span className={cls.adress_txt}>
                        <strong className={cls.text_item}>
                            📞Телефон:
                        </strong>
                        +7 911 481 57 47
                    </span>
                </div>
                <div className={cls.adress_block2}>
                    <span className={cls.adress_txt}>
                        <strong>
                            🏠Торговая точка:
                        </strong>      
                        г. Мытищи, ул. Коммунистическая, 25Гк5              
                    </span>
                    <span className={cls.adress_txt}>
                        <strong>
                            📞Телефон:
                        </strong>
                        +7 925 963 53 93
                    </span>
                </div>
                <div className={cls.adress_block3}>
                    <span className={cls.adress_txt}>
                        <strong>
                            ✉️Эл.почта:
                        </strong>   
                        <AppLink className={cls.email_link} to="">
                            <span className={cls.email_link}>
                        sales@alimgressceramica.ru   
                            </span>
                        </AppLink> 
                    </span>
                    <span className={cls.adress_txt}>
                        <strong>
                            🕘 График работы:
                        </strong>
                        Пн–Пт 09:30–18:00
                    </span>
                </div>

            <div className={cls.form_block}>
                <Form className={cls.bulkorders_form}>
                    <Text as='h2' fz={36} fw={400}>Форма обратной связи</Text>
              <div className={cls.input_block}>
                <span className={cls.input_name}>ФИО*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="username" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Эл.почта*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="email" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Тема*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="number" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Сообщение*</span>
                <div className={cls.label_input2}>
                  <input className={cls.input2} type="bulkorders" />
                </div>
              </div>

              <div>
                <div className={cls.data_block}>
                  <img src="" alt="" />
                  <span className={cls.data_block_txt}>Согласие на обработку персональных данных*</span>
                </div>

                <AppLink className={cls.link} to="">
                  <p className={cls.link}>Политика по персональным данным</p>
                </AppLink>

                <p className={cls.required_field}>*Обязательные поля.</p>
                <Button className={cls.btn} size={83}>Отправить</Button>
              </div>
            </Form>
            </div>
            </Form>
        </div>
        
        <div className={cls.block_map}>
            <Text className={cls.map_txt} as='h3' fz={36} fw={400}>Адрес на карте</Text>
        <iframe className={cls.map} src="https://www.google.com/maps/embed?pb
        =!1m18!1m12!1m3!1d4291.745453141256!2d
        77.39914006293347!3d28.504393188935435!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
        !3m3!1m2!1s0x390ce626851f7009%3A0x62118
        5133cfd1ad1!2sGeeksforGeeks%20%7C%20
        Coding%20Classes%20%7C%20Noida!5e0!3m2!1
        sen!2sin!4v1725395799894!5m2!1sen!2sin"></iframe>
        </div>

        <Footer/>
      </div>
    </div>
  )
}
