class Carousel {
    constructor(element){
        
        this.element = element;
        
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        console.log(this.element);
        this.data_count = 0;
        this.index = 1;
        this.left.addEventListener('click',() => this.l_scroll());
        this.right.addEventListener('click',() => this.r_scroll());
        // this.images = Array.from(this.images).map(image => new SmartImg(image));
        
    }
    
    l_scroll(){
        this.index --;
        
        if(this.index < 1){
            this.index = this.images.length;
        }
        this.images.forEach(function(currentValue){
            currentValue.classList.add('img');
            currentValue.classList.remove('imgdisplay');
            if(currentValue.dataset.idx == this.index){
                currentValue.classList.add('imgdisplay');
                currentValue.classList.remove('img');
            }
        }.bind(this));
        // this.images.forEach(image => image.build());
    }

    r_scroll(){
        this.index ++;
        console.log(this.index);
        if (this.index > this.images.length){
            this.index = 1;
        }
        this.images.forEach(function(currentValue){
            currentValue.classList.add('img');
            currentValue.classList.remove('imgdisplay');
            if(currentValue.dataset.idx == this.index){
                currentValue.classList.add('imgdisplay');
                currentValue.classList.remove('img');
            }
        }.bind(this))
        
        // this.images.forEach(image => image.build());
    }

}

// class SmartImg{
//     constructor(element,data_count){
//         this.element = element;
        

//     }
//     build(){
//         this.element.forEach(function(currentValue){
//             currentValue.dataset.idx =`${data_count}`;
            
//         })
//     }
// }





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let caro = document.querySelectorAll('.carousel');
console.log(caro);
caro.forEach(function(currentValue){
    return new Carousel(currentValue);
})
