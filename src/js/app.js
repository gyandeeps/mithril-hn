/**
 * @fileoverview Main app file
 * @author Gyandeep Singh
 */

"use strict";

import route from "mithril/route";
import m from "mithril/hyperscript";
import Header from "./components/Header";
import Body from "./components/Body";
import "../less/app.less";

class App {
    constructor(vnode) {
        // vnode.state is undefined at this point
        this.kind = "App"
    }
    view(vnode) {
        return m(
            "div",
            {
                class: "mithril-hn"
            },
            [

                m(Header, {
                    currentPage: vnode.attrs.id ? parseInt(vnode.attrs.id) : 1
                }),
                m(Body, {
                    currentPage: vnode.attrs.id ? parseInt(vnode.attrs.id) : 1
                })
            ]
        );
    }
}

route.prefix("");
route(document.getElementById("app"), "/", {
    "/": App,
    "/new/:id": App,
    "/comments": App
});
