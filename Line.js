import { Shape } from "./Shape.js";

export class Line extends Shape {
    #X2;
    #Y2;

    constructor(x, y, X2, Y2) {
        super(x, y);
        this.#X2 = X2;
        this.#Y2 = Y2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this._x, this._y);
        ctx.lineTo(this.#X2, this.#Y2);
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }

    setEndPosition(X2, Y2) {
        this.#X2 = X2;
        this.#Y2 = Y2;
    }
}
