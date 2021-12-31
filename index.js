console.log('This is Small Project inn which we are using or we are pretending to using an api called word api');

const getBtn = document.getElementById('getBtn')
const fetchLi = document.getElementById('dataUl')

getBtn.addEventListener('click', getData)

function getData() {
    let word = document.getElementById('words')
    let myWord

    function getWord() {
        myWord = word.value;
    }
    getWord();
    console.log(myWord);

    let url = 'data.json'
    async function getDesc() {
        const response = await fetch(url);
        const resp = await response.json();
        // return resp;
        html = ""
        let data
        if (myWord == 'love') {
            data = resp[0].results
            console.log(resp[0].results);
        } else if (myWord == 'success') {
            data = resp[1].results
            console.log(resp[1].results);

        } else if (myWord == 'learn') {
            data = resp[2].results
            console.log(resp[2].results);

        } else if (myWord == 'school') {
            data = resp[3].results
            console.log(resp[3].results);

        }

        data.forEach(element => {
            html += `<li>One of the definition is ${element.definition} </li>`
            fetchLi.innerHTML = html;
        });

    }


    getDesc()
}