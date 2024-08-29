import {showPrice, showNetCost } from "./showPrice.js";

describe("Mostrar monto total", () => {
    it("No muestra el monto total", () => {
        expect(showPrice(100)).toEqual(100);
    });
    it("No muestra el precio neto", () => {
        expect(showNetCost(100, 2)).toEqual(200);
    });
});
