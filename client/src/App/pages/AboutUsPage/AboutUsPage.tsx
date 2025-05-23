import { Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './AboutUsPage.module.scss'

export const AboutUsPage = () => {
  return (
    <div className={cls.aboutus}>
        <div className='container'>
            <Navbar/>

            <div className={cls.about_body}>
                <Text className={cls.about_logo} as='h1' fz={44} fw={400}>О нас</Text>

                <div className={cls.about_desc}>
                    <span className={cls.desc_item}>Компания «ОЛИМП ЭЛЬ» является производителем керамогранита</span>
                    <span className={cls.desc_item}>премиум класса из Индии под собственным брендом Maimoon Ceramica</span>
                    <span className={cls.desc_item}>Европейский стандарт качества.</span>

                    <video className={cls.video_ceramics} controls poster="https://maimoonceramica.ru/wp-content/uploads/2024/11/maimoon-ceramica-video-splash.jpg" src="https://maimoonceramica.ru/wp-content/uploads/2024/11/maimoon-ceramica-video.mp4">
                    </video>
                    <p className={cls.about_ceramics}>AlimGress Ceramica</p>
                </div>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

