const nc = {
    __on:null,
    send:function(m) {
        if(this.__on) {
            this.__on(m)
        }
    }

}



export default nc