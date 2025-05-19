import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Button, Form, Text } from '../../../shared'
import { Footer, Navbar } from '../../../widgets'
import cls from './DealersAuthPage.module.scss'

export const DealersAuthPage = () => {
  return (
    <div className={cls.dealersauth}>
      <div className="container">
        <Navbar/>

        <div className={cls.dealersauth_body}>
            <Text className={cls.dealersauth_logo} as='h1' fz={44} fw={400}>Дилерам</Text>
        <div>
            <div className={cls.dealersauth_desc}>
                <span className={cls.dealersauth_desc_item}>Дилерам — если вы хотите стать официальным дилером AlimGress,</span>
                <span className={cls.dealersauth_desc_item2}>пожалуйста, заполните форму ниже.</span>
            </div>

            <div className={cls.block_desc_advantage}>
                <span className={cls.our_advantage}>Наши преимущества:</span>

                <ul className={cls.advantage_list}>
                    <li className={cls.advantage_item}>Высокое и стабильное качество нашего продукта;</li>
                    <li className={cls.advantage_item}>Постоянное наличие продукции на складе, возможность отгрузки <span className={cls.advantage_item} style={{display: "block"}}><span style={{display: "block"}}>день подачи заявки;</span></span></li>
                    <li className={cls.advantage_item}>Защита проекта;</li>
                    <li className={cls.advantage_item}>Персональный менеджер, который проведет обучение ваших <span className={cls.advantage_item} style={{display: "block"}}>сотрудников по всем особенностям нашей продукции и всегда ответит</span> на любые ваши вопросы.</li>
                </ul>
            </div>
        </div>

        <Form className={cls.bulkorders_form}>
            <Text as='h2' fz={36} fw={400}>Заявка на сотрудничество</Text>
              <div className={cls.input_block}>
                <span className={cls.input_name}>ФИО*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="username" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Название компании*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="email" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Город*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="number" />
                </div>
              </div>
              <div className={cls.input_block}>
                <span className={cls.input_name}>Телефон*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="bulkorders" />
                </div>
              </div>
              <div className={cls.input_block}>
                <span className={cls.input_name}>Эл. почта*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="bulkorders" />
                </div>
              </div>
              <div className={cls.input_block}>
                <span className={cls.input_name}>Сайт</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="bulkorders" />
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

        <Footer/>
      </div>
    </div>
  )
}

