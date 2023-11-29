function getYear(fullDate){
    const newDate = new Date(fullDate);
    const result = newDate.getFullYear();

    return result
}

export default getYear;
