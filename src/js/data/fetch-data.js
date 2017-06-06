/**
 * @fileoverview Data fetch API
 * @author Gyandeep Singh
 */

"use strict";

import { request } from "mithril/index";

const serviceUrl = "https://node-hnapi.herokuapp.com/";

/**
 * Gets data for news
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getNew = (id = 1) => request({
    type: "GET",
    url: `${serviceUrl}news?page=${id}`
});

/**
 * Gets data for show
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getShow = (id = 1) => request({
    type: "GET",
    url: `${serviceUrl}show?page=${id}`
});

/**
 * Gets data for page
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getAsk = (id = 1) => request({
    type: "GET",
    url: `${serviceUrl}ask?page=${id}`
});

/**
 * Gets data for jobs
 * @param {int} [id = 1] - page numbers
 * @returns {Promise} Promise
 */
export const getJobs = (id = 1) => request({
    type: "GET",
    url: `${serviceUrl}jobs?page=${id}`
});
