
const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometow?: string; // hometow es optional string or undifined no es necesario que aparezca 
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometow = 'Rivendell';
console.table(strider);
export {};