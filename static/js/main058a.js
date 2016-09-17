!function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (r)
                    return r(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = n[s] = {
                exports: {}
            };
            t[s][0].call(c.exports, function(e) {
                var n = t[s][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)
        o(i[s]);
    return o
}({
    1: [function(e, t, n) {
        function i(e) {
            for (var t = window.location.search.substring(1), n = t.split("&"), i = 0; i < n.length; i++) {
                var o = n[i].split("=");
                if (o[0] == e)
                    return o[1]
            }
            return !1
        }
        var o = e("./vendor/init_plugins.js");
        if ("desktop" !== i("mode") && void 0 !== typeof window.orientation && o(window).width() < 737)
            throw window.location = "/mobile/",
            new Error("mobile");
        var r = e("./lib/utils.js")
          , s = e("./lib/map.js");
        o(function() {
            function e(e, t) {
                var n = {
                    width: u.width,
                    height: u.height,
                    presentationWidth: o(window).width(),
                    presentationHeight: o(window).height()
                };
                return n.presentationWidth -= n.presentationHeight * u.margin,
                n.presentationHeight -= n.presentationHeight * u.margin,
                "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth),
                "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight),
                n
            }
            o("body").removeClass("before").show().jpreLoader(),
            o.isDevice && o("html").addClass("mobile"),
            o(".null-slide-bottom span").click(function() {
                o.fn.fullpage.moveSectionDown()
            });
            var t = o("[data-iPhone]")
              , n = (t.find("[data-iphone-slider]"),
            435)
              , i = o(".js-video")
              , a = o(".iPhone .js-video__slides")
              , l = (o("#skrollr-body"),
            new s(o("[data-map]"),t,t.find("[data-map-phone]")));
            l.updateDimentions(),
            l.put();
         
            var c = 1;
            !function() {
                function e(e, t) {
                    var n = {
                        width: i.width,
                        height: i.height,
                        presentationWidth: o(window).width(),
                        presentationHeight: o(window).height()
                    };
                    return n.presentationWidth -= n.presentationHeight * i.margin,
                    n.presentationHeight -= n.presentationHeight * i.margin,
                    "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth),
                    "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight),
                    n
                }
                function t(t) {
                    var n = e();
                    c = Math.min(n.presentationWidth / n.width, n.presentationHeight / n.height),
                    c = Math.max(c, i.minScale),
                    c = Math.min(c, i.maxScale),
                    t.css({
                        transform: "scale(" + c + ")"
                    })
                }
                var n = o("[data-elementsize]")
                  , i = {
                    minScale: .4,
                    maxScale: 1,
                    width: 960,
                    height: 900,
                    margin: .1
                };
                o(window).resize(function() {
                    t(n)
                })
            }();
            var u = {
                minScale: .2,
                maxScale: 1,
                width: 1800,
                height: 900,
                margin: .1
            };
            o(window).resize(function() {
                    console.log('text');
                var i = e();
                phoneScale = Math.min(i.presentationWidth / i.width, i.presentationHeight / i.height),
                phoneScale = Math.max(phoneScale, u.minScale),
                phoneScale = Math.min(phoneScale, u.maxScale),
                o(".top-words").css({
                    transform: "scale(" + phoneScale + ")"
                }),
                o(".iPhone-download-hover").css({
                    "font-size": 60 * phoneScale
                }),
                t.css({
                    width: n * phoneScale + "px"
                }),
                t.css({
                    "margin-top": -t.height() / 2,
                    "margin-left": -t.width() / 2
                })
            }).resize(),
            o(window).load(function() {
                o(window).resize();
            });
            var d = "";
            o(".js-map-slide").on("mousedown", function() {
                o(this).addClass("_active"),
                d && clearTimeout(d)
            }).mouseup(function() {
                d = setTimeout(function() {
                    o(".js-map-slide").removeClass("_active")
                }, 1e3)
            });
            var p = null
              , f = o("[data-iPhone]")
              , h = o("[data-tour]");
            tourParallax = h.parallax({
                relativeInput: !1,
                scalarX: 3,
                scalarY: 2
            }),
            tourParallax.parallax("disable");
            var g = o("[data-share]");
            shareParallax = g.parallax({
                relativeInput: !1,
                scalarX: 3,
                scalarY: 2
            }),
            shareParallax.parallax("disable");
            var m = o(".js-main-slider-item")
              , v = [];
            m.each(function() {
                v.push(o(this).attr("data-anchor"))
            }),
            o(".js-main-slider").fullpage({
                sectionSelector: m,
                navigation: !0,
                anchors: v,
                navigationPosition: "right",
                scrollingSpeed: 700,
                css3: !0,
                easing: "linear",
                easingcss3: "cubic-bezier(0,0,0,1)",
                afterResize: function() {
                    b.resizeFix(),
                    y.resizeFix(),
                    w.resizeFix()
                },
                onLeave: function(e, t, n, r) {
                    o(".phone-map").hide(),
                    i.each(function() {
                        var e = o(this).get(0);
                        e.pause(),
                        e.currentTime = 0
                    }),
                    "fact" == r ? (f.addClass("_onFact"),
                    o(".iPhone-video-placeholder").next().fadeOut()) : (f.removeClass("_onFact"),
                    o(".iPhone-video-placeholder").next().fadeIn()),
                    "nicer_way" == r,
                    "tours" == r && (setTimeout(function() {
                        o(".tour-nyc").airport(["2016"])
                    }, 600)),
                    "map" == r && (l.updateDimentions(),
                    l.put(),
                    o(".phone-map").show()),
                    "slides" == r && (o.isDevice || (
                    o(".swiper-slide-active .js-video__slides").eq(0).parent().prev(".iPhone-video-placeholder").fadeOut())),
                    "about" == r && o(".about-parallax-item, .about-rows ._row img").removeClass("_moveDown"),
                    "subscribe" == r && (o(".subscribe-parallax-item").removeClass("_moveDown"),
                    "down" == n && o(".about-parallax-item, .about-rows ._row img").addClass("_moveDown")),
                    "about" == r || "subscribe" == r || "share" == r ? f.addClass("_hidden") : f.removeClass("_hidden"),
                    "fact" == v[0] ? t > 1 && y.swipeTo(t - 2) : y.swipeTo(t - 1),
                    "share" == r ? ("down" == n && o(".subscribe-parallax-item").addClass("_moveDown"),
                    setTimeout(function() {
                        shareParallax.parallax("enable")
                    }, 400)) : shareParallax.parallax("disable"),
                    "tours" == r ? setTimeout(function() {
                        tourParallax.parallax("enable")
                    }, 400) : tourParallax.parallax("disable")
                }
            }),
            o(".null-slide").length && (f.addClass("_onFact"),
            o(".iPhone-video-placeholder").next().fadeOut()),
            o(".logo").click(function() {
                o.fn.fullpage.moveTo(1)
            });
            var y = o(".iPhone-vertical-slider .swiper-container").swiper({
                mode: "vertical",
                onlyExternal: !0
            })
              , w = o(".iPhone-horizontal-slider .swiper-container").swiper({
                mode: "horizontal",
                initialSlide: 0,
                onlyExternal: !0,
                loop: !0,
                useCSS3Transforms: !0,
                loopAdditionalSlides: 0,
                onSlideChangeStart: function(e) {}
            })
              , x = null
              , b = o("[data-slider-inner]").swiper({
                mode: "horizontal",
                initialSlide: 0,
                onlyExternal: !0,
                loop: !0,
                loopAdditionalSlides: 0,
                onSwiperCreated: function() {
                    x = o(".js-inner-slider").find(".slider-item"),
                    scalingElement = o("[data-elementsize]")
                },
                onSlideChangeStart: function(e) {
                    !function(e) {
                        setTimeout(function() {
                            o(x[e]).addClass("local-ready")
                        }, 300)
                    }(e.activeIndex)
                }
            })
              , S = !1
              , T = !1
              , C = o("[data-slider-inner-switch-left]")
              , k = o("[data-slider-inner-switch-right]");
            C.on("click", function() {
                o("._slide-4 .swiper-slide").removeClass("show-left-slide").removeClass("show-right-slide"),
                setTimeout(function() {
                    S === !0 && o(".tour-slider .swiper-slide-active").prev().addClass("show-left-slide")
                }, 300),
                b.swipePrev(),
                w.swipePrev()
            }),
            o.isDevice || C.on("mouseenter", function() {
                o(".tour-slider .swiper-slide-active").prev().addClass("show-left-slide"),
                S = !0
            }).on("mouseleave", function() {
                S = !1,
                o(".tour-slider .swiper-slide").removeClass("show-left-slide")
            }),
            k.on("click", function() {
                o(".tour-slider .swiper-slide").removeClass("show-left-slide").removeClass("show-right-slide"),
                setTimeout(function() {
                    T === !0 && o("[data-slider-inner-switch-right]").mouseenter()
                }, 300),
                b.swipeNext(),
                w.swipeNext()
            }),
            o.isDevice || k.on("mouseenter", function() {
                o(".tour-slider .swiper-slide-active").next().addClass("show-right-slide"),
                T = !0
            }).on("mouseleave", function() {
                T = !1,
                o(".tour-slider .swiper-slide").removeClass("show-right-slide")
            }),
            o(".js-share").on("click", function(e) {
                e.preventDefault();
                var t = o(this);
                r.createWindow(t.data("link"), t.data("message"))
            }),
            o(".js-subscribe").on("submit", function(e) {
                e.preventDefault();
                var t = o(this)
                  , n = t.attr("action")
                  , i = t.find('input[type="email"]').val();
                i && o.ajax({
                    url: n,
                    type: "post",
                    dataType: "json",
                    data: {
                        email: i
                    },
                    success: function(e) {
                        "undefined" != typeof e.msg && (t.addClass("_subscribed"),
                        t.html(e.msg))
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })
            }),
            o(window).on("resize", function() {
                clearTimeout(p),
                p = setTimeout(function() {
                    o(window).height(),
                    o(window).width();
                    l.updateDimentions(),
                    l.put()
                }, 300)
            })
        })
    }
    , {
        "./lib/map.js": 2,
        "./lib/utils.js": 3,
        "./vendor/init_plugins.js": 4
    }],
    2: [function(e, t, n) {
        var i = e("../vendor/jquery")
          , o = function(e, t, n) {
            this.phone = t,
            this.element = e,
            this.container = e.parent(),
            this.draggings = !1,
            this.phoneMap = n,
            this.phoneSlider = this.phone.find(".iPhone-slider"),
            this.memo = {
                top: 0,
                left: 0
            },
            this.previousMove = {
                pageX: 0,
                pageY: 0,
                timeStamp: null
            },
            this.currentMove = {
                pageX: 0,
                pageY: 0,
                timeStamp: null
            },
            void 0 !== t && t.on("mousedown", this.mouseDown.bind(this)),
            this.container.on("mousedown", this.mouseDown.bind(this)),
            i(window).on("mouseup", this.mouseUp.bind(this)),
            i(window).on("mousemove", this.mouseMove.bind(this)),
            this.element.css({
                transitionTimingFunction: "cubic-bezier(0.230, 1.000, 0.320, 1.000)"
            }),
            this.phoneMap.css({
                transitionTimingFunction: "cubic-bezier(0.230, 1.000, 0.320, 1.000)"
            })
        }
        ;
        o.prototype.mouseDown = function(e) {
            e.preventDefault(),
            this.phoneOffset = this.phoneSlider.offset(),
            this.draggings = !0,
            this.memo.top = this.mapPosition.top - e.pageY,
            this.memo.left = this.mapPosition.left - e.pageX,
            this.setCurrentMove(e),
            this.element.css({
                transitionDuration: "0ms"
            }),
            this.phoneMap.css({
                transitionDuration: "0ms"
            })
        }
        ,
        o.prototype.mouseUp = function(e) {
            this.draggings = !1,
            this.element.css({
                transitionDuration: "500ms"
            }),
            this.phoneMap.css({
                transitionDuration: "500ms"
            }),
            dX = e.pageX - this.previousMove.pageX,
            dY = e.pageY - this.previousMove.pageY,
            dT = e.timeStamp - this.previousMove.timeStamp,
            speedX = dX / dT,
            speedY = dY / dT;
            var t = this.memo.top + e.pageY + 200 * speedY
              , n = this.memo.left + e.pageX + 200 * speedX;
            n = Math.min(Math.max(this.boundingBox.left, n), 0),
            t = Math.min(Math.max(this.boundingBox.bottom, t), 0),
            this.mapPosition.left = n,
            this.mapPosition.top = t,
            this.put()
        }
        ,
        o.prototype.mouseMove = function(e) {
            if (this.draggings) {
                e.preventDefault(),
                e.stopPropagation(),
                Math.min(Math.max(-1440, n), 0),
                this.setPreviousMove(this.currentMove),
                this.setCurrentMove(e);
                var t = this.memo.top + e.pageY
                  , n = this.memo.left + e.pageX;
                n = Math.min(Math.max(this.boundingBox.left, n), 0),
                t = Math.min(Math.max(this.boundingBox.bottom, t), 0),
                this.mapPosition.left = n,
                this.mapPosition.top = t,
                this.put()
            }
        }
        ,
        o.prototype.put = function() {
            this.element.css({
                transform: "translate3d(" + this.mapPosition.left + "px, " + this.mapPosition.top + "px, 0)"
            });
            var e = this.mapPosition.top - this.phoneOffset.top
              , t = this.mapPosition.left - this.phoneOffset.left;
            this.phoneMap.css({
                transform: "translate3d(" + t + "px, " + e + "px, 0) "
            })
        }
        ,
        o.prototype.updateDimentions = function() {
            var e = this.element.width()
              , t = this.element.height()
              , n = this.container.width()
              , o = this.container.height();
            this.phoneOffset = this.phoneSlider.offset(),
            this.mapPosition = {
                top: -1610 + this.phoneOffset.top + i(".iPhone-slider").height() / 2,
                left: -1220 + this.phoneOffset.left + i(".iPhone-slider").width() / 2
            },
            this.boundingBox = {
                left: n - e,
                bottom: o - t
            }
        }
        ,
        o.prototype.setCurrentMove = function(e) {
            this.currentMove.pageX = e.pageX,
            this.currentMove.pageY = e.pageY,
            this.currentMove.timeStamp = e.timeStamp
        }
        ,
        o.prototype.setPreviousMove = function(e) {
            this.previousMove.pageX = e.pageX,
            this.previousMove.pageY = e.pageY,
            this.previousMove.timeStamp = e.timeStamp
        }
        ,
        t.exports = o
    }
    , {
        "../vendor/jquery": 8
    }],
    3: [function(e, t, n) {
        var i = (e("../vendor/jquery.js"),
        function(e) {
            return
        }
        )
          , o = function(e, t) {
            t = t || "",
            window.open(e + t + " " + window.location, "_blank", "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=600,height=400")
        }
        ;
        t.exports = {
            scale: i,
            createWindow: o
        }
    }
    , {
        "../vendor/jquery.js": 8
    }],
    4: [function(e, t, n) {
        var i = e("./jquery.js");
        window.jQuery = i,
        i.isDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
        e("./parallax.js"),
        e("./retina.js"),
        e("./swiper.js"),
        e("./jquery.fullPage.js"),
        e("./jquery.airport-1.1.source.js"),
        e("./jpreloader.js"),
        t.exports = i
    }
    , {
        "./jpreloader.js": 5,
        "./jquery.airport-1.1.source.js": 6,
        "./jquery.fullPage.js": 7,
        "./jquery.js": 8,
        "./parallax.js": 9,
        "./retina.js": 10,
        "./swiper.js": 11
    }],
    5: [function(e, t, n) {
        !function(e) {
            var t = new Array
              , n = new Array
              , i = function() {}
              , o = 0
              , r = {
                splashVPos: "35%",
                loaderVPos: "75%",
                splashID: "#jpreContent",
                showSplash: !0,
                showPercentage: !0,
                autoClose: !0,
                closeBtnText: "Start!",
                onetimeLoad: !1,
                debugMode: !1,
                splashFunction: function() {}
            }
              , s = function() {
                if (r.onetimeLoad) {
                    for (var e, t = document.cookie.split("; "), n = 0; e = t[n] && t[n].split("="); n++)
                        if ("jpreLoader" === e.shift())
                            return e.join("=");
                    return !1
                }
                return !1
            }
              , a = function(e) {
                if (r.onetimeLoad) {
                    var t = new Date;
                    t.setDate(t.getDate() + e);
                    var n = null == e ? "" : "expires=" + t.toUTCString();
                    document.cookie = "jpreLoader=loaded; " + n
                }
            }
              , l = function() {
                if (jOverlay = e("<div></div>").attr("id", "jpreOverlay").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 9999999
                }).appendTo("body"),
                r.showSplash) {
                    jContent = e("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                    var t = e(window).width() - e(jContent).width();
                    e(jContent).css({
                        position: "absolute",
                        top: r.splashVPos,
                        left: Math.round(50 / e(window).width() * t) + "%"
                    }),
                    e(jContent).html(e(r.splashID).wrap("<div/>").parent().html()),
                    e(r.splashID).remove(),
                    r.splashFunction()
                }
                jLoader = e("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
                e(window).width() - e(jLoader).width();
                e(jLoader).css({
                    position: "absolute"
                }),
                jBar = e('<div><div class="jpreBar__icon"></div></div>').attr("id", "jpreBar").css({
                    width: "0%"
                }).appendTo(jLoader),
                r.showPercentage && (jPer = e("<div></div>").attr("id", "jprePercentage").appendTo(jBar).html("Loading...")),
                r.autoclose || (jButton = e("<div></div>").attr("id", "jpreButton").on("click", function() {
                    f()
                }).css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).text(r.closeBtnText).hide())
            }
              , c = function(n) {
                e(n).find("*:not(script)").each(function() {
                    var n = "";
                    if (-1 == e(this).css("background-image").indexOf("none") && -1 == e(this).css("background-image").indexOf("-gradient")) {
                        if (n = e(this).css("background-image"),
                        -1 != n.indexOf("url")) {
                            var i = n.match(/url\((.*?)\)/);
                            n = i[1].replace(/\"/g, "")
                        }
                    } else
                        "img" == e(this).get(0).nodeName.toLowerCase() && "undefined" != typeof e(this).attr("src") && (n = e(this).attr("src"));
                    n.length > 0 && t.push(n)
                })
            }
              , u = function() {
                for (var e = 0; e < t.length; e++)
                    d(t[e])
            }
              , d = function(t) {
                var i = new Image;
                e(i).load(function() {
                    p()
                }).error(function() {
                    n.push(e(this).attr("src")),
                    p()
                }).attr("src", t)
            }
              , p = function() {
                o++;
                var n = Math.round(o / t.length * 100);
                if (e(jBar).stop().animate({
                    width: n + "%"
                }, {
                    duration: 500,
                    easing: "linear",
                    step: function() {
                        jPer.html(parseInt(e(this)[0].style.width) + "%"),
                        e(this).css("overflow", "visible")
                    }
                }),
                r.showPercentage && e(jPer).text(n + "%"),
                o >= t.length) {
                    if (o = t.length,
                    a(),
                    r.showPercentage && e(jPer).text("100%"),
                    r.debugMode) {
                        h()
                    }
                    e(jBar).stop().animate({
                        width: "100%"
                    }, {
                        duration: 500,
                        easing: "linear",
                        step: function() {
                            jPer.html(parseInt(e(this)[0].style.width) + "%"),
                            e(this).css("overflow", "visible")
                        },
                        complete: function() {
                            r.autoClose ? f() : e(jButton).fadeIn(1e3)
                        }
                    })
                }
            }
              , f = function() {
                jOverlay.addClass("_hidden"),
                setTimeout(function() {
                    e(jOverlay).remove(),
                    i()
                }, 700)
            }
              , h = function() {
                if (n.length > 0) {
                    var e = "ERROR - IMAGE FILES MISSING!!!\n\r";
                    e += n.length + " image files cound not be found. \n\r",
                    e += "Please check your image paths and filenames:\n\r";
                    for (var t = 0; t < n.length; t++)
                        e += "- " + n[t] + "\n\r";
                    return !0
                }
                return !1
            }
            ;
            e.fn.jpreLoader = function(t, n) {
                return t && e.extend(r, t),
                "function" == typeof n && (i = n),
                e("body").css({
                    display: "block"
                }),
                this.each(function() {
                    s() ? (e(r.splashID).remove(),
                    i()) : (l(),
                    c(this),
                    u())
                })
            }
        }(jQuery)
    }
    , {}],
    6: [function(e, t, n) {
        !function(e) {
            e.fn.extend({
                airport: function(t) {
                    function n(e, t) {
                        return e + new Array(t - e.length + 1).join(" ")
                    }
                    function i(n, s, a, l) {
                        e(o).find(".c" + n).html(" " == r[s] ? "&nbsp;" : r[s]),
                        setTimeout(function() {
                            s > r.length ? i(n + 1, 0, a, l + 1) : r[s] != t[a].substring(l, l + 1).toLowerCase() ? i(n, s + 1, a, l) : i(n + 1, 0, a, l + 1)
                        }, 20)
                    }
                    var o = e(this)
                      , r = ["0", "1", "2", "3", "4", "5", "6", " ", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]
                      , s = 0
                      , a = items2 = t.length;
                    for (e(this).empty(); a--; )
                        t[a].length > s && (s = t[a].length);
                    for (; items2--; )
                        t[items2] = n(t[items2], s);
                    for (spans = s; spans--; )
                        e(this).prepend("<span class='c" + spans + "'></span>");
                    i(0, 0, 0, 0)
                }
            })
        }(jQuery)
    }
    , {}],
    7: [function(e, t, n) {
        /**
         * fullPage 2.5.4
         * https://github.com/alvarotrigo/fullPage.js
         * MIT licensed
         *
         * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
         */
        !function(e) {
            e.fn.fullpage = function(t) {
                function n(e) {
                    e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),
                    "#fff" != t.controlArrowColor && (e.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + t.controlArrowColor),
                    e.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + t.controlArrowColor + " transparent transparent")),
                    t.loopHorizontal || e.find(".fp-controlArrow.fp-prev").hide()
                }
                function i() {
                    e("body").append('<div id="fp-nav"><ul></ul></div>'),
                    ce = e("#fp-nav"),
                    ce.css("color", t.navigationColor),
                    ce.addClass(t.navigationPosition);
                    for (var n = 0; n < e(".fp-section").length; n++) {
                        var i = "";
                        t.anchors.length && (i = t.anchors[n]);
                        var o = '<li><a href="#' + i + '"><span></span></a>'
                          , r = t.navigationTooltips[n];
                        void 0 != r && "" != r && (o += '<div class="fp-tooltip ' + t.navigationPosition + '">' + r + "</div>"),
                        o += "</li>",
                        ce.find("ul").append(o)
                    }
                }
                function o() {
                    e(".fp-section").each(function() {
                        var t = e(this).find(".fp-slide");
                        t.length ? t.each(function() {
                            H(e(this))
                        }) : H(e(this))
                    }),
                    e.isFunction(t.afterRender) && t.afterRender.call(this)
                }
                function r() {
                    if (!t.autoScrolling || t.scrollBar) {
                        var n = e(window).scrollTop()
                          , i = 0
                          , o = Math.abs(n - e(".fp-section").first().offset().top);
                        e(".fp-section").each(function(t) {
                            var r = Math.abs(n - e(this).offset().top);
                            o > r && (i = t,
                            o = r)
                        });
                        var r = e(".fp-section").eq(i)
                    }
                    if (!t.autoScrolling && !r.hasClass("active")) {
                        Se = !0;
                        var s = e(".fp-section.active").index(".fp-section") + 1
                          , a = j(r)
                          , l = r.data("anchor")
                          , c = r.index(".fp-section") + 1
                          , u = r.find(".fp-slide.active");
                        if (u.length)
                            var d = u.data("anchor")
                              , p = u.index();
                        r.addClass("active").siblings().removeClass("active"),
                        ge || (e.isFunction(t.onLeave) && t.onLeave.call(this, s, c, a, l),
                        e.isFunction(t.afterLoad) && t.afterLoad.call(this, l, c)),
                        P(l, 0),
                        t.anchors.length && !ge && (ae = l,
                        q(p, d, l, c)),
                        clearTimeout(xe),
                        xe = setTimeout(function() {
                            Se = !1
                        }, 100)
                    }
                    t.scrollBar && (clearTimeout(be),
                    be = setTimeout(function() {
                        ge || h(r)
                    }, 1e3))
                }
                function s(e) {
                    return e.find(".fp-slides").length ? scrollable = e.find(".fp-slide.active").find(".fp-scrollable") : scrollable = e.find(".fp-scrollable"),
                    scrollable
                }
                function a(t, n) {
                    if (ye[t]) {
                        if ("down" == t)
                            var i = "bottom"
                              , o = e.fn.fullpage.moveSectionDown;
                        else
                            var i = "top"
                              , o = e.fn.fullpage.moveSectionUp;
                        if (n.length > 0) {
                            if (!D(i, n))
                                return !0;
                            o()
                        } else
                            o()
                    }
                }
                function l(n) {
                    var i = n.originalEvent;
                    if (!c(n.target)) {
                        t.autoScrolling && !t.scrollBar && n.preventDefault();
                        var o = e(".fp-section.active")
                          , r = s(o);
                        if (!ge && !ue) {
                            var l = K(i);
                            ke = l.y,
                            Ee = l.x,
                            o.find(".fp-slides").length && Math.abs(Ce - Ee) > Math.abs(Te - ke) ? Math.abs(Ce - Ee) > e(window).width() / 100 * t.touchSensitivity && (Ce > Ee ? ye.right && e.fn.fullpage.moveSlideRight() : ye.left && e.fn.fullpage.moveSlideLeft()) : t.autoScrolling && !t.scrollBar && Math.abs(Te - ke) > e(window).height() / 100 * t.touchSensitivity && (Te > ke ? a("down", r) : ke > Te && a("up", r))
                        }
                    }
                }
                function c(n, i) {
                    i = i || 0;
                    var o = e(n).parent();
                    return i < t.normalScrollElementTouchThreshold && o.is(t.normalScrollElements) ? !0 : i == t.normalScrollElementTouchThreshold ? !1 : c(o, ++i)
                }
                function u(e) {
                    var t = e.originalEvent
                      , n = K(t);
                    Te = n.y,
                    Ce = n.x
                }
                function d(n) {
                    if (t.autoScrolling) {
                        n = window.event || n;
                        var i = Math.max(-1, Math.min(1, n.wheelDelta || -n.deltaY || -n.detail));
                        t.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                        var o = e(".fp-section.active")
                          , r = s(o);
                        return ge || (0 > i ? a("down", r) : a("up", r)),
                        !1
                    }
                }
                function p(n) {
                    var i = e(".fp-section.active")
                      , o = i.find(".fp-slides");
                    if (o.length && !ue) {
                        var r = o.find(".fp-slide.active")
                          , s = null ;
                        if (s = "prev" === n ? r.prev(".fp-slide") : r.next(".fp-slide"),
                        !s.length) {
                            if (!t.loopHorizontal)
                                return;
                            s = "prev" === n ? r.siblings(":last") : r.siblings(":first")
                        }
                        ue = !0,
                        S(o, s)
                    }
                }
                function f() {
                    e(".fp-slide.active").each(function() {
                        Z(e(this))
                    })
                }
                function h(n, i, o) {
                    var r = n.position();
                    if ("undefined" != typeof r) {
                        var s = {
                            element: n,
                            callback: i,
                            isMovementUp: o,
                            dest: r,
                            dtop: r.top,
                            yMovement: j(n),
                            anchorLink: n.data("anchor"),
                            sectionIndex: n.index(".fp-section"),
                            activeSlide: n.find(".fp-slide.active"),
                            activeSection: e(".fp-section.active"),
                            leavingSection: e(".fp-section.active").index(".fp-section") + 1,
                            localIsResizing: me
                        };
                        if (!(s.activeSection.is(n) && !me || t.scrollBar && e(window).scrollTop() === s.dtop)) {
                            if (s.activeSlide.length)
                                var a = s.activeSlide.data("anchor")
                                  , l = s.activeSlide.index();
                            t.autoScrolling && t.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = v(s)),
                            n.addClass("active").siblings().removeClass("active"),
                            ge = !0,
                            q(l, a, s.anchorLink, s.sectionIndex),
                            e.isFunction(t.onLeave) && !s.localIsResizing && t.onLeave.call(this, s.leavingSection, s.sectionIndex + 1, s.yMovement, s.anchorLink),
                            e.isDevice || ("down" == s.yMovement ? n.prev().find(".fp-tableCell > .slider-item").addClass("_moveDown") : n.find(".fp-tableCell > .slider-item").removeClass("_moveDown").end().nextAll().find(".fp-tableCell > .slider-item").removeClass("_moveDown")),
                            g(s),
                            ae = s.anchorLink,
                            t.autoScrolling && P(s.anchorLink, s.sectionIndex)
                        }
                    }
                }
                function g(n) {
                    if (t.css3 && t.autoScrolling && !t.scrollBar) {
                        var i = "";
                        i = "translate3d(0px, -" + n.dtop + "px, 0px)",
                        _(i, !0),
                        setTimeout(function() {
                            w(n)
                        }, t.scrollingSpeed)
                    } else {
                        var o = m(n);
                        e(o.element).animate(o.options, t.scrollingSpeed, t.easing).promise().done(function() {
                            w(n)
                        })
                    }
                }
                function m(e) {
                    var n = {};
                    return t.autoScrolling && !t.scrollBar ? (n.options = {
                        top: -e.dtop
                    },
                    n.element = "." + ve) : (n.options = {
                        scrollTop: e.dtop
                    },
                    n.element = "html, body"),
                    n
                }
                function v(t) {
                    return t.isMovementUp ? e(".fp-section.active").before(t.activeSection.nextAll(".fp-section")) : e(".fp-section.active").after(t.activeSection.prevAll(".fp-section").get().reverse()),
                    J(e(".fp-section.active").position().top),
                    f(),
                    t.wrapAroundElements = t.activeSection,
                    t.dest = t.element.position(),
                    t.dtop = t.dest.top,
                    t.yMovement = j(t.element),
                    t
                }
                function y(t) {
                    t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(".fp-section:first").before(t.wrapAroundElements) : e(".fp-section:last").after(t.wrapAroundElements),
                    J(e(".fp-section.active").position().top),
                    f())
                }
                function w(n) {
                    y(n),
                    e.isFunction(t.afterLoad) && !n.localIsResizing && t.afterLoad.call(this, n.anchorLink, n.sectionIndex + 1),
                    setTimeout(function() {
                        ge = !1,
                        e.isFunction(n.callback) && n.callback.call(this)
                    }, se)
                }
                function x() {
                    var e = window.location.hash.replace("#", "").split("/")
                      , t = e[0]
                      , n = e[1];
                    t && R(t, n)
                }
                function b() {
                    if (!Se) {
                        var e = window.location.hash.replace("#", "").split("/")
                          , t = e[0]
                          , n = e[1];
                        if (t.length) {
                            var i = "undefined" == typeof ae
                              , o = "undefined" == typeof ae && "undefined" == typeof n && !ue;
                            (t && t !== ae && !i || o || !ue && le != n) && R(t, n)
                        }
                    }
                }
                function S(n, i) {
                    var o = i.position()
                      , r = n.find(".fp-slidesContainer").parent()
                      , s = i.index()
                      , a = n.closest(".fp-section")
                      , l = a.index(".fp-section")
                      , c = a.data("anchor")
                      , u = a.find(".fp-slidesNav")
                      , d = i.data("anchor")
                      , p = me;
                    if (t.onSlideLeave) {
                        var f = a.find(".fp-slide.active").index()
                          , h = N(f, s);
                        p || "none" === h || e.isFunction(t.onSlideLeave) && t.onSlideLeave.call(this, c, l + 1, f, h)
                    }
                    i.addClass("active").siblings().removeClass("active"),
                    "undefined" == typeof d && (d = s),
                    !t.loopHorizontal && t.controlArrows && (a.find(".fp-controlArrow.fp-prev").toggle(0 != s),
                    a.find(".fp-controlArrow.fp-next").toggle(!i.is(":last-child"))),
                    a.hasClass("active") && q(s, d, c, l);
                    var g = function() {
                        p || e.isFunction(t.afterSlideLoad) && t.afterSlideLoad.call(this, c, l + 1, d, s),
                        ue = !1
                    }
                    ;
                    if (t.css3) {
                        var m = "translate3d(-" + o.left + "px, 0px, 0px)";
                        k(n.find(".fp-slidesContainer"), t.scrollingSpeed > 0).css(ee(m)),
                        setTimeout(function() {
                            g()
                        }, t.scrollingSpeed, t.easing)
                    } else
                        r.animate({
                            scrollLeft: o.left
                        }, t.scrollingSpeed, t.easing, function() {
                            g()
                        });
                    u.find(".active").removeClass("active"),
                    u.find("li").eq(s).find("a").addClass("active")
                }
                function T() {
                    if (C(),
                    de) {
                        if ("text" !== e(document.activeElement).attr("type")) {
                            var t = e(window).height();
                            Math.abs(t - Le) > 20 * Math.max(Le, t) / 100 && (e.fn.fullpage.reBuild(!0),
                            Le = t)
                        }
                    } else
                        clearTimeout(Me),
                        Me = setTimeout(function() {
                            e.fn.fullpage.reBuild(!0)
                        }, 500)
                }
                function C() {
                    if (t.responsive) {
                        var n = fe.hasClass("fp-responsive");
                        e(window).width() < t.responsive ? n || (e.fn.fullpage.setAutoScrolling(!1, "internal"),
                        e("#fp-nav").hide(),
                        fe.addClass("fp-responsive")) : n && (e.fn.fullpage.setAutoScrolling(we.autoScrolling, "internal"),
                        e("#fp-nav").show(),
                        fe.removeClass("fp-responsive"))
                    }
                }
                function k(e) {
                    var n = "all " + t.scrollingSpeed + "ms " + t.easingcss3;
                    return e.removeClass("fp-notransition"),
                    e.css({
                        "-webkit-transition": n,
                        transition: n
                    })
                }
                function E(e) {
                    return e.addClass("fp-notransition")
                }
                function M(t, n) {
                    var i = 825
                      , o = 900;
                    if (i > t || o > n) {
                        var r = 100 * t / i
                          , s = 100 * n / o
                          , a = Math.min(r, s)
                          , l = a.toFixed(2);
                        e("body").css("font-size", l + "%")
                    } else
                        e("body").css("font-size", "100%")
                }
                function L(n, i) {
                    if (n != 'nicer_way')
                        document.getElementsByClassName('logo')[0].classList.add('offset');
                    else
                        document.getElementsByClassName('logo')[0].classList.remove('offset');
                    t.navigation && (e("#fp-nav").find(".active").removeClass("active"),
                    n ? e("#fp-nav").find('a[href="#' + n + '"]').addClass("active") : e("#fp-nav").find("li").eq(i).find("a").addClass("active"))
                }
                function A(n) {
                    t.menu && (e(t.menu).find(".active").removeClass("active"),
                    e(t.menu).find('[data-menuanchor="' + n + '"]').addClass("active"))
                }
                function P(e, t) {
                    A(e),
                    L(e, t)
                }
                function D(e, t) {
                    return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0
                }
                function j(t) {
                    var n = e(".fp-section.active").index(".fp-section")
                      , i = t.index(".fp-section");
                    return n == i ? "none" : n > i ? "up" : "down"
                }
                function N(e, t) {
                    return e == t ? "none" : e > t ? "left" : "right"
                }
                function H(e) {
                    e.css("overflow", "hidden");
                    var n = e.closest(".fp-section")
                      , i = e.find(".fp-scrollable");
                    if (i.length)
                        var o = i.get(0).scrollHeight;
                    else {
                        var o = e.get(0).scrollHeight;
                        t.verticalCentered && (o = e.find(".fp-tableCell").get(0).scrollHeight)
                    }
                    var r = he - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top"));
                    o > r ? i.length ? i.css("height", r + "px").parent().css("height", r + "px") : (t.verticalCentered ? e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : e.wrapInner('<div class="fp-scrollable" />'),
                    e.find(".fp-scrollable").slimScroll({
                        allowPageScroll: !0,
                        height: r + "px",
                        size: "10px",
                        alwaysVisible: !0
                    })) : I(e),
                    e.css("overflow", "")
                }
                function I(e) {
                    e.find(".fp-scrollable").children().first().unwrap().unwrap(),
                    e.find(".slimScrollBar").remove(),
                    e.find(".slimScrollRail").remove()
                }
                function F(e) {
                    e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + O(e) + 'px;" />')
                }
                function O(e) {
                    var n = he;
                    if (t.paddingTop || t.paddingBottom) {
                        var i = e;
                        i.hasClass("fp-section") || (i = e.closest(".fp-section"));
                        var o = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                        n = he - o
                    }
                    return n
                }
                function _(e, t) {
                    t ? k(fe) : E(fe),
                    fe.css(ee(e)),
                    setTimeout(function() {
                        fe.removeClass("fp-notransition")
                    }, 10)
                }
                function R(t, n) {
                    if ("undefined" == typeof n && (n = 0),
                    isNaN(t))
                        var i = e('[data-anchor="' + t + '"]');
                    else
                        var i = e(".fp-section").eq(t - 1);
                    t === ae || i.hasClass("active") ? W(i, n) : h(i, function() {
                        W(i, n)
                    })
                }
                function W(e, t) {
                    if ("undefined" != typeof t) {
                        var n = e.find(".fp-slides")
                          , i = n.find('[data-anchor="' + t + '"]');
                        i.length || (i = n.find(".fp-slide").eq(t)),
                        i.length && S(n, i)
                    }
                }
                function B(e, n) {
                    e.append('<div class="fp-slidesNav"><ul></ul></div>');
                    var i = e.find(".fp-slidesNav");
                    i.addClass(t.slidesNavPosition);
                    for (var o = 0; n > o; o++)
                        i.find("ul").append('<li><a href="#"><span></span></a></li>');
                    i.css("margin-left", "-" + i.width() / 2 + "px"),
                    i.find("li").first().find("a").addClass("active")
                }
                function q(e, n, i, o) {
                    var r = "";
                    t.anchors.length ? (e ? ("undefined" != typeof i && (r = i),
                    "undefined" == typeof n && (n = e),
                    le = n,
                    z(r + "/" + n)) : "undefined" != typeof e ? (le = n,
                    z(i)) : z(i),
                    X(location.hash)) : X("undefined" != typeof e ? o + "-" + e : String(o))
                }
                function z(e) {
                    if (t.recordHistory)
                        location.hash = e;
                    else if (de || pe)
                        history.replaceState(void 0, void 0, "#" + e);
                    else {
                        var n = window.location.href.split("#")[0];
                        window.location.replace(n + "#" + e)
                    }
                }
                function X(t) {
                    t = t.replace("/", "-").replace("#", ""),
                    e("body")[0].className = e("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, ""),
                    e("body").addClass("fp-viewing-" + t)
                }
                function Y() {
                    var e, t = document.createElement("p"), n = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                    document.body.insertBefore(t, null );
                    for (var i in n)
                        void 0 !== t.style[i] && (t.style[i] = "translate3d(1px,1px,1px)",
                        e = window.getComputedStyle(t).getPropertyValue(n[i]));
                    return document.body.removeChild(t),
                    void 0 !== e && e.length > 0 && "none" !== e
                }
                function V() {
                    document.addEventListener ? (document.removeEventListener("mousewheel", d, !1),
                    document.removeEventListener("wheel", d, !1)) : document.detachEvent("onmousewheel", d)
                }
                function $() {
                    document.addEventListener ? (document.addEventListener("mousewheel", d, !1),
                    document.addEventListener("wheel", d, !1)) : document.attachEvent("onmousewheel", d)
                }
                function G() {
                    (de || pe) && (MSPointer = Q(),
                    e(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, u),
                    e(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, l))
                }
                function U() {
                    (de || pe) && (MSPointer = Q(),
                    e(document).off("touchstart " + MSPointer.down),
                    e(document).off("touchmove " + MSPointer.move))
                }
                function Q() {
                    var e;
                    return e = window.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    }
                }
                function K(e) {
                    var t = new Array;
                    return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
                    t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
                    t
                }
                function Z(t) {
                    e.fn.fullpage.setScrollingSpeed(0, "internal"),
                    S(t.closest(".fp-slides"), t),
                    e.fn.fullpage.setScrollingSpeed(we.scrollingSpeed, "internal")
                }
                function J(e) {
                    if (t.scrollBar)
                        fe.scrollTop(e);
                    else if (t.css3) {
                        var n = "";
                        n = "translate3d(0px, -" + e + "px, 0px)",
                        _(n, !1)
                    } else
                        fe.css("top", -e)
                }
                function ee(e) {
                    var t = null ;
                    return t = {
                        "-webkit-transform": e,
                        "-moz-transform": e,
                        "-ms-transform": e,
                        transform: e
                    }
                }
                function te(t, n) {
                    switch (n) {
                    case "up":
                        ye.up = t;
                        break;
                    case "down":
                        ye.down = t;
                        break;
                    case "left":
                        ye.left = t;
                        break;
                    case "right":
                        ye.right = t;
                        break;
                    case "all":
                        e.fn.fullpage.setAllowScrolling(t)
                    }
                }
                function ne() {
                    J(0),
                    e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),
                    e(".fp-section").css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }),
                    e(".fp-slide").css({
                        width: ""
                    }),
                    fe.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }),
                    e(".fp-section, .fp-slide").each(function() {
                        I(e(this)),
                        e(this).removeClass("fp-table active")
                    }),
                    E(fe),
                    E(fe.find(".fp-easing")),
                    fe.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                        e(this).replaceWith(this.childNodes)
                    }),
                    e("html, body").scrollTop(0)
                }
                function ie(e, n, i) {
                    t[e] = n,
                    "internal" !== i && (we[e] = n)
                }
                function oe() {
                    t.continuousVertical && (t.loopTop || t.loopBottom) && (t.continuousVertical = !1,
                    re("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                    t.continuousVertical && t.scrollBar && (t.continuousVertical = !1,
                    re("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                    e.each(t.anchors, function(t, n) {
                        (e("#" + n).length || e('[name="' + n + '"]').length) && re("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
                    })
                }
                function re(e, t) {
                    console && console[e] && console[e]("fullPage: " + t)
                }
                t = e.extend({
                    menu: !1,
                    anchors: [],
                    navigation: !1,
                    navigationPosition: "right",
                    navigationColor: "#000",
                    navigationTooltips: [],
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    css3: !0,
                    scrollingSpeed: 500,
                    autoScrolling: !0,
                    easing: "easeInQuart",
                    easingcss3: "cubic-bezier(0,1,0,0)",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    normalScrollElements: null ,
                    scrollOverflow: !1,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    resize: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null ,
                    responsive: 0,
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    afterLoad: null ,
                    onLeave: null ,
                    afterRender: null ,
                    afterResize: null ,
                    afterReBuild: null ,
                    afterSlideLoad: null ,
                    onSlideLeave: null
                }, t),
                oe(),
                e.extend(e.easing, {
                    easeInQuart: function(e, t, n, i, o) {
                        return i * (t /= o) * t * t * t + n
                    }
                });
                var se = navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? 1e3 : 600;
                e.fn.fullpage.setAutoScrolling = function(n, i) {
                    ie("autoScrolling", n, i);
                    var o = e(".fp-section.active");
                    t.autoScrolling && !t.scrollBar ? (e("html, body").css({
                        overflow: "hidden",
                        height: "100%"
                    }),
                    e.fn.fullpage.setRecordHistory(t.recordHistory, "internal"),
                    fe.css({
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    }),
                    o.length && J(o.position().top)) : (e("html, body").css({
                        overflow: "visible",
                        height: "initial"
                    }),
                    e.fn.fullpage.setRecordHistory(!1, "internal"),
                    fe.css({
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }),
                    J(0),
                    e("html, body").scrollTop(o.position().top))
                }
                ,
                e.fn.fullpage.setRecordHistory = function(e, t) {
                    ie("recordHistory", e, t)
                }
                ,
                e.fn.fullpage.setScrollingSpeed = function(e, t) {
                    ie("scrollingSpeed", e, t)
                }
                ,
                e.fn.fullpage.setMouseWheelScrolling = function(e) {
                    e ? $() : V()
                }
                ,
                e.fn.fullpage.setAllowScrolling = function(t, n) {
                    "undefined" != typeof n ? (n = n.replace(" ", "").split(","),
                    e.each(n, function(e, n) {
                        te(t, n)
                    })) : t ? (e.fn.fullpage.setMouseWheelScrolling(!0),
                    G()) : (e.fn.fullpage.setMouseWheelScrolling(!1),
                    U())
                }
                ,
                e.fn.fullpage.setKeyboardScrolling = function(e) {
                    t.keyboardScrolling = e
                }
                ,
                e.fn.fullpage.moveSectionUp = function() {
                    var n = e(".fp-section.active").prev(".fp-section");
                    n.length || !t.loopTop && !t.continuousVertical || (n = e(".fp-section").last()),
                    n.length && h(n, null , !0)
                }
                ,
                e.fn.fullpage.moveSectionDown = function() {
                    var n = e(".fp-section.active").next(".fp-section");
                    n.length || !t.loopBottom && !t.continuousVertical || (n = e(".fp-section").first()),
                    n.length && h(n, null , !1)
                }
                ,
                e.fn.fullpage.moveTo = function(t, n) {
                    var i = "";
                    i = isNaN(t) ? e('[data-anchor="' + t + '"]') : e(".fp-section").eq(t - 1),
                    "undefined" != typeof n ? R(t, n) : i.length > 0 && h(i)
                }
                ,
                e.fn.fullpage.moveSlideRight = function() {
                    p("next")
                }
                ,
                e.fn.fullpage.moveSlideLeft = function() {
                    p("prev")
                }
                ,
                e.fn.fullpage.reBuild = function(n) {
                    me = !0;
                    var i = e(window).width();
                    he = e(window).height(),
                    t.resize && M(he, i),
                    e(".fp-section").each(function() {
                        he - parseInt(e(this).css("padding-bottom")) - parseInt(e(this).css("padding-top"));
                        if (t.verticalCentered && e(this).find(".fp-tableCell").css("height", O(e(this)) + "px"),
                        e(this).css("height", he + "px"),
                        t.scrollOverflow) {
                            var n = e(this).find(".fp-slide");
                            n.length ? n.each(function() {
                                H(e(this))
                            }) : H(e(this))
                        }
                        var n = e(this).find(".fp-slides");
                        n.length && S(n, n.find(".fp-slide.active"))
                    });
                    var o = (e(".fp-section.active").position(),
                    e(".fp-section.active"));
                    o.index(".fp-section") && h(o),
                    me = !1,
                    e.isFunction(t.afterResize) && n && t.afterResize.call(this),
                    e.isFunction(t.afterReBuild) && !n && t.afterReBuild.call(this)
                }
                ;
                var ae, le, ce, ue = !1, de = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/), pe = "ontouchstart"in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, fe = e(this), he = e(window).height(), ge = !1, me = !1, ve = "fullpage-wrapper", ye = {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                }, we = jQuery.extend(!0, {}, t);
                e.fn.fullpage.setAllowScrolling(!0),
                t.css3 && (t.css3 = Y()),
                e(this).length ? (fe.css({
                    height: "100%",
                    position: "relative"
                }),
                fe.addClass(ve)) : re("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),
                e(t.sectionSelector).each(function() {
                    e(this).addClass("fp-section")
                }),
                e(t.slideSelector).each(function() {
                    e(this).addClass("fp-slide")
                }),
                t.navigation && i(),
                e(".fp-section").each(function(i) {
                    var o = e(this)
                      , r = e(this).find(".fp-slide")
                      , s = r.length;
                    if (i || 0 !== e(".fp-section.active").length || e(this).addClass("active"),
                    e(this).css("height", he + "px"),
                    (t.paddingTop || t.paddingBottom) && e(this).css("padding", t.paddingTop + " 0 " + t.paddingBottom + " 0"),
                    "undefined" != typeof t.sectionsColor[i] && e(this).css("background-color", t.sectionsColor[i]),
                    "undefined" != typeof t.anchors[i] && e(this).attr("data-anchor", t.anchors[i]),
                    s > 1) {
                        var a = 100 * s
                          , l = 100 / s;
                        r.wrapAll('<div class="fp-slidesContainer" />'),
                        r.parent().wrap('<div class="fp-slides" />'),
                        e(this).find(".fp-slidesContainer").css("width", a + "%"),
                        t.controlArrows && n(e(this)),
                        t.slidesNavigation && B(e(this), s),
                        r.each(function(n) {
                            e(this).css("width", l + "%"),
                            t.verticalCentered && F(e(this))
                        });
                        var c = o.find(".fp-slide.active");
                        0 == c.length ? r.eq(0).addClass("active") : Z(c)
                    } else
                        t.verticalCentered && F(e(this))
                }).promise().done(function() {
                    e.fn.fullpage.setAutoScrolling(t.autoScrolling, "internal");
                    var n = e(".fp-section.active").find(".fp-slide.active");
                    n.length && (0 != e(".fp-section.active").index(".fp-section") || 0 == e(".fp-section.active").index(".fp-section") && 0 != n.index()) && Z(n),
                    t.fixedElements && t.css3 && e(t.fixedElements).appendTo("body"),
                    t.navigation && (ce.css("margin-top", "-" + ce.height() / 2 + "px"),
                    ce.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")),
                    t.menu && t.css3 && e(t.menu).closest(".fullpage-wrapper").length && e(t.menu).appendTo("body"),
                    t.scrollOverflow ? ("complete" === document.readyState && o(),
                    e(window).on("load", o)) : e.isFunction(t.afterRender) && t.afterRender.call(this),
                    C();
                    var i = window.location.hash.replace("#", "").split("/")
                      , r = i[0];
                    if (r.length) {
                        var s = e('[data-anchor="' + r + '"]');
                        !t.animateAnchor && s.length && (t.autoScrolling ? J(s.position().top) : (J(0),
                        X(r),
                        e("html, body").scrollTop(s.position().top)),
                        P(r, null ),
                        e.isFunction(t.afterLoad) && t.afterLoad.call(this, r, s.index(".fp-section") + 1),
                        s.addClass("active").siblings().removeClass("active"))
                    }
                    e(window).on("load", function() {
                        x()
                    })
                });
                var xe, be, Se = !1;
                e(window).on("scroll", r);
                var Te = 0
                  , Ce = 0
                  , ke = 0
                  , Ee = 0;
                e(window).on("hashchange", b),
                e(document).keydown(function(n) {
                    if (t.keyboardScrolling && t.autoScrolling && ((40 == n.which || 38 == n.which) && n.preventDefault(),
                    !ge))
                        switch (n.which) {
                        case 38:
                        case 33:
                            e.fn.fullpage.moveSectionUp();
                            break;
                        case 40:
                        case 34:
                            e.fn.fullpage.moveSectionDown();
                            break;
                        case 36:
                            e.fn.fullpage.moveTo(1);
                            break;
                        case 35:
                            e.fn.fullpage.moveTo(e(".fp-section").length);
                            break;
                        case 37:
                            e.fn.fullpage.moveSlideLeft();
                            break;
                        case 39:
                            e.fn.fullpage.moveSlideRight();
                            break;
                        default:
                            return
                        }
                }),
                e(document).on("click touchstart", "#fp-nav a", function(t) {
                    t.preventDefault();
                    var n = e(this).parent().index();
                    h(e(".fp-section").eq(n))
                }),
                e(document).on("click touchstart", ".fp-slidesNav a", function(t) {
                    t.preventDefault();
                    var n = e(this).closest(".fp-section").find(".fp-slides")
                      , i = n.find(".fp-slide").eq(e(this).closest("li").index());
                    S(n, i)
                }),
                t.normalScrollElements && (e(document).on("mouseenter", t.normalScrollElements, function() {
                    e.fn.fullpage.setMouseWheelScrolling(!1)
                }),
                e(document).on("mouseleave", t.normalScrollElements, function() {
                    e.fn.fullpage.setMouseWheelScrolling(!0)
                })),
                e(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
                    e(this).hasClass("fp-prev") ? e.fn.fullpage.moveSlideLeft() : e.fn.fullpage.moveSlideRight()
                }),
                e(window).resize(T);
                var Me, Le = he;
                e.fn.fullpage.destroy = function(n) {
                    e.fn.fullpage.setAutoScrolling(!1, "internal"),
                    e.fn.fullpage.setAllowScrolling(!1),
                    e.fn.fullpage.setKeyboardScrolling(!1),
                    e(window).off("scroll", r).off("hashchange", b).off("resize", T),
                    e(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", t.normalScrollElements).off("mouseout", t.normalScrollElements),
                    e(".fp-section").off("click", ".fp-controlArrow"),
                    n && ne()
                }
            }
        }(jQuery)
    }
    , {}],
    8: [function(e, t, n) {
        /*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
        !function(e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            function n(e) {
                var t = e.length
                  , n = ee.type(e);
                return "function" === n || ee.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function i(e, t, n) {
                if (ee.isFunction(t))
                    return ee.grep(e, function(e, i) {
                        return !!t.call(e, i, e) !== n
                    });
                if (t.nodeType)
                    return ee.grep(e, function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (ae.test(t))
                        return ee.filter(t, e, n);
                    t = ee.filter(t, e)
                }
                return ee.grep(e, function(e) {
                    return V.call(t, e) >= 0 !== n
                })
            }
            function o(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            function r(e) {
                var t = he[e] = {};
                return ee.each(e.match(fe) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function s() {
                Z.removeEventListener("DOMContentLoaded", s, !1),
                e.removeEventListener("load", s, !1),
                ee.ready()
            }
            function a() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }),
                this.expando = ee.expando + Math.random()
            }
            function l(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(xe, "-$1").toLowerCase(),
                    n = e.getAttribute(i),
                    "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? ee.parseJSON(n) : n
                        } catch (o) {}
                        ye.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function c() {
                return !0
            }
            function u() {
                return !1
            }
            function d() {
                try {
                    return Z.activeElement
                } catch (e) {}
            }
            function p(e, t) {
                return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function f(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function h(e) {
                var t = Fe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function g(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
            }
            function m(e, t) {
                var n, i, o, r, s, a, l, c;
                if (1 === t.nodeType) {
                    if (ve.hasData(e) && (r = ve.access(e),
                    s = ve.set(t, r),
                    c = r.events)) {
                        delete s.handle,
                        s.events = {};
                        for (o in c)
                            for (n = 0,
                            i = c[o].length; i > n; n++)
                                ee.event.add(t, o, c[o][n])
                    }
                    ye.hasData(e) && (a = ye.access(e),
                    l = ee.extend({}, a),
                    ye.set(t, l))
                }
            }
            function v(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], n) : n
            }
            function y(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
            function w(t, n) {
                var i = ee(n.createElement(t)).appendTo(n.body)
                  , o = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : ee.css(i[0], "display");
                return i.detach(),
                o
            }
            function x(e) {
                var t = Z
                  , n = We[e];
                return n || (n = w(e, t),
                "none" !== n && n || (Re = (Re || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                t = Re[0].contentDocument,
                t.write(),
                t.close(),
                n = w(e, t),
                Re.detach()),
                We[e] = n),
                n
            }
            function b(e, t, n) {
                var i, o, r, s, a = e.style;
                return n = n || ze(e),
                n && (s = n.getPropertyValue(t) || n[t]),
                n && ("" !== s || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)),
                qe.test(s) && Be.test(t) && (i = a.width,
                o = a.minWidth,
                r = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = s,
                s = n.width,
                a.width = i,
                a.minWidth = o,
                a.maxWidth = r)),
                void 0 !== s ? s + "" : s
            }
            function S(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function T(e, t) {
                if (t in e)
                    return t;
                for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ue.length; o--; )
                    if (t = Ue[o] + n,
                    t in e)
                        return t;
                return i
            }
            function C(e, t, n) {
                var i = Ye.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }
            function k(e, t, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)
                    "margin" === n && (s += ee.css(e, n + Se[r], !0, o)),
                    i ? ("content" === n && (s -= ee.css(e, "padding" + Se[r], !0, o)),
                    "margin" !== n && (s -= ee.css(e, "border" + Se[r] + "Width", !0, o))) : (s += ee.css(e, "padding" + Se[r], !0, o),
                    "padding" !== n && (s += ee.css(e, "border" + Se[r] + "Width", !0, o)));
                return s
            }
            function E(e, t, n) {
                var i = !0
                  , o = "width" === t ? e.offsetWidth : e.offsetHeight
                  , r = ze(e)
                  , s = "border-box" === ee.css(e, "boxSizing", !1, r);
                if (0 >= o || null == o) {
                    if (o = b(e, t, r),
                    (0 > o || null == o) && (o = e.style[t]),
                    qe.test(o))
                        return o;
                    i = s && (K.boxSizingReliable() || o === e.style[t]),
                    o = parseFloat(o) || 0
                }
                return o + k(e, t, n || (s ? "border" : "content"), i, r) + "px"
            }
            function M(e, t) {
                for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)
                    i = e[s],
                    i.style && (r[s] = ve.get(i, "olddisplay"),
                    n = i.style.display,
                    t ? (r[s] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display && Te(i) && (r[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : r[s] || (o = Te(i),
                    (n && "none" !== n || !o) && ve.set(i, "olddisplay", o ? n : ee.css(i, "display"))));
                for (s = 0; a > s; s++)
                    i = e[s],
                    i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
                return e
            }
            function L(e, t, n, i, o) {
                return new L.prototype.init(e,t,n,i,o)
            }
            function A() {
                return setTimeout(function() {
                    Qe = void 0
                }),
                Qe = ee.now()
            }
            function P(e, t) {
                var n, i = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = Se[i],
                    o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                o
            }
            function D(e, t, n) {
                for (var i, o = (nt[t] || []).concat(nt["*"]), r = 0, s = o.length; s > r; r++)
                    if (i = o[r].call(n, t, e))
                        return i
            }
            function j(e, t, n) {
                var i, o, r, s, a, l, c, u = this, d = {}, p = e.style, f = e.nodeType && Te(e), h = ve.get(e, "fxshow");
                n.queue || (a = ee._queueHooks(e, "fx"),
                null == a.unqueued && (a.unqueued = 0,
                l = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || l()
                }
                ),
                a.unqueued++,
                u.always(function() {
                    u.always(function() {
                        a.unqueued--,
                        ee.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                c = ee.css(e, "display"),
                "none" === c && (c = x(e.nodeName)),
                "inline" === c && "none" === ee.css(e, "float") && (p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                u.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (o = t[i],
                    Ze.exec(o)) {
                        if (delete t[i],
                        r = r || "toggle" === o,
                        o === (f ? "hide" : "show")) {
                            if ("show" !== o || !h || void 0 === h[i])
                                continue;f = !0
                        }
                        d[i] = h && h[i] || ee.style(e, i)
                    }
                if (!ee.isEmptyObject(d)) {
                    h ? "hidden"in h && (f = h.hidden) : h = ve.access(e, "fxshow", {}),
                    r && (h.hidden = !f),
                    f ? ee(e).show() : u.done(function() {
                        ee(e).hide()
                    }),
                    u.done(function() {
                        var t;
                        ve.remove(e, "fxshow");
                        for (t in d)
                            ee.style(e, t, d[t])
                    });
                    for (i in d)
                        s = D(f ? h[i] : 0, i, u),
                        i in h || (h[i] = s.start,
                        f && (s.end = s.start,
                        s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }
            function N(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (i = ee.camelCase(n),
                    o = t[i],
                    r = e[n],
                    ee.isArray(r) && (o = r[1],
                    r = e[n] = r[0]),
                    n !== i && (e[i] = r,
                    delete e[n]),
                    s = ee.cssHooks[i],
                    s && "expand"in s) {
                        r = s.expand(r),
                        delete e[i];
                        for (n in r)
                            n in e || (e[n] = r[n],
                            t[n] = o)
                    } else
                        t[i] = o
            }
            function H(e, t, n) {
                var i, o, r = 0, s = tt.length, a = ee.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (o)
                        return !1;
                    for (var t = Qe || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                        c.tweens[s].run(r);
                    return a.notifyWith(e, [c, r, n]),
                    1 > r && l ? n : (a.resolveWith(e, [c]),
                    !1)
                }
                , c = a.promise({
                    elem: e,
                    props: ee.extend({}, t),
                    opts: ee.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qe || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ee.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0
                          , i = t ? c.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; i > n; n++)
                            c.tweens[n].run(1);
                        return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                        this
                    }
                }), u = c.props;
                for (N(u, c.opts.specialEasing); s > r; r++)
                    if (i = tt[r].call(c, e, u, c.opts))
                        return i;
                return ee.map(u, D, c),
                ee.isFunction(c.opts.start) && c.opts.start.call(e, c),
                ee.fx.timer(ee.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            function I(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var i, o = 0, r = t.toLowerCase().match(fe) || [];
                    if (ee.isFunction(n))
                        for (; i = r[o++]; )
                            "+" === i[0] ? (i = i.slice(1) || "*",
                            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function F(e, t, n, i) {
                function o(a) {
                    var l;
                    return r[a] = !0,
                    ee.each(e[a] || [], function(e, a) {
                        var c = a(t, n, i);
                        return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                        o(c),
                        !1)
                    }),
                    l
                }
                var r = {}
                  , s = e === bt;
                return o(t.dataTypes[0]) || !r["*"] && o("*")
            }
            function O(e, t) {
                var n, i, o = ee.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && ee.extend(!0, e, i),
                e
            }
            function _(e, t, n) {
                for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                    l.shift(),
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (o in a)
                        if (a[o] && a[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                if (l[0]in n)
                    r = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            r = o;
                            break
                        }
                        s || (s = o)
                    }
                    r = r || s
                }
                return r ? (r !== l[0] && l.unshift(r),
                n[r]) : void 0
            }
            function R(e, t, n, i) {
                var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
                if (u[1])
                    for (s in e.converters)
                        c[s.toLowerCase()] = e.converters[s];
                for (r = u.shift(); r; )
                    if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    l = r,
                    r = u.shift())
                        if ("*" === r)
                            r = l;
                        else if ("*" !== l && l !== r) {
                            if (s = c[l + " " + r] || c["* " + r],
                            !s)
                                for (o in c)
                                    if (a = o.split(" "),
                                    a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0],
                                        u.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: s ? d : "No conversion from " + l + " to " + r
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function W(e, t, n, i) {
                var o;
                if (ee.isArray(t))
                    ee.each(t, function(t, o) {
                        n || kt.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
                    });
                else if (n || "object" !== ee.type(t))
                    i(e, t);
                else
                    for (o in t)
                        W(e + "[" + o + "]", t[o], n, i)
            }
            function B(e) {
                return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var q = []
              , z = q.slice
              , X = q.concat
              , Y = q.push
              , V = q.indexOf
              , $ = {}
              , G = $.toString
              , U = $.hasOwnProperty
              , Q = "".trim
              , K = {}
              , Z = e.document
              , J = "2.1.0"
              , ee = function(e, t) {
                return new ee.fn.init(e,t)
            }
              , te = /^-ms-/
              , ne = /-([\da-z])/gi
              , ie = function(e, t) {
                return t.toUpperCase()
            }
            ;
            ee.fn = ee.prototype = {
                jquery: J,
                constructor: ee,
                selector: "",
                length: 0,
                toArray: function() {
                    return z.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
                },
                pushStack: function(e) {
                    var t = ee.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e, t) {
                    return ee.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(ee.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(z.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null )
                },
                push: Y,
                sort: q.sort,
                splice: q.splice
            },
            ee.extend = ee.fn.extend = function() {
                var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                s = arguments[a] || {},
                a++),
                "object" == typeof s || ee.isFunction(s) || (s = {}),
                a === l && (s = this,
                a--); l > a; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            n = s[t],
                            i = e[t],
                            s !== i && (c && i && (ee.isPlainObject(i) || (o = ee.isArray(i))) ? (o ? (o = !1,
                            r = n && ee.isArray(n) ? n : []) : r = n && ee.isPlainObject(n) ? n : {},
                            s[t] = ee.extend(c, r, i)) : void 0 !== i && (s[t] = i));
                return s
            }
            ,
            ee.extend({
                expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === ee.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return e - parseFloat(e) >= 0
                },
                isPlainObject: function(e) {
                    if ("object" !== ee.type(e) || e.nodeType || ee.isWindow(e))
                        return !1;
                    try {
                        if (e.constructor && !U.call(e.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (t) {
                        return !1
                    }
                    return !0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? $[G.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    var t, n = eval;
                    e = ee.trim(e),
                    e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                    t.text = e,
                    Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(te, "ms-").replace(ne, ie)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var o, r = 0, s = e.length, a = n(e);
                    if (i) {
                        if (a)
                            for (; s > r && (o = t.apply(e[r], i),
                            o !== !1); r++)
                                ;
                        else
                            for (r in e)
                                if (o = t.apply(e[r], i),
                                o === !1)
                                    break
                    } else if (a)
                        for (; s > r && (o = t.call(e[r], r, e[r]),
                        o !== !1); r++)
                            ;
                    else
                        for (r in e)
                            if (o = t.call(e[r], r, e[r]),
                            o === !1)
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : Q.call(e)
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ee.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)),
                    i
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : V.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, o = e.length; n > i; i++)
                        e[o++] = t[i];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++)
                        i = !t(e[r], r),
                        i !== a && o.push(e[r]);
                    return o
                },
                map: function(e, t, i) {
                    var o, r = 0, s = e.length, a = n(e), l = [];
                    if (a)
                        for (; s > r; r++)
                            o = t(e[r], r, i),
                            null != o && l.push(o);
                    else
                        for (r in e)
                            o = t(e[r], r, i),
                            null != o && l.push(o);
                    return X.apply([], l)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, o;
                    return "string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    ee.isFunction(e) ? (i = z.call(arguments, 2),
                    o = function() {
                        return e.apply(t || this, i.concat(z.call(arguments)))
                    }
                    ,
                    o.guid = e.guid = e.guid || ee.guid++,
                    o) : void 0
                },
                now: Date.now,
                support: K
            }),
            ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                $["[object " + t + "]"] = t.toLowerCase()
            });
            var oe = function(e) {
                function t(e, t, n, i) {
                    var o, r, s, a, l, c, d, h, g, m;
                    if ((t ? t.ownerDocument || t : W) !== j && D(t),
                    t = t || j,
                    n = n || [],
                    !e || "string" != typeof e)
                        return n;
                    if (1 !== (a = t.nodeType) && 9 !== a)
                        return [];
                    if (H && !i) {
                        if (o = ye.exec(e))
                            if (s = o[1]) {
                                if (9 === a) {
                                    if (r = t.getElementById(s),
                                    !r || !r.parentNode)
                                        return n;
                                    if (r.id === s)
                                        return n.push(r),
                                        n
                                } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && _(t, r) && r.id === s)
                                    return n.push(r),
                                    n
                            } else {
                                if (o[2])
                                    return J.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((s = o[3]) && T.getElementsByClassName && t.getElementsByClassName)
                                    return J.apply(n, t.getElementsByClassName(s)),
                                    n
                            }
                        if (T.qsa && (!I || !I.test(e))) {
                            if (h = d = R,
                            g = t,
                            m = 9 === a && e,
                            1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (c = p(e),
                                (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h),
                                h = "[id='" + h + "'] ",
                                l = c.length; l--; )
                                    c[l] = h + f(c[l]);
                                g = we.test(e) && u(t.parentNode) || t,
                                m = c.join(",")
                            }
                            if (m)
                                try {
                                    return J.apply(n, g.querySelectorAll(m)),
                                    n
                                } catch (v) {} finally {
                                    d || t.removeAttribute("id")
                                }
                        }
                    }
                    return b(e.replace(le, "$1"), t, n, i)
                }
                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                        e[n + " "] = i
                    }
                    var t = [];
                    return e
                }
                function i(e) {
                    return e[R] = !0,
                    e
                }
                function o(e) {
                    var t = j.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function r(e, t) {
                    for (var n = e.split("|"), i = e.length; i--; )
                        C.attrHandle[n[i]] = t
                }
                function s(e, t) {
                    var n = t && e
                      , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (i)
                        return i;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function a(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function c(e) {
                    return i(function(t) {
                        return t = +t,
                        i(function(n, i) {
                            for (var o, r = e([], n.length, t), s = r.length; s--; )
                                n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }
                function u(e) {
                    return e && typeof e.getElementsByTagName !== $ && e
                }
                function d() {}
                function p(e, n) {
                    var i, o, r, s, a, l, c, u = X[e + " "];
                    if (u)
                        return n ? 0 : u.slice(0);
                    for (a = e,
                    l = [],
                    c = C.preFilter; a; ) {
                        (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a),
                        l.push(r = [])),
                        i = !1,
                        (o = ue.exec(a)) && (i = o.shift(),
                        r.push({
                            value: i,
                            type: o[0].replace(le, " ")
                        }),
                        a = a.slice(i.length));
                        for (s in C.filter)
                            !(o = he[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(),
                            r.push({
                                value: i,
                                type: s,
                                matches: o
                            }),
                            a = a.slice(i.length));
                        if (!i)
                            break
                    }
                    return n ? a.length : a ? t.error(e) : X(e, l).slice(0)
                }
                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++)
                        i += e[t].value;
                    return i
                }
                function h(e, t, n) {
                    var i = t.dir
                      , o = n && "parentNode" === i
                      , r = q++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i]; )
                            if (1 === t.nodeType || o)
                                return e(t, n, r)
                    }
                    : function(t, n, s) {
                        var a, l, c = [B, r];
                        if (s) {
                            for (; t = t[i]; )
                                if ((1 === t.nodeType || o) && e(t, n, s))
                                    return !0
                        } else
                            for (; t = t[i]; )
                                if (1 === t.nodeType || o) {
                                    if (l = t[R] || (t[R] = {}),
                                    (a = l[i]) && a[0] === B && a[1] === r)
                                        return c[2] = a[2];
                                    if (l[i] = c,
                                    c[2] = e(t, n, s))
                                        return !0
                                }
                    }
                }
                function g(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--; )
                            if (!e[o](t, n, i))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function m(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
                        (r = e[a]) && (!n || n(r, i, o)) && (s.push(r),
                        c && t.push(a));
                    return s
                }
                function v(e, t, n, o, r, s) {
                    return o && !o[R] && (o = v(o)),
                    r && !r[R] && (r = v(r, s)),
                    i(function(i, s, a, l) {
                        var c, u, d, p = [], f = [], h = s.length, g = i || x(t || "*", a.nodeType ? [a] : a, []), v = !e || !i && t ? g : m(g, p, e, a, l), y = n ? r || (i ? e : h || o) ? [] : s : v;
                        if (n && n(v, y, a, l),
                        o)
                            for (c = m(y, f),
                            o(c, [], a, l),
                            u = c.length; u--; )
                                (d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
                        if (i) {
                            if (r || e) {
                                if (r) {
                                    for (c = [],
                                    u = y.length; u--; )
                                        (d = y[u]) && c.push(v[u] = d);
                                    r(null , y = [], c, l)
                                }
                                for (u = y.length; u--; )
                                    (d = y[u]) && (c = r ? te.call(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                            }
                        } else
                            y = m(y === s ? y.splice(h, y.length) : y),
                            r ? r(null , s, y, l) : J.apply(s, y)
                    })
                }
                function y(e) {
                    for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = h(function(e) {
                        return e === t
                    }, s, !0), c = h(function(e) {
                        return te.call(t, e) > -1
                    }, s, !0), u = [function(e, n, i) {
                        return !r && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                    }
                    ]; o > a; a++)
                        if (n = C.relative[e[a].type])
                            u = [h(g(u), n)];
                        else {
                            if (n = C.filter[e[a].type].apply(null , e[a].matches),
                            n[R]) {
                                for (i = ++a; o > i && !C.relative[e[i].type]; i++)
                                    ;
                                return v(a > 1 && g(u), a > 1 && f(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && f(e))
                            }
                            u.push(n)
                        }
                    return g(u)
                }
                function w(e, n) {
                    var o = n.length > 0
                      , r = e.length > 0
                      , s = function(i, s, a, l, c) {
                        var u, d, p, f = 0, h = "0", g = i && [], v = [], y = L, w = i || r && C.find.TAG("*", c), x = B += null == y ? 1 : Math.random() || .1, b = w.length;
                        for (c && (L = s !== j && s); h !== b && null != (u = w[h]); h++) {
                            if (r && u) {
                                for (d = 0; p = e[d++]; )
                                    if (p(u, s, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (B = x)
                            }
                            o && ((u = !p && u) && f--,
                            i && g.push(u))
                        }
                        if (f += h,
                        o && h !== f) {
                            for (d = 0; p = n[d++]; )
                                p(g, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; h--; )
                                        g[h] || v[h] || (v[h] = K.call(l));
                                v = m(v)
                            }
                            J.apply(l, v),
                            c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (B = x,
                        L = y),
                        g
                    }
                    ;
                    return o ? i(s) : s
                }
                function x(e, n, i) {
                    for (var o = 0, r = n.length; r > o; o++)
                        t(e, n[o], i);
                    return i
                }
                function b(e, t, n, i) {
                    var o, r, s, a, l, c = p(e);
                    if (!i && 1 === c.length) {
                        if (r = c[0] = c[0].slice(0),
                        r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === t.nodeType && H && C.relative[r[1].type]) {
                            if (t = (C.find.ID(s.matches[0].replace(be, Se), t) || [])[0],
                            !t)
                                return n;
                            e = e.slice(r.shift().value.length)
                        }
                        for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
                        !C.relative[a = s.type]); )
                            if ((l = C.find[a]) && (i = l(s.matches[0].replace(be, Se), we.test(r[0].type) && u(t.parentNode) || t))) {
                                if (r.splice(o, 1),
                                e = i.length && f(r),
                                !e)
                                    return J.apply(n, i),
                                    n;
                                break
                            }
                    }
                    return M(e, c)(i, t, !H, n, we.test(e) && u(t.parentNode) || t),
                    n
                }
                var S, T, C, k, E, M, L, A, P, D, j, N, H, I, F, O, _, R = "sizzle" + -new Date, W = e.document, B = 0, q = 0, z = n(), X = n(), Y = n(), V = function(e, t) {
                    return e === t && (P = !0),
                    0
                }
                , $ = "undefined", G = 1 << 31, U = {}.hasOwnProperty, Q = [], K = Q.pop, Z = Q.push, J = Q.push, ee = Q.slice, te = Q.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e)
                            return t;
                    return -1
                }
                , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"), se = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]", ae = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$","g"), ce = new RegExp("^" + ie + "*," + ie + "*"), ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]","g"), pe = new RegExp(ae), fe = new RegExp("^" + re + "$"), he = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + se),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + ne + ")$","i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)","i")
                }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, xe = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)","ig"), Se = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }
                ;
                try {
                    J.apply(Q = ee.call(W.childNodes), W.childNodes),
                    Q[W.childNodes.length].nodeType
                } catch (Te) {
                    J = {
                        apply: Q.length ? function(e, t) {
                            Z.apply(e, ee.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                T = t.support = {},
                E = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }
                ,
                D = t.setDocument = function(e) {
                    var t, n = e ? e.ownerDocument || e : W, i = n.defaultView;
                    return n !== j && 9 === n.nodeType && n.documentElement ? (j = n,
                    N = n.documentElement,
                    H = !E(n),
                    i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                        D()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                        D()
                    })),
                    T.attributes = o(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    T.getElementsByTagName = o(function(e) {
                        return e.appendChild(n.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    T.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                        e.firstChild.className = "i",
                        2 === e.getElementsByClassName("i").length
                    }),
                    T.getById = o(function(e) {
                        return N.appendChild(e).id = R,
                        !n.getElementsByName || !n.getElementsByName(R).length
                    }),
                    T.getById ? (C.find.ID = function(e, t) {
                        if (typeof t.getElementById !== $ && H) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }
                    ,
                    C.filter.ID = function(e) {
                        var t = e.replace(be, Se);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ) : (delete C.find.ID,
                    C.filter.ID = function(e) {
                        var t = e.replace(be, Se);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ),
                    C.find.TAG = T.getElementsByTagName ? function(e, t) {
                        return typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(e) : void 0
                    }
                    : function(e, t) {
                        var n, i = [], o = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++]; )
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }
                    ,
                    C.find.CLASS = T.getElementsByClassName && function(e, t) {
                        return typeof t.getElementsByClassName !== $ && H ? t.getElementsByClassName(e) : void 0
                    }
                    ,
                    F = [],
                    I = [],
                    (T.qsa = ve.test(n.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select t=''><option selected=''></option></select>",
                        e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ne + ")"),
                        e.querySelectorAll(":checked").length || I.push(":checked")
                    }),
                    o(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        I.push(",.*:")
                    })),
                    (T.matchesSelector = ve.test(O = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
                        T.disconnectedMatch = O.call(e, "div"),
                        O.call(e, "[s!='']:x"),
                        F.push("!=", ae)
                    }),
                    I = I.length && new RegExp(I.join("|")),
                    F = F.length && new RegExp(F.join("|")),
                    t = ve.test(N.compareDocumentPosition),
                    _ = t || ve.test(N.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    V = t ? function(e, t) {
                        if (e === t)
                            return P = !0,
                            0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === W && _(W, e) ? -1 : t === n || t.ownerDocument === W && _(W, t) ? 1 : A ? te.call(A, e) - te.call(A, t) : 0 : 4 & i ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return P = !0,
                            0;
                        var i, o = 0, r = e.parentNode, a = t.parentNode, l = [e], c = [t];
                        if (!r || !a)
                            return e === n ? -1 : t === n ? 1 : r ? -1 : a ? 1 : A ? te.call(A, e) - te.call(A, t) : 0;
                        if (r === a)
                            return s(e, t);
                        for (i = e; i = i.parentNode; )
                            l.unshift(i);
                        for (i = t; i = i.parentNode; )
                            c.unshift(i);
                        for (; l[o] === c[o]; )
                            o++;
                        return o ? s(l[o], c[o]) : l[o] === W ? -1 : c[o] === W ? 1 : 0
                    }
                    ,
                    n) : j
                }
                ,
                t.matches = function(e, n) {
                    return t(e, null , null , n)
                }
                ,
                t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== j && D(e),
                    n = n.replace(de, "='$1']"),
                    !(!T.matchesSelector || !H || F && F.test(n) || I && I.test(n)))
                        try {
                            var i = O.call(e, n);
                            if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (o) {}
                    return t(n, j, null , [e]).length > 0
                }
                ,
                t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== j && D(e),
                    _(e, t)
                }
                ,
                t.attr = function(e, t) {
                    (e.ownerDocument || e) !== j && D(e);
                    var n = C.attrHandle[t.toLowerCase()]
                      , i = n && U.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                    return void 0 !== i ? i : T.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
                ,
                t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                t.uniqueSort = function(e) {
                    var t, n = [], i = 0, o = 0;
                    if (P = !T.detectDuplicates,
                    A = !T.sortStable && e.slice(0),
                    e.sort(V),
                    P) {
                        for (; t = e[o++]; )
                            t === e[o] && (i = n.push(o));
                        for (; i--; )
                            e.splice(n[i], 1)
                    }
                    return A = null ,
                    e
                }
                ,
                k = t.getText = function(e) {
                    var t, n = "", i = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += k(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[i++]; )
                            n += k(t);
                    return n
                }
                ,
                C = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, Se),
                            e[3] = (e[4] || e[5] || "").replace(be, Se),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pe.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, Se).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(o) {
                                var r = t.attr(o, e);
                                return null == r ? "!=" === n : n ? (r += "",
                                "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, l) {
                                var c, u, d, p, f, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g; ) {
                                            for (d = t; d = d[g]; )
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild],
                                    s && y) {
                                        for (u = m[R] || (m[R] = {}),
                                        c = u[e] || [],
                                        f = c[0] === B && c[1],
                                        p = c[0] === B && c[2],
                                        d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop(); )
                                            if (1 === d.nodeType && ++p && d === t) {
                                                u[e] = [B, f, p];
                                                break
                                            }
                                    } else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === B)
                                        p = c[1];
                                    else
                                        for (; (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[R] || (d[R] = {}))[e] = [B, p]),
                                        d !== t)); )
                                            ;
                                    return p -= o,
                                    p === i || p % i === 0 && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return r[R] ? r(n) : r.length > 1 ? (o = [e, e, "", n],
                            C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, o = r(e, n), s = o.length; s--; )
                                    i = te.call(e, o[s]),
                                    e[i] = !(t[i] = o[s])
                            }) : function(e) {
                                return r(e, 0, o)
                            }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = []
                              , n = []
                              , o = M(e.replace(le, "$1"));
                            return o[R] ? i(function(e, t, n, i) {
                                for (var r, s = o(e, null , i, []), a = e.length; a--; )
                                    (r = s[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, i, r) {
                                return t[0] = e,
                                o(t, null , r, n),
                                !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return fe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(be, Se).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === N
                        },
                        focus: function(e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !C.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return ge.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0; )
                                e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t; )
                                e.push(i);
                            return e
                        })
                    }
                },
                C.pseudos.nth = C.pseudos.eq;
                for (S in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    C.pseudos[S] = a(S);
                for (S in {
                    submit: !0,
                    reset: !0
                })
                    C.pseudos[S] = l(S);
                return d.prototype = C.filters = C.pseudos,
                C.setFilters = new d,
                M = t.compile = function(e, t) {
                    var n, i = [], o = [], r = Y[e + " "];
                    if (!r) {
                        for (t || (t = p(e)),
                        n = t.length; n--; )
                            r = y(t[n]),
                            r[R] ? i.push(r) : o.push(r);
                        r = Y(e, w(o, i))
                    }
                    return r
                }
                ,
                T.sortStable = R.split("").sort(V).join("") === R,
                T.detectDuplicates = !!P,
                D(),
                T.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(j.createElement("div"))
                }),
                o(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                T.attributes && o(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || r("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }),
                o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || r(ne, function(e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }),
                t
            }(e);
            ee.find = oe,
            ee.expr = oe.selectors,
            ee.expr[":"] = ee.expr.pseudos,
            ee.unique = oe.uniqueSort,
            ee.text = oe.getText,
            ee.isXMLDoc = oe.isXML,
            ee.contains = oe.contains;
            var re = ee.expr.match.needsContext
              , se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
              , ae = /^.[^:#\[\.,]*$/;
            ee.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? ee.find.matchesSelector(i, e) ? [i] : [] : ee.find.matches(e, ee.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            ee.fn.extend({
                find: function(e) {
                    var t, n = this.length, i = [], o = this;
                    if ("string" != typeof e)
                        return this.pushStack(ee(e).filter(function() {
                            for (t = 0; n > t; t++)
                                if (ee.contains(o[t], this))
                                    return !0
                        }));
                    for (t = 0; n > t; t++)
                        ee.find(e, o[t], i);
                    return i = this.pushStack(n > 1 ? ee.unique(i) : i),
                    i.selector = this.selector ? this.selector + " " + e : e,
                    i
                },
                filter: function(e) {
                    return this.pushStack(i(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(i(this, e || [], !0))
                },
                is: function(e) {
                    return !!i(this, "string" == typeof e && re.test(e) ? ee(e) : e || [], !1).length
                }
            });
            var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = ee.fn.init = function(e, t) {
                var n, i;
                if (!e)
                    return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null , e, null ] : ce.exec(e),
                    !n || !n[1] && t)
                        return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ee ? t[0] : t,
                        ee.merge(this, ee.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                        se.test(n[1]) && ee.isPlainObject(t))
                            for (n in t)
                                ee.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return i = Z.getElementById(n[2]),
                    i && i.parentNode && (this.length = 1,
                    this[0] = i),
                    this.context = Z,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : ee.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                ee.makeArray(e, this))
            }
            ;
            ue.prototype = ee.fn,
            le = ee(Z);
            var de = /^(?:parents|prev(?:Until|All))/
              , pe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            ee.extend({
                dir: function(e, t, n) {
                    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (o && ee(e).is(n))
                                break;
                            i.push(e)
                        }
                    return i
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }),
            ee.fn.extend({
                has: function(e) {
                    var t = ee(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (ee.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, i = 0, o = this.length, r = [], s = re.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; o > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ee.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                    return this.pushStack(r.length > 1 ? ee.unique(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? V.call(ee(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            ee.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return ee.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return ee.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return o(e, "nextSibling")
                },
                prev: function(e) {
                    return o(e, "previousSibling")
                },
                nextAll: function(e) {
                    return ee.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return ee.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return ee.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return ee.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return ee.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return ee.sibling(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || ee.merge([], e.childNodes)
                }
            }, function(e, t) {
                ee.fn[e] = function(n, i) {
                    var o = ee.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (o = ee.filter(i, o)),
                    this.length > 1 && (pe[e] || ee.unique(o),
                    de.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            });
            var fe = /\S+/g
              , he = {};
            ee.Callbacks = function(e) {
                e = "string" == typeof e ? he[e] || r(e) : ee.extend({}, e);
                var t, n, i, o, s, a, l = [], c = !e.once && [], u = function(r) {
                    for (t = e.memory && r,
                    n = !0,
                    a = o || 0,
                    o = 0,
                    s = l.length,
                    i = !0; l && s > a; a++)
                        if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1,
                    l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
                }
                , d = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            !function r(t) {
                                ee.each(t, function(t, n) {
                                    var i = ee.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments),
                            i ? s = l.length : t && (o = n,
                            u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ee.each(arguments, function(e, t) {
                            for (var n; (n = ee.inArray(t, l, n)) > -1; )
                                l.splice(n, 1),
                                i && (s >= n && s--,
                                a >= n && a--)
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? ee.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [],
                        s = 0,
                        this
                    },
                    disable: function() {
                        return l = c = t = void 0,
                        this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0,
                        t || d.disable(),
                        this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !l || n && !c || (t = t || [],
                        t = [e, t.slice ? t.slice() : t],
                        i ? c.push(t) : u(t)),
                        this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!n
                    }
                };
                return d
            }
            ,
            ee.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", ee.Callbacks("once memory"), "resolved"], ["reject", "fail", ee.Callbacks("once memory"), "rejected"], ["notify", "progress", ee.Callbacks("memory")]]
                      , n = "pending"
                      , i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return ee.Deferred(function(n) {
                                ee.each(t, function(t, r) {
                                    var s = ee.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ee.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ee.extend(e, i) : i
                        }
                    }
                      , o = {};
                    return i.pipe = i.then,
                    ee.each(t, function(e, r) {
                        var s = r[2]
                          , a = r[3];
                        i[r[1]] = s.add,
                        a && s.add(function() {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                        o[r[0]] = function() {
                            return o[r[0] + "With"](this === o ? i : this, arguments),
                            this
                        }
                        ,
                        o[r[0] + "With"] = s.fireWith
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                },
                when: function(e) {
                    var t, n, i, o = 0, r = z.call(arguments), s = r.length, a = 1 !== s || e && ee.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ee.Deferred(), c = function(e, n, i) {
                        return function(o) {
                            n[e] = this,
                            i[e] = arguments.length > 1 ? z.call(arguments) : o,
                            i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    }
                    ;
                    if (s > 1)
                        for (t = new Array(s),
                        n = new Array(s),
                        i = new Array(s); s > o; o++)
                            r[o] && ee.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
                    return a || l.resolveWith(i, r),
                    l.promise()
                }
            });
            var ge;
            ee.fn.ready = function(e) {
                return ee.ready.promise().done(e),
                this
            }
            ,
            ee.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ee.readyWait++ : ee.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --ee.readyWait : ee.isReady) || (ee.isReady = !0,
                    e !== !0 && --ee.readyWait > 0 || (ge.resolveWith(Z, [ee]),
                    ee.fn.trigger && ee(Z).trigger("ready").off("ready")))
                }
            }),
            ee.ready.promise = function(t) {
                return ge || (ge = ee.Deferred(),
                "complete" === Z.readyState ? setTimeout(ee.ready) : (Z.addEventListener("DOMContentLoaded", s, !1),
                e.addEventListener("load", s, !1))),
                ge.promise(t)
            }
            ,
            ee.ready.promise();
            var me = ee.access = function(e, t, n, i, o, r, s) {
                var a = 0
                  , l = e.length
                  , c = null == n;
                if ("object" === ee.type(n)) {
                    o = !0;
                    for (a in n)
                        ee.access(e, t, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0,
                ee.isFunction(i) || (s = !0),
                c && (s ? (t.call(e, i),
                t = null ) : (c = t,
                t = function(e, t, n) {
                    return c.call(ee(e), n)
                }
                )),
                t))
                    for (; l > a; a++)
                        t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            }
            ;
            ee.acceptData = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }
            ,
            a.uid = 1,
            a.accepts = ee.acceptData,
            a.prototype = {
                key: function(e) {
                    if (!a.accepts(e))
                        return 0;
                    var t = {}
                      , n = e[this.expando];
                    if (!n) {
                        n = a.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            },
                            Object.defineProperties(e, t)
                        } catch (i) {
                            t[this.expando] = n,
                            ee.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}),
                    n
                },
                set: function(e, t, n) {
                    var i, o = this.key(e), r = this.cache[o];
                    if ("string" == typeof t)
                        r[t] = n;
                    else if (ee.isEmptyObject(r))
                        ee.extend(this.cache[o], t);
                    else
                        for (i in t)
                            r[i] = t[i];
                    return r
                },
                get: function(e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                },
                access: function(e, t, n) {
                    var i;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t),
                    void 0 !== i ? i : this.get(e, ee.camelCase(t))) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i, o, r = this.key(e), s = this.cache[r];
                    if (void 0 === t)
                        this.cache[r] = {};
                    else {
                        ee.isArray(t) ? i = t.concat(t.map(ee.camelCase)) : (o = ee.camelCase(t),
                        t in s ? i = [t, o] : (i = o,
                        i = i in s ? [i] : i.match(fe) || [])),
                        n = i.length;
                        for (; n--; )
                            delete s[i[n]]
                    }
                },
                hasData: function(e) {
                    return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function(e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var ve = new a
              , ye = new a
              , we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , xe = /([A-Z])/g;
            ee.extend({
                hasData: function(e) {
                    return ye.hasData(e) || ve.hasData(e)
                },
                data: function(e, t, n) {
                    return ye.access(e, t, n)
                },
                removeData: function(e, t) {
                    ye.remove(e, t)
                },
                _data: function(e, t, n) {
                    return ve.access(e, t, n)
                },
                _removeData: function(e, t) {
                    ve.remove(e, t)
                }
            }),
            ee.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0], s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = ye.get(r),
                        1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                i = s[n].name,
                                0 === i.indexOf("data-") && (i = ee.camelCase(i.slice(5)),
                                l(r, i, o[i]));
                            ve.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        ye.set(this, e)
                    }) : me(this, function(t) {
                        var n, i = ee.camelCase(e);
                        if (r && void 0 === t) {
                            if (n = ye.get(r, e),
                            void 0 !== n)
                                return n;
                            if (n = ye.get(r, i),
                            void 0 !== n)
                                return n;
                            if (n = l(r, i, void 0),
                            void 0 !== n)
                                return n
                        } else
                            this.each(function() {
                                var n = ye.get(this, i);
                                ye.set(this, i, t),
                                -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                            })
                    }, null , t, arguments.length > 1, null , !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        ye.remove(this, e)
                    })
                }
            }),
            ee.extend({
                queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue",
                    i = ve.get(e, t),
                    n && (!i || ee.isArray(n) ? i = ve.access(e, t, ee.makeArray(n)) : i.push(n)),
                    i || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = ee.queue(e, t)
                      , i = n.length
                      , o = n.shift()
                      , r = ee._queueHooks(e, t)
                      , s = function() {
                        ee.dequeue(e, t)
                    }
                    ;
                    "inprogress" === o && (o = n.shift(),
                    i--),
                    o && ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    o.call(e, s, r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return ve.get(e, n) || ve.access(e, n, {
                        empty: ee.Callbacks("once memory").add(function() {
                            ve.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            ee.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ee.queue(this, e, t);
                        ee._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && ee.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ee.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, o = ee.Deferred(), r = this, s = this.length, a = function() {
                        --i || o.resolveWith(r, [r])
                    }
                    ;
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        n = ve.get(r[s], e + "queueHooks"),
                        n && n.empty && (i++,
                        n.empty.add(a));
                    return a(),
                    o.promise(t)
                }
            });
            var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , Se = ["Top", "Right", "Bottom", "Left"]
              , Te = function(e, t) {
                return e = t || e,
                "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
            }
              , Ce = /^(?:checkbox|radio)$/i;
            !function() {
                var e = Z.createDocumentFragment()
                  , t = e.appendChild(Z.createElement("div"));
                t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                t.innerHTML = "<textarea>x</textarea>",
                K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var ke = "undefined";
            K.focusinBubbles = "onfocusin"in e;
            var Ee = /^key/
              , Me = /^(?:mouse|contextmenu)|click/
              , Le = /^(?:focusinfocus|focusoutblur)$/
              , Ae = /^([^.]*)(?:\.(.+)|)$/;
            ee.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, d, p, f, h, g, m = ve.get(e);
                    if (m)
                        for (n.handler && (r = n,
                        n = r.handler,
                        o = r.selector),
                        n.guid || (n.guid = ee.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (s = m.handle) || (s = m.handle = function(t) {
                            return typeof ee !== ke && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        t = (t || "").match(fe) || [""],
                        c = t.length; c--; )
                            a = Ae.exec(t[c]) || [],
                            f = g = a[1],
                            h = (a[2] || "").split(".").sort(),
                            f && (d = ee.event.special[f] || {},
                            f = (o ? d.delegateType : d.bindType) || f,
                            d = ee.event.special[f] || {},
                            u = ee.extend({
                                type: f,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && ee.expr.match.needsContext.test(o),
                                namespace: h.join(".")
                            }, r),
                            (p = l[f]) || (p = l[f] = [],
                            p.delegateCount = 0,
                            d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)),
                            d.add && (d.add.call(e, u),
                            u.handler.guid || (u.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            ee.event.global[f] = !0)
                },
                remove: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, d, p, f, h, g, m = ve.hasData(e) && ve.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(fe) || [""],
                        c = t.length; c--; )
                            if (a = Ae.exec(t[c]) || [],
                            f = g = a[1],
                            h = (a[2] || "").split(".").sort(),
                            f) {
                                for (d = ee.event.special[f] || {},
                                f = (i ? d.delegateType : d.bindType) || f,
                                p = l[f] || [],
                                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                s = r = p.length; r--; )
                                    u = p[r],
                                    !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1),
                                    u.selector && p.delegateCount--,
                                    d.remove && d.remove.call(e, u));
                                s && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ee.removeEvent(e, f, m.handle),
                                delete l[f])
                            } else
                                for (f in l)
                                    ee.event.remove(e, f + t[c], n, i, !0);
                        ee.isEmptyObject(l) && (delete m.handle,
                        ve.remove(e, "events"))
                    }
                },
                trigger: function(t, n, i, o) {
                    var r, s, a, l, c, u, d, p = [i || Z], f = U.call(t, "type") ? t.type : t, h = U.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = a = i = i || Z,
                    3 !== i.nodeType && 8 !== i.nodeType && !Le.test(f + ee.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."),
                    f = h.shift(),
                    h.sort()),
                    c = f.indexOf(":") < 0 && "on" + f,
                    t = t[ee.expando] ? t : new ee.Event(f,"object" == typeof t && t),
                    t.isTrigger = o ? 2 : 3,
                    t.namespace = h.join("."),
                    t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    t.result = void 0,
                    t.target || (t.target = i),
                    n = null == n ? [t] : ee.makeArray(n, [t]),
                    d = ee.event.special[f] || {},
                    o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                        if (!o && !d.noBubble && !ee.isWindow(i)) {
                            for (l = d.delegateType || f,
                            Le.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                                p.push(s),
                                a = s;
                            a === (i.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || e)
                        }
                        for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
                            t.type = r > 1 ? l : d.bindType || f,
                            u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"),
                            u && u.apply(s, n),
                            u = c && s[c],
                            u && u.apply && ee.acceptData(s) && (t.result = u.apply(s, n),
                            t.result === !1 && t.preventDefault());
                        return t.type = f,
                        o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !ee.acceptData(i) || c && ee.isFunction(i[f]) && !ee.isWindow(i) && (a = i[c],
                        a && (i[c] = null ),
                        ee.event.triggered = f,
                        i[f](),
                        ee.event.triggered = void 0,
                        a && (i[c] = a)),
                        t.result
                    }
                },
                dispatch: function(e) {
                    e = ee.event.fix(e);
                    var t, n, i, o, r, s = [], a = z.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], c = ee.event.special[e.type] || {};
                    if (a[0] = e,
                    e.delegateTarget = this,
                    !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (s = ee.event.handlers.call(this, e, l),
                        t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
                            for (e.currentTarget = o.elem,
                            n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r,
                                e.data = r.data,
                                i = ((ee.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a),
                                void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                                e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
                    if (a && l.nodeType && (!e.button || "click" !== e.type))
                        for (; l !== this; l = l.parentNode || this)
                            if (l.disabled !== !0 || "click" !== e.type) {
                                for (i = [],
                                n = 0; a > n; n++)
                                    r = t[n],
                                    o = r.selector + " ",
                                    void 0 === i[o] && (i[o] = r.needsContext ? ee(o, this).index(l) >= 0 : ee.find(o, this, null , [l]).length),
                                    i[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return a < t.length && s.push({
                        elem: this,
                        handlers: t.slice(a)
                    }),
                    s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, o, r = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                        i = n.documentElement,
                        o = n.body,
                        e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0),
                        e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                        e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        e
                    }
                },
                fix: function(e) {
                    if (e[ee.expando])
                        return e;
                    var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = Me.test(o) ? this.mouseHooks : Ee.test(o) ? this.keyHooks : {}),
                    i = s.props ? this.props.concat(s.props) : this.props,
                    e = new ee.Event(r),
                    t = i.length; t--; )
                        n = i[t],
                        e[n] = r[n];
                    return e.target || (e.target = Z),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    s.filter ? s.filter(e, r) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== d() && this.focus ? (this.focus(),
                            !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === d() && this.blur ? (this.blur(),
                            !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && ee.nodeName(this, "input") ? (this.click(),
                            !1) : void 0
                        },
                        _default: function(e) {
                            return ee.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, i) {
                    var o = ee.extend(new ee.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? ee.event.trigger(o, null , t) : ee.event.dispatch.call(t, o),
                    o.isDefaultPrevented() && n.preventDefault()
                }
            },
            ee.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }
            ,
            ee.Event = function(e, t) {
                return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? c : u) : this.type = e,
                t && ee.extend(this, t),
                this.timeStamp = e && e.timeStamp || ee.now(),
                void (this[ee.expando] = !0)) : new ee.Event(e,t)
            }
            ,
            ee.Event.prototype = {
                isDefaultPrevented: u,
                isPropagationStopped: u,
                isImmediatePropagationStopped: u,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c,
                    e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c,
                    e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = c,
                    this.stopPropagation()
                }
            },
            ee.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                ee.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this, o = e.relatedTarget, r = e.handleObj;
                        return (!o || o !== i && !ee.contains(i, o)) && (e.type = r.origType,
                        n = r.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            K.focusinBubbles || ee.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    ee.event.simulate(t, e.target, ee.event.fix(e), !0)
                }
                ;
                ee.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this
                          , o = ve.access(i, t);
                        o || i.addEventListener(e, n, !0),
                        ve.access(i, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this
                          , o = ve.access(i, t) - 1;
                        o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0),
                        ve.remove(i, t))
                    }
                }
            }),
            ee.fn.extend({
                on: function(e, t, n, i, o) {
                    var r, s;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t,
                        t = void 0);
                        for (s in e)
                            this.on(s, t, n, e[s], o);
                        return this
                    }
                    if (null == n && null == i ? (i = t,
                    n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
                    n = void 0) : (i = n,
                    n = t,
                    t = void 0)),
                    i === !1)
                        i = u;
                    else if (!i)
                        return this;
                    return 1 === o && (r = i,
                    i = function(e) {
                        return ee().off(e),
                        r.apply(this, arguments)
                    }
                    ,
                    i.guid = r.guid || (r.guid = ee.guid++)),
                    this.each(function() {
                        ee.event.add(this, e, i, n, t)
                    })
                },
                one: function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t,
                    t = void 0),
                    n === !1 && (n = u),
                    this.each(function() {
                        ee.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        ee.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? ee.event.trigger(e, t, n, !0) : void 0
                }
            });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
              , De = /<([\w:]+)/
              , je = /<|&#?\w+;/
              , Ne = /<(?:script|style|link)/i
              , He = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Ie = /^$|\/(?:java|ecma)script/i
              , Fe = /^true\/(.*)/
              , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
              , _e = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            _e.optgroup = _e.option,
            _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
            _e.th = _e.td,
            ee.extend({
                clone: function(e, t, n) {
                    var i, o, r, s, a = e.cloneNode(!0), l = ee.contains(e.ownerDocument, e);
                    if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                        for (s = v(a),
                        r = v(e),
                        i = 0,
                        o = r.length; o > i; i++)
                            y(r[i], s[i]);
                    if (t)
                        if (n)
                            for (r = r || v(e),
                            s = s || v(a),
                            i = 0,
                            o = r.length; o > i; i++)
                                m(r[i], s[i]);
                        else
                            m(e, a);
                    return s = v(a, "script"),
                    s.length > 0 && g(s, !l && v(e, "script")),
                    a
                },
                buildFragment: function(e, t, n, i) {
                    for (var o, r, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; f > p; p++)
                        if (o = e[p],
                        o || 0 === o)
                            if ("object" === ee.type(o))
                                ee.merge(d, o.nodeType ? [o] : o);
                            else if (je.test(o)) {
                                for (r = r || u.appendChild(t.createElement("div")),
                                s = (De.exec(o) || ["", ""])[1].toLowerCase(),
                                a = _e[s] || _e._default,
                                r.innerHTML = a[1] + o.replace(Pe, "<$1></$2>") + a[2],
                                c = a[0]; c--; )
                                    r = r.lastChild;
                                ee.merge(d, r.childNodes),
                                r = u.firstChild,
                                r.textContent = ""
                            } else
                                d.push(t.createTextNode(o));
                    for (u.textContent = "",
                    p = 0; o = d[p++]; )
                        if ((!i || -1 === ee.inArray(o, i)) && (l = ee.contains(o.ownerDocument, o),
                        r = v(u.appendChild(o), "script"),
                        l && g(r),
                        n))
                            for (c = 0; o = r[c++]; )
                                Ie.test(o.type || "") && n.push(o);
                    return u
                },
                cleanData: function(e) {
                    for (var t, n, i, o, r, s, a = ee.event.special, l = 0; void 0 !== (n = e[l]); l++) {
                        if (ee.acceptData(n) && (r = n[ve.expando],
                        r && (t = ve.cache[r]))) {
                            if (i = Object.keys(t.events || {}),
                            i.length)
                                for (s = 0; void 0 !== (o = i[s]); s++)
                                    a[o] ? ee.event.remove(n, o) : ee.removeEvent(n, o, t.handle);
                            ve.cache[r] && delete ve.cache[r]
                        }
                        delete ye.cache[n[ye.expando]]
                    }
                }
            }),
            ee.fn.extend({
                text: function(e) {
                    return me(this, function(e) {
                        return void 0 === e ? ee.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null , e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, i = e ? ee.filter(e, this) : this, o = 0; null != (n = i[o]); o++)
                        t || 1 !== n.nodeType || ee.cleanData(v(n)),
                        n.parentNode && (t && ee.contains(n.ownerDocument, n) && g(v(n, "script")),
                        n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (ee.cleanData(v(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return ee.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return me(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !_e[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(Pe, "<$1></$2>");
                            try {
                                for (; i > n; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (ee.cleanData(v(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (o) {}
                        }
                        t && this.empty().append(e)
                    }, null , e, arguments.length)
                },
                replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) {
                        e = this.parentNode,
                        ee.cleanData(v(this)),
                        e && e.replaceChild(t, this)
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t) {
                    e = X.apply([], e);
                    var n, i, o, r, s, a, l = 0, c = this.length, u = this, d = c - 1, p = e[0], g = ee.isFunction(p);
                    if (g || c > 1 && "string" == typeof p && !K.checkClone && He.test(p))
                        return this.each(function(n) {
                            var i = u.eq(n);
                            g && (e[0] = p.call(this, n, i.html())),
                            i.domManip(e, t)
                        });
                    if (c && (n = ee.buildFragment(e, this[0].ownerDocument, !1, this),
                    i = n.firstChild,
                    1 === n.childNodes.length && (n = i),
                    i)) {
                        for (o = ee.map(v(n, "script"), f),
                        r = o.length; c > l; l++)
                            s = n,
                            l !== d && (s = ee.clone(s, !0, !0),
                            r && ee.merge(o, v(s, "script"))),
                            t.call(this[l], s, l);
                        if (r)
                            for (a = o[o.length - 1].ownerDocument,
                            ee.map(o, h),
                            l = 0; r > l; l++)
                                s = o[l],
                                Ie.test(s.type || "") && !ve.access(s, "globalEval") && ee.contains(a, s) && (s.src ? ee._evalUrl && ee._evalUrl(s.src) : ee.globalEval(s.textContent.replace(Oe, "")))
                    }
                    return this
                }
            }),
            ee.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                ee.fn[e] = function(e) {
                    for (var n, i = [], o = ee(e), r = o.length - 1, s = 0; r >= s; s++)
                        n = s === r ? this : this.clone(!0),
                        ee(o[s])[t](n),
                        Y.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Re, We = {}, Be = /^margin/, qe = new RegExp("^(" + be + ")(?!px)[a-z%]+$","i"), ze = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null )
            }
            ;
            !function() {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",
                    r.appendChild(s);
                    var t = e.getComputedStyle(a, null );
                    n = "1%" !== t.top,
                    i = "4px" === t.width,
                    r.removeChild(s)
                }
                var n, i, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r = Z.documentElement, s = Z.createElement("div"), a = Z.createElement("div");
                a.style.backgroundClip = "content-box",
                a.cloneNode(!0).style.backgroundClip = "",
                K.clearCloneStyle = "content-box" === a.style.backgroundClip,
                s.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                s.appendChild(a),
                e.getComputedStyle && ee.extend(K, {
                    pixelPosition: function() {
                        return t(),
                        n
                    },
                    boxSizingReliable: function() {
                        return null == i && t(),
                        i
                    },
                    reliableMarginRight: function() {
                        var t, n = a.appendChild(Z.createElement("div"));
                        return n.style.cssText = a.style.cssText = o,
                        n.style.marginRight = n.style.width = "0",
                        a.style.width = "1px",
                        r.appendChild(s),
                        t = !parseFloat(e.getComputedStyle(n, null ).marginRight),
                        r.removeChild(s),
                        a.innerHTML = "",
                        t
                    }
                })
            }(),
            ee.swap = function(e, t, n, i) {
                var o, r, s = {};
                for (r in t)
                    s[r] = e.style[r],
                    e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t)
                    e.style[r] = s[r];
                return o
            }
            ;
            var Xe = /^(none|table(?!-c[ea]).+)/
              , Ye = new RegExp("^(" + be + ")(.*)$","i")
              , Ve = new RegExp("^([+-])=(" + be + ")","i")
              , $e = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Ge = {
                letterSpacing: 0,
                fontWeight: 400
            }
              , Ue = ["Webkit", "O", "Moz", "ms"];
            ee.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = b(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, s, a = ee.camelCase(t), l = e.style;
                        return t = ee.cssProps[a] || (ee.cssProps[a] = T(l, a)),
                        s = ee.cssHooks[t] || ee.cssHooks[a],
                        void 0 === n ? s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n,
                        "string" === r && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ee.css(e, t)),
                        r = "number"),
                        void (null != n && n === n && ("number" !== r || ee.cssNumber[a] || (n += "px"),
                        K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l[t] = "",
                        l[t] = n))))
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, s, a = ee.camelCase(t);
                    return t = ee.cssProps[a] || (ee.cssProps[a] = T(e.style, a)),
                    s = ee.cssHooks[t] || ee.cssHooks[a],
                    s && "get"in s && (o = s.get(e, !0, n)),
                    void 0 === o && (o = b(e, t, i)),
                    "normal" === o && t in Ge && (o = Ge[t]),
                    "" === n || n ? (r = parseFloat(o),
                    n === !0 || ee.isNumeric(r) ? r || 0 : o) : o
                }
            }),
            ee.each(["height", "width"], function(e, t) {
                ee.cssHooks[t] = {
                    get: function(e, n, i) {
                        return n ? 0 === e.offsetWidth && Xe.test(ee.css(e, "display")) ? ee.swap(e, $e, function() {
                            return E(e, t, i)
                        }) : E(e, t, i) : void 0
                    },
                    set: function(e, n, i) {
                        var o = i && ze(e);
                        return C(e, n, i ? k(e, t, i, "border-box" === ee.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }),
            ee.cssHooks.marginRight = S(K.reliableMarginRight, function(e, t) {
                return t ? ee.swap(e, {
                    display: "inline-block"
                }, b, [e, "marginRight"]) : void 0
            }),
            ee.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                ee.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                            o[e + Se[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                },
                Be.test(e) || (ee.cssHooks[e + t].set = C)
            }),
            ee.fn.extend({
                css: function(e, t) {
                    return me(this, function(e, t, n) {
                        var i, o, r = {}, s = 0;
                        if (ee.isArray(t)) {
                            for (i = ze(e),
                            o = t.length; o > s; s++)
                                r[t[s]] = ee.css(e, t[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return M(this, !0)
                },
                hide: function() {
                    return M(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Te(this) ? ee(this).show() : ee(this).hide()
                    })
                }
            }),
            ee.Tween = L,
            L.prototype = {
                constructor: L,
                init: function(e, t, n, i, o, r) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (ee.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = L.propHooks[this.prop];
                    return e && e.get ? e.get(this) : L.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = L.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : L.propHooks._default.set(this),
                    this
                }
            },
            L.prototype.init.prototype = L.prototype,
            L.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            L.propHooks.scrollTop = L.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            ee.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            },
            ee.fx = L.prototype.init,
            ee.fx.step = {};
            var Qe, Ke, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$","i"), et = /queueHooks$/, tt = [j], nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t)
                      , i = n.cur()
                      , o = Je.exec(t)
                      , r = o && o[3] || (ee.cssNumber[e] ? "" : "px")
                      , s = (ee.cssNumber[e] || "px" !== r && +i) && Je.exec(ee.css(n.elem, e))
                      , a = 1
                      , l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3],
                        o = o || [],
                        s = +i || 1;
                        do
                            a = a || ".5",
                            s /= a,
                            ee.style(n.elem, e, s + r);
                        while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0,
                    n.unit = r,
                    n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
                    n
                }
                ]
            };
            ee.Animation = ee.extend(H, {
                tweener: function(e, t) {
                    ee.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, o = e.length; o > i; i++)
                        n = e[i],
                        nt[n] = nt[n] || [],
                        nt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }),
            ee.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? ee.extend({}, e) : {
                    complete: n || !n && t || ee.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ee.isFunction(t) && t
                };
                return i.duration = ee.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ee.fx.speeds ? ee.fx.speeds[i.duration] : ee.fx.speeds._default,
                (null == i.queue || i.queue === !0) && (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    ee.isFunction(i.old) && i.old.call(this),
                    i.queue && ee.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            ee.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Te).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = ee.isEmptyObject(e)
                      , r = ee.speed(t, n, i)
                      , s = function() {
                        var t = H(this, ee.extend({}, e), r);
                        (o || ve.get(this, "finish")) && t.stop(!0)
                    }
                    ;
                    return s.finish = s,
                    o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    }
                    ;
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , o = null != e && e + "queueHooks"
                          , r = ee.timers
                          , s = ve.get(this);
                        if (o)
                            s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s)
                                s[o] && s[o].stop && et.test(o) && i(s[o]);
                        for (o = r.length; o--; )
                            r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                            t = !1,
                            r.splice(o, 1));
                        (t || !n) && ee.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = ve.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = ee.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                        ee.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = r.length; t--; )
                            r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                            r.splice(t, 1));
                        for (t = 0; s > t; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            ee.each(["toggle", "show", "hide"], function(e, t) {
                var n = ee.fn[t];
                ee.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o);
                }
            }),
            ee.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ee.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            ee.timers = [],
            ee.fx.tick = function() {
                var e, t = 0, n = ee.timers;
                for (Qe = ee.now(); t < n.length; t++)
                    e = n[t],
                    e() || n[t] !== e || n.splice(t--, 1);
                n.length || ee.fx.stop(),
                Qe = void 0
            }
            ,
            ee.fx.timer = function(e) {
                ee.timers.push(e),
                e() ? ee.fx.start() : ee.timers.pop()
            }
            ,
            ee.fx.interval = 13,
            ee.fx.start = function() {
                Ke || (Ke = setInterval(ee.fx.tick, ee.fx.interval))
            }
            ,
            ee.fx.stop = function() {
                clearInterval(Ke),
                Ke = null
            }
            ,
            ee.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ee.fn.delay = function(e, t) {
                return e = ee.fx ? ee.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            }
            ,
            function() {
                var e = Z.createElement("input")
                  , t = Z.createElement("select")
                  , n = t.appendChild(Z.createElement("option"));
                e.type = "checkbox",
                K.checkOn = "" !== e.value,
                K.optSelected = n.selected,
                t.disabled = !0,
                K.optDisabled = !n.disabled,
                e = Z.createElement("input"),
                e.value = "t",
                e.type = "radio",
                K.radioValue = "t" === e.value
            }();
            var it, ot, rt = ee.expr.attrHandle;
            ee.fn.extend({
                attr: function(e, t) {
                    return me(this, ee.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        ee.removeAttr(this, e)
                    })
                }
            }),
            ee.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === ke ? ee.prop(e, t, n) : (1 === r && ee.isXMLDoc(e) || (t = t.toLowerCase(),
                    i = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? ot : it)),
                    void 0 === n ? i && "get"in i && null !== (o = i.get(e, t)) ? o : (o = ee.find.attr(e, t),
                    null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
                    n) : void ee.removeAttr(e, t)) : void 0
                },
                removeAttr: function(e, t) {
                    var n, i, o = 0, r = t && t.match(fe);
                    if (r && 1 === e.nodeType)
                        for (; n = r[o++]; )
                            i = ee.propFix[n] || n,
                            ee.expr.match.bool.test(n) && (e[i] = !1),
                            e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!K.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                }
            }),
            ot = {
                set: function(e, t, n) {
                    return t === !1 ? ee.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = rt[t] || ee.find.attr;
                rt[t] = function(e, t, i) {
                    var o, r;
                    return i || (r = rt[t],
                    rt[t] = o,
                    o = null != n(e, t, i) ? t.toLowerCase() : null ,
                    rt[t] = r),
                    o
                }
            });
            var st = /^(?:input|select|textarea|button)$/i;
            ee.fn.extend({
                prop: function(e, t) {
                    return me(this, ee.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[ee.propFix[e] || e]
                    })
                }
            }),
            ee.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(e, t, n) {
                    var i, o, r, s = e.nodeType;
                    return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !ee.isXMLDoc(e),
                    r && (t = ee.propFix[t] || t,
                    o = ee.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }),
            K.optSelected || (ee.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                }
            }),
            ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ee.propFix[this.toLowerCase()] = this
            });
            var at = /[\t\r\n\f]/g;
            ee.fn.extend({
                addClass: function(e) {
                    var t, n, i, o, r, s, a = "string" == typeof e && e, l = 0, c = this.length;
                    if (ee.isFunction(e))
                        return this.each(function(t) {
                            ee(this).addClass(e.call(this, t, this.className))
                        });
                    if (a)
                        for (t = (e || "").match(fe) || []; c > l; l++)
                            if (n = this[l],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                                for (r = 0; o = t[r++]; )
                                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s = ee.trim(i),
                                n.className !== s && (n.className = s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
                    if (ee.isFunction(e))
                        return this.each(function(t) {
                            ee(this).removeClass(e.call(this, t, this.className))
                        });
                    if (a)
                        for (t = (e || "").match(fe) || []; c > l; l++)
                            if (n = this[l],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                                for (r = 0; o = t[r++]; )
                                    for (; i.indexOf(" " + o + " ") >= 0; )
                                        i = i.replace(" " + o + " ", " ");
                                s = e ? ee.trim(i) : "",
                                n.className !== s && (n.className = s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ee.isFunction(e) ? function(n) {
                        ee(this).toggleClass(e.call(this, n, this.className, t), t)
                    }
                    : function() {
                        if ("string" === n)
                            for (var t, i = 0, o = ee(this), r = e.match(fe) || []; t = r[i++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            (n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                    }
                    )
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)
                            return !0;
                    return !1
                }
            });
            var lt = /\r/g;
            ee.fn.extend({
                val: function(e) {
                    var t, n, i, o = this[0];
                    return arguments.length ? (i = ee.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, ee(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : ee.isArray(o) && (o = ee.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = ee.valHooks[o.type] || ee.valHooks[o.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                    "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
                }
            }),
            ee.extend({
                valHooks: {
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                                if (n = i[l],
                                !(!n.selected && l !== o || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ee.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ee(n).val(),
                                    r)
                                        return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, i, o = e.options, r = ee.makeArray(t), s = o.length; s--; )
                                i = o[s],
                                (i.selected = ee.inArray(ee(i).val(), r) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            r
                        }
                    }
                }
            }),
            ee.each(["radio", "checkbox"], function() {
                ee.valHooks[this] = {
                    set: function(e, t) {
                        return ee.isArray(t) ? e.checked = ee.inArray(ee(e).val(), t) >= 0 : void 0
                    }
                },
                K.checkOn || (ee.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            }),
            ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                ee.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
                }
            }),
            ee.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null , t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null , t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var ct = ee.now()
              , ut = /\?/;
            ee.parseJSON = function(e) {
                return JSON.parse(e + "")
            }
            ,
            ee.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e)
                    return null ;
                try {
                    n = new DOMParser,
                    t = n.parseFromString(e, "text/xml")
                } catch (i) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && ee.error("Invalid XML: " + e),
                t
            }
            ;
            var dt, pt, ft = /#.*$/, ht = /([?&])_=[^&]*/, gt = /^(.*?):[ \t]*([^\r\n]*)$/gm, mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, vt = /^(?:GET|HEAD)$/, yt = /^\/\//, wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xt = {}, bt = {}, St = "*/".concat("*");
            try {
                pt = location.href
            } catch (Tt) {
                pt = Z.createElement("a"),
                pt.href = "",
                pt = pt.href
            }
            dt = wt.exec(pt.toLowerCase()) || [],
            ee.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: pt,
                    type: "GET",
                    isLocal: mt.test(dt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": St,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ee.parseJSON,
                        "text xml": ee.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? O(O(e, ee.ajaxSettings), t) : O(ee.ajaxSettings, e)
                },
                ajaxPrefilter: I(xt),
                ajaxTransport: I(bt),
                ajax: function(e, t) {
                    function n(e, t, n, s) {
                        var l, u, v, y, x, S = t;
                        2 !== w && (w = 2,
                        a && clearTimeout(a),
                        i = void 0,
                        r = s || "",
                        b.readyState = e > 0 ? 4 : 0,
                        l = e >= 200 && 300 > e || 304 === e,
                        n && (y = _(d, b, n)),
                        y = R(d, y, b, l),
                        l ? (d.ifModified && (x = b.getResponseHeader("Last-Modified"),
                        x && (ee.lastModified[o] = x),
                        x = b.getResponseHeader("etag"),
                        x && (ee.etag[o] = x)),
                        204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state,
                        u = y.data,
                        v = y.error,
                        l = !v)) : (v = S,
                        (e || !S) && (S = "error",
                        0 > e && (e = 0))),
                        b.status = e,
                        b.statusText = (t || S) + "",
                        l ? h.resolveWith(p, [u, S, b]) : h.rejectWith(p, [b, S, v]),
                        b.statusCode(m),
                        m = void 0,
                        c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [b, d, l ? u : v]),
                        g.fireWith(p, [b, S]),
                        c && (f.trigger("ajaxComplete", [b, d]),
                        --ee.active || ee.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var i, o, r, s, a, l, c, u, d = ee.ajaxSetup({}, t), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? ee(p) : ee.event, h = ee.Deferred(), g = ee.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, w = 0, x = "canceled", b = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; t = gt.exec(r); )
                                        s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = y[n] = y[n] || e,
                            v[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return w || (d.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > w)
                                    for (t in e)
                                        m[t] = [m[t], e[t]];
                                else
                                    b.always(e[b.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return i && i.abort(t),
                            n(0, t),
                            this
                        }
                    };
                    if (h.promise(b).complete = g.add,
                    b.success = b.done,
                    b.error = b.fail,
                    d.url = ((e || d.url || pt) + "").replace(ft, "").replace(yt, dt[1] + "//"),
                    d.type = t.method || t.type || d.method || d.type,
                    d.dataTypes = ee.trim(d.dataType || "*").toLowerCase().match(fe) || [""],
                    null == d.crossDomain && (l = wt.exec(d.url.toLowerCase()),
                    d.crossDomain = !(!l || l[1] === dt[1] && l[2] === dt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))),
                    d.data && d.processData && "string" != typeof d.data && (d.data = ee.param(d.data, d.traditional)),
                    F(xt, d, t, b),
                    2 === w)
                        return b;
                    c = d.global,
                    c && 0 === ee.active++ && ee.event.trigger("ajaxStart"),
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !vt.test(d.type),
                    o = d.url,
                    d.hasContent || (d.data && (o = d.url += (ut.test(o) ? "&" : "?") + d.data,
                    delete d.data),
                    d.cache === !1 && (d.url = ht.test(o) ? o.replace(ht, "$1_=" + ct++) : o + (ut.test(o) ? "&" : "?") + "_=" + ct++)),
                    d.ifModified && (ee.lastModified[o] && b.setRequestHeader("If-Modified-Since", ee.lastModified[o]),
                    ee.etag[o] && b.setRequestHeader("If-None-Match", ee.etag[o])),
                    (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", d.contentType),
                    b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + St + "; q=0.01" : "") : d.accepts["*"]);
                    for (u in d.headers)
                        b.setRequestHeader(u, d.headers[u]);
                    if (d.beforeSend && (d.beforeSend.call(p, b, d) === !1 || 2 === w))
                        return b.abort();
                    x = "abort";
                    for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        b[u](d[u]);
                    if (i = F(bt, d, t, b)) {
                        b.readyState = 1,
                        c && f.trigger("ajaxSend", [b, d]),
                        d.async && d.timeout > 0 && (a = setTimeout(function() {
                            b.abort("timeout")
                        }, d.timeout));
                        try {
                            w = 1,
                            i.send(v, n)
                        } catch (S) {
                            if (!(2 > w))
                                throw S;
                            n(-1, S)
                        }
                    } else
                        n(-1, "No Transport");
                    return b
                },
                getJSON: function(e, t, n) {
                    return ee.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return ee.get(e, void 0, t, "script")
                }
            }),
            ee.each(["get", "post"], function(e, t) {
                ee[t] = function(e, n, i, o) {
                    return ee.isFunction(n) && (o = o || i,
                    i = n,
                    n = void 0),
                    ee.ajax({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: i
                    })
                }
            }),
            ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                ee.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            ee._evalUrl = function(e) {
                return ee.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            ee.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return ee.isFunction(e) ? this.each(function(t) {
                        ee(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this)
                },
                wrapInner: function(e) {
                    return this.each(ee.isFunction(e) ? function(t) {
                        ee(this).wrapInner(e.call(this, t))
                    }
                    : function() {
                        var t = ee(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                    )
                },
                wrap: function(e) {
                    var t = ee.isFunction(e);
                    return this.each(function(n) {
                        ee(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            ee.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }
            ,
            ee.expr.filters.visible = function(e) {
                return !ee.expr.filters.hidden(e)
            }
            ;
            var Ct = /%20/g
              , kt = /\[\]$/
              , Et = /\r?\n/g
              , Mt = /^(?:submit|button|image|reset|file)$/i
              , Lt = /^(?:input|select|textarea|keygen)/i;
            ee.param = function(e, t) {
                var n, i = [], o = function(e, t) {
                    t = ee.isFunction(t) ? t() : null == t ? "" : t,
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                }
                ;
                if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional),
                ee.isArray(e) || e.jquery && !ee.isPlainObject(e))
                    ee.each(e, function() {
                        o(this.name, this.value)
                    });
                else
                    for (n in e)
                        W(n, e[n], t, o);
                return i.join("&").replace(Ct, "+")
            }
            ,
            ee.fn.extend({
                serialize: function() {
                    return ee.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = ee.prop(this, "elements");
                        return e ? ee.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ee(this).is(":disabled") && Lt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ce.test(e))
                    }).map(function(e, t) {
                        var n = ee(this).val();
                        return null == n ? null : ee.isArray(n) ? ee.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Et, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Et, "\r\n")
                        }
                    }).get()
                }
            }),
            ee.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            }
            ;
            var At = 0
              , Pt = {}
              , Dt = {
                0: 200,
                1223: 204
            }
              , jt = ee.ajaxSettings.xhr();
            e.ActiveXObject && ee(e).on("unload", function() {
                for (var e in Pt)
                    Pt[e]()
            }),
            K.cors = !!jt && "withCredentials"in jt,
            K.ajax = jt = !!jt,
            ee.ajaxTransport(function(e) {
                var t;
                return K.cors || jt && !e.crossDomain ? {
                    send: function(n, i) {
                        var o, r = e.xhr(), s = ++At;
                        if (r.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (o in e.xhrFields)
                                r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                        e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)
                            r.setRequestHeader(o, n[o]);
                        t = function(e) {
                            return function() {
                                t && (delete Pt[s],
                                t = r.onload = r.onerror = null ,
                                "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(Dt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                    text: r.responseText
                                } : void 0, r.getAllResponseHeaders()))
                            }
                        }
                        ,
                        r.onload = t(),
                        r.onerror = t("error"),
                        t = Pt[s] = t("abort"),
                        r.send(e.hasContent && e.data || null )
                    },
                    abort: function() {
                        t && t()
                    }
                } : void 0
            }),
            ee.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return ee.globalEval(e),
                        e
                    }
                }
            }),
            ee.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            ee.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(i, o) {
                            t = ee("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null ,
                                e && o("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            Z.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Nt = []
              , Ht = /(=)\?(?=&|$)|\?\?/;
            ee.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Nt.pop() || ee.expando + "_" + ct++;
                    return this[e] = !0,
                    e
                }
            }),
            ee.ajaxPrefilter("json jsonp", function(t, n, i) {
                var o, r, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
                return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Ht, "$1" + o) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                t.converters["script json"] = function() {
                    return s || ee.error(o + " was not called"),
                    s[0]
                }
                ,
                t.dataTypes[0] = "json",
                r = e[o],
                e[o] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    e[o] = r,
                    t[o] && (t.jsonpCallback = n.jsonpCallback,
                    Nt.push(o)),
                    s && ee.isFunction(r) && r(s[0]),
                    s = r = void 0
                }),
                "script") : void 0
            }),
            ee.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null ;
                "boolean" == typeof t && (n = t,
                t = !1),
                t = t || Z;
                var i = se.exec(e)
                  , o = !n && [];
                return i ? [t.createElement(i[1])] : (i = ee.buildFragment([e], t, o),
                o && o.length && ee(o).remove(),
                ee.merge([], i.childNodes))
            }
            ;
            var It = ee.fn.load;
            ee.fn.load = function(e, t, n) {
                if ("string" != typeof e && It)
                    return It.apply(this, arguments);
                var i, o, r, s = this, a = e.indexOf(" ");
                return a >= 0 && (i = e.slice(a),
                e = e.slice(0, a)),
                ee.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (o = "POST"),
                s.length > 0 && ee.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments,
                    s.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e)
                }).complete(n && function(e, t) {
                    s.each(n, r || [e.responseText, t, e])
                }
                ),
                this
            }
            ,
            ee.expr.filters.animated = function(e) {
                return ee.grep(ee.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ;
            var Ft = e.document.documentElement;
            ee.offset = {
                setOffset: function(e, t, n) {
                    var i, o, r, s, a, l, c, u = ee.css(e, "position"), d = ee(e), p = {};
                    "static" === u && (e.style.position = "relative"),
                    a = d.offset(),
                    r = ee.css(e, "top"),
                    l = ee.css(e, "left"),
                    c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
                    c ? (i = d.position(),
                    s = i.top,
                    o = i.left) : (s = parseFloat(r) || 0,
                    o = parseFloat(l) || 0),
                    ee.isFunction(t) && (t = t.call(e, n, a)),
                    null != t.top && (p.top = t.top - a.top + s),
                    null != t.left && (p.left = t.left - a.left + o),
                    "using"in t ? t.using.call(e, p) : d.css(p)
                }
            },
            ee.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            ee.offset.setOffset(this, e, t)
                        });
                    var t, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    }, r = i && i.ownerDocument;
                    return r ? (t = r.documentElement,
                    ee.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (o = i.getBoundingClientRect()),
                    n = B(r),
                    {
                        top: o.top + n.pageYOffset - t.clientTop,
                        left: o.left + n.pageXOffset - t.clientLeft
                    }) : o) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === ee.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        ee.nodeName(e[0], "html") || (i = e.offset()),
                        i.top += ee.css(e[0], "borderTopWidth", !0),
                        i.left += ee.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - i.top - ee.css(n, "marginTop", !0),
                            left: t.left - i.left - ee.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || Ft; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position"); )
                            e = e.offsetParent;
                        return e || Ft
                    })
                }
            }),
            ee.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, n) {
                var i = "pageYOffset" === n;
                ee.fn[t] = function(o) {
                    return me(this, function(t, o, r) {
                        var s = B(t);
                        return void 0 === r ? s ? s[n] : t[o] : void (s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
                    }, t, o, arguments.length, null )
                }
            }),
            ee.each(["top", "left"], function(e, t) {
                ee.cssHooks[t] = S(K.pixelPosition, function(e, n) {
                    return n ? (n = b(e, t),
                    qe.test(n) ? ee(e).position()[t] + "px" : n) : void 0
                })
            }),
            ee.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                ee.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    ee.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i)
                          , s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return me(this, function(t, n, i) {
                            var o;
                            return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ee.css(t, n, s) : ee.style(t, n, i, s)
                        }, t, r ? i : void 0, r, null )
                    }
                })
            }),
            ee.fn.size = function() {
                return this.length
            }
            ,
            ee.fn.andSelf = ee.fn.addBack,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return ee
            });
            var Ot = e.jQuery
              , _t = e.$;
            return ee.noConflict = function(t) {
                return e.$ === ee && (e.$ = _t),
                t && e.jQuery === ee && (e.jQuery = Ot),
                ee
            }
            ,
            typeof t === ke && (e.jQuery = e.$ = ee),
            ee
        })
    }
    , {}],
    9: [function(e, t, n) {
        !function(e, t, n, i) {
            "use strict";
            function o(t, n) {
                this.element = t,
                this.$context = e(t).data("api", this),
                this.$layers = this.$context.find(".layer");
                var i = {
                    calibrateX: this.$context.data("calibrate-x") || null ,
                    calibrateY: this.$context.data("calibrate-y") || null ,
                    invertX: this.$context.data("invert-x") || null ,
                    invertY: this.$context.data("invert-y") || null ,
                    limitX: parseFloat(this.$context.data("limit-x")) || null ,
                    limitY: parseFloat(this.$context.data("limit-y")) || null ,
                    scalarX: parseFloat(this.$context.data("scalar-x")) || null ,
                    scalarY: parseFloat(this.$context.data("scalar-y")) || null ,
                    frictionX: parseFloat(this.$context.data("friction-x")) || null ,
                    frictionY: parseFloat(this.$context.data("friction-y")) || null ,
                    originX: parseFloat(this.$context.data("origin-x")) || null ,
                    originY: parseFloat(this.$context.data("origin-y")) || null
                };
                for (var o in i)
                    null === i[o] && delete i[o];
                e.extend(this, a, n, i),
                this.calibrationTimer = null ,
                this.calibrationFlag = !0,
                this.enabled = !1,
                this.depths = [],
                this.raf = null ,
                this.bounds = null ,
                this.ex = 0,
                this.ey = 0,
                this.ew = 0,
                this.eh = 0,
                this.ecx = 0,
                this.ecy = 0,
                this.erx = 0,
                this.ery = 0,
                this.cx = 0,
                this.cy = 0,
                this.ix = 0,
                this.iy = 0,
                this.mx = 0,
                this.my = 0,
                this.vx = 0,
                this.vy = 0,
                this.onMouseMove = this.onMouseMove.bind(this),
                this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
                this.onOrientationTimer = this.onOrientationTimer.bind(this),
                this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
                this.onAnimationFrame = this.onAnimationFrame.bind(this),
                this.onWindowResize = this.onWindowResize.bind(this),
                this.initialise()
            }
            var r = "parallax"
              , s = 30
              , a = {
                relativeInput: !1,
                clipRelativeInput: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5
            };
            o.prototype.transformSupport = function(e) {
                for (var o = n.createElement("div"), r = !1, s = null , a = !1, l = null , c = null , u = 0, d = this.vendors.length; d > u; u++)
                    if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform",
                    c = this.vendors[u][1] + "Transform") : (l = "transform",
                    c = "transform"),
                    o.style[c] !== i) {
                        r = !0;
                        break
                    }
                switch (e) {
                case "2D":
                    a = r;
                    break;
                case "3D":
                    if (r) {
                        var p = n.body || n.createElement("body")
                          , f = n.documentElement
                          , h = f.style.overflow;
                        n.body || (f.style.overflow = "hidden",
                        f.appendChild(p),
                        p.style.overflow = "hidden",
                        p.style.background = ""),
                        p.appendChild(o),
                        o.style[c] = "translate3d(1px,1px,1px)",
                        s = t.getComputedStyle(o).getPropertyValue(l),
                        a = s !== i && s.length > 0 && "none" !== s,
                        f.style.overflow = h,
                        p.removeChild(o)
                    }
                }
                return a
            }
            ,
            o.prototype.ww = null ,
            o.prototype.wh = null ,
            o.prototype.wcx = null ,
            o.prototype.wcy = null ,
            o.prototype.wrx = null ,
            o.prototype.wry = null ,
            o.prototype.portrait = null ,
            o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            o.prototype.vendors = [null , ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
            o.prototype.motionSupport = !!t.DeviceMotionEvent,
            o.prototype.orientationSupport = !!t.DeviceOrientationEvent,
            o.prototype.orientationStatus = 0,
            o.prototype.transform2DSupport = o.prototype.transformSupport("2D"),
            o.prototype.transform3DSupport = o.prototype.transformSupport("3D"),
            o.prototype.propertyCache = {},
            o.prototype.initialise = function() {
                "static" === this.$context.css("position") && this.$context.css({
                    position: "relative"
                }),
                this.accelerate(this.$context),
                this.updateLayers(),
                this.updateDimensions(),
                this.enable(),
                this.queueCalibration(this.calibrationDelay)
            }
            ,
            o.prototype.updateLayers = function() {
                this.$layers = this.$context.find(".layer"),
                this.depths = [],
                this.$layers.css({
                    position: "absolute",
                    display: "block",
                    left: 0,
                    top: 0
                }),
                this.$layers.first().css({
                    position: "relative"
                }),
                this.accelerate(this.$layers),
                this.$layers.each(e.proxy(function(t, n) {
                    this.depths.push(e(n).data("depth") || 0)
                }, this))
            }
            ,
            o.prototype.updateDimensions = function() {
                this.ww = t.innerWidth,
                this.wh = t.innerHeight,
                this.wcx = this.ww * this.originX,
                this.wcy = this.wh * this.originY,
                this.wrx = Math.max(this.wcx, this.ww - this.wcx),
                this.wry = Math.max(this.wcy, this.wh - this.wcy)
            }
            ,
            o.prototype.updateBounds = function() {
                this.bounds = this.element.getBoundingClientRect(),
                this.ex = this.bounds.left,
                this.ey = this.bounds.top,
                this.ew = this.bounds.width,
                this.eh = this.bounds.height,
                this.ecx = this.ew * this.originX,
                this.ecy = this.eh * this.originY,
                this.erx = Math.max(this.ecx, this.ew - this.ecx),
                this.ery = Math.max(this.ecy, this.eh - this.ecy)
            }
            ,
            o.prototype.queueCalibration = function(e) {
                clearTimeout(this.calibrationTimer),
                this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
            }
            ,
            o.prototype.enable = function() {
                this.enabled || (this.enabled = !0,
                this.orientationSupport ? (this.portrait = null ,
                t.addEventListener("deviceorientation", this.onDeviceOrientation),
                setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0,
                this.cy = 0,
                this.portrait = !1,
                t.addEventListener("mousemove", this.onMouseMove)),
                t.addEventListener("resize", this.onWindowResize),
                this.raf = requestAnimationFrame(this.onAnimationFrame))
            }
            ,
            o.prototype.disable = function() {
                this.enabled && (this.enabled = !1,
                this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove),
                t.removeEventListener("resize", this.onWindowResize),
                cancelAnimationFrame(this.raf))
            }
            ,
            o.prototype.calibrate = function(e, t) {
                this.calibrateX = e === i ? this.calibrateX : e,
                this.calibrateY = t === i ? this.calibrateY : t
            }
            ,
            o.prototype.invert = function(e, t) {
                this.invertX = e === i ? this.invertX : e,
                this.invertY = t === i ? this.invertY : t
            }
            ,
            o.prototype.friction = function(e, t) {
                this.frictionX = e === i ? this.frictionX : e,
                this.frictionY = t === i ? this.frictionY : t
            }
            ,
            o.prototype.scalar = function(e, t) {
                this.scalarX = e === i ? this.scalarX : e,
                this.scalarY = t === i ? this.scalarY : t
            }
            ,
            o.prototype.limit = function(e, t) {
                this.limitX = e === i ? this.limitX : e,
                this.limitY = t === i ? this.limitY : t
            }
            ,
            o.prototype.origin = function(e, t) {
                this.originX = e === i ? this.originX : e,
                this.originY = t === i ? this.originY : t
            }
            ,
            o.prototype.clamp = function(e, t, n) {
                return e = Math.max(e, t),
                e = Math.min(e, n)
            }
            ,
            o.prototype.css = function(t, n, o) {
                var r = this.propertyCache[n];
                if (!r)
                    for (var s = 0, a = this.vendors.length; a > s; s++)
                        if (r = null !== this.vendors[s] ? e.camelCase(this.vendors[s][1] + "-" + n) : n,
                        t.style[r] !== i) {
                            this.propertyCache[n] = r;
                            break
                        }
                t.style[r] = o
            }
            ,
            o.prototype.accelerate = function(e) {
                return
            }
            ,
            o.prototype.setPosition = function(e, t, n) {
                t += "px",
                n += "px",
                this.transform3DSupport ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? this.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t,
                e.style.top = n)
            }
            ,
            o.prototype.onOrientationTimer = function(e) {
                this.orientationSupport && 0 === this.orientationStatus && (this.disable(),
                this.orientationSupport = !1,
                this.enable())
            }
            ,
            o.prototype.onCalibrationTimer = function(e) {
                this.calibrationFlag = !0
            }
            ,
            o.prototype.onWindowResize = function(e) {
                this.updateDimensions()
            }
            ,
            o.prototype.onAnimationFrame = function() {
                this.updateBounds();
                var e = this.ix - this.cx
                  , t = this.iy - this.cy;
                (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
                this.portrait ? (this.mx = this.calibrateX ? t : this.iy,
                this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix,
                this.my = this.calibrateY ? t : this.iy),
                this.mx *= this.ew * (this.scalarX / 100),
                this.my *= this.eh * (this.scalarY / 100),
                isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
                isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
                this.vx += (this.mx - this.vx) * this.frictionX,
                this.vy += (this.my - this.vy) * this.frictionY;
                for (var n = 0, i = this.$layers.length; i > n; n++) {
                    var o = this.depths[n]
                      , r = this.$layers[n]
                      , s = this.vx * o * (this.invertX ? -1 : 1)
                      , a = this.vy * o * (this.invertY ? -1 : 1);
                    this.setPosition(r, s, a)
                }
                this.raf = requestAnimationFrame(this.onAnimationFrame)
            }
            ,
            o.prototype.onDeviceOrientation = function(e) {
                if (!this.desktop && null !== e.beta && null !== e.gamma) {
                    this.orientationStatus = 1;
                    var n = (e.beta || 0) / s
                      , i = (e.gamma || 0) / s
                      , o = t.innerHeight > t.innerWidth;
                    this.portrait !== o && (this.portrait = o,
                    this.calibrationFlag = !0),
                    this.calibrationFlag && (this.calibrationFlag = !1,
                    this.cx = n,
                    this.cy = i),
                    this.ix = n,
                    this.iy = i
                }
            }
            ,
            o.prototype.onMouseMove = function(e) {
                var t = e.clientX
                  , n = e.clientY;
                !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex),
                t = Math.min(t, this.ex + this.ew),
                n = Math.max(n, this.ey),
                n = Math.min(n, this.ey + this.eh)),
                this.ix = (t - this.ex - this.ecx) / this.erx,
                this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx,
                this.iy = (n - this.wcy) / this.wry)
            }
            ;
            var l = {
                enable: o.prototype.enable,
                disable: o.prototype.disable,
                updateLayers: o.prototype.updateLayers,
                calibrate: o.prototype.calibrate,
                friction: o.prototype.friction,
                invert: o.prototype.invert,
                scalar: o.prototype.scalar,
                limit: o.prototype.limit,
                origin: o.prototype.origin
            };
            e.fn[r] = function(t) {
                var n = arguments;
                return this.each(function() {
                    var i = e(this)
                      , s = i.data(r);
                    s || (s = new o(this,t),
                    i.data(r, s)),
                    l[t] && s[t].apply(s, Array.prototype.slice.call(n, 1))
                })
            }
        }(window.jQuery || window.Zepto, window, document)
    }
    , {}],
    10: [function(e, t, n) {
        /*!
         * Retina.js v1.3.0
         *
         * Copyright 2014 Imulus, LLC
         * Released under the MIT license
         *
         * Retina.js is an open source script that makes it easy to serve
         * high-resolution images to devices with retina displays.
         */
        !function() {
            function e() {}
            function t(e) {
                return r.retinaImageSuffix + e
            }
            function n(e, n) {
                if (this.path = e || "",
                "undefined" != typeof n && null !== n)
                    this.at_2x_path = n,
                    this.perform_check = !1;
                else {
                    if (void 0 !== document.createElement) {
                        var i = document.createElement("a");
                        i.href = this.path,
                        i.pathname = i.pathname.replace(s, t),
                        this.at_2x_path = i.href
                    } else {
                        var o = this.path.split("?");
                        o[0] = o[0].replace(s, t),
                        this.at_2x_path = o.join("?")
                    }
                    this.perform_check = !0
                }
            }
            function i(e) {
                this.el = e,
                this.path = new n(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));
                var t = this;
                this.path.check_2x_variant(function(e) {
                    e && t.swap()
                })
            }
            var o = window
              , r = {
                retinaImageSuffix: "@2x",
                check_mime_type: !0,
                force_original_dimensions: !0
            };
            o.Retina = e,
            e.configure = function(e) {
                null === e && (e = {});
                for (var t in e)
                    e.hasOwnProperty(t) && (r[t] = e[t])
            }
            ,
            e.init = function(e) {
                null === e && (e = o);
                var t = e.onload || function() {}
                ;
                e.onload = function() {
                    var e, n, o = document.getElementsByTagName("img"), r = [];
                    for (e = 0; e < o.length; e += 1)
                        n = o[e],
                        n.getAttributeNode("data-no-retina") || r.push(new i(n));
                    t()
                }
            }
            ,
            e.isRetina = function() {
                var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
                return o.devicePixelRatio > 1 ? !0 : o.matchMedia && o.matchMedia(e).matches ? !0 : !1
            }
            ;
            var s = /\.\w+$/;
            o.RetinaImagePath = n,
            n.confirmed_paths = [],
            n.prototype.is_external = function() {
                return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
            }
            ,
            n.prototype.check_2x_variant = function(e) {
                var t, i = this;
                return this.is_external() ? e(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? e(!0) : (t = new XMLHttpRequest,
                t.open("HEAD", this.at_2x_path),
                t.onreadystatechange = function() {
                    if (4 !== t.readyState)
                        return e(!1);
                    if (t.status >= 200 && t.status <= 399) {
                        if (r.check_mime_type) {
                            var o = t.getResponseHeader("Content-Type");
                            if (null === o || !o.match(/^image/i))
                                return e(!1)
                        }
                        return n.confirmed_paths.push(i.at_2x_path),
                        e(!0)
                    }
                    return e(!1)
                }
                ,
                t.send(),
                void 0) : e(!0)
            }
            ,
            o.RetinaImage = i,
            i.prototype.swap = function(e) {
                function t() {
                    n.el.complete ? (r.force_original_dimensions,
                    n.el.setAttribute("src", e)) : setTimeout(t, 5)
                }
                "undefined" == typeof e && (e = this.path.at_2x_path);
                var n = this;
                t()
            }
            ,
            e.isRetina() && e.init(o)
        }()
    }
    , {}],
    11: [function(e, t, n) {
        var i = function(e, t) {
            "use strict";
            function n(e, t) {
                return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
            }
            function i(e) {
                return "[object Array]" === Object.prototype.toString.apply(e) ? !0 : !1
            }
            function o() {
                var e = j - I;
                return t.freeMode && (e = j - I),
                t.slidesPerView > A.slides.length && !t.centeredSlides && (e = 0),
                0 > e && (e = 0),
                e
            }
            function r() {
                function e(e) {
                    var n, i, o = function() {
                        "undefined" != typeof A && null !== A && (void 0 !== A.imagesLoaded && A.imagesLoaded++,
                        A.imagesLoaded === A.imagesToLoad.length && (A.reInit(),
                        t.onImagesReady && A.fireCallback(t.onImagesReady, A)))
                    }
                    ;
                    e.complete ? o() : (i = e.currentSrc || e.getAttribute("src"),
                    i ? (n = new Image,
                    n.onload = o,
                    n.onerror = o,
                    n.src = i) : o())
                }
                var i = A.h.addEventListener
                  , o = "wrapper" === t.eventTarget ? A.wrapper : A.container;
                if (A.browser.ie10 || A.browser.ie11 ? (i(o, A.touchEvents.touchStart, g),
                i(document, A.touchEvents.touchMove, m),
                i(document, A.touchEvents.touchEnd, v)) : (A.support.touch && (i(o, "touchstart", g),
                i(o, "touchmove", m),
                i(o, "touchend", v)),
                t.simulateTouch && (i(o, "mousedown", g),
                i(document, "mousemove", m),
                i(document, "mouseup", v))),
                t.autoResize && i(window, "resize", A.resizeFix),
                s(),
                A._wheelEvent = !1,
                t.mousewheelControl) {
                    if (void 0 !== document.onmousewheel && (A._wheelEvent = "mousewheel"),
                    !A._wheelEvent)
                        try {
                            new WheelEvent("wheel"),
                            A._wheelEvent = "wheel"
                        } catch (r) {}
                    A._wheelEvent || (A._wheelEvent = "DOMMouseScroll"),
                    A._wheelEvent && i(A.container, A._wheelEvent, c)
                }
                if (t.keyboardControl && i(document, "keydown", l),
                t.updateOnImagesReady) {
                    A.imagesToLoad = n("img", A.container);
                    for (var a = 0; a < A.imagesToLoad.length; a++)
                        e(A.imagesToLoad[a])
                }
            }
            function s() {
                var e, i = A.h.addEventListener;
                if (t.preventLinks) {
                    var o = n("a", A.container);
                    for (e = 0; e < o.length; e++)
                        i(o[e], "click", f)
                }
                if (t.releaseFormElements) {
                    var r = n("input, textarea, select", A.container);
                    for (e = 0; e < r.length; e++)
                        i(r[e], A.touchEvents.touchStart, h, !0),
                        A.support.touch && t.simulateTouch && i(r[e], "mousedown", h, !0)
                }
                if (t.onSlideClick)
                    for (e = 0; e < A.slides.length; e++)
                        i(A.slides[e], "click", u);
                if (t.onSlideTouch)
                    for (e = 0; e < A.slides.length; e++)
                        i(A.slides[e], A.touchEvents.touchStart, d)
            }
            function a() {
                var e, i = A.h.removeEventListener;
                if (t.onSlideClick)
                    for (e = 0; e < A.slides.length; e++)
                        i(A.slides[e], "click", u);
                if (t.onSlideTouch)
                    for (e = 0; e < A.slides.length; e++)
                        i(A.slides[e], A.touchEvents.touchStart, d);
                if (t.releaseFormElements) {
                    var o = n("input, textarea, select", A.container);
                    for (e = 0; e < o.length; e++)
                        i(o[e], A.touchEvents.touchStart, h, !0),
                        A.support.touch && t.simulateTouch && i(o[e], "mousedown", h, !0)
                }
                if (t.preventLinks) {
                    var r = n("a", A.container);
                    for (e = 0; e < r.length; e++)
                        i(r[e], "click", f)
                }
            }
            function l(e) {
                var t = e.keyCode || e.charCode;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        for (var n = !1, i = A.h.getOffset(A.container), o = A.h.windowScroll().left, r = A.h.windowScroll().top, s = A.h.windowWidth(), a = A.h.windowHeight(), l = [[i.left, i.top], [i.left + A.width, i.top], [i.left, i.top + A.height], [i.left + A.width, i.top + A.height]], c = 0; c < l.length; c++) {
                            var u = l[c];
                            u[0] >= o && u[0] <= o + s && u[1] >= r && u[1] <= r + a && (n = !0)
                        }
                        if (!n)
                            return
                    }
                    R ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    39 === t && A.swipeNext(),
                    37 === t && A.swipePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    40 === t && A.swipeNext(),
                    38 === t && A.swipePrev())
                }
            }
            function c(e) {
                var n = A._wheelEvent
                  , i = 0;
                if (e.detail)
                    i = -e.detail;
                else if ("mousewheel" === n)
                    if (t.mousewheelControlForceToAxis)
                        if (R) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
                                return;
                            i = e.wheelDeltaX
                        } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
                                return;
                            i = e.wheelDeltaY
                        }
                    else
                        i = e.wheelDelta;
                else if ("DOMMouseScroll" === n)
                    i = -e.detail;
                else if ("wheel" === n)
                    if (t.mousewheelControlForceToAxis)
                        if (R) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))
                                return;
                            i = -e.deltaX
                        } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))
                                return;
                            i = -e.deltaY
                        }
                    else
                        i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                if (t.freeMode) {
                    var r = A.getWrapperTranslate() + i;
                    if (r > 0 && (r = 0),
                    r < -o() && (r = -o()),
                    A.setWrapperTransition(0),
                    A.setWrapperTranslate(r),
                    A.updateActiveSlide(r),
                    0 === r || r === -o())
                        return
                } else
                    (new Date).getTime() - $ > 60 && (0 > i ? A.swipeNext() : A.swipePrev()),
                    $ = (new Date).getTime();
                return t.autoplay && A.stopAutoplay(!0),
                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
            function u(e) {
                A.allowSlideClick && (p(e),
                A.fireCallback(t.onSlideClick, A, e))
            }
            function d(e) {
                p(e),
                A.fireCallback(t.onSlideTouch, A, e)
            }
            function p(e) {
                if (e.currentTarget)
                    A.clickedSlide = e.currentTarget;
                else {
                    var n = e.srcElement;
                    do {
                        if (n.className.indexOf(t.slideClass) > -1)
                            break;
                        n = n.parentNode
                    } while (n);A.clickedSlide = n
                }
                A.clickedSlideIndex = A.slides.indexOf(A.clickedSlide),
                A.clickedSlideLoopIndex = A.clickedSlideIndex - (A.loopedSlides || 0)
            }
            function f(e) {
                return A.allowLinks ? void 0 : (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                t.preventLinksPropagation && "stopPropagation"in e && e.stopPropagation(),
                !1)
            }
            function h(e) {
                return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1,
                !1
            }
            function g(e) {
                if (t.preventLinks && (A.allowLinks = !0),
                A.isTouched || t.onlyExternal)
                    return !1;
                var n = e.target || e.srcElement;
                document.activeElement && document.activeElement !== document.body && document.activeElement !== n && document.activeElement.blur();
                var i = "input select textarea".split(" ");
                if (t.noSwiping && n && w(n))
                    return !1;
                if (J = !1,
                A.isTouched = !0,
                Z = "touchstart" === e.type,
                !Z && "which"in e && 3 === e.which)
                    return A.isTouched = !1,
                    !1;
                if (!Z || 1 === e.targetTouches.length) {
                    A.callPlugins("onTouchStartBegin"),
                    !Z && !A.isAndroid && i.indexOf(n.tagName.toLowerCase()) < 0 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                    var o = Z ? e.targetTouches[0].pageX : e.pageX || e.clientX
                      , r = Z ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                    A.touches.startX = A.touches.currentX = o,
                    A.touches.startY = A.touches.currentY = r,
                    A.touches.start = A.touches.current = R ? o : r,
                    A.setWrapperTransition(0),
                    A.positions.start = A.positions.current = A.getWrapperTranslate(),
                    A.setWrapperTranslate(A.positions.start),
                    A.times.start = (new Date).getTime(),
                    H = void 0,
                    t.moveStartThreshold > 0 && (U = !1),
                    t.onTouchStart && A.fireCallback(t.onTouchStart, A, e),
                    A.callPlugins("onTouchStartEnd")
                }
            }
            function m(e) {
                if (A.isTouched && !t.onlyExternal && (!Z || "mousemove" !== e.type)) {
                    var n = Z ? e.targetTouches[0].pageX : e.pageX || e.clientX
                      , i = Z ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                    if ("undefined" == typeof H && R && (H = !!(H || Math.abs(i - A.touches.startY) > Math.abs(n - A.touches.startX))),
                    "undefined" != typeof H || R || (H = !!(H || Math.abs(i - A.touches.startY) < Math.abs(n - A.touches.startX))),
                    H)
                        return void (A.isTouched = !1);
                    if (R) {
                        if (!t.swipeToNext && n < A.touches.startX || !t.swipeToPrev && n > A.touches.startX)
                            return
                    } else if (!t.swipeToNext && i < A.touches.startY || !t.swipeToPrev && i > A.touches.startY)
                        return;
                    if (e.assignedToSwiper)
                        return void (A.isTouched = !1);
                    if (e.assignedToSwiper = !0,
                    t.preventLinks && (A.allowLinks = !1),
                    t.onSlideClick && (A.allowSlideClick = !1),
                    t.autoplay && A.stopAutoplay(!0),
                    !Z || 1 === e.touches.length) {
                        if (A.isMoved || (A.callPlugins("onTouchMoveStart"),
                        t.loop && (A.fixLoop(),
                        A.positions.start = A.getWrapperTranslate()),
                        t.onTouchMoveStart && A.fireCallback(t.onTouchMoveStart, A)),
                        A.isMoved = !0,
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        A.touches.current = R ? n : i,
                        A.positions.current = (A.touches.current - A.touches.start) * t.touchRatio + A.positions.start,
                        A.positions.current > 0 && t.onResistanceBefore && A.fireCallback(t.onResistanceBefore, A, A.positions.current),
                        A.positions.current < -o() && t.onResistanceAfter && A.fireCallback(t.onResistanceAfter, A, Math.abs(A.positions.current + o())),
                        t.resistance && "100%" !== t.resistance) {
                            var r;
                            if (A.positions.current > 0 && (r = 1 - A.positions.current / I / 2,
                            .5 > r ? A.positions.current = I / 2 : A.positions.current = A.positions.current * r),
                            A.positions.current < -o()) {
                                var s = (A.touches.current - A.touches.start) * t.touchRatio + (o() + A.positions.start);
                                r = (I + s) / I;
                                var a = A.positions.current - s * (1 - r) / 2
                                  , l = -o() - I / 2;
                                l > a || 0 >= r ? A.positions.current = l : A.positions.current = a
                            }
                        }
                        if (t.resistance && "100%" === t.resistance && (A.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (A.positions.current = 0),
                        A.positions.current < -o() && (!t.freeMode || t.freeModeFluid) && (A.positions.current = -o())),
                        !t.followFinger)
                            return;
                        if (t.moveStartThreshold)
                            if (Math.abs(A.touches.current - A.touches.start) > t.moveStartThreshold || U) {
                                if (!U)
                                    return U = !0,
                                    void (A.touches.start = A.touches.current);
                                A.setWrapperTranslate(A.positions.current)
                            } else
                                A.positions.current = A.positions.start;
                        else
                            A.setWrapperTranslate(A.positions.current);
                        return (t.freeMode || t.watchActiveIndex) && A.updateActiveSlide(A.positions.current),
                        t.grabCursor && (A.container.style.cursor = "move",
                        A.container.style.cursor = "grabbing",
                        A.container.style.cursor = "-moz-grabbin",
                        A.container.style.cursor = "-webkit-grabbing"),
                        Q || (Q = A.touches.current),
                        K || (K = (new Date).getTime()),
                        A.velocity = (A.touches.current - Q) / ((new Date).getTime() - K) / 2,
                        Math.abs(A.touches.current - Q) < 2 && (A.velocity = 0),
                        Q = A.touches.current,
                        K = (new Date).getTime(),
                        A.callPlugins("onTouchMoveEnd"),
                        t.onTouchMove && A.fireCallback(t.onTouchMove, A, e),
                        !1
                    }
                }
            }
            function v(e) {
                if (H && A.swipeReset(),
                !t.onlyExternal && A.isTouched) {
                    A.isTouched = !1,
                    t.grabCursor && (A.container.style.cursor = "move",
                    A.container.style.cursor = "grab",
                    A.container.style.cursor = "-moz-grab",
                    A.container.style.cursor = "-webkit-grab"),
                    A.positions.current || 0 === A.positions.current || (A.positions.current = A.positions.start),
                    t.followFinger && A.setWrapperTranslate(A.positions.current),
                    A.times.end = (new Date).getTime(),
                    A.touches.diff = A.touches.current - A.touches.start,
                    A.touches.abs = Math.abs(A.touches.diff),
                    A.positions.diff = A.positions.current - A.positions.start,
                    A.positions.abs = Math.abs(A.positions.diff);
                    var n = A.positions.diff
                      , i = A.positions.abs
                      , r = A.times.end - A.times.start;
                    5 > i && 300 > r && A.allowLinks === !1 && (t.freeMode || 0 === i || A.swipeReset(),
                    t.preventLinks && (A.allowLinks = !0),
                    t.onSlideClick && (A.allowSlideClick = !0)),
                    setTimeout(function() {
                        "undefined" != typeof A && null !== A && (t.preventLinks && (A.allowLinks = !0),
                        t.onSlideClick && (A.allowSlideClick = !0))
                    }, 100);
                    var s = o();
                    if (!A.isMoved && t.freeMode)
                        return A.isMoved = !1,
                        t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e),
                        void A.callPlugins("onTouchEnd");
                    if (!A.isMoved || A.positions.current > 0 || A.positions.current < -s)
                        return A.swipeReset(),
                        t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e),
                        void A.callPlugins("onTouchEnd");
                    if (A.isMoved = !1,
                    t.freeMode) {
                        if (t.freeModeFluid) {
                            var a, l = 1e3 * t.momentumRatio, c = A.velocity * l, u = A.positions.current + c, d = !1, p = 20 * Math.abs(A.velocity) * t.momentumBounceRatio;
                            -s > u && (t.momentumBounce && A.support.transitions ? (-p > u + s && (u = -s - p),
                            a = -s,
                            d = !0,
                            J = !0) : u = -s),
                            u > 0 && (t.momentumBounce && A.support.transitions ? (u > p && (u = p),
                            a = 0,
                            d = !0,
                            J = !0) : u = 0),
                            0 !== A.velocity && (l = Math.abs((u - A.positions.current) / A.velocity)),
                            A.setWrapperTranslate(u),
                            A.setWrapperTransition(l),
                            t.momentumBounce && d && A.wrapperTransitionEnd(function() {
                                J && (t.onMomentumBounce && A.fireCallback(t.onMomentumBounce, A),
                                A.callPlugins("onMomentumBounce"),
                                A.setWrapperTranslate(a),
                                A.setWrapperTransition(300))
                            }),
                            A.updateActiveSlide(u)
                        }
                        return (!t.freeModeFluid || r >= 300) && A.updateActiveSlide(A.positions.current),
                        t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e),
                        void A.callPlugins("onTouchEnd")
                    }
                    N = 0 > n ? "toNext" : "toPrev",
                    "toNext" === N && 300 >= r && (30 > i || !t.shortSwipes ? A.swipeReset() : A.swipeNext(!0, !0)),
                    "toPrev" === N && 300 >= r && (30 > i || !t.shortSwipes ? A.swipeReset() : A.swipePrev(!0, !0));
                    var f = 0;
                    if ("auto" === t.slidesPerView) {
                        for (var h, g = Math.abs(A.getWrapperTranslate()), m = 0, v = 0; v < A.slides.length; v++)
                            if (h = R ? A.slides[v].getWidth(!0, t.roundLengths) : A.slides[v].getHeight(!0, t.roundLengths),
                            m += h,
                            m > g) {
                                f = h;
                                break
                            }
                        f > I && (f = I)
                    } else
                        f = D * t.slidesPerView;
                    "toNext" === N && r > 300 && (i >= f * t.longSwipesRatio ? A.swipeNext(!0, !0) : A.swipeReset()),
                    "toPrev" === N && r > 300 && (i >= f * t.longSwipesRatio ? A.swipePrev(!0, !0) : A.swipeReset()),
                    t.onTouchEnd && A.fireCallback(t.onTouchEnd, A, e),
                    A.callPlugins("onTouchEnd")
                }
            }
            function y(e, t) {
                return e && e.getAttribute("class") && e.getAttribute("class").indexOf(t) > -1
            }
            function w(e) {
                var n = !1;
                do
                    y(e, t.noSwipingClass) && (n = !0),
                    e = e.parentElement;
                while (!n && e.parentElement && !y(e, t.wrapperClass));return !n && y(e, t.wrapperClass) && y(e, t.noSwipingClass) && (n = !0),
                n
            }
            function x(e, t) {
                var n, i = document.createElement("div");
                return i.innerHTML = t,
                n = i.firstChild,
                n.className += " " + e,
                n.outerHTML
            }
            function b(e, n, i) {
                function o() {
                    var r = +new Date
                      , d = r - s;
                    a += l * d / (1e3 / 60),
                    u = "toNext" === c ? a > e : e > a,
                    u ? (A.setWrapperTranslate(Math.ceil(a)),
                    A._DOMAnimating = !0,
                    window.setTimeout(function() {
                        o()
                    }, 1e3 / 60)) : (t.onSlideChangeEnd && ("to" === n ? i.runCallbacks === !0 && A.fireCallback(t.onSlideChangeEnd, A, c) : A.fireCallback(t.onSlideChangeEnd, A, c)),
                    A.setWrapperTranslate(e),
                    A._DOMAnimating = !1)
                }
                var r = "to" === n && i.speed >= 0 ? i.speed : t.speed
                  , s = +new Date;
                if (A.support.transitions || !t.DOMAnimation)
                    A.setWrapperTranslate(e),
                    A.setWrapperTransition(r);
                else {
                    var a = A.getWrapperTranslate()
                      , l = Math.ceil((e - a) / r * (1e3 / 60))
                      , c = a > e ? "toNext" : "toPrev"
                      , u = "toNext" === c ? a > e : e > a;
                    if (A._DOMAnimating)
                        return;
                    o()
                }
                A.updateActiveSlide(e),
                t.onSlideNext && "next" === n && i.runCallbacks === !0 && A.fireCallback(t.onSlideNext, A, e),
                t.onSlidePrev && "prev" === n && i.runCallbacks === !0 && A.fireCallback(t.onSlidePrev, A, e),
                t.onSlideReset && "reset" === n && i.runCallbacks === !0 && A.fireCallback(t.onSlideReset, A, e),
                "next" !== n && "prev" !== n && "to" !== n || i.runCallbacks !== !0 || S(n)
            }
            function S(e) {
                if (A.callPlugins("onSlideChangeStart"),
                t.onSlideChangeStart)
                    if (t.queueStartCallbacks && A.support.transitions) {
                        if (A._queueStartCallbacks)
                            return;
                        A._queueStartCallbacks = !0,
                        A.fireCallback(t.onSlideChangeStart, A, e),
                        A.wrapperTransitionEnd(function() {
                            A._queueStartCallbacks = !1
                        })
                    } else
                        A.fireCallback(t.onSlideChangeStart, A, e);
                if (t.onSlideChangeEnd)
                    if (A.support.transitions)
                        if (t.queueEndCallbacks) {
                            if (A._queueEndCallbacks)
                                return;
                            A._queueEndCallbacks = !0,
                            A.wrapperTransitionEnd(function(n) {
                                A.fireCallback(t.onSlideChangeEnd, n, e)
                            })
                        } else
                            A.wrapperTransitionEnd(function(n) {
                                A.fireCallback(t.onSlideChangeEnd, n, e)
                            });
                    else
                        t.DOMAnimation || setTimeout(function() {
                            A.fireCallback(t.onSlideChangeEnd, A, e)
                        }, 10)
            }
            function T() {
                var e = A.paginationButtons;
                if (e)
                    for (var t = 0; t < e.length; t++)
                        A.h.removeEventListener(e[t], "click", k)
            }
            function C() {
                var e = A.paginationButtons;
                if (e)
                    for (var t = 0; t < e.length; t++)
                        A.h.addEventListener(e[t], "click", k)
            }
            function k(e) {
                for (var n, i = e.target || e.srcElement, o = A.paginationButtons, r = 0; r < o.length; r++)
                    i === o[r] && (n = r);
                t.autoplay && A.stopAutoplay(!0),
                A.swipeTo(n)
            }
            function E() {
                ee = setTimeout(function() {
                    t.loop ? (A.fixLoop(),
                    A.swipeNext(!0, !0)) : A.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearTimeout(ee),
                    ee = void 0) : A.swipeTo(0)),
                    A.wrapperTransitionEnd(function() {
                        "undefined" != typeof ee && E()
                    })
                }, t.autoplay)
            }
            function M() {
                A.calcSlides(),
                t.loader.slides.length > 0 && 0 === A.slides.length && A.loadSlides(),
                t.loop && A.createLoop(),
                A.init(),
                r(),
                t.pagination && A.createPagination(!0),
                t.loop || t.initialSlide > 0 ? A.swipeTo(t.initialSlide, 0, !1) : A.updateActiveSlide(0),
                t.autoplay && A.startAutoplay(),
                A.centerIndex = A.activeIndex,
                t.onSwiperCreated && A.fireCallback(t.onSwiperCreated, A),
                A.callPlugins("onSwiperCreated")
            }
            if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
                var L = HTMLElement.prototype;
                L.__defineGetter__ && L.__defineGetter__("outerHTML", function() {
                    return (new XMLSerializer).serializeToString(this)
                })
            }
            if (window.getComputedStyle || (window.getComputedStyle = function(e, t) {
                return this.el = e,
                this.getPropertyValue = function(t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" === t && (t = "styleFloat"),
                    n.test(t) && (t = t.replace(n, function() {
                        return arguments[2].toUpperCase()
                    })),
                    e.currentStyle[t] ? e.currentStyle[t] : null
                }
                ,
                this
            }
            ),
            Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                for (var n = t || 0, i = this.length; i > n; n++)
                    if (this[n] === e)
                        return n;
                return -1
            }
            ),
            (document.querySelectorAll || window.jQuery) && "undefined" != typeof e && (e.nodeType || 0 !== n(e).length)) {
                var A = this;
                A.touches = {
                    start: 0,
                    startX: 0,
                    startY: 0,
                    current: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                    abs: 0
                },
                A.positions = {
                    start: 0,
                    abs: 0,
                    diff: 0,
                    current: 0
                },
                A.times = {
                    start: 0,
                    end: 0
                },
                A.id = (new Date).getTime(),
                A.container = e.nodeType ? e : n(e)[0],
                A.isTouched = !1,
                A.isMoved = !1,
                A.activeIndex = 0,
                A.centerIndex = 0,
                A.activeLoaderIndex = 0,
                A.activeLoopIndex = 0,
                A.previousIndex = null ,
                A.velocity = 0,
                A.snapGrid = [],
                A.slidesGrid = [],
                A.imagesToLoad = [],
                A.imagesLoaded = 0,
                A.wrapperLeft = 0,
                A.wrapperRight = 0,
                A.wrapperTop = 0,
                A.wrapperBottom = 0,
                A.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
                var P, D, j, N, H, I, F = {
                    eventTarget: "wrapper",
                    mode: "horizontal",
                    touchRatio: 1,
                    speed: 300,
                    freeMode: !1,
                    freeModeFluid: !1,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerViewFit: !0,
                    simulateTouch: !0,
                    followFinger: !0,
                    shortSwipes: !0,
                    longSwipesRatio: .5,
                    moveStartThreshold: !1,
                    onlyExternal: !1,
                    createPagination: !0,
                    pagination: !1,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationAsRange: !0,
                    resistance: !0,
                    scrollContainer: !1,
                    preventLinks: !0,
                    preventLinksPropagation: !1,
                    noSwiping: !1,
                    noSwipingClass: "swiper-no-swiping",
                    initialSlide: 0,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelControlForceToAxis: !1,
                    useCSS3Transforms: !0,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    roundLengths: !1,
                    calculateHeight: !1,
                    cssWidthAndHeight: !1,
                    updateOnImagesReady: !0,
                    releaseFormElements: !0,
                    watchActiveIndex: !1,
                    visibilityFullFit: !1,
                    offsetPxBefore: 0,
                    offsetPxAfter: 0,
                    offsetSlidesBefore: 0,
                    offsetSlidesAfter: 0,
                    centeredSlides: !1,
                    queueStartCallbacks: !1,
                    queueEndCallbacks: !1,
                    autoResize: !0,
                    resizeReInit: !1,
                    DOMAnimation: !0,
                    loader: {
                        slides: [],
                        slidesHTMLType: "inner",
                        surroundGroups: 1,
                        logic: "reload",
                        loadAllSlides: !1
                    },
                    swipeToPrev: !0,
                    swipeToNext: !0,
                    slideElement: "div",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    wrapperClass: "swiper-wrapper",
                    paginationElementClass: "swiper-pagination-switch",
                    paginationActiveClass: "swiper-active-switch",
                    paginationVisibleClass: "swiper-visible-switch"
                };
                t = t || {};
                for (var O in F)
                    if (O in t && "object" == typeof t[O])
                        for (var _ in F[O])
                            _ in t[O] || (t[O][_] = F[O][_]);
                    else
                        O in t || (t[O] = F[O]);
                A.params = t,
                t.scrollContainer && (t.freeMode = !0,
                t.freeModeFluid = !0),
                t.loop && (t.resistance = "100%");
                var R = "horizontal" === t.mode
                  , W = ["mousedown", "mousemove", "mouseup"];
                A.browser.ie10 && (W = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                A.browser.ie11 && (W = ["pointerdown", "pointermove", "pointerup"]),
                A.touchEvents = {
                    touchStart: A.support.touch || !t.simulateTouch ? "touchstart" : W[0],
                    touchMove: A.support.touch || !t.simulateTouch ? "touchmove" : W[1],
                    touchEnd: A.support.touch || !t.simulateTouch ? "touchend" : W[2]
                };
                for (var B = A.container.childNodes.length - 1; B >= 0; B--)
                    if (A.container.childNodes[B].className)
                        for (var q = A.container.childNodes[B].className.split(/\s+/), z = 0; z < q.length; z++)
                            q[z] === t.wrapperClass && (P = A.container.childNodes[B]);
                A.wrapper = P,
                A._extendSwiperSlide = function(e) {
                    return e.append = function() {
                        return t.loop ? e.insertAfter(A.slides.length - A.loopedSlides) : (A.wrapper.appendChild(e),
                        A.reInit()),
                        e
                    }
                    ,
                    e.prepend = function() {
                        return t.loop ? (A.wrapper.insertBefore(e, A.slides[A.loopedSlides]),
                        A.removeLoopedSlides(),
                        A.calcSlides(),
                        A.createLoop()) : A.wrapper.insertBefore(e, A.wrapper.firstChild),
                        A.reInit(),
                        e
                    }
                    ,
                    e.insertAfter = function(n) {
                        if ("undefined" == typeof n)
                            return !1;
                        var i;
                        return t.loop ? (i = A.slides[n + 1 + A.loopedSlides],
                        i ? A.wrapper.insertBefore(e, i) : A.wrapper.appendChild(e),
                        A.removeLoopedSlides(),
                        A.calcSlides(),
                        A.createLoop()) : (i = A.slides[n + 1],
                        A.wrapper.insertBefore(e, i)),
                        A.reInit(),
                        e
                    }
                    ,
                    e.clone = function() {
                        return A._extendSwiperSlide(e.cloneNode(!0))
                    }
                    ,
                    e.remove = function() {
                        A.wrapper.removeChild(e),
                        A.reInit()
                    }
                    ,
                    e.html = function(t) {
                        return "undefined" == typeof t ? e.innerHTML : (e.innerHTML = t,
                        e)
                    }
                    ,
                    e.index = function() {
                        for (var t, n = A.slides.length - 1; n >= 0; n--)
                            e === A.slides[n] && (t = n);
                        return t
                    }
                    ,
                    e.isActive = function() {
                        return e.index() === A.activeIndex ? !0 : !1
                    }
                    ,
                    e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}),
                    e.getData = function(t) {
                        return e.swiperSlideDataStorage[t]
                    }
                    ,
                    e.setData = function(t, n) {
                        return e.swiperSlideDataStorage[t] = n,
                        e
                    }
                    ,
                    e.data = function(t, n) {
                        return "undefined" == typeof n ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, n),
                        e)
                    }
                    ,
                    e.getWidth = function(t, n) {
                        return A.h.getWidth(e, t, n)
                    }
                    ,
                    e.getHeight = function(t, n) {
                        return A.h.getHeight(e, t, n)
                    }
                    ,
                    e.getOffset = function() {
                        return A.h.getOffset(e)
                    }
                    ,
                    e
                }
                ,
                A.calcSlides = function(e) {
                    var n = A.slides ? A.slides.length : !1;
                    A.slides = [],
                    A.displaySlides = [];
                    for (var i = 0; i < A.wrapper.childNodes.length; i++)
                        if (A.wrapper.childNodes[i].className)
                            for (var o = A.wrapper.childNodes[i].className, r = o.split(/\s+/), l = 0; l < r.length; l++)
                                r[l] === t.slideClass && A.slides.push(A.wrapper.childNodes[i]);
                    for (i = A.slides.length - 1; i >= 0; i--)
                        A._extendSwiperSlide(A.slides[i]);
                    n !== !1 && (n !== A.slides.length || e) && (a(),
                    s(),
                    A.updateActiveSlide(),
                    A.params.pagination && A.createPagination(),
                    A.callPlugins("numberOfSlidesChanged"))
                }
                ,
                A.createSlide = function(e, n, i) {
                    n = n || A.params.slideClass,
                    i = i || t.slideElement;
                    var o = document.createElement(i);
                    return o.innerHTML = e || "",
                    o.className = n,
                    A._extendSwiperSlide(o)
                }
                ,
                A.appendSlide = function(e, t, n) {
                    return e ? e.nodeType ? A._extendSwiperSlide(e).append() : A.createSlide(e, t, n).append() : void 0
                }
                ,
                A.prependSlide = function(e, t, n) {
                    return e ? e.nodeType ? A._extendSwiperSlide(e).prepend() : A.createSlide(e, t, n).prepend() : void 0
                }
                ,
                A.insertSlideAfter = function(e, t, n, i) {
                    return "undefined" == typeof e ? !1 : t.nodeType ? A._extendSwiperSlide(t).insertAfter(e) : A.createSlide(t, n, i).insertAfter(e)
                }
                ,
                A.removeSlide = function(e) {
                    if (A.slides[e]) {
                        if (t.loop) {
                            if (!A.slides[e + A.loopedSlides])
                                return !1;
                            A.slides[e + A.loopedSlides].remove(),
                            A.removeLoopedSlides(),
                            A.calcSlides(),
                            A.createLoop()
                        } else
                            A.slides[e].remove();
                        return !0
                    }
                    return !1
                }
                ,
                A.removeLastSlide = function() {
                    return A.slides.length > 0 ? (t.loop ? (A.slides[A.slides.length - 1 - A.loopedSlides].remove(),
                    A.removeLoopedSlides(),
                    A.calcSlides(),
                    A.createLoop()) : A.slides[A.slides.length - 1].remove(),
                    !0) : !1
                }
                ,
                A.removeAllSlides = function() {
                    for (var e = A.slides.length, t = A.slides.length - 1; t >= 0; t--)
                        A.slides[t].remove(),
                        t === e - 1 && A.setWrapperTranslate(0)
                }
                ,
                A.getSlide = function(e) {
                    return A.slides[e]
                }
                ,
                A.getLastSlide = function() {
                    return A.slides[A.slides.length - 1]
                }
                ,
                A.getFirstSlide = function() {
                    return A.slides[0]
                }
                ,
                A.activeSlide = function() {
                    return A.slides[A.activeIndex]
                }
                ,
                A.fireCallback = function() {
                    var e = arguments[0];
                    if ("[object Array]" === Object.prototype.toString.call(e))
                        for (var n = 0; n < e.length; n++)
                            "function" == typeof e[n] && e[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    else
                        "[object String]" === Object.prototype.toString.call(e) ? t["on" + e] && A.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                A.addCallback = function(e, t) {
                    var n, o = this;
                    return o.params["on" + e] ? i(this.params["on" + e]) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ? (n = this.params["on" + e],
                    this.params["on" + e] = [],
                    this.params["on" + e].push(n),
                    this.params["on" + e].push(t)) : void 0 : (this.params["on" + e] = [],
                    this.params["on" + e].push(t))
                }
                ,
                A.removeCallbacks = function(e) {
                    A.params["on" + e] && (A.params["on" + e] = null )
                }
                ;
                var X = [];
                for (var Y in A.plugins)
                    if (t[Y]) {
                        var V = A.plugins[Y](A, t[Y]);
                        V && X.push(V)
                    }
                A.callPlugins = function(e, t) {
                    t || (t = {});
                    for (var n = 0; n < X.length; n++)
                        e in X[n] && X[n][e](t)
                }
                ,
                !A.browser.ie10 && !A.browser.ie11 || t.onlyExternal || A.wrapper.classList.add("swiper-wp8-" + (R ? "horizontal" : "vertical")),
                t.freeMode && (A.container.className += " swiper-free-mode"),
                A.initialized = !1,
                A.init = function(e, n) {
                    var i = A.h.getWidth(A.container, !1, t.roundLengths)
                      , o = A.h.getHeight(A.container, !1, t.roundLengths);
                    if (i !== A.width || o !== A.height || e) {
                        A.width = i,
                        A.height = o;
                        var r, s, a, l, c, u, d;
                        I = R ? i : o;
                        var p = A.wrapper;
                        if (e && A.calcSlides(n),
                        "auto" === t.slidesPerView) {
                            var f = 0
                              , h = 0;
                            t.slidesOffset > 0 && (p.style.paddingLeft = "",
                            p.style.paddingRight = "",
                            p.style.paddingTop = "",
                            p.style.paddingBottom = ""),
                            p.style.width = "",
                            p.style.height = "",
                            t.offsetPxBefore > 0 && (R ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore),
                            t.offsetPxAfter > 0 && (R ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter),
                            t.centeredSlides && (R ? (A.wrapperLeft = (I - this.slides[0].getWidth(!0, t.roundLengths)) / 2,
                            A.wrapperRight = (I - A.slides[A.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) : (A.wrapperTop = (I - A.slides[0].getHeight(!0, t.roundLengths)) / 2,
                            A.wrapperBottom = (I - A.slides[A.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)),
                            R ? (A.wrapperLeft >= 0 && (p.style.paddingLeft = A.wrapperLeft + "px"),
                            A.wrapperRight >= 0 && (p.style.paddingRight = A.wrapperRight + "px")) : (A.wrapperTop >= 0 && (p.style.paddingTop = A.wrapperTop + "px"),
                            A.wrapperBottom >= 0 && (p.style.paddingBottom = A.wrapperBottom + "px")),
                            u = 0;
                            var g = 0;
                            for (A.snapGrid = [],
                            A.slidesGrid = [],
                            a = 0,
                            d = 0; d < A.slides.length; d++) {
                                r = A.slides[d].getWidth(!0, t.roundLengths),
                                s = A.slides[d].getHeight(!0, t.roundLengths),
                                t.calculateHeight && (a = Math.max(a, s));
                                var m = R ? r : s;
                                if (t.centeredSlides) {
                                    var v = d === A.slides.length - 1 ? 0 : A.slides[d + 1].getWidth(!0, t.roundLengths)
                                      , y = d === A.slides.length - 1 ? 0 : A.slides[d + 1].getHeight(!0, t.roundLengths)
                                      , w = R ? v : y;
                                    if (m > I) {
                                        if (t.slidesPerViewFit)
                                            A.snapGrid.push(u + A.wrapperLeft),
                                            A.snapGrid.push(u + m - I + A.wrapperLeft);
                                        else
                                            for (var x = 0; x <= Math.floor(m / (I + A.wrapperLeft)); x++)
                                                0 === x ? A.snapGrid.push(u + A.wrapperLeft) : A.snapGrid.push(u + A.wrapperLeft + I * x);
                                        A.slidesGrid.push(u + A.wrapperLeft)
                                    } else
                                        A.snapGrid.push(g),
                                        A.slidesGrid.push(g);
                                    g += m / 2 + w / 2
                                } else {
                                    if (m > I)
                                        if (t.slidesPerViewFit)
                                            A.snapGrid.push(u),
                                            A.snapGrid.push(u + m - I);
                                        else if (0 !== I)
                                            for (var b = 0; b <= Math.floor(m / I); b++)
                                                A.snapGrid.push(u + I * b);
                                        else
                                            A.snapGrid.push(u);
                                    else
                                        A.snapGrid.push(u);
                                    A.slidesGrid.push(u)
                                }
                                u += m,
                                f += r,
                                h += s
                            }
                            t.calculateHeight && (A.height = a),
                            R ? (j = f + A.wrapperRight + A.wrapperLeft,
                            t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (p.style.width = f + "px"),
                            t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (p.style.height = A.height + "px")) : (t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (p.style.width = A.width + "px"),
                            t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (p.style.height = h + "px"),
                            j = h + A.wrapperTop + A.wrapperBottom)
                        } else if (t.scrollContainer)
                            p.style.width = "",
                            p.style.height = "",
                            l = A.slides[0].getWidth(!0, t.roundLengths),
                            c = A.slides[0].getHeight(!0, t.roundLengths),
                            j = R ? l : c,
                            p.style.width = l + "px",
                            p.style.height = c + "px",
                            D = R ? l : c;
                        else {
                            if (t.calculateHeight) {
                                for (a = 0,
                                c = 0,
                                R || (A.container.style.height = ""),
                                p.style.height = "",
                                d = 0; d < A.slides.length; d++)
                                    A.slides[d].style.height = "",
                                    a = Math.max(A.slides[d].getHeight(!0), a),
                                    R || (c += A.slides[d].getHeight(!0));
                                s = a,
                                A.height = s,
                                R ? c = s : (I = s,
                                A.container.style.height = I + "px")
                            } else
                                s = R ? A.height : A.height / t.slidesPerView,
                                t.roundLengths && (s = Math.ceil(s)),
                                c = R ? A.height : A.slides.length * s;
                            for (r = R ? A.width / t.slidesPerView : A.width,
                            t.roundLengths && (r = Math.ceil(r)),
                            l = R ? A.slides.length * r : A.width,
                            D = R ? r : s,
                            t.offsetSlidesBefore > 0 && (R ? A.wrapperLeft = D * t.offsetSlidesBefore : A.wrapperTop = D * t.offsetSlidesBefore),
                            t.offsetSlidesAfter > 0 && (R ? A.wrapperRight = D * t.offsetSlidesAfter : A.wrapperBottom = D * t.offsetSlidesAfter),
                            t.offsetPxBefore > 0 && (R ? A.wrapperLeft = t.offsetPxBefore : A.wrapperTop = t.offsetPxBefore),
                            t.offsetPxAfter > 0 && (R ? A.wrapperRight = t.offsetPxAfter : A.wrapperBottom = t.offsetPxAfter),
                            t.centeredSlides && (R ? (A.wrapperLeft = (I - D) / 2,
                            A.wrapperRight = (I - D) / 2) : (A.wrapperTop = (I - D) / 2,
                            A.wrapperBottom = (I - D) / 2)),
                            R ? (A.wrapperLeft > 0 && (p.style.paddingLeft = A.wrapperLeft + "px"),
                            A.wrapperRight > 0 && (p.style.paddingRight = A.wrapperRight + "px")) : (A.wrapperTop > 0 && (p.style.paddingTop = A.wrapperTop + "px"),
                            A.wrapperBottom > 0 && (p.style.paddingBottom = A.wrapperBottom + "px")),
                            j = R ? l + A.wrapperRight + A.wrapperLeft : c + A.wrapperTop + A.wrapperBottom,
                            parseFloat(l) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (p.style.width = l + "px"),
                            parseFloat(c) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (p.style.height = c + "px"),
                            u = 0,
                            A.snapGrid = [],
                            A.slidesGrid = [],
                            d = 0; d < A.slides.length; d++)
                                A.snapGrid.push(u),
                                A.slidesGrid.push(u),
                                u += D,
                                parseFloat(r) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (A.slides[d].style.width = r + "px"),
                                parseFloat(s) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (A.slides[d].style.height = s + "px")
                        }
                        A.initialized ? (A.callPlugins("onInit"),
                        t.onInit && A.fireCallback(t.onInit, A)) : (A.callPlugins("onFirstInit"),
                        t.onFirstInit && A.fireCallback(t.onFirstInit, A)),
                        A.initialized = !0
                    }
                }
                ,
                A.reInit = function(e) {
                    A.init(!0, e)
                }
                ,
                A.resizeFix = function(e) {
                    A.callPlugins("beforeResizeFix"),
                    A.init(t.resizeReInit || e),
                    t.freeMode ? A.getWrapperTranslate() < -o() && (A.setWrapperTransition(0),
                    A.setWrapperTranslate(-o())) : (A.swipeTo(t.loop ? A.activeLoopIndex : A.activeIndex, 0, !1),
                    t.autoplay && (A.support.transitions && "undefined" != typeof ee ? "undefined" != typeof ee && (clearTimeout(ee),
                    ee = void 0,
                    A.startAutoplay()) : "undefined" != typeof te && (clearInterval(te),
                    te = void 0,
                    A.startAutoplay()))),
                    A.callPlugins("afterResizeFix")
                }
                ,
                A.destroy = function(e) {
                    var n = A.h.removeEventListener
                      , i = "wrapper" === t.eventTarget ? A.wrapper : A.container;
                    if (A.browser.ie10 || A.browser.ie11 ? (n(i, A.touchEvents.touchStart, g),
                    n(document, A.touchEvents.touchMove, m),
                    n(document, A.touchEvents.touchEnd, v)) : (A.support.touch && (n(i, "touchstart", g),
                    n(i, "touchmove", m),
                    n(i, "touchend", v)),
                    t.simulateTouch && (n(i, "mousedown", g),
                    n(document, "mousemove", m),
                    n(document, "mouseup", v))),
                    t.autoResize && n(window, "resize", A.resizeFix),
                    a(),
                    t.paginationClickable && T(),
                    t.mousewheelControl && A._wheelEvent && n(A.container, A._wheelEvent, c),
                    t.keyboardControl && n(document, "keydown", l),
                    t.autoplay && A.stopAutoplay(),
                    e) {
                        A.wrapper.removeAttribute("style");
                        for (var o = 0; o < A.slides.length; o++)
                            A.slides[o].removeAttribute("style")
                    }
                    A.callPlugins("onDestroy"),
                    window.jQuery && window.jQuery(A.container).data("swiper") && window.jQuery(A.container).removeData("swiper"),
                    window.Zepto && window.Zepto(A.container).data("swiper") && window.Zepto(A.container).removeData("swiper"),
                    A = null
                }
                ,
                A.disableKeyboardControl = function() {
                    t.keyboardControl = !1,
                    A.h.removeEventListener(document, "keydown", l)
                }
                ,
                A.enableKeyboardControl = function() {
                    t.keyboardControl = !0,
                    A.h.addEventListener(document, "keydown", l)
                }
                ;
                var $ = (new Date).getTime();
                if (A.disableMousewheelControl = function() {
                    return A._wheelEvent ? (t.mousewheelControl = !1,
                    A.h.removeEventListener(A.container, A._wheelEvent, c),
                    !0) : !1
                }
                ,
                A.enableMousewheelControl = function() {
                    return A._wheelEvent ? (t.mousewheelControl = !0,
                    A.h.addEventListener(A.container, A._wheelEvent, c),
                    !0) : !1
                }
                ,
                t.grabCursor) {
                    var G = A.container.style;
                    G.cursor = "move",
                    G.cursor = "grab",
                    G.cursor = "-moz-grab",
                    G.cursor = "-webkit-grab"
                }
                A.allowSlideClick = !0,
                A.allowLinks = !0;
                var U, Q, K, Z = !1, J = !0;
                A.swipeNext = function(e, n) {
                    "undefined" == typeof e && (e = !0),
                    !n && t.loop && A.fixLoop(),
                    !n && t.autoplay && A.stopAutoplay(!0),
                    A.callPlugins("onSwipeNext");
                    var i = A.getWrapperTranslate().toFixed(2)
                      , r = i;
                    if ("auto" === t.slidesPerView) {
                        for (var s = 0; s < A.snapGrid.length; s++)
                            if (-i >= A.snapGrid[s].toFixed(2) && -i < A.snapGrid[s + 1].toFixed(2)) {
                                r = -A.snapGrid[s + 1];
                                break
                            }
                    } else {
                        var a = D * t.slidesPerGroup;
                        r = -(Math.floor(Math.abs(i) / Math.floor(a)) * a + a)
                    }
                    return r < -o() && (r = -o()),
                    r === i ? !1 : (b(r, "next", {
                        runCallbacks: e
                    }),
                    !0)
                }
                ,
                A.swipePrev = function(e, n) {
                    "undefined" == typeof e && (e = !0),
                    !n && t.loop && A.fixLoop(),
                    !n && t.autoplay && A.stopAutoplay(!0),
                    A.callPlugins("onSwipePrev");
                    var i, o = Math.ceil(A.getWrapperTranslate());
                    if ("auto" === t.slidesPerView) {
                        i = 0;
                        for (var r = 1; r < A.snapGrid.length; r++) {
                            if (-o === A.snapGrid[r]) {
                                i = -A.snapGrid[r - 1];
                                break
                            }
                            if (-o > A.snapGrid[r] && -o < A.snapGrid[r + 1]) {
                                i = -A.snapGrid[r];
                                break
                            }
                        }
                    } else {
                        var s = D * t.slidesPerGroup;
                        i = -(Math.ceil(-o / s) - 1) * s
                    }
                    return i > 0 && (i = 0),
                    i === o ? !1 : (b(i, "prev", {
                        runCallbacks: e
                    }),
                    !0)
                }
                ,
                A.swipeReset = function(e) {
                    "undefined" == typeof e && (e = !0),
                    A.callPlugins("onSwipeReset");
                    var n, i = A.getWrapperTranslate(), r = D * t.slidesPerGroup;
                    -o();
                    if ("auto" === t.slidesPerView) {
                        n = 0;
                        for (var s = 0; s < A.snapGrid.length; s++) {
                            if (-i === A.snapGrid[s])
                                return;
                            if (-i >= A.snapGrid[s] && -i < A.snapGrid[s + 1]) {
                                n = A.positions.diff > 0 ? -A.snapGrid[s + 1] : -A.snapGrid[s];
                                break
                            }
                        }
                        -i >= A.snapGrid[A.snapGrid.length - 1] && (n = -A.snapGrid[A.snapGrid.length - 1]),
                        i <= -o() && (n = -o())
                    } else
                        n = 0 > i ? Math.round(i / r) * r : 0,
                        i <= -o() && (n = -o());
                    return t.scrollContainer && (n = 0 > i ? i : 0),
                    n < -o() && (n = -o()),
                    t.scrollContainer && I > D && (n = 0),
                    n === i ? !1 : (b(n, "reset", {
                        runCallbacks: e
                    }),
                    !0)
                }
                ,
                A.swipeTo = function(e, n, i) {
                    e = parseInt(e, 10),
                    A.callPlugins("onSwipeTo", {
                        index: e,
                        speed: n
                    }),
                    t.loop && (e += A.loopedSlides);
                    var r = A.getWrapperTranslate();
                    if (!(e > A.slides.length - 1 || 0 > e)) {
                        var s;
                        return s = "auto" === t.slidesPerView ? -A.slidesGrid[e] : -e * D,
                        s < -o() && (s = -o()),
                        s === r ? !1 : ("undefined" == typeof i && (i = !0),
                        b(s, "to", {
                            index: e,
                            speed: n,
                            runCallbacks: i
                        }),
                        !0)
                    }
                }
                ,
                A._queueStartCallbacks = !1,
                A._queueEndCallbacks = !1,
                A.updateActiveSlide = function(e) {
                    if (A.initialized && 0 !== A.slides.length) {
                        A.previousIndex = A.activeIndex,
                        "undefined" == typeof e && (e = A.getWrapperTranslate()),
                        e > 0 && (e = 0);
                        var n;
                        if ("auto" === t.slidesPerView) {
                            if (A.activeIndex = A.slidesGrid.indexOf(-e),
                            A.activeIndex < 0) {
                                for (n = 0; n < A.slidesGrid.length - 1 && !(-e > A.slidesGrid[n] && -e < A.slidesGrid[n + 1]); n++)
                                    ;
                                var i = Math.abs(A.slidesGrid[n] + e)
                                  , o = Math.abs(A.slidesGrid[n + 1] + e);
                                o >= i ? A.activeIndex = n : A.activeIndex = n + 1
                            }
                        } else
                            A.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / D);
                        if (A.activeIndex === A.slides.length && (A.activeIndex = A.slides.length - 1),
                        A.activeIndex < 0 && (A.activeIndex = 0),
                        A.slides[A.activeIndex]) {
                            if (A.calcVisibleSlides(e),
                            A.support.classList) {
                                var r;
                                for (n = 0; n < A.slides.length; n++)
                                    r = A.slides[n],
                                    r.classList.remove(t.slideActiveClass),
                                    A.visibleSlides.indexOf(r) >= 0 ? r.classList.add(t.slideVisibleClass) : r.classList.remove(t.slideVisibleClass);
                                A.slides[A.activeIndex].classList.add(t.slideActiveClass)
                            } else {
                                var s = new RegExp("\\s*" + t.slideActiveClass)
                                  , a = new RegExp("\\s*" + t.slideVisibleClass);
                                for (n = 0; n < A.slides.length; n++)
                                    A.slides[n].className = A.slides[n].className.replace(s, "").replace(a, ""),
                                    A.visibleSlides.indexOf(A.slides[n]) >= 0 && (A.slides[n].className += " " + t.slideVisibleClass);
                                A.slides[A.activeIndex].className += " " + t.slideActiveClass
                            }
                            if (t.loop) {
                                var l = A.loopedSlides;
                                A.activeLoopIndex = A.activeIndex - l,
                                A.activeLoopIndex >= A.slides.length - 2 * l && (A.activeLoopIndex = A.slides.length - 2 * l - A.activeLoopIndex),
                                A.activeLoopIndex < 0 && (A.activeLoopIndex = A.slides.length - 2 * l + A.activeLoopIndex),
                                A.activeLoopIndex < 0 && (A.activeLoopIndex = 0)
                            } else
                                A.activeLoopIndex = A.activeIndex;
                            t.pagination && A.updatePagination(e)
                        }
                    }
                }
                ,
                A.createPagination = function(e) {
                    if (t.paginationClickable && A.paginationButtons && T(),
                    A.paginationContainer = t.pagination.nodeType ? t.pagination : n(t.pagination)[0],
                    t.createPagination) {
                        var i = ""
                          , o = A.slides.length
                          , r = o;
                        t.loop && (r -= 2 * A.loopedSlides);
                        for (var s = 0; r > s; s++)
                            i += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
                        A.paginationContainer.innerHTML = i
                    }
                    A.paginationButtons = n("." + t.paginationElementClass, A.paginationContainer),
                    e || A.updatePagination(),
                    A.callPlugins("onCreatePagination"),
                    t.paginationClickable && C()
                }
                ,
                A.updatePagination = function(e) {
                    if (t.pagination && !(A.slides.length < 1)) {
                        var i = n("." + t.paginationActiveClass, A.paginationContainer);
                        if (i) {
                            var o = A.paginationButtons;
                            if (0 !== o.length) {
                                for (var r = 0; r < o.length; r++)
                                    o[r].className = t.paginationElementClass;
                                var s = t.loop ? A.loopedSlides : 0;
                                if (t.paginationAsRange) {
                                    A.visibleSlides || A.calcVisibleSlides(e);
                                    var a, l = [];
                                    for (a = 0; a < A.visibleSlides.length; a++) {
                                        var c = A.slides.indexOf(A.visibleSlides[a]) - s;
                                        t.loop && 0 > c && (c = A.slides.length - 2 * A.loopedSlides + c),
                                        t.loop && c >= A.slides.length - 2 * A.loopedSlides && (c = A.slides.length - 2 * A.loopedSlides - c,
                                        c = Math.abs(c)),
                                        l.push(c)
                                    }
                                    for (a = 0; a < l.length; a++)
                                        o[l[a]] && (o[l[a]].className += " " + t.paginationVisibleClass);
                                    t.loop ? void 0 !== o[A.activeLoopIndex] && (o[A.activeLoopIndex].className += " " + t.paginationActiveClass) : o[A.activeIndex] && (o[A.activeIndex].className += " " + t.paginationActiveClass)
                                } else
                                    t.loop ? o[A.activeLoopIndex] && (o[A.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) : o[A.activeIndex] && (o[A.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass)
                            }
                        }
                    }
                }
                ,
                A.calcVisibleSlides = function(e) {
                    var n = []
                      , i = 0
                      , o = 0
                      , r = 0;
                    R && A.wrapperLeft > 0 && (e += A.wrapperLeft),
                    !R && A.wrapperTop > 0 && (e += A.wrapperTop);
                    for (var s = 0; s < A.slides.length; s++) {
                        i += o,
                        o = "auto" === t.slidesPerView ? R ? A.h.getWidth(A.slides[s], !0, t.roundLengths) : A.h.getHeight(A.slides[s], !0, t.roundLengths) : D,
                        r = i + o;
                        var a = !1;
                        t.visibilityFullFit ? (i >= -e && -e + I >= r && (a = !0),
                        -e >= i && r >= -e + I && (a = !0)) : (r > -e && -e + I >= r && (a = !0),
                        i >= -e && -e + I > i && (a = !0),
                        -e > i && r > -e + I && (a = !0)),
                        a && n.push(A.slides[s])
                    }
                    0 === n.length && (n = [A.slides[A.activeIndex]]),
                    A.visibleSlides = n
                }
                ;
                var ee, te;
                A.startAutoplay = function() {
                    if (A.support.transitions) {
                        if ("undefined" != typeof ee)
                            return !1;
                        if (!t.autoplay)
                            return;
                        A.callPlugins("onAutoplayStart"),
                        t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A),
                        E()
                    } else {
                        if ("undefined" != typeof te)
                            return !1;
                        if (!t.autoplay)
                            return;
                        A.callPlugins("onAutoplayStart"),
                        t.onAutoplayStart && A.fireCallback(t.onAutoplayStart, A),
                        te = setInterval(function() {
                            t.loop ? (A.fixLoop(),
                            A.swipeNext(!0, !0)) : A.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearInterval(te),
                            te = void 0) : A.swipeTo(0))
                        }, t.autoplay)
                    }
                }
                ,
                A.stopAutoplay = function(e) {
                    if (A.support.transitions) {
                        if (!ee)
                            return;
                        ee && clearTimeout(ee),
                        ee = void 0,
                        e && !t.autoplayDisableOnInteraction && A.wrapperTransitionEnd(function() {
                            E()
                        }),
                        A.callPlugins("onAutoplayStop"),
                        t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
                    } else
                        te && clearInterval(te),
                        te = void 0,
                        A.callPlugins("onAutoplayStop"),
                        t.onAutoplayStop && A.fireCallback(t.onAutoplayStop, A)
                }
                ,
                A.loopCreated = !1,
                A.removeLoopedSlides = function() {
                    if (A.loopCreated)
                        for (var e = 0; e < A.slides.length; e++)
                            A.slides[e].getData("looped") === !0 && A.wrapper.removeChild(A.slides[e])
                }
                ,
                A.createLoop = function() {
                    if (0 !== A.slides.length) {
                        "auto" === t.slidesPerView ? A.loopedSlides = t.loopedSlides || 1 : A.loopedSlides = Math.floor(t.slidesPerView) + t.loopAdditionalSlides,
                        A.loopedSlides > A.slides.length && (A.loopedSlides = A.slides.length);
                        var e, n = "", i = "", o = "", r = A.slides.length, s = Math.floor(A.loopedSlides / r), a = A.loopedSlides % r;
                        for (e = 0; s * r > e; e++) {
                            var l = e;
                            if (e >= r) {
                                var c = Math.floor(e / r);
                                l = e - r * c
                            }
                            o += A.slides[l].outerHTML
                        }
                        for (e = 0; a > e; e++)
                            i += x(t.slideDuplicateClass, A.slides[e].outerHTML);
                        for (e = r - a; r > e; e++)
                            n += x(t.slideDuplicateClass, A.slides[e].outerHTML);
                        var u = n + o + P.innerHTML + o + i;
                        for (P.innerHTML = u,
                        A.loopCreated = !0,
                        A.calcSlides(),
                        e = 0; e < A.slides.length; e++)
                            (e < A.loopedSlides || e >= A.slides.length - A.loopedSlides) && A.slides[e].setData("looped", !0);
                        A.callPlugins("onCreateLoop")
                    }
                }
                ,
                A.fixLoop = function() {
                    var e;
                    A.activeIndex < A.loopedSlides ? (e = A.slides.length - 3 * A.loopedSlides + A.activeIndex,
                    A.swipeTo(e, 0, !1)) : ("auto" === t.slidesPerView && A.activeIndex >= 2 * A.loopedSlides || A.activeIndex > A.slides.length - 2 * t.slidesPerView) && (e = -A.slides.length + A.activeIndex + A.loopedSlides,
                    A.swipeTo(e, 0, !1))
                }
                ,
                A.loadSlides = function() {
                    var e = "";
                    A.activeLoaderIndex = 0;
                    for (var n = t.loader.slides, i = t.loader.loadAllSlides ? n.length : t.slidesPerView * (1 + t.loader.surroundGroups), o = 0; i > o; o++)
                        e += "outer" === t.loader.slidesHTMLType ? n[o] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + o + '">' + n[o] + "</" + t.slideElement + ">";
                    A.wrapper.innerHTML = e,
                    A.calcSlides(!0),
                    t.loader.loadAllSlides || A.wrapperTransitionEnd(A.reloadSlides, !0)
                }
                ,
                A.reloadSlides = function() {
                    var e = t.loader.slides
                      , n = parseInt(A.activeSlide().data("swiperindex"), 10);
                    if (!(0 > n || n > e.length - 1)) {
                        A.activeLoaderIndex = n;
                        var i = Math.max(0, n - t.slidesPerView * t.loader.surroundGroups)
                          , o = Math.min(n + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
                        if (n > 0) {
                            var r = -D * (n - i);
                            A.setWrapperTranslate(r),
                            A.setWrapperTransition(0)
                        }
                        var s;
                        if ("reload" === t.loader.logic) {
                            A.wrapper.innerHTML = "";
                            var a = "";
                            for (s = i; o >= s; s++)
                                a += "outer" === t.loader.slidesHTMLType ? e[s] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + s + '">' + e[s] + "</" + t.slideElement + ">";
                            A.wrapper.innerHTML = a
                        } else {
                            var l = 1e3
                              , c = 0;
                            for (s = 0; s < A.slides.length; s++) {
                                var u = A.slides[s].data("swiperindex");
                                i > u || u > o ? A.wrapper.removeChild(A.slides[s]) : (l = Math.min(u, l),
                                c = Math.max(u, c))
                            }
                            for (s = i; o >= s; s++) {
                                var d;
                                l > s && (d = document.createElement(t.slideElement),
                                d.className = t.slideClass,
                                d.setAttribute("data-swiperindex", s),
                                d.innerHTML = e[s],
                                A.wrapper.insertBefore(d, A.wrapper.firstChild)),
                                s > c && (d = document.createElement(t.slideElement),
                                d.className = t.slideClass,
                                d.setAttribute("data-swiperindex", s),
                                d.innerHTML = e[s],
                                A.wrapper.appendChild(d))
                            }
                        }
                        A.reInit(!0)
                    }
                }
                ,
                M()
            }
        }
        ;
        i.prototype = {
            plugins: {},
            wrapperTransitionEnd: function(e, t) {
                "use strict";
                function n(a) {
                    if (a.target === r && (e(o),
                    o.params.queueEndCallbacks && (o._queueEndCallbacks = !1),
                    !t))
                        for (i = 0; i < s.length; i++)
                            o.h.removeEventListener(r, s[i], n)
                }
                var i, o = this, r = o.wrapper, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                if (e)
                    for (i = 0; i < s.length; i++)
                        o.h.addEventListener(r, s[i], n)
            },
            getWrapperTranslate: function(e) {
                "use strict";
                var t, n, i, o, r = this.wrapper;
                return "undefined" == typeof e && (e = "horizontal" === this.params.mode ? "x" : "y"),
                this.support.transforms && this.params.useCSS3Transforms ? (i = window.getComputedStyle(r, null ),
                window.WebKitCSSMatrix ? o = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : (o = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                t = o.toString().split(",")),
                "x" === e && (n = window.WebKitCSSMatrix ? o.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                "y" === e && (n = window.WebKitCSSMatrix ? o.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5]))) : ("x" === e && (n = parseFloat(r.style.left, 10) || 0),
                "y" === e && (n = parseFloat(r.style.top, 10) || 0)),
                n || 0
            },
            setWrapperTranslate: function(e, t, n) {
                "use strict";
                var i, o = this.wrapper.style, r = {
                    x: 0,
                    y: 0,
                    z: 0
                };
                3 === arguments.length ? (r.x = e,
                r.y = t,
                r.z = n) : ("undefined" == typeof t && (t = "horizontal" === this.params.mode ? "x" : "y"),
                r[t] = e),
                this.support.transforms && this.params.useCSS3Transforms ? (i = this.support.transforms3d ? "translate3d(" + r.x + "px, " + r.y + "px, " + r.z + "px)" : "translate(" + r.x + "px, " + r.y + "px)",
                o.webkitTransform = o.MsTransform = o.msTransform = o.MozTransform = o.OTransform = o.transform = i) : (o.left = r.x + "px",
                o.top = r.y + "px"),
                this.callPlugins("onSetWrapperTransform", r),
                this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, r)
            },
            setWrapperTransition: function(e) {
                "use strict";
                var t = this.wrapper.style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s",
                this.callPlugins("onSetWrapperTransition", {
                    duration: e
                }),
                this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
            },
            h: {
                getWidth: function(e, t, n) {
                    "use strict";
                    var i = window.getComputedStyle(e, null ).getPropertyValue("width")
                      , o = parseFloat(i);
                    return (isNaN(o) || i.indexOf("%") > 0 || 0 > o) && (o = e.offsetWidth - parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-right"))),
                    t && (o += parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-right"))),
                    n ? Math.ceil(o) : o
                },
                getHeight: function(e, t, n) {
                    "use strict";
                    if (t)
                        return e.offsetHeight;
                    var i = window.getComputedStyle(e, null ).getPropertyValue("height")
                      , o = parseFloat(i);
                    return (isNaN(o) || i.indexOf("%") > 0 || 0 > o) && (o = e.offsetHeight - parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-bottom"))),
                    t && (o += parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null ).getPropertyValue("padding-bottom"))),
                    n ? Math.ceil(o) : o
                },
                getOffset: function(e) {
                    "use strict";
                    var t = e.getBoundingClientRect()
                      , n = document.body
                      , i = e.clientTop || n.clientTop || 0
                      , o = e.clientLeft || n.clientLeft || 0
                      , r = window.pageYOffset || e.scrollTop
                      , s = window.pageXOffset || e.scrollLeft;
                    return document.documentElement && !window.pageYOffset && (r = document.documentElement.scrollTop,
                    s = document.documentElement.scrollLeft),
                    {
                        top: t.top + r - i,
                        left: t.left + s - o
                    }
                },
                windowWidth: function() {
                    "use strict";
                    return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
                },
                windowHeight: function() {
                    "use strict";
                    return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
                },
                windowScroll: function() {
                    "use strict";
                    return "undefined" != typeof pageYOffset ? {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    } : document.documentElement ? {
                        left: document.documentElement.scrollLeft,
                        top: document.documentElement.scrollTop
                    } : void 0
                },
                addEventListener: function(e, t, n, i) {
                    "use strict";
                    "undefined" == typeof i && (i = !1),
                    e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                removeEventListener: function(e, t, n, i) {
                    "use strict";
                    "undefined" == typeof i && (i = !1),
                    e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
                }
            },
            setTransform: function(e, t) {
                "use strict";
                var n = e.style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
            },
            setTranslate: function(e, t) {
                "use strict";
                var n = e.style
                  , i = {
                    x: t.x || 0,
                    y: t.y || 0,
                    z: t.z || 0
                }
                  , o = this.support.transforms3d ? "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px)" : "translate(" + i.x + "px," + i.y + "px)";
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = o,
                this.support.transforms || (n.left = i.x + "px",
                n.top = i.y + "px")
            },
            setTransition: function(e, t) {
                "use strict";
                var n = e.style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms"
            },
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    "use strict";
                    return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    "use strict";
                    var e = document.createElement("div").style;
                    return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                }(),
                transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
                    "use strict";
                    var e = document.createElement("div").style;
                    return "transform"in e || "WebkitTransform"in e || "MozTransform"in e || "msTransform"in e || "MsTransform"in e || "OTransform"in e
                }(),
                transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
                    "use strict";
                    var e = document.createElement("div").style;
                    return "transition"in e || "WebkitTransition"in e || "MozTransition"in e || "msTransition"in e || "MsTransition"in e || "OTransition"in e
                }(),
                classList: function() {
                    "use strict";
                    var e = document.createElement("div");
                    return "classList"in e
                }()
            },
            browser: {
                ie8: function() {
                    "use strict";
                    var e = -1;
                    if ("Microsoft Internet Explorer" === navigator.appName) {
                        var t = navigator.userAgent
                          , n = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                        null !== n.exec(t) && (e = parseFloat(RegExp.$1))
                    }
                    return -1 !== e && 9 > e
                }(),
                ie10: window.navigator.msPointerEnabled,
                ie11: window.navigator.pointerEnabled
            }
        },
        (window.jQuery || window.Zepto) && !function(e) {
            "use strict";
            e.fn.swiper = function(t) {
                var n;
                return this.each(function(o) {
                    var r = e(this)
                      , s = new i(r[0],t);
                    o || (n = s),
                    r.data("swiper", s)
                }),
                n
            }
        }(window.jQuery || window.Zepto),
        "undefined" != typeof t && (t.exports = i),
        "function" == typeof define && define.amd && define([], function() {
            "use strict";
            return i
        })
    }
    , {}]
}, {}, [1]);
