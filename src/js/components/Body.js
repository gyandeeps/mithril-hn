/**
 * @fileoverview Body UI is drawn by this module
 * @author Gyandeep Singh
 */

"use strict";

import m from "mithril/index";
import DataGrid from "./DataGrid";
import Pager from "./Pager";
import * as dataFetch from "../data/fetch-data";

const dataFetchToRouteMap = {
    new: dataFetch.getNew,
    ask: dataFetch.getAsk,
    show: dataFetch.getShow,
    jobs: dataFetch.getJobs
};

const totalPagesToRouteMap = {
    new: 15,
    ask: 3,
    show: 3,
    jobs: 1
};

/**
 * Gets the data retrieval function based on route
 * @param {string} routeName - route name in context
 * @returns {Function} Data fetch function
 * @private
 */
const getDataByRoute = (routeName) => dataFetchToRouteMap[routeName] || dataFetch.getNew;

/**
 * Gets the total page numbers based on route
 * @param {string} routeName - route name in context
 * @returns {number} total number of pages
 * @private
 */
const getTotalPageByRoute = (routeName) => totalPagesToRouteMap[routeName] || 5;

export default class Body {
    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        return m(
            "div",
            {
                className: "mithril-body"
            },
            [
                m(Pager, {
                    routeName: vnode.attrs.routeName,
                    currentPage: vnode.attrs.currentPage,
                    totalPage: getTotalPageByRoute(vnode.attrs.routeName)
                }),
                m(DataGrid, {
                    routeName: vnode.attrs.routeName,
                    currentPage: vnode.attrs.currentPage,
                    fetchData: getDataByRoute(vnode.attrs.routeName)
                })
            ]
        );
    }
}
