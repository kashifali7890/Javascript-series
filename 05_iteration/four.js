const myObject = {
    js: 'javasxxcript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js","cpp","java"]

for (const key in programming) {
    
    console.log(programming[key]);
    
}