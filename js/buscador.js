// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

const autos=obtenerAutos();
//Object literaL:
let DatosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
};
//eventos formulario:
const marca=document.querySelector('#marca');
marca.addEventListener('input',e=>{
    
    DatosBusqueda.marca=e.target.value;

    //filtar auto
    filtrarAuto();
});

const year=document.querySelector('#year');
year.addEventListener('input',e=>{
    
    DatosBusqueda.year=Number(e.target.value);

    //filtar auto
    filtrarAuto();
});

const minimo=document.querySelector('#minimo');
minimo.addEventListener('input',e=>{
    
    DatosBusqueda.minimo=Number(e.target.value);

    //filtar auto
    filtrarAuto();
});
const maximo=document.querySelector('#maximo');
maximo.addEventListener('input',e=>{
    
    DatosBusqueda.maximo=Number(e.target.value);

    //filtar auto
    filtrarAuto();
});

const puertas=document.querySelector('#puertas');
puertas.addEventListener('input',e=>{
    
    DatosBusqueda.puertas=Number(e.target.value);

    //filtar auto
    filtrarAuto();
});

const transmision=document.querySelector('#transmision');
transmision.addEventListener('input',e=>{
    
    DatosBusqueda.transmision=e.target.value;

    //filtar auto
    filtrarAuto();
});

const color=document.querySelector('#color');
color.addEventListener('input',e=>{
    
    DatosBusqueda.color=e.target.value;

    //filtar auto
    filtrarAuto();
});

//evento Cargadi
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
});

function limpiarHTML(){
    const contenedor=document.querySelector('#resultado');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
function mostrarAutos(autos){
    limpiarHTML();
    const contenedor=document.querySelector('#resultado');
    //html
    autos.forEach(auto => {
        const autoHTML=document.createElement('p');
        autoHTML.innerHTML=`
        <p>${auto.marca} ${auto.modelo} - ${auto.year} - Puertas: ${auto.puertas}  - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    });
}
function noResultado(){
    limpiarHTML();
    const noResultadoo=document.createElement('div');
    noResultadoo.classList.add('alerta','error');
    noResultadoo.appendChild(document.createTextNode('no hay resultados'));
    document.querySelector('#resultado').appendChild(noResultadoo);
}
function filtrarAuto(){
    const resultado=obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if (resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}


function filtrarMarca(auto){
    if(DatosBusqueda.marca){
        return auto.marca===DatosBusqueda.marca;
    }else{
        return auto;

    }
}

function filtrarYear(auto){
    if(DatosBusqueda.year){
        return auto.year===DatosBusqueda.year;
    }else{
        return auto;
    }
}

function filtrarMinimo(auto){
    if(DatosBusqueda.minimo){
        return auto.precio>=DatosBusqueda.minimo;
    }else{
        return auto;
    }
}
function filtrarMaximo(auto){
    if(DatosBusqueda.maximo){
        return auto.precio<=DatosBusqueda.maximo;
    }else{
        return auto;
    }
}
function filtrarPuertas(auto){
    if(DatosBusqueda.puertas){
        return auto.puertas===DatosBusqueda.puertas;
    }else{
        return auto;
    }
}
function filtrarTransmision(auto){
    if(DatosBusqueda.transmision){
        return auto.transmision===DatosBusqueda.transmision;
    }else{
        return auto;
    }
}
function filtrarColor(auto){
    if(DatosBusqueda.color){
        return auto.color===DatosBusqueda.color;
    }else{
        return auto;
    }
}