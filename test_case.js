//case 1:
var a;
a = 1;
a = "a";
a = "a"+a;


//case 2
var a={ };
a.name= “Will”;
var b=a.name;
a.name=2;


//case 3:
var a={ name:”Will”};
var b=[];
b.push(a);
a.name=”John”;
b.push(a);

//case 4:
var a={ name:”Will”};
var b=[];
b.push(a.name);
a.name=”John”;
b.push(a.name);
