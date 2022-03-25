import {v4} from 'uuid'
class Node {
    id;
    name;
    level;
    previous;
    next;

    constructor(name) {
        this.id = v4();
        this.name = name;
    }
}

export default Node;