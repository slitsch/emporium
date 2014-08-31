/**
 * Created by Valued Customer on 8/29/2014.
 */


$(document).ready(function () {
//    get today's date
    var todaysDate = new Date();
    var today = todaysDate.getMonth() + 1 + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();
    $("#timing").html("Today's date is: " + today.toString());
// get the date in 16 days, when ready
    var day16 = new Date();
    var readyToDrink = day16.getDate() + 16;
    day16.setDate(readyToDrink);
    readyToDrink = day16.getMonth() + 1 + "/"+day16.getDate()+ "/" + day16.getFullYear();
    $("#ready").html("The CrabApple beverage will be ready: " + readyToDrink.toString());
});


