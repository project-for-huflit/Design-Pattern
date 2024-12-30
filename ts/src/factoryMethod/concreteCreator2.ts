import { Creator } from "./abstract";
import { ConcreteProduct2 } from "./concreteProduct2";
import { Product } from "./interfaces";

export class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}