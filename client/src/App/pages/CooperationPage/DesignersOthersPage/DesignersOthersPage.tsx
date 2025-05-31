import cls from './DesignersOthersPage.module.scss'
import { Footer, Navbar } from '../../../widgets'
import { Button, Form, Text } from '../../../shared'
import { AppLink } from '../../../provider/ui/AppLink/AppLink'

export const DesignersOthersPage = () => {

  return (
    <div className={cls.designersothers}>
      <div className="container">
        <Navbar/>

        <div className={cls.designersothers_body}>
          <Text className={cls.designersothers_logo_txt} as='h1' fz={44} fw={400}>Дизайнерам, архитекторам</Text>
          <Text className={cls.designersothers_logo_txt2} as='h1' fz={44} fw={400}>и строителям</Text>

          <div className={cls.designersothers_desc}>
            <span className={cls.desc_item}>Дизайнерам, архитекторам и строителям — если вы хотите стать</span>
            <span className={cls.desc_item}>официальным партнёром AlimGress, пожалуйста, заполните</span>
            <span className={cls.desc_item}>форму ниже.</span>
          </div>

          <div className={cls.block_advantage}>
            <span className={cls.advantage_desc}>Наши преимущества:</span>

            <ul className={cls.advantage_list_block}>
              <li className={cls.list_item}>Высокое и стабильное качество нашего продукта;</li>
              <li className={cls.list_item}>Постоянное наличие продукции на складе, возможность отгрузки в <span style={{display: "block"}}>день подачи заявки;</span></li>
              <li className={cls.list_item}>Защита проекта;</li>
              <li className={cls.list_item}>Размещение ваших работ у нас на сайте;</li>
              <li className={cls.list_item}>Индивидуальный прайс.</li>
            </ul>

            <span className={cls.work_txt}>Работая с нами, вы зарабатываете!</span>
          </div>

           <Form className={cls.designersothers_form}>
            <Text as='h2' fz={36} fw={400}>Заявка на сотрудничество</Text>
              <div className={cls.input_block}>
                <span className={cls.input_name}>ФИО*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="username" />
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

