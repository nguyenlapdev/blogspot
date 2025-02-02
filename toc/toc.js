const contentBodyEl = document.getElementById('post-body')
if(contentBodyEl) {
    const tocEl = '<b>{toc}</b>'
    const headingEls = contentBodyEl.querySelectorAll('h2')
    const headingFirstEl = headingEls[Object.keys(headingEls)[0]]
		headingFirstEl.insertAdjacentHTML( 'beforeBegin', tocEl )
}
function shortCodeToc(t, n, i) {
    for (var e = t.split("$"), o = /[^{\}]+(?=})/g, c = 0; c < e.length; c++) {
        var a = e[c].split("=");
        if (a[0].trim() == n) return null != (i = a[1]).match(o) && String(i.match(o)).trim()
    }
    return !1
}
! function(t) {
    "use strict";
    var n = function(n) {
            return this.each(function() {
                var i, e, o = t(this),
                    c = o.data(),
                    a = [o],
                    r = this.tagName,
                    s = 0;
                i = t.extend({
                    content: "body",
                    headings: "h1,h2,h3"
                }, {
                    content: c.toc || void 0,
                    headings: c.tocHeadings || void 0
                }, n), e = i.headings.split(","), t(i.content).find(i.headings).attr("id", function(n, i) {
                    return i || function(t) {
                        0 === t.length && (t = "?");
                        for (var n = t.replace(/\s+/g, "_"), i = "", e = 1; null !== document.getElementById(n + i);) i = "_" + e++;
                        return n + i
                    }(t(this).text())
                }).each(function() {
                    var n = t(this),
                        i = t.map(e, function(t, i) {
                            return n.is(t) ? i : void 0
                        })[0];
                    if (i > s) {
                        var o = a[0].children("li:last")[0];
                        o && a.unshift(t("<" + r + "/>").appendTo(o))
                    } else a.splice(0, Math.min(s - i, Math.max(a.length - 1, 0)));
                    t("<li/>").appendTo(a[0]).append(t("<a/>").text(n.text()).attr("href", "#" + n.attr("id"))), s = i
                })
            })
        },
        i = t.fn.toc;
    t.fn.toc = n, t.fn.toc.noConflict = function() {
        return t.fn.toc = i, this
    }, t(function() {
        n.call(t("[data-toc]"))
    })
}
(window.jQuery), $(".post-body b").each(function() {
    var t = $(this),
        n = t.text();
    n.toLowerCase().trim().match("{toc}") && (n = 0 != shortCodeToc(n, "title") ? shortCodeToc(n, "title") : "Mục lục bài viết", t.replaceWith('<div class="toc-wrap"><div class="toc-inner"><a href="javascript:;" class="toc-title" role="button" title="' + n + '">' + n + '</a><ol id="toc"></ol></div></div>'), $(".toc-title").each(function(t) {
        (t = $(this)).on("click", function() {
            t.toggleClass("is-expanded"), $("#toc").slideToggle(170)
        })
    }), $("#toc").toc({
        content: ".post-body",
        headings: "h2,h3,h4"
    }), $("#toc li a").each(function(t) {
        (t = $(this)).click(function() {
            return $("html,body").animate({
                scrollTop: $(t.attr("href")).offset().top - 20
            }, 500), !1
        })
    }))
});
