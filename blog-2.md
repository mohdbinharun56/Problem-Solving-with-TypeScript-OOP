# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction
Pick and Omit utility types prevent code duplication in TypeScript by allowing interface without rewriting properties. This support the DRY (Don't Repeat Yourself) principles and make code easier to maintain. 

## What is Pick?
Pick<T,K> create a new type by selecting specific property from an existing interface.

### Example

```ts

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserProfile = Pick<User,"id" | "name" | "email">;

```

### Result 
```ts

type UserProfile = {
    id: number;
    name: string;
    email: string;
}
```

Instead of rewriting the same properties again, Using Pick that reusable the selecting specific property from an existing interface.



## What is Omit?
Omit<T,K> create a new type by removing a specific property from an existing interface.

### Example

```ts

interface User{
    id: number;
    name: string;
    email: string: 
    password: string;
}

type PublicUser = Omit<User, "password">
```

### Result 

```ts
type PubicUser = {
    id: number;
    name: string;
    email: string;
}
```

Pick and Omit are used to remove duplication of code to specifying properties from existing interface to create new type.

## DRY (Don't Repeat Yourself)
DRY principles maintain structure of not repeating code. Pick and Omit are example of DRY principles, That don't repeat code creates type from existing interface for specific properties.

## Conclusion
Pick and Omit help to create a reusable versions of interface without duplicating of code. And it follows to keep DRY, and easier to maintainable.