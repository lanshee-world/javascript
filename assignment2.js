let rate = 101000
if(rate <= 5999){
    console.log("monthly contribution:150.00" )
}
else if(rate >= 6000 && rate <= 7999){
    console.log("monthly contribution is 300.00")
}
else if(rate >= 8000 && rate <= 11999){
    console.log("monthly contribution is 400.00")
}
else if(rate >= 12000 && rate <= 14999){
    console.log("monthly contribution is 500.00")
}
else if(rate >= 15000 && rate <= 19999){
    console.log("monthly contribution is 600.00")
}
else if(rate >= 20000 && rate <= 24999){
    console.log("monthly contribution is 750.00")
}
else if(rate >= 25000 && rate <= 29999){
    console.log("monthly contribution is 850.00")
}
else if(rate >= 30000 && rate <= 49999){
    console.log("monthly contribution is 1,000.00")
}
else if(rate >= 50000 && rate <= 99999){
    console.log("monthly contribution is 1,500.00")
}
else{
    console.log("monthly contribution is 2,000.00")
}