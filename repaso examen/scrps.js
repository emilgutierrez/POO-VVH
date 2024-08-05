function boton_1(){

    let nombre = prompt("ingrese su nombre/regla 1")
    let apellido = prompt("ingrese su apellido/regla 1")
    let edad = prompt("ingrese su edad /regla 1")
    
    alert(nombre+ " " + apellido + " " +edad)
    
    }
    
    //boton_1()
    
    function boton_2(){
    
    let numero = prompt("ingrese su numeor/regla2")
    
    numero = numero / 3 + 10 * 2
    
    alert(numero)
    console.log(numero)
    
    }
    
    //boton_2()
    
    function boton_3(){
        let numeor_1 = prompt("ingrese el primer numero /regla3")
        let numeor_2 = prompt("ingrese el segundo numero /regla3")
      let array = []
      let arriba=0
      let abajo=0
      let punto_b=0
      let punto_r=0
    
       array.push(numeor_1,numeor_2)
    
       for(let i = 0; i < array.length;i++){
    
               punto_r = array[i]
               if(array[i] > punto_r){
                punto_r = array[i]
                  arriba += 1
               }
    
               punto_b = array[i]
               if(array[i] <= punto_b){
                punto_b = array[i]
                  abajo += 1
               }
       }
    
       if(arriba > abajo){
        alert("arriba a abajo " +array +" "+arriba)
       }
    
       if(abajo > arriba){
        alert("abajo a arriba " +array +" "+abajo)
       }
    
      
    }
    
    //boton_3()
    
    function  boton_4(){
    
        let numeor_1 = parseFloat(prompt("ingrese el primer numero /regla4"))
        let numeor_2 = parseFloat(prompt("ingrese el segundo numero /regla4"))
        let numeor_3 = parseFloat(prompt("ingrese el terser numero /regla4"))
        let numeor_4 = parseFloat(prompt("ingrese el cuarto numero /regla4"))
        let numeor_5 = parseFloat(prompt("ingrese el quinto numero /regla4"))
    
        let numeor = 0
        numeor = numeor_1 + numeor_2 + numeor_3 + numeor_4 + numeor_5 
    
        alert(numeor)
    
    }
    
    //boton_4()
    
    function boton_5(){
        let limite = parseFloat(prompt("ingrese numeros naturales"))
        let numer = 0
    
        for(let i = 0; i < limite;i++){
            let numeros = parseFloat(prompt("ingrese numeros naturales"))
            if(numeros > 0){
            numer = numer + numeros
            }
        }
    
        alert("hola")
        
            
        
        alert(numer)
    }
    
    //boton_5()
    
    
    function boton_6(){
    
        let k=0
        let j=[]
    
        for(let p = 0; 5 > p;p++){
         k = parseFloat(prompt("ingrese numeros"))
         let m = k % 2
    
         if(m == 0){
            j.push(k)
         }
    
    
        }
    
    alert(j)
        
    }
    
    //boton_6()
    
    
    function boton_7(){
    
        let k=0
        let j=[]
    
        for(let p = 0; 5 > p;p++){
         k = parseFloat(prompt("ingrese numeros"))
         let m = k % 2
    
         if(m == 1){
            j.push(k)
         }
    
    
        }
    
    alert(j)
       
    }
    
    //boton_7()
    
    function boton_8(){
    let m = 0
    for(let p = 0; 5 > p;p++){
        let k = parseFloat(prompt("escrive"))
    
         m = m + k
    }
    
    alert(m)
    
    
    }
    
    
    boton_8()