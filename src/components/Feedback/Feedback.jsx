import Notification from "../Notification/Notification"
import s from "./Feedback.module.css"
const Feddback = ({ markData, total, positive }) => {
    return (
        <>
            {total > 0 ?
                <ul className={s.list}>

                    <li className={s.text}><p >Good: <span>{markData.good}</span></p></li>
                    <li className={s.text}><p>Neutral: <span>{markData.neutral}</span></p></li>
                    <li className={s.text}><p>Bad: <span>{markData.bad}</span></p></li>
                    <li className={s.text}><p>Total: <span>{total}</span></p></li>
                    <li className={s.text}><p>Positive: <span>{total > 0 ? positive : 0}%</span></p></li>
                </ul> : <Notification />}

        </>
    )
}

export default Feddback