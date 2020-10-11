let Me = {
    name: 'Daniel',
    age: '15',
    height: '184',
    place: 'Lviv',
}

for (let key in Me)

console.log(key)

let MeJson = JSON.stringify(Me)

console.log(JSON.parse(MeJson))

let notMe = Object.assign(Me)

notMe.character = 'dybil'

console.log(notMe)