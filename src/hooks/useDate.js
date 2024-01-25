import { useState, useEffect } from "react";

const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
            return () => {
                clearInterval(timer);
            }
    }, []);
    const day = today.toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`;
    const hours = today.getHours();
    const wish = `Good ${(hours < 12 && 'Morning') || (hours < 17 && 'Afternoon') || 'Evening'}`;
    const time = today.toLocaleTimeString(locale, {hour: 'numeric', hour12: true, minute: 'numeric'});

    return [date, time, wish]
}

export default useDate