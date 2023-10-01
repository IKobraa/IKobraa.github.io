
const human = {
    
    name : "blank",
    age : 0,

    getName : function() {
        return this.name;
    }
};

let arr = ["peter","pan","ist","johann","weihnachtsmann"];
let x = arr.reduce((newWord,word) => {
    newWord+=word;
})
console.log(x);



