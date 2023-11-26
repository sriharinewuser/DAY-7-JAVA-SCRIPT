//!counties from asia continent /region using filterfunction
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
    var asiancountries = result.filter(country => country.region === "Asian");
    result.map((ele)=>console.log(ele.name.common))
    
}
 //! filter and map country name with population less than 3 laks
 var request1 = new XMLHttpRequest();
 request1.open("GET","https://restcountries.com/v3.1/all",true)
 request1.send();
 request1.onload = function(){
     var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res1 = result1.filter((x)=>x.population<200000)
    res1.map((ele)=>console.log(ele.name.common))
 }

//! reduce total population
var request2 = new XMLHttpRequest();
 request2.open("GET","https://restcountries.com/v3.1/all",true)
 request2.send();
 request2.onload = function(){
     var data2 = request2.response;
    var result2 = JSON.parse(data2);
    var res2 = result2.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res2);
}

//filter function using name,flag,capital
var request3 = new XMLHttpRequest();
 request3.open("GET","https://restcountries.com/v3.1/all",true)
 request3.send();
 request3.onload = function(){
     var data3 = request3.response;
    var result3 = JSON.parse(data3);
    function printCountryDetails(countries) {
        countries.forEach(country => {
            console.log(`Name: ${country.name.common}`);
   console.log(`Capital: ${country.capital}`);
   console.log(`Flag: ${country.flags.png}`);
 });

}
 printCountryDetails(result3)

//!US Dollar as currency:-

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data4 = request4.response;
   var result4 = JSON.parse(data4);
  var currency = result4.filter((value)=> value.currencies && value.currencies.USD)
 currency.forEach((value)=>console.log(value.name.common))
}
}