const f = (...args: any[]) => {
    console.log(f)
    console.log(f.name)
    console.log('====================================');
    console.log(args);
    console.log('====================================');
}
f()