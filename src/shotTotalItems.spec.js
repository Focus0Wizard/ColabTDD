import showTotal from "./showTotalItems.js";

describe("Mostrar total de items", () => {
    it("Muestra el total de items que se ingreso", () => {
        expect(showTotal(5)).toEqual(5);
    });
});
