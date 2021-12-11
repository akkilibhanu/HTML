class central{
       constuctor(){
           console.log("parent class constructor method");
       }

         
}
  class KA_govt extends central{
      constructor(){
          super();
          console.log("child class constructor method");
      }
         


        
  }
  new KA_govt();
  