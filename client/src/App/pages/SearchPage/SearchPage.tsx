import { useState } from 'react'
import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './SearchPage.module.scss'

export const SearchPage = (type: any) => {
  const [isValue, setIsValue] = useState("")

  const input = <input value={isValue} onChange={e => setIsValue(e.target.value)} type={type} />;


  return (
    <>
    <div className={cls.search}>
      <div className='container'>
        <Navbar/>

            <Text className={cls.search_logo} as='h1' fz={44} fw={400}>Поиск</Text>
            <div className={cls.search_body}>
                <div className={cls.text_block}>
                    <p className={cls.search_desc}>Поиск поможет вам найти интересующие вас товары и коллекции.</p>
                    <p className={cls.search_desc2}>Просто введите название или часть названия.</p>
                </div>
                <div className={cls.search_input_block}>
                    <div className={cls.input_label}>
                        <input value={isValue} className={cls.input} type="search" placeholder='Искать товары...'/>
                    </div>
                        <label className={cls.search_btn}>
                            <img className={cls.search_icon} src="https://img.icons8.com/?size=32&id=14079&format=png" alt="" />
                        </label>
                </div>
                <p className={cls.search_latest_txt}>Не получается найти товар или коллекцию — 
                    <AppLink className={cls.search_link} to="/contactus">
                    <p className={cls.search_link}>
                        свяжитесь с нами.
                    </p>
                    </AppLink>
                    </p>
            </div>

        <div className={cls.footer}>
            <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}