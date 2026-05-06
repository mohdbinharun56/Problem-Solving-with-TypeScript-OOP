# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction
Using Typescript it's easier to check types of javaScript code. It's help to define error during compile time instead of runtime. If any of type we define in wrong then it losses the Typescripts main features.

This blog is dedicated to Type: any, unknown and narrowing: 

- Why any is 'type safety hole'
- why unknown is the type safer
- concept of type narrowing

---

## any: 
`any` is a type that Disable of type checking for a variable. It assign any value without restriction. like below the example: 

```ts
let value: any;

value = "hello";
value.toUpperCase(); // correct
value = 10;
value.toUpperCase(); // error in runtime
```

TypeScript will allow everything about 'any' type. Typescript does not stopped in the compile time because of 'any', it's allow the wrong code process and throw error during runtime. It's type unsafe for TypeScript.

any is called "type safety hole", becaause it is break the TypeScript safty system.

## unknown:

unknown is a safer type alternative to type any. It allow any value, but forces to type checking before using it. 

```ts
let value: unknown = "Mr. Bin";

value.toUpperCase(); // error
```

Error-> Because, this needs to check type first then it will acceptence the using.

```ts

let value: unknown = "Mr. Bin";
if(typeof value === "string") value.toUpperCase(); // Safe
```

## narrowing

Type narrowing-> To specify the exact type of a specific variable/object/class type. There are some kinds of using Type narrowing: typeof, in, instanceof.

- typeof: TypeScript has union type/Literal. So, That(type) cannot accept multiple types in once call. it has to be precised with single type. using 'typeof' that can be easily check the type whether type it is. example:

```ts
type TValue = string | number;

const print = (value: TValue) => {return value.toUpperCase()} // error


```

TypeScript needs to check it is string | number value. 
```ts

const print = (value: TValue) => {
    if(typeof value === "string") return value.toUpperCase();
    else return value.toFixed(2);
}
```
- in: This operator used to check if a property exist in object

```ts
type Dog = { bark: string };
type Cat = { meow: string };

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark; // Dog
  } else {
    animal.meow; // Cat
  }
}
```
- instanceof: used to check class instance

```ts
class Car {
  drive() {}
}

class Bike {
  ride() {}
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}
```

## Conclusion
In conclusion, avoiding any type, preffering unknown type, and applying type narrowing for ensures safety type.