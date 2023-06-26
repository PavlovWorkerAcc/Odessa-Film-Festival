import React from "react";

const Promo = ()=> {
    return(
        <div className="Promo_container">
            <div className="Promo_Content" >
                <div className="Promo_Text" data-aos="fade-right" data-aos-duration="1500">
                    <div className="Promo_Label">
                        <span className="Lable_Main">Погружайтесь у світ <span className="Lable_Colored">кінофестивалю</span> Одеси</span>
                    </div>
                    
                    <div className="Promo_Description">
                        <span className="Description_Main">
                            Насолоджуйтесь цими неймовірними кадрами з попереднього кінофестивалю. 
                            Погрузіться та відчуйте красу кіноарту і занирніть в цю магію кіно яка
                            розкривае емоційну атмосферу заходу та талантивих кіноматографістів з 
                            усього світу. 
                        </span>
                    </div>
                    
                </div>

                <div className="Promo_Video" data-aos="fade-in" data-aos-duration="1500">
                    <iframe width="650" height="390" src="https://www.youtube.com/embed/eFXJBU1GLmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}
export default Promo