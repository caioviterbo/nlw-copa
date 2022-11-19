function createGames(teamone, hour, teamtwo) {
    return `
    <li>
        <img src="./src/assets/icon-${teamone}.svg" alt="Bandeira da ${teamone}" title ="${teamone}">
        <strong>${hour}</strong>
        <img src="./src/assets/icon-${teamtwo}.svg" alt="Bandeira de ${teamtwo}" title="${teamtwo}">
    </li>
`
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
             ${games}
            </ul>
        </div>
`
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGames("switzerland", "07:00", "cameroon") +
        createGames("uruguay", "10:00", "south-korea") + createGames("portugal", "13:00", "ghana") + createGames("brazil", "16:00", "serbia")) +
    createCard("25/11", "quinta", createGames("wales", "07:00", "iran") +
        createGames("qatar", "10:00", "senegal") + createGames("netherlands", "13:00", "ecuador") + createGames("england", "16:00", "united-states")) +
    createCard("26/11", "quinta", createGames("tunisia", "07:00", "australia") +
        createGames("poland", "10:00", "saudi-arabia") + createGames("france", "13:00", "denmark") + createGames("argentina", "16:00", "mexico")) 
    
