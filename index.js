function str_multi_replace(texto, array_to, from){
    for(let to of array_to){
        texto = texto.split(to).join(from)
    }
    return texto;
}
module.exports = str_multi_replace;