

function addNumber(a: number, b: number) {
    return a + b;
}

const addNumberArrow = (a:number, b:number):string => {
    return `${a + b}`;
};

function multiple (firsnumber: number, second?:number, base:number = 2) {
    return firsnumber * base;
}


//const result2 = addNumberArrow(4, 5);
//const result = addNumber(1, 2);
//const multiplyResult:number = multiple(5);
//console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp:number;
    showHp: ()=> void;
}
const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Punto de vida ${this.hp}`);
    }
}
healCharacter(strider, 80);
strider.showHp();
export {};