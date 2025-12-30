import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Button, Form, Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './ContactUsPage.module.scss'

export const ContactUsPage = () => {
  return (
    <div className={cls.contactus}>
      <div className="container">
        <Navbar />

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
                <Text className={cls.bulkorders_logo} as='h2' fz={36} fw={400}>Форма обратной связи</Text>
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
                    <input className={cls.input} />
                  </div>
                </div>
                <div className={cls.input_block2}>
                  <span className={cls.input_name}>Сообщение*</span>
                  <div className={cls.label_input2}>
                    <textarea className={cls.input2} typeof='bulkorders'></textarea>
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
          <iframe className={cls.map} src="https://www.google.com/maps/place/Pochtovaya+Ulitsa,+27,+Nazran,+Respublika+Ingushetiya,+Russia,+386102/@43.2120289,44.7791595,18.46z/data=!4m5!3m4!1s0x40506e84eb45fc77:0xf0954ef8ce77d4e7!8m2!3d43.2120148!4d44.779331?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"></iframe>
        </div>

        <Footer />
      </div>
    </div>
  )
}
