
const app = new Vue({

    el: '#app',

    data:{
        
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ], 
    counter:0,
         
    },

    methods:{
        next(){
            this.counter++;
            if(this.counter > this.slides.length - 1){
                this.counter = 0;
            }  
        },
        prev(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.slides.length - 1;
            }  
        },
          
        myStop() {
            clearInterval(this.playNext);
        },

        myRestart(){
            setInterval( this.playNext = setInterval(() =>{
                this.next();
            }, 3000))
        }
  
    },

    mounted(){
        this.playNext = setInterval(() =>{
            this.next();
        }, 3000)

    }
    


});


