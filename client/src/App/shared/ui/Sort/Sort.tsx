import React from 'react'
import cls from './Sort.module.scss'

export const Sort = () => {
    const [ openSort, setOpenSort ] = React.useState(false)
    const [ isSelected, setIsSelected ] = React.useState(0)
    const sortList = [ "Исходная сортировка", "По популярности", "По рейтингу",  "По новизне",  "По возрастанию цены", "По убыванию цены" ]
    const sortTitle = sortList[isSelected]

    const clickList = (i: any) => {
        setIsSelected(i)
        setOpenSort(false)
    }
    
  return (
    <>
    <div className={cls.popup}>
      <span className={cls.popup_txt} onClick={() => setOpenSort(!openSort)}>
        {sortTitle}
        <img src="" alt="" />
      </span>
    </div>
    {
        openSort && (
            <ul className={cls.list_block}>
                {
                    sortList.map((name, index) => (
                        <li key={index} onClick={() => clickList(index)} className={isSelected ? cls.active : ""}>{name}</li>
                    ))
                }
            </ul>
        )
    }
    </>
  )
}

