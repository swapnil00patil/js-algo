function isAnagram(str1, str2) {
    // cannot check based on length as we are planning to check phrases too
    // if(str1.length !== str2.length) {
    //     return false;
    // }
    
    // check characters on str1 and st2 
    let str1Obj = arrayToMap(str1);
    let str2Obj = arrayToMap(str2);

    console.log(str1Obj);
    console.log(str2Obj);
    for(let str in str1Obj) {
        if(!str2Obj[str]) {
            return false;
        }
        if(str1Obj[str] !== str2Obj[str]) {
            return false;
        }
    }

    return true;
}

function arrayToMap(str2) {
    let str2Obj = {};
    for (let str of str2) {
        str = str.toLowerCase();
        let temp = str2Obj[str];
        str2Obj[str] = temp ? ++temp : 1;
    }
    return str2Obj;
}

console.log(isAnagram("swapnil", "patil"));
console.log(isAnagram("adobeA", "aboade"));
console.log(isAnagram("binary", "brainy"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("", ""));
// binary  brainy
// adobe abode
// School master = The classroom