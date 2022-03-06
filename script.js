
    //Carne 400 gr por pessoa, se passar 6 de horas 650gr
    //Cerveja 1200 ml por Pessoa + 6 horas 2000ml
    //refrigerante 1000ml por pessoa + 6 horas 1500ml 
    
    let adultos = document.getElementById('adulto')
    let criança = document.getElementById('criança')
    let hora = document.getElementById('horas')

function transforma(){
    
    if(hora.value<=6){
        let qtdCarne = (adultos.value * 400)+ (criança.value*200)
        let Cerveja = adultos.value * 1200
        Cerveja = Math.ceil( Cerveja/325)
        let qtdRefri = (adultos.value*1000) + (criança.value*500)
        
        let p = document.getElementsByTagName("p")
        p[0].innerHTML = `${qtdCarne/1000} kg de carne`;
        p[1].innerHTML = `${Cerveja} latas de cerveja`
        p[2].innerHTML = `${qtdRefri/1000}L de Refrigerante `
    }else{
        let qtdCarne = (adultos.value * 650)+ (criança.value*325)
        let Cerveja = adultos.value * 2000
        Cerveja = Math.ceil( Cerveja/325)
        let qtdRefri = (adultos.value*1500) + (criança.value*750)

        let p = document.getElementsByTagName("p")
        p[0].innerHTML = `${qtdCarne/1000} kg de carne`;
        p[1].innerHTML = `${Cerveja} latas de cerveja`
        p[2].innerHTML = `${qtdRefri/1000}L de Refrigerante `
    }
}