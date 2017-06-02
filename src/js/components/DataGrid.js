import m, { redraw } from "mithril";
import Item from "./Item";

export default class DataGrid {
    constructor() {
        this.items = [];
    }

    _getData(fetchFunc) {
        fetchFunc(this.currentPage)
            .then((data) => {
                this.items = data;
                this.newData = true;
                redraw();
            });
    }

    oninit(vnode) {
        this.currentPage = vnode.attrs.currentPage;
        this.dataFetchFunc = vnode.attrs.fetchData;
        this._getData(this.dataFetchFunc);
    }

    onupdate(vnode) {
        if (vnode.attrs.currentPage !== this.currentPage || vnode.attrs.fetchData !== this.dataFetchFunc) {
            this.items = [];
            this.currentPage = vnode.attrs.currentPage;
            this.dataFetchFunc = vnode.attrs.fetchData;
            this._getData(this.dataFetchFunc);
        }
    }

    view(vnode) {
        return m(
            "div",
            {
                class: "mithril-New",
                key: vnode.attrs.routeName
            },
            this.items.map((item, id) => m(Item, {
                id: ((this.currentPage - 1) * 30) + id + 1,
                key: item.id,
                link: item.url,
                title: item.title,
                user: item.user,
                points: item.points,
                timeAgo: item.time_ago,
                comments: item.comments_count
            }))
        );
    }
}
