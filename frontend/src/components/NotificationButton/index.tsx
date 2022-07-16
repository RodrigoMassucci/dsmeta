import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleid: number;
}

function handledClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {

        });
}

function NotificationButton({ saleid }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handledClick(saleid)}>
            <img src={icon} alt="Notificar" />
        </div>


    )
}

export default NotificationButton;