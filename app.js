//Importar libreria tras instalarla
//require acepta una String por paramentro 
//que irá a buscar una carpeta con ese String
var moment = require('moment');
console.log(moment('1999-12-31').format("D/M/Y").toString())
// -------------------------------------

//Importar modulos propios
var miModulo = require('./miModulo');
miModulo.multiplicar(3);
// -------------------------------------

//Modulos preinstalados(http, url, path, fs)
var util = require('util');

var prueba = 10;
console.log(util.isNumber(prueba)) //deprecado
console.log(typeof prueba === 'number') //actual
console.log(typeof prueba === 'String')
console.log(util.types.isNumberObject(prueba))

var http = require('http');


// -------------------------------------

//Leer archivos de la maquina o servidor
//Bloquea el flow de ejecucion, hasta que no termina de leer
//no sigue ejecutando el codigo siguiente (blocker process)
//Mejor haciendo callback(non blocker process)
var fs = require('fs');
var content = fs.readFileSync("./files/miText.txt", "utf8");

console.log(content);

content = fs.writeFileSync("./files/miText2.txt", 'Hello World i\'m writing', 'utf8', (error)=>{
    if(error){
        console.log("write files error");
    }else{
        console.log("file writed");
    }
        
});

var contentNon = fs.readFile("./files/miText.txt", "utf8", function(error, data){
    console.log(data + " ====> With callback NON BLOCKER PROCESS");
});

fs.readFile("./files/miText.txtsss", "utf8", (error, data)=>{
    if(error){
        console.log("lecture error");
        // throw error;
    }else{
        console.log(data);
    }
});

fs.readdir("./files", {withFileTypes:true}, (error, items)=>{
    console.log(items);
});

fs.appendFile("./files/miText2.txt", '  NEW CONTENT', 'utf8', (error)=>{
    if(error){
        console.log("write files error");
    }else{
        console.log("file writed");
    }
        
});

fs.copyFile("./files/miText2.txt", "./files/miText2COPIA.txt", (error)=>{
    if(error){
        console.log("copying error");
    }else{
        console.log("successfully copied");
    }
})

fs.unlink("./files/miText2COPIA.txt", (error)=>{
    if(error){
        console.log("delete error");
    }else{
        console.log("deleted");
    }
})

fs.copyFile("./files/miText.txt", "./other files/miText.txt", (error)=>{
    if(error){
        console.log("something goes wrong during copying files");
    }else{
        fs.writeFile("./files/miText.txt", "Successfully copied file", (error)=>{
            console.log("end")
        })
    }
})

function copyFile(startUUrl, endUrl, file){
    fs.copyFile(startUUrl + "/" + file, endUrl + "/" + file, (error) =>{
        if(error){
            console.log("Failed to move file");
        }else{
            removeFile(startUUrl, file);
        }
    })
}

function removeFile(url, file){
    fs.unlink(url + "/" + file, (error)=>{
        if(error){
            console.log("Failed to remove file");
        }else{
            console.log("Done");
        }
    })
}

copyFile("./files", "./other files", "miText2.txt");
// ---------------------------------------

//Trabajar con Json
var book = require('./files/books.json');
console.log("Nombre libro: " + book.book);

fs.readFile('./files/books.json', (error, data)=>{
    if(error){
        console.log("Failed to read data");
    }else{
        console.log(JSON.parse(data));
    }
})

// --------------

// Prueba Node.jsmon o nodemon
console.log('Resultado ' + Math.floor(Math.random() * 100));

// -----------

// Procesando datos
var nombre = "Pahola";

console.log(nombre);

nombre = 10;

console.log(nombre);

nombre = false;

console.log(nombre);

let lista = ["uno", "dos", "tres"]

console.log(lista[1])

let curso = {
    tema: "node",
    leccion: "datos compuestos"
};

console.log(curso.tema)

function mostrarSaludo (){
    let valor1 = "Hola";
    let valor2 = " Mundo";
    console.log(valor1 + valor2);
}

function namePerson(nombrePersona){
    return nombrePersona;
}

console.log(namePerson("Miguel"));

let calculo = {

    duplicar: function (valor){
        return valor*2;
    },

    dividir: function (valor){
        return valor/2;
    }

}
console.log(calculo.dividir(4), calculo.duplicar(4));

mostrarSaludo();
console.log("Tarea Ejecutada");
// -------------------------------------

// Buffer trata elementos binarios
console.log(Buffer.alloc(10))
// -------------------------------------

// Process info del sistema proceso, recuros...
console.log(process.platform)
console.log(process.execPath)
console.log(process.env)
console.log(process.env.HOME)
// -------------------------------------

