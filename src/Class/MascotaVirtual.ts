import { Mascota } from "./Mascota";

class MascotaVirtual implements Mascota {

    nombre: string;
    felicidad: number;
    hambre: number;
    raza: string;

    constructor(nombre: string, felicidad: number, hambre: number, raza: string) {
        this.nombre = nombre;
        this.felicidad = felicidad;
        this.hambre = hambre;
        this.raza = raza;
    }

    comer(comida: string): void {
        // cada vez que come, la felicidad aumenta y el hambre disminuye
        this.felicidad += 40; 
        this.hambre -= 30; 

       
        this.felicidad = Math.max(0, Math.min(100, this.felicidad));
        this.hambre = Math.max(0, Math.min(100, this.hambre));

        console.log(`${this.nombre} (${this.raza}) ha comido ${comida}. Ahora su felicidad es ${this.felicidad}% y su hambre es ${this.hambre}%.`);
    }
}

const perro = new MascotaVirtual("Fido", 70, 40, "Labrador");
perro.comer("croquetas");

const gato = new MascotaVirtual("gato", 50,90,"calle")
gato.comer("milanesas")
