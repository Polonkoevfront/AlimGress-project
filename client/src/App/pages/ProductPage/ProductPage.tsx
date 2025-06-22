import React, { FC, useEffect, useState } from 'react'
import { Button, Form } from '../../shared'
import cls from './ProductPage.module.scss'
import { useParams } from 'react-router-dom';

interface ProductProps {
  id?: string;
  title?: string;
  category?: string;
  price?: number;
  size?: string
  image?: string; 
}

export const ProductPage: FC = () => { 
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState<ProductProps | null>(null)
    const [error, setError] = useState<string | null>(null);
    // `http://localhost:5000/api/products/${id}`
    useEffect(() => {
         fetch('https://68418f9fd48516d1d35c07dd.mockapi.io/mmm')
        .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            setProductInfo(data)
        })
        .catch(err => {
            console.error("Ошибка при загрузке данных о продукте:", err);
            setError("Не удалось загрузить данные о продукте.");
        });
    }, [id])

     if (error) {
        return <div>Ошибка: {error}</div>;
    }

     if (!productInfo) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={cls.product}>
      <div className={cls.product_body}>
             <Form>
              <img src={productInfo.image} alt={productInfo.title} />
              <div>
                <span>{productInfo.title}</span>
                <span>{productInfo.size}</span>
                <span>{productInfo.price} ₽</span>
              </div>
              <Button>В корзину</Button>
            </Form>
      </div>
    </div>
  )
}

