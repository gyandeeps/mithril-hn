import m from "mithril/hyperscript";
import route from "mithril/route";
import New from "./New";
import Pager from "./Pager";
import * as dataFetch from "../data/fetch-data";

const getDataByRoute = (routeName) => {
    switch(routeName) {
        case "new":
            return dataFetch.getNew;

        case "ask":
            return dataFetch.getAsk;

        case "show":
            return dataFetch.getShow;

         case "jobs":
            return dataFetch.getJobs;

         default:
               return dataFetch.getNew;
    }
};

const getTotalPageByRoute = (routeName) => {
    switch(routeName) {
        case "new":
            return 17;

        case "ask":
        case "show":
            return 3;

        case "jobs":
            return 1;

         default:
               return 5;
    }
};

const getParsedRouteName = () => route.get().split("/")[1] || "new";

export default class Body {
    view(vnode) {
        const routeName = getParsedRouteName();

        return m(
            "div",
            {
                class: "mithril-body"
            },
            [
                m(Pager, {
                    routeName,
                    currentPage: vnode.attrs.currentPage,
                    totalPage: getTotalPageByRoute(routeName)
                }),
                m(New, {
                    routeName,
                    currentPage: vnode.attrs.currentPage,
                    fetchData: getDataByRoute(routeName)
                })
            ]
        );
    }
}
