import React, { useEffect } from 'react'
import { Sort, Text } from '../../shared'
import { Category, CeramicaCards, Footer, Navbar } from '../../widgets'
import cls from './KeramogranitPage.module.scss'

interface KeramogranitProps {
  onClickCategory: (id: number) => void;
}

export const KeramogranitPage = () => {
  const [categoryId, setCategoryId] = React.useState(0)
  const [sort, setSort] = React.useState(0)

  const handleCategoryClick = (id: number) => {
    setCategoryId(id)
  } 

  return (
    <div className={cls.keramogranit}>
      <div>
        <Navbar/>

        <div className={cls.keramogranit_body}>
            <Text as='h1' fz={44} fw={400}>Керамогранит</Text>

            <Category value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
            <div className={cls.sort}>
              <Sort/>

              <div className={cls.block_cards}>
                <CeramicaCards categoryId={categoryId}/>
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

