import { Libros } from "./Libros";

export class Catalogo {

    private Libros: Libros[] = []
    
    gerenerarID (){
        const ids = this.Libros.map(e=>e.id)

        if(!ids.length){
            ids.push(0)
        }

        return Math.max(...ids) + 1

    }

    CrearLibros (Libros:Libros){
        this.Libros.push(Libros)

        return console.log(`libro ${Libros.titulo} fue agregado`)
    }

    MostrarLibros() {
        
        return this.Libros
    }

    PrestarLibros(id:number){
        
        this.Libros = this.Libros.map (e =>{

            if(e.id === id){
                e.prestado = true
                e.disponible = false
            } 
            
            return e
            
        })
    }

    registroLibros(){

      const registro = this.Libros.filter(e => e.disponible === true)
      
      return registro

    }

}

const libross = new Catalogo

const libro1:Libros ={

    id: libross.gerenerarID(),
    titulo: "Harry Potter 1",
    autor: "mach",
    prestado: false,
    disponible: true
}

libross.CrearLibros(libro1);

const libro2:Libros ={

    id: libross.gerenerarID(),
    titulo: "Harry Potter 2",
    autor: "mach",
    prestado: false,
    disponible: true
}

libross.CrearLibros(libro2);

const libro3:Libros ={

    id: libross.gerenerarID(),
    titulo: "Harry Potter 3",
    autor: "mach",
    prestado:false,
    disponible: true  
}

libross.CrearLibros(libro3)



console.log(libross.PrestarLibros(2))
console.log(libross.PrestarLibros(3))
console.log(libross.registroLibros())
