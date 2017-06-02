/**
 * @fileoverview Main app file
 * @author Gyandeep Singh
 */

"use strict";

import m, { route } from "mithril/index";
import Header from "./components/Header";
import Body from "./components/Body";
import "../less/app.less";

class App {
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
route(document.getElementById("app"), "/new", {
    "/new": App,
    "/new/:id": App,
    "/show": App,
    "/show/:id": App,
    "/ask": App,
    "/ask/:id": App,
    "/jobs": App,
    "/jobs/:id": App,
});
