/**
 * @fileoverview Data fetch and UI for each route
 * @author Gyandeep Singh
 */

"use strict";

import m from "mithril/index";
import Item from "./Item";

export default class DataGrid {
    constructor() {
        this.items = [];
    }

    /**
     * fetches data and then when it done then it populates the items meber variable
     * @param {Function} fetchFunc - fetch fucntion based on the route in context
     * @returns {undefined}
     */
    _getData(fetchFunc) {
        fetchFunc(this.currentPage)
            .then((data) => {
                this.items = data;
            });
    }

    /**
     * Mithril oninit lifecycle
     * @param {object} vnode - standrd mithril view method
     * @returns {undefined}
     */
    oninit(vnode) {
        this.currentPage = vnode.attrs.currentPage;
        this.dataFetchFunc = vnode.attrs.fetchData;
        this._getData(this.dataFetchFunc);
    }

    /**
     * Mithril onupdate lifecycle
     * @param {object} vnode - standrd mithril view method
     * @returns {undefined}
     */
    onupdate(vnode) {
        if (vnode.attrs.currentPage !== this.currentPage || vnode.attrs.fetchData !== this.dataFetchFunc) {
            this.items = [];
            this.currentPage = vnode.attrs.currentPage;
            this.dataFetchFunc = vnode.attrs.fetchData;
            this._getData(this.dataFetchFunc);
        }
    }

    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        const basePageNumberCnt = (this.currentPage - 1) * 30;

        return m(
            "div",
            {
                className: "mithril-New",
                key: vnode.attrs.routeName
            },
            this.items.map((item, id) => m(Item, {
                id: basePageNumberCnt + id + 1,
                key: item.id,
                link: item.url,
                title: item.title,
                user: item.user,
                points: item.points,
                timeAgo: item.time_ago,
                comments: item.comments_count
            }))
        );
    }
}
