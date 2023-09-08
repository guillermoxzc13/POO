export interface Mascota {

    nombre: string;
    felicidad: number;
    hambre: number;
    raza: string;


    comer(comida:string):void

}