export const getDateString = (date) => {
    // const date = new Date();
    date.setHours(date.getHours() - (date.getTimezoneOffset() / 60));
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;
}

export const getCurrentDateWithOffset = () => {
    const date = new Date();
    date.setHours(date.getHours() - (date.getTimezoneOffset() / 60));
    return date;
}