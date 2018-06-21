export default function SQL (param) {
    this.WHERE = function(){
        return this;
    };
    this.ORDERBY = function(){
        return this;
    };
    return this;
}
