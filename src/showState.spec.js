import showState from "./showState.js";

describe("Mostrar codigo del Estado", () => {
    it("No Muestra el codigo de estado que se ingreso", () => {
        expect(showState("TX")).toEqual("TX");
    });
});
