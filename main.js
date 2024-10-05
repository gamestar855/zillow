let casas = [{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://www.zillow.com/homedetails/2890-Lime-St-Riverside-CA-92501/17839172_zpid/",
    direccion: "2890 Lime St, Riverside, CA 92501",
},
{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://www.zillow.com/homedetails/3257-River-Forest-Rd-Monroe-GA-30655/49900109_zpid/",
    direccion: "2890 Lime St, Riverside, CA 92501",
},
{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://www.zillow.com/homedetails/150-Midvale-Ter-Sebastian-FL-32958/205051901_zpid/",
    direccion: "2890 Lime St, Riverside, CA 92501",
},
{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://www.zillow.com/homedetails/12317-Bella-Dio-Dr-Fort-Worth-TX-76126/29128058_zpid/",
    direccion: "2890 Lime St, Riverside, CA 92501",
},
{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://www.zillow.com/homedetails/41721-Cornwell-Pl-Murrieta-CA-92562/116153795_zpid/",
    direccion: "2890 Lime St, Riverside, CA 92501",
}
]
$(document).ready(function(){
    $("#popup").hide()
    for(let i = 0; i < casas.length; i++){
        $("#casas").append(
            `<div class="casita">
              <img src="${casas[i].foto}">
              <h2>${casas[i].nombre}</h2>
                </div>  `
        )
    }
})