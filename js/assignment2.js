function description (obj) {
	var med_age = obj['age'];
	var city_name = obj['city'];

	console.log('The median age in %s is %s', city_name, med_age);
}

console.log('Data contains %s objects.', data.length);

console.log('The fourth item is %o.', data[3]);

var city_names = data.map(function(obj){
	return obj['city_names']
});

var populations = data.map(function(obj){
	return obj['pop']
});

data.sort(function(a, b){
	return a['age'] - b['age']
});

console.log('The youngest city is %s.', data[0]['city']);
console.log('The oldest city is %s.', data[data.length-1]['city']);

description(data[0]);

var male_cities = data.filter(function(obj){
	return obj['males'] > obj['females']
});

console.log('There are %s cities with more males than females.', male_cities.length);

