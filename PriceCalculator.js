/**
 * DatePrice class
 * @class
 * @classdesc - Represents a selected date and price
 * @property {Date} d - The date to be stored
 * @property {number} p - the price for that date
 * @constructor
 * @param {Date} d - The date entered
 */
class DatePrice {
    constructor(d){ //d - string date
        this.d = d; //this.d - property of date time
        this.p = this.GetPrice(); //this.p - property of number type

    }    
    /**
     * @function GetPrice
     * @returns - The price for the selected date
     * @description Calculates the price for a selected date
     */
    GetPrice(){
        if(this.d.getMonth() >= 5 && this.d.getMonth() <= 7){
            return 200;
        }
        else if(this.d.getMonth() >= 1 && this.d.getMonth() <= 4){
            return 220;
        }
        else if(this.d.getMonth() == 0){
            return 250;
        }
        else if(this.d.getMonth() == 11 && this.d.getDate() >= 19){
            return 250;
        }
    }
}

var selectedDates = new Array();
/**
 * @function CompareDate
 * @param {DatePrice} datePrice1 - Date to be compared
 * @param {DatePrice} datePrice2 - Date to be compared against
 * @returns - Which date is larger
 * @description Used for sorting the selectedDates array.
 */
function CompareDate(datePrice1, datePrice2) {
    const date1 = datePrice1.d;
    const date2 = datePrice2.d;

    let comparison = 0;
    if(date1 > date2){
        comparison = 1; 
    }
    else if (date1 < date2){
        comparison = -1;
    }
    return comparison;
}
/**
 * @function AddDate 
 * @description Activated when the add date button is clicked in Pricing.html.
 * First checks if the date not invalid (1st Sep to 18th Dec).
 * If date is valid it will add a new DatePrice object to selectedDates.
 */
function AddDate(){
    var newDate = new Date(document.getElementById("dates").value);
    if (newDate.getMonth() >= 8 && newDate.getMonth() <= 10){
        document.getElementById("message").innerHTML = "Can not add date between 1st September and 18th December";
    }
    else if(newDate.getMonth() == 11 && newDate.getDate() <= 18){
        document.getElementById("message").innerHTML = "Can not add date between 1st September and 18th December";
    }
    else{
        var addDate =  new DatePrice(newDate);
        selectedDates.push(addDate);
        document.getElementById("message").innerHTML = "";
        selectedDates.sort(CompareDate);
    }
    
}
/**
 * @function binarySearch
 * @param {Date} value - The date to be searched for
 * @param {Array} list - The selectedDates array to be searched through
 * @returns The position of the value parameter in the array.
 * @description Performs binary search on the selected dates array to find the postion of the entered date
 */
function binarySearch(value, list) { //value = date to find, list = selectedDates
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle].d.getTime() == value.getTime()) {
            found = true;
            position = middle;
        } 
        else if (list[middle].d > value) {  //if in lower half
            last = middle - 1;
        } 
        else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

/**
 * @function RemoveDate
 * @description Activated when the remove date button is clicked in Pricing.html
 *  First calls the binarySearch function to find position of selected date in the array.
 *  Updates the displayed total price and removes the selected DatePrice object from selectedDates
 */
function RemoveDate() {
    selectedDates.sort(CompareDate);
    //reduce total
    var currentTotal = document.getElementById("price").innerHTML;
    var deleteDate = new Date(Date.parse(document.getElementById("selectedDates").value));
    var indexOfDate = binarySearch(deleteDate, selectedDates);
    var currentObjPrice = selectedDates[indexOfDate].p;
    currentTotal -= currentObjPrice;
    document.getElementById("price").innerHTML = currentTotal;
    //remove from array
    selectedDates.splice(indexOfDate, 1);
    document.getElementById("selectedDates").remove(indexOfDate);
    selectedDates.sort(CompareDate);
}

/**
 * @function DisplayDateArray
 * @description Activated when Show Price button is clicked in Pricing.html
 *  Adds the dates stored in selectedDates to the dropdown menu
 *  Displays the total price of the selected dates.
 */
function DisplayDateArray() {
    var total = 0;
    document.getElementById("selectedDates").innerHTML = "";
    for(var i= 0; i < selectedDates.length; i++){
        
        total += selectedDates[i].p;
        var opt = document.createElement("option");
        var text = document.createTextNode(selectedDates[i].d);
        opt.appendChild(text);
        document.getElementById("selectedDates").appendChild(opt);
    }
    document.getElementById("price").innerHTML = total;

}