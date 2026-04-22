function Checkout() {
    return (
        <div className="page">
            <form onSubmit={(e) => {e.preventDefault(); e.currentTarget.reset(); alert('Заказ принят!')}}>
        <div className="order">
            <h1>Оформление заказа</h1>
        </div>
        <div className="name">
        <label> Ваше имя </label>
            <input type="text" placeholder="введите имя" required></input>
        </div>
        <div className="phone">
        <label>
            Номер телефона
            <input type="number" placeholder="+..." required></input>
        </label>
        </div>
        <div className="address">
        <label> Адрес доставки </label>
            <input type="text" placeholder="Город" required></input>
        </div>
        
        <button className="sentBtn" type="submit">Отправить</button>
        </form>
        </div>
    )
}

export default Checkout