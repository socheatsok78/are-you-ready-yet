(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.areYouReadyYet = void 0;
    function areYouReadyYet() {
        let resolver;
        let rejecter;
        const maybe = new Promise((resolve, reject) => {
            resolver = resolve;
            rejecter = reject;
        });
        return {
            maybe: maybe,
            yes: resolver,
            no: rejecter,
        };
    }
    exports.areYouReadyYet = areYouReadyYet;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxTQUFnQixjQUFjO1FBQzFCLElBQUksUUFBYyxDQUFBO1FBQ2xCLElBQUksUUFBYSxDQUFBO1FBRWpCLE1BQU0sS0FBSyxHQUFVLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2pELFFBQVEsR0FBRyxPQUFPLENBQUE7WUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU87WUFDSCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxRQUFRO1lBQ2IsRUFBRSxFQUFFLFFBQVE7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQWRELHdDQWNDIn0=