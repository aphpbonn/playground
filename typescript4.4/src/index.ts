function foo(arg: unknown) {
    if (typeof arg === "string") {
        // We know 'arg' is a string now.
        console.log(arg.toUpperCase());
    }
}

function bar(arg: unknown) {
    const argIsString = typeof arg === "string";
    if (argIsString) {
        console.log(arg.toUpperCase());
        //              ~~~~~~~~~~~
        // Error! Property 'toUpperCase' does not exist on type 'unknown'.
    }
}