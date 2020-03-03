/*
Adapted from JavaScript Template Literals: JSON to HTML YOUTUBE ID is: DG4obitDvUA
*/

import {micronutriments} from './jsonArrayOfMicronutriments.js';
import {vitaminTemplate, getHumanizedProductLifetime } from './app.js';

// THE BODY and OVERALL STRUCTURE OF THE WEB PAGE
// AND INSIDE vitaminTemplate function TELLS how each supplements will be displayed

document.getElementById("app").innerHTML = `
	<h1 class="app-title"> Vitamins (${micronutriments.length}results)</h1>
	${micronutriments.map(vitaminTemplate).join('')}
	<p class="footer"> These ${micronutriments.length} vitamins were added recently. Check back soon for updates.</p>`


/*
	{
	  description: "Magnesium",
	  price: 12,
	  quantity: 500,
	  monthlyServingsNeed: 90, 
	  pricePerServing: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "amazon.co.uk",
	  photo: "https://images-na.ssl-images-amazon.com/images/I/61dRaF6xDML._SL1000_.jpg",
	},
*/