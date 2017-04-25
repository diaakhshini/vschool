var sum = function(a, b) {
    return (a + b)
}
var largest = function(c, d, e) {
    if (c < d && d < e ) {
        return e
    } else if (c < d && e < d ) {
        return d
    } else if (d < c && c < e ) {
        return e
    } else if (d < c && e < c) {
        return c 
    } esle if (e < c && c < d) {
        return d
    } else if (e < c && d < c){
        return  c
    }
        
 };
