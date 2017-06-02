import m, { route } from "mithril";

const createLink = (name, nestedRoute = "", children) => m(
    "li",
    {
        class: "mithril-nav-item"
    },
    m(
        "a",
        {
            href: `/${name}${nestedRoute !== "" ? `/${nestedRoute}` : ""}`,
            class: route.get().split("/")[1] === name ? "selected" : "",
            oncreate: route.link
        },
        children || name
    )
);

const createHome = () => createLink("", "", m(
    "img",
    {
        src: "/img/logo-30x30.png",
        alt: "Mithril icon"
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
                    createLink("show"),
                    createLink("ask"),
                    createLink("jobs")
                ]
            )
        );
    }
}
