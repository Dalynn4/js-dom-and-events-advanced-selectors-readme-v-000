// declare your functions here...
 function paragraphSelector() {
   const x = $('p')
   return x
 }
 
 function lastImageSelector() {
   const x = $('img:last')
   return x
 }
 
 function ninjaBabySelector() {
   return $('#baby-ninja')
 }
 
 function divSelector() {
   return $('div img:first_child') && $('div img:second_child')
 }