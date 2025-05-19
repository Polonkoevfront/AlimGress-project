import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './CooperationPage.module.scss'

export const CooperationPage = () => {
  return (
    <div className={cls.cooperation}>
      <div className='container'>
        <Navbar/>

        <div className={cls.cooperation_body}>
            <Text as='h1' fz={44} fw={400}>Сотрудничество</Text>
            <span className={cls.cooperation_desc1}>Сотрудничество — предлагаем индивидуальные модели сотрудничества</span>
            <span className={cls.cooperation_desc2}>для дилеров, дизайнеров, архитекторов и строителей.</span>

            <div className={cls.direction_cooperation}>
                <Text as='h5' fz={18} fw={700}>Выберите одно из направление сотрудничества:</Text>

               <div className={cls.cooperation_block}>
                 <div>
                    <img className={cls.img} src="https://maimoonceramica.ru/wp-content/uploads/2025/01/dileram.webp" alt="" />
                    <AppLink className={cls.cooperation_link} to="/dealers:auth">
                    <span className={cls.cooperation_link}>Дилерам</span>
                    </AppLink>
                </div>
                <div>
                    <img className={cls.img2} src="https://maimoonceramica.ru/wp-content/uploads/2025/01/dizajneram-arhitektoram-stroitelyam.webp" alt="" />
                    <div className={cls.link_block}>
                      <AppLink className={cls.cooperation_link2} to="">
                    <span className={cls.cooperation_link2}>Дизайнерам, архитекторам 
                    <span className={cls.cooperation_link3}>и строителям</span>
                    </span>
                    </AppLink>
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

