// npm global command . comes with node 
// npm version

//local dependency - use it only n this particular project 
//npm i <packagename>

//global dependency - use it in any package
//npm install -g <packageName>


// package.json - manifest file
// manual approach
//npm init (step by step , press enter to skip)
// npm init -y (default)

const _= require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);
