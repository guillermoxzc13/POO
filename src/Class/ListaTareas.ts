import { Tareas } from "./Tareas";

export class ListaTareas {
    
    private tareas: Tareas[]=[]

    generarId (){
        const ids = this.tareas.map(e=>e.id);

        if(!ids.length){
            ids.push(0)
        }

        return Math.max(...ids) + 1
    }

    CrearTarea (tareas:Tareas){
        this.tareas.push(tareas)
        return console.log(`tarea ${tareas.id} creada`)
    }

    MostrarTareas (){
        return this.tareas
        
    }

    EliminarTareas (id:number){

        this.tareas = this.tareas.filter(e=>e.id !== id)

        return console.log(`tarea ${id} eliminada`)

    }

    CompletarTareas (id:number){

        this.tareas = this.tareas.map(e=>{

            if(e.id === id){
                e.completado = true
            }
            return e
        })
    }


}

const Lista = new ListaTareas()

const Tarea1: Tareas = {
    id: Lista.generarId(),
    titulo : "mi primera tarea",
    completado: false,
    fecha: new Date().toJSON().slice(0,10)
}

Lista.CrearTarea(Tarea1)

const Tarea2: Tareas = {
    id: Lista.generarId(),
    titulo: "mi segunda tarea",
    completado: false,
    fecha: new Date().toJSON().slice(0,10)  
}


Lista.CrearTarea(Tarea2)



console.log(Lista.EliminarTareas(2))
console.log(Lista.CompletarTareas(1))
console.log(Lista.MostrarTareas())


