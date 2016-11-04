/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable eol-last */
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Wah wah, I am ${this.name}`;
    }
}

export default Dog;