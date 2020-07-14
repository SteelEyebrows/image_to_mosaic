export class Dot{
    constructor(x,y,radius,pixelSize,red,green,blue){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.pixelSize = pixelSize;
        this.pixelSizeHalf = pixelSize/2;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    animate(ctx){
        ctx.beginPath();
        ctx.fillStyle='#000';
        ctx.fillRect(
            this.x - this.pixelSizeHalf,
            this.y - this.pixelSizeHalf,
            this.pixelSize, this.pixelSize
        );

        ctx.beginPath();
        ctx.fillStyle = `rgb(${this.red},${this.green},${this.blue})`;
        ctx.arc(this.x, this.y, this.radius, 0,6.28,false);
        ctx.fill();
    }
}