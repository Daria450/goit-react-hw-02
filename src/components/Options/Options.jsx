import s from "./Options.module.css"
import { useState } from 'react';
const Options = ({ hadleClick, handleReset, total }) => {

    return (
        <>
            <ul className={s.list}>
                <li><button onClick={() => hadleClick('good')} className={s.button}>Good</button></li>
                <li><button onClick={() => hadleClick('neutral')} className={s.button}>Neutral</button></li>
                <li><button onClick={() => hadleClick('bad')} className={s.button}>Bad</button></li>
                {total > 0 && (<li><button onClick={handleReset} className={s.button} >Reset</button></li>)}
            </ul>
        </>
    )
}

export default Options