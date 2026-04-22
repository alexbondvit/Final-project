import { Link } from 'react-router-dom';
import samokat from '../assets/BikeMain.png';
import foto from '../assets/Rectangle 23.png';
import foto1 from '../assets/Rectangle 24.png';
import art from '../assets/Path.png';
import logo from '../assets/Group 13 (2).png'

function Main() {
  return (
    <div className='relative w-[1440px] mx-auto'>

      {/* HERO AREA WRAPPER (IMPORTANT) */}
      <div className="hero relative">

         <div className="ellipse"></div>
      <img src={logo} className='Logo'/>
      <Link to="/checkout">
      <button className='buy'>Купить</button></Link>

        {/* NAVBAR (NOW INSIDE HERO + OVAL STYLE) */}
        <header className='nav-oval'>
          <nav>
            <ul>
              <li>
                <Link to='/' className='nav-link'>О продукте</Link>
              </li>
              <li>
                <Link to='/look' className='nav-link'>Вид и безопасность</Link>
              </li>
              <li>
                <Link to='/xiaomi' className='nav-link'>Отзывы и FAQ</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* HERO TEXT */}
        <h1 className='title'>
          Стильный электросамокат <br />
          с мощным аккумулятором
        </h1>

        <h3 className='text1'>
          Улучшенная производительность <br />
          для дальних путешествий. <br />
          Работает так же просто, <br />
          как и выглядит.
        </h3>

        {/* HERO IMAGE */}
        <img src={samokat} className='Samokat' />

      </div>

      {/* REST OF YOUR PAGE (UNCHANGED) */}
      <h2 className='text2'>
        Мощная батарея и экономичный расход <br />
        заряда позволяют преодолевать <br />
        расстояния до 45 км
      </h2>

      <div className='block1'>
        <h3>Три режима скорости</h3>
        <hr className='line'/>
        <p>
          Три режима езды позволяют почуствовать себя комфортно в любой ситуации. 
          Режим «S» увеличитвает скорость, если опаздываете на работу. 
          <br/>Во время прогулки по парку активируйте режим «D». <br/>Включите 
          режим «Пешеход», когда двигаетесь <br/>по оживлённой улице.
        </p>
      </div>

      <div className='block2'>
        <h3>Система восстановления энергии</h3>
        <hr />
        <p>
         Во время торможения и движения по инерции система преобразовывает 
          кинетическую энергию <br/>в электрическую, позволяя увеличить общий <br/>запас хода самоката.
        </p>
      </div>

      <div className='block3'>
        <h3>Мощная батарея</h3>
        <hr />
        <p>
          Самокат оснащен аккумулятором емкостью <br/>12 800 мАч. 
          Это позволяет преодолевать расстояния <br/>до 45 км без подзарядки.
        </p>
      </div>

      <img src={foto} className='foto' />
      <img src={foto1} className='foto1' />
      <img src={art} className='art' />

    </div>
  );
}

export default Main;