import { FC } from 'react';
import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Button, Text } from '../../../shared'
import cls from './CeramicaCards.module.scss'
import glossy from '../../../shared/assets/png/Glossy/Glossy1.png'
import glossy2 from '../../../shared/assets/png/Glossy/Glossy2.png'
import glossy3 from '../../../shared/assets/png/Glossy/Glossy3.png'
import glossy4 from '../../../shared/assets/png/Glossy/Glossy4.png'

interface CeramicaCardsProps {
    title: string;
    price: number[];
    image: string;
    size: string;
}

export const CeramicaCards: FC<CeramicaCardsProps> = (props) => {
  const cardItem = [
    {
      img: glossy,
      titleNew: "Керамогранит AlimGress",  
    },
    {
      img: glossy2,
      titleNew: "Керамогранит AlimGress",  
    },
    {
      img: glossy3,
      titleNew: "Керамогранит AlimGress",  
    },
    {
      img: glossy4,
      titleNew: "Керамогранит AlimGress",  
    },
  ]

  return (
    <div className={cls.block}>
    <div className={cls.cards_block}>
        {
          cardItem.map((item, index) => (
            <article key={index} className={cls.ceramica_card_item}>
            <img className={cls.image} src={item.img} alt="" />
            <div>
                <div className={cls.desc_txt}>
                <AppLink to="">
                <span className={cls.desc_item}>{item.titleNew}</span>
                <span className={cls.desc_item}>{props.title}</span>
                <span className={cls.desc_item}>{props.size}</span>
                </AppLink>
            </div>
            <p className={cls.price}>Цена за {props.price} ₽ за м²</p>
            <Button size={102} className={cls.btn}>В корзину</Button>
            </div>
        </article>
          ))
        } 
    </div>
    </div>
  )
}

