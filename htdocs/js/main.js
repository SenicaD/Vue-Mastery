const app = Vue.createApp({
    // data: function(){
    //     return {
    //         product: "Socks"
    //     }
    // }
    
    // ** NOTE **
    // Above is equivalent to below

    data(){
        return {
            product  : "Socks", // Key -> Value
            image    : './assets/images/socks_green.jpg', // Path from HTML File
            // inStock : true
            inventory: 10,
            details  : ['50% corron', '30% wool', '20% polyester'],
            variants : [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ] 
        }
    }
})
