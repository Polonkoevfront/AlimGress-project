import { FC } from 'react';
import { Sort, Text } from '../../shared'
import { Category, CeramicaCards, Footer, Navbar } from '../../widgets'
import ceramica from '../../widgets/ui/Storage/Storage.json'
import cls from './KeramogranitPage.module.scss'

export const KeramogranitPage = () => {

  return (
    <div className={cls.keramogranit}>
      <div>
        <Navbar/>

        <div className={cls.keramogranit_body}>
            <Text as='h1' fz={44} fw={400}>Керамогранит</Text>

            <Category/>
            <Sort/>

            {
              ceramica.map((obj) => (
                <CeramicaCards title={obj.title} price={obj.price} image={obj.imageUrl}/>
              )) 
            }

        </div>

        <Footer/>
      </div>
    </div>
  )
}

