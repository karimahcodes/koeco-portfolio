import './Header.scss';

export default function Header(){

    return(
        <header className="header">
            <div className='header__left-div'>
                <h1 className='header__title'>koeco</h1>
                <h3 className='header__subtitle'>Karimah Nichols, Software Engineer</h3>
            </div>

            <nav className="header__navbar">
                {/* <Link className='header__navlink' to=""></Link> */}
                <p className='header__text'>Course Work</p>
                <p className='header__text'>Original Projects</p>
                <p className='header__text'>Client Projects</p>
            </nav>
            
        </header>

    )

}