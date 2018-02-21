export function Model(name) {
    this.name=name;
}
Model.prototype.fun = function(){
    alert("Leha, don't touch a " + this.name);
};
 
// var a = new Animal("rabbit");
// a.fun();