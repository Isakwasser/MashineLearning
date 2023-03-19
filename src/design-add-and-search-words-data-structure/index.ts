type Data = {
  thereIsWord: boolean;
  [x: string]: any;
};

class WordDictionary {
  data: Data;
  constructor() {
    this.data = {
      thereIsWord: false,
    };
  }

  addWord(word: string): void {
    const addPart = (node: Data, restWord: string) => {
      if (restWord.length === 0) {
        node.thereIsWord = true;
        return;
      }
      const nextLeaf: Data = node[restWord[0]] || {thereIsWord: false};
      node[restWord[0]] = nextLeaf;
      addPart(nextLeaf, restWord.slice(1));
    };

    addPart(this.data, word);
  }

  search(word: string): boolean {
    const searchPart = (node: Data, restWord: string): boolean => {
      if (restWord.length === 0) {
        return node.thereIsWord;
      }
      if (restWord[0] == ".") {
        return !!Object.values(node).find((el) =>
          searchPart(el, restWord.slice(1))
        );
      }
      return (
        !!node[restWord[0]] && searchPart(node[restWord[0]], restWord.slice(1))
      );
    };

    return searchPart(this.data, word);
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search("pad"), ". Expected ", false); // return False
console.log(wordDictionary.search("bad"), ". Expected ", true); // return True
console.log(wordDictionary.search(".ad"), ". Expected ", true); // return True
console.log(wordDictionary.search("b.."), ". Expected ", true); // return True
