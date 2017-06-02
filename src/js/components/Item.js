/**
 * @fileoverview Each Item UI is drawn by this module
 * @author Gyandeep Singh
 */

"use strict";

import m from "mithril/index";

export default class Item {
    /**
     * Mithril view
     * @param {object} vnode - standrd mithril view method
     * @returns {object} mithril vdom
     */
    view(vnode) {
        return m(
            "article",
            {
                className: "mithril-Item",
                key: vnode.attrs.key
            },
            [
                m(
                    "span",
                    {
                        className: "mithril-Item-id"
                    },
                    vnode.attrs.id
                ),
                m(
                    "div",
                    {
                        className: "mithril-Item-body"
                    },
                    [
                        m(
                            "h2",
                            {},
                            m(
                                "a",
                                {
                                    className: "mithril-Item-link",
                                    href: vnode.attrs.link
                                },
                                vnode.attrs.title
                            )
                        ),
                        m(
                            "p",
                            {
                                className: "mithril-Item-footer"
                            },
                            [
                                vnode.attrs.points ? ` ${vnode.attrs.points} points ` : null,
                                vnode.attrs.user ? m(
                                    "a",
                                    {
                                        className: "mithril-Item-user",
                                        href: vnode.attrs.user
                                    },
                                    vnode.attrs.user
                                ) : null,
                                ` ${vnode.attrs.timeAgo} `,
                                m(
                                    "span",
                                    {},
                                    [
                                        " | ",
                                        m(
                                            "a",
                                            {
                                                className: "mithril-Item-comment",
                                                href: vnode.attrs.link
                                            },
                                            `${vnode.attrs.comments} comments`
                                        )
                                    ]
                                )
                            ]
                        )
                    ]
                )
            ]
        );
    }
}
