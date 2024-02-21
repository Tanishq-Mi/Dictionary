
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementsByClassName("result")[0];
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let inpword = document.querySelector(".searcc").value;
    fetch(`${url}${inpword}`)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
        <div class="word">
                <h3>${inpword}</h3>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="example">${data[0].meanings[0].definitions[0].example || ''}</p>`;
        });
});
