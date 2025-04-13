class MyImage {
	constructor(src,x,y,width,height) {
		this.kep = document.createElement("img"); 
        this.kep.src = src; 
        this.kep.style.position = "absolute"; 
        this.kep.style.left = x+"px"; 
        this.kep.style.top = y+"px"; 
        this.kep.width = width; 
        this.kep.height = height; 
		this.kep.style.visibility = "visible";
        document.body.appendChild(this.kep);
	}
	 show() { 
        this.kep.style.visibility = "visible"; 
    } 
     
    hide() { 
        this.kep.style.visibility = "hidden"; 
    } 
     
    putAt(x, y) { 
        this.kep.style.left = x+"px"; 
        this.kep.style.top = y+"px";         
    } 
     
    resize(width, height) { 
        this.kep.width = width; 
        this.kep.height = height;     
    } 
}
class SubtitledImage extends MyImage { 
    constructor(src, x, y, width, height, subtitle) { 

        super(src, x, y, width, height); 
        this.subtitle = document.createElement("div"); 
        this.subtitle.innerHTML = subtitle; 
        this.subtitle.style.position = "absolute"; 
        this.subtitle.style.left = x+"px"; 
        this.subtitle.style.top = (y+height)+"px"; 
        document.body.appendChild(this.subtitle); 
    } 
 
    show() { 
        super.show(); 
        this.subtitle.style.visibility = "visible"; 
    } 
     
    hide() { 
        super.hide(); 
        this.subtitle.style.visibility = "hidden"; 
    } 
     
    putAt(x, y) { 
        super.putAt(x, y); 
        this.subtitle.style.left = x+"px"; 
        this.subtitle.style.top = (parseInt(y)+this.kep.height)+"px"; 
    } 
     
    resize(width, height) { 
        super.resize(width, height); 
        this.subtitle.style.top = (parseInt(this.kep.style.top) + parseInt(height)) + "px"; 
    } 
} 