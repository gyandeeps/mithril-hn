/**
 * @fileoverview Pager to change page numbers
 * @author Gyandeep Singh
 */

"use strict";

import m, { route } from "mithril/index";

export default class Pager {
    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        return m(
            "p",
            {
                className: "mithril-Pager"
            },
            [
                m(
                    "a",
                    {
                        className: `mithril-Pager-page-arrow ${vnode.attrs.currentPage > 1 ? "" : "mithril-Pager-page-arrow--disabled"}`,
                        href: vnode.attrs.currentPage > 1 ? `/${vnode.attrs.routeName}/${vnode.attrs.currentPage - 1}` : "",
                        oncreate: route.link
                    },
                    "< Previous "
                ),
                m(
                    "span",
                    {
                        className: "mithril-Pager-page-num"
                    },
                    `${vnode.attrs.currentPage}/${vnode.attrs.totalPage}`
                ),
                m(
                    "a",
                    {
                        className: `mithril-Pager-page-arrow ${vnode.attrs.currentPage < vnode.attrs.totalPage ? "" : "mithril-Pager-page-arrow--disabled"}`,
                        href: vnode.attrs.currentPage < vnode.attrs.totalPage ? `/${vnode.attrs.routeName}/${vnode.attrs.currentPage + 1}` : "",
                        oncreate: route.link
                    },
                    " Next >"
                )
            ]
        );
    }
}
