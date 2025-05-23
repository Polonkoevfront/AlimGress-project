import { Form, Text } from '../../../shared'
import { Footer, Navbar } from '../../../widgets'
import cls from './CollectionPage.module.scss'

export const CollectionPage = () => {
  return (
    <div className={cls.collection}>
      <div>
        <Navbar/>

        <div className={cls.collection_body}>
            <Text className={cls.collection_logo} as='h1' fz={44} fw={400}>Коллекции</Text>

            <div>
                {/* <Form>

                </Form> */}
            </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

