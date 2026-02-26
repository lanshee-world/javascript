let distance = 1001
if(distance >= 0 && distance <= 100){
    console.log("Amount to pay is 5 USD")
}
else if(distance >= 101 && distance <= 500){
    console.log("Amount to pay is 10 USD")
}
else if(distance >= 501 && distance <= 1000){
    console.log("Amount to pay is 20 USD")
}
else {
    console.log("Amount to pay is 40 USD")
}