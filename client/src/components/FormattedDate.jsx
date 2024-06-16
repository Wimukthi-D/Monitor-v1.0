import React from 'react';

const formatDate = () => {

    const date = new Date();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    // Function to get the ordinal suffix for the day of the month (e.g., 1st, 2nd, 3rd, 4th)
    const getOrdinalSuffix = (day) => {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

    return `${dayOfWeek}, ${dayOfMonth}${ordinalSuffix} ${monthOfYear} ${year}`;
};

const FormattedDate = ({ date }) => {
    const formattedDate = formatDate(date);

    return <div className='text-white text-xl font-space-mono'>{formattedDate}</div>;
};

export default FormattedDate;
