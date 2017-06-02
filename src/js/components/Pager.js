import m, { route } from "mithril/index";

export default class Pager {
    view(vnode) {
        return m(
            "p",
            {
                class: "mithril-Pager"
            },
            [
                m(
                    "a",
                    {
                        href: vnode.attrs.currentPage > 1 ? `/${vnode.attrs.routeName}/${vnode.attrs.currentPage - 1}` : "",
                        oncreate: route.link
                    },
                    "Previous "
                ),
                m(
                    "span",
                    {},
                    `${vnode.attrs.currentPage}/${vnode.attrs.totalPage}`
                ),
                m(
                    "a",
                    {
                        href: vnode.attrs.currentPage < vnode.attrs.totalPage ? `/${vnode.attrs.routeName}/${vnode.attrs.currentPage + 1}` : "",
                        oncreate: route.link
                    },
                    " Next"
                )
            ]
        );
    }
}
