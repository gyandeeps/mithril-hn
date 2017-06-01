import { request } from "mithril/request";

export const getNew = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/news?page=${id}`
});

export const getShow = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/show?page=${id}`
});

export const getAsk = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/ask?page=${id}`
});

export const getJobs = (id = 1) => request({
    type: "GET",
    url: `https://node-hnapi.herokuapp.com/jobs?page=${id}`
});
