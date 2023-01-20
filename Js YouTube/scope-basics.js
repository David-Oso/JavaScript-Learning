let  a = 'first';
function scopeTest(){
    console.log(a);
    a = 'changed';

    if(1 != '')console.log(a);
}
scopeTest();
console.log(a);