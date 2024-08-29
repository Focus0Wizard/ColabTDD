import showPrice from "./showPrice.js";

describe("Mostrar monto total", () => {
    it("No muestra el monto total", () => {
        expect(showPrice(100)).toEqual(100);
    });
});
