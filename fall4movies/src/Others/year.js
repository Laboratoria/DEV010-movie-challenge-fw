function year(fullDate){
    const newDate = new Date(fullDate);
    const result = newDate.getFullYear();

    return result
}

export default year;
