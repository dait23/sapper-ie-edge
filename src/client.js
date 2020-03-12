import * as sapper from '@sapper/app';
import Api from '@beyonk/sapper-httpclient'


console.log("=============================== Testing Javascript For IE")

console.log(Symbol('abc').toString());

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log('material ' + materials.map(material => material.length));
console.log("=============================== Testing Javascript For IE")
Api.configure({
	baseUrl: 'https://example.com'
})

sapper.start({
	target: document.querySelector('#sapper')
});