import React from "react";
import photo from "../../img/banner.png"

const Banner = () => {
    return(
        <div className="Banner_Container">
            <div className="Banner_Content">
                <div className="Banner_Text" data-aos="fade-right" data-aos-offset="1"  data-aos-duration="2000">
                    <div className="Banner_Label">
                        <span>Головний фестиваль національного кіно </span>
                    </div>

                    <div className="Banner_UnderText">
                        <span>Уcі найкращі роботи українського кінематографа в одному місці</span>
                    </div>

                    <div className="Banner_Btns">
                        <button className="Btn_Promo">Промо</button>
                        <button className="Btn_News">Новини</button>
                    </div>
                </div>

                <div className="Banner_Photo" data-aos="fade-in" data-aos-offset="1"  data-aos-duration="2000">
                    <img src={photo}alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner