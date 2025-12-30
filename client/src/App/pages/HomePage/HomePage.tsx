import { memo } from 'react';
import { Footer, Navbar } from '../../widgets';
import cls from './HomePage.module.scss';
import { Button, Form, Text } from '../../shared';
import { AppLink } from '../../provider/ui/AppLink/AppLink';
import Glossy from '../../shared/assets/png/Glossy/Glossy_bg.png';
import Hight_Glossy from '../../shared/assets/png/Glossy/Hight-Glossy.png';
import Carving from '../../shared/assets/png/Carving/Carving_bg.png';
import Matt from '../../shared/assets/png/Matt/Matt_bg.png';

const alimgressCeramicaInfo = [
  { image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/barbell-duotone.svg", title: "Прочность и долговечность", desc: "Керамогранит обладает высокой", desc2: "устойчивостью к износу,", desc3: "механическим повреждениям,", desc4: "воздействию влаги", desc5: "и температурным колебаниям." },
  { image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/leaf-duotone.svg", title: "Экологичность", desc: "Керамогранит производится", desc2: "из натуральных материалов,", desc3: "не содержит вредных веществ", desc4: "и абсолютно безопасен", desc5: "для здоровья человека." },
  { image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/kanban-duotone.svg", title: "Широкий ассортимент", desc: "Компания предлагает", desc2: "керамогранит с различными", desc3: "цветовыми решениями, фактурами", desc4: " и размерами, что позволяет", desc5: " подобрать идеальный вариант", desc6: "для любого интерьера." },
  { image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/hand-heart-duotone.svg", title: "Легкость в уходе", desc: "Поверхность керамогранита не", desc2: "впитывает грязь и влагу,", desc3: "благодаря чему его очень легко", desc4: "очистить от любых загрязнений." },
  { image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/fire-duotone.svg", title: "Пожаробезопасность", desc: "Керамогранит является", desc2: "негорючим материалом,", desc3: "что делает его идеальным", desc4: "решением для отделки помещений", desc5: "с высокими требованиями", desc6: "к пожарной безопасности." },
]

const collectionsCardsInfo = [
  { image: Glossy, title: "Коллекция Glossy AlimGress Ceramica" },
  { image: Hight_Glossy, title: "Коллекция HG-Glossy AlimGress Ceramica" },
  { image: Carving, title: "Коллекция Carving AlimGress Ceramica" },
  { image: Matt, title: "Коллекция Matt AlimGress Ceramica" },
]

export const HomePage = memo(() => {

  return (
    <div className={cls.home}>
      <div className="container">
        <Navbar />

        <div className={cls.purchase_block}>
          <Text className={cls.home_logo_txt} as='h3' fz={34}>Премиальное качество <span style={{ display: "block" }}>и оптимальная цена</span></Text>

          <div className={cls.desc_block}>
            <span className={cls.desc_txt}>Более 95 дизайнов керамогранита, различные форматы:</span>
            <span className={cls.desc_txt}>от 600×600 до 1200×1800. Произведено в Индии <img style={{ width: "16px" }} className={cls.flag} src="https://s.w.org/images/core/emoji/15.1.0/svg/1f1ee-1f1f3.svg" alt="" /></span>
            <Button size={201} className={cls.btn}>Приступить к покупкам</Button>
          </div>
        </div>

        <div className={cls.alimgress_block}>
          <div className={cls.alimgress_video_block}>
            <Text className={cls.alimgress_logo_txt} as='h3' fz={38} fw={400}>Maimoon Ceramica <span style={{ display: "block" }}>на MosBuild 2025</span></Text>

            <video className={cls.alimgress_video} controls poster='https://maimoonceramica.ru/wp-content/uploads/2025/04/maimoon-ceramica-mosbuild.jpg' src="https://maimoonceramica.ru/wp-content/uploads/2025/04/maimoon-ceramica-mosbuild.mp4"></video>
            <p className={cls.alimgress_desc}>Maimoon Ceramica на MosBuild 2025</p>
          </div>

          <div className={cls.advantages}>
            <Text className={cls.advantages_logo_txt} as='h3' fz={38} fw={400}>Преимущества керамогранита <span style={{ display: "block" }}>Maimoon Ceramica</span></Text>

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

          <div className={cls.collections_card_block}>
            <Text className={cls.collection_card_logo} as='h3' fz={34} fw={500}>Новые коллекции</Text>

            <div className={cls.collections_card_wrap}>
              {
                collectionsCardsInfo.map((item, key) => (
                  <article className={cls.collections_card_item} key={key}>
                    <img className={cls.collections_image} src={item.image} alt="" />
                    <AppLink className={cls.collections_card_title} to="">
                      <span>{item.title}</span>
                    </AppLink>
                  </article>
                ))
              }
            </div>
          </div>
        </div>

        <div className={cls.form_block}>

          <div className={cls.form_body}>
            <Text className={cls.logo_txt} as='h6' fz={28} fw={500}>Более 95 дизайнов</Text>

            <div className={cls.form_desc_block}>
              <span className={cls.desc_item}>Благодаря своему оригинальному дизайну и разнообразию цветовых</span>
              <span className={cls.desc_item}>решений, керамогранит Maimoon Ceramica отлично сочетается с другими</span>
              <span className={cls.desc_item}>отделочными материалами - деревом, металлом, стеклом и текстилем.</span>
              <span className={cls.desc_item}>Он позволяет создавать уникальные интерьеры, которые отражают</span>
              <span className={cls.desc_item}>индивидуальность своих хозяев и соответствуют последним тенденциям</span>
              <span className={cls.desc_item}>в дизайне.</span>
            </div>

            <AppLink className={cls.btn} to="">
              <Button className={cls.btn} size={147}>Выбрать дизайн</Button>
            </AppLink>
          </div>
        </div>

        <div className={cls.consultation_bg}>

          <div className={cls.consultation_form_block}>
            <Text className={cls.consultation_form_logo_txt} as='h2' fz={34} fw={400}>Нужна консультация?</Text>

            <Form className={cls.consultation_form}>
              <Text className={cls.consultation_logo_txt} as='h2' fz={34} fw={400}>Закажите обратный звонок</Text>

              <div className={cls.input_block}>
                <span>Имя*</span>
                <input className={cls.input_item} type="text" />
              </div>

              <div className={cls.input_block2}>
                <span>Телефон*</span>
                <input className={cls.input_item} type="text" />
              </div>

              <div>
                <div className={cls.data_block}>
                  <img src="" alt="" />
                  <div className={cls.cube}></div>
                  <span className={cls.data_block_txt}>Согласие на обработку персональных данных*</span>
                </div>

                <AppLink className={cls.link} to="">
                  <p className={cls.link}>
                    Политика по персональным данным</p>
                </AppLink>

                <p className={cls.required_field}>*Обязательные поля.</p>
                <Button className={cls.btn} size={175}>Перезвоните мне</Button>
              </div>

            </Form>
          </div>
        </div>

        <Footer />
      </div>
    </div >
  )
})

