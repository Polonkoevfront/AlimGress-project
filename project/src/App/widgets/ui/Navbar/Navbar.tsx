import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Text } from '../../../shared'
import cls from './Navbar.module.scss'
// import {} from '../../../shared/assets/svg/'

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.navbar_body}>
        <div className={cls.navbar_up}>
            <span className={cls.navbar_up_logo}>Официальный сайт AlimGress</span>

            <div className={cls.contact_block}>
              <img className={cls.phone_icon} src="https://icon666.com/f/_thumb/foy/foynj27f88aa_64.png" alt="" />
              <p className={cls.phone_number}>+7 911 111 11 11</p>
              <hr className={cls.line}/>
              <img className={cls.message_icon} src="https://img.icons8.com/?size=48&id=OVhNF7HVOQGe&format=png" alt="" />
              <AppLink className={cls.email} to="/">
                  <span className={cls.email}>sales@alimgress.ru</span>
              </AppLink>
            </div>
        </div>
        <div className={cls.navbar_down}>
          <img className={cls.alimgress_logo} src="" alt="" />

          <div className={cls.navigation_block}>
            <AppLink className={cls.nav_item} to=""> 
              <Text as='h5' fz={18} fw={400}>О нас</Text>
              </AppLink>
            <AppLink className={cls.nav_item2} to=""> 
              <Text as='h5' fz={18}>Керамогранит</Text>
              </AppLink>
            <AppLink className={cls.nav_item2} to=""> 
              <Text as='h5' fz={18}>Коллекции</Text>
              </AppLink>
            <AppLink className={cls.nav_item2} to="/bulkorders"> 
              <Text as='h5' fz={18}>Оптовые заказы</Text>
              </AppLink>
            <AppLink className={cls.nav_item} to="/cooperation"> 
              <Text as='h5' fz={18} fw={400}>Сотрудничество</Text>
              </AppLink>
            <AppLink className={cls.nav_item} to=""> 
              <Text as='h5' fz={18} fw={400}>Блог</Text>
              </AppLink>
            <AppLink className={cls.nav_item} to=""> 
              <Text as='h5' fz={18} fw={400}>Контакты</Text>
              </AppLink>
            <AppLink className={cls.nav_item} to="/search"> 
              <Text as='h5' fz={18} fw={400}>Поиск</Text>
              </AppLink>
            <AppLink className={cls.nav_item3} to="/account">
              <img className={cls.nav_item3} src="https://icon666.com/f/_thumb/und/undp18hkx63t_64.png" alt="" />
            </AppLink>
            <AppLink className={cls.nav_item4} to="">
              <img className={cls.nav_item3} src="https://icon666.com/f/_thumb/8t6/8t6kp9u3x5i4_64.png" alt="" />
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  )
}

