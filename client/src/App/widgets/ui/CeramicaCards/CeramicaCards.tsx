import React, { FC, useEffect, useState } from 'react';
import { AppLink } from '../../../provider/ui/AppLink/AppLink';
import { Button, Skeleton } from '../../../shared';
import cls from './CeramicaCards.module.scss';

interface CeramicItem {
  _id: string;
  title: string;
  size: string;
  price: number;
  imageUrl: string;
  made: string;
}

export const CeramicaCards: FC = () => {
  const [items, setItems] = useState<CeramicItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка сети');
        }
        return res.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка при загрузке продуктов:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={cls.block}>
      <div className={cls.cards_block}>
        {loading
          ? [...new Array(16)].map((_, index) => (
              <article key={index} className={cls.ceramica_card_item}>
                <Skeleton />
              </article>
            ))
          : items.slice(0, 16).map(item => (
              <article key={item._id} className={cls.ceramica_card_item}>
                <AppLink to={`/product/${item._id}`}>
                  <img className={cls.image} src={item.imageUrl}/>
                </AppLink>
                <div>
                  <div className={cls.desc_txt}>
                    <AppLink to={`/product/${item._id}`}>
                      <span className={cls.desc_item}>{item.made}</span>
                      <span className={cls.desc_item}>{item.title}</span>
                      <span className={cls.desc_item}>{item.size}</span>
                    </AppLink>
                  </div>
                  <p className={cls.price}>Цена за {item.price} ₽ за м²</p>
                  <Button size={102} className={cls.btn}>В корзину</Button>
                </div>
              </article>
            ))}
      </div>
    </div>
  );
};
