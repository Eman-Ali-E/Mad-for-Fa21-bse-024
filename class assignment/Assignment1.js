//String methods:

let my_self="My name is Eman Sadiq.I am studying in Comsats University Islamabad Attock Campus. My Gpa is 3.56,I am in 6 semester";
//length of string
let text=my_self.length;
console.log(text);

//charAt  
console.log(my_self.charAt(2));

//charcodeAt 
console.log(my_self.charCodeAt(0));

//string at   
console.log(my_self.charAt(3));
console.log(my_self[3]);

//slice 
console.log(my_self.slice(3,7));

//String substring 
console.log(my_self.substring(7,13));

//String substr 
console.log(my_self.substr(7,8));
console.log(my_self.substr(7));

//String indexOf
console.log(my_self.indexOf("University"));

//String lastIndexOf
console.log(my_self.lastIndexOf("Islamabad"));

//String search
console.log(my_self.search("Attock"));

//String match
console.log(my_self.match("name"));

//String matchAll
console.log(my_self.matchAll("is"));

//String includes
console.log(my_self.includes("studying"));

//String startsWith
console.log(my_self.startsWith("Attock"));

//String endsWith
console.log(my_self.endsWith("semester"));


//Arrays Methods:

var students=["Eman","Menahil","zulekha","Javeria","Ahmed","Ali","Shahab","Hassan","Aiza"];
let leng=students.length;
console.log(leng);
//tostring
let str=students.toString;
console.log(str);
//Arrayat
let index=students.at(3);
console.log(index);
//join
let alpha=students.join("^");
console.log(alpha);
//Pop and Push
students.pop();
students.push("Akbar");
//shift
students.shift();
//unshift
students.unshift("Alyan");
//delete
delete students[3];
//concat 2 arrays
let birds=["sparrow","pigeon","crow"];
let add=birds.concat(students);
console.log(add);
//merge array with values
let ad=birds.concat("parrot");
console.log(ad);
//copy within
birds.copyWithin(0,2);
birds.copyWithin(1,2,1);
//flat
let bird=[["sparrow"],["pigeon"],["crow"]];
bird.flat();
//splice
bird.splice(2,0,"Apple");
bird.splice(2,2,"mango","orange");
//tosplice
bird.toSpliced(0,1);
//slice
bird.slice(3);
bird.slice(0,2);

