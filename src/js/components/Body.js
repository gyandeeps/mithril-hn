import m from "mithril/hyperscript";
import route from "mithril/route";
import New from "./New";
import Pager from "./Pager";

export default class Body {
    view(vnode) {
        return m(
            "div",
            {
                class: "mithril-body"
            },
            [
                m(Pager, {
                    currentPage: vnode.attrs.currentPage,
                    totalPage: 17
                }),
                m(New, {
                    currentPage: vnode.attrs.currentPage,
                })
            ]
        );
    }
}
