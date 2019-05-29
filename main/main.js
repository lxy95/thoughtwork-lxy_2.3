module.exports = function main(inputs) {
    // write your code here...
    var d = inputs["distance"];
    var t = inputs["parkTime"];
    var p = 6 + 0.25 * t;
    if(d > 8) 
        //p = 6 + 0.25t + 0.8*6 + 0.8*(1+0.5)*(d-8)
        p += 4.8+1.2*(d-8);
    else if(d>2)
        p += 0.8*(d-2);
    return Number(p.toFixed());
};
