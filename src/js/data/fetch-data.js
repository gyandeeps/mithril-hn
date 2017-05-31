import { request } from "mithril/request";

export const getNew = (id = 1) => request({
    type: "GET",
    url: `http://node-hnapi.herokuapp.com/news?page=${id}`
});


