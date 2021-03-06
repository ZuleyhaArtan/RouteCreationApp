const tickets = [["JPN", "PHL"],["BRA", "UAE"],["USA", "BRA"],["UAE", "JPN"]];

const departurePlace= tickets.map((i) => i[0]);

const destination = tickets.map((i) => i[1]);

const firstTravel = departurePlace.filter((country) => !destination.includes(country))[0];

let road = [firstTravel];

let status = firstTravel;

while( road.length < tickets.length + 1 )
{
    tickets.map(( place ) => {
        
    if( place[0] == status ){
        status = place[1];
         road.push(status);
        }
    });

}

console.log(road);

path.reverse();

console.log(road);
