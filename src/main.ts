import { HelloWorld } from "./services/HelloWorld";

window.onload = () => {
    const helloWorld = new HelloWorld();
    const element = <HTMLElement>document.getElementById("app");
    element.textContent = helloWorld.hello();
}
