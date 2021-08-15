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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQixjQUFjO0lBQzFCLElBQUksUUFBYyxDQUFBO0lBQ2xCLElBQUksUUFBYSxDQUFBO0lBRWpCLE1BQU0sS0FBSyxHQUFVLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ2pELFFBQVEsR0FBRyxPQUFPLENBQUE7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU87UUFDSCxLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsRUFBRSxFQUFFLFFBQVE7S0FDZixDQUFBO0FBQ0wsQ0FBQztBQWRELHdDQWNDIn0=