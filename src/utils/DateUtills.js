

// OUTPUT : Wed, Apr 26
export const getFormattedDate = (date) => {
    const dayObj = new Date(date);
    const options = {weekday: 'short', month: 'short', day:'numeric'};

    let formattedDateStr = dayObj.toLocaleDateString(dayObj, options);
    return formattedDateStr;
}

export const getSevenDayRange = () => {
    const nowObj = new Date();
    let nowStr = nowObj.toISOString().slice(0, 10);

    const nextSevenDayObj = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000);
    let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);

    return [nowStr, nextSevenDayStr];
};