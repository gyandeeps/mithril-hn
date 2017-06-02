/**
 * @fileoverview Main app file
 * @author Gyandeep Singh
 */

"use strict";

import m, { route } from "mithril/index";
import Header from "./components/Header";
import Body from "./components/Body";
import "../less/app.less";

/**
 * Parses the route to return the just the main route name
 * Default it returns new as its the default route
 * @returns {string} route name
 * @private
 */
const getParsedRouteName = () => route.get().split("/")[1] || "new";

class App {
    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        const routeName = getParsedRouteName();

        return m(
            "div",
            {
                class: "mithril-hn"
            },
            [
                m(Header, {
                    currentPage: vnode.attrs.id ? parseInt(vnode.attrs.id) : 1,
                    routeName
                }),
                m(Body, {
                    currentPage: vnode.attrs.id ? parseInt(vnode.attrs.id) : 1,
                    routeName
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
