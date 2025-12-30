import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Button, Text } from '../../shared'
import { Form } from '../../shared/ui/Form/Form'
import { Footer, Navbar } from '../../widgets'
import cls from './BulkOrdersPage.module.scss'

export const BulkOrdersPage = () => {
  return (
    <>
      <div className={cls.bulkorders}>
        <div className='container'>
          <Navbar />

          <div>
            <Text className={cls.bulkorders_logo} as='h1' fz={44} fw={400}>Оптовые заказы</Text>

            <div className={cls.text_block}>
              <div className={cls.text_miniblock}>
                <span className={cls.text_logo}>Оптовые заказы керамогранита Maimoon Ceramica от производителя.</span>
                <div style={{ marginTop: "20px" }}>
                  <p className={cls.text_item}>Наша компания предлагает специальные условия на оптовые заказы</p>
                  <p className={cls.text_item}><AppLink className={cls.text_item} to="">керамогранита</AppLink> под жилые и коммерческие объекты недвижимости.</p>
                  <p className={cls.text_item}>Cпециалисты Maimoon Ceramica осуществляют техническое</p>
                  <p className={cls.text_item}>сопровождение и выезд на объекты.</p>
                </div>
              </div>
            </div>
            <div className={cls.text_miniblock2}>
              <p className={cls.text_item}>Условия и объектные скидки обсуждаются индивидуально, пожалуйста</p>
              <p className={cls.text_item}>укажите подробную информацию в форме ниже. Наш специалист</p>
              <p className={cls.text_item}>свяжется с вами для обсуждения подробностей.</p>
            </div>

            <Form className={cls.bulkorders_form}>
              <div className={cls.input_block}>
                <span className={cls.input_name}>Имя*</span>
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
                <span className={cls.input_name}>Телефон*</span>
                <div className={cls.label_input}>
                  <input className={cls.input} type="number" />
                </div>
              </div>
              <div className={cls.input_block2}>
                <span className={cls.input_name}>Подробности по объёмам заказа и объекту*</span>
                <div className={cls.label_input2}>
                  {/* <input className={cls.input2} type="bulkorders" /> */}
                  <textarea className={cls.input2} name="bulkorders" id=""></textarea>
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

          <Footer />
        </div>
      </div>
    </>
  )
}

