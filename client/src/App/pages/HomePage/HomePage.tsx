import { memo } from 'react'
import { Footer, Navbar } from '../../widgets'
import cls from './HomePage.module.scss'
import { Button, Text } from '../../shared'

const alimgressCeramicaInfo = [
  {
    image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/barbell-duotone.svg", title: "Прочность и долговечность", desc: "Керамогранит обладает высокой", desc2: "устойчивостью к износу,", desc3: "механическим повреждениям,", desc4: "воздействию влаги", desc5: "и температурным колебаниям."
  },
  {
    image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/leaf-duotone.svg", title: "Экологичность", desc: "Керамогранит производится", desc2: "из натуральных материалов,", desc3: "не содержит вредных веществ", desc4: "и абсолютно безопасен", desc5: "для здоровья человека."
  },
  {
    image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/kanban-duotone.svg", title: "Широкий ассортимент", desc: "Компания предлагает", desc2: "керамогранит с различными", desc3: "цветовыми решениями, фактурами", desc4: " и размерами, что позволяет", desc5: " подобрать идеальный вариант", desc6: "для любого интерьера."
  },
  {
    image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/hand-heart-duotone.svg", title: "Легкость в уходе", desc: "Поверхность керамогранита не", desc2: "впитывает грязь и влагу,", desc3: "благодаря чему его очень легко", desc4: "очистить от любых загрязнений.",
  },
  {
    image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/fire-duotone.svg", title: "Пожаробезопасность", desc: "Керамогранит является", desc2: "негорючим материалом,", desc3: "что делает его идеальным", desc4: "решением для отделки помещений", desc5: "с высокими требованиями", desc6: "к пожарной безопасности."
  },
]

export const HomePage = memo(() => {
  return (
    <div className={cls.home}>
      <div className="container">
            <Navbar/>

              <div className={cls.purchase_block}>
                <Text className={cls.home_logo_txt} as='h3' fz={34}>Премиальное качество <span style={{display: "block"}}>и оптимальная цена</span></Text>

                <div className={cls.desc_block}>
                  <span className={cls.desc_txt}>Более 250 дизайнов керамогранита, различные форматы:</span>
                  <span className={cls.desc_txt}>от 600×600 до 1200×1800. Произведено в Индии <img className={cls.flag} src="https://s.w.org/images/core/emoji/15.1.0/svg/1f1ee-1f1f3.svg" alt="" /></span>
                  <Button size={201} className={cls.btn}>Приступить к покупкам</Button>
                </div>
              </div>
              
              <div className={cls.alimgress_block}>
                <div className={cls.alimgress_video_block}>
                  <Text className={cls.alimgress_logo_txt} as='h3' fz={38} fw={400}>Maimoon Ceramica <span style={{display: "block"}}>на MosBuild 2025</span></Text>

                  <video className={cls.alimgress_video} controls poster='https://maimoonceramica.ru/wp-content/uploads/2025/04/maimoon-ceramica-mosbuild.jpg' src="https://maimoonceramica.ru/wp-content/uploads/2025/04/maimoon-ceramica-mosbuild.mp4"></video>
                  <p className={cls.alimgress_desc}>Maimoon Ceramica на MosBuild 2025</p>
                </div>

                <div className={cls.advantages}>
                  <Text className={cls.advantages_logo_txt} as='h3' fz={38} fw={400}>Преимущества керамогранита <span style={{display: "block"}}>Maimoon Ceramica</span></Text>

                 <div className={cls.block_cards}>
                   {
                    alimgressCeramicaInfo.map((item, index) => (
                      <article key={index} className={cls.card_item}>
                        <img className={cls.card_img} src={item.image} alt="" />
                        <span className={cls.card_logo_txt}>{item.title}</span>
                        <div className={cls.card_desc_block}>
                          <p className={cls.card_desc_item}>{item.desc}</p>
                          <p className={cls.card_desc_item}>{item.desc2}</p>
                          <p className={cls.card_desc_item}>{item.desc3}</p>
                          <p className={cls.card_desc_item}>{item.desc4}</p>
                          <p className={cls.card_desc_item}>{item.desc5}</p>
                          <p className={cls.card_desc_item}>{item.desc6}</p>
                        </div>
                      </article>
                    ))
                  }
                 </div>
                </div>
              </div>

              <Footer/>
      </div>
    </div>
  )
})

