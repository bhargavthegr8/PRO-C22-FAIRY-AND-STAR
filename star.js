class Star{
    constructor(x,y,radius){
        this.body=Bodies.circle(x , y , radius, {
            restitution:0.5,
            isStatic : true
        });
        this.radius= radius;
        this.image = loadImage("images/starImage.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    }
}