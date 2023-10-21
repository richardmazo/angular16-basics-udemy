function classDecorator<T extends { new (...args:any[]): {}}>(constructor: T) {
    return class extends constructor{
        newProperty = "New Property";
        hello = "override";
    }
}

@classDecorator
class SuperClass{
    public myProperty: string = 'Abc12';

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);



export{};