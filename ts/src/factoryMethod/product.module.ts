import { Creator } from "./abstract";
import { ConcreteCreator1 } from "./concreteCreator1";
import { ConcreteCreator2 } from "./concreteCreator2";

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
export function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
export function implementFactoryProduct() {
    console.log('App: Launched with the ConcreteCreator1.');
    clientCode(new ConcreteCreator1());
    console.log('');
    
    console.log('App: Launched with the ConcreteCreator2.');
    clientCode(new ConcreteCreator2());
}
