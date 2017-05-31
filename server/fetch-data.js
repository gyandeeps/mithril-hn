/**
 * @fileoverview Data fetcher for HN
 * @author Gyandeep Singh
 */

"use strict";

require("isomorphic-fetch");

const fetchNews = (page = 0) =>
    fetch(`http://node-hnapi.herokuapp.com/news${page === 0 ? "" : `?page=${page}`}`)
        .then((res) => res.json());

const fetchItem = (id = "") =>
    fetch(`https://node-hnapi.herokuapp.com/item/${id}`)
        .then((res) => res.json());

module.exports = {
    fetchNews,
    fetchItem
};
