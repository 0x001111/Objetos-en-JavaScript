class Persona {

    nombre; 
    edad; 
    DNI; 
    sexo;
    peso; 
    altura; 


    constructor(){
        this.DNI = this.#generaDNI(); 
        this.sexo = 'H';
        this.altura = 0; 
        this.peso = 0; 
    }

    calcularIMC(peso, altura){
        
        const imc = this.peso / (this.altura ** 2); 

        if(imc < 20){
            return -1; 
        }else if(imc >=20 && imc <=25){
            return 0; 
        }else if(imc >25){
            return 1; 
        }
    }

    esMayorDeEdad(){
        
        return this.edad >=18;
    }

    /* SIGNIFICA QUE ES PRIVADO */ 
    #comprobarSexo(sexo){
        if(sexo == "H" || sexo == "M"){
            return sexo; 
        }else{
            return "H"; 
        }
    }

    toString(){
        document.write("nombre: " + this.nombre + "<br>" + "edad: " + this.edad + "<br>" + "DNI: " + this.DNI + "<br>" + "sexo: " + this.sexo + "<br>" + "peso: " + this.peso + "<br>"+ "altura: " + this.altura)
    }

    #generaDNI(){
        let numeroAleatorio = Math.floor(Math.random() * 90000000 ) + 10000000;
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letra = letras[Math.floor(Math.random () * letras.length)];
        return numeroAleatorio + letra;  
    }

    setNombre(){
        this.nombre = prompt("Introduce el nombre");
    }

    setEdad() {
        this.edad = Number(prompt("Introduce la edad:"));
    }

    setSexo() {
        const sexoIntroducido = prompt("Introduce el sexo (H/M):");
        this.sexo = this.#comprobarSexo(sexoIntroducido);
    }

    setPeso() {
        this.peso = Number(prompt("Introduce el peso (kg):"));
    }

    setAltura() {
        this.altura = Number(prompt("Introduce la altura (m):"));
    }

}

let persona1 = new Persona();
persona1.setNombre();
persona1.setEdad();
persona1.setSexo();
persona1.setPeso();
persona1.setAltura();
persona1.calcularIMC(); 

//mostrar datos
document.write("<h3>DATOS</h3>"); 
persona1.toString(); 

//comprobar peso 
document.write("<h3>DATOS PESO</h3>")
const resultadoIMC = persona1.calcularIMC(); 

if(resultadoIMC === -1){
    document.write("<strong>Peso inferior al ideal</strong>")
}else if(resultadoIMC === 0){
    document.write("<strong>Peso ideal</strong>")
}else if(resultadoIMC === 1){
    document.write("<strong>Sobre peso</strong>")
}