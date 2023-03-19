"use strict";
var WordDictionary = /** @class */ (function () {
    function WordDictionary() {
        this.data = {
            thereIsWord: false,
        };
    }
    WordDictionary.prototype.addWord = function (word) {
        var addPart = function (node, restWord) {
            if (restWord.length === 0) {
                node.thereIsWord = true;
                return;
            }
            var nextLeaf = node[restWord[0]] || { thereIsWord: false };
            node[restWord[0]] = nextLeaf;
            addPart(nextLeaf, restWord.slice(1));
        };
        addPart(this.data, word);
    };
    WordDictionary.prototype.search = function (word) {
        var searchPart = function (node, restWord) {
            if (restWord.length === 0) {
                return node.thereIsWord;
            }
            if (restWord[0] == ".") {
                return !!Object.values(node).find(function (el) {
                    return searchPart(el, restWord.slice(1));
                });
            }
            return (!!node[restWord[0]] && searchPart(node[restWord[0]], restWord.slice(1)));
        };
        return searchPart(this.data, word);
    };
    return WordDictionary;
}());
var wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad"), ". Expected ", false); // return False
console.log(wordDictionary.search("bad"), ". Expected ", true); // return True
console.log(wordDictionary.search(".ad"), ". Expected ", true); // return True
console.log(wordDictionary.search("b.."), ". Expected ", true); // return True
