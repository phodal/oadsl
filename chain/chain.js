export default function SQL(param) {
    this.WHERE = () => {
        return this;
    };
    this.ORDERBY = () => {
        return this;
    };
    return this;
}
