 Quadrille.OUTLINE='black'
  let cuadricula, X,O;
  let contador=0
  let  rellenadorX,rellenadorO,mousecol,mouserow;
  let marcador= [0, 0]
  let ganador;
  let jugador1 = 1
  let jugador2 = 0
  let q_mar;
  let marcador_str = ['0','0'];

  function setup() {
    createCanvas(400, 500);
    cuadricula=createQuadrille(3,3);
    q_mar = createQuadrille(marcador_str)
    //Boton de aleatoriedad
    button = createButton('Volver a Jugar');
    button.position(0, cuadricula.height * Quadrille.CELL_LENGTH);
    button.mousePressed(reset)
  }
  function draw() {
    background('rgb(152,152,197)');
    drawQuadrille(cuadricula);
    drawQuadrille(q_mar, { x: 0, y: cuadricula.height * Quadrille.CELL_LENGTH + 50})
  }

   function mouseClicked(){
    if(VerificarGanador() == false){
     mousecol=cuadricula.mouseCol;
    mouserow=cuadricula.mouseRow; 

   visitQuadrille(cuadricula,(row,col)=>{
     if(cuadricula.isEmpty(mouserow,mousecol)){
       if(contador %2 == 0){
      X=cuadricula.fill(mouserow,mousecol,"X")
    }
    else{
      O=cuadricula.fill(mouserow,mousecol,"O")
    }    
      contador+=1

     }
     if(VerificarGanador()){
      console.log("fin del juego");
    }
   }
   )
    if(VerificarGanador()){
       if(contador %2 != 0){
      marcador[0] += 1
    } else {
      marcador[1] += 1
    }
       const marcador_str = marcador.map(entero => entero.toString());
      q_mar.fill(0, 0, marcador_str[0])
      q_mar.fill(0, 1, marcador_str[1])
  }
   }}
  function VerificarGanador(){

    for(i=0;i<3;i++){
      if(cuadricula.read(i,0) === "X" && cuadricula.read(i,1) === "X" && cuadricula.read(i,2) === "X"){
        return true
      }
      else if(cuadricula.read(i,0) === "O" && cuadricula.read(i,1) === "O" && cuadricula.read(i,2) === "O"){
        return true
      }
    }
    for(i=0;i<3;i++){
          if(cuadricula.read(0,i) === "X" && cuadricula.read(1,i) === "X" && cuadricula.read(2,i) === "X"){
        return true
          }
      else if(cuadricula.read(0,i) === "O" && cuadricula.read(1,i) === "O" && cuadricula.read(2,i) === "O"){
        return true
      }
    }
    if(cuadricula.read(0,0) === "X" && cuadricula.read(1,1) === "X" && cuadricula.read(2,2) === "X" || cuadricula.read(0,2) === "X" && cuadricula.read(1,1) === "X" && cuadricula.read(2,0) === "X"){
      return true
    }
    else if(cuadricula.read(0,0) === "O" && cuadricula.read(1,1) === "O" && cuadricula.read(2,2) === "O" || cuadricula.read(0,2) === "O" && cuadricula.read(1,1) === "O" && cuadricula.read(2,0) === "O"){
      return true
    }
    return false
  }

  function reset(){
    cuadricula=createQuadrille(3,3);  
  }