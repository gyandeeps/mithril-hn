/**
 * @fileoverview Data fetch API
 * @author Gyandeep Singh
 */

"use strict";

import { request } from "mithril/index";

/**
 * Gets data for news
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getNew = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/news?page=${id}`
});

/**
 * Gets data for show
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getShow = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/show?page=${id}`
});

/**
 * Gets data for page
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getAsk = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/ask?page=${id}`
});

/**
 * Gets data for jobs
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getJobs = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/jobs?page=${id}`
});
