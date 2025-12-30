import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Form, Text } from '../../../shared'
import { Footer, Navbar } from '../../../widgets'
import cls from './CollectionPage.module.scss'

const collectionCardsInfo = [

  { title: "Коллекция Glossy", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2024/11/kollekciya-satin-maimoon-ceramica-1.webp" },

  { title: "Коллекция Hi-Glossy", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/kollekciya-hg-glossy-maimoon-ceramica-1-768x552.webp" },

  { title: "Коллекция Matt", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2024/11/kollekciya-matt-maimoon-ceramica-1-768x512.webp" },

  { title: "Коллекция Carving", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2025/01/kollekciya-carving-maimoon-ceramica-768x552.webp" },

  { title: "Коллекция Sinker", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2024/12/kollekciya-full-body-maimoon-ceramica-1-768x552.webp" },

  { title: "Коллекция Golden", title2: "AlimGress Ceramica", image: "https://maimoonceramica.ru/wp-content/uploads/2024/12/kollekciya-full-body-maimoon-ceramica-1-768x552.webp" },
]

export const CollectionPage = () => {

  return (
    <div className={cls.collection}>
      <div>
        <Navbar />

        <div className={cls.collection_body}>
          <Text className={cls.collection_logo} as='h1' fz={44} fw={400}>Коллекции</Text>

          <div className={cls.first_collection_block}>
            {
              collectionCardsInfo.map((item, index) => (
                <Form key={index} className={cls.collection_form1}>
                  <AppLink className={cls.collection_form1_logo_txt} to="">
                    <Text as='h4' fz={36} fw={400} className={cls.collection_form1_logo_txt}>{item.title}</Text>
                    <Text as='h4' fz={36} fw={400} className={cls.collection_form1_logo_txt2}>{item.title2}</Text>
                  </AppLink>
                  <AppLink to="">
                    <img className={cls.collection_form1_image} src={item.image} alt="" />
                  </AppLink>
                </Form>
              ))
            }
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

