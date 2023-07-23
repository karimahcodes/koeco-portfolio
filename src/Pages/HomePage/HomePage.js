
import './HomePage.scss';
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <div className='home'>

            <nav className='home__subnav'>
                <a className='home__subnav-link' href="#contact">
                    <p className='home__subnav-text'> Contact</p>
                </a>

                <a className='home__subnav-link' href="#technologies">
                    <p className='home__subnav-text'>Technologies</p>
                </a>
            </nav>

           <div className='home__about-group'>
            <section className='home__about'>
                <h2 className='home__title'>About Me</h2>
                <p className='home__body-text'> koeco reflects my passion for using tech to build community and find creative new tools to meet the needs of those not traditionally courted by the tech industry. Prior to koeco, I worked with behavioral healthcare, nonprofit and social change organizations. My preferred style of working on a project blends compassion, collaboration, and client-driven solutions with code. I can't wait to work with you!</p>

            </section>

            <div className='home__about--image'>
                TEST
            </div>
            </div>
           

            <section className='home__contact' id="contact">
                <h2 className='home__title'>Contact Me</h2>

                <form className='home__contact-form' /*onSubmit={}*/ >
                    <label className="home__label" htmlFor='contact-name'>Full Name (preferred pronouns) </label>
                    <input className='home__contact-name' type="text" id="contact-name" placeholder='Toni Braxton (she/her)' />

                    <label className="home__label" htmlFor='email-input'>Email</label>
                    <input className='home__email' type="email" id="email-input" placeholder="you@mail.com" />

                    <label className="home__label" htmlFor='message'>What brings you here today?</label>
                    <textarea className='home__message' placeholder='message' id="message" />

                    <div className='home__btn-group'>
                        <button className="home__button" type="submit">Submit</button>
                        <button className="home__button" type="submit">Clear All</button>
                    </div>
                </form>
                <p className="home__email-link">Prefer to email instead? S'ok. <a href="mailto:karimah@duck.com" target="_blank">Click here.</a></p>

            </section>

            <section className='home__technologies' id="technologies">
                <h2 className='home__title'>Technologies & Skills</h2>

                <ul className="home__list">
                    <div className='home__frontend'>
                        <li className="home__list-item">HTML5</li>
                        <li className="home__list-item">CSS3</li>
                        <li className="home__list-item">JavaScript</li>
                        <li className="home__list-item">React</li>
                    </div>
                    <div className='home__backend'>
                        <li className="home__list-item">Node</li>
                        <li className="home__list-item">Express</li>
                        <li className="home__list-item">MySQL</li>
                    </div>
                    <div className='home__nocode'>No Code:
                        <li className="home__list-item">Wix</li>
                        <li className="home__list-item">Squarespace</li>
                    </div>
                    <div className='home__transferrable'>Non-technical  Skills:
                        <li className="home__list-item">Cross-cultural & Interdisciplinary Collaboration</li>
                        
                        <li className="home__list-item">Intermediate Spanish</li>
                    </div>

                </ul>
            </section>

        </div>

    )
}