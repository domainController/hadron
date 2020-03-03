
import {micronutriments} from './jsonArrayOfMicronutriments.js';

export function vitaminTemplate(vitamin) 
	{
		return `
		<div class="vitamin">
			<img class="vitamin-photo" src="${vitamin.photo}">
			<h2  class="vitamin-name">${vitamin.description}<span class="price"> (${vitamin.price}€)</span></h2>
			<p><strong>Expires: </strong>${getHumanizedProductLifetime(vitamin.servings)} (${getRawNextPurchaseDate(vitamin.servings)})</p>
			${variousCosts()}
		</div>
		` 
	};

export function getHumanizedProductLifetime(servings) // SAYS SOMETHING LIKE "in 6 months"
	{
		moment.relativeTimeThreshold('servings',30); // I dont even know if this line is working  !!
		return moment.duration(servings, "days").humanize(true);
	};

export function getRawNextPurchaseDate(servings) 
	{ 
		return moment().add(servings, 'days').calendar();
	};

export function getPricePerServing(price, servings) 		
	{  
		return((price/servings).toFixed(2)+"€");
	};

export function getMonthlyCost(price, servings,monthlyServingsNeed) 
	{
		return ((((price /servings) * monthlyServingsNeed).toFixed(2))+"€");
	};

export function variousCosts()
	{
		return`
			<h4> Various Costs </h4>
			<ul class="costs-list">
				<li>Price per Serving: ${getPricePerServing()}</li>
				<li>Cost per Month: ${getMonthlyCost()} </li>
				<li>Represents  X% of the vitamin budget</li>
			</ul>
		`
	}
/*

export function getNiceNextPurchaseDate(servings) //CAN WE MAKE THIS WORK SOME WAY : "this.getRawNextPurchaseDate()"

	{ 
		let RawNextPurchaseDate = moment().add(servings, 'days').calendar();
		return moment new Date(RawNextPurchaseDate).format('DD MMM');
	};






export function humanizeProductLifetime()
	{
	   	moment.duration(${vitamin.productLifetime}, "months").humanize();
	};

*/
/*
	{
	  description: "Magnesium",
	  price: 12,
	  quantity: 500,
	  monthlyServingsNeed: 90, 
	  pricePerServings: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "amazon.co.uk",
	  photo: "https://images-na.ssl-images-amazon.com/images/I/61dRaF6xDML._SL1000_.jpg",
	},
*/