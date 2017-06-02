/**
 * @fileoverview Header UI is drawn by this module
 * @author Gyandeep Singh
 */

"use strict";

import m, { route } from "mithril/index";

/**
 * Creates the link using li for each type of route
 * @param {string} currentRouteName - current route name of the page
 * @param {string} routeName - name of the route
 * @param {string} [nestedRoute=""] - nested route
 * @param {object} [children] - optional children to render
 * @returns {object} vdom for route link
 * @private
 */
const createLink = (currentRouteName, routeName, nestedRoute = "", children) => m(
    "li",
    {
        class: "mithril-nav-item"
    },
    m(
        "a",
        {
            href: `/${routeName}${nestedRoute !== "" ? `/${nestedRoute}` : ""}`,
            class: currentRouteName === routeName ? "selected" : "",
            oncreate: route.link
        },
        children || routeName
    )
);

/**
 * Creates the link for the home icon on the header
 * @param {string} currentRouteName - current route name of the page
 * @returns {object} vdom for iconheader item
 * @private
 */
const createHome = (currentRouteName) => createLink(currentRouteName, "", "", m(
    "img",
    {
        src: "/img/logo-30x30.png",
        alt: "Mithril icon"
    },
    ""
));

export default class Header {
    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        return m(
            "nav",
            {
                class: "mithril-header"
            },
            m(
                "ol",
                {
                    class: "mithril-nav"
                },
                [
                    createHome(vnode.attrs.routeName),
                    createLink(vnode.attrs.routeName, "new", vnode.attrs.currentPage),
                    createLink(vnode.attrs.routeName, "show"),
                    createLink(vnode.attrs.routeName, "ask"),
                    createLink(vnode.attrs.routeName, "jobs")
                ]
            )
        );
    }
}
