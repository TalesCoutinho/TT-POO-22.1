
class Particula{
    constructor(x , y, raio){
      this.x = x;
      this.y = y;
      this.raio = raio;
      this.r = 122;
      this.g = 122;
      this.b = 122;
      this.color = color(this.r, this.g, this.b);
    }
    desenhar(){
        fill(this.color);
    }
    mover(){
        this.x += random(-2, 2);
        this.y += random(-2, 2);
        this.r += random(-7, 7);
        this.g += random(-7, 7);
        this.b += random(-7, 7);
        this.color=  color(this.r, this.g, this.b);
    }
  }

class Cachorro extends Particula{
    constructor(x , y, raio){
        super(x , y, raio);
    }
    desenhar(){
        ellipse(this.x, this.y, this.raio);
        fill(this.color);
    }
}

class Gato extends Particula{
    constructor(x, y, raio){
        super(x , y, raio);
    }
    desenhar(){
        triangle(this.x, this.y, this.x, this.raio+this.y, this.x + this.raio, this.y);
        fill(this.color);
    }
}