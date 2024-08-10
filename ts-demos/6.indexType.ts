function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }
  
  interface Person {
      name: string;
      age: number;
  }
  const person: Person = {
      name: 'Jarid',
      age: 35
  };
  const strings = pluck(person, ['name', 'age']); // ok, string[]

  console.log(strings);
//   [ 'Jarid', 35 ]