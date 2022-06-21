import './AutoTyping.css'
import { useState, useEffect } from 'react';
const AutoTyping = ({contenido}) => {
    useEffect(() => {
        typing()
    }, [])
    const [msg, setMsg] = useState('');
    const fullMsg = contenido;
    let aMsg = fullMsg.split('');
    let i = 0;
    let temp = '';
    const typing = () => {
        let int = setInterval(() => {
            if (i >= aMsg.length - 1) {
                clearInterval(int)
            }
            temp += aMsg[i];
            setMsg(temp)
            i++;
        }, 200)
    }
    return (
        <div className='cmp-AutoTyping-container'>
            {msg}
        </div>
    )
}
export default AutoTyping