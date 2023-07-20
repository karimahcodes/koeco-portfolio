import './HomePage.scss';

export default function HomePage(){

    return(
        <div className='home'>
            <section className='home__about'>
                <h1 className='home__title'>About Me</h1>
                <p className='home__text'>Welcome! I am a software engineer who is passionate about using tech to build community and find creative new tools to meet the needs of those not traditionally courted by the tech industry. Prior to koeco, I worked with behavioral healthcare, nonprofit and social change organizations. My preferred style of collaborating on a project is to  blend compassion and client-driven solutions with code.</p>
            </section>
            <section className='home__contact'>
                <h1 className='home__title'>Contact Me</h1>
                <form className='home__contact-form'>
                    
                    <label className="home__label" htmlFor='contact-name'>Full Name ( preferred pronouns) </label>
                    <input className='home__contact-name' type="text" id="contact-name"placeholder='Your Name (she/her)'/>
                    
                    <label className="home__label" htmlFor='email-input'>Email</label>
                    <input className='home__email' type="text" id="email-input" placeholder="you@mail.com"/> 
                    
                    <label className="home__label" htmlFor='message'>What brings you here today?</label>
                    <textarea className='home__message' placeholder='message' id="message"/>

                    <button className="home__button" type="submit">Submit</button>

                </form>
            </section>
        </div>

    )
}