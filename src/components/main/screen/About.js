import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { datas } from './elements/aboutdatas';
import AboutCard from './elements/AboutCard';

const currentYear = new Date().getFullYear();
const examTime = new Date(`August 01 ${currentYear} 00:00:00`);

function About() {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minut, setMinut] = useState(0);
    const [second, setSecond] = useState(0);

    function updateCountdown() {
        const currentTime = new Date();
        const diff = examTime - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        setDay(d);
        setHour(h);
        setMinut(m);
        setSecond(s);
    }

    setInterval(updateCountdown, 1000);

    return (
        <Container>
            <AboutPageMain>
                <MainLeft>
                    <Fade bottom>
                        <h1>Talaba bo'lmoqchimisan!</h1>
                    </Fade>
                    <div>
                        <p>Biz bilan doimiy harakatda bo'l. ortga qaytish yo'q. harakat qilishda davom et!</p>
                        <a href='#about'><Button variant='success'>About us</Button></a>
                    </div>
                    <Fade left>
                        <TimeContainer>
                            <h2>Time Remeining to Exam</h2>
                            <div>
                                <section>
                                    <h2>{day}</h2>
                                    <small>days</small>
                                </section>
                                <section>
                                    <h2>{hour}</h2>
                                    <small>hours</small>
                                </section>
                                <section>
                                    <h2>{minut}</h2>
                                    <small>minutes</small>
                                </section>
                                <section>
                                    <h2>{second}</h2>
                                    <small>seconds</small>
                                </section>
                            </div>
                        </TimeContainer>
                    </Fade>
                </MainLeft>
                <MainRight>
                    <Zoom clear>
                        <img src='images/girl.svg' alt='no' />
                    </Zoom>
                </MainRight>
            </AboutPageMain>
            <AboutPageSection id='about'>
                <Fade bottom><h1>Bizning kurslarimiz</h1></Fade>
                <Fade bottom>
                    <CardBox>
                        {
                            datas.map(items => {
                                return (
                                    <AboutCard key={items.id} name={items.name} imgUrl={items.imgUrl} aboutCourse={items.aboutCourse} />
                                )
                            })
                        }
                    </CardBox>
                </Fade>
            </AboutPageSection>
            <Location>
                <h1>Location</h1>
                <MapContainer>
                    <MapBox>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4351790902032!2d67.83550784964655!3d40.12814603945503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2950b51f4c49d%3A0xb13ee8dbcad1e1d2!2sDavlat%20test%20markazi%20Jizzax%20viloyati%20bo&#39;limi!5e1!3m2!1sen!2s!4v1625394666371!5m2!1sen!2s" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" title='teem'></iframe>
                    </MapBox>
                    <TextBox>
                        <h1>We work all over the country</h1>
                        <h2>Jizzakh</h2>
                        <h3>Jizzakh, Sharaf Rashidov street, lycem Politex 2nd floor</h3>
                    </TextBox>
                </MapContainer>
            </Location>
        </Container>
    )
}

export default About;

const Container = styled.div`
    padding: 0 30px;
    width: 100%;
    background-color: rgb(33,37,41);
`;

const AboutPageMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgb(33,37,41);
    /* padding: 0 30px; */
    display: flex;
    justify-content: space-between;
    @media (max-width:768px){
        flex-direction: column;
        align-items: center;
    }
`

const MainLeft = styled.div`
    width: 600px;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    h1{
        margin: 80px 0;
        font-weight: 700;
        color: #fff;
        font-size: 48px;
    }
    @media (max-width:768px) and (min-width: 480px){
        width:500px;
        font-size: 18px;
        text-align: center;
        h1{
            margin: 50px 0;
            font-weight: 500;
            font-size: 32px;
        }
    }
    @media (max-width:480px){
        width: 320px;
        font-size: 16px;
        text-align: center;
        h1{
            margin: 40px 0;
            font-weight: 500;
            font-size: 32px;
        }
    }
`
const MainRight = styled.div`
    width: 600px;
    margin: auto;
    img{
        width: 100%;
    }
    @media (max-width:768px) and (min-width:480px){
        width: 500px;
    }
    @media (max-width:480px) {
        width: 320px;
    }
`

const AboutPageSection = styled.div`
    width: 100%;
    background-color: rgb(33,37,41);
    h1{
        color: #fff;
        text-align: center;
        margin: 14px 0;
    }
    @media (max-width:480px){
        h1{
            font-size: 24px;
        }
    }
`

const CardBox = styled.div`
    padding:  0 100px;                          
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width:768px){
        padding: 0;
    }
`;

const TimeContainer = styled.div`
    width: 100%;
    text-align:center;
    margin-top: 20px;
    div{
        margin-top: 48px;
        display: flex;
        justify-content: space-around;
        section{
            h2{
                color: yellow;
            }
            small{
                color:red;
            }
        }
    }
`
const Location = styled.div`
    width: 100%;
    background-color: rgb(33,37,41);
    min-height: 100vh;
    &>h1{
        margin:30px 0;
        letter-spacing: 2px;
        color: #fff;
        font-size: 48px;
        font-weight: 700;
    }
`

const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width:768px){
        flex-direction: column;
        justify-content: space-between;
    }
`

const MapBox = styled.div`
    width: 600px;
    border-radius: 10px;
    iframe{
        width: 100%;
    }
    @media (max-width:768px) and (min-width:480px){
        width: 500px;
        margin: 0 auto 20px;
        iframe{
            height: 360px;
        }
    }
    @media (max-width:480px) {
        width: 320px;
        margin: 0 auto 20px;
         iframe{
            height: 300px;
        }
    }
`

const TextBox = styled.div`
    width: 600px;
    margin: auto 0;
    color: #fff;
    h1{
        font-weight: 600;
        margin-bottom: 40px;
    }
    h2{
        margin-bottom:20px;
        font-weight: 600;
    }
    @media (max-width:768px) and (min-width:480px){
        width: 500px;
    }
    @media (max-width:480px) {
        width: 320px;
        h1{
            font-weight: 500;
            margin-bottom: 20px;
        }
        h2{
            margin-bottom:12px;
            font-weight: 500;
        }
    }
`