import style from './Card.module.css'
import card_img from '/src/assets/Rectangle3.png'

export function Card(props) {
    return (
        <>
            <div className={style.card}>
                <img src={props.img} alt={card_img} />
                <p className={style.card_name}>{props.name}</p>
                <div className={style.card_bottom}>
                    <p className={style.card_price}>{props.price} ₽</p>
                    <button className={style.card_btn}>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}