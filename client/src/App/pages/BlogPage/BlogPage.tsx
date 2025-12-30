import { AppLink } from '../../provider/ui/AppLink/AppLink'
import { Text } from '../../shared'
import { Footer, Navbar } from '../../widgets'
import cls from './BlogPage.module.scss'

export const BlogPage = () => {
  return (
    <div className={cls.blog}>
      <div>
        <Navbar />

        <div className={cls.blog_body}>
          <Text className={cls.blog_logo} as='h1' fz={44} fw={400}>Блог про керамогранит</Text>

          <ul className={cls.blog_category}>
            <li className={cls.blog_ceramica}>
              <AppLink className={cls.blog_ceramica_txt} to="/">Керамогранит <span className={cls.num}>(3)</span></AppLink>
            </li>
            <li className={cls.blog_news}>
              <AppLink className={cls.blog_news_txt} to="/">Новости <span className={cls.num}>(3)</span></AppLink>
            </li>
            <li className={cls.blog_useful}>
              <AppLink className={cls.blog_useful_txt} to="/">Полезное <span className={cls.num}>(1)</span></AppLink>
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  )
}

