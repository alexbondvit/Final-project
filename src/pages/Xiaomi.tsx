import { Link } from 'react-router-dom';
import image206 from '../assets/image206.png';
import LogoImage from '../assets/logoImage.png';
import BikeWhite from '../assets/BikeWhite.png';
import PathImage from '../assets/path.png';
import PathImage2 from '../assets/path2.png';
import PathImage22 from '../assets/path2-1.png';

function Xiaomi() {
  return (
    <div className='relative w-[1440px] mx-auto'>

      {/* Hero Image + About Section overlaid */}
<div className='relative w-full'>

  {/* NAVBAR INSIDE IMAGE */}
  <header className='xiaomi-nav-oval'>
    <nav>
      <ul>
        <li>
          <Link to='/' className='xiaomi-nav-link'>О продукте</Link>
        </li>
        <li>
          <Link to='/look' className='xiaomi-nav-link'>Вид и безопасность</Link>
        </li>
        <li>
          <Link to='/xiaomi' className='xiaomi-nav-link'>Отзывы и FAQ</Link>
        </li>
      </ul>
    </nav>
  </header>

  {/* Decorative Path */}
  <img
    src={PathImage}
    alt='Path'
    style={{
      position: 'absolute',
      width: '300px',
      top: '600px',
      left: '1140px',
      zIndex: 5,
    }}
  />

  <img
    src={PathImage2}
    alt='Path2'
    style={{
      position: 'absolute',
      top: '1805px',
      opacity: 1,
      zIndex: 0,
      pointerEvents: 'none',
    }}
  />

  <img
    src={PathImage22}
    alt='Path22'
    style={{
      zIndex: 3,
      width: '145px',
      height: '115px',
      position: 'absolute',
      top: '1972px',
      left: '1167.8px',
      transform: 'rotate(2deg)',
      pointerEvents: 'none',
    }}
  />

  <img
    src={image206}
    alt='Xiaomi'
    className='w-full h-auto'
    style={{ margin: '0', 
             alignItems: 'center',
    }}
  />

  {/* Logo */}
  <img
    src={LogoImage}
    alt='Logo'
    className='absolute'
    style={{ width: '60px', height: '39px', top: '120px', left: '180px' }}
  />

  {/* About Section */}
  <div id='about' className='absolute bottom-[60px] left-[180px]'>
    <h1 className='text-left' style={{ color: '#FF4C0D', fontSize: '45px' }}>
      О бренде Xiaomi
    </h1>

    <h2 className='text-left' style={{ fontSize: '14px', color: 'black' }}>
      Компания Xiaomi была основана предпринимателем Лей Цзюнем
      <br />
      в 2010 году под девизом - «Инновации для всех».
      <br />
      <br />
      Мы верим, что высококачественные продукты и передовые технологии
      <br />
      должны быть доступны каждому.
    </h2>
  </div>
</div>

      {/* Reviews Section */}
      <div id='reviews' className='w-full mt-12 overflow-hidden'>
        <h1
          className='text-center mb-6'
          style={{ color: '#FF4C0D', marginTop: '70px', marginLeft: '-500px' }}
        >
          Отзывы о Mi Scooter Pro 2
        </h1>

        <div className='flex gap-5 pl-[140px] mt-15'>
          {/* Review 1 */}
          <div className='Rectangle1 w-[460px] h-[294px] bg-[#151515] rounded-xl p-6'>
            <h2 className='text-justify !text-white'>Михаил Сафонов</h2>
            <div className='OrangeLine2 bg-[#FF4C0D] w-[100px] h-[3px] mt-2 mb-4'></div>
            <p className='text-justify text-white'>
              Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса
              — десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В
              плюсах Xiaomi — удобство переноски (вес аппарата, развесовка).
              <br />
              <br />В итоге купил Xiaomi и поставил 10-дюймовые шины — получил комфорт при небольшом
              весе самоката.
            </p>
          </div>

          {/* Review 2 */}
          <div className='Rectangle2 w-[460px] h-[294px] bg-[#151515] rounded-xl p-6'>
            <h2 className='text-justify !text-white'>Алексей Петров</h2>
            <div className='OrangeLine2 bg-[#FF4C0D] w-[100px] h-[3px] mt-2 mb-4'></div>
            <p className='text-justify text-white'>
              Пользовался уже несколько месяцев, очень доволен качеством сборки и комфортом езды.
              Зарядка держится долго, что особенно важно для повседневного использования.
            </p>
          </div>

          {/* Review 3 */}
          <div className='Rectangle3 w-[460px] h-[294px] bg-[#151515] rounded-xl p-6'>
            <h2 className='text-justify !text-white'>Елена Смирнова</h2>
            <div className='OrangeLine3 bg-[#FF4C0D] w-[100px] h-[3px] mt-2 mb-4'></div>
            <p className='text-justify text-white'>
              Отличный выбор для тех, кто ищет практичный и надёжный самокат. Удобная ручка для
              переноски и хорошая управляемость в городе.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Buttons */}
      <div className='flex items-center justify-between pl-[140px] pr-[140px] mt-8'>
        <button
          style={{
            padding: '14px 32px',
            borderRadius: '25px',
            border: 'none',
            background: '#F1F1F1',
            color: '#151515',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#cccccc')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F1F1F1')}
        >
          Оставить отзыв
        </button>
      </div>

      {/* FAQ Section */}
      <div id='faq' className='QuestionSection' style={{ position: 'relative' }}>
        {/* ELLIPSE */}
        <div
          style={{
            position: 'absolute',
            width: '943px',
            height: '948px',
            top: '-1250px',
            left: '700px',
            opacity: 0.8,
            background: 'linear-gradient(120deg, #FC501F 10%, rgba(252, 80, 31, 0) 60%)',
            borderRadius: '50%',
            transform: 'rotate(-90deg)',
            filter: 'blur(200px)', 
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '579px',
            height: '682px',
            top: '50px',
            left: '-22px',
            opacity: 0.6,

            background:
              'linear-gradient(121.95deg, #FC1F1F 13.18%, rgba(252, 203, 31, 0.31) 72.93%)',

            borderRadius: '50%',
            transform: 'rotate(90deg)',

            filter: 'blur(200px)', 
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />
        <div className='RANDOMADDQUESTION'>
          <h1 className='text-center' style={{ color: '#FF4C0D' }}>
            Часто задаваемые <br />
            <br />
            вопросы
          </h1>
          <h2 className='text-justify'>
            Все ваши часто задаваемые вопросы
            <br />о электросамокате Mi Scooter Pro 2.
            <br />
            <br />
            Если у вас есть собственный вопрос — задайте <br />
            его через форму обратной связи.
          </h2>
        </div>
        <button className="bg-white text-[#151515] w-32 px-4 py-3 text-sm rounded-full transition-colors duration-200 hover:bg-gray-200" style={{ position: 'absolute', top: '410px', left: '210px', transform: 'translateX(-50%)' }}>
  Задать вопрос
</button>

        <div className='AnswerSection'>
          <h3 className='text-justify'>На него нужны права категории M?</h3>
          <div className='OrangeLine2-1'></div>
          <p className='text-justify'>
            Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
            других участников движения.
          </p>

          <h3 className='text-justify'>У меня вес 135 кг, выдержит ли этот самокат?</h3>
          <div className='OrangeLine2-2'></div>
          <p className='text-justify'>
            Самокат определённо выдержит и будет ехать, но не с максимальной скоростью.
          </p>

          <h3 className='text-justify'>Есть ли влагозащита?</h3>
          <div className='OrangeLine2-3'></div>
          <p className='text-justify'>
            Электросамокат имеет степень защиты IP54. Он защищён от попадания пыли и брызг, падающих
            в любом направлении. Погружение в воду может привести к поломке.
          </p>

          <h3 className='text-justify'>Это версия для Китая или Европы?</h3>
          <div className='OrangeLine2-4'></div>
          <p className='text-justify'>
            Это европейская версия, со всеми обновлениями и евро-вилкой.
          </p>
        </div>
      </div>

      {/* Product Section Wrapper */}
      <div style={{ position: 'relative', margin: '0 140px', paddingTop: '80px' }}>
        {/* Bike - sits above the box */}
        <img
          src={BikeWhite}
          alt='Mi Scooter'
          style={{
            position: 'absolute',
            bottom: '0',
            left: '820px',
            transform: 'translateX(-50%)',
            height: '660px',
            width: '966px',
            zIndex: 10,
          }}
        />
        

        {/* The box */}
        <div
          style={{
            position: 'relative',
            height: '550px',
            borderRadius: '15px',
            overflow: 'hidden',
          }}
        >
          {/* Rectangle 1 - base dark layer */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '550px',
              borderRadius: '15px',
              background: '#151515',
            }}
          ></div>

          {/* Rectangle 2 - on top */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '550px',
              borderRadius: '15px',
              background: '#1a1a1a',
            }}
          ></div>

          {/* Ellipse blur overlay */}
          <div
            style={{
              position: 'absolute',
              width: '1218px',
              height: '1242px',
              top: '-400px',
              left: '-20px',
              borderRadius: '15px',
              background:
                'linear-gradient(120.02deg, #FFFFFF 12.77%, rgba(255, 255, 255, 0) 57.08%)',
              backdropFilter: 'blur(280px)',
              opacity: 0.2,
              transform: 'rotate(90deg)',
              pointerEvents: 'none',
            }}
          ></div>

          {/* Left - title, price, buttons */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 10,
            }}
          >
            <h1 style={{ color: '#F1F1F1', fontSize: '36px', margin: 0 }}>
              Mi Electric Scooter Pro 2
            </h1>
            <p style={{ color: '#FF4C0D', fontSize: '24px', fontWeight: '700', margin: 0 }}>
              54 990 ₽
            </p>

            <div
              style={{
                display: 'inline-flex',
                background: '#2b2b2b',
                border: '2px solid #F1F1F1',
                borderRadius: '999px',
                padding: '3px',
                width: 'fit-content', 
              }}
            >
              <button
                style={{
                  padding: '10px 20px', 
                  borderRadius: '999px',
                  border: 'none',
                  background: '#F1F1F1',
                  color: '#151515',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Белый
              </button>

              <button
                style={{
                  padding: '10px 20px', 
                  borderRadius: '999px',
                  border: 'none',
                  background: 'transparent',
                  color: '#F1F1F1',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Чёрный
              </button>
            </div>

            <button
  style={{
    marginTop: '120px',
    width: '140px',
    height: '50px',
    borderRadius: '25px',
    border: 'none',
    background: '#FF4C0D',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#be3909';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = '#FF4C0D';
  }}
>
  Купить
</button>
          </div>

          {/* Right - package contents */}
          <div style={{ position: 'absolute', top: '60px', right: '60px', zIndex: 10 }}>
            <h3
              style={{
                textAlign: 'justify',
                color: '#F1F1F1',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              Комплект поставки
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '7px',
              }}
            >
              {[
                'Адаптер питания',
                'Шестигранный ключ',
                'Удлинитель для насоса',
                'Винты x 5 шт.',
                'Запасная шина',
                'Руководство пользователя',
                'Буклет с информацией',
              ].map((item) => (
                <li key={item} style={{ textAlign: 'justify', color: '#F1F1F1', fontSize: '14px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='Footer'>
        <div className='FooterBottom'>
          <p>© 2024 Xiaomi. Все права защищены.</p>
          <div className='FooterMeta'>
            <div className='FooterMetaBlock FooterMetaBlock--left'>
              <p>© 2010 - 2021 Xiaomi.</p>
              <p>Все права защищены.</p>
            </div>
            <div className='FooterMetaBlock FooterMetaBlock--right'>
              <p>8 800 775 66 15</p>
              <p>Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Xiaomi;
