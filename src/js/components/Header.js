import m from "mithril/hyperscript";
import route from "mithril/route";

const createLink = (name, nestedRoute, children) => m(
    "li",
    {
        class: "mithril-nav-item"
    },
    m(
        "a",
        {
            href: `/${name}${nestedRoute !== "" ? `/${nestedRoute}` : ""}`,
            class: route.get() === `/${name}` ? "selected" : "",
            oncreate: route.link
        },
        children || name
    )
);

const createHome = () => createLink("", "", m(
    "img",
    {
        src: "https://avatars1.githubusercontent.com/u/19475707?v=3&s=30"
    },
    ""
));

export default class Header {
    view(vnode) {
        return m(
            "nav",
            {
                class: "mithril-header"
            },
            m(
                "ol",
                {
                    class: "mithril-nav"
                },
                [
                    createHome(),
                    createLink("new", vnode.attrs.currentPage),
                    createLink("comments"),
                    createLink("show"),
                    createLink("ask"),
                    createLink("jobs")
                ]
            )
        );
    }
}
