/**
 * @fileoverview Main app file
 * @author Gyandeep Singh
 */

"use strict";

import m from "mithril";

class ES6ClassComponent {
    constructor(vnode) {
        // vnode.state is undefined at this point
        this.kind = "ES6 class"
    }
    view() {
        return m("div", `Hello from an ${this.kind}`)
    }
    oncreate() {
        console.log(`A ${this.kind} component was created`)
    }
}

m.route(document.getElementById("app"), "/", {
    "/": ES6ClassComponent
});
