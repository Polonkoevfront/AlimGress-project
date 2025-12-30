import { Text } from '../../../shared'
import cls from './Footer.module.scss'
import AlimGress_Logo from '../../../shared/assets/png/AlimGress_Logo.png'
import { AppLink } from '../../../provider/ui/AppLink/AppLink'

export const Footer = () => {
  return (
    <>
      <div className={cls.made_india}>
        <hr className={cls.line} />
        <img className={cls.india_flag} src="https://s.w.org/images/core/emoji/15.1.0/svg/1f1ee-1f1f3.svg" alt="" />
        <p className={cls.text}>Сделано в&nbsp;Индии</p>
      </div>
      <div className={cls.footer}>
        <div className={cls.footer_first_block}>
          <img className={cls.alimgress_logo} src={AlimGress_Logo} alt="" />
          <Text className={cls.alimgress_logo_txt}>AlimGress Ceramica</Text>
          <div className={cls.alimgress_desc_block}>
            <span className={cls.alimgress_desc}>Официальный сайт магазина</span>
            <span className={cls.alimgress_desc}>керамогранита AlimGress Ceramica</span>
          </div>
          <div className={cls.alimgress_desc_block2}>
            <span className={cls.alimgress_desc2}>Сайт не является публичной офертой.</span>
            <span className={cls.alimgress_desc2}>Все права защищены.</span>
          </div>
          <p className={cls.date}>© 2025</p>
        </div>

        <div className={cls.footer_second_block}>
          <ul className={cls.about_us_block}>
            <li className={cls.about_item}>Про нас</li>
            <li className={cls.about_item2}>
              <AppLink className={cls.about_item2} to="/">О компании</AppLink>
            </li>
            <li className={cls.about_item2}>
              <AppLink className={cls.about_item2} to="/">Сотрудничество</AppLink>
            </li>
          </ul>
          <ul className={cls.politics}>
            <li className={cls.about_item}>Политика конфиденциальности</li>
            <li className={cls.about_item2}>
              <AppLink className={cls.about_item2} to="/">
                Политика обработки персональных данных
              </AppLink>
            </li>
            <li className={cls.about_item2}>
              <AppLink className={cls.about_item2} to="/">
                Условия использования Cookie
              </AppLink>
            </li>
            <li className={cls.about_item2}>
              <AppLink className={cls.about_item2} to="/">
                Свяжитесь с нами
              </AppLink>
            </li>
          </ul>
          <ul className={cls.networks_block}>
            <li className={cls.about_item}>Соц. сети</li>
            <li className={cls.about_item2}>
              <a className={cls.about_item2} href="">
                Telegram
              </a>
            </li>
            <li className={cls.about_item2}>
              <a className={cls.about_item2} href="">ВКонтакте</a>
            </li>
          </ul>
        </div>

        {/* <Form>
        <iframe src=""></iframe>
      </Form> */}

        <div className={cls.footer_latest_block}>
          <span className={cls.desc_item}>ООО «ОЛИМП ЭЛЬ»</span>
          <span className={cls.desc_item2}>ОГРН: 5167746258004</span>
          <span className={cls.desc_item2}>Юр. адрес: 127282, г. Москва, Муниципальный округ Северное Медведково,</span>
          <span className={cls.desc_item2}>Чермянский проезд, д. 7, помещение 1/2</span>
        </div>
      </div>
    </>
  )
}

