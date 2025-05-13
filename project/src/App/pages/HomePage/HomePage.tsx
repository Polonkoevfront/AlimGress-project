import { memo } from 'react'
import { Navbar } from '../../widgets'
import cls from './HomePage.module.scss'

export const HomePage = memo(() => {
  return (
    <div>
      <div>
        <div>
            <Navbar/>
        </div>
      </div>
    </div>
  )
})

