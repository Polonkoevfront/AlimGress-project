import { Skeleton, Sort, Text } from '../../shared'
import { Category, CeramicaCards, Footer, Navbar } from '../../widgets'
import cls from './KeramogranitPage.module.scss'

export const KeramogranitPage = () => {

  return (
    <div className={cls.keramogranit}>
      <div>
        <Navbar/>

        <div className={cls.keramogranit_body}>
            <Text as='h1' fz={44} fw={400}>Керамогранит</Text>

            <Category/>
            <div className={cls.sort}>
              <Sort/>

              <div className={cls.block_cards}>
                <CeramicaCards/>
              </div>
            </div>
        </div>

        <div style={{marginTop: "550px"}}>
        <Footer/>
        </div>

      </div>
    </div>
  )
}

