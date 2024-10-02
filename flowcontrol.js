const radius = 5 ; 
const PI = 3.1415 ;
const maxArea = PI * radius * radius

const minSpacePerPlant = 0.8
const startAreaPlantNum = 20 
const startArea = minSpacePerPlant * startAreaPlantNum ;

let areaOcuppiedWeek1 = startAreaPlantNum * 2 * 0.8 ;
 let plantNumWeek1 = startAreaPlantNum * 2 ;
 
    try {
        if (areaOcuppiedWeek1 > maxArea * 0.8)
        {
            throw"capacity is about to be exceeded at week 1 , plants supposed to be purned"
        }else{
            let plantNumWeek2 = plantNumWeek1 * 2
             let areaOcuppiedWeek2 = plantNumWeek2 * 0.8
             if(areaOcuppiedWeek2 > maxArea * 0.8){
                  throw`capacity is about to be exceeded at week 2 , plants supposed to be purned`
             }else {
                   let plantNumWeek3 = plantNumWeek2 * 2
                   let areaOcuppiedWeek3 = plantNumWeek3 * 0.8
                   if(areaOcuppiedWeek3 > maxArea * 0.8){
                         throw`capacity is about to be exceeded on week 3,
                         area occupied by plans is ${areaOcuppiedWeek3}
                         plants supposed to be purned`
                    }else {
                        console.log("continue")
                    }
             }
        }
    } catch (error) {
        console.log(error)
    }
 
let areaOcuppiedWeek2 = areaOcuppiedWeek1 *2 ; 



console.log(maxArea );

// Part 2: Thinking Bigger

// the amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

const startPlant = 100 ; 
const weeks = 10;

let numPlantWeek10 = 100 * 100 ;
let areaOccupiedInWeek10 = numPlantWeek10 * minSpacePerPlant;
let neededArea = areaOccupiedInWeek10 * 100/80 ;

console.log(`area needed for 100 plans in 10 weeks is  ${neededArea} square meters`)

// find radius 

let newradius =Math.sqrt (neededArea /PI) ;

 console.log(`Radius for the new area is ${newradius} meters`)