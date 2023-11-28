function year(fullDate){
    var fecha = new Date(fullDate);
    var result = fecha.getFullYear();

    return result
}

export default year;