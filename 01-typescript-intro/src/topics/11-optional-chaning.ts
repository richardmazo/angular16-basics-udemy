export interface Passenger {
    name: string;
    children?: string[]; 
}

const passenger1: Passenger = {
    name: 'Richard',
}

const passenger2: Passenger = {
    name: 'Richard',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length; // signo de exclamación: significa Not null assertion operator
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);
