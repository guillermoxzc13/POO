import { Contacto } from "./contacto";

export class ListaContacto {
    
    private contactos: Contacto[] = []
  
    agendar (conta:Contacto) {
      return this.contactos.push(conta)
    }
  
    contacto (name:string) {
      
      return this.contactos.filter(conta => conta.nombre === name)
    }
  
    getAllContacts () {
      
      return this.contactos
    }
  }

  const lista = new ListaContacto();

  const contacto1:Contacto = {
    nombre:"ricky",
    correo_electronico:"ricky@gmail.com",
    telefono:"3704666666"

  }

  lista.agendar(contacto1)

  const contacto2:Contacto = {
    nombre:"diegote",
    correo_electronico:"diegote@gmail.com",
    telefono:"3704999999"

  }

  lista.agendar(contacto2)

  console.log(lista.contacto("diegote"))
  
