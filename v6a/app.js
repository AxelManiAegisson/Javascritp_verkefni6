//sæki slider
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
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
const result = people.filter(skor => word.skor >= slider.range.min && word.skor <= slider.range.max)