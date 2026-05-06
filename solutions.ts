// Problem 1

function filterEvenNumbers(numbers: number[]): number[]{
    return numbers.filter((number: number)=> number%2 ===0 && number);
}

// Problem 2

const reverseString = (reverseString: string): string => {
    let reversed: string = "";
    for(let i = reverseString.length -1; i>=0; i--){
        reversed+= reverseString[i]
    }
    return reversed;
}

// Problem 3
 type StringOrNumber  = string | number;

 const checkType = (input: StringOrNumber): "String" | "Number" =>{
    return typeof input === "string" ? "String" : "Number";
 }

//  Problem 4

const getProperty =<T,K extends keyof T>(object: T,key: K)=>{
    return object[key]; 
}

// Problem 5

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) =>{
    return  {...book, isRead: true}
}