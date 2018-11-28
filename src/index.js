class FastCache{
    constructor(){
        this.list =  {}
    }
    set(key,value){
        this.list[key] = value
    }
    get(key){
        return this.list[key]
    }
    clear(){
        console.log("switch branch")
    }
}

window.FastCache =  FastCache