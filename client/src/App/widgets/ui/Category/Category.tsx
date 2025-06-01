import React from 'react'
import { Text } from '../../../shared'
import cls from './Category.module.scss'

const categoryLength = [
    { title: "Длина", size: "180", size2: "160", size3: "120", size4: "100", size5: "80", size6: "60" },
]
const categoryWidth = [
    { title: "Ширина", sizeWidth: "120", sizeWidth2: "100", sizeWidth3: "80", sizeWidth4: "60" },
]
const categoryColor = [
    { title: "Цвет", color: "Бежевый", color2: "Белый", color3: "Голубой", color4: "Жёлтый", color5: "Зеленый", color6: "Золотистый", color7: "Коричневый", color8: "Серебристый", color9: "Серый", color10: "Синий", color11: "Чёрный" },
]
const categoryScopeApplication = [
    { title: "Область", title2: "применения", scopeApplication: "Для ванной", scopeApplication2: "Для гостиной", scopeApplication3: "Для коридора", scopeApplication4: "Для кухни", scopeApplication5: "Для общественных", scopeApplication5_5: "помещений", scopeApplication6: "Для улицы" }
]

export const Category = () => {
    const [active, setActive] = React.useState(false)

  return (
    <div className={cls.categories_block}>
      {
        categoryLength.map((item, index) => (
            <ul className={cls.category_block_item} key={index}>
                <Text as='h3' fz={28} fw={400}>{item.title}</Text>
                <div style={{display: "flex", marginTop: "-20px"}}>
                    <div onClick={() => setActive(!active)} className={cls.block_figure}></div>
                    <li>{item.size} см</li>
                </div>
                <div style={{display: "flex"}}>
                    <div onClick={() => setActive(!active)} className={cls.block_figure}></div>
                    <li>{item.size2} см</li>
                </div>
               <div style={{display: "flex"}}>
                    <div className={cls.block_figure}></div>
                    <li>{item.size3} см</li>
               </div>
               <div style={{display: "flex"}}>
                    <div className={cls.block_figure}></div>
                    <li>{item.size4} см</li>
               </div>
               <div style={{display: "flex"}}>
                    <div className={cls.block_figure}></div>
                    <li>{item.size5} см</li>
               </div>
               <div style={{display: "flex"}}>
                    <div className={cls.block_figure}></div>
                    <li>{item.size6} см</li>
               </div>

               {
                active && (
                <svg style={{position: "absolute", left: "38px", top: "65px", width: "18px", cursor: "pointer"}} xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path>
                </svg>
                )
               }
            </ul>
        ))
      }
      {
        categoryWidth.map((item2, index2) => (
              <ul className={cls.category_block_item2} key={index2}>
                <Text as='h3' fz={28} fw={400}>{item2.title}</Text>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item2.sizeWidth} см</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item2.sizeWidth2} см</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item2.sizeWidth3} см</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item2.sizeWidth4} см</li>
                </div>
            </ul>
        ))
      }
      {
        categoryColor.map((item3, index3) => (
              <ul className={cls.category_block_item2} key={index3}>
                <Text as='h3' fz={28} fw={400}>{item3.title}</Text>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color2}</li>
                </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color3}</li>
               </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color4}</li>
               </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color5}</li>
               </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color6}</li>
               </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color7}</li>
               </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color8}</li>
               </div>
              <div>
                  <div className={cls.block_figure2}></div>
                <li>{item3.color9}</li>
              </div>
               <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item3.color11}</li>
               </div>
            </ul>
        ))
      }
      {
        categoryScopeApplication.map((item4, index4) => (
              <ul className={cls.category_block_item2} key={index4}>
                <Text as='h3' fz={28} fw={400}>{item4.title}</Text>
                <Text className={cls.title_2} as='h3' fz={28} fw={400}>{item4.title2}</Text>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication2}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication3}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication4}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication5}</li>
                </div>
                <div>
                    <li style={{marginTop: "2px"}}>{item4.scopeApplication5_5}</li>
                </div>
                <div>
                    <div className={cls.block_figure2}></div>
                    <li>{item4.scopeApplication6}</li>
                </div>
            </ul>
        ))
      }
    </div>
  )
}

