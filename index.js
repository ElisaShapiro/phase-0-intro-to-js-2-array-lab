const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
    return cats.push('Ralph');
}
cats;
function destructivelyPrependCat(name) {
    return cats.unshift('Bob');
}
cats;
function destructivelyRemoveLastCat(name) {
    return cats.pop('Garfield');
}
cats;
function destructivelyRemoveFirstCat(name) {
    return cats.shift('Milo');
}
function appendCat(name) {
    const copyOfCats = [...cats, 'Broom'];
    return copyOfCats;
}
copyOfCats;
function prependCat(name) {
    const copyOfCats = ['Arnold', ...cats];
    return copyOfCats;
}
function removeLastCat(name) {
    return cats.slice(0, cats.length-1);
}
cats;
function removeFirstCat(name) {
    return cats.slice(1);
}
cats;