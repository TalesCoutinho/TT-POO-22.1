let particulas = []


function setup() {
  createCanvas(800, 800);
  for(let i=0; i < 3000; i++){
    let aleatorio = random(0,1);
    if(aleatorio > 0.5){
      particulas[i] = new Cachorro(200, 200, random(1, 18));
    }
    else{
      particulas[i] = new Gato(200, 200, random(1, 18));
    }
  }
}

function draw() {
  background(0);

  for(let p of particulas){
    p.desenhar();
    p.mover();
  }


}


