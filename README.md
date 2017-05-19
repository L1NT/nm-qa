# nm-qa

## Code Challenge:

Write a function or program that takes as its input a string and prints “This is a Pangram” value if the string is a pangram (a sequence of letters containing at least one of each letter in the English alphabet) and list of missing character value otherwise.

Case of letters should be ignored; If the string is abcdefghijklmnopqrstuvwXYZ, then the function should still return “This is Pangram”. Note that the string can contain any other characters in it, so 123abcdefghijklm NOPQRSTUVWXYZ321 would return a “This is a Pangram”. An empty input should return all the missing characters

Also, if time permits I would like to see unit test around this code.

Unit test should cover positive as well as negative test cases.

## Prerequisites:
- node > v7.10.0
- npm > 4.2.0

## Installation & Testing:
```
$ git clone https://github.com/L1NT/nm-qa.git
$ cd nm-qa
$ npm install
$ npm test
```

## CLI Usage:
```
node pangram.js "[string]"
```
