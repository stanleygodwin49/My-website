//string creation
//single and double quotes string creation
let greeting='hello';//single string
console.log(greeting);

let myName="bob";//double string
console.log(myName);

//rarely used
let str3=('hey')
console.log(str3.length);

//concatination means joining one or more string together
let fullgretting=greeting + myName;
console.log(fullgretting);
    

//template literals
let fullgrettingtemplateliteral= '${greeting1} ${myName1}';
console.log(fullgrettingtemplateliteral);

//string manipulation
//===common string method===//
       //LENGTH
let text="javascript is awesome";
console.log(text.length);//get the total character length of the content of the string
let attitude='mummy';
console.log(attitude.length);

        //charAT
console.log(text.charAt (3));
//console.log(text [0]);
        //changing case uppercase // lowercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());
        //substring
const substrresult=text.substring(0,4);
console.log(substrresult);
const sliceresult=text.slice(0,4);
console.log(sliceresult);
       //searching
console.log(text.indexOf ("is"));
console.log(text.indexOf ('awesome'));
console.log(text.startsWith ('java'));
console.log(text.endsWith ('awesome'));
       //replacing
       const newTest=text.replace('awesome','amazing');
       console.log(newTest);
       //split and joining
       let splitedword=text.split("");
       console.log(splitedword);
       const joinedwords=splitedwords.join ("-");
       console.log(joinedwords);
       //trimming
        let text1="  hello world  ";
        let trimmedtext=text.trim();
        let trimmedtext2=text.trimStart();
        let trimmedtext3=text.trimEnd();
        console.log(trimmedtext);
        console.log(trimmedtext2);
        console.log(trimmedtext3);
        //===special character===//
console.log('first line second line third line');
        
       
       
       
       
       
       
       
       

       
       
















