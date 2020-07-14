import React from 'react';
import {Dot} from './dot.js';

export default class Mosaic extends React.Component{
    constructor(props){
        super(props)
        this.ctx = null;
        this.radius = 10;
        this.pixelSize = 30;
        this.dots = [];
    }
    componentDidMount() {
        const canvasRef = this.refs.canvas;
        const ctx = canvasRef.getContext("2d");
        this.ctx = ctx;
        const img = new Image();
        img.src="klimt.jpg";
        img.crossOrigin = "Anonymous";
        
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight*2;
        
        canvasRef.width = this.stageWidth;
        canvasRef.height = this.stageHeight;
   
        this.isLoaded = false;
        this.imgPos = {
            x:0, 
            y:0,
            width:0,
            height:0,
        };
        
        img.onload=()=>{
            this.isLoaded = true;
            ctx.drawImage(img,0,0);
            this.imgData =ctx.getImageData(0,0, this.stageWidth,this.stageHeight);
            this.drawDots();  
        }
    
    }

    drawDots(){
        this.dots=[];
        this.columns = Math.ceil(this.stageWidth/this.pixelSize);
        this.rows = Math.ceil(this.stageHeight/this.pixelSize);
        for(let i =0;i<this.rows;i++){
            const y = (i+0.5) * this.pixelSize;
            const pixelY = Math.max(Math.min(y,this.stageHeight),0)
            
            for(let j = 0;j<this.columns;j++){
                const x = (j+0.5)* this.pixelSize;
                const PixelX = Math.max(Math.min(x,this.stageWidth),0);

                const pixelIndex = (PixelX+ pixelY*this.stageWidth) *4;
                const red = this.imgData.data[pixelIndex+0];
                const green = this.imgData.data[pixelIndex+1];
                const blue = this.imgData.data[pixelIndex+2];

                const dot = new Dot(
                    x,y,
                    this.radius,
                    this.pixelSize,
                    red,green,blue,
                );
                this.dots.push(dot);
            }
        }

        for(let i=0; i<this.dots.length; i++){
            const dot = this.dots[i];
            dot.animate(this.ctx)
        }
    }

    render() {
        return (
            <div>
                <canvas ref="canvas"/>
            </div>
        )
    }
}