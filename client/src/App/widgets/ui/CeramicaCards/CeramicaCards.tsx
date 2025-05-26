import { FC } from 'react';
import { AppLink } from '../../../provider/ui/AppLink/AppLink'
import { Button } from '../../../shared'
import cls from './CeramicaCards.module.scss'

interface CeramicaCardsProps {
    title: string;
    price: number[];
    image: string;
}

export const CeramicaCards: FC<CeramicaCardsProps> = (props) => {
  return (
    <div>
        <article>
            <img className={cls.image} src="" alt="" />
            <div>
                <div className={cls.desc_txt}>
                <AppLink to="">
                <span className={cls.desc_item}>{}</span>
                <span className={cls.desc_item}>{}</span>
                <span className={cls.desc_item}>{}</span>
                </AppLink>
            </div>
            <p className={cls.price}></p>
            <Button size={102} className={cls.btn}>В корзину</Button>
            </div>
        </article> 
    </div>
  )
}

