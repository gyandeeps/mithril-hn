/**
 * @fileoverview Data fetch and UI for each route
 * @author Gyandeep Singh
 */

"use strict";

import m from "mithril/index";
import Item from "./Item";

/**
 * Generates vdom for all the items
 * @param {Array<Object>} items - collection of response items from service
 * @param {int} basePageNumberCnt - base page count
 * @returns {Array<Object>} collection of vdom for items
 * @private
 */
const generateItems = (items, basePageNumberCnt) =>
    items.map((item, id) => m(Item, {
        id: basePageNumberCnt + id + 1,
        key: item.id,
        link: item.url,
        title: item.title,
        user: item.user,
        points: item.points,
        timeAgo: item.time_ago,
        comments: item.comments_count
    }));

export default class DataGrid {
    constructor() {
        this.items = [];
        this.routeId = "";
        this.isLoading = true;
    }

    /**
     * fetches data and then when it done then it populates the items meber variable
     * @param {Function} fetchFunc - fetch fucntion based on the route in context
     * @returns {undefined}
     */
    _getData(fetchFunc, routeId) {
        this.isLoading = true;

        fetchFunc(this.currentPage)
            .then((data) => {
                this.isLoading = false;
                this.items = this.routeId === routeId ? data : [];
            })
            .catch((err) => {
                this.items = [];
                this.isLoading = false;
                console.error(err);
            });
    }

    /**
     * Updates the internal state with attr
     * @param {object} vnode - standrd mithril view method
     * @returns {undefined}
     */
    _updateState(vnode) {
        this.items = [];
        this.routeId = `${vnode.attrs.routeName}-${vnode.attrs.currentPage}`;
        this.currentPage = vnode.attrs.currentPage;
        this.dataFetchFunc = vnode.attrs.fetchData;
        this._getData(this.dataFetchFunc, this.routeId);
    }

    /**
     * Mithril oninit lifecycle
     * @param {object} vnode - standrd mithril view method
     * @returns {undefined}
     */
    oninit(vnode) {
        this._updateState(vnode);
    }

    /**
     * Mithril onupdate lifecycle
     * @param {object} vnode - standrd mithril view method
     * @returns {undefined}
     */
    onbeforeupdate(vnode) {
        if (vnode.attrs.currentPage !== this.currentPage || vnode.attrs.fetchData !== this.dataFetchFunc) {
            this._updateState(vnode);
        }
    }

    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        return m(
            "div",
            {
                className: "mithril-New",
                key: this.routeId
            },
            this.isLoading ? "Loading..." : generateItems(this.items, (this.currentPage - 1) * 30)
        );
    }
}
