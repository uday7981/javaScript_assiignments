// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       uday
// ```

// After the program runs, the output should be

// ```
// hello world my name is uday
// ```


const fs = require('fs');
 

function clean(data) {
    let arr = data.split(" ");
    let answerArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
        }
        else {
            answerArr.push(arr[i]);
        }
    }
    let answerStr = answerArr.join(" ");
    console.log(answerStr);
    return answerStr;

}

function fileWrite(err) {   
    console.log("File written successfully!");
}

function fileRead(err, data) {  
    if (err) {
        console.log(err);
        return;
    }

    let cleandData = clean(data);
    fs.writeFile('file.txt', cleandData, "utf-8",fileWrite); 
}

fs.readFile('file.txt', "utf-8", fileRead);