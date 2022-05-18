import {Map, YMaps} from 'react-yandex-maps';
import {Card} from "react-bootstrap";
import './Contacts.scss';
import {AiOutlinePhone} from "react-icons/ai";
import {FiMapPin} from "react-icons/fi";
import {MdOutlineAlternateEmail} from "react-icons/md";
import contactsImg from '../../imgs/contacts.png';

function Contacts() {
    return (
        <section className="contacts-page">
            <div className="contacts-page_title">
                <h2>Наши контакты</h2>
            </div>
            <div className="contacts-page_main">
                <Card className="contacts-page_contacts">
                    <div className="phone item">
                        <AiOutlinePhone/>
                        +7 (978) 555-55-55
                    </div>
                    <div className="email item">
                        <MdOutlineAlternateEmail/>
                        education@mail.ru
                    </div>
                    <div className="address item">
                        <FiMapPin/>
                        просп. Академика Вернадского, 4, Симферополь
                    </div>
                    <div className="description">
                        <div className="description_title">
                            <p>График работы приемной комиссии:</p>
                        </div>
                        <p>пн–пт   09:00–20:00</p>
                        <p>сб-вс   09:00–20:00</p>
                    </div>
                    <div className="bg-image">
                        <img src={contactsImg} alt=""/>
                    </div>
                </Card>
                <Card className="contacts-page_map">
                    <YMaps>
                        <Map
                            width={'100%'}
                            height={'100%'}
                            defaultState={{ center: [44.936625091174285, 34.134192184707395], zoom: 13 }}
                        />
                    </YMaps>
                </Card>
            </div>
        </section>
    );
}

export default Contacts;