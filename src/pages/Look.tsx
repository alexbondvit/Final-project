 import { Link } from 'react-router-dom';

function Look() {
  return (
    <div className='relative w-[1440px] mx-auto'>
      <header className='w-full'>
        <nav className='flex items-center justify-between w-full max-w-[1440px] mx-auto px-4'>
          <div className='Logo'></div>
          <ul className='flex justify-center space-x-8 flex-1'>
            <li>
              <Link to='/' style={{ color: 'black' }} className='hover:text-blue-500'>
                О продукте
              </Link>
            </li>
            <li>
              <Link to='/look' style={{ color: 'black' }} className='hover:text-blue-500'>
                Вид и безопасность
              </Link>
            </li>
            <li>
              <Link to='/xiaomi' style={{ color: 'black' }} className='hover:text-blue-500'>
                Отзывы и FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <h1>Look Page - coming soon</h1>
    </div>
  );
}

export default Look;