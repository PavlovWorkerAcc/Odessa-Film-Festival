import React , {useState} from "react";


const Parthners = () => {
    const [parthners , setParthners] = useState([
        {
            name: "Таксобанк",
            logo: "Tac.png",
            link: "https://tascombank.ua/",
        },
        {
            name: "Телеканал Україна",
            logo: "Ukraina.png",
            link: "https://kanalukraina.tv/news/zayava-rinata-ahmetova-shchodo-aktiviv-media-grupa-ukrajina",
        },
        {
            name: "Izibank",
            logo: "Izi.png",
            link: "https://izibank.com.ua/",
        },
        {
            name: "Ararat",
            logo: "Ararat.png",
            link: "https://ru.araratbrandy.com/",
        },
        {
            name: "Mastercard",
            logo: "Mastercard.png",
            link: "https://www.mastercard.ua/uk-ua.html",
        },
        {
            name: "Одеській Комітет",
            logo: "Comit.png",
            link: "https://omr.gov.ua/ua/city/committee/",
        },
        {
            name: "Одеська Адміністрація",
            logo: "Admin.png",
            link: "https://oda.od.gov.ua/",
        },
        {
            name: "ДАУзПК",
            logo: "DAU.png",
            link: "https://usfa.gov.ua/",
        },
        {
            name: "Uklon",
            logo: "Uklon.png",
            link: "https://uklon.com.ua/ru/",
        },
        {
            name: "Star Media",
            logo: "Star.png",
            link: "https://starmedia.ua/",
        },
        {
            name: "УКФ",
            logo: "UKF.png",
            link: "https://ucf.in.ua/",
        },
        {
            name: "МА",
            logo: "MA.png",
            link: "https://artarsenal.in.ua/",
        },
        {
            name: "Audi",
            logo: "Audi.png",
            link: "https://www.audi.ua/ua",
        },
        {
            name: "Symbol",
            logo: "Symbol.png",
            link: "https://symbol.ua/",
        },
        {
            name: "Xiaomi",
            logo: "Xiaomi.png",
            link: "https://www.mi.com/ua",
        },
        {
            name: "Діла",
            logo: "Dila.png",
            link: "https://dila.ua/",
        }
    ])

    return(
        <div className="Parthners_Container">

            <div className="Parthners_Content">

                <div className="Label">
                    <span>Партнери</span>
                </div>

                <div className="Main_Content">

                    {parthners.map((el) => (

                    <a href={el.link}>

                        <div className="logo_name">
                           
                            <img src={`./img/${el.logo}`}/>
                        
                            <span>{el.name}</span>
                                
                        </div>
                    </a>
                    ))}

                </div>
                
            </div>
            
        </div>
    )
}
export default Parthners
