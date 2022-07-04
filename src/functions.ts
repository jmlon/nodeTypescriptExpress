export function sumFunct(a: number, b:number) : number {
    return a+b;
}

export function listFunct() : number[] {
    return [1,2,3,4];
}

interface usertype {
    name: string;
    age: number;
    balance: bigint;
}

export function objectFunct() : usertype {
    return {
        name: 'foobar',
        age: 123,
        balance: 987654321n
    }
}

