import * as readline from 'readline';
//Creating My WAVE for my player.
interface wave {
     fuel: number; 
     health: number;
     principalResource: number;
     energy : number;
}

let myOwnWave : wave = {
    health : 100,
    fuel : 100,
    energy : 100,
    principalResource : 0
}

//Creating a class for planets
class Planets {
    constructor(public name: string, public resources:Resources, public dangerousLevel: DangerousLevel, public goalResource : number) {}
}

//Kind of resources that can help to our wave
enum Resources {
    Health = 'Venus.',
    Fuel = 'Jupiter', 
    Energy = 'Plutonium',
}

//Creating properties with enums:
enum DangerousLevel { 
    Low =  '100xp',
    Medium = '200xp',
    Titan= '300xp'
   }
   //Creating my planets
let northPlanet : Planets = {name : "Platerum", resources :Resources.Health, dangerousLevel : DangerousLevel.Low, goalResource : 25}
let southPlanet: Planets = {name : "frankieLand", resources: Resources.Energy, dangerousLevel : DangerousLevel.Medium, goalResource : 25}
let eastPlanet : Planets = { name : 'WolfWang', resources : Resources.Fuel, dangerousLevel : DangerousLevel.Low, goalResource : 25}
let westPlanet : Planets = {name : 'Kanye', resources : Resources.Energy, dangerousLevel: DangerousLevel.Titan, goalResource : 25}

//Establishing Events 
class events {
    constructor (public eventName : string, public eventDescription : string, public usageResource : number) {}
}

//Creating Events
let northEvent : events = {
    eventName : 'Pegasus is here',
    eventDescription : 'Platerum planet is near to be destroyed. Help this planet and you can get an achievment and that special resource!',
    usageResource : 10
}

let southEvent : events = {
    eventName : 'frankieLand',
    eventDescription : 'frankieLand needs some human blood for live. They need your help',
    usageResource : 10
}

let eastEvent : events = {
    eventName : 'WolfWang',
    eventDescription : 'WolfWang is a interesting planet. They need some energy for their moon. Help them!',
    usageResource : 10
}
let westEvent : events = {
    eventName : 'Kanye',
    eventDescription : 'Kanye needs some fuel to get energy for their houses. Help them!',
    usageResource : 10
}



//functions of costs of traveling to other planets
let minusFuel = (a : number, b : number ) => {
    return a - b; 
}
let lessfuel = minusFuel(myOwnWave.fuel, northEvent.usageResource)

//adding the goal resource
let goalResource = (a: number, b: number) =>{
    a = a + b;
    return a;
}
//Good Resoults of exlporation
function addingResultstoWave (wave : wave){
    return wave.principalResource += 25;
}


// function of north resources

type location = 'north'| 'south'| 'east '| 'west';
interface Event {
    description : string;
    resource : Resources;
    principalResource : number;
}
//Generic to collect resources

function askingToUser ( ){
        
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Where do you want to go?: north, south, east, west:    ', (respuesta: string) => {
    let answer = respuesta.toLowerCase();
    if (answer =='north'){
        console.log('You have choosed the north');
        console.log('You are here in the North. This planet contains some material that are useful for you.')
        console.log(Found resource ${northPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel})
        console.log(northEvent);
        askingFirstEvent();
        



    } else if (answer == 'south') {
        console.log('You have choosed the south');
        console.log('You are here in the sOUTH. This planet contains some material that are useful for you.')
        console.log(Found resource ${southPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel})
        console.log(southEvent);
        
        askingSecondEvent();

    }else if (answer == 'east'){
        console.log('You have choosed the east');
        console.log('You are here in the sOUTH. This planet contains some material that are useful for you.')
        console.log(Found resource ${eastPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel})
        console.log(eastEvent);
        
        askingThirdEvent();
 
    } else if (answer = 'west'){
        console.log('You have choosed the east');
        console.log('You are here in the east. This planet contains some material that are useful for you.')
        console.log(Found resource ${westPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel})
        console.log(westEvent);

        askingFourthEvent();
    }
    else { 
        console.log('Thats not an option. Choose it again')
        askingToUser();

    }

  });

}


//ASKING THE FIRST EVENT IN CONSOLE
function askingFirstEvent() {
    console.log('This planet needs you help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('To save this planet you need the result of this math problem that this planet could´nt solve. The problem is 2x + 4 = 6. What is the aswer?', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == '1'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Eterium. This mineral is special for the mission. You got:${ myOwnWave.principalResource}`)
            console.log('Go back to the start to explore other planets')
            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingFirstEvent();
        }
    
      });

}

//ASKING THE SECOND EVENT IN cONSOLE.

function substractingHealth(wave : wave): void {
    wave.health -= 30;
}
function askingSecondEvent() {
    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some of your health. The health is the add of 123098-123097', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == '1'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Eterium. This mineral is special for the mission. You got:${ myOwnWave.principalResource}`)
            console.log('You gave some help to this planet with your health.')
            substractingHealth(myOwnWave);
            console.log(Your actual health is ${myOwnWave.health})

            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });

}

//ASKING THIRD EVENT

function substractingEnergy(wave : wave): void {
    wave.energy -= 30;
}

function askingThirdEvent () {
    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some of your energy. The password is the add of the the three principal numbers from 1 to 10.', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == '6'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Eterium. This mineral is special for the mission. You got:${ myOwnWave.principalResource}`)
            console.log('You gave some help to this planet with your energy.')
            substractingEnergy(myOwnWave);
            console.log(Your actual ENERGY is ${myOwnWave.energy})

            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });


}
//ASKING FOURTH EVENT 

function substractingFuel(wave : wave): void {
    wave.fuel -= 30;
}

function askingFourthEvent(){

    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some of fuel. The answer to give a chance to save this planet for the hunters is the answer of this LOG7(49) = x', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == '2'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Eterium. This mineral is special for the mission. You got:${ myOwnWave.principalResource}`)
            console.log('You gave some help to this planet with your fuel')
            substractingEnergy(myOwnWave);
            console.log(Your actual FUEL is ${myOwnWave.fuel})
            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });


}
//welcome to game 
function welcome (){
    console.log('Welcome to INTERESTELLAR simulation. You are here to proove that you are prepared with all of yourself to save the world')
        console.log('Our exploration needs of your help to save a lost mineral in 4 planets')
        console.log('Explore them and save them. Good Luck!')
}


welcome();
askingToUser();