export default class Etudiant{

    nom 
    age 
    section 

    constructor(nom,age,section) {
      this.nom= nom
      this.age= age
      this.section= section
    }

description (){ return'${this.nom}(${this.age} ans) - Section : ${this.section}';}
}