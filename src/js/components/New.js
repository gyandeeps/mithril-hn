import m from "mithril/hyperscript";
import { redraw } from "mithril/redraw";
import Item from "./Item";
import { getNew } from "../data/fetch-data";

export default class New {
    constructor() {
        this.items = [];
    }

    _getData() {
        getNew(this.currentPage)
            .then((data) => {
                this.items = data;
                this.newData = true;
                redraw();
            });
    }

    oninit(vnode) {
        this.currentPage = vnode.attrs.currentPage;
        this._getData();
    }

    onupdate(vnode) {
        if (vnode.attrs.currentPage !== this.currentPage) {
            this.items = [];
            this.currentPage = vnode.attrs.currentPage;
            this._getData();
        }
    }

    onbeforeupdate(vnode) {
        if (vnode.attrs.currentPage === this.currentPage && !this.newData) {
            this.newData = false;
            return false;
        }
        return true;
    }

    view(vnode) {
        return m(
            "div",
            {
                class: "mithril-New"
            },
            this.items.map((item, id) => m(Item, {
                id: ((this.currentPage - 1) * 30) + id + 1,
                key: item.id,
                link: item.url,
                title: item.title,
                user: item.user,
                comments: item.comments_count
            }))
        );
    }
}
