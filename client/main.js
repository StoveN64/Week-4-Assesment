const fortuneBtn = document.getElementById('fortuneBtn')
const addCharBtn = document.getElementById('addChar')
const getChar =document.getElementById('deleteTest')
const deleteChar = document.getElementById('deleteBtn')
let name = document.getElementById('name')
let type = document.getElementById('type')
let rank = document.getElementById('rank')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function getCharacter() {
    axios.get("http://localhost:4000/api/character")
        .then(res => {
            const charContainer = document.getElementById('character-container')
            for (let i = 0; res.data.length > i; i++){
                const name = document.createElement('li')
                const type = document.createElement('ul')
                const rank = document.createElement('ul')
                
                name.textContent = res.data[i].name
                type.textContent = res.data[i].type
                rank.textContent = res.data[i].rank
                name.addEventListener('click', () => {
                    deleteCharacter(res.data[i].id)
                })
                charContainer.appendChild(name)
                charContainer.appendChild(rank)
                charContainer.appendChild(type)
            }
        })
};


function addCharacter(){
    axios.post("http://localhost:4000/api/newcharacter", {
        name: name.value,
        type: type.value,
        rank: rank.value

    })
    .then(res => res.data)
    .catch(err => console.log(err))
}

function deleteCharacter(id){
    axios.delete(`http://localhost:4000/api/character/${id}`)
    .then(res => {
        const charContainer = document.getElementById('character-container')
        charContainer.innerHTML = ' '
        for (let i = 0; res.data.length > i; i++){
            const name = document.createElement('li')
            const type = document.createElement('ul')
            const rank = document.createElement('ul')
            type.textContent = res.data[i].type
            name.textContent = res.data[i].name
            rank.textContent = res.data[i].rank
            name.addEventListener('click', () => {
                deleteCharacter(res.data[i].id)
            })
            charContainer.appendChild(name)
            charContainer.appendChild(type)
            charContainer.appendChild(rank)
        }
    })
}

//    function getSauron(){
//         axios.get('http://localhost:4000/api/picture')
//         .then(res => {
//              const char = document.createElement('img')
//              char.textContent = res.data
//            document.body.appendChild(char)

//         })     

//         .catch(err => console.log(err))
//     }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addCharBtn.addEventListener('click', addCharacter)
// getChar.addEventListener('click', getSauron)


getCharacter()
