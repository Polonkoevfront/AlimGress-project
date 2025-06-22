
import React from 'react'
import { Text } from '../../../shared'
import cls from './Category.module.scss'

const categoryLength = [
  { title: "Длина", sizes: ["180", "160", "120", "100", "80", "60"] }
]
const categoryWidth = [
  { title: "Ширина", sizes: ["120", "100", "80", "60"] }
]
const categoryColor = [
  { title: "Цвет", colors: ["Бежевый", "Белый", "Голубой", "Жёлтый", "Зеленый", "Золотистый", "Коричневый", "Серебристый", "Серый", "Синий", "Чёрный"] }
]
const categoryScopeApplication = [
  { title: "Область", title2: "применения", scopes: ["Для ванной", "Для гостиной", "Для коридора", "Для кухни", "Для общественных", "помещений", "Для улицы"] }
]

export const Category = () => {
  const [activeLength, setActiveLength] = React.useState<number[]>([])
  const [activeWidth, setActiveWidth] = React.useState<number[]>([])
  const [activeColor, setActiveColor] = React.useState<number[]>([])
  const [activeScope, setActiveScope] = React.useState<number[]>([])

  const toggleActive = (arr: number[], setArr: React.Dispatch<React.SetStateAction<number[]>>, idx: number) => {
    setArr(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  return (
    <div className={cls.categories_block}>
      {categoryLength.map((item, index) => (
        <ul className={cls.category_block_item} key={index}>
          <Text className={cls.text_block} as='h3' fz={28} fw={400}>{item.title}</Text>
          {item.sizes.map((size, idx) => (
            <div style={{ display: "flex", alignItems: "center"}} key={idx}>
              <div
                onClick={() => toggleActive(activeLength, setActiveLength, idx)}
                className={cls.block_figure}
              >
                {activeLength.includes(idx) && (
                  <svg style={{ position: "absolute", left: -2, top: -4, width: "18px", cursor: "pointer" }} xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path>
                  </svg>
                )}
              </div>
              <li>{size} см</li>
            </div>
          ))}
        </ul>
      ))}

      {categoryWidth.map((item, index) => (
        <ul className={cls.category_block_item2} key={index}>
          <Text as='h3' fz={28} fw={400}>{item.title}</Text>
          {item.sizes.map((size, idx) => (
            <div style={{ display: "flex", alignItems: "center",}} key={idx}>
              <div
                onClick={() => toggleActive(activeWidth, setActiveWidth, idx)}
                className={cls.block_figure2}
              >
                {activeWidth.includes(idx) && (
                  <svg style={{ position: "absolute", left: -2, top: -4, width: "18px", cursor: "pointer" }} xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path>
                  </svg>
                )}
              </div>
              <li>{size} см</li>
            </div>
          ))}
        </ul>
      ))}

      {categoryColor.map((item, index) => (
        <ul className={cls.category_block_item2} key={index}>
          <Text as='h3' fz={28} fw={400}>{item.title}</Text>
          {item.colors.map((color, idx) => (
            <div style={{ display: "flex", alignItems: "center" }} key={idx}>
              <div
                onClick={() => toggleActive(activeColor, setActiveColor, idx)}
                className={cls.block_figure2}
              >
                {activeColor.includes(idx) && (
                  <svg style={{ position: "absolute", left: -2, top: -4, width: "18px", cursor: "pointer" }} xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path>
                  </svg>
                )}
              </div>
              <li>{color}</li>
            </div>
          ))}
        </ul>
      ))}

      {categoryScopeApplication.map((item, index) => (
        <ul className={cls.category_block_item2} key={index}>
          <Text as='h3' fz={28} fw={400}>{item.title}</Text>
          <Text className={cls.title_2} as='h3' fz={28} fw={400}>{item.title2}</Text>
          {item.scopes.map((scope, idx) => (
            <div style={{ display: "flex", alignItems: "center",}} key={idx}>
              {scope === "помещений" ? (
                <li style={{ marginTop: "2px" }}>{scope}</li>
              ) : (
                <>
                  <div
                    onClick={() => toggleActive(activeScope, setActiveScope, idx)}
                    className={cls.block_figure2}
                  >
                    {activeScope.includes(idx) && (
                      <svg style={{ position: "absolute", left: -2, top: -4, width: "18px", cursor: "pointer" }} xmlns='http://www.w3.org/2000/svg'>
                        <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path>
                      </svg>
                    )}
                  </div>
                  <li>{scope}</li>
                </>
              )}
            </div>
          ))}
        </ul>
      ))}
    </div>
  )
}


