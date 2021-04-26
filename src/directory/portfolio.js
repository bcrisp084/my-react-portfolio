import React from 'react';
import Project from '../components/poject/project';
import astrozoderImage from '../images/astrozoders.png';
import dailyToDoImage from '../images/daily-to-do.png';
import gottaGoImage from '../images/gottaGO.png';
import TheguysfromworkImage from '../images/Theguysfromwork.png';
import weatherImage from '../images/weather.png';
import budgetImage from '../images/budget.png';




const Portfolio=() => {
    return(
        <div className='projectContainer'>
            <main className='container'>
                <div className='row'>
                    <section className='col-md-9'>
                        <div>
                            <h1 id ="header">Portfolio</h1>
                            <hr />
                        </div>
                        <div className='row'>
                            <Project
                            thumbnail={gottaGoImage}
                            altText={'Bathroom rate and review'}
                            liveLink={'https://murmuring-dawn-63159.herokuapp.com/'}
                            sourceCode={'https://github.com/bcrisp084/gottaGO'}>
                            </Project>
                            <Project
                            thumbnail={astrozoderImage}
                            altText={'horoscope readings'}
                            liveLink={'https://asheth22.github.io/Astrozoders/'}
                            sourceCode={'https://github.com/bcrisp084/Astrozoders'}>
                            </Project>
                        </div>
                        <div className='row'>
                            <Project
                            thumbnail={TheguysfromworkImage}
                            altText={'A work team profile generator'}
                            liveLink={'https://drive.google.com/file/d/1qS7oJLLXi-K__ADWcDoJW3McZONAk5UD/view?usp=sharing'}
                            sourceCode={'https://github.com/bcrisp084/The-guys-from-work'}>
                            </Project>
                            <Project
                            thumbnail={weatherImage}
                            altText={'A weather app'}
                            liveLink={'https://bcrisp084.github.io/Should-i-bring-an-umbrella-/'}
                            sourceCode={'https://github.com/bcrisp084/Should-i-bring-an-umbrella-'}>
                            </Project>
                        </div>
                        <div className='row'>
                            <Project
                            thumbnail={dailyToDoImage}
                            altText={'A work day planner'}
                            liveLink={'https://bcrisp084.github.io/Daily-To-Do/'}
                            sourceCode={'https://github.com/bcrisp084/Daily-To-Do'}>
                            </Project>
                            <Project
                            thumbnail={budgetImage}
                            altText={'An expense tracker'}
                            liveLink={'https://peaceful-coast-09848.herokuapp.com/'}
                            sourceCode={'https://github.com/bcrisp084/Budget-Tracker'}>
                            </Project>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    )
};




export default Portfolio;