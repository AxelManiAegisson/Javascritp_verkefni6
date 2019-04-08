//sæki slider
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': [0],
        'max': [100]
    }

});
//gögn í array
var people = [
	{
		name: 'Axel',
		skor: 50
	},
	{
		name: 'Palli',
		skor: 75
	},
	{
		name: 'Kalli',
		skor: 25
	},
	{
		name: 'Stína',
		skor: 100
	},
		{
		name: 'Konni',
		skor: 1
	}
];

//filter
function inRange(value) {
  
  return value.skor >= slider.noUiSlider.get()[0] && value.skor <= slider.noUiSlider.get()[1];
}
//uppfærir input tagið
var minCostInput = document.getElementById('value-min'),
	maxCostInput = document.getElementById('value-max');

slider.noUiSlider.on('update', function( values, handle ) {
	if ( handle ) {
		maxCostInput.value = values[handle];
	} else {
		minCostInput.value = values[handle];
	}
});
function doSomething(values, handle, unencoded, tap, positions) {

	//birtir gögn sem lista 
	var result = people.filter(inRange);  
	var list = document.getElementById("list");
	while (list.hasChildNodes()) {   
		list.removeChild(list.firstChild);
	}
	document.getElementById('list').appendChild(makeUl(result));
	}

slider.noUiSlider.on('set', doSomething);

function makeUl(array){	
	let list = document.createElement('ul');
	array.forEach(function (i)
	{		
		let item = document.createElement('li');
		
		item.appendChild(document.createTextNode(i.name));

        list.appendChild(item);
    });

    return list;
}