class Monstro extends Obj{
    dir_x = 0
    dir_y = 0
    pts = 0
    vida = 3

mov(){
    this.x += this.dir_x
    this.y += this.dir_y
    if(this.x <= 0){
        this.x =0
    }else if(this.x >=450){
        this.x = 450
    }
    if(this.y <= 0){
        this.y =0
    }else if(this.y >=600){
        this.y = 600
    }
}

}
   