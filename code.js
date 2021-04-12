$(document).ready(function () {
    $("button").on("click", calculate)
});

function calculate()
{
    let beersCon = $("#alc-beer").val();

    let wineCon = $("#alc-wine").val();

    let shotsCon = $("#alc-shots").val();

    let weight = $("#weight-pounds").val();

    let hsld = $("#hsld").val();

    /* 1 beer = 0.54 liquid ounces of alcohol
    1 glass of wine = 0.6 liquid ounces of alcohol
    1 shot = 0.6 liquid ounces of alcohol
    If someone drank 2 beers, their total liquid ounces is 2 * 0.54
    If someone drank 1 beer and 1 glass of wine, their total liquid ounces is 0.54 + 0.6
     */

    let beerAlc = beersCon * 0.54;

    let wineAlc = wineCon * 0.6;

    let shotsAlc = shotsCon * 0.6;

   /* Multiply the result of step 1 by 7.5, which is the average alcohol absorption rate
    Divide the result of step 2 by the person's weight (in pounds) to determine their BAC
    From the result of step 3, subtract 0.015 for each hour since their first drink
    For example, if the person's first drink was 3 hours ago, subtract (3 * 0.015)
    Round the result of step 4 to three decimal places
    For example, 0.080%
    */

    let totalAlc = beerAlc + wineAlc + shotsAlc;

    let absRate = totalAlc * 7.5;

    let preTimeBAC = absRate / weight;

    let bAC = preTimeBAC - (hsld * 0.015);

    $("p#bAC").text(bAC.toFixed(3));
}