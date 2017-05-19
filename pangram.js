/**
 * Small self-executable module that provides a single function that tests a string
 * to determine whether or not it is a [pangram](https://en.wikipedia.org/wiki/Pangram).
 * @param  {string} str the string to test
 * @return {string}     the missing letters or the confirmation "This is a Pangram"
 */
function pangram(str) {
    let missing = 'abcdefghijklmnopqrstuvwxyz';
    if (typeof str === 'string') {
        for (let letter of str) {
            // let i = missing.indexOf(letter);
            // if (i > -1)
            // substring concatentation is ugly; so lets improvise a String.prototype.splice(start:number, deleteCount:number=1)
                missing = missing.split(letter).join('');
        }
    }
    return missing.length ? missing : 'This is a Pangram';
}

module.exports = {pangram: pangram};


// Python-style convention for self-running modules
if (process.argv[1] === __filename) {
    if (process.argv.length <= 2) {
        console.log("Usage: node " + __filename + " STRING");
        process.exit(-1);
    } else {
        console.log(pangram(process.argv[2]));
    }
}
