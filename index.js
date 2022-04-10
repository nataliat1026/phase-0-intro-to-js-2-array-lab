const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = (name) => cats.pop(name);

const destructivelyRemoveFirstCat = (name) => cats.shift(name);

const appendCat = (name) => [...cats, name];

const prependCat = (name) => [name, ...cats];

const removeLastCat = () => cats.slice(0, -1);

const removeFirstCat = () => cats.slice(1);