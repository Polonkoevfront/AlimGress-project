import cls from './Footer.module.scss'

export const Footer = () => {
  return (
    <>
    <div className={cls.made_india}>
      <hr className={cls.line}/>
      <img className={cls.india_flag} src="https://s.w.org/images/core/emoji/15.1.0/svg/1f1ee-1f1f3.svg" alt="" />
      <p className={cls.text}>Сделано в&nbsp;Индии</p>
    </div>
    <div className={cls.footer}>
      <div className='container'>
        mjnj
      </div>
    </div>
    </>
  )
}

