import React from "react";
import aboutphoto from "../../img/about.png"

const About = () => {
    return (
        <div className="About_Container">
            <div className="About_Content">
                <div className="About_Photo" data-aos="fade-in" data-aos-offset="100" data-aos-duration="1500">
                    <img src={aboutphoto} alt="About_logo" />
                </div>

                <div className="About_Text" data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500">

                   <div className="About_Label">
                        <span>
                            Про Фестиваль
                        </span>
                    </div>

                    <div className="About_Description">
                        
                        <p>Одеський міжнародний кінофестиваль — один із найбільших глядацьких кінофестивалів у Східній Європі, який щорічно проходить у кінематографічній столиці України – місті Одеса.</p>

                        <p>ОМКФ був створений у 2010 році задля популяризації якісного інтелектуального кіно серед українських глядачів, а також з метою підтримки та розвитку українського кінематографа у країні та за кордоном. За роки існування фестивалю вдалося стати найяскравішою кіноподією літа в Україні, а також міцно закріпитися на світовій кіномапі.</p>
                    
                    </div>

                    <div className="About_Btn">
                        <button>
                            Більше
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About