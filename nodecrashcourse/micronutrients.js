class Supplement
{
	constructor(description, price, servings, monthlyServingsNeed)
	{
		this.description = description;
		this.price = price;
		this.servings = servings;
		this.monthlyServingsNeed = monthlyServingsNeed;
	}

	getPricePerServing () { 
		return((this.price / this.servings).toFixed(2)+"€");
		};
}

module.exports = Supplement;