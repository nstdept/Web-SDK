(function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r)
        }, p, p.exports, r, e, n, t)
      }
      return n[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
  }
  return r
})()({
  1: [function(require, module, exports) {
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(e) {
      if (cachedSetTimeout === setTimeout) return setTimeout(e, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(e, 0);
      try {
        return cachedSetTimeout(e, 0)
      } catch (t) {
        try {
          return cachedSetTimeout.call(null, e, 0)
        } catch (t) {
          return cachedSetTimeout.call(this, e, 0)
        }
      }
    }

    function runClearTimeout(e) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(e);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(e);
      try {
        return cachedClearTimeout(e)
      } catch (t) {
        try {
          return cachedClearTimeout.call(null, e)
        } catch (t) {
          return cachedClearTimeout.call(this, e)
        }
      }
    }

    function cleanUpNextTick() {
      draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue())
    }

    function drainQueue() {
      if (!draining) {
        var e = runTimeout(cleanUpNextTick);
        draining = !0;
        for (var t = queue.length; t;) {
          for (currentQueue = queue, queue = []; ++queueIndex < t;) currentQueue && currentQueue[queueIndex].run();
          queueIndex = -1, t = queue.length
        }
        currentQueue = null, draining = !1, runClearTimeout(e)
      }
    }

    function Item(e, t) {
      this.fun = e, this.array = t
    }

    function noop() {}
    var process = module.exports = {},
      cachedSetTimeout, cachedClearTimeout;
    ! function() {
      try {
        cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
      } catch (e) {
        cachedSetTimeout = defaultSetTimout
      }
      try {
        cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout
      }
    }();
    var queue = [],
      draining = !1,
      currentQueue, queueIndex = -1;
    process.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      queue.push(new Item(e, t)), 1 !== queue.length || draining || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function(e) {
      return []
    }, process.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, process.cwd = function() {
      return "/"
    }, process.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, process.umask = function() {
      return 0
    };

  }, {}],
  2: [function(require, module, exports) {
    function MultiStreamsMixer(t) {
      function e(t, i, o) {
        if ("srcObject" in i) i.srcObject = t;
        else if ("createObjectURL" in m && !o) try {
          i.src = m.createObjectURL(t)
        } catch (o) {
          return void e(t, i, !0)
        } else "mozSrcObject" in i ? i.mozSrcObject = t : alert("createObjectURL/srcObject both are not supported.")
      }

      function i() {
        if (!s) {
          var t = u.length,
            e = !1,
            n = [];
          if (u.forEach(function(t) {
              t.stream || (t.stream = {}), t.stream.fullcanvas ? e = t : n.push(t)
            }), e) c.width = e.stream.width, c.height = e.stream.height;
          else if (n.length) {
            c.width = t > 1 ? 2 * n[0].width : n[0].width;
            var a = 1;
            3 !== t && 4 !== t || (a = 2), 5 !== t && 6 !== t || (a = 3), 7 !== t && 8 !== t || (a = 4), 9 !== t && 10 !== t || (a = 5), c.height = n[0].height * a
          } else c.width = f.width || 360, c.height = f.height || 240;
          e && e instanceof HTMLVideoElement && o(e), n.forEach(function(t, e) {
            o(t, e)
          }), setTimeout(i, f.frameInterval)
        }
      }

      function o(t, e) {
        if (!s) {
          var i = 0,
            o = 0,
            n = t.width,
            a = t.height;
          1 === e && (i = t.width), 2 === e && (o = t.height), 3 === e && (i = t.width, o = t.height), 4 === e && (o = 2 * t.height), 5 === e && (i = t.width, o = 2 * t.height), 6 === e && (o = 3 * t.height), 7 === e && (i = t.width, o = 3 * t.height), void 0 !== t.stream.left && (i = t.stream.left), void 0 !== t.stream.top && (o = t.stream.top), void 0 !== t.stream.width && (n = t.stream.width), void 0 !== t.stream.height && (a = t.stream.height), h.drawImage(t, i, o, n, a), "function" == typeof t.stream.onRender && t.stream.onRender(h, i, o, n, a, e)
        }
      }

      function n() {
        d();
        var t;
        "captureStream" in c ? t = c.captureStream() : "mozCaptureStream" in c ? t = c.mozCaptureStream() : f.disableLogs || console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features");
        var e = new l;
        return t.getVideoTracks().forEach(function(t) {
          e.addTrack(t)
        }), c.stream = e, e
      }

      function a() {
        v.AudioContextConstructor || (v.AudioContextConstructor = new v.AudioContext), f.audioContext = v.AudioContextConstructor, f.audioSources = [], !0 === f.useGainNode && (f.gainNode = f.audioContext.createGain(), f.gainNode.connect(f.audioContext.destination), f.gainNode.gain.value = 0);
        var e = 0;
        if (t.forEach(function(t) {
            if (t.getAudioTracks().length) {
              e++;
              var i = f.audioContext.createMediaStreamSource(t);
              !0 === f.useGainNode && i.connect(f.gainNode), f.audioSources.push(i)
            }
          }), e) return f.audioDestination = f.audioContext.createMediaStreamDestination(), f.audioSources.forEach(function(t) {
          t.connect(f.audioDestination)
        }), f.audioDestination.stream
      }

      function r(t) {
        var i = document.createElement("video");
        return e(t, i), i.muted = !0, i.volume = 0, i.width = t.width || f.width || 360, i.height = t.height || f.height || 240, i.play(), i
      }

      function d(e) {
        u = [], f.audioSources && f.audioSources.forEach(function(t) {
          t.disconnect()
        }), e = e || t, f.audioContext && f.audioContext.resume(), e.forEach(function(t) {
          if (t.getVideoTracks().length || t.getAudioTracks().length) {
            if (t.getVideoTracks().length) {
              var e = r(t);
              e.stream = t, u.push(e)
            }
            if (t.getAudioTracks().length && f.audioContext) {
              var i = f.audioContext.createMediaStreamSource(t);
              i.connect(f.audioDestination), f.audioSources.push(i)
            }
          }
        })
      }
      var u = [],
        s = !1,
        c = document.createElement("canvas"),
        h = c.getContext("2d");
      c.style = "opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;", (document.body || document.documentElement).appendChild(c), this.disableLogs = !1, this.frameInterval = 1, this.width = 360, this.height = 240, this.useGainNode = !0;
      var f = this,
        g = window.AudioContext;
      void 0 === g && ("undefined" != typeof webkitAudioContext && (g = webkitAudioContext), "undefined" != typeof mozAudioContext && (g = mozAudioContext));
      var m = window.URL;
      void 0 === m && "undefined" != typeof webkitURL && (m = webkitURL), "undefined" != typeof navigator && void 0 === navigator.getUserMedia && (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia));
      var l = window.MediaStream;
      void 0 === l && "undefined" != typeof webkitMediaStream && (l = webkitMediaStream), void 0 !== l && ("getVideoTracks" in l.prototype || (l.prototype.getVideoTracks = function() {
        if (!this.getTracks) return [];
        var t = [];
        return this.getTracks.forEach(function(e) {
          -1 !== e.kind.toString().indexOf("video") && t.push(e)
        }), t
      }, l.prototype.getAudioTracks = function() {
        if (!this.getTracks) return [];
        var t = [];
        return this.getTracks.forEach(function(e) {
          -1 !== e.kind.toString().indexOf("audio") && t.push(e)
        }), t
      }), void 0 === l.prototype.stop && (l.prototype.stop = function() {
        this.getTracks().forEach(function(t) {
          t.stop()
        })
      }));
      var v = {};
      void 0 !== g ? v.AudioContext = g : "undefined" != typeof webkitAudioContext && (v.AudioContext = webkitAudioContext), this.startDrawingFrames = function() {
        i()
      }, this.appendStreams = function(e) {
        if (!e) throw "First parameter is required.";
        e instanceof Array || (e = [e]), t.concat(e), e.forEach(function(t) {
          if (t.getVideoTracks().length) {
            var e = r(t);
            e.stream = t, u.push(e)
          }
          if (t.getAudioTracks().length && f.audioContext) {
            var i = f.audioContext.createMediaStreamSource(t);
            i.connect(f.audioDestination), f.audioSources.push(i)
          }
        })
      }, this.releaseStreams = function() {
        u = [], s = !0, f.gainNode && (f.gainNode.disconnect(), f.gainNode = null), f.audioSources.length && (f.audioSources.forEach(function(t) {
          t.disconnect()
        }), f.audioSources = []), f.audioDestination && (f.audioDestination.disconnect(), f.audioDestination = null), f.audioContext && f.audioContext.close(), f.audioContext = null, h.clearRect(0, 0, c.width, c.height), c.stream && (c.stream.stop(), c.stream = null)
      }, this.resetVideoStreams = function(t) {
        !t || t instanceof Array || (t = [t]), d(t)
      }, this.name = "MultiStreamsMixer", this.toString = function() {
        return this.name
      }, this.getMixedStream = function() {
        s = !1;
        var e = n(),
          i = a();
        i && i.getAudioTracks().forEach(function(t) {
          e.addTrack(t)
        });
        var o;
        return t.forEach(function(t) {
          t.fullcanvas && (o = !0)
        }), e
      }
    }
    module.exports = MultiStreamsMixer;

  }, {}],
  3: [function(require, module, exports) {
    "use strict";

    function StringBuffer() {
      this.buffer = []
    }

    function quality2Bitrate(e, t) {
      if (e.simulcast) switch (t) {
        case "high":
          return e.high_bandwidth_out ? e.high_bandwidth_out : 1 * e.bandwidth_out;
        case "medium":
          return e.medium_bandwidth_out ? e.medium_bandwidth_out : .5 * e.bandwidth_out;
        case "low":
          return e.low_bandwidth_out ? e.low_bandwidth_out : .5 * e.bandwidth_out;
        default:
          return 300
      } else switch (t) {
        case "high":
          return e.high_bandwidth_out ? e.high_bandwidth_out : 1 * e.bandwidth_out;
        case "medium":
          return e.medium_bandwidth_out ? e.medium_bandwidth_out : .5 * e.bandwidth_out;
        case "low":
          return e.low_bandwidth_out ? e.low_bandwidth_out : .5 * e.bandwidth_out;
        default:
          return 300
      }
    }

    function Utf8EncodeEnumerator(e) {
      this._input = e, this._index = -1, this._buffer = []
    }

    function Base64DecodeEnumerator(e) {
      this._input = e, this._index = -1, this._buffer = []
    }

    function t2b(e) {
      return "YES" == e || "ALLOW" == e
    }

    function b2t(e) {
      return e ? "YES" : "NO"
    }

    function b2p(e) {
      return e ? "ALLOW" : "DENY"
    }

    function layoutString2num(e) {
      if (e) {
        var t = e.split(":");
        return [parseInt(t[0]), parseInt(t[1])]
      }
      return []
    }

    function virtualLayout(e, t) {
      var n = _slicedToArray(e, 2),
        r = n[0],
        o = n[1],
        a = _slicedToArray(t, 2),
        s = a[0],
        i = a[1],
        c = r,
        u = o;
      return _.isNumber(s) && _.isNumber(i) ? (c = Math.min(r, s), u = Math.min(r + o, s + i) - c, [c, u]) : [r, o]
    }

    function VcRTCCall() {
      var e = this;
      e.state = "IDLE", e.parent = null, e.bandwidth_in = 1280, e.bandwidth_out = 1280, e.localStream = null, e.onHold = !1, e.pc = null, e.mutedAudio = !1, e.mutedVideo = !1, e.call_type = "", e.audio_source = null, e.video_source = null, e.recv_audio = !0, e.recv_video = !0, e.force_hd = 720, e.event_listener = null, e.call_uuid = null, e.legacy_screenshare = !1, e.h264_enabled = !0, e.allow_1080p = !1, e.stream = null, e.presentation_in_main = !1, e.ice_candidates = [], e.analyser = null, e.microphone = null, e.audioContext = null, e.audioRTCInterval = null, e.onError = null, e.onSetup = null, e.onConnect = null, e.onUpdateStream = null, e.onRemoveStream = null, e.onHoldResume = null, e.onDisconnect = null, e.onMicActivity = null, e.onScreenshareMissing = null
    }

    function VcJPEGPresentation() {
      var e = this;
      e.state = "IDLE", e.parent = null, e.call_uuid = null, e.onError = null, e.onSetup = null, e.onConnect = null, e.onDisconnect = null
    }

    function VcRTC() {
      var e = this;
      e.state = "IDLE", e.ack = !1, e.conference = null, e.version = null, e.static = {}, e.display_name = null, e.bandwidth_in = 1280, e.bandwidth_out = 1280, e.oneTimeToken = null, e.conference_extension = null, e.localStream = null, e.mixer = null, e.pipEnable = !1, e.node = null, e.socket = null, e.uuid = null, e.isvmr = null, e.onHold = !1, e.last_ping = null, e.pc = null, e.pcConfig = {}, e.pcConstraints = {}, e.default_stun = null, e.turn_server = null, e.pin = null, e.role = null, e.pin_status = "none", e.call_type = "", e.mutedAudio = !1, e.mutedVideo = !1, e.audio_source = null, e.video_source = null, e.recv_audio = !0, e.recv_video = !0, e.forceCodec = "", e.event_listener = null, e.screenshare_api = "pexGetScreen", e.screenshare_fps = 5, e.screenshare_version = "1.0.6", e.screenshare_width = window.screen.width, e.screenshare_height = window.screen.height, e.powerLineFrequency = 0, e.token = null, e.token_refresh = null, e.registration_token = null, e.event_source = null, e.event_source_timeout = 0, e.rosterList = {}, e.presentation_msg = {
        status: ""
      }, e.presentation_event_id = null, e.chat_enabled = !1, e.fecc_enabled = !1, e.rtmp_enabled = !1, e.rtsp_enabled = !1, e.analytics_enabled = !1, e.allow_1080p = !1, e.service_type = null, e.current_service_type = null, e.remote_call_type = null, e.dtmf_queue = {}, e.fecc_queue = {}, e.h264_enabled = !0, e.simulcast = !1, e.clayout = "", e.hideme = !1, e.live_recorder_server = null, e.account = null, e.png_presentation = !1, e.basic_username = null, e.basic_password = null, e.checkdup = null, e.screenshare = null, e.presentation = null, e.call = null, e.flash = void 0, e.error = null, e.onError = null, e.onWarn = null, e.onSetup = null, e.onConnect = null, e.onUpdateStream = null, e.onRemoveStream = null, e.onHoldResume = null, e.onDisconnect = null, e.onPresentation = null, e.onPresentationReload = null, e.onPresentationConnected = null, e.onPresentationDisconnected = null, e.onRosterList = null, e.onScreenshareStopped = null, e.onScreenshareMissing = null, e.onCallTransfer = null, e.onCallDisconnect = null, e.onParticipantCreate = null, e.onParticipantUpdate = null, e.onParticipantDelete = null, e.onSyncBegin = null, e.onSyncEnd = null, e.onChatMessage = null, e.onStageUpdate = null, e.onMicActivity = null, e.logVerbose = function() {
        ("undefined" != typeof location && "cs.lalonline.cn" === location.host || "cs.lalonline.cn" === e.apiServer) && console.info.apply(console, arguments)
      }, e.logDebug = function() {
        console.debug.apply(console, arguments)
      }, e.onLog = function() {
        console.info.apply(console, arguments)
      }, e.stats = new VcRTCStatistics, e.stats.parent = e, e.ssrcStreamUUIDs = [], e.lastSsrcs = [], e.modifySourcesQueue = asyncFun.queue(e.modifySSRCsOfSDP.bind(e), 1), -1 != navigator.userAgent.indexOf("Chrome") ? e.chrome_ver = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) : e.chrome_ver = 0, -1 != navigator.userAgent.indexOf("Firefox") ? (e.firefox_ver = parseInt(window.navigator.userAgent.match(/Firefox\/(\d+)\./)[1], 10), e.firefox_ver < 38 && (e.h264_enabled = !1)) : e.firefox_ver = 0, -1 != navigator.userAgent.indexOf("Edge") ? (e.edge_ver = parseInt(window.navigator.userAgent.match(/Edge\/\d+\.(\d+)/)[1], 10), e.chrome_ver = 0) : e.edge_ver = 0, e.chrome_ver > 53 && -1 != navigator.userAgent.indexOf("OS X") && (e.h264_enabled = !0), -1 != navigator.userAgent.indexOf("MQQBrowser") ? e.qq_ver = parseInt(window.navigator.userAgent.match(/MQQBrowser\/(\d+)\./)[1], 10) : e.qq_ver = 0, -1 != navigator.userAgent.indexOf("Android") ? e.andriod_ver = parseInt(window.navigator.userAgent.match(/Android\s(\d)/)[1], 10) : e.andriod_ver = 0, -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") ? e.safari_ver = parseInt(window.navigator.userAgent.match(/Version\/(\d+)\./)[1], 10) : e.safari_ver = 0, -1 != navigator.userAgent.indexOf("Mobile") && (e.isMobile = !0), 0 !== e.qq_ver && (e.h264_enabled = !1), e.chrome_ver > 60 && setInterval(function() {
        e.call && e.call.pc && e.call.pc.getStats && e.call.pc.getStats(function(t) {
          e.stats.updateRecvStatus(t.result())
        })
      }, 1e3), e.trans = {
        ERROR_SCREENSHARE_CANCELLED: "屏幕共享已取消",
        ERROR_CALL_FAILED: "呼叫失败: ",
        ERROR_WEBRTC_SUPPORT: "错误: 这个浏览器不支持WebRTC服务",
        ERROR_SCREENSHARE_EXTENSION: "错误: 屏幕共享扩展未找到.\n\n你是否想安装屏幕共享扩展?",
        ERROR_USER_MEDIA: "错误: 不能获取摄像头和麦克风授权.\n\n你是否允许? 或者有其他的应用正在使用摄像头?",
        ERROR_CPU_OVERLOAD: '喔噢~ 电脑卡顿，建议切换"流畅"清晰度',
        ERROR_PRESENTATION_ENDED: "演示结束",
        ERROR_DISCONNECTED_PRESENTATION: "远程演示已断开",
        ERROR_DISCONNECTED_SCREENSHARE: "远程屏幕共享已断开",
        ERROR_DISCONNECTED: "你已经断开远程会议",
        ERROR_CONNECTING_PRESENTATION: "演示流不可用",
        ERROR_CONNECTING_SCREENSHARE: "屏幕共享错误",
        ERROR_CONNECTING: "连接会议服务错误"
      }
    }

    function VcFlashEventsClass(e) {
      this.call = e
    }

    function VcRTCStreamStatistics() {
      var e = this;
      e.lastPackets = 0, e.lastLost = 0, e.lastBytes = 0, e.lastTimestamp = null, e.pctLost = [], e.info = {}
    }

    function VcRTCStatus() {
      var e = this;
      e.failedCount = 0, e.lastFrameDecoded = 0, e.lastPacketsReceived = 0
    }

    function VcRTCStatistics() {
      var e = this;
      e.audio_out = new VcRTCStreamStatistics, e.audio_in = new VcRTCStreamStatistics, e.video_out = new VcRTCStreamStatistics, e.video_in = new VcRTCStreamStatistics, e.recvStreams = {}, e.uuid2Statistics = {}
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      _slicedToArray = function() {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
          } catch (e) {
            o = !0, a = e
          } finally {
            try {
              !r && i.return && i.return()
            } finally {
              if (o) throw a
            }
          }
          return n
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      _ = require("lodash"),
      version = "1.0.1",
      asyncFun = require("async"),
      UUID = require("uuid-js"),
      semver = require("semver"),
      MultiStreamsMixer = require("./MultiStreamsMixer"),
      sdpTransform = require("./sdp-transform"),
      CODEC_VP9 = sdpTransform.CODEC_VP9,
      CODEC_VP8 = sdpTransform.CODEC_VP8,
      CODEC_H264_BASE = sdpTransform.CODEC_H264_BASE,
      CODEC_H264_PROFILE = sdpTransform.CODEC_H264_PROFILE,
      SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription,
      PeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.RTCPeerConnection;
    StringBuffer.prototype.append = function(e) {
      return this.buffer.push(e), this
    }, StringBuffer.prototype.toString = function() {
      return this.buffer.join("")
    };
    var Base64 = {
      codex: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function(e) {
        for (var t = new StringBuffer, n = new Utf8EncodeEnumerator(e); n.moveNext();) {
          var r = n.current;
          n.moveNext();
          var o = n.current;
          n.moveNext();
          var a = n.current,
            s = r >> 2,
            i = (3 & r) << 4 | o >> 4,
            c = (15 & o) << 2 | a >> 6,
            u = 63 & a;
          isNaN(o) ? c = u = 64 : isNaN(a) && (u = 64), t.append(this.codex.charAt(s) + this.codex.charAt(i) + this.codex.charAt(c) + this.codex.charAt(u))
        }
        return t.toString()
      },
      decode: function(e) {
        for (var t = new StringBuffer, n = new Base64DecodeEnumerator(e); n.moveNext();) {
          var r = n.current;
          if (r < 128) t.append(String.fromCharCode(r));
          else if (r > 191 && r < 224) {
            n.moveNext();
            o = n.current;
            t.append(String.fromCharCode((31 & r) << 6 | 63 & o))
          } else {
            n.moveNext();
            var o = n.current;
            n.moveNext();
            var a = n.current;
            t.append(String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & a))
          }
        }
        return t.toString()
      }
    };
    Utf8EncodeEnumerator.prototype = {
      current: Number.NaN,
      moveNext: function() {
        if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
        if (this._index >= this._input.length - 1) return this.current = Number.NaN, !1;
        var e = this._input.charCodeAt(++this._index);
        return 13 == e && 10 == this._input.charCodeAt(this._index + 1) && (e = 10, this._index += 2), e < 128 ? this.current = e : e > 127 && e < 2048 ? (this.current = e >> 6 | 192, this._buffer.push(63 & e | 128)) : (this.current = e >> 12 | 224, this._buffer.push(e >> 6 & 63 | 128), this._buffer.push(63 & e | 128)), !0
      }
    }, Base64DecodeEnumerator.prototype = {
      current: 64,
      moveNext: function() {
        if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
        if (this._index >= this._input.length - 1) return this.current = 64, !1;
        var e = Base64.codex.indexOf(this._input.charAt(++this._index)),
          t = Base64.codex.indexOf(this._input.charAt(++this._index)),
          n = Base64.codex.indexOf(this._input.charAt(++this._index)),
          r = Base64.codex.indexOf(this._input.charAt(++this._index)),
          o = e << 2 | t >> 4,
          a = (15 & t) << 4 | n >> 2,
          s = (3 & n) << 6 | r;
        return this.current = o, 64 != n && this._buffer.push(a), 64 != r && this._buffer.push(s), !0
      }
    }, VcRTCCall.prototype.sdpAddCandidates = function(e) {
      for (var t = this, n = [], r = 0; r < e.length; r++) {
        if (0 === e[r].lastIndexOf("m=", 0) || "" === e[r])
          for (var o = 0; o < t.ice_candidates.length; o++) - 1 === t.ice_candidates[o].indexOf("endOfCandidates") && n.push("a=" + t.ice_candidates[o]);
        if (n.push(e[r]), 0 === e[r].indexOf("a=ssrc:") && e[r].indexOf("cname:") > 0) {
          var a = e[r].substr(7, e[r].indexOf(" ") - 7);
          n.push("a=x-ssrc-range:" + a + "-" + (parseInt(a) + 99))
        }
      }
      return n
    }, VcRTCCall.prototype.getHostCandidate = function(e, t) {
      for (var n = t; n < e.length; n++)
        if (0 === e[n].lastIndexOf("a=candidate", 0) && "host" == e[n].substr(-4)) {
          var r = e[n].split(" ");
          return [r[4], r[5]]
        }
    }, VcRTCCall.prototype.sdpAddPLI = function(e) {
      for (var t, n, r, o = this, a = "notinvideo", s = [], i = 0; i < e.length; i++) {
        var c = e[i];
        if (0 === e[i].lastIndexOf("c=", 0) && "0.0.0.0" == e[i].substr(-7) ? (t = o.getHostCandidate(e, i)) && (c = c.substr(0, c.length - 7) + t[0]) : 0 === e[i].lastIndexOf("m=", 0) && "9" == e[i].split(" ")[1] && (t = o.getHostCandidate(e, i)) && ((n = e[i].split(" "))[1] = t[1], c = n.join(" ")), "notinvideo" === a) s.push(c), 0 === e[i].lastIndexOf("m=video", 0) && (a = "invideo");
        else if ("invideo" === a) {
          if (0 !== e[i].lastIndexOf("m=", 0) && "" !== e[i] || (o.chrome_ver > 41 || o.firefox_ver > 44 || s.push("a=rtcp-fb:* nack pli"), "presentation" != o.call_type && "screen" != o.call_type || s.push("a=content:slides"), 0 !== e[i].lastIndexOf("m=video", 0) && (a = "notinvideo")), (!o.h264_enabled || "screen" == o.call_type) && 0 === e[i].lastIndexOf("a=rtpmap:", 0) && e[i].lastIndexOf("H264") > 0) {
            r = (n = e[i].split(" "))[0].substr(n[0].indexOf(":") + 1), 0 === e[i + 1].lastIndexOf("a=fmtp:" + r, 0) && i++;
            continue
          }
          if (s.push(c), o.chrome_ver > 0 && o.allow_1080p && 0 === e[i].lastIndexOf("a=rtpmap:", 0))
            if (n = e[i].split(" "), r = n[0].substr(n[0].indexOf(":") + 1), e[i].lastIndexOf("VP8") > 0) s.push("a=fmtp:" + r + " max-fs=8160;max-fr=30");
            else if (e[i].lastIndexOf("H264") > 0) {
            for (; 0 === e[i + 1].lastIndexOf("a=rtcp-fb:" + r, 0);) s.push(e[++i]);
            0 === e[i + 1].lastIndexOf("a=fmtp:" + r, 0) && -1 === e[i + 1].lastIndexOf("max-fs") && s.push(e[++i] + ";max-br=3732;max-mbps=245760;max-fs=8192;max-smbps=245760;max-fps=3000;max-fr=30")
          }
          0 === e[i].lastIndexOf("c=", 0) && s.push("b=AS:" + o.bandwidth_in)
        }
      }
      return s
    }, VcRTCCall.prototype.sdpChangeBW = function(e) {
      for (var t = this, n = "notinvideo", r = [], o = 0; o < e.length; o++) {
        if (r.push(e[o]), 0 === e[o].lastIndexOf("m=video", 0)) n = "invideo";
        else if ("invideo" === n)
          if (0 === e[o].lastIndexOf("c=", 0)) {
            if (0 === e[o + 1].lastIndexOf("b=AS:", 0)) {
              var a = e[o + 1];
              a = a.substr(a.indexOf(":") + 1), parseInt(a) < t.bandwidth_out && (t.bandwidth_out = a), o++
            }
            0 === e[o + 1].lastIndexOf("b=TIAS:", 0) && o++, r.push("b=AS:" + t.bandwidth_out), r.push("b=TIAS:" + 1e3 * t.bandwidth_out)
          } else 0 !== e[o].lastIndexOf("m=", 0) && "" !== e[o] || 0 !== e[o].lastIndexOf("m=video", 0) && (n = "notinvideo"); - 1 != navigator.userAgent.indexOf("Chrome") && 0 === e[o].lastIndexOf("a=sendonly", 0) && r.push("a=sendrecv")
      }
      return r
    }, VcRTCCall.prototype.makeCall = function(e, t) {
      var n = this;
      if ("UPDATING" != n.state && (n.state = "ACTIVE"), n.parent = e, n.bandwidth_in = n.parent.bandwidth_in, n.bandwidth_out = n.parent.bandwidth_out, n.parent.set_bandwidth_in < n.bandwidth_in && (n.bandwidth_in = n.parent.set_bandwidth_in), n.parent.set_bandwidth_out < n.bandwidth_out && (n.bandwidth_out = n.parent.set_bandwidth_out), n.presentation_in_main = n.parent.presentation_in_main, n.legacy_screenshare = null === n.parent.screenshare_api, n.firefox_ver = n.parent.firefox_ver, n.chrome_ver = n.parent.chrome_ver, n.safari_ver = n.parent.safari_ver, n.edge_ver = n.parent.edge_ver, n.h264_enabled = n.parent.h264_enabled, n.allow_1080p = n.parent.allow_1080p, n.allow_1080p && (n.force_hd = 1080), "presentation" == t ? (n.call_type = t, n.audio_source = !1, n.video_source = !1, n.recv_audio = !1) : "audioonly" == t ? (n.audio_source = n.parent.audio_source, n.recv_audio = n.parent.recv_audio, n.video_source = !1, n.recv_video = !1) : t && 0 === t.indexOf("recvonly") ? (n.audio_source = !1, n.video_source = !1, "recvonlyvideo" == t && (n.recv_audio = !1)) : "screen" == t ? (n.call_type = t, n.audio_source = !1, n.recv_audio = !1, n.recv_video = !1, n.bandwidth_out < 384 && (n.bandwidth_out = 384)) : (n.audio_source = n.parent.audio_source, n.video_source = n.parent.video_source, n.recv_audio = n.parent.recv_audio, n.recv_video = n.parent.recv_video), "screen" == t && n.chrome_ver >= 34 && !n.legacy_screenshare) {
        var r = window.setTimeout(function() {
          n.legacy_screenshare = !0, n.getMedia()
        }, 2e3);
        n.event_listener = function(e) {
          e.origin == window.location.origin && (e.data.type == n.parent.screenshare_api + "Done" ? n.getMedia(e.data.sourceId) : e.data.type == n.parent.screenshare_api + "Pending" ? window.clearTimeout(e.data.id) : "screenshareVersion" === e.data.type && (n.parent.screenshare_version = e.data.version, n.parent.onLog("screenshare version is " + n.parent.screenshare_version)))
        }, window.addEventListener("message", n.event_listener), window.setTimeout(function() {
          semver.gte(n.parent.screenshare_version, "1.0.7") && (n.parent.screenshare_api = "zjGetScreen"), window.postMessage({
            type: n.parent.screenshare_api,
            id: +r
          }, "*")
        }, 500), window.postMessage({
          type: "checkScreenshareVersion"
        }, "*")
      } else n.getMedia()
    }, VcRTCCall.prototype.sendRequest = function(e, t, n, r) {
      var o = this,
        a = !1 !== n,
        s = new XMLHttpRequest,
        i = "https://" + o.parent.node + "/api/services/" + o.parent.conference + "/participants/" + o.parent.uuid + "/" + e;
      if (o.parent.onLog("VcRTCCall.sendRequest", e, t, i), s.open("POST", i, a), n && (s.onload = n), void 0 === r && (r = 0), s.onerror = function() {
          ++r > 10 || !1 === n ? o.onError(o.parent.trans.ERROR_CONNECTING) : setTimeout(function() {
            o.sendRequest(e, t, n, r)
          }, 500 * r)
        }, s.ontimeout = function() {
          ++r > 10 || !1 === n ? o.onError(o.parent.trans.ERROR_CONNECTING) : setTimeout(function() {
            o.sendRequest(e, t, n, r)
          }, 500 * r)
        }, o.parent.token && s.setRequestHeader("token", o.parent.token), o.parent.basic_username && o.parent.basic_password && s.setRequestHeader("Authorization", "Basic " + Base64.encode(o.parent.basic_username + ":" + o.parent.basic_password)), t ? (s.setRequestHeader("Content-type", "application/json"), s.send(JSON.stringify(t))) : s.send(), !1 === n) {
        o.parent.onLog("VcRTCCall.sendRequest response", s.responseText);
        var c = {};
        try {
          c = JSON.parse(s.responseText)
        } catch (e) {
          c.reason = s.status + " " + s.statusText
        }
        return c.http_status = s.status, c
      }
    }, VcRTCCall.prototype.handleError = function(e) {
      var t = this;
      "DISCONNECTING" != t.state && (t.state = "DISCONNECTING", t.cleanup(), t.onError && ("presentation" == t.call_type || "screen" == t.call_type ? t.onError(e) : (e.hasOwnProperty("message") && (e = e.message), t.onError(t.parent.trans.ERROR_CALL_FAILED + e))))
    }, VcRTCCall.prototype.getMedia = function(e) {
      var t = this;
      if ("screen" == t.call_type && t.chrome_ver >= 34 && !t.legacy_screenshare) {
        if (!e) return t.handleError(t.parent.trans.ERROR_SCREENSHARE_CANCELLED);
        t.video_source = e
      }
      if (t.localStream) {
        window.URL || window.webkitURL || window.mozURL;
        return t.onSetup(t.localStream)
      }
      if (t.localStream || !1 === t.audio_source && !1 === t.video_source) t.onSetup();
      else {
        var n = !1 !== t.audio_source,
          r = {};
        "screen" == t.call_type ? (t.video_source ? (r.chromeMediaSource = "desktop", r.chromeMediaSourceId = t.video_source) : t.firefox_ver > 32 ? (r.mozMediaSource = t.call_type, r.mediaSource = t.call_type) : (r.chromeMediaSource = t.call_type, t.chrome_ver < 50 && (r.googLeakyBucket = !0)), r.maxWidth = t.parent.screenshare_width, r.maxHeight = t.parent.screenshare_height, r.maxFrameRate = t.parent.screenshare_fps.toString()) : t.firefox_ver > 43 || t.edge_ver > 10527 ? t.force_hd > 0 && -1 != navigator.userAgent.indexOf("OS X") ? (r.width = {
          min: 1280
        }, r.height = {
          min: 720
        }, 1080 == t.force_hd && (r.width.ideal = 1920, r.height.ideal = 1080)) : (r.width = {
          ideal: 1280
        }, r.height = {
          ideal: 720
        }, 1080 == t.force_hd && (r.width.max = 1920, r.height.max = 1080)) : 1080 == t.force_hd && (t.chrome_ver >= 34 || t.safari_ver > 10) ? (r.minWidth = "1920", r.minHeight = "1080", r.maxFrameRate = 20) : 720 == t.force_hd && (r.minWidth = "1280", r.minHeight = "720", r.maxFrameRate = 20), t.chrome_ver >= 38 && t.chrome_ver < 49 && t.bandwidth_out > 384 && (r.googHighBitrate = !0, t.bandwidth_out > 960 && (r.googVeryHighBitrate = !0)), t.audio_source && n && (n = t.chrome_ver > 49 ? {
          mandatory: {
            sourceId: t.audio_source
          },
          optional: []
        } : t.firefox_ver > 43 || t.edge_ver > 10527 ? {
          deviceId: t.audio_source
        } : {
          optional: [{
            sourceId: t.audio_source
          }]
        }), t.chrome_ver >= 38 && (n && !n.optional && (n = {
          optional: []
        }), n && (n.optional.push({
          googEchoCancellation: !0
        }), n.optional.push({
          googEchoCancellation2: !0
        }), n.optional.push({
          googAutoGainControl: !0
        }), n.optional.push({
          googAutoGainControl2: !0
        }), n.optional.push({
          googNoiseSuppression: !0
        }), n.optional.push({
          googNoiseSuppression2: !0
        }), n.optional.push({
          googHighpassFilter: !0
        })));
        var o = {
          audio: n
        };
        t.firefox_ver > 32 || t.edge_ver > 10527 ? o.video = r : o.video = {
          mandatory: r,
          optional: []
        }, t.video_source && "screen" != t.call_type && (t.chrome_ver > 49 ? o.video.mandatory.sourceId = t.video_source : t.firefox_ver > 43 || t.edge_ver > 10527 ? o.video.deviceId = t.video_source : o.video.optional = [{
          sourceId: t.video_source
        }]), t.chrome_ver > 49 && !t.call_type && t.parent.powerLineFrequency > 0 && o.video.optional.push({
          googPowerLineFrequency: t.parent.powerLineFrequency
        }), !1 === t.video_source && (o.video = !1), t.parent.onLog("constraints", o), t.parent.constraints = o, navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        try {
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia(o).then(function(e) {
            t.gumSuccess(e)
          }).catch(function(e) {
            t.gumError(e)
          });
          else {
            if (!navigator.getMedia) return t.handleError(t.parent.trans.ERROR_WEBRTC_SUPPORT);
            navigator.getMedia(o, function(e) {
              t.gumSuccess(e)
            }, function(e) {
              t.gumError(e)
            })
          }
        } catch (e) {
          t.gumError(e)
        }
      }
    }, VcRTCCall.prototype.gumSuccess = function(e) {
      var t = this;
      t.localStream = e;
      window.URL || window.webkitURL || window.mozURL;
      t.onSetup(e);
      var n = window.AudioContext || window.webkitAudioContext || void 0;
      if (!1 !== t.audio_source && void 0 !== n && n.createMediaStreamSource) {
        t.audioContext || (t.audioContext = new n), t.audioContext.resume && t.audioContext.resume(), t.analyser || (t.analyser = t.audioContext.createAnalyser()), t.microphone = t.audioContext.createMediaStreamSource(e), t.analyser.smoothingTimeConstant = .1, t.analyser.fftSize = 512, t.microphone.connect(t.analyser);
        var r = function() {
          var e = new Uint8Array(t.analyser.frequencyBinCount);
          t.analyser.getByteFrequencyData(e);
          for (var n = 0, r = e.length, o = 0; o < r; o++) n += e[o];
          n / r > 70 && null !== t.onMicActivity && t.onMicActivity()
        };
        t.audioRTCInterval = setInterval(r, 250)
      }
    }, VcRTCCall.prototype.gumError = function(e) {
      var t = this;
      if (t.parent.onLog("getUserMedia error", e), "screen" == t.call_type) t.cleanup(), t.onScreenshareMissing();
      else {
        if (1080 == t.force_hd) return t.force_hd = 720, t.getMedia();
        if (720 == t.force_hd) return t.force_hd = 0, t.getMedia();
        t.parent.event_error && t.parent.event_error(t.pc, t.parent.conference, "getUserMedia", e), t.handleError(t.parent.trans.ERROR_USER_MEDIA)
      }
    }, VcRTCCall.prototype.connect = function() {
      var e = this;
      if ("iceServers" in e.parent.pcConfig ? e.pc = new PeerConnection(e.parent.pcConfig, e.parent.pcConstraints) : e.pc = new PeerConnection(null), e.pc.onicecandidate = function(t) {
          e.pcIceCandidate(t)
        }, e.pc.onaddstream = function(t) {
          e.pcAddStream(t)
        }, e.pc.onremovestream = function(t) {
          e.pcRemoveStream(t)
        }, "screen" == e.call_type) {
        var t = function() {
          e.disconnect(), e.onDisconnect(e.parent.trans.ERROR_PRESENTATION_ENDED)
        };
        e.chrome_ver < 50 ? e.localStream.onended = t : e.localStream.oninactive = t
      }
      if (e.localStream)
        if (e.parent.pipEnable) {
          if (!MultiStreamsMixer) throw new Error('Please load "MultiStreamsMixer.js" before zjrtc.js.');
          e.localStream.width = 1280, e.localStream.height = 720, e.parent.mixer = new MultiStreamsMixer([e.localStream]), e.parent.mixer.frameInterval = 1, e.parent.mixer.startDrawingFrames(), e.pc.addStream(e.parent.mixer.getMixedStream())
        } else e.pc.addStream(e.localStream);
      e.parent.event_newPC && e.parent.event_newPC(e.pc, e.parent.uuid, e.parent.conference, e.call_type, function() {
        e.pcCreateOffer()
      }), e.pcCreateOffer()
    }, VcRTCCall.prototype.pcCreateOffer = function() {
      var e = this,
        t = {};
      t = e.chrome_ver > 49 || e.firefox_ver > 42 || e.edge_ver > 10527 ? {
        offerToReceiveAudio: e.recv_audio,
        offerToReceiveVideo: e.recv_video
      } : {
        mandatory: {
          OfferToReceiveAudio: e.recv_audio,
          OfferToReceiveVideo: e.recv_video
        }
      }, setTimeout(function() {
        "ACTIVE" == e.state && 0 === e.parent.safari_ver && (e.state = "CONNECTING", e.parent.onLog("Timed out gathering candidates", e.pc.localDescription.sdp), e.pcOfferCreated(e.pc.localDescription))
      }, 15e3), e.pc.createOffer(function(t) {
        e.pcOfferCreated(t)
      }, function(t) {
        e.parent.event_error && e.parent.event_error(e.pc, e.parent.conference, "createOffer", t, e.pc.localDescription), e.handleError(t)
      }, t)
    }, VcRTCCall.prototype.pcIceCandidate = function(e) {
      var t = this;
      t.parent.onLog("Ice Gathering State", t.pc.iceGatheringState), e.candidate ? (t.parent.onLog("Gathered ICE candidate", e.candidate.candidate), t.ice_candidates.push(e.candidate.candidate), t.parent.safari_ver > 0 && "ACTIVE" == t.state && -1 === t.pc.localDescription.sdp.search("m=video 9") && (t.state = "CONNECTING", t.parent.onLog("safari begining connecting ", {
        candidates: t.pc.localDescription.sdp
      }), setTimeout(function() {
        t.pcOfferCreated(t.pc.localDescription)
      }, 200))) : "complete" == t.pc.iceGatheringState && "ACTIVE" == t.state && (t.state = "CONNECTING", t.parent.onLog("Finished gathering candidates", {
        candidates: t.pc.localDescription.sdp
      }), setTimeout(function() {
        t.pcOfferCreated(t.pc.localDescription)
      }, 200))
    }, VcRTCCall.prototype.mutateOffer = function(e) {
      var t = this,
        n = e.sdp.split("\r\n");
      t.edge_ver > 10527 && (n = t.sdpAddCandidates(n));
      var r = (n = t.sdpAddPLI(n)).join("\r\n");
      return t.parent.onLog("Mutated offer", {
        offer: r
      }), new SessionDescription({
        type: "offer",
        sdp: r
      })
    }, VcRTCCall.prototype.mutateOfferSDP = function(e) {
      var t = this,
        n = e;
      return t.parent.andriod_ver > 0 && t.parent.qq_ver > 0 && (sdpTransform.defaultEnv.redEnable = !1), n = t.parent.forceCodec ? sdpTransform.uniformOfferSDPCodecsPayload(e, [t.parent.forceCodec]) : sdpTransform.uniformOfferSDPCodecsPayload(e, [CODEC_VP8, CODEC_H264_BASE, CODEC_VP9, CODEC_H264_PROFILE]), t.parent.firefox_ver > 0 && (n = sdpTransform.uniformOfferSDPCodecsPayload(e, [CODEC_VP8])), n = sdpTransform.alterAudioSampleRateAndChannels(n, 16e3, !1), t.parent.onLog("Mutated offer SDP", {
        offer: n
      }), n
    }, VcRTCCall.prototype.mutateAnswerSDP = function(e, t) {
      var n = this,
        r = e;
      return r = n.parent.isMobile ? sdpTransform.rearrangeAnswerPayloadOrder(r, [CODEC_H264_PROFILE, CODEC_VP8, CODEC_H264_BASE, CODEC_VP9]) : sdpTransform.rearrangeAnswerPayloadOrder(r, [CODEC_VP8, CODEC_H264_BASE, CODEC_VP9, CODEC_H264_PROFILE]), r = sdpTransform.alterAudioSampleRateAndChannels(r, 16e3, !1), n.parent.onLog("Mutated answer SDP", {
        answer: r
      }), r
    }, VcRTCCall.prototype.pcAddStream = function(e) {
      var t = this;
      if (t.parent.onLog("Stream added", e.stream.id), !1 === t.recv_audio && !1 === t.recv_video && t.localStream ? t.stream = t.localStream : t.stream = e.stream, "CONNECTED" == t.state) {
        window.URL || window.webkitURL || window.mozURL;
        if (t.parent.simulcast) {
          var n = _.find(t.parent.ssrcStreamUUIDs, function(t) {
            return -1 !== t.streamIds.indexOf(e.stream.id)
          });
          n ? (n.update ? t.onUpdateStream(t.stream, t.call_uuid, n.uuid, n.sender_ssrc) : t.onConnect(t.stream, t.call_uuid, n.uuid, n.sender_ssrc), t.parent.logVerbose(n.update ? "Update" : "Add", " stream " + n.uuid + " " + n.sender_ssrc + " " + t.stream), t.parent.ssrcUpdated(), t.parent.stats.recvStreams[n.sender_ssrc] && delete t.parent.stats.recvStreams[n.sender_ssrc]) : t.onConnect(t.stream, t.call_uuid)
        } else t.onConnect(t.stream, t.call_uuid)
      }
      t.state = "CONNECTED"
    }, VcRTCCall.prototype.pcRemoveStream = function(e) {
      var t = this;
      t.parent.onLog("Stream removed", e.stream.id);
      var n = _.find(t.parent.ssrcStreamUUIDs, function(t) {
        return -1 !== t.streamIds.indexOf(e.stream.id)
      });
      if (n && !n.update && t.parent.simulcast) {
        var r = n.uuid;
        t.parent.stats.recvStreams[n.sender_ssrc] && delete t.parent.stats.recvStreams[n.sender_ssrc], _.remove(t.parent.ssrcStreamUUIDs, {
          uuid: r
        }), delete t.parent.stats.uuid2Statistics[r], t.onRemoveStream(n ? n.uuid : "no_uuid"), t.parent.onLog("Remove streamid: " + e.stream.id + " owner uuid:" + r)
      }
      t.parent.simulcast && t.parent.ssrcUpdated()
    }, VcRTCCall.prototype.pcOfferCreated = function(e) {
      var t = this,
        n = e.sdp;
      t.parent.onLog("Created offer", {
        offer: e.sdp
      });
      var r = t.mutateOfferSDP(e.sdp);
      if (e = new SessionDescription({
          type: "offer",
          sdp: r
        }), t.pc.setLocalDescription(e, function() {
          t.parent.onLog("Local description active")
        }, function(n) {
          t.parent.event_error && t.parent.event_error(t.pc, t.parent.conference, "setLocalDescription", n, e), t.parent.onLog("Local description failed", n)
        }), "CONNECTING" == t.state && -1 == n.search("m=video 9 UDP/TLS/RTP/SAVPF") && -1 == n.search("m=audio 9 UDP/TLS/RTP/SAVPF")) {
        var o = {
          call_type: "WEBRTC",
          sdp: t.mutateOffer(e).sdp
        };
        t.parent.simulcast && (o.multistream = !0, o.clayout = t.parent.clayout), "screen" == t.call_type ? o.present = "send" : "presentation" == t.call_type ? o.present = "receive" : t.presentation_in_main && (o.present = "main"), t.sendRequest("calls", o, function(e) {
          t.processAnswer(e)
        })
      } else "CONNECTING" == t.state && t.handleError("通讯参数收集有误，请重试！")
    }, VcRTCCall.prototype.processAnswer = function(e) {
      var t, n = this;
      try {
        t = JSON.parse(e.target.responseText)
      } catch (t) {
        return n.handleError("Unexpected Response: " + e.target.status + " " + e.target.statusText)
      }
      if (200 != e.target.status) return n.handleError(t.result || t.reason);
      if (n.parent.onLog("Received answer: ", {
          answer: t.result.sdp
        }), n.call_uuid = t.result.call_uuid, "DISCONNECTING" != n.state) {
        var r = t.result.sdp.split("\r\n"),
          o = (r = n.sdpChangeBW(r)).join("\r\n");
        o = n.mutateAnswerSDP(o), n.pc.setRemoteDescription(new SessionDescription({
          type: "answer",
          sdp: o
        }), function() {
          n.parent.onLog("Remote description active"), n.edge_ver > 10527 && n.sdpIceCandidates(r), !1 === n.recv_audio && !1 === n.recv_video && n.chrome_ver > 47 && n.localStream && n.pcAddStream({
            stream: n.localStream
          }), n.sendRequest("calls/" + n.call_uuid + "/ack", null, function() {
            if (n.parent.ack = !0, "CONNECTED" == n.state) {
              window.URL || window.webkitURL || window.mozURL;
              n.onConnect(n.stream, n.call_uuid)
            }
            n.state = "CONNECTED"
          })
        }, function(e) {
          n.parent.event_error && n.parent.event_error(n.pc, n.parent.conference, "setRemoteDescription", e, o), n.parent.onLog("Remote description failed", e), n.handleError(e.message)
        })
      }
    }, VcRTCCall.prototype.sdpIceCandidates = function(e) {
      for (var t, n = this, r = -1, o = 0; o < e.length; o++) 0 === e[o].lastIndexOf("a=candidate", 0) ? (t = {
        sdpMLineIndex: r,
        candidate: e[o].substr(2)
      }, n.pc.addIceCandidate(t)) : 0 !== e[o].lastIndexOf("m=", 0) && "" !== e[o] || (r > -1 && (t = {
        sdpMLineIndex: r,
        candidate: "candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates"
      }, n.pc.addIceCandidate(t)), r++)
    }, VcRTCCall.prototype.remoteDisconnect = function(e) {
      var t = this;
      if ("DISCONNECTING" != t.state) {
        t.state = "DISCONNECTING", t.cleanup();
        var n;
        "presentation" == t.call_type ? (n = t.parent.trans.ERROR_DISCONNECTED_PRESENTATION, "reason" in e && (n += ": " + e.reason)) : "screen" == t.call_type ? (n = t.parent.trans.ERROR_DISCONNECTED_SCREENSHARE, "reason" in e && (n += ": " + e.reason)) : n = "reason" in e ? e.reason : t.parent.trans.ERROR_DISCONNECTED, t.onDisconnect(n)
      }
    }, VcRTCCall.prototype.muteAudio = function(e) {
      var t = this;
      if (e === t.mutedAudio) return t.mutedAudio;
      var n = [];
      t.pc ? n = t.pc.getLocalStreams() : t.localStream && (n = [t.localStream]);
      for (var r = 0; r < n.length; r++)
        for (var o = n[r].getAudioTracks(), a = 0; a < o.length; a++) o[a].enabled = t.mutedAudio;
      return t.mutedAudio = !t.mutedAudio, t.parent.event_event && t.parent.event_event(t.pc, t.parent.conference, t.mutedAudio ? "audioMute" : "audioUnmute"), t.mutedAudio
    }, VcRTCCall.prototype.update = function(e) {
      var t = this;
      if ("CONNECTED" == t.state) {
        if (t.state = "UPDATING", t.localStream) {
          t.localStream = void 0;
          for (var n = t.pc.getLocalStreams(), r = 0; r < n.length; r++) t.pc.removeStream(n[r])
        }
        for (var n = t.pc.getRemoteStreams(), r = 0; r < n.length; r++) t.pc.removeStream(n[r]);
        t.makeCall(t.parent, e)
      }
    }, VcRTCCall.prototype.muteVideo = function(e) {
      var t = this;
      if (e === t.mutedVideo) return t.mutedVideo;
      var n = [];
      t.pc ? n = t.pc.getLocalStreams() : t.localStream && (n = [t.localStream]);
      for (var r = 0; r < n.length; r++)
        for (var o = n[r].getVideoTracks(), a = 0; a < o.length; a++) o[a].enabled = t.mutedVideo;
      return t.mutedVideo = !t.mutedVideo, t.parent.event_event && t.parent.event_event(t.pc, t.parent.conference, t.mutedVideo ? "videoPause" : "videoResume"), t.mutedVideo
    }, VcRTCCall.prototype.holdresume = function(e) {
      var t = this;
      t.onHold = e, e = !e;
      for (var n = t.pc.getLocalStreams().concat(t.pc.getRemoteStreams()), r = 0; r < n.length; r++)
        for (var o = n[r].getAudioTracks().concat(n[r].getVideoTracks()), a = 0; a < o.length; a++) o[a].enabled = e;
      t.parent.event_event && t.parent.event_event(t.pc, t.parent.conference, t.onHold ? "fabricHold" : "fabricResume"), t.mutedAudio && (t.mutedAudio = !1, t.muteAudio()), t.mutedVideo && (t.mutedVideo = !1, t.muteVideo())
    }, VcRTCCall.prototype.disconnect = function(e, t) {
      var n = this;
      "DISCONNECTING" != n.state && (n.state = "DISCONNECTING", n.parent.onLog("Sending disconnect"), n.parent.token && n.sendRequest("calls/" + n.call_uuid + "/disconnect", {}, e)), t || n.cleanup()
    }, VcRTCCall.prototype.cleanup = function() {
      var e = this;
      if (e.audioContext && e.microphone && e.analyser) try {
        e.microphone.disconnect(e.analyser), e.audioRTCInterval && (clearInterval(e.audioRTCInterval), e.audioRTCInterval = null)
      } catch (e) {
        console.error("Unable to disconnect audio context", e)
      }
      if (e.analyser = null, e.microphone = null, e.audioContext && e.audioContext.close ? (e.audioContext.close(), e.audioContext = null) : e.audioContext && e.audioContext.suspend && e.audioContext.suspend(), e.event_listener && (window.removeEventListener("message", e.event_listener), e.event_listener = null), e.localStream) {
        e.parent.onLog("Releasing user media");
        for (var t = e.localStream.getTracks(), n = 0; n < t.length; n++) t[n].stop();
        e.localStream = null
      }
      e.pc && "closed" != e.pc.signalingState && e.pc.close(), e.parent.event_event && e.parent.event_event(e.pc, e.parent.conference, "fabricTerminated")
    }, VcJPEGPresentation.prototype.makeCall = function(e) {
      var t = this;
      t.parent = e, t.onSetup(t)
    }, VcJPEGPresentation.prototype.connect = function() {
      var e = this;
      e.state = "CONNECTING";
      var t = {
        call_type: "presentation"
      };
      e.sendRequest("participants/" + e.parent.uuid + "/calls", t, function(t) {
        e.processAnswer(t)
      })
    }, VcJPEGPresentation.prototype.processAnswer = function(e) {
      var t, n = this;
      try {
        t = JSON.parse(e.target.responseText)
      } catch (t) {
        return n.handleError("Unexpected Response: " + e.target.status + " " + e.target.statusText)
      }
      if (200 != e.target.status) return n.handleError(t.result || t.reason);
      n.state = "CONNECTED", n.onConnect({}), n.parent.onLog(t.result), n.call_uuid = t.result.call_uuid
    }, VcJPEGPresentation.prototype.sendRequest = function(e, t, n, r, o) {
      var a = this,
        s = !1 !== n,
        i = new XMLHttpRequest,
        c = "https://" + a.parent.node + "/api/services/" + a.parent.conference + "/" + e;
      if (a.parent.onLog("VcJPEGPresentation.sendRequest", e, t, r, c), i.open("POST", c, s), n && (i.onload = n), void 0 === o && (o = 0), i.onerror = function() {
          ++o > 10 || !1 === n ? a.onError(a.parent.trans.ERROR_CONNECTING) : setTimeout(function() {
            a.sendRequest(e, t, n, r, o)
          }, 500 * o)
        }, i.ontimeout = function() {
          ++o > 10 || !1 === n ? a.onError(a.parent.trans.ERROR_CONNECTING) : setTimeout(function() {
            a.sendRequest(e, t, n, r, o)
          }, 500 * o)
        }, a.parent.token && i.setRequestHeader("token", a.parent.token), a.parent.basic_username && a.parent.basic_password && i.setRequestHeader("Authorization", "Basic " + Base64.encode(a.parent.basic_username + ":" + a.parent.basic_password)), t ? (i.setRequestHeader("Content-type", "application/json"), i.send(JSON.stringify(t))) : r ? i.send(r) : i.send(), !1 === n) {
        a.parent.onLog("VcJPEGPresentation.sendRequest response", i.responseText);
        var u = {};
        try {
          u = JSON.parse(i.responseText)
        } catch (e) {
          u.reason = i.status + " " + i.statusText
        }
        return u.http_status = i.status, u
      }
    }, VcJPEGPresentation.prototype.sendPresentationImageFile = function(e) {
      var t = this;
      e && e.files.length || t.parent.onLog("VcJPEGPresentation.sendPresentationImageFile error:", "Element not given"), t.sendPresentationImage(e.files[0])
    }, VcJPEGPresentation.prototype.sendPresentationImage = function(e) {
      var t = this,
        n = new Blob([e], {
          type: "image/jpeg"
        }),
        r = new FormData;
      r.append("frame", n), t.parent.onLog("VcJPEGPresentation.sendPresentationImage", r), t.sendRequest("presentation", null, function() {}, r)
    }, VcJPEGPresentation.prototype.remoteDisconnect = function(e) {
      var t = this,
        n = t.parent.trans.ERROR_DISCONNECTED_SCREENSHARE;
      "reason" in e && (n = e.reason), t.onDisconnect(n)
    }, VcJPEGPresentation.prototype.disconnect = function() {
      var e = this;
      "DISCONNECTING" != e.state && (e.state = "DISCONNECTING", e.parent.token && (e.sendRequest("participants/" + e.parent.uuid + "/calls/" + e.call_uuid + "/disconnect", !1), e.onDisconnect(e.parent.trans.ERROR_PRESENTATION_ENDED)))
    }, VcRTC.prototype.makeCall = function(e, t, n, r, o, a) {
      var s = this;
      s.state = "ACTIVE", s.node = e, s.conference = t, s.display_name = n, s.call_type = o, s.flash = a, r && (s.bandwidth_in = parseInt(r), s.bandwidth_out = s.bandwidth_in), s.onLog("Simulcast: ", s.simulcast ? "enabled" : "disabled"), s.requestToken(function() {
        s.createEventSource(), "DISCONNECTING" != s.state && ("none" != s.call_type ? (s.flash = a, s.addCall(null, a)) : s.onSetup(null, s.pin_status, s.conference_extension))
      })
    }, VcRTC.prototype.sendRequest = function(e, t, n, r, o) {
      var a = this,
        s = !1 !== n;
      r = r || "POST";
      var i = new XMLHttpRequest,
        c = "https://" + a.node + "/api/services/" + a.conference + "/" + e;
      if (a.onLog("VcRTC.sendRequest", e, t, r, c), i.open(r, c, s), n && (i.onload = n), void 0 === o && (o = 0), i.onerror = function() {
          ++o > 10 || !1 === n ? (a.error = "Error sending request: " + e, a.onError(a.trans.ERROR_CONNECTING)) : setTimeout(function() {
            a.sendRequest(e, t, n, r, o)
          }, 500 * o)
        }, i.ontimeout = function() {
          ++o > 10 || !1 === n ? (a.error = "Timeout sending request: " + e, a.onError(a.trans.ERROR_CONNECTING)) : setTimeout(function() {
            a.sendRequest(e, t, n, r, o)
          }, 500 * o)
        }, a.token ? i.setRequestHeader("token", a.token) : null !== a.pin && i.setRequestHeader("pin", a.pin), null !== a.role && i.setRequestHeader("role", a.role), a.basic_username && a.basic_password && i.setRequestHeader("Authorization", "Basic " + Base64.encode(a.basic_username + ":" + a.basic_password)), t ? (i.setRequestHeader("Content-type", "application/json"), i.send(JSON.stringify(t))) : i.send(), !1 === n) {
        a.onLog("VcRTC.sendRequest response", i.responseText);
        var u = {};
        try {
          u = JSON.parse(i.responseText)
        } catch (e) {
          u.reason = i.status + " " + i.statusText
        }
        return u.http_status = i.status, u
      }
    }, VcRTC.prototype.requestToken = function(e) {
      var t = this;
      if (t.token) e && e();
      else {
        var n = {
          display_name: t.display_name,
          hideme: t.hideme ? "yes" : "",
          account: t.account
        };
        t.checkdup && (n.checkdup = t.checkdup), t.registration_token && (n.registration_token = t.registration_token), t.oneTimeToken && (n.token = t.oneTimeToken, t.oneTimeToken = null), t.conference_extension && (n.conference_extension = t.conference_extension), t.sendRequest("new_session", n, function(n) {
          t.tokenRequested(n, e)
        })
      }
    }, VcRTC.prototype.tokenRequested = function(e, t) {
      var n = this,
        r = {};
      try {
        (r = JSON.parse(e.target.responseText)).http_status = e.target.status
      } catch (t) {
        r.reason = e.target.status + " " + e.target.statusText
      }
      if (n.onLog("VcRTC.sessionRequested response", e.target.responseText), 200 == r.http_status) {
        switch (n.token = r.result.token, void 0 != r.result.conferenceName ? n.conferenceName = r.result.conferenceName : n.conferenceName = n.conference, r.result.service_type) {
          case "conference":
            n.isvmr = !1;
            break;
          case "lecture":
            n.isvmr = !0;
            break;
          case "gateway":
            break;
          default:
            throw new Error("unknown service_type, you need handle this service_type")
        }
        if (n.uuid = r.result.participant_uuid, n.role = r.result.role, n.version = r.result.version, n.chat_enabled = r.result.chat_enabled, n.fecc_enabled = r.result.fecc_enabled, n.rtmp_enabled = r.result.rtmp_enabled, n.rtsp_enabled = r.result.rtsp_enabled, n.analytics_enabled = r.result.analytics_enabled, n.allow_1080p = r.result.allow_1080p, n.service_type = r.result.service_type, n.current_service_type = r.result.current_service_type, n.remote_call_type = r.result.call_type, n.guestsCanPresent = r.result.guests_can_present, n.pcConfig.iceServers = [], n.default_stun && (n.firefox_ver > 43 || n.edge_ver > 10527 ? n.pcConfig.iceServers.push({
            urls: [n.default_stun]
          }) : n.pcConfig.iceServers.push({
            url: n.default_stun
          })), n.turn_server && (n.turn_server instanceof Array ? n.pcConfig.iceServers = n.pcConfig.iceServers.concat(n.turn_server) : n.pcConfig.iceServers.push(n.turn_server)), "stun" in r.result)
          for (var o = 0; o < r.result.stun.length; o++) n.pcConfig.iceServers.push(r.result.stun[o]);
        n.onLog("ICE Servers:", n.pcConfig), "bandwidth_in" in r.result && (n.set_bandwidth_in = r.result.bandwidth_in - 64, n.set_bandwidth_in < n.bandwidth_in && (n.bandwidth_in = n.set_bandwidth_in)), "bandwidth_out" in r.result && (n.set_bandwidth_out = r.result.bandwidth_out - 64, n.set_bandwidth_out < n.bandwidth_out && (n.bandwidth_out = n.set_bandwidth_out))
      } else {
        if (403 != r.http_status || "success" !== r.status) return n.handleError(r.result || r.reason);
        "pin" in r.result && ("none" == r.result.guest_pin ? n.pin_status = "optional" : n.pin_status = "required"), "conference_extension" in r.result && (n.conference_extension = r.result.conference_extension_type)
      }
      if (!n.token_refresh && n.token) {
        var a = r.result.expires || 120;
        n.token_refresh = setInterval(n.refreshToken.bind(this), 1e3 * a / 5), n.sendRequest("service_status", null, function(e) {
          if (n.onLog("service_status"), 200 == e.target.status && n.onConferenceUpdate) {
            var t = JSON.parse(e.target.responseText);
            n.onLog(t), n.onConferenceUpdate(t.result)
          }
        }, "GET")
      }
      t && t()
    }, VcRTC.prototype.refreshToken = function() {
      var e = this,
        t = {
          display_name: e.display_name
        };
      e.sendRequest("refresh_session", t, function(t) {
        e.onLog("VcRTC.refreshSession response", t.target.responseText);
        var n = {};
        try {
          n = JSON.parse(t.target.responseText)
        } catch (e) {
          n.reason = t.target.status + " " + t.target.statusText
        }
        if (200 != t.target.status) return e.handleError(n.result || n.reason);
        e.token = n.result.token, n.result.role != e.role && (e.role = n.result.role, e.onRoleUpdate && e.onRoleUpdate(e.role))
      })
    }, VcRTC.prototype.createEventSource = function() {
      function e(e) {
        return !e.display_name || "anonymous_living" === e.display_name || "anonymous_recorder" === e.display_name || 0 != e.display_name.indexOf("anonymous_")
      }
      var t = this;
      !t.event_source && t.token && (t.event_source = new EventSource("https://" + t.node + "/api/services/" + t.conference + "/events?token=" + t.token), t.event_source.addEventListener("presentation_start", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("presentation_start", n), n.status = "start", "start" == t.presentation_msg.status && t.presentation_msg.presenter_uuid == n.presenter_uuid || t.processPresentation(n), t.presentation_msg = n
      }, !1), t.event_source.addEventListener("presentation_stop", function(e) {
        var n = {
          status: "stop"
        };
        t.onLog("presentation_stop", n), "stop" != t.presentation_msg.status && t.processPresentation(n), t.presentation_msg = n
      }, !1), t.event_source.addEventListener("presentation_frame", function(e) {
        t.presentation_event_id = e.lastEventId, t.onPresentationReload && !t.onHold && t.onPresentationReload(t.getPresentationURL())
      }, !1), t.event_source.addEventListener("participant_create", function(n) {
        var r = JSON.parse(n.data);
        t.onLog("participant_create", r), t.rosterList[r.uuid] = r, t.simulcast && t.layout && !t.layout.used && t.updateSSRCListByLayout(t.layout), t.oldRosterList || (t.onParticipantCreate && e(r) && t.onParticipantCreate(r), t.onRosterList && t.onRosterList(t.getRosterList()))
      }, !1), t.event_source.addEventListener("participant_update", function(n) {
        var r = JSON.parse(n.data);
        t.onLog("participant_update", r), 0 === r.sender_ssrc && (r.sender_ssrc = t.rosterList[r.uuid].sender_ssrc), _.assign(t.rosterList[r.uuid], r), r.uuid == t.uuid && t.current_service_type && r.service_type && (t.current_service_type = r.service_type), t.oldRosterList || (t.onParticipantUpdate && e(r) && t.onParticipantUpdate(r), t.onRosterList && t.onRosterList(t.getRosterList()))
      }, !1), t.event_source.addEventListener("participant_delete", function(n) {
        var r = JSON.parse(n.data);
        t.onLog("participant_delete", r), r = t.rosterList[r.uuid], delete t.rosterList[r.uuid], t.simulcast && t.layout && !t.layout.used && t.updateSSRCListByLayout(t.layout), t.oldRosterList || (t.onParticipantDelete && e(r) && t.onParticipantDelete(r), t.onRosterList && t.onRosterList(t.getRosterList()))
      }, !1), t.event_source.addEventListener("message_received", function(e) {
        var n = JSON.parse(e.data);
        n.origin = t.rosterList[n.uuid] ? t.rosterList[n.uuid].overlay_text : n.origin + "（离线）", t.onLog("message_received", n), t.onChatMessage && t.onChatMessage(n)
      }, !1), t.event_source.addEventListener("participant_sync_begin", function(e) {
        t.onLog("participant_sync_begin"), t.oldRosterList || (t.oldRosterList = t.rosterList), t.rosterList = {}, t.onSyncBegin && t.onSyncBegin()
      }, !1), t.event_source.addEventListener("participant_sync_end", function(e) {
        t.onLog("participant_sync_end", t.rosterList);
        for (var n in t.rosterList) n in t.oldRosterList || !t.onParticipantCreate || t.rosterList[n].display_name && "anonymous_living" !== t.rosterList[n].display_name && "anonymous_recorder" !== t.rosterList[n].display_name && 0 == t.rosterList[n].display_name.indexOf("anonymous_") ? (!t.onParticipantUpdate || t.rosterList[n].display_name && "anonymous_living" !== t.rosterList[n].display_name && "anonymous_recorder" !== t.rosterList[n].display_name && 0 == t.rosterList[n].display_name.indexOf("anonymous_") || t.onParticipantUpdate(t.rosterList[n]), delete t.oldRosterList[n]) : t.onParticipantCreate(t.rosterList[n]);
        if (t.onParticipantDelete)
          for (n in t.oldRosterList) {
            var r = {
              uuid: n
            };
            t.onParticipantDelete(r)
          }
        delete t.oldRosterList, t.onRosterList && t.onRosterList(t.getRosterList()), t.onSyncEnd && t.onSyncEnd()
      }, !1), t.event_source.addEventListener("call_disconnected", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("call_disconnected", n), t.call && t.call.call_uuid == n.call_uuid ? t.call.remoteDisconnect(n) : t.presentation && t.presentation.call_uuid == n.call_uuid ? t.presentation.remoteDisconnect(n) : t.screenshare && t.screenshare.call_uuid == n.call_uuid && t.screenshare.remoteDisconnect(n)
      }, !1), t.event_source.addEventListener("disconnect", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("disconnect", n);
        var r = t.trans.ERROR_DISCONNECTED;
        "reason" in n && (r = n.reason), "DISCONNECTING" != t.state && (t.disconnect(), t.onDisconnect && t.onDisconnect(r))
      }, !1), t.event_source.addEventListener("service_update", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("service_update", n), t.onConferenceUpdate && t.onConferenceUpdate(n)
      }, !1), t.event_source.addEventListener("refer", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("refer", n), t.processRefer(n)
      }, !1), t.event_source.addEventListener("on_hold", function(e) {
        var n = JSON.parse(e.data);
        t.onLog("call_hold", n), t.holdresume(n.setting)
      }, !1), t.event_source.addEventListener("stage", function(e) {
        var n = JSON.parse(e.data);
        t.stage = n, t.onLog("stage", n), t.onStageUpdate && t.onStageUpdate(n)
      }, !1), t.event_source.addEventListener("layout", function(e) {
        var n = JSON.parse(e.data);
        t.layout = n, t.onLog("layout", n), !t.oldRosterList && t.simulcast && t.updateSSRCListByLayout(t.layout), t.video_source && t.chrome_ver > 0 && !t.simulcast && t.updateUploadOffer(), t.onLayoutUpdate && t.onLayoutUpdate(n)
      }, !1), t.event_source.addEventListener("refresh_session", function(e) {
        t.onLog("refresh_session"), t.refreshToken()
      }, !1), t.event_source.onopen = function(e) {
        t.onLog("event source open"), t.event_source_timeout = 10
      }, t.event_source.onerror = function(e) {
        if (t.onLog("event source error", e), "DISCONNECTING" != t.state) {
          if (t.onLog("reconnecting..."), t.event_source.close(), t.event_source = null, t.event_source_timeout > 15e3) return t.error = "Error connecting to EventSource", t.onError(t.trans.ERROR_CONNECTING);
          setTimeout(function() {
            t.createEventSource()
          }, t.event_source_timeout), t.event_source_timeout += 1e3
        }
      })
    }, VcRTC.prototype.setConferenceLock = function(e) {
      var t = this,
        n = e ? "lock" : "unlock";
      t.sendRequest(n)
    }, VcRTC.prototype.sendChatMessage = function(e) {
      var t = {
        type: "text/plain",
        payload: e
      };
      this.sendRequest("message", t)
    }, VcRTC.prototype.setMuteAllGuests = function(e) {
      var t = this,
        n = e ? "muteguests" : "unmuteguests";
      t.sendRequest(n)
    }, VcRTC.prototype.startConference = function() {
      this.sendRequest("start_service")
    }, VcRTC.prototype.dialOut = function(e, t, n, r, o) {
      var a = this;
      if (e) {
        var s = {
            destination: e,
            protocol: t || "sip"
          },
          i = !1;
        if ("string" == typeof o ? s.presentation_uri = o : null !== o && "object" == (void 0 === o ? "undefined" : _typeof(o)) && ("call_type" in o && (s.call_type = o.call_type), "dtmf_sequence" in o && (s.dtmf_sequence = o.dtmf_sequence), "presentation_uri" in o && (s.presentation_url = o.presentation_uri), "keep_conference_alive" in o && (s.keep_conference_alive = o.keep_conference_alive), "remote_display_name" in o && (s.remote_display_name = o.remote_display_name), "overlay_text" in o && (s.text = o.overlay_text), "prefer_ipv6" in o && o.prefer_ipv6 && (s.prefer_ipv6 = o.prefer_ipv6), "streaming" in o && (i = o.streaming)), ("rtmp" === t || i) && (s.streaming = "yes"), n && "GUEST" == n.toUpperCase() && (s.role = "GUEST"), !r) return a.sendRequest("dial", s, !1);
        a.sendRequest("dial", s, function(e) {
          var t;
          try {
            t = JSON.parse(e.target.responseText)
          } catch (t) {
            return a.handleError("Unexpected Response: " + e.target.status + " " + e.target.statusText)
          }
          if (200 != e.target.status) return a.handleError(t.result || t.reason);
          r(t)
        })
      }
    }, VcRTC.prototype.updateLayout = function(e, t, n, r) {
      var o = this;
      if (e || t) {
        var a = {
          layouts: [{
            audience: "hosts",
            actors: [],
            vad_backfill: !0,
            layout: e,
            plus_n: "off",
            actors_overlay_text: "auto"
          }, {
            audience: "",
            actors: [],
            vad_backfill: !0,
            layout: o.isvmr ? t : e,
            plus_n: "off",
            actors_overlay_text: "auto"
          }]
        };
        o.sendRequest("override_layout", a)
      }
    }, VcRTC.prototype.overlayTextUpdate = function(e, t) {
      var n = "participants/" + e + "/";
      n += "overlaytext";
      var r = {
        text: t
      };
      this.sendRequest(n, r)
    }, VcRTC.prototype.switchLiving = function(e, t, n, r) {
      var o = this,
        a = null;
      if (Object.keys(o.rosterList).map(function(e) {
          "anonymous_living" === o.rosterList[e].display_name && (a = o.rosterList[e])
        }), e) {
        if (a) return r ? r(new Error("already living")) : null;
        var s = "rtmp://" + o.live_recorder_server + "/living/" + t + "?entid=" + n + "&conferenceid=" + t,
          i = {
            remote_display_name: "anonymous_living"
          };
        o.dialOut(s, "rtmp", "GUEST", r, i)
      } else {
        if (!a) return r ? r(new Error("not found living")) : null;
        o.disconnectParticipant(a.uuid)
      }
    }, VcRTC.prototype.switchRecorder = function(e, t, n, r) {
      var o = this,
        a = null;
      if (Object.keys(o.rosterList).map(function(e) {
          "anonymous_recorder" === o.rosterList[e].display_name && (a = o.rosterList[e])
        }), e) {
        if (a) return r ? r(new Error("already living")) : null;
        var s = "rtmp://" + o.live_recorder_server + "/recorder/" + t + "?entid=" + n + "&conferenceid=" + t,
          i = {
            remote_display_name: "anonymous_recorder"
          };
        o.dialOut(s, "rtmp", "GUEST", r, i)
      } else {
        if (!a) return r ? r(new Error("not found living")) : null;
        o.disconnectParticipant(a.uuid)
      }
    }, VcRTC.prototype.disconnectAll = function() {
      this.sendRequest("disconnect")
    }, VcRTC.prototype.getParticipants = function(e) {
      this.sendRequest("participants", {}, e, "GET")
    }, VcRTC.prototype.setParticipantMute = function(e, t) {
      var n = this,
        r = "participants/" + e + "/";
      r += t ? "mute" : "unmute", n.sendRequest(r)
    }, VcRTC.prototype.setParticipantVideoMute = function(e, t) {
      var n = this,
        r = "participants/" + e + "/";
      r += t ? "hard_vmute" : "hard_uvmute", n.sendRequest(r)
    }, VcRTC.prototype.setParticipantRxPresentation = function(e, t) {
      var n = this,
        r = "participants/" + e + "/";
      r += t ? "allowrxpresentation" : "denyrxpresentation", n.sendRequest(r)
    }, VcRTC.prototype.unlockParticipant = function(e) {
      var t = "participants/" + e + "/unlock";
      this.sendRequest(t)
    }, VcRTC.prototype.holdParticipant = function(e) {
      var t = "participants/" + e + "/hold";
      this.sendRequest(t)
    }, VcRTC.prototype.resumeParticipant = function(e) {
      var t = "participants/" + e + "/resume";
      this.sendRequest(t)
    }, VcRTC.prototype.disconnectParticipant = function(e) {
      var t = "participants/" + e + "/disconnect";
      this.sendRequest(t)
    }, VcRTC.prototype.transferParticipant = function(e, t, n, r, o) {
      var a = this,
        s = "participants/" + e + "/transfer",
        i = {
          conference_alias: t
        };
      n && (i.role = n, r && (i.pin = r)), o ? a.sendRequest(s, i, function(e) {
        if (200 == e.target.status) {
          var t = JSON.parse(e.target.responseText);
          a.onLog(t), o(t.result)
        } else o(!1)
      }) : a.sendRequest(s, i)
    }, VcRTC.prototype.setParticipantSpotlight = function(e, t) {
      var n = this,
        r = "participants/" + e + "/";
      r += t ? "spotlighton" : "spotlightoff", n.sendRequest(r)
    }, VcRTC.prototype.overrideLayout = function(e) {
      this.sendRequest("override_layout", e)
    }, VcRTC.prototype.setParticipantText = function(e, t) {
      var n = "participants/" + e + "/overlaytext",
        r = {
          text: t
        };
      this.sendRequest(n, r)
    }, VcRTC.prototype.setRole = function(e, t) {
      var n = this;
      if ("chair" !== t && "guest" !== t) throw new Error("Role must be chair or guest");
      var r = "participants/" + e + "/role",
        o = {
          role: t
        };
      n.sendRequest(r, o, function() {})
    }, VcRTC.prototype.handleError = function(e) {
      var t = this;
      "DISCONNECTING" != t.state && (e.hasOwnProperty("message") ? t.error = e.message : t.error = e, t.disconnect(), t.onError && ("presentation" == t.call_type || "screen" == t.call_type ? t.onError(e) : (e.hasOwnProperty("message") && (e = e.message), t.onError(t.trans.ERROR_CALL_FAILED + e))))
    }, VcRTC.prototype.connect = function(e, t) {
      var n = this;
      n.onLog("connect role: " + n.role);
      var r = function() {
        "DISCONNECTING" != n.state && (n.call ? n.call.connect() : n.onConnect())
      };
      "none" != n.pin_status ? (n.pin_status = "none", n.pin = e || "none", n.requestToken(function() {
        n.createEventSource(), r()
      })) : t ? (n.conference_extension = t, n.requestToken(function() {
        n.createEventSource(), n.onSetup(null, n.pin_status)
      })) : r()
    }, VcRTC.prototype.addCall = function(e, t) {
      var n, r = this;
      return n = "screen_http" == e ? new VcJPEGPresentation : r.call && !e ? r.call : new VcRTCCall, r.screenshare || "screen" != e && "screen_http" != e ? r.presentation || "presentation" != e ? r.call ? r.call && r.call.makeCall(r, r.call_type) : (r.call = n, r.call.onSetup = function(e) {
        r.onSetup(e, r.pin_status, r.conference_extension)
      }, r.call.onConnect = function(e, t, n, o) {
        r.mutedAudio && r.muteAudio(r.mutedAudio), r.mutedVideo && r.muteVideo(r.mutedVideo), r.onConnect(e, n, o)
      }, r.call.onDisconnect = function(e) {
        r.call && (r.call = null, r.onCallDisconnect ? r.onCallDisconnect(e) : (r.disconnect(), r.onDisconnect(e)))
      }, r.call.onUpdateStream = function(e, t, n, o) {
        r.onUpdateStream ? r.onUpdateStream(e, n, o) : r.onLog("VcRTC: you should implement onUpdateStream to update stream in simulcast mode!!")
      }, r.call.onRemoveStream = function(e) {
        r.onRemoveStream ? r.onRemoveStream(e) : r.onLog("VcRTC: you should implement onRemoveStream to remove stream!!")
      }, r.call.onError = function(e) {
        r.call && "DISCONNECTING" != r.state && (r.call = null, r.error = e, r.onError(e))
      }, r.call.onMicActivity = function() {
        r.onMicActivity && r.onMicActivity()
      }, "screen" != r.call_type && "screen_http" != r.call_type || (r.call.onScreenshareMissing = function() {
        r.call = null, r.onScreenshareMissing ? r.onScreenshareMissing() : r.onError(r.trans.ERROR_SCREENSHARE_EXTENSION)
      }), "video" != r.call_type && "rtmp" != r.call_type || "audio" != r.remote_call_type || (r.call_type = "audioonly"), r.call.makeCall(r, r.call_type)) : (r.presentation = n, r.presentation.onSetup = function(e) {
        r.presentation.connect()
      }, r.presentation.onConnect = function(e) {
        r.onPresentationConnected && r.onPresentationConnected(e)
      }, r.presentation.onDisconnect = function(e) {
        r.presentation = null, r.onPresentationDisconnected && r.onPresentationDisconnected(e)
      }, r.presentation.onError = function(e) {
        r.presentation = null, r.onPresentationDisconnected && r.onPresentationDisconnected(e)
      }, r.presentation.makeCall(r, e)) : (r.screenshare = n, r.screenshare.onSetup = function(e) {
        r.screenshare.connect()
      }, r.screenshare.onConnect = function(e) {
        r.presentation_msg = {
          status: ""
        }, r.onScreenshareConnected && r.onScreenshareConnected(e)
      }, r.screenshare.onDisconnect = function(e) {
        r.screenshare = null, r.onScreenshareStopped && r.onScreenshareStopped(e)
      }, r.screenshare.onError = function(e) {
        r.screenshare = null, r.onScreenshareStopped && r.onScreenshareStopped(e)
      }, r.screenshare.onScreenshareMissing = function() {
        r.screenshare = null, r.onScreenshareMissing ? r.onScreenshareMissing() : r.onScreenshareStopped(r.trans.ERROR_SCREENSHARE_EXTENSION)
      }, r.screenshare.makeCall(r, e)), n
    }, VcRTC.prototype.disconnectCall = function(e) {
      var t = this;
      t.call && (t.call.disconnect(!1, e), e || (t.call = null, t.flash = void 0))
    }, VcRTC.prototype.present = function(e) {
      var t = this;
      !t.screenshare && e ? t.addCall(e, null) : t.screenshare && !e && (t.screenshare.disconnect(!1), t.screenshare = null)
    }, VcRTC.prototype.muteAudio = function(e) {
      var t = this;
      return t.call ? t.mutedAudio = t.call.muteAudio(e) : t.mutedAudio = void 0 !== e ? e : !t.mutedAudio, t.mutedAudio
    }, VcRTC.prototype.muteVideo = function(e) {
      var t = this;
      return t.call ? t.mutedVideo = t.call.muteVideo(e) : t.mutedVideo = void 0 !== e ? e : !t.mutedVideo, t.mutedVideo
    }, VcRTC.prototype.sendDTMFRequest = function(e, t) {
      var n = this;
      "call" == t ? n.sendRequest("participants/" + n.uuid + "/calls/" + n.call.call_uuid + "/dtmf", {
        digits: e
      }, function() {
        n.dtmfSent(t)
      }) : n.sendRequest("participants/" + t + "/dtmf", {
        digits: e
      }, function() {
        n.dtmfSent(t)
      })
    }, VcRTC.prototype.sendDTMF = function(e, t) {
      var n = this;
      if ("call" == (t = t || "call") && !n.call) return !1;
      void 0 === n.dtmf_queue[t] ? (n.dtmf_queue[t] = [], n.sendDTMFRequest(e, t)) : n.dtmf_queue[t].push(e)
    }, VcRTC.prototype.dtmfSent = function(e) {
      var t = this;
      0 === t.dtmf_queue[e].length ? delete t.dtmf_queue[e] : t.sendDTMFRequest(t.dtmf_queue[e].shift(), e)
    }, VcRTC.prototype.sendFECCRequest = function(e, t) {
      var n = this;
      "call" == t ? n.sendRequest("participants/" + n.uuid + "/calls/" + n.call.call_uuid + "/fecc", e, function() {
        n.feccSent(t)
      }) : n.sendRequest("participants/" + t + "/fecc", e, function() {
        n.feccSent(t)
      })
    }, VcRTC.prototype.sendFECC = function(e, t, n, r, o) {
      var a = this;
      if ("call" == (r = r || "call") && !a.call) return !1;
      data = {
        action: e,
        movement: [{
          axis: t,
          direction: n
        }],
        timeout: o
      }, void 0 === a.fecc_queue[r] ? (a.fecc_queue[r] = [], a.sendFECCRequest(data, r)) : a.fecc_queue[r].push(data)
    }, VcRTC.prototype.feccSent = function(e) {
      var t = this;
      0 === t.fecc_queue[e].length ? delete t.fecc_queue[e] : t.sendFECCRequest(t.fecc_queue[e].shift(), e)
    }, VcRTC.prototype.holdresume = function(e) {
      var t = this;
      t.call && t.call.holdresume(e), t.presentation && t.presentation.holdresume(e), t.screenshare && t.screenshare.holdresume(e), t.onHoldResume && t.onHoldResume(e)
    }, VcRTC.prototype.getRosterList = function() {
      var e = this,
        t = [];
      for (var n in e.rosterList) t.push(e.rosterList[n]);
      return t
    }, VcRTC.prototype.processRoster = function(e) {
      var t = this;
      t.onRosterList && t.onRosterList(e.roster)
    }, VcRTC.prototype.getPresentationURL = function() {
      var e = this,
        t = null;
      return e.presentation_event_id && (t = e.png_presentation ? "https://" + e.node + "/api/services/" + e.conference + "/presentation.png?id=" + e.presentation_event_id + "&token=" + e.token : "https://" + e.node + "/api/services/" + e.conference + "/presentation.jpeg?id=" + e.presentation_event_id + "&token=" + e.token), t
    }, VcRTC.prototype.getPresentation = function() {
      var e = this;
      if (e.presentation) {
        if (e.onPresentationConnected) {
          window.URL || window.webkitURL || window.mozURL;
          e.onPresentationConnected(e.presentation.stream)
        }
      } else e.addCall("presentation")
    }, VcRTC.prototype.stopPresentation = function() {
      var e = this;
      e.presentation && (e.presentation.disconnect(!1), e.presentation = null)
    }, VcRTC.prototype.processPresentation = function(e) {
      var t = this;
      if ("newframe" == e.status) t.onPresentationReload && !t.onHold && (t.onLog("VcRTC:processPresentation:newframe"), t.onPresentationReload(t.getPresentationURL()));
      else if (t.onPresentation)
        if ("start" == e.status) {
          var n;
          n = "" !== e.presenter_name ? e.presenter_name + " <" + e.presenter_uri + ">" : e.presenter_uri, t.onPresentation(!0, n)
        } else "stop" == e.status && t.onPresentation(!1, null)
    }, VcRTC.prototype.processRefer = function(e) {
      var t = this;
      t.disconnect(!0), t.state = "IDLE", t.onCallTransfer && t.onCallTransfer(e.alias), t.oneTimeToken = e.token, "DISCONNECTING" != t.state && setTimeout(function() {
        t.makeCall(t.node, e.alias, t.display_name, t.bandwidth_in, t.call_type, t.flash)
      }, 500)
    }, VcRTC.prototype.pipLocalStreamWithStream = function(e) {
      var t = this,
        n = t.call.localStream,
        r = n.getVideoTracks()[0].getSettings();
      if (e) {
        var o = e.getVideoTracks()[0].getSettings();
        e.fullcanvas = !0, e.width = o.width, e.height = o.height, n.width = 320, n.height = parseInt(n.width / r.aspectRatio), n.top = 10, n.left = o.width - n.width - 10, t.mixer.resetVideoStreams([e, n])
      } else n.width = r.width, n.height = r.height, delete n.top, delete n.left, t.mixer.resetVideoStreams([n])
    }, VcRTC.prototype.disconnect = function(e) {
      var t = this;
      if (t.state = "DISCONNECTING", t.onLog("Disconnecting..."), t.conference_extension = null, e ? t.disconnectCall(!0) : t.disconnectCall(), t.present(null), t.stopPresentation(), t.event_source && (t.event_source.close(), t.event_source = null), t.token_refresh && (clearInterval(t.token_refresh), t.token_refresh = null), t.token) {
        var n = t.error ? {
          reason: t.error
        } : null;
        t.sendRequest("end_session", n, !1), t.token = null
      }
    }, VcRTC.prototype.sendPresentationImage = function(e) {
      var t = this;
      t.screenshare && t.screenshare.sendPresentationImageFile && t.screenshare.sendPresentationImageFile(e)
    }, VcRTC.prototype.getMediaStatistics = function() {
      var e = this;
      return e.call && e.call.pc && e.call.pc.getStats && (e.chrome_ver > 0 ? e.call.pc.getStats(function(t) {
        e.stats.updateStats(t.result())
      }) : e.firefox_ver > 47 && e.call.pc.getStats(null).then(function(t) {
        e.stats.updateStatsFF(t)
      })), e.stats.getStats()
    }, VcRTC.prototype.updateUploadOffer = function() {
      var e = this;
      if (e.layout.view && e.constraints) {
        var t = quality2Bitrate(e, e.layout.quality);
        if (e.static.lastBw === t) return;
        e.addTask({
          mode: "bitrateUpdate",
          bw: t
        }), e.static.lastBw = t
      }
    }, VcRTC.prototype.updateSSRCListByLayout = function(e) {
      var t = this;
      _.intersection(Object.keys(t.rosterList), e.participants).length === e.participants.length ? (t.layout.used = !0, t.addTask({
        mode: "streamsUpdate",
        layout: e,
        rosterList: _.cloneDeep(t.rosterList)
      })) : t.logDebug("与会者列表不是layout超集，不处理layout:", t.rosterList, e.participants)
    }, VcRTC.prototype.modifySSRCsOfSDP = function(e, t) {
      var n = this;
      if (n.static.modifySsrcCount ? n.static.modifySsrcCount += 1 : n.static.modifySsrcCount = 1, !(n.call && n.call.pc && n.call.pc.remoteDescription && 0 !== n.call.pc.remoteDescription.sdp.length)) return n.onLog("update remote sdp - remoteDescription not ready yet"), void setTimeout(function() {
        n.modifySSRCsOfSDP(e, t)
      }, 200);
      if (!n.ack) return n.onLog("update remote sdp - ack not ready yet"), void setTimeout(function() {
        n.modifySSRCsOfSDP(e, t)
      }, 200);
      n.onLog("[modifySSRCsOfSDP]" + n.static.modifySsrcCount + " sync task " + e.mode + " " + (e.action ? e.action : "") + " begin");
      var r = setTimeout(function() {
          n.onLog("[modifySSRCsOfSDP]" + n.static.modifySsrcCount + " sync task " + e.mode + " " + (e.action ? e.action : "") + " timeout end"), n.onWarn(n.trans.ERROR_CPU_OVERLOAD, {
            lowCpu: !0
          }), t(), r = null
        }, 3e4),
        o = function() {
          r && (clearTimeout(r), n.onLog("[modifySSRCsOfSDP]" + n.static.modifySsrcCount + " sync task " + e.mode + " " + (e.action ? e.action : "") + " end"), t())
        };
      switch (e.mode) {
        case "bitrateUpdate":
          n.processUpdateBitrate(e, o);
          break;
        case "streamsUpdate":
          n.processStreamsUpdate(e, o);
          break;
        case "streamFix":
          n.processStreamFix(e, o);
          break;
        default:
          n.onLog("[modifySSRCsOfSDP] unknown sync task: " + e.mode), o()
      }
    }, VcRTC.prototype.updateBitrate = function(e, t) {
      var n = this,
        r = e.split("\r\n"),
        o = null;
      if (t)
        for (var a = 0; a < r.length; a++) {
          var s = r[a].match(/m=(\w*) (\d*)/);
          s && (o = s[1]), "video" === o && 0 === r[a].indexOf("b=AS:") && (r[a] = "b=AS:" + t, n.onLog("update bandwidth", t))
        }
      return r.join("\r\n")
    }, VcRTC.prototype.processUpdateBitrate = function(e, t) {
      var n = this,
        r = n.call.pc.localDescription.sdp,
        o = n.call.pc.remoteDescription.sdp,
        a = e.bw,
        s = n.updateBitrate(o, a);
      n.call.pc.setLocalDescription(new SessionDescription({
        type: "offer",
        sdp: r
      }), function() {
        n.call.pc.setRemoteDescription(new SessionDescription({
          type: "answer",
          sdp: s
        }), function() {
          n.logVerbose("[processUpdateBitrate] set Remote SDP successfull", s), t()
        }, function(e) {
          n.onError("[processUpdateBitrate] set remote failed"), t(e)
        })
      }, function(e) {
        n.onError("[processUpdateBitrate] Local description failed", e), t(e)
      })
    }, VcRTC.prototype.processStreamFix = function(e, t) {
      var n = this;
      n.static.fixCount ? n.static.fixCount += 1 : n.static.fixCount = 1;
      var r = n.call.pc.localDescription.sdp,
        o = n.call.pc.remoteDescription.sdp.split("\r\n"),
        a = _.map(n.rosterList, function(e) {
          return {
            uuid: e.uuid,
            sender_ssrc: e.sender_ssrc
          }
        }),
        s = [],
        i = null;
      if (!(_.find(a, {
          sender_ssrc: e.ssrc
        }) || _.find(a, {
          sender_ssrc: e.ssrc - 1
        }))) return n.onLog("[processStreamFix] failed: cannot find participant belongs to ssrc(" + e.ssrc + ") ."), void t();
      switch (e.action) {
        case "add":
          s = n.modifySdpSsrcsLines(o, [e.ssrc], [], a, n.ssrcStreamUUIDs);
          break;
        case "remove":
          s = n.modifySdpSsrcsLines(o, [], [e.ssrc], a, n.ssrcStreamUUIDs);
          break;
        default:
          n.onLog("[processStreamFix] unknown action ${option.action}", e.action)
      }
      i = function() {
        function r() {
          var a = n.call.pc.remoteDescription.sdp,
            s = !1;
          switch (e.action) {
            case "add":
              s = a.indexOf(e.ssrc) >= 0;
              break;
            case "remove":
              s = -1 === a.indexOf(e.ssrc)
          }
          s ? (n.logVerbose("[processStreamFix] wait " + .1 * o + " second to finish"), t()) : setTimeout(function() {
            o += 1, r()
          }, 100)
        }
        var o = 0;
        r()
      }, o = s, n.logVerbose("[processStreamFix]" + n.static.fixCount + ": localSdp " + r), n.call.pc.setLocalDescription(new SessionDescription({
        type: "offer",
        sdp: r
      }), function() {
        var e = 1,
          t = !1;
        n.logVerbose("[processStreamFix]" + n.static.fixCount + ": need update " + e + " ssrc."), n.ssrcUpdated = function() {
          n.logVerbose("[processStreamFix]" + n.static.fixCount + ": left " + --e + " ssrc be called."), 0 === e && t && i()
        }, n.logVerbose("[processStreamFix]" + n.static.fixCount + ": remoteSdp " + o.join("\r\n")), n.call.pc.setRemoteDescription(new SessionDescription({
          type: "answer",
          sdp: o.join("\r\n")
        }), function() {
          n.logVerbose("[processStreamFix]" + n.static.fixCount + " set Remote SDP successfull"), t = !0, 0 === e && t && i()
        }, function(e) {
          n.onError("[processStreamFix]" + n.static.fixCount + " set Remote failed"), i()
        })
      }, function(e) {
        n.event_error && n.event_error(n.pc, n.parent.conference, "setLocalDescription", e, sdp), n.onError("[processStreamFix]" + n.static.fixCount + " Local description failed", e), i()
      }), n.onLog("[processStreamFix]" + n.static.fixCount + " mode " + e.action + " : " + e.ssrc)
    }, VcRTC.prototype.processStreamsUpdate = function(e, t) {
      var n = this,
        r = e.layout,
        o = e.rosterList,
        a = !n.lastProcessLayout || n.lastProcessLayout.quality !== r.quality;
      if (n.static.streamsUpdateCount ? n.static.streamsUpdateCount += 1 : n.static.streamsUpdateCount = 1, n.lastProcessLayout && r) {
        var s = _.map(o, function(e) {
          return e.uuid
        });
        n.updateUuids = _.intersection(_.difference(n.lastProcessLayout.participants, n.lastProcessLayout.missing), _.difference(r.participants, r.missing)), n.updateUuids = _.intersection(s, n.updateUuids), n.logVerbose("Layout: update uuids:", n.lastProcessLayout, r, n.updateUuids)
      }
      n.lastProcessLayout = r;
      var i = virtualLayout(layoutString2num(r.view), layoutString2num(n.clayout)),
        c = _slicedToArray(i, 2),
        u = c[0],
        d = c[1],
        l = _.map(o, function(e) {
          return {
            uuid: e.uuid,
            sender_ssrc: e.sender_ssrc
          }
        }),
        p = _.filter(l, function(e) {
          return -1 != r.participants.indexOf(e.uuid) && !!e.sender_ssrc
        });
      p = _.cloneDeep(p);
      for (var f = u; f < Math.min(u + d, r.participants.length); f++) _.find(p, {
        uuid: r.participants[f]
      }).sender_ssrc += 1;
      p = _.filter(p, function(e) {
        var t = -1 !== r.missing.indexOf(e.uuid);
        return t && n.logVerbose("filter out missing ", e), !t
      });
      var m = _.map(p, "sender_ssrc"),
        v = _.difference(m, n.lastSsrcs),
        h = _.difference(n.lastSsrcs, m);
      if (0 !== v.length || 0 !== h.length || a) {
        n.logVerbose("qualityChanged", a, "addssrcs:", v, ". removeSsrcs", h, "currentSsrcs", m, "lastSsrc", n.lastSsrcs);
        var g = function() {
          function e() {
            var o = n.call.pc.remoteDescription.sdp,
              a = _.every(m, function(e) {
                return -1 !== o.indexOf(e)
              }),
              s = _.every(h, function(e) {
                return -1 === o.indexOf(e)
              });
            a && s ? (n.logVerbose("[processStreamsUpdate]" + n.static.streamsUpdateCount + " wait " + .1 * r + " second to finish"), t()) : setTimeout(function() {
              r += 1, e()
            }, 100)
          }
          var r = 0;
          e()
        };
        n.lastSsrcs = m;
        var C = (S = n.call.pc.remoteDescription.sdp).split("\r\n");
        C = n.modifySdpSsrcsLines(C, v, h, l, n.ssrcStreamUUIDs, e.layout), _.forEach(n.ssrcStreamUUIDs, function(e) {
          -1 !== _.indexOf(n.updateUuids, e.uuid) ? e.update = !0 : delete e.update
        });
        var S = n.call.pc.localDescription.sdp;
        n.logVerbose("[processStreamsUpdate]" + n.static.streamsUpdateCount + " localSdp " + S), n.call.pc.setLocalDescription(new SessionDescription({
          type: "offer",
          sdp: S
        }), function() {
          var e = v.length + h.length,
            t = !1;
          n.logVerbose("Layout: need update " + e + " ssrc."), n.ssrcUpdated = function() {
            n.logVerbose("Layout: left " + --e + " ssrc be called."), 0 === e && t && g()
          };
          var r = C.join("\r\n"),
            o = quality2Bitrate(n, n.layout.quality);
          r = n.updateBitrate(r, o), n.logVerbose("[processStreamsUpdate]" + n.static.streamsUpdateCount + " remoteSdp " + r), n.call.pc.setRemoteDescription(new SessionDescription({
            type: "answer",
            sdp: r
          }), function() {
            t = !0, n.logVerbose("[processStreamsUpdate]" + n.static.streamsUpdateCount + " set Remote SDP successfull"), 0 === e && t && g()
          }, function(e) {
            n.onError("[processStreamsUpdate]" + n.static.streamsUpdateCount + " set remote failed"), g()
          })
        }, function(e) {
          n.event_error && n.event_error(n.pc, n.parent.conference, "setLocalDescription", e, S), n.onError("[processStreamsUpdate]" + n.static.streamsUpdateCount + " Local description failed", e), g()
        })
      } else t()
    }, VcRTC.prototype.modifySdpSsrcsLines = function(e, t, n, r, o, a) {
      for (var s = this, i = [], c = 0; c < e.length; c++) _.some(n, function(t) {
        return 0 === e[c].indexOf("a=ssrc:" + t)
      }) || i.push(e[c]);
      e = i;
      for (var u = -1, c = 0; c < e.length; c++) 0 === e[c].indexOf("a=ssrc:") && (u = c);
      return u++, i = e.slice(0, u), _.forEach(t, function(e) {
        var t = UUID.create().toString(),
          n = UUID.create().toString(),
          a = _.find(r, {
            sender_ssrc: e
          }) || _.find(r, {
            sender_ssrc: e - 1
          });
        if (!a) throw s.onLog(r, " vs ", s.rosterList), new Error("[modifySdpSsrcsLines] unknown ssrc " + e);
        var c = a.uuid,
          u = _.find(o, {
            sender_ssrc: e
          });
        u ? (u.streamIds.length > 10 && u.streamIds.shift(), u.streamIds.push(n)) : o.push({
          sender_ssrc: e,
          uuid: c,
          streamIds: [n]
        });
        var d = UUID.create().toString();
        i.push("a=ssrc:" + e + " cname:" + t), i.push("a=ssrc:" + e + " msid:" + n + " " + d)
      }), i = i.concat(e.slice(u, e.length))
    }, VcRTC.prototype.addTask = function(e) {
      var t = this,
        n = t.modifySourcesQueue.length();
      return t.onLog("[addTask] add " + e.mode + " to queue, " + n + " left."), t.modifySourcesQueue.remove(function(n) {
        return t.onLog("[addTask] iterate type " + n.data.mode), "streamFix" !== e.mode && "streamsUpdate" === n.data.mode
      }), t.modifySourcesQueue.push(e), !0
    }, VcRTC.prototype.taskQueueIsIdle = function() {
      return this.modifySourcesQueue.idle()
    }, VcRTC.prototype.hasSsrc = function(e) {
      var t = this;
      return !!(t.call && t.call.pc && t.call.pc.remoteDescription) && (t.onLog("[hasSsrc] target " + e + ", remoteSDP " + t.call.pc.remoteDescription.sdp), t.call.pc.remoteDescription.sdp.indexOf(e) >= 0)
    }, VcRTC.prototype.uuid2overlayText = function(e) {
      var t = null,
        n = this.rosterList[e];
      return n && (t = n.overlay_text), t
    }, VcRTC.prototype.getVersion = function() {
      return version
    }, VcFlashEventsClass.prototype.onError = function() {
      var e = this;
      e.call.onError(e.call.trans.ERROR_DISCONNECTED)
    }, VcFlashEventsClass.prototype.onCallEnded = function() {}, VcFlashEventsClass.prototype.onMicActivity = function() {
      this.call.onMicActivity()
    }, VcFlashEventsClass.prototype.onCameraError = function() {
      var e = this;
      e.call.onError(e.call.trans.ERROR_USER_MEDIA)
    }, VcFlashEventsClass.prototype.onConnect = function(e) {
      this.call.onConnect(e)
    }, VcRTCStreamStatistics.prototype.getStats = function() {
      return this.info
    }, VcRTCStreamStatistics.prototype.updateBWEStats = function(e) {
      this.info["configured-bitrate"] = (e.stat("googTargetEncBitrate") / 1e3).toFixed(1) + "kbps"
    }, VcRTCStreamStatistics.prototype.updatePacketLossStats = function(e, t) {
      var n = this,
        r = t - n.lastLost,
        o = e - n.lastPackets;
      n.pctLost.push(100 * r / o), n.pctLost.length > 24 && n.pctLost.splice(0, 1);
      var a = n.pctLost.reduce(function(e, t) {
        return e + t
      }, 0);
      0 === n.pctLost.length ? n.info["percentage-lost"] = "0%" : n.info["percentage-lost"] = (a / n.pctLost.length).toFixed(1) + "%"
    }, VcRTCStreamStatistics.prototype.updateRxStats = function(e) {
      var t = this;
      if (t.info["packets-received"] = e.stat("packetsReceived"), t.info["packets-lost"] = e.stat("packetsLost"), t.info["percentage-lost"] = 0, t.info.bitrate = "unavailable", t.lastTimestamp > 0) {
        t.updatePacketLossStats(t.info["packets-received"], t.info["packets-lost"]);
        var n = Math.round(8 * (e.stat("bytesReceived") - t.lastBytes) / (e.timestamp - t.lastTimestamp));
        t.info.bitrate = n + "kbps"
      }
      e.stat("googFrameHeightReceived") && (t.info.resolution = e.stat("googFrameWidthReceived") + "x" + e.stat("googFrameHeightReceived")), e.stat("googCodecName") && (t.info.codec = e.stat("googCodecName")), e.stat("googDecodeMs") && (t.info["decode-delay"] = e.stat("googDecodeMs") + "ms"), t.lastTimestamp = e.timestamp, t.lastBytes = e.stat("bytesReceived"), t.lastPackets = t.info["packets-received"], t.lastLost = t.info["packets-lost"]
    }, VcRTCStreamStatistics.prototype.updateTxStats = function(e) {
      var t = this;
      if (t.info["packets-sent"] = e.stat("packetsSent"), t.info["packets-lost"] = e.stat("packetsLost"), t.info["percentage-lost"] = 0, t.info.bitrate = "unavailable", t.lastTimestamp > 0) {
        t.updatePacketLossStats(t.info["packets-sent"], t.info["packets-lost"]);
        var n = Math.round(8 * (e.stat("bytesSent") - t.lastBytes) / (e.timestamp - t.lastTimestamp));
        t.info.bitrate = n + "kbps"
      }
      e.stat("googFrameHeightSent") && (t.info.resolution = e.stat("googFrameWidthSent") + "x" + e.stat("googFrameHeightSent")), e.stat("googCodecName") && (t.info.codec = e.stat("googCodecName")), t.lastTimestamp = e.timestamp, t.lastBytes = e.stat("bytesSent"), t.lastPackets = t.info["packets-sent"], t.lastLost = t.info["packets-lost"], e.stat("googResidualEchoLikelihood") && (t.info["echo-level"] = e.stat("googResidualEchoLikelihood"))
    }, VcRTCStreamStatistics.prototype.updateRxStatsFF = function(e) {
      var t = this;
      if (t.info["packets-received"] = e.packetsReceived, t.info["packets-lost"] = e.packetsLost, t.info["percentage-lost"] = 0, t.info.bitrate = "unavailable", t.lastTimestamp > 0) {
        t.updatePacketLossStats(t.info["packets-received"], t.info["packets-lost"]);
        var n = Math.round(8 * (e.bytesReceived - t.lastBytes) / (e.timestamp - t.lastTimestamp));
        t.info.bitrate = n + "kbps"
      }
      t.lastTimestamp = e.timestamp, t.lastBytes = e.bytesReceived, t.lastPackets = t.info["packets-received"], t.lastLost = t.info["packets-lost"]
    }, VcRTCStreamStatistics.prototype.updateTxStatsFF = function(e) {
      var t = this;
      if (t.info["packets-sent"] = e.packetsSent, t.info["packets-lost"] = "unavailable", t.info.bitrate = "unavailable", t.lastTimestamp > 0) {
        var n = Math.round(8 * (e.bytesSent - t.lastBytes) / (e.timestamp - t.lastTimestamp));
        t.info.bitrate = n + "kbps"
      }
      t.lastTimestamp = e.timestamp, t.lastBytes = e.bytesSent, t.lastPackets = t.info["packets-sent"]
    }, VcRTCStatus.prototype.updateStatus = function(e) {
      var t = this,
        n = e.stat("framesDecoded"),
        r = e.stat("packetsReceived"),
        o = parseInt(e.stat("ssrc"));
      t.lastFrameDecoded == n && t.lastPacketsReceived < r ? t.failedCount++ : t.failedCount = 0, t.lastFrameDecoded = n, t.lastPacketsReceived = r, t.ssrc = o
    }, VcRTCStatistics.prototype.updateRecvStatus = function(e) {
      for (var t = this, n = 0; n < e.length; ++n)
        if (t.statIsOfType(e[n], "video", "recv")) {
          var r = e[n].stat("ssrc");
          t.recvStreams[r] || (t.recvStreams[r] = new VcRTCStatus), t.recvStreams[r].updateStatus(e[n])
        } t.restartFailedStreams(e)
    }, VcRTCStatistics.prototype.restartFailedStreams = function(e) {
      var t = this;
      t.parent.static.restartCount || (t.parent.static.restartCount = 0);
      for (var n in t.recvStreams) {
        var r = t.recvStreams[n];
        r.failedCount > 10 && t.parent.taskQueueIsIdle() && t.parent.hasSsrc(r.ssrc) && (console.log("[restartFailedStreams] ssrc:" + r.ssrc + " stream restart"), t.parent.static.restartCount++, t.parent.addTask({
          mode: "streamFix",
          action: "remove",
          ssrc: r.ssrc
        }), t.parent.addTask({
          mode: "streamFix",
          action: "add",
          ssrc: r.ssrc
        }), t.recvStreams[n].failedCount = 0)
      }
    }, VcRTCStatistics.prototype.getSsrcFromStat = function(e) {
      var t = e.id.match(/ssrc_(\d+)_/);
      return t ? t[1] : null
    }, VcRTCStatistics.prototype.updateStats = function(e) {
      for (var t = this, n = 0; n < e.length; ++n)
        if (t.statIsOfType(e[n], "audio", "send")) t.audio_out.updateTxStats(e[n]);
        else if (t.statIsOfType(e[n], "audio", "recv")) t.audio_in.updateRxStats(e[n]);
      else if (t.statIsOfType(e[n], "video", "send")) t.video_out.updateTxStats(e[n]);
      else if (t.statIsBandwidthEstimation(e[n])) t.video_out.updateBWEStats(e[n]);
      else if (t.statIsOfType(e[n], "video", "recv"))
        if (t.parent.simulcast) {
          var r = t.getSsrcFromStat(e[n]),
            o = _.find(t.parent.ssrcStreamUUIDs, {
              sender_ssrc: parseInt(r)
            });
          o && o.uuid && (t.uuid2Statistics[o.uuid] || (t.uuid2Statistics[o.uuid] = {
            videoIn: new VcRTCStreamStatistics
          }), t.uuid2Statistics[o.uuid].videoIn.updateRxStats(e[n]))
        } else t.video_in.updateRxStats(e[n])
    }, VcRTCStatistics.prototype.updateStatsFF = function(e) {
      var t = this;
      for (var n in e) 0 === n.indexOf("outbound_rtp_audio") ? t.audio_out.updateTxStatsFF(e[n]) : 0 === n.indexOf("inbound_rtp_audio") ? t.audio_in.updateRxStatsFF(e[n]) : 0 === n.indexOf("outbound_rtp_video") ? t.video_out.updateTxStatsFF(e[n]) : 0 === n.indexOf("inbound_rtp_video") && t.video_in.updateRxStatsFF(e[n])
    }, VcRTCStatistics.prototype.statIsBandwidthEstimation = function(e) {
      return "VideoBwe" == e.type
    }, VcRTCStatistics.prototype.statIsOfType = function(e, t, n) {
      var r = e.stat("transportId");
      return "ssrc" == e.type && r && -1 != r.search(t) && -1 != e.id.search(n)
    }, VcRTCStatistics.prototype.getStats = function() {
      var e = this;
      if (e.parent.firefox_ver > 0 && e.parent.firefox_ver < 47) return {};
      if (null === e.audio_in.lastTimestamp) return {};
      var t = {
        outgoing: {
          audio: e.audio_out.getStats(),
          video: e.video_out.getStats()
        },
        incoming: {
          audio: e.audio_in.getStats(),
          video: e.video_in.getStats()
        }
      };
      if (e.parent.simulcast) {
        t[e.parent.uuid] = {
          audioOut: e.audio_out.getStats(),
          videoOut: e.video_out.getStats(),
          audioIn: e.audio_in.getStats()
        };
        for (var n in e.uuid2Statistics) t[n] = {
          videoIn: e.uuid2Statistics[n].videoIn.getStats()
        }
      }
      return t
    }, window.VcRTC = VcRTC;

  }, {
    "./MultiStreamsMixer": 2,
    "./sdp-transform": 8,
    "async": 4,
    "lodash": 5,
    "semver": 6,
    "uuid-js": 7
  }],
  4: [function(require, module, exports) {
    (function(process, global) {
      ! function(n, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.async = n.async || {})
      }(this, function(n) {
        "use strict";

        function t(n, t) {
          t |= 0;
          for (var e = Math.max(n.length - t, 0), r = Array(e), u = 0; u < e; u++) r[u] = n[t + u];
          return r
        }

        function e(n) {
          var t = typeof n;
          return null != n && ("object" == t || "function" == t)
        }

        function r(n) {
          setTimeout(n, 0)
        }

        function u(n) {
          return function(e) {
            var r = t(arguments, 1);
            n(function() {
              e.apply(null, r)
            })
          }
        }

        function o(n) {
          return tt(function(t, r) {
            var u;
            try {
              u = n.apply(this, t)
            } catch (n) {
              return r(n)
            }
            e(u) && "function" == typeof u.then ? u.then(function(n) {
              i(r, null, n)
            }, function(n) {
              i(r, n.message ? n : new Error(n))
            }) : r(null, u)
          })
        }

        function i(n, t, e) {
          try {
            n(t, e)
          } catch (n) {
            ut(c, n)
          }
        }

        function c(n) {
          throw n
        }

        function f(n) {
          return ot && "AsyncFunction" === n[Symbol.toStringTag]
        }

        function a(n) {
          return f(n) ? o(n) : n
        }

        function l(n) {
          return function(e) {
            var r = t(arguments, 1),
              u = tt(function(t, r) {
                var u = this;
                return n(e, function(n, e) {
                  a(n).apply(u, t.concat(e))
                }, r)
              });
            return r.length ? u.apply(this, r) : u
          }
        }

        function s(n) {
          var t = st.call(n, ht),
            e = n[ht];
          try {
            n[ht] = void 0;
            var r = !0
          } catch (n) {}
          var u = pt.call(n);
          return r && (t ? n[ht] = e : delete n[ht]), u
        }

        function p(n) {
          return yt.call(n)
        }

        function h(n) {
          return null == n ? void 0 === n ? dt : vt : (n = Object(n), mt && mt in n ? s(n) : p(n))
        }

        function y(n) {
          if (!e(n)) return !1;
          var t = h(n);
          return t == bt || t == jt || t == gt || t == St
        }

        function v(n) {
          return "number" == typeof n && n > -1 && n % 1 == 0 && n <= kt
        }

        function d(n) {
          return null != n && v(n.length) && !y(n)
        }

        function m() {}

        function g(n) {
          return function() {
            if (null !== n) {
              var t = n;
              n = null, t.apply(this, arguments)
            }
          }
        }

        function b(n, t) {
          for (var e = -1, r = Array(n); ++e < n;) r[e] = t(e);
          return r
        }

        function j(n) {
          return null != n && "object" == typeof n
        }

        function S(n) {
          return j(n) && h(n) == xt
        }

        function k(n, t) {
          return !!(t = null == t ? zt : t) && ("number" == typeof n || Pt.test(n)) && n > -1 && n % 1 == 0 && n < t
        }

        function L(n, t) {
          var e = Ft(n),
            r = !e && Bt(n),
            u = !e && !r && Ut(n),
            o = !e && !r && !u && Wt(n),
            i = e || r || u || o,
            c = i ? b(n.length, String) : [],
            f = c.length;
          for (var a in n) !t && !Nt.call(n, a) || i && ("length" == a || u && ("offset" == a || "parent" == a) || o && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || k(a, f)) || c.push(a);
          return c
        }

        function O(n) {
          var t = n && n.constructor;
          return n === ("function" == typeof t && t.prototype || Qt)
        }

        function w(n) {
          if (!O(n)) return Gt(n);
          var t = [];
          for (var e in Object(n)) Ht.call(n, e) && "constructor" != e && t.push(e);
          return t
        }

        function x(n) {
          return d(n) ? L(n) : w(n)
        }

        function E(n) {
          var t = -1,
            e = n.length;
          return function() {
            return ++t < e ? {
              value: n[t],
              key: t
            } : null
          }
        }

        function A(n) {
          var t = -1;
          return function() {
            var e = n.next();
            return e.done ? null : (t++, {
              value: e.value,
              key: t
            })
          }
        }

        function T(n) {
          var t = x(n),
            e = -1,
            r = t.length;
          return function() {
            var u = t[++e];
            return e < r ? {
              value: n[u],
              key: u
            } : null
          }
        }

        function B(n) {
          if (d(n)) return E(n);
          var t = wt(n);
          return t ? A(t) : T(n)
        }

        function F(n) {
          return function() {
            if (null === n) throw new Error("Callback was already called.");
            var t = n;
            n = null, t.apply(this, arguments)
          }
        }

        function I(n) {
          return function(t, e, r) {
            function u(n, t) {
              if (f -= 1, n) c = !0, r(n);
              else {
                if (t === Lt || c && f <= 0) return c = !0, r(null);
                o()
              }
            }

            function o() {
              for (; f < n && !c;) {
                var t = i();
                if (null === t) return c = !0, void(f <= 0 && r(null));
                f += 1, e(t.value, t.key, F(u))
              }
            }
            if (r = g(r || m), n <= 0 || !t) return r(null);
            var i = B(t),
              c = !1,
              f = 0;
            o()
          }
        }

        function _(n, t, e, r) {
          I(t)(n, a(e), r)
        }

        function M(n, t) {
          return function(e, r, u) {
            return n(e, t, r, u)
          }
        }

        function U(n, t, e) {
          e = g(e || m);
          var r = 0,
            u = 0,
            o = n.length;
          for (0 === o && e(null); r < o; r++) t(n[r], r, F(function(n, t) {
            n ? e(n) : ++u !== o && t !== Lt || e(null)
          }))
        }

        function z(n) {
          return function(t, e, r) {
            return n(Kt, t, a(e), r)
          }
        }

        function P(n, t, e, r) {
          r = r || m, t = t || [];
          var u = [],
            o = 0,
            i = a(e);
          n(t, function(n, t, e) {
            var r = o++;
            i(n, function(n, t) {
              u[r] = t, e(n)
            })
          }, function(n) {
            r(n, u)
          })
        }

        function V(n) {
          return function(t, e, r, u) {
            return n(I(e), t, a(r), u)
          }
        }

        function q(n, t) {
          for (var e = -1, r = null == n ? 0 : n.length; ++e < r && !1 !== t(n[e], e, n););
          return n
        }

        function D(n, t) {
          return n && re(n, t, x)
        }

        function R(n, t, e, r) {
          for (var u = n.length, o = e + (r ? 1 : -1); r ? o-- : ++o < u;)
            if (t(n[o], o, n)) return o;
          return -1
        }

        function C(n) {
          return n !== n
        }

        function $(n, t, e) {
          for (var r = e - 1, u = n.length; ++r < u;)
            if (n[r] === t) return r;
          return -1
        }

        function W(n, t, e) {
          return t === t ? $(n, t, e) : R(n, C, e)
        }

        function N(n, t) {
          for (var e = -1, r = null == n ? 0 : n.length, u = Array(r); ++e < r;) u[e] = t(n[e], e, n);
          return u
        }

        function Q(n) {
          return "symbol" == typeof n || j(n) && h(n) == oe
        }

        function G(n) {
          if ("string" == typeof n) return n;
          if (Ft(n)) return N(n, G) + "";
          if (Q(n)) return fe ? fe.call(n) : "";
          var t = n + "";
          return "0" == t && 1 / n == -ie ? "-0" : t
        }

        function H(n, t, e) {
          var r = -1,
            u = n.length;
          t < 0 && (t = -t > u ? 0 : u + t), (e = e > u ? u : e) < 0 && (e += u), u = t > e ? 0 : e - t >>> 0, t >>>= 0;
          for (var o = Array(u); ++r < u;) o[r] = n[r + t];
          return o
        }

        function J(n, t, e) {
          var r = n.length;
          return e = void 0 === e ? r : e, !t && e >= r ? n : H(n, t, e)
        }

        function K(n, t) {
          for (var e = n.length; e-- && W(t, n[e], 0) > -1;);
          return e
        }

        function X(n, t) {
          for (var e = -1, r = n.length; ++e < r && W(t, n[e], 0) > -1;);
          return e
        }

        function Y(n) {
          return n.split("")
        }

        function Z(n) {
          return ae.test(n)
        }

        function nn(n) {
          return n.match(me) || []
        }

        function tn(n) {
          return Z(n) ? nn(n) : Y(n)
        }

        function en(n) {
          return null == n ? "" : G(n)
        }

        function rn(n, t, e) {
          if ((n = en(n)) && (e || void 0 === t)) return n.replace(ge, "");
          if (!n || !(t = G(t))) return n;
          var r = tn(n),
            u = tn(t);
          return J(r, X(r, u), K(r, u) + 1).join("")
        }

        function un(n) {
          return n = n.toString().replace(ke, ""), n = n.match(be)[2].replace(" ", ""), n = n ? n.split(je) : [], n = n.map(function(n) {
            return rn(n.replace(Se, ""))
          })
        }

        function on(n, t) {
          var e = {};
          D(n, function(n, t) {
            function r(t, e) {
              var r = N(u, function(n) {
                return t[n]
              });
              r.push(e), a(n).apply(null, r)
            }
            var u, o = f(n),
              i = !o && 1 === n.length || o && 0 === n.length;
            if (Ft(n)) u = n.slice(0, -1), n = n[n.length - 1], e[t] = u.concat(u.length > 0 ? r : n);
            else if (i) e[t] = n;
            else {
              if (u = un(n), 0 === n.length && !o && 0 === u.length) throw new Error("autoInject task functions require explicit parameters.");
              o || u.pop(), e[t] = u.concat(r)
            }
          }), ue(e, t)
        }

        function cn() {
          this.head = this.tail = null, this.length = 0
        }

        function fn(n, t) {
          n.length = 1, n.head = n.tail = t
        }

        function an(n, t, e) {
          function r(n, t, e) {
            if (null != e && "function" != typeof e) throw new Error("task callback must be a function");
            if (l.started = !0, Ft(n) || (n = [n]), 0 === n.length && l.idle()) return ut(function() {
              l.drain()
            });
            for (var r = 0, u = n.length; r < u; r++) {
              var o = {
                data: n[r],
                callback: e || m
              };
              t ? l._tasks.unshift(o) : l._tasks.push(o)
            }
            ut(l.process)
          }

          function u(n) {
            return function(t) {
              i -= 1;
              for (var e = 0, r = n.length; e < r; e++) {
                var u = n[e],
                  o = W(c, u, 0);
                o >= 0 && c.splice(o, 1), u.callback.apply(u, arguments), null != t && l.error(t, u.data)
              }
              i <= l.concurrency - l.buffer && l.unsaturated(), l.idle() && l.drain(), l.process()
            }
          }
          if (null == t) t = 1;
          else if (0 === t) throw new Error("Concurrency must not be zero");
          var o = a(n),
            i = 0,
            c = [],
            f = !1,
            l = {
              _tasks: new cn,
              concurrency: t,
              payload: e,
              saturated: m,
              unsaturated: m,
              buffer: t / 4,
              empty: m,
              drain: m,
              error: m,
              started: !1,
              paused: !1,
              push: function(n, t) {
                r(n, !1, t)
              },
              kill: function() {
                l.drain = m, l._tasks.empty()
              },
              unshift: function(n, t) {
                r(n, !0, t)
              },
              remove: function(n) {
                l._tasks.remove(n)
              },
              process: function() {
                if (!f) {
                  for (f = !0; !l.paused && i < l.concurrency && l._tasks.length;) {
                    var n = [],
                      t = [],
                      e = l._tasks.length;
                    l.payload && (e = Math.min(e, l.payload));
                    for (var r = 0; r < e; r++) {
                      var a = l._tasks.shift();
                      n.push(a), c.push(a), t.push(a.data)
                    }
                    i += 1, 0 === l._tasks.length && l.empty(), i === l.concurrency && l.saturated();
                    var s = F(u(n));
                    o(t, s)
                  }
                  f = !1
                }
              },
              length: function() {
                return l._tasks.length
              },
              running: function() {
                return i
              },
              workersList: function() {
                return c
              },
              idle: function() {
                return l._tasks.length + i === 0
              },
              pause: function() {
                l.paused = !0
              },
              resume: function() {
                !1 !== l.paused && (l.paused = !1, ut(l.process))
              }
            };
          return l
        }

        function ln(n, t) {
          return an(n, 1, t)
        }

        function sn(n, t, e, r) {
          r = g(r || m);
          var u = a(e);
          Oe(n, function(n, e, r) {
            u(t, n, function(n, e) {
              t = e, r(n)
            })
          }, function(n) {
            r(n, t)
          })
        }

        function pn() {
          var n = N(arguments, a);
          return function() {
            var e = t(arguments),
              r = this,
              u = e[e.length - 1];
            "function" == typeof u ? e.pop() : u = m, sn(n, e, function(n, e, u) {
              e.apply(r, n.concat(function(n) {
                var e = t(arguments, 1);
                u(n, e)
              }))
            }, function(n, t) {
              u.apply(r, [n].concat(t))
            })
          }
        }

        function hn(n) {
          return n
        }

        function yn(n, t) {
          return function(e, r, u, o) {
            o = o || m;
            var i, c = !1;
            e(r, function(e, r, o) {
              u(e, function(r, u) {
                r ? o(r) : n(u) && !i ? (c = !0, i = t(!0, e), o(null, Lt)) : o()
              })
            }, function(n) {
              n ? o(n) : o(null, c ? i : t(!1))
            })
          }
        }

        function vn(n, t) {
          return t
        }

        function dn(n) {
          return function(e) {
            var r = t(arguments, 1);
            r.push(function(e) {
              var r = t(arguments, 1);
              "object" == typeof console && (e ? console.error && console.error(e) : console[n] && q(r, function(t) {
                console[n](t)
              }))
            }), a(e).apply(null, r)
          }
        }

        function mn(n, e, r) {
          function u(n) {
            if (n) return r(n);
            var e = t(arguments, 1);
            e.push(o), c.apply(this, e)
          }

          function o(n, t) {
            return n ? r(n) : t ? void i(u) : r(null)
          }
          r = F(r || m);
          var i = a(n),
            c = a(e);
          o(null, !0)
        }

        function gn(n, e, r) {
          r = F(r || m);
          var u = a(n),
            o = function(n) {
              if (n) return r(n);
              var i = t(arguments, 1);
              if (e.apply(this, i)) return u(o);
              r.apply(null, [null].concat(i))
            };
          u(o)
        }

        function bn(n, t, e) {
          gn(n, function() {
            return !t.apply(this, arguments)
          }, e)
        }

        function jn(n, t, e) {
          function r(n) {
            if (n) return e(n);
            i(u)
          }

          function u(n, t) {
            return n ? e(n) : t ? void o(r) : e(null)
          }
          e = F(e || m);
          var o = a(t),
            i = a(n);
          i(u)
        }

        function Sn(n) {
          return function(t, e, r) {
            return n(t, r)
          }
        }

        function kn(n, t, e) {
          Kt(n, Sn(a(t)), e)
        }

        function Ln(n, t, e, r) {
          I(t)(n, Sn(a(e)), r)
        }

        function On(n) {
          return f(n) ? n : tt(function(t, e) {
            var r = !0;
            t.push(function() {
              var n = arguments;
              r ? ut(function() {
                e.apply(null, n)
              }) : e.apply(null, n)
            }), n.apply(this, t), r = !1
          })
        }

        function wn(n) {
          return !n
        }

        function xn(n) {
          return function(t) {
            return null == t ? void 0 : t[n]
          }
        }

        function En(n, t, e, r) {
          var u = new Array(t.length);
          n(t, function(n, t, r) {
            e(n, function(n, e) {
              u[t] = !!e, r(n)
            })
          }, function(n) {
            if (n) return r(n);
            for (var e = [], o = 0; o < t.length; o++) u[o] && e.push(t[o]);
            r(null, e)
          })
        }

        function An(n, t, e, r) {
          var u = [];
          n(t, function(n, t, r) {
            e(n, function(e, o) {
              e ? r(e) : (o && u.push({
                index: t,
                value: n
              }), r())
            })
          }, function(n) {
            n ? r(n) : r(null, N(u.sort(function(n, t) {
              return n.index - t.index
            }), xn("value")))
          })
        }

        function Tn(n, t, e, r) {
          (d(t) ? En : An)(n, t, a(e), r || m)
        }

        function Bn(n, t) {
          function e(n) {
            if (n) return r(n);
            u(e)
          }
          var r = F(t || m),
            u = a(On(n));
          e()
        }

        function Fn(n, t, e, r) {
          r = g(r || m);
          var u = {},
            o = a(e);
          _(n, t, function(n, t, e) {
            o(n, t, function(n, r) {
              if (n) return e(n);
              u[t] = r, e()
            })
          }, function(n) {
            r(n, u)
          })
        }

        function In(n, t) {
          return t in n
        }

        function _n(n, e) {
          var r = Object.create(null),
            u = Object.create(null);
          e = e || hn;
          var o = a(n),
            i = tt(function(n, i) {
              var c = e.apply(null, n);
              In(r, c) ? ut(function() {
                i.apply(null, r[c])
              }) : In(u, c) ? u[c].push(i) : (u[c] = [i], o.apply(null, n.concat(function() {
                var n = t(arguments);
                r[c] = n;
                var e = u[c];
                delete u[c];
                for (var o = 0, i = e.length; o < i; o++) e[o].apply(null, n)
              })))
            });
          return i.memo = r, i.unmemoized = n, i
        }

        function Mn(n, e, r) {
          r = r || m;
          var u = d(e) ? [] : {};
          n(e, function(n, e, r) {
            a(n)(function(n, o) {
              arguments.length > 2 && (o = t(arguments, 1)), u[e] = o, r(n)
            })
          }, function(n) {
            r(n, u)
          })
        }

        function Un(n, t) {
          Mn(Kt, n, t)
        }

        function zn(n, t, e) {
          Mn(I(t), n, e)
        }

        function Pn(n, t) {
          if (t = g(t || m), !Ft(n)) return t(new TypeError("First argument to race must be an array of functions"));
          if (!n.length) return t();
          for (var e = 0, r = n.length; e < r; e++) a(n[e])(t)
        }

        function Vn(n, e, r, u) {
          sn(t(n).reverse(), e, r, u)
        }

        function qn(n) {
          var e = a(n);
          return tt(function(n, r) {
            return n.push(function(n, e) {
              if (n) r(null, {
                error: n
              });
              else {
                var u;
                u = arguments.length <= 2 ? e : t(arguments, 1), r(null, {
                  value: u
                })
              }
            }), e.apply(this, n)
          })
        }

        function Dn(n, t, e, r) {
          Tn(n, t, function(n, t) {
            e(n, function(n, e) {
              t(n, !e)
            })
          }, r)
        }

        function Rn(n) {
          var t;
          return Ft(n) ? t = N(n, qn) : (t = {}, D(n, function(n, e) {
            t[e] = qn.call(this, n)
          })), t
        }

        function Cn(n) {
          return function() {
            return n
          }
        }

        function $n(n, t, e) {
          function r() {
            c(function(n) {
              n && f++ < i.times && ("function" != typeof i.errorFilter || i.errorFilter(n)) ? setTimeout(r, i.intervalFunc(f)) : e.apply(null, arguments)
            })
          }
          var u = 5,
            o = 0,
            i = {
              times: u,
              intervalFunc: Cn(o)
            };
          if (arguments.length < 3 && "function" == typeof n ? (e = t || m, t = n) : (! function(n, t) {
              if ("object" == typeof t) n.times = +t.times || u, n.intervalFunc = "function" == typeof t.interval ? t.interval : Cn(+t.interval || o), n.errorFilter = t.errorFilter;
              else {
                if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid arguments for async.retry");
                n.times = +t || u
              }
            }(i, n), e = e || m), "function" != typeof t) throw new Error("Invalid arguments for async.retry");
          var c = a(t),
            f = 1;
          r()
        }

        function Wn(n, t) {
          Mn(Oe, n, t)
        }

        function Nn(n, t, e) {
          function r(n, t) {
            var e = n.criteria,
              r = t.criteria;
            return e < r ? -1 : e > r ? 1 : 0
          }
          var u = a(t);
          Xt(n, function(n, t) {
            u(n, function(e, r) {
              if (e) return t(e);
              t(null, {
                value: n,
                criteria: r
              })
            })
          }, function(n, t) {
            if (n) return e(n);
            e(null, N(t.sort(r), xn("value")))
          })
        }

        function Qn(n, t, e) {
          var r = a(n);
          return tt(function(u, o) {
            var i, c = !1;
            u.push(function() {
              c || (o.apply(null, arguments), clearTimeout(i))
            }), i = setTimeout(function() {
              var t = n.name || "anonymous",
                r = new Error('Callback function "' + t + '" timed out.');
              r.code = "ETIMEDOUT", e && (r.info = e), c = !0, o(r)
            }, t), r.apply(null, u)
          })
        }

        function Gn(n, t, e, r) {
          for (var u = -1, o = or(ur((t - n) / (e || 1)), 0), i = Array(o); o--;) i[r ? o : ++u] = n, n += e;
          return i
        }

        function Hn(n, t, e, r) {
          var u = a(e);
          Zt(Gn(0, n, 1), t, u, r)
        }

        function Jn(n, t, e, r) {
          arguments.length <= 3 && (r = e, e = t, t = Ft(n) ? [] : {}), r = g(r || m);
          var u = a(e);
          Kt(n, function(n, e, r) {
            u(t, n, e, r)
          }, function(n) {
            r(n, t)
          })
        }

        function Kn(n, e) {
          var r, u = null;
          e = e || m, Ue(n, function(n, e) {
            a(n)(function(n, o) {
              r = arguments.length > 2 ? t(arguments, 1) : o, u = n, e(!n)
            })
          }, function() {
            e(u, r)
          })
        }

        function Xn(n) {
          return function() {
            return (n.unmemoized || n).apply(null, arguments)
          }
        }

        function Yn(n, e, r) {
          r = F(r || m);
          var u = a(e);
          if (!n()) return r(null);
          var o = function(e) {
            if (e) return r(e);
            if (n()) return u(o);
            var i = t(arguments, 1);
            r.apply(null, [null].concat(i))
          };
          u(o)
        }

        function Zn(n, t, e) {
          Yn(function() {
            return !n.apply(this, arguments)
          }, t, e)
        }
        var nt, tt = function(n) {
            return function() {
              var e = t(arguments),
                r = e.pop();
              n.call(this, e, r)
            }
          },
          et = "function" == typeof setImmediate && setImmediate,
          rt = "object" == typeof process && "function" == typeof process.nextTick,
          ut = u(nt = et ? setImmediate : rt ? process.nextTick : r),
          ot = "function" == typeof Symbol,
          it = "object" == typeof global && global && global.Object === Object && global,
          ct = "object" == typeof self && self && self.Object === Object && self,
          ft = it || ct || Function("return this")(),
          at = ft.Symbol,
          lt = Object.prototype,
          st = lt.hasOwnProperty,
          pt = lt.toString,
          ht = at ? at.toStringTag : void 0,
          yt = Object.prototype.toString,
          vt = "[object Null]",
          dt = "[object Undefined]",
          mt = at ? at.toStringTag : void 0,
          gt = "[object AsyncFunction]",
          bt = "[object Function]",
          jt = "[object GeneratorFunction]",
          St = "[object Proxy]",
          kt = 9007199254740991,
          Lt = {},
          Ot = "function" == typeof Symbol && Symbol.iterator,
          wt = function(n) {
            return Ot && n[Ot] && n[Ot]()
          },
          xt = "[object Arguments]",
          Et = Object.prototype,
          At = Et.hasOwnProperty,
          Tt = Et.propertyIsEnumerable,
          Bt = S(function() {
            return arguments
          }()) ? S : function(n) {
            return j(n) && At.call(n, "callee") && !Tt.call(n, "callee")
          },
          Ft = Array.isArray,
          It = "object" == typeof n && n && !n.nodeType && n,
          _t = It && "object" == typeof module && module && !module.nodeType && module,
          Mt = _t && _t.exports === It ? ft.Buffer : void 0,
          Ut = (Mt ? Mt.isBuffer : void 0) || function() {
            return !1
          },
          zt = 9007199254740991,
          Pt = /^(?:0|[1-9]\d*)$/,
          Vt = {};
        Vt["[object Float32Array]"] = Vt["[object Float64Array]"] = Vt["[object Int8Array]"] = Vt["[object Int16Array]"] = Vt["[object Int32Array]"] = Vt["[object Uint8Array]"] = Vt["[object Uint8ClampedArray]"] = Vt["[object Uint16Array]"] = Vt["[object Uint32Array]"] = !0, Vt["[object Arguments]"] = Vt["[object Array]"] = Vt["[object ArrayBuffer]"] = Vt["[object Boolean]"] = Vt["[object DataView]"] = Vt["[object Date]"] = Vt["[object Error]"] = Vt["[object Function]"] = Vt["[object Map]"] = Vt["[object Number]"] = Vt["[object Object]"] = Vt["[object RegExp]"] = Vt["[object Set]"] = Vt["[object String]"] = Vt["[object WeakMap]"] = !1;
        var qt = "object" == typeof n && n && !n.nodeType && n,
          Dt = qt && "object" == typeof module && module && !module.nodeType && module,
          Rt = Dt && Dt.exports === qt && it.process,
          Ct = function() {
            try {
              return Rt && Rt.binding("util")
            } catch (n) {}
          }(),
          $t = Ct && Ct.isTypedArray,
          Wt = $t ? function(n) {
            return function(t) {
              return n(t)
            }
          }($t) : function(n) {
            return j(n) && v(n.length) && !!Vt[h(n)]
          },
          Nt = Object.prototype.hasOwnProperty,
          Qt = Object.prototype,
          Gt = function(n, t) {
            return function(e) {
              return n(t(e))
            }
          }(Object.keys, Object),
          Ht = Object.prototype.hasOwnProperty,
          Jt = M(_, 1 / 0),
          Kt = function(n, t, e) {
            (d(n) ? U : Jt)(n, a(t), e)
          },
          Xt = z(P),
          Yt = l(Xt),
          Zt = V(P),
          ne = M(Zt, 1),
          te = l(ne),
          ee = function(n) {
            var e = t(arguments, 1);
            return function() {
              var r = t(arguments);
              return n.apply(null, e.concat(r))
            }
          },
          re = function(n) {
            return function(t, e, r) {
              for (var u = -1, o = Object(t), i = r(t), c = i.length; c--;) {
                var f = i[n ? c : ++u];
                if (!1 === e(o[f], f, o)) break
              }
              return t
            }
          }(),
          ue = function(n, e, r) {
            function u(n, t) {
              d.push(function() {
                f(n, t)
              })
            }

            function o() {
              if (0 === d.length && 0 === h) return r(null, p);
              for (; d.length && h < e;) d.shift()()
            }

            function i(n, t) {
              var e = v[n];
              e || (e = v[n] = []), e.push(t)
            }

            function c(n) {
              q(v[n] || [], function(n) {
                n()
              }), o()
            }

            function f(n, e) {
              if (!y) {
                var u = F(function(e, u) {
                  if (h--, arguments.length > 2 && (u = t(arguments, 1)), e) {
                    var o = {};
                    D(p, function(n, t) {
                      o[t] = n
                    }), o[n] = u, y = !0, v = Object.create(null), r(e, o)
                  } else p[n] = u, c(n)
                });
                h++;
                var o = a(e[e.length - 1]);
                e.length > 1 ? o(p, u) : o(u)
              }
            }

            function l(t) {
              var e = [];
              return D(n, function(n, r) {
                Ft(n) && W(n, t, 0) >= 0 && e.push(r)
              }), e
            }
            "function" == typeof e && (r = e, e = null), r = g(r || m);
            var s = x(n).length;
            if (!s) return r(null);
            e || (e = s);
            var p = {},
              h = 0,
              y = !1,
              v = Object.create(null),
              d = [],
              b = [],
              j = {};
            D(n, function(t, e) {
                if (!Ft(t)) return u(e, [t]), void b.push(e);
                var r = t.slice(0, t.length - 1),
                  o = r.length;
                if (0 === o) return u(e, t), void b.push(e);
                j[e] = o, q(r, function(c) {
                  if (!n[c]) throw new Error("async.auto task `" + e + "` has a non-existent dependency `" + c + "` in " + r.join(", "));
                  i(c, function() {
                    0 === --o && u(e, t)
                  })
                })
              }),
              function() {
                for (var n = 0; b.length;) n++, q(l(b.pop()), function(n) {
                  0 == --j[n] && b.push(n)
                });
                if (n !== s) throw new Error("async.auto cannot execute tasks due to a recursive dependency")
              }(), o()
          },
          oe = "[object Symbol]",
          ie = 1 / 0,
          ce = at ? at.prototype : void 0,
          fe = ce ? ce.toString : void 0,
          ae = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
          le = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
          se = "\\ud83c[\\udffb-\\udfff]",
          pe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          he = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          ye = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",
          ve = "[\\ufe0e\\ufe0f]?" + ye + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", pe, he].join("|") + ")[\\ufe0e\\ufe0f]?" + ye + ")*"),
          de = "(?:" + ["[^\\ud800-\\udfff]" + le + "?", le, pe, he, "[\\ud800-\\udfff]"].join("|") + ")",
          me = RegExp(se + "(?=" + se + ")|" + de + ve, "g"),
          ge = /^\s+|\s+$/g,
          be = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
          je = /,/,
          Se = /(=.+)?(\s*)$/,
          ke = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
        cn.prototype.removeLink = function(n) {
          return n.prev ? n.prev.next = n.next : this.head = n.next, n.next ? n.next.prev = n.prev : this.tail = n.prev, n.prev = n.next = null, this.length -= 1, n
        }, cn.prototype.empty = function() {
          for (; this.head;) this.shift();
          return this
        }, cn.prototype.insertAfter = function(n, t) {
          t.prev = n, t.next = n.next, n.next ? n.next.prev = t : this.tail = t, n.next = t, this.length += 1
        }, cn.prototype.insertBefore = function(n, t) {
          t.prev = n.prev, t.next = n, n.prev ? n.prev.next = t : this.head = t, n.prev = t, this.length += 1
        }, cn.prototype.unshift = function(n) {
          this.head ? this.insertBefore(this.head, n) : fn(this, n)
        }, cn.prototype.push = function(n) {
          this.tail ? this.insertAfter(this.tail, n) : fn(this, n)
        }, cn.prototype.shift = function() {
          return this.head && this.removeLink(this.head)
        }, cn.prototype.pop = function() {
          return this.tail && this.removeLink(this.tail)
        }, cn.prototype.toArray = function() {
          for (var n = Array(this.length), t = this.head, e = 0; e < this.length; e++) n[e] = t.data, t = t.next;
          return n
        }, cn.prototype.remove = function(n) {
          for (var t = this.head; t;) {
            var e = t.next;
            n(t) && this.removeLink(t), t = e
          }
          return this
        };
        var Le, Oe = M(_, 1),
          we = function() {
            return pn.apply(null, t(arguments).reverse())
          },
          xe = Array.prototype.concat,
          Ee = function(n, e, r, u) {
            u = u || m;
            var o = a(r);
            Zt(n, e, function(n, e) {
              o(n, function(n) {
                return n ? e(n) : e(null, t(arguments, 1))
              })
            }, function(n, t) {
              for (var e = [], r = 0; r < t.length; r++) t[r] && (e = xe.apply(e, t[r]));
              return u(n, e)
            })
          },
          Ae = M(Ee, 1 / 0),
          Te = M(Ee, 1),
          Be = function() {
            var n = t(arguments),
              e = [null].concat(n);
            return function() {
              return arguments[arguments.length - 1].apply(this, e)
            }
          },
          Fe = z(yn(hn, vn)),
          Ie = V(yn(hn, vn)),
          _e = M(Ie, 1),
          Me = dn("dir"),
          Ue = M(Ln, 1),
          ze = z(yn(wn, wn)),
          Pe = V(yn(wn, wn)),
          Ve = M(Pe, 1),
          qe = z(Tn),
          De = V(Tn),
          Re = M(De, 1),
          Ce = function(n, t, e, r) {
            r = r || m;
            var u = a(e);
            Zt(n, t, function(n, t) {
              u(n, function(e, r) {
                return e ? t(e) : t(null, {
                  key: r,
                  val: n
                })
              })
            }, function(n, t) {
              for (var e = {}, u = Object.prototype.hasOwnProperty, o = 0; o < t.length; o++)
                if (t[o]) {
                  var i = t[o].key,
                    c = t[o].val;
                  u.call(e, i) ? e[i].push(c) : e[i] = [c]
                } return r(n, e)
            })
          },
          $e = M(Ce, 1 / 0),
          We = M(Ce, 1),
          Ne = dn("log"),
          Qe = M(Fn, 1 / 0),
          Ge = M(Fn, 1),
          He = u(Le = rt ? process.nextTick : et ? setImmediate : r),
          Je = function(n, t) {
            var e = a(n);
            return an(function(n, t) {
              e(n[0], t)
            }, t, 1)
          },
          Ke = function(n, t) {
            var e = Je(n, t);
            return e.push = function(n, t, r) {
              if (null == r && (r = m), "function" != typeof r) throw new Error("task callback must be a function");
              if (e.started = !0, Ft(n) || (n = [n]), 0 === n.length) return ut(function() {
                e.drain()
              });
              t = t || 0;
              for (var u = e._tasks.head; u && t >= u.priority;) u = u.next;
              for (var o = 0, i = n.length; o < i; o++) {
                var c = {
                  data: n[o],
                  priority: t,
                  callback: r
                };
                u ? e._tasks.insertBefore(u, c) : e._tasks.push(c)
              }
              ut(e.process)
            }, delete e.unshift, e
          },
          Xe = z(Dn),
          Ye = V(Dn),
          Ze = M(Ye, 1),
          nr = function(n, t) {
            t || (t = n, n = null);
            var e = a(t);
            return tt(function(t, r) {
              function u(n) {
                e.apply(null, t.concat(n))
              }
              n ? $n(n, u, r) : $n(u, r)
            })
          },
          tr = z(yn(Boolean, hn)),
          er = V(yn(Boolean, hn)),
          rr = M(er, 1),
          ur = Math.ceil,
          or = Math.max,
          ir = M(Hn, 1 / 0),
          cr = M(Hn, 1),
          fr = function(n, e) {
            function r(t) {
              var e = a(n[o++]);
              t.push(F(u)), e.apply(null, t)
            }

            function u(u) {
              if (u || o === n.length) return e.apply(null, arguments);
              r(t(arguments, 1))
            }
            if (e = g(e || m), !Ft(n)) return e(new Error("First argument to waterfall must be an array of functions"));
            if (!n.length) return e();
            var o = 0;
            r([])
          },
          ar = {
            applyEach: Yt,
            applyEachSeries: te,
            apply: ee,
            asyncify: o,
            auto: ue,
            autoInject: on,
            cargo: ln,
            compose: we,
            concat: Ae,
            concatLimit: Ee,
            concatSeries: Te,
            constant: Be,
            detect: Fe,
            detectLimit: Ie,
            detectSeries: _e,
            dir: Me,
            doDuring: mn,
            doUntil: bn,
            doWhilst: gn,
            during: jn,
            each: kn,
            eachLimit: Ln,
            eachOf: Kt,
            eachOfLimit: _,
            eachOfSeries: Oe,
            eachSeries: Ue,
            ensureAsync: On,
            every: ze,
            everyLimit: Pe,
            everySeries: Ve,
            filter: qe,
            filterLimit: De,
            filterSeries: Re,
            forever: Bn,
            groupBy: $e,
            groupByLimit: Ce,
            groupBySeries: We,
            log: Ne,
            map: Xt,
            mapLimit: Zt,
            mapSeries: ne,
            mapValues: Qe,
            mapValuesLimit: Fn,
            mapValuesSeries: Ge,
            memoize: _n,
            nextTick: He,
            parallel: Un,
            parallelLimit: zn,
            priorityQueue: Ke,
            queue: Je,
            race: Pn,
            reduce: sn,
            reduceRight: Vn,
            reflect: qn,
            reflectAll: Rn,
            reject: Xe,
            rejectLimit: Ye,
            rejectSeries: Ze,
            retry: $n,
            retryable: nr,
            seq: pn,
            series: Wn,
            setImmediate: ut,
            some: tr,
            someLimit: er,
            someSeries: rr,
            sortBy: Nn,
            timeout: Qn,
            times: ir,
            timesLimit: Hn,
            timesSeries: cr,
            transform: Jn,
            tryEach: Kn,
            unmemoize: Xn,
            until: Zn,
            waterfall: fr,
            whilst: Yn,
            all: ze,
            any: tr,
            forEach: kn,
            forEachSeries: Ue,
            forEachLimit: Ln,
            forEachOf: Kt,
            forEachOfSeries: Oe,
            forEachOfLimit: _,
            inject: sn,
            foldl: sn,
            foldr: Vn,
            select: qe,
            selectLimit: De,
            selectSeries: Re,
            wrapSync: o
          };
        n.default = ar, n.applyEach = Yt, n.applyEachSeries = te, n.apply = ee, n.asyncify = o, n.auto = ue, n.autoInject = on, n.cargo = ln, n.compose = we, n.concat = Ae, n.concatLimit = Ee, n.concatSeries = Te, n.constant = Be, n.detect = Fe, n.detectLimit = Ie, n.detectSeries = _e, n.dir = Me, n.doDuring = mn, n.doUntil = bn, n.doWhilst = gn, n.during = jn, n.each = kn, n.eachLimit = Ln, n.eachOf = Kt, n.eachOfLimit = _, n.eachOfSeries = Oe, n.eachSeries = Ue, n.ensureAsync = On, n.every = ze, n.everyLimit = Pe, n.everySeries = Ve, n.filter = qe, n.filterLimit = De, n.filterSeries = Re, n.forever = Bn, n.groupBy = $e, n.groupByLimit = Ce, n.groupBySeries = We, n.log = Ne, n.map = Xt, n.mapLimit = Zt, n.mapSeries = ne, n.mapValues = Qe, n.mapValuesLimit = Fn, n.mapValuesSeries = Ge, n.memoize = _n, n.nextTick = He, n.parallel = Un, n.parallelLimit = zn, n.priorityQueue = Ke, n.queue = Je, n.race = Pn, n.reduce = sn, n.reduceRight = Vn, n.reflect = qn, n.reflectAll = Rn, n.reject = Xe, n.rejectLimit = Ye, n.rejectSeries = Ze, n.retry = $n, n.retryable = nr, n.seq = pn, n.series = Wn, n.setImmediate = ut, n.some = tr, n.someLimit = er, n.someSeries = rr, n.sortBy = Nn, n.timeout = Qn, n.times = ir, n.timesLimit = Hn, n.timesSeries = cr, n.transform = Jn, n.tryEach = Kn, n.unmemoize = Xn, n.until = Zn, n.waterfall = fr, n.whilst = Yn, n.all = ze, n.allLimit = Pe, n.allSeries = Ve, n.any = tr, n.anyLimit = er, n.anySeries = rr, n.find = Fe, n.findLimit = Ie, n.findSeries = _e, n.forEach = kn, n.forEachSeries = Ue, n.forEachLimit = Ln, n.forEachOf = Kt, n.forEachOfSeries = Oe, n.forEachOfLimit = _, n.inject = sn, n.foldl = sn, n.foldr = Vn, n.select = qe, n.selectLimit = De, n.selectSeries = Re, n.wrapSync = o, Object.defineProperty(n, "__esModule", {
          value: !0
        })
      });

    }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {
    "_process": 1
  }],
  5: [function(require, module, exports) {
    (function(global) {
      (function() {
        function n(n, t) {
          return n.set(t[0], t[1]), n
        }

        function t(n, t) {
          return n.add(t), n
        }

        function r(n, t, r) {
          switch (r.length) {
            case 0:
              return n.call(t);
            case 1:
              return n.call(t, r[0]);
            case 2:
              return n.call(t, r[0], r[1]);
            case 3:
              return n.call(t, r[0], r[1], r[2])
          }
          return n.apply(t, r)
        }

        function e(n, t, r, e) {
          for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
            var o = n[u];
            t(e, o, r(o), n)
          }
          return e
        }

        function u(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e && !1 !== t(n[r], r, n););
          return n
        }

        function i(n, t) {
          for (var r = null == n ? 0 : n.length; r-- && !1 !== t(n[r], r, n););
          return n
        }

        function o(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (!t(n[r], r, n)) return !1;
          return !0
        }

        function f(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            t(o, r, n) && (i[u++] = o)
          }
          return i
        }

        function c(n, t) {
          return !!(null == n ? 0 : n.length) && b(n, t, 0) > -1
        }

        function a(n, t, r) {
          for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)
            if (r(t, n[e])) return !0;
          return !1
        }

        function l(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);
          return u
        }

        function s(n, t) {
          for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
          return n
        }

        function h(n, t, r, e) {
          var u = -1,
            i = null == n ? 0 : n.length;
          for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
          return r
        }

        function p(n, t, r, e) {
          var u = null == n ? 0 : n.length;
          for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
          return r
        }

        function _(n, t) {
          for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
            if (t(n[r], r, n)) return !0;
          return !1
        }

        function v(n) {
          return n.split("")
        }

        function g(n) {
          return n.match(Bt) || []
        }

        function y(n, t, r) {
          var e;
          return r(n, function(n, r, u) {
            if (t(n, r, u)) return e = r, !1
          }), e
        }

        function d(n, t, r, e) {
          for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;)
            if (t(n[i], i, n)) return i;
          return -1
        }

        function b(n, t, r) {
          return t === t ? K(n, t, r) : d(n, m, r)
        }

        function w(n, t, r, e) {
          for (var u = r - 1, i = n.length; ++u < i;)
            if (e(n[u], t)) return u;
          return -1
        }

        function m(n) {
          return n !== n
        }

        function x(n, t) {
          var r = null == n ? 0 : n.length;
          return r ? I(n, t) / r : Sn
        }

        function j(n) {
          return function(t) {
            return null == t ? X : t[n]
          }
        }

        function A(n) {
          return function(t) {
            return null == n ? X : n[t]
          }
        }

        function k(n, t, r, e, u) {
          return u(n, function(n, u, i) {
            r = e ? (e = !1, n) : t(r, n, u, i)
          }), r
        }

        function O(n, t) {
          var r = n.length;
          for (n.sort(t); r--;) n[r] = n[r].value;
          return n
        }

        function I(n, t) {
          for (var r, e = -1, u = n.length; ++e < u;) {
            var i = t(n[e]);
            i !== X && (r = r === X ? i : r + i)
          }
          return r
        }

        function R(n, t) {
          for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);
          return e
        }

        function z(n, t) {
          return l(t, function(t) {
            return [t, n[t]]
          })
        }

        function E(n) {
          return function(t) {
            return n(t)
          }
        }

        function S(n, t) {
          return l(t, function(t) {
            return n[t]
          })
        }

        function L(n, t) {
          return n.has(t)
        }

        function W(n, t) {
          for (var r = -1, e = n.length; ++r < e && b(t, n[r], 0) > -1;);
          return r
        }

        function C(n, t) {
          for (var r = n.length; r-- && b(t, n[r], 0) > -1;);
          return r
        }

        function U(n, t) {
          for (var r = n.length, e = 0; r--;) n[r] === t && ++e;
          return e
        }

        function B(n) {
          return "\\" + xr[n]
        }

        function T(n, t) {
          return null == n ? X : n[t]
        }

        function $(n) {
          return pr.test(n)
        }

        function D(n) {
          return _r.test(n)
        }

        function M(n) {
          for (var t, r = []; !(t = n.next()).done;) r.push(t.value);
          return r
        }

        function F(n) {
          var t = -1,
            r = Array(n.size);
          return n.forEach(function(n, e) {
            r[++t] = [e, n]
          }), r
        }

        function N(n, t) {
          return function(r) {
            return n(t(r))
          }
        }

        function P(n, t) {
          for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
            var o = n[r];
            o !== t && o !== on || (n[r] = on, i[u++] = r)
          }
          return i
        }

        function q(n) {
          var t = -1,
            r = Array(n.size);
          return n.forEach(function(n) {
            r[++t] = n
          }), r
        }

        function Z(n) {
          var t = -1,
            r = Array(n.size);
          return n.forEach(function(n) {
            r[++t] = [n, n]
          }), r
        }

        function K(n, t, r) {
          for (var e = r - 1, u = n.length; ++e < u;)
            if (n[e] === t) return e;
          return -1
        }

        function V(n, t, r) {
          for (var e = r + 1; e--;)
            if (n[e] === t) return e;
          return e
        }

        function G(n) {
          return $(n) ? J(n) : Dr(n)
        }

        function H(n) {
          return $(n) ? Y(n) : v(n)
        }

        function J(n) {
          for (var t = sr.lastIndex = 0; sr.test(n);) ++t;
          return t
        }

        function Y(n) {
          return n.match(sr) || []
        }

        function Q(n) {
          return n.match(hr) || []
        }
        var X, nn = 200,
          tn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
          rn = "Expected a function",
          en = "__lodash_hash_undefined__",
          un = 500,
          on = "__lodash_placeholder__",
          fn = 1,
          cn = 2,
          an = 4,
          ln = 1,
          sn = 2,
          hn = 1,
          pn = 2,
          _n = 4,
          vn = 8,
          gn = 16,
          yn = 32,
          dn = 64,
          bn = 128,
          wn = 256,
          mn = 512,
          xn = 30,
          jn = "...",
          An = 800,
          kn = 16,
          On = 1,
          In = 2,
          Rn = 1 / 0,
          zn = 9007199254740991,
          En = 1.7976931348623157e308,
          Sn = NaN,
          Ln = 4294967295,
          Wn = Ln - 1,
          Cn = Ln >>> 1,
          Un = [
            ["ary", bn],
            ["bind", hn],
            ["bindKey", pn],
            ["curry", vn],
            ["curryRight", gn],
            ["flip", mn],
            ["partial", yn],
            ["partialRight", dn],
            ["rearg", wn]
          ],
          Bn = "[object Arguments]",
          Tn = "[object Array]",
          $n = "[object AsyncFunction]",
          Dn = "[object Boolean]",
          Mn = "[object Date]",
          Fn = "[object DOMException]",
          Nn = "[object Error]",
          Pn = "[object Function]",
          qn = "[object GeneratorFunction]",
          Zn = "[object Map]",
          Kn = "[object Number]",
          Vn = "[object Null]",
          Gn = "[object Object]",
          Hn = "[object Proxy]",
          Jn = "[object RegExp]",
          Yn = "[object Set]",
          Qn = "[object String]",
          Xn = "[object Symbol]",
          nt = "[object Undefined]",
          tt = "[object WeakMap]",
          rt = "[object WeakSet]",
          et = "[object ArrayBuffer]",
          ut = "[object DataView]",
          it = "[object Float32Array]",
          ot = "[object Float64Array]",
          ft = "[object Int8Array]",
          ct = "[object Int16Array]",
          at = "[object Int32Array]",
          lt = "[object Uint8Array]",
          st = "[object Uint8ClampedArray]",
          ht = "[object Uint16Array]",
          pt = "[object Uint32Array]",
          _t = /\b__p \+= '';/g,
          vt = /\b(__p \+=) '' \+/g,
          gt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          yt = /&(?:amp|lt|gt|quot|#39);/g,
          dt = /[&<>"']/g,
          bt = RegExp(yt.source),
          wt = RegExp(dt.source),
          mt = /<%-([\s\S]+?)%>/g,
          xt = /<%([\s\S]+?)%>/g,
          jt = /<%=([\s\S]+?)%>/g,
          At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          kt = /^\w*$/,
          Ot = /^\./,
          It = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Rt = /[\\^$.*+?()[\]{}|]/g,
          zt = RegExp(Rt.source),
          Et = /^\s+|\s+$/g,
          St = /^\s+/,
          Lt = /\s+$/,
          Wt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Ct = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Ut = /,? & /,
          Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          Tt = /\\(\\)?/g,
          $t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Dt = /\w*$/,
          Mt = /^[-+]0x[0-9a-f]+$/i,
          Ft = /^0b[01]+$/i,
          Nt = /^\[object .+?Constructor\]$/,
          Pt = /^0o[0-7]+$/i,
          qt = /^(?:0|[1-9]\d*)$/,
          Zt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Kt = /($^)/,
          Vt = /['\n\r\u2028\u2029\\]/g,
          Gt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          Ht = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          Jt = "[" + Ht + "]",
          Yt = "[" + Gt + "]",
          Qt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          Xt = "[^\\ud800-\\udfff" + Ht + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          nr = "\\ud83c[\\udffb-\\udfff]",
          tr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          rr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          er = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          ur = "(?:" + Qt + "|" + Xt + ")",
          ir = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
          or = "[\\ufe0e\\ufe0f]?" + ir + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", tr, rr].join("|") + ")[\\ufe0e\\ufe0f]?" + ir + ")*"),
          fr = "(?:" + ["[\\u2700-\\u27bf]", tr, rr].join("|") + ")" + or,
          cr = "(?:" + ["[^\\ud800-\\udfff]" + Yt + "?", Yt, tr, rr, "[\\ud800-\\udfff]"].join("|") + ")",
          ar = RegExp("['’]", "g"),
          lr = RegExp(Yt, "g"),
          sr = RegExp(nr + "(?=" + nr + ")|" + cr + or, "g"),
          hr = RegExp([er + "?" + Qt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [Jt, er, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [Jt, er + ur, "$"].join("|") + ")", er + "?" + ur + "+(?:['’](?:d|ll|m|re|s|t|ve))?", er + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", "\\d+", fr].join("|"), "g"),
          pr = RegExp("[\\u200d\\ud800-\\udfff" + Gt + "\\ufe0e\\ufe0f]"),
          _r = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          vr = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
          gr = -1,
          yr = {};
        yr[it] = yr[ot] = yr[ft] = yr[ct] = yr[at] = yr[lt] = yr[st] = yr[ht] = yr[pt] = !0, yr[Bn] = yr[Tn] = yr[et] = yr[Dn] = yr[ut] = yr[Mn] = yr[Nn] = yr[Pn] = yr[Zn] = yr[Kn] = yr[Gn] = yr[Jn] = yr[Yn] = yr[Qn] = yr[tt] = !1;
        var dr = {};
        dr[Bn] = dr[Tn] = dr[et] = dr[ut] = dr[Dn] = dr[Mn] = dr[it] = dr[ot] = dr[ft] = dr[ct] = dr[at] = dr[Zn] = dr[Kn] = dr[Gn] = dr[Jn] = dr[Yn] = dr[Qn] = dr[Xn] = dr[lt] = dr[st] = dr[ht] = dr[pt] = !0, dr[Nn] = dr[Pn] = dr[tt] = !1;
        var br = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
          },
          wr = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
          },
          mr = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
          },
          xr = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
          },
          jr = parseFloat,
          Ar = parseInt,
          kr = "object" == typeof global && global && global.Object === Object && global,
          Or = "object" == typeof self && self && self.Object === Object && self,
          Ir = kr || Or || Function("return this")(),
          Rr = "object" == typeof exports && exports && !exports.nodeType && exports,
          zr = Rr && "object" == typeof module && module && !module.nodeType && module,
          Er = zr && zr.exports === Rr,
          Sr = Er && kr.process,
          Lr = function() {
            try {
              return Sr && Sr.binding && Sr.binding("util")
            } catch (n) {}
          }(),
          Wr = Lr && Lr.isArrayBuffer,
          Cr = Lr && Lr.isDate,
          Ur = Lr && Lr.isMap,
          Br = Lr && Lr.isRegExp,
          Tr = Lr && Lr.isSet,
          $r = Lr && Lr.isTypedArray,
          Dr = j("length"),
          Mr = A(br),
          Fr = A(wr),
          Nr = A(mr),
          Pr = function v(A) {
            function K(n) {
              if (no(n) && !Zc(n) && !(n instanceof Bt)) {
                if (n instanceof Y) return n;
                if (qo.call(n, "__wrapped__")) return Ai(n)
              }
              return new Y(n)
            }

            function J() {}

            function Y(n, t) {
              this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = X
            }

            function Bt(n) {
              this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ln, this.__views__ = []
            }

            function Gt(n) {
              var t = -1,
                r = null == n ? 0 : n.length;
              for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
              }
            }

            function Ht(n) {
              var t = -1,
                r = null == n ? 0 : n.length;
              for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
              }
            }

            function Jt(n) {
              var t = -1,
                r = null == n ? 0 : n.length;
              for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
              }
            }

            function Yt(n) {
              var t = -1,
                r = null == n ? 0 : n.length;
              for (this.__data__ = new Jt; ++t < r;) this.add(n[t])
            }

            function Qt(n) {
              var t = this.__data__ = new Ht(n);
              this.size = t.size
            }

            function Xt(n, t) {
              var r = Zc(n),
                e = !r && qc(n),
                u = !r && !e && Vc(n),
                i = !r && !e && !u && Qc(n),
                o = r || e || u || i,
                f = o ? R(n.length, To) : [],
                c = f.length;
              for (var a in n) !t && !qo.call(n, a) || o && ("length" == a || u && ("offset" == a || "parent" == a) || i && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || ei(a, c)) || f.push(a);
              return f
            }

            function nr(n) {
              var t = n.length;
              return t ? n[xe(0, t - 1)] : X
            }

            function tr(n, t) {
              return wi(ou(n), pr(t, 0, n.length))
            }

            function rr(n) {
              return wi(ou(n))
            }

            function er(n, t, r) {
              (r === X || Ki(n[t], r)) && (r !== X || t in n) || sr(n, t, r)
            }

            function ur(n, t, r) {
              var e = n[t];
              qo.call(n, t) && Ki(e, r) && (r !== X || t in n) || sr(n, t, r)
            }

            function ir(n, t) {
              for (var r = n.length; r--;)
                if (Ki(n[r][0], t)) return r;
              return -1
            }

            function or(n, t, r, e) {
              return Pf(n, function(n, u, i) {
                t(e, n, r(n), i)
              }), e
            }

            function fr(n, t) {
              return n && fu(t, _o(t), n)
            }

            function cr(n, t) {
              return n && fu(t, vo(t), n)
            }

            function sr(n, t, r) {
              "__proto__" == t && af ? af(n, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
              }) : n[t] = r
            }

            function hr(n, t) {
              for (var r = -1, e = t.length, u = Eo(e), i = null == n; ++r < e;) u[r] = i ? X : ho(n, t[r]);
              return u
            }

            function pr(n, t, r) {
              return n === n && (r !== X && (n = n <= r ? n : r), t !== X && (n = n >= t ? n : t)), n
            }

            function _r(n, t, r, e, i, o) {
              var f, c = t & fn,
                a = t & cn,
                l = t & an;
              if (r && (f = i ? r(n, e, i, o) : r(n)), f !== X) return f;
              if (!Xi(n)) return n;
              var s = Zc(n);
              if (s) {
                if (f = Qu(n), !c) return ou(n, f)
              } else {
                var h = tc(n),
                  p = h == Pn || h == qn;
                if (Vc(n)) return Ge(n, c);
                if (h == Gn || h == Bn || p && !i) {
                  if (f = a || p ? {} : Xu(n), !c) return a ? au(n, cr(f, n)) : cu(n, fr(f, n))
                } else {
                  if (!dr[h]) return i ? n : {};
                  f = ni(n, h, _r, c)
                }
              }
              o || (o = new Qt);
              var _ = o.get(n);
              if (_) return _;
              o.set(n, f);
              var v = l ? a ? Fu : Mu : a ? vo : _o,
                g = s ? X : v(n);
              return u(g || n, function(e, u) {
                g && (e = n[u = e]), ur(f, u, _r(e, t, r, u, n, o))
              }), f
            }

            function br(n) {
              var t = _o(n);
              return function(r) {
                return wr(r, n, t)
              }
            }

            function wr(n, t, r) {
              var e = r.length;
              if (null == n) return !e;
              for (n = Uo(n); e--;) {
                var u = r[e],
                  i = t[u],
                  o = n[u];
                if (o === X && !(u in n) || !i(o)) return !1
              }
              return !0
            }

            function mr(n, t, r) {
              if ("function" != typeof n) throw new $o(rn);
              return uc(function() {
                n.apply(X, r)
              }, t)
            }

            function xr(n, t, r, e) {
              var u = -1,
                i = c,
                o = !0,
                f = n.length,
                s = [],
                h = t.length;
              if (!f) return s;
              r && (t = l(t, E(r))), e ? (i = a, o = !1) : t.length >= nn && (i = L, o = !1, t = new Yt(t));
              n: for (; ++u < f;) {
                var p = n[u],
                  _ = null == r ? p : r(p);
                if (p = e || 0 !== p ? p : 0, o && _ === _) {
                  for (var v = h; v--;)
                    if (t[v] === _) continue n;
                  s.push(p)
                } else i(t, _, e) || s.push(p)
              }
              return s
            }

            function kr(n, t) {
              var r = !0;
              return Pf(n, function(n, e, u) {
                return r = !!t(n, e, u)
              }), r
            }

            function Or(n, t, r) {
              for (var e = -1, u = n.length; ++e < u;) {
                var i = n[e],
                  o = t(i);
                if (null != o && (f === X ? o === o && !uo(o) : r(o, f))) var f = o,
                  c = i
              }
              return c
            }

            function Rr(n, t, r, e) {
              var u = n.length;
              for ((r = fo(r)) < 0 && (r = -r > u ? 0 : u + r), (e = e === X || e > u ? u : fo(e)) < 0 && (e += u), e = r > e ? 0 : co(e); r < e;) n[r++] = t;
              return n
            }

            function zr(n, t) {
              var r = [];
              return Pf(n, function(n, e, u) {
                t(n, e, u) && r.push(n)
              }), r
            }

            function Sr(n, t, r, e, u) {
              var i = -1,
                o = n.length;
              for (r || (r = ri), u || (u = []); ++i < o;) {
                var f = n[i];
                t > 0 && r(f) ? t > 1 ? Sr(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f)
              }
              return u
            }

            function Lr(n, t) {
              return n && Zf(n, t, _o)
            }

            function Dr(n, t) {
              return n && Kf(n, t, _o)
            }

            function qr(n, t) {
              return f(t, function(t) {
                return Ji(n[t])
              })
            }

            function Zr(n, t) {
              for (var r = 0, e = (t = Ke(t, n)).length; null != n && r < e;) n = n[mi(t[r++])];
              return r && r == e ? n : X
            }

            function Kr(n, t, r) {
              var e = t(n);
              return Zc(n) ? e : s(e, r(n))
            }

            function Vr(n) {
              return null == n ? n === X ? nt : Vn : cf && cf in Uo(n) ? Gu(n) : _i(n)
            }

            function Gr(n, t) {
              return n > t
            }

            function Hr(n, t) {
              return null != n && qo.call(n, t)
            }

            function Jr(n, t) {
              return null != n && t in Uo(n)
            }

            function Yr(n, t, r) {
              return n >= mf(t, r) && n < wf(t, r)
            }

            function Qr(n, t, r) {
              for (var e = r ? a : c, u = n[0].length, i = n.length, o = i, f = Eo(i), s = 1 / 0, h = []; o--;) {
                var p = n[o];
                o && t && (p = l(p, E(t))), s = mf(p.length, s), f[o] = !r && (t || u >= 120 && p.length >= 120) ? new Yt(o && p) : X
              }
              p = n[0];
              var _ = -1,
                v = f[0];
              n: for (; ++_ < u && h.length < s;) {
                var g = p[_],
                  y = t ? t(g) : g;
                if (g = r || 0 !== g ? g : 0, !(v ? L(v, y) : e(h, y, r))) {
                  for (o = i; --o;) {
                    var d = f[o];
                    if (!(d ? L(d, y) : e(n[o], y, r))) continue n
                  }
                  v && v.push(y), h.push(g)
                }
              }
              return h
            }

            function Xr(n, t, r, e) {
              return Lr(n, function(n, u, i) {
                t(e, r(n), u, i)
              }), e
            }

            function ne(n, t, e) {
              var u = null == (n = gi(n, t = Ke(t, n))) ? n : n[mi(zi(t))];
              return null == u ? X : r(u, n, e)
            }

            function te(n) {
              return no(n) && Vr(n) == Bn
            }

            function re(n, t, r, e, u) {
              return n === t || (null == n || null == t || !no(n) && !no(t) ? n !== n && t !== t : ee(n, t, r, e, re, u))
            }

            function ee(n, t, r, e, u, i) {
              var o = Zc(n),
                f = Zc(t),
                c = o ? Tn : tc(n),
                a = f ? Tn : tc(t),
                l = (c = c == Bn ? Gn : c) == Gn,
                s = (a = a == Bn ? Gn : a) == Gn,
                h = c == a;
              if (h && Vc(n)) {
                if (!Vc(t)) return !1;
                o = !0, l = !1
              }
              if (h && !l) return i || (i = new Qt), o || Qc(n) ? Bu(n, t, r, e, u, i) : Tu(n, t, c, r, e, u, i);
              if (!(r & ln)) {
                var p = l && qo.call(n, "__wrapped__"),
                  _ = s && qo.call(t, "__wrapped__");
                if (p || _) {
                  var v = p ? n.value() : n,
                    g = _ ? t.value() : t;
                  return i || (i = new Qt), u(v, g, r, e, i)
                }
              }
              return !!h && (i || (i = new Qt), $u(n, t, r, e, u, i))
            }

            function ue(n, t, r, e) {
              var u = r.length,
                i = u,
                o = !e;
              if (null == n) return !i;
              for (n = Uo(n); u--;) {
                var f = r[u];
                if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1
              }
              for (; ++u < i;) {
                var c = (f = r[u])[0],
                  a = n[c],
                  l = f[1];
                if (o && f[2]) {
                  if (a === X && !(c in n)) return !1
                } else {
                  var s = new Qt;
                  if (e) var h = e(a, l, c, n, t, s);
                  if (!(h === X ? re(l, a, ln | sn, e, s) : h)) return !1
                }
              }
              return !0
            }

            function ie(n) {
              return !(!Xi(n) || ci(n)) && (Ji(n) ? Jo : Nt).test(xi(n))
            }

            function oe(n) {
              return "function" == typeof n ? n : null == n ? jo : "object" == typeof n ? Zc(n) ? he(n[0], n[1]) : se(n) : Io(n)
            }

            function fe(n) {
              if (!ai(n)) return bf(n);
              var t = [];
              for (var r in Uo(n)) qo.call(n, r) && "constructor" != r && t.push(r);
              return t
            }

            function ce(n) {
              if (!Xi(n)) return pi(n);
              var t = ai(n),
                r = [];
              for (var e in n)("constructor" != e || !t && qo.call(n, e)) && r.push(e);
              return r
            }

            function ae(n, t) {
              return n < t
            }

            function le(n, t) {
              var r = -1,
                e = Vi(n) ? Eo(n.length) : [];
              return Pf(n, function(n, u, i) {
                e[++r] = t(n, u, i)
              }), e
            }

            function se(n) {
              var t = Ku(n);
              return 1 == t.length && t[0][2] ? si(t[0][0], t[0][1]) : function(r) {
                return r === n || ue(r, n, t)
              }
            }

            function he(n, t) {
              return ii(n) && li(t) ? si(mi(n), t) : function(r) {
                var e = ho(r, n);
                return e === X && e === t ? po(r, n) : re(t, e, ln | sn)
              }
            }

            function pe(n, t, r, e, u) {
              n !== t && Zf(t, function(i, o) {
                if (Xi(i)) u || (u = new Qt), _e(n, t, o, r, pe, e, u);
                else {
                  var f = e ? e(n[o], i, o + "", n, t, u) : X;
                  f === X && (f = i), er(n, o, f)
                }
              }, vo)
            }

            function _e(n, t, r, e, u, i, o) {
              var f = n[r],
                c = t[r],
                a = o.get(c);
              if (a) er(n, r, a);
              else {
                var l = i ? i(f, c, r + "", n, t, o) : X,
                  s = l === X;
                if (s) {
                  var h = Zc(c),
                    p = !h && Vc(c),
                    _ = !h && !p && Qc(c);
                  l = c, h || p || _ ? Zc(f) ? l = f : Gi(f) ? l = ou(f) : p ? (s = !1, l = Ge(c, !0)) : _ ? (s = !1, l = tu(c, !0)) : l = [] : ro(c) || qc(c) ? (l = f, qc(f) ? l = lo(f) : (!Xi(f) || e && Ji(f)) && (l = Xu(c))) : s = !1
                }
                s && (o.set(c, l), u(l, c, e, i, o), o.delete(c)), er(n, r, l)
              }
            }

            function ve(n, t) {
              var r = n.length;
              if (r) return t += t < 0 ? r : 0, ei(t, r) ? n[t] : X
            }

            function ge(n, t, r) {
              var e = -1;
              return t = l(t.length ? t : [jo], E(qu())), O(le(n, function(n, r, u) {
                return {
                  criteria: l(t, function(t) {
                    return t(n)
                  }),
                  index: ++e,
                  value: n
                }
              }), function(n, t) {
                return eu(n, t, r)
              })
            }

            function ye(n, t) {
              return de(n, t, function(t, r) {
                return po(n, r)
              })
            }

            function de(n, t, r) {
              for (var e = -1, u = t.length, i = {}; ++e < u;) {
                var o = t[e],
                  f = Zr(n, o);
                r(f, o) && Re(i, Ke(o, n), f)
              }
              return i
            }

            function be(n) {
              return function(t) {
                return Zr(t, n)
              }
            }

            function we(n, t, r, e) {
              var u = e ? w : b,
                i = -1,
                o = t.length,
                f = n;
              for (n === t && (t = ou(t)), r && (f = l(n, E(r))); ++i < o;)
                for (var c = 0, a = t[i], s = r ? r(a) : a;
                  (c = u(f, s, c, e)) > -1;) f !== n && uf.call(f, c, 1), uf.call(n, c, 1);
              return n
            }

            function me(n, t) {
              for (var r = n ? t.length : 0, e = r - 1; r--;) {
                var u = t[r];
                if (r == e || u !== i) {
                  var i = u;
                  ei(u) ? uf.call(n, u, 1) : $e(n, u)
                }
              }
              return n
            }

            function xe(n, t) {
              return n + _f(Af() * (t - n + 1))
            }

            function je(n, t, r, e) {
              for (var u = -1, i = wf(pf((t - n) / (r || 1)), 0), o = Eo(i); i--;) o[e ? i : ++u] = n, n += r;
              return o
            }

            function Ae(n, t) {
              var r = "";
              if (!n || t < 1 || t > zn) return r;
              do {
                t % 2 && (r += n), (t = _f(t / 2)) && (n += n)
              } while (t);
              return r
            }

            function ke(n, t) {
              return ic(vi(n, t, jo), n + "")
            }

            function Oe(n) {
              return nr(yo(n))
            }

            function Ie(n, t) {
              var r = yo(n);
              return wi(r, pr(t, 0, r.length))
            }

            function Re(n, t, r, e) {
              if (!Xi(n)) return n;
              for (var u = -1, i = (t = Ke(t, n)).length, o = i - 1, f = n; null != f && ++u < i;) {
                var c = mi(t[u]),
                  a = r;
                if (u != o) {
                  var l = f[c];
                  (a = e ? e(l, c, f) : X) === X && (a = Xi(l) ? l : ei(t[u + 1]) ? [] : {})
                }
                ur(f, c, a), f = f[c]
              }
              return n
            }

            function ze(n) {
              return wi(yo(n))
            }

            function Ee(n, t, r) {
              var e = -1,
                u = n.length;
              t < 0 && (t = -t > u ? 0 : u + t), (r = r > u ? u : r) < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
              for (var i = Eo(u); ++e < u;) i[e] = n[e + t];
              return i
            }

            function Se(n, t) {
              var r;
              return Pf(n, function(n, e, u) {
                return !(r = t(n, e, u))
              }), !!r
            }

            function Le(n, t, r) {
              var e = 0,
                u = null == n ? e : n.length;
              if ("number" == typeof t && t === t && u <= Cn) {
                for (; e < u;) {
                  var i = e + u >>> 1,
                    o = n[i];
                  null !== o && !uo(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i
                }
                return u
              }
              return We(n, t, jo, r)
            }

            function We(n, t, r, e) {
              t = r(t);
              for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = uo(t), a = t === X; u < i;) {
                var l = _f((u + i) / 2),
                  s = r(n[l]),
                  h = s !== X,
                  p = null === s,
                  _ = s === s,
                  v = uo(s);
                if (o) var g = e || _;
                else g = a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : !p && !v && (e ? s <= t : s < t);
                g ? u = l + 1 : i = l
              }
              return mf(i, Wn)
            }

            function Ce(n, t) {
              for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
                var o = n[r],
                  f = t ? t(o) : o;
                if (!r || !Ki(f, c)) {
                  var c = f;
                  i[u++] = 0 === o ? 0 : o
                }
              }
              return i
            }

            function Ue(n) {
              return "number" == typeof n ? n : uo(n) ? Sn : +n
            }

            function Be(n) {
              if ("string" == typeof n) return n;
              if (Zc(n)) return l(n, Be) + "";
              if (uo(n)) return Ff ? Ff.call(n) : "";
              var t = n + "";
              return "0" == t && 1 / n == -Rn ? "-0" : t
            }

            function Te(n, t, r) {
              var e = -1,
                u = c,
                i = n.length,
                o = !0,
                f = [],
                l = f;
              if (r) o = !1, u = a;
              else if (i >= nn) {
                var s = t ? null : Yf(n);
                if (s) return q(s);
                o = !1, u = L, l = new Yt
              } else l = t ? [] : f;
              n: for (; ++e < i;) {
                var h = n[e],
                  p = t ? t(h) : h;
                if (h = r || 0 !== h ? h : 0, o && p === p) {
                  for (var _ = l.length; _--;)
                    if (l[_] === p) continue n;
                  t && l.push(p), f.push(h)
                } else u(l, p, r) || (l !== f && l.push(p), f.push(h))
              }
              return f
            }

            function $e(n, t) {
              return t = Ke(t, n), null == (n = gi(n, t)) || delete n[mi(zi(t))]
            }

            function De(n, t, r, e) {
              return Re(n, t, r(Zr(n, t)), e)
            }

            function Me(n, t, r, e) {
              for (var u = n.length, i = e ? u : -1;
                (e ? i-- : ++i < u) && t(n[i], i, n););
              return r ? Ee(n, e ? 0 : i, e ? i + 1 : u) : Ee(n, e ? i + 1 : 0, e ? u : i)
            }

            function Fe(n, t) {
              var r = n;
              return r instanceof Bt && (r = r.value()), h(t, function(n, t) {
                return t.func.apply(t.thisArg, s([n], t.args))
              }, r)
            }

            function Ne(n, t, r) {
              var e = n.length;
              if (e < 2) return e ? Te(n[0]) : [];
              for (var u = -1, i = Eo(e); ++u < e;)
                for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = xr(i[u] || o, n[f], t, r));
              return Te(Sr(i, 1), t, r)
            }

            function Pe(n, t, r) {
              for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) {
                var f = e < i ? t[e] : X;
                r(o, n[e], f)
              }
              return o
            }

            function qe(n) {
              return Gi(n) ? n : []
            }

            function Ze(n) {
              return "function" == typeof n ? n : jo
            }

            function Ke(n, t) {
              return Zc(n) ? n : ii(n, t) ? [n] : oc(so(n))
            }

            function Ve(n, t, r) {
              var e = n.length;
              return r = r === X ? e : r, !t && r >= e ? n : Ee(n, t, r)
            }

            function Ge(n, t) {
              if (t) return n.slice();
              var r = n.length,
                e = nf ? nf(r) : new n.constructor(r);
              return n.copy(e), e
            }

            function He(n) {
              var t = new n.constructor(n.byteLength);
              return new Xo(t).set(new Xo(n)), t
            }

            function Je(n, t) {
              var r = t ? He(n.buffer) : n.buffer;
              return new n.constructor(r, n.byteOffset, n.byteLength)
            }

            function Ye(t, r, e) {
              return h(r ? e(F(t), fn) : F(t), n, new t.constructor)
            }

            function Qe(n) {
              var t = new n.constructor(n.source, Dt.exec(n));
              return t.lastIndex = n.lastIndex, t
            }

            function Xe(n, r, e) {
              return h(r ? e(q(n), fn) : q(n), t, new n.constructor)
            }

            function nu(n) {
              return Mf ? Uo(Mf.call(n)) : {}
            }

            function tu(n, t) {
              var r = t ? He(n.buffer) : n.buffer;
              return new n.constructor(r, n.byteOffset, n.length)
            }

            function ru(n, t) {
              if (n !== t) {
                var r = n !== X,
                  e = null === n,
                  u = n === n,
                  i = uo(n),
                  o = t !== X,
                  f = null === t,
                  c = t === t,
                  a = uo(t);
                if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;
                if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1
              }
              return 0
            }

            function eu(n, t, r) {
              for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) {
                var c = ru(u[e], i[e]);
                if (c) return e >= f ? c : c * ("desc" == r[e] ? -1 : 1)
              }
              return n.index - t.index
            }

            function uu(n, t, r, e) {
              for (var u = -1, i = n.length, o = r.length, f = -1, c = t.length, a = wf(i - o, 0), l = Eo(c + a), s = !e; ++f < c;) l[f] = t[f];
              for (; ++u < o;)(s || u < i) && (l[r[u]] = n[u]);
              for (; a--;) l[f++] = n[u++];
              return l
            }

            function iu(n, t, r, e) {
              for (var u = -1, i = n.length, o = -1, f = r.length, c = -1, a = t.length, l = wf(i - f, 0), s = Eo(l + a), h = !e; ++u < l;) s[u] = n[u];
              for (var p = u; ++c < a;) s[p + c] = t[c];
              for (; ++o < f;)(h || u < i) && (s[p + r[o]] = n[u++]);
              return s
            }

            function ou(n, t) {
              var r = -1,
                e = n.length;
              for (t || (t = Eo(e)); ++r < e;) t[r] = n[r];
              return t
            }

            function fu(n, t, r, e) {
              var u = !r;
              r || (r = {});
              for (var i = -1, o = t.length; ++i < o;) {
                var f = t[i],
                  c = e ? e(r[f], n[f], f, r, n) : X;
                c === X && (c = n[f]), u ? sr(r, f, c) : ur(r, f, c)
              }
              return r
            }

            function cu(n, t) {
              return fu(n, Xf(n), t)
            }

            function au(n, t) {
              return fu(n, nc(n), t)
            }

            function lu(n, t) {
              return function(r, u) {
                var i = Zc(r) ? e : or,
                  o = t ? t() : {};
                return i(r, n, qu(u, 2), o)
              }
            }

            function su(n) {
              return ke(function(t, r) {
                var e = -1,
                  u = r.length,
                  i = u > 1 ? r[u - 1] : X,
                  o = u > 2 ? r[2] : X;
                for (i = n.length > 3 && "function" == typeof i ? (u--, i) : X, o && ui(r[0], r[1], o) && (i = u < 3 ? X : i, u = 1), t = Uo(t); ++e < u;) {
                  var f = r[e];
                  f && n(t, f, e, i)
                }
                return t
              })
            }

            function hu(n, t) {
              return function(r, e) {
                if (null == r) return r;
                if (!Vi(r)) return n(r, e);
                for (var u = r.length, i = t ? u : -1, o = Uo(r);
                  (t ? i-- : ++i < u) && !1 !== e(o[i], i, o););
                return r
              }
            }

            function pu(n) {
              return function(t, r, e) {
                for (var u = -1, i = Uo(t), o = e(t), f = o.length; f--;) {
                  var c = o[n ? f : ++u];
                  if (!1 === r(i[c], c, i)) break
                }
                return t
              }
            }

            function _u(n, t, r) {
              function e() {
                return (this && this !== Ir && this instanceof e ? i : n).apply(u ? r : this, arguments)
              }
              var u = t & hn,
                i = yu(n);
              return e
            }

            function vu(n) {
              return function(t) {
                var r = $(t = so(t)) ? H(t) : X,
                  e = r ? r[0] : t.charAt(0),
                  u = r ? Ve(r, 1).join("") : t.slice(1);
                return e[n]() + u
              }
            }

            function gu(n) {
              return function(t) {
                return h(mo(wo(t).replace(ar, "")), n, "")
              }
            }

            function yu(n) {
              return function() {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return new n;
                  case 1:
                    return new n(t[0]);
                  case 2:
                    return new n(t[0], t[1]);
                  case 3:
                    return new n(t[0], t[1], t[2]);
                  case 4:
                    return new n(t[0], t[1], t[2], t[3]);
                  case 5:
                    return new n(t[0], t[1], t[2], t[3], t[4]);
                  case 6:
                    return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                  case 7:
                    return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = Nf(n.prototype),
                  e = n.apply(r, t);
                return Xi(e) ? e : r
              }
            }

            function du(n, t, e) {
              function u() {
                for (var o = arguments.length, f = Eo(o), c = o, a = Pu(u); c--;) f[c] = arguments[c];
                var l = o < 3 && f[0] !== a && f[o - 1] !== a ? [] : P(f, a);
                return (o -= l.length) < e ? zu(n, t, mu, u.placeholder, X, f, l, X, X, e - o) : r(this && this !== Ir && this instanceof u ? i : n, this, f)
              }
              var i = yu(n);
              return u
            }

            function bu(n) {
              return function(t, r, e) {
                var u = Uo(t);
                if (!Vi(t)) {
                  var i = qu(r, 3);
                  t = _o(t), r = function(n) {
                    return i(u[n], n, u)
                  }
                }
                var o = n(t, r, e);
                return o > -1 ? u[i ? t[o] : o] : X
              }
            }

            function wu(n) {
              return Du(function(t) {
                var r = t.length,
                  e = r,
                  u = Y.prototype.thru;
                for (n && t.reverse(); e--;) {
                  var i = t[e];
                  if ("function" != typeof i) throw new $o(rn);
                  if (u && !o && "wrapper" == Nu(i)) var o = new Y([], !0)
                }
                for (e = o ? e : r; ++e < r;) {
                  var f = Nu(i = t[e]),
                    c = "wrapper" == f ? Qf(i) : X;
                  o = c && fi(c[0]) && c[1] == (bn | vn | yn | wn) && !c[4].length && 1 == c[9] ? o[Nu(c[0])].apply(o, c[3]) : 1 == i.length && fi(i) ? o[f]() : o.thru(i)
                }
                return function() {
                  var n = arguments,
                    e = n[0];
                  if (o && 1 == n.length && Zc(e)) return o.plant(e).value();
                  for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r;) i = t[u].call(this, i);
                  return i
                }
              })
            }

            function mu(n, t, r, e, u, i, o, f, c, a) {
              function l() {
                for (var y = arguments.length, d = Eo(y), b = y; b--;) d[b] = arguments[b];
                if (_) var w = Pu(l),
                  m = U(d, w);
                if (e && (d = uu(d, e, u, _)), i && (d = iu(d, i, o, _)), y -= m, _ && y < a) {
                  var x = P(d, w);
                  return zu(n, t, mu, l.placeholder, r, d, x, f, c, a - y)
                }
                var j = h ? r : this,
                  A = p ? j[n] : n;
                return y = d.length, f ? d = yi(d, f) : v && y > 1 && d.reverse(), s && c < y && (d.length = c), this && this !== Ir && this instanceof l && (A = g || yu(A)), A.apply(j, d)
              }
              var s = t & bn,
                h = t & hn,
                p = t & pn,
                _ = t & (vn | gn),
                v = t & mn,
                g = p ? X : yu(n);
              return l
            }

            function xu(n, t) {
              return function(r, e) {
                return Xr(r, n, t(e), {})
              }
            }

            function ju(n, t) {
              return function(r, e) {
                var u;
                if (r === X && e === X) return t;
                if (r !== X && (u = r), e !== X) {
                  if (u === X) return e;
                  "string" == typeof r || "string" == typeof e ? (r = Be(r), e = Be(e)) : (r = Ue(r), e = Ue(e)), u = n(r, e)
                }
                return u
              }
            }

            function Au(n) {
              return Du(function(t) {
                return t = l(t, E(qu())), ke(function(e) {
                  var u = this;
                  return n(t, function(n) {
                    return r(n, u, e)
                  })
                })
              })
            }

            function ku(n, t) {
              var r = (t = t === X ? " " : Be(t)).length;
              if (r < 2) return r ? Ae(t, n) : t;
              var e = Ae(t, pf(n / G(t)));
              return $(t) ? Ve(H(e), 0, n).join("") : e.slice(0, n)
            }

            function Ou(n, t, e, u) {
              function i() {
                for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Eo(l + c), h = this && this !== Ir && this instanceof i ? f : n; ++a < l;) s[a] = u[a];
                for (; c--;) s[a++] = arguments[++t];
                return r(h, o ? e : this, s)
              }
              var o = t & hn,
                f = yu(n);
              return i
            }

            function Iu(n) {
              return function(t, r, e) {
                return e && "number" != typeof e && ui(t, r, e) && (r = e = X), t = oo(t), r === X ? (r = t, t = 0) : r = oo(r), e = e === X ? t < r ? 1 : -1 : oo(e), je(t, r, e, n)
              }
            }

            function Ru(n) {
              return function(t, r) {
                return "string" == typeof t && "string" == typeof r || (t = ao(t), r = ao(r)), n(t, r)
              }
            }

            function zu(n, t, r, e, u, i, o, f, c, a) {
              var l = t & vn,
                s = l ? o : X,
                h = l ? X : o,
                p = l ? i : X,
                _ = l ? X : i;
              t |= l ? yn : dn, (t &= ~(l ? dn : yn)) & _n || (t &= ~(hn | pn));
              var v = [n, t, u, p, s, _, h, f, c, a],
                g = r.apply(X, v);
              return fi(n) && ec(g, v), g.placeholder = e, di(g, n, t)
            }

            function Eu(n) {
              var t = Co[n];
              return function(n, r) {
                if (n = ao(n), r = null == r ? 0 : mf(fo(r), 292)) {
                  var e = (so(n) + "e").split("e");
                  return +((e = (so(t(e[0] + "e" + (+e[1] + r))) + "e").split("e"))[0] + "e" + (+e[1] - r))
                }
                return t(n)
              }
            }

            function Su(n) {
              return function(t) {
                var r = tc(t);
                return r == Zn ? F(t) : r == Yn ? Z(t) : z(t, n(t))
              }
            }

            function Lu(n, t, r, e, u, i, o, f) {
              var c = t & pn;
              if (!c && "function" != typeof n) throw new $o(rn);
              var a = e ? e.length : 0;
              if (a || (t &= ~(yn | dn), e = u = X), o = o === X ? o : wf(fo(o), 0), f = f === X ? f : fo(f), a -= u ? u.length : 0, t & dn) {
                var l = e,
                  s = u;
                e = u = X
              }
              var h = c ? X : Qf(n),
                p = [n, t, r, e, u, l, s, i, o, f];
              if (h && hi(p, h), n = p[0], t = p[1], r = p[2], e = p[3], u = p[4], !(f = p[9] = p[9] === X ? c ? 0 : n.length : wf(p[9] - a, 0)) && t & (vn | gn) && (t &= ~(vn | gn)), t && t != hn) _ = t == vn || t == gn ? du(n, t, f) : t != yn && t != (hn | yn) || u.length ? mu.apply(X, p) : Ou(n, t, r, e);
              else var _ = _u(n, t, r);
              return di((h ? Vf : ec)(_, p), n, t)
            }

            function Wu(n, t, r, e) {
              return n === X || Ki(n, Fo[r]) && !qo.call(e, r) ? t : n
            }

            function Cu(n, t, r, e, u, i) {
              return Xi(n) && Xi(t) && (i.set(t, n), pe(n, t, X, Cu, i), i.delete(t)), n
            }

            function Uu(n) {
              return ro(n) ? X : n
            }

            function Bu(n, t, r, e, u, i) {
              var o = r & ln,
                f = n.length,
                c = t.length;
              if (f != c && !(o && c > f)) return !1;
              var a = i.get(n);
              if (a && i.get(t)) return a == t;
              var l = -1,
                s = !0,
                h = r & sn ? new Yt : X;
              for (i.set(n, t), i.set(t, n); ++l < f;) {
                var p = n[l],
                  v = t[l];
                if (e) var g = o ? e(v, p, l, t, n, i) : e(p, v, l, n, t, i);
                if (g !== X) {
                  if (g) continue;
                  s = !1;
                  break
                }
                if (h) {
                  if (!_(t, function(n, t) {
                      if (!L(h, t) && (p === n || u(p, n, r, e, i))) return h.push(t)
                    })) {
                    s = !1;
                    break
                  }
                } else if (p !== v && !u(p, v, r, e, i)) {
                  s = !1;
                  break
                }
              }
              return i.delete(n), i.delete(t), s
            }

            function Tu(n, t, r, e, u, i, o) {
              switch (r) {
                case ut:
                  if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                  n = n.buffer, t = t.buffer;
                case et:
                  return !(n.byteLength != t.byteLength || !i(new Xo(n), new Xo(t)));
                case Dn:
                case Mn:
                case Kn:
                  return Ki(+n, +t);
                case Nn:
                  return n.name == t.name && n.message == t.message;
                case Jn:
                case Qn:
                  return n == t + "";
                case Zn:
                  var f = F;
                case Yn:
                  var c = e & ln;
                  if (f || (f = q), n.size != t.size && !c) return !1;
                  var a = o.get(n);
                  if (a) return a == t;
                  e |= sn, o.set(n, t);
                  var l = Bu(f(n), f(t), e, u, i, o);
                  return o.delete(n), l;
                case Xn:
                  if (Mf) return Mf.call(n) == Mf.call(t)
              }
              return !1
            }

            function $u(n, t, r, e, u, i) {
              var o = r & ln,
                f = Mu(n),
                c = f.length;
              if (c != Mu(t).length && !o) return !1;
              for (var a = c; a--;) {
                var l = f[a];
                if (!(o ? l in t : qo.call(t, l))) return !1
              }
              var s = i.get(n);
              if (s && i.get(t)) return s == t;
              var h = !0;
              i.set(n, t), i.set(t, n);
              for (var p = o; ++a < c;) {
                var _ = n[l = f[a]],
                  v = t[l];
                if (e) var g = o ? e(v, _, l, t, n, i) : e(_, v, l, n, t, i);
                if (!(g === X ? _ === v || u(_, v, r, e, i) : g)) {
                  h = !1;
                  break
                }
                p || (p = "constructor" == l)
              }
              if (h && !p) {
                var y = n.constructor,
                  d = t.constructor;
                y != d && "constructor" in n && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof d && d instanceof d) && (h = !1)
              }
              return i.delete(n), i.delete(t), h
            }

            function Du(n) {
              return ic(vi(n, X, Ii), n + "")
            }

            function Mu(n) {
              return Kr(n, _o, Xf)
            }

            function Fu(n) {
              return Kr(n, vo, nc)
            }

            function Nu(n) {
              for (var t = n.name + "", r = Wf[t], e = qo.call(Wf, t) ? r.length : 0; e--;) {
                var u = r[e],
                  i = u.func;
                if (null == i || i == n) return u.name
              }
              return t
            }

            function Pu(n) {
              return (qo.call(K, "placeholder") ? K : n).placeholder
            }

            function qu() {
              var n = K.iteratee || Ao;
              return n = n === Ao ? oe : n, arguments.length ? n(arguments[0], arguments[1]) : n
            }

            function Zu(n, t) {
              var r = n.__data__;
              return oi(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function Ku(n) {
              for (var t = _o(n), r = t.length; r--;) {
                var e = t[r],
                  u = n[e];
                t[r] = [e, u, li(u)]
              }
              return t
            }

            function Vu(n, t) {
              var r = T(n, t);
              return ie(r) ? r : X
            }

            function Gu(n) {
              var t = qo.call(n, cf),
                r = n[cf];
              try {
                n[cf] = X;
                var e = !0
              } catch (n) {}
              var u = Vo.call(n);
              return e && (t ? n[cf] = r : delete n[cf]), u
            }

            function Hu(n, t, r) {
              for (var e = -1, u = r.length; ++e < u;) {
                var i = r[e],
                  o = i.size;
                switch (i.type) {
                  case "drop":
                    n += o;
                    break;
                  case "dropRight":
                    t -= o;
                    break;
                  case "take":
                    t = mf(t, n + o);
                    break;
                  case "takeRight":
                    n = wf(n, t - o)
                }
              }
              return {
                start: n,
                end: t
              }
            }

            function Ju(n) {
              var t = n.match(Ct);
              return t ? t[1].split(Ut) : []
            }

            function Yu(n, t, r) {
              for (var e = -1, u = (t = Ke(t, n)).length, i = !1; ++e < u;) {
                var o = mi(t[e]);
                if (!(i = null != n && r(n, o))) break;
                n = n[o]
              }
              return i || ++e != u ? i : !!(u = null == n ? 0 : n.length) && Qi(u) && ei(o, u) && (Zc(n) || qc(n))
            }

            function Qu(n) {
              var t = n.length,
                r = n.constructor(t);
              return t && "string" == typeof n[0] && qo.call(n, "index") && (r.index = n.index, r.input = n.input), r
            }

            function Xu(n) {
              return "function" != typeof n.constructor || ai(n) ? {} : Nf(tf(n))
            }

            function ni(n, t, r, e) {
              var u = n.constructor;
              switch (t) {
                case et:
                  return He(n);
                case Dn:
                case Mn:
                  return new u(+n);
                case ut:
                  return Je(n, e);
                case it:
                case ot:
                case ft:
                case ct:
                case at:
                case lt:
                case st:
                case ht:
                case pt:
                  return tu(n, e);
                case Zn:
                  return Ye(n, e, r);
                case Kn:
                case Qn:
                  return new u(n);
                case Jn:
                  return Qe(n);
                case Yn:
                  return Xe(n, e, r);
                case Xn:
                  return nu(n)
              }
            }

            function ti(n, t) {
              var r = t.length;
              if (!r) return n;
              var e = r - 1;
              return t[e] = (r > 1 ? "& " : "") + t[e], t = t.join(r > 2 ? ", " : " "), n.replace(Wt, "{\n/* [wrapped with " + t + "] */\n")
            }

            function ri(n) {
              return Zc(n) || qc(n) || !!( of && n && n[ of ])
            }

            function ei(n, t) {
              return !!(t = null == t ? zn : t) && ("number" == typeof n || qt.test(n)) && n > -1 && n % 1 == 0 && n < t
            }

            function ui(n, t, r) {
              if (!Xi(r)) return !1;
              var e = typeof t;
              return !!("number" == e ? Vi(r) && ei(t, r.length) : "string" == e && t in r) && Ki(r[t], n)
            }

            function ii(n, t) {
              if (Zc(n)) return !1;
              var r = typeof n;
              return !("number" != r && "symbol" != r && "boolean" != r && null != n && !uo(n)) || kt.test(n) || !At.test(n) || null != t && n in Uo(t)
            }

            function oi(n) {
              var t = typeof n;
              return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== n : null === n
            }

            function fi(n) {
              var t = Nu(n),
                r = K[t];
              if ("function" != typeof r || !(t in Bt.prototype)) return !1;
              if (n === r) return !0;
              var e = Qf(r);
              return !!e && n === e[0]
            }

            function ci(n) {
              return !!Ko && Ko in n
            }

            function ai(n) {
              var t = n && n.constructor;
              return n === ("function" == typeof t && t.prototype || Fo)
            }

            function li(n) {
              return n === n && !Xi(n)
            }

            function si(n, t) {
              return function(r) {
                return null != r && r[n] === t && (t !== X || n in Uo(r))
              }
            }

            function hi(n, t) {
              var r = n[1],
                e = t[1],
                u = r | e,
                i = u < (hn | pn | bn),
                o = e == bn && r == vn || e == bn && r == wn && n[7].length <= t[8] || e == (bn | wn) && t[7].length <= t[8] && r == vn;
              if (!i && !o) return n;
              e & hn && (n[2] = t[2], u |= r & hn ? 0 : _n);
              var f = t[3];
              if (f) {
                var c = n[3];
                n[3] = c ? uu(c, f, t[4]) : f, n[4] = c ? P(n[3], on) : t[4]
              }
              return (f = t[5]) && (c = n[5], n[5] = c ? iu(c, f, t[6]) : f, n[6] = c ? P(n[5], on) : t[6]), (f = t[7]) && (n[7] = f), e & bn && (n[8] = null == n[8] ? t[8] : mf(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u, n
            }

            function pi(n) {
              var t = [];
              if (null != n)
                for (var r in Uo(n)) t.push(r);
              return t
            }

            function _i(n) {
              return Vo.call(n)
            }

            function vi(n, t, e) {
              return t = wf(t === X ? n.length - 1 : t, 0),
                function() {
                  for (var u = arguments, i = -1, o = wf(u.length - t, 0), f = Eo(o); ++i < o;) f[i] = u[t + i];
                  i = -1;
                  for (var c = Eo(t + 1); ++i < t;) c[i] = u[i];
                  return c[t] = e(f), r(n, this, c)
                }
            }

            function gi(n, t) {
              return t.length < 2 ? n : Zr(n, Ee(t, 0, -1))
            }

            function yi(n, t) {
              for (var r = n.length, e = mf(t.length, r), u = ou(n); e--;) {
                var i = t[e];
                n[e] = ei(i, r) ? u[i] : X
              }
              return n
            }

            function di(n, t, r) {
              var e = t + "";
              return ic(n, ti(e, ji(Ju(e), r)))
            }

            function bi(n) {
              var t = 0,
                r = 0;
              return function() {
                var e = xf(),
                  u = kn - (e - r);
                if (r = e, u > 0) {
                  if (++t >= An) return arguments[0]
                } else t = 0;
                return n.apply(X, arguments)
              }
            }

            function wi(n, t) {
              var r = -1,
                e = n.length,
                u = e - 1;
              for (t = t === X ? e : t; ++r < t;) {
                var i = xe(r, u),
                  o = n[i];
                n[i] = n[r], n[r] = o
              }
              return n.length = t, n
            }

            function mi(n) {
              if ("string" == typeof n || uo(n)) return n;
              var t = n + "";
              return "0" == t && 1 / n == -Rn ? "-0" : t
            }

            function xi(n) {
              if (null != n) {
                try {
                  return Po.call(n)
                } catch (n) {}
                try {
                  return n + ""
                } catch (n) {}
              }
              return ""
            }

            function ji(n, t) {
              return u(Un, function(r) {
                var e = "_." + r[0];
                t & r[1] && !c(n, e) && n.push(e)
              }), n.sort()
            }

            function Ai(n) {
              if (n instanceof Bt) return n.clone();
              var t = new Y(n.__wrapped__, n.__chain__);
              return t.__actions__ = ou(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
            }

            function ki(n, t, r) {
              var e = null == n ? 0 : n.length;
              if (!e) return -1;
              var u = null == r ? 0 : fo(r);
              return u < 0 && (u = wf(e + u, 0)), d(n, qu(t, 3), u)
            }

            function Oi(n, t, r) {
              var e = null == n ? 0 : n.length;
              if (!e) return -1;
              var u = e - 1;
              return r !== X && (u = fo(r), u = r < 0 ? wf(e + u, 0) : mf(u, e - 1)), d(n, qu(t, 3), u, !0)
            }

            function Ii(n) {
              return (null == n ? 0 : n.length) ? Sr(n, 1) : []
            }

            function Ri(n) {
              return n && n.length ? n[0] : X
            }

            function zi(n) {
              var t = null == n ? 0 : n.length;
              return t ? n[t - 1] : X
            }

            function Ei(n, t) {
              return n && n.length && t && t.length ? we(n, t) : n
            }

            function Si(n) {
              return null == n ? n : kf.call(n)
            }

            function Li(n) {
              if (!n || !n.length) return [];
              var t = 0;
              return n = f(n, function(n) {
                if (Gi(n)) return t = wf(n.length, t), !0
              }), R(t, function(t) {
                return l(n, j(t))
              })
            }

            function Wi(n, t) {
              if (!n || !n.length) return [];
              var e = Li(n);
              return null == t ? e : l(e, function(n) {
                return r(t, X, n)
              })
            }

            function Ci(n) {
              var t = K(n);
              return t.__chain__ = !0, t
            }

            function Ui(n, t) {
              return t(n)
            }

            function Bi(n, t) {
              return (Zc(n) ? u : Pf)(n, qu(t, 3))
            }

            function Ti(n, t) {
              return (Zc(n) ? i : qf)(n, qu(t, 3))
            }

            function $i(n, t) {
              return (Zc(n) ? l : le)(n, qu(t, 3))
            }

            function Di(n, t, r) {
              return t = r ? X : t, t = n && null == t ? n.length : t, Lu(n, bn, X, X, X, X, t)
            }

            function Mi(n, t) {
              var r;
              if ("function" != typeof t) throw new $o(rn);
              return n = fo(n),
                function() {
                  return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r
                }
            }

            function Fi(n, t, r) {
              var e = Lu(n, vn, X, X, X, X, X, t = r ? X : t);
              return e.placeholder = Fi.placeholder, e
            }

            function Ni(n, t, r) {
              var e = Lu(n, gn, X, X, X, X, X, t = r ? X : t);
              return e.placeholder = Ni.placeholder, e
            }

            function Pi(n, t, r) {
              function e(t) {
                var r = l,
                  e = s;
                return l = s = X, g = t, p = n.apply(e, r)
              }

              function u(n) {
                return g = n, _ = uc(f, t), y ? e(n) : p
              }

              function i(n) {
                var r = n - g,
                  e = t - (n - v);
                return d ? mf(e, h - r) : e
              }

              function o(n) {
                var r = n - v,
                  e = n - g;
                return v === X || r >= t || r < 0 || d && e >= h
              }

              function f() {
                var n = Wc();
                if (o(n)) return c(n);
                _ = uc(f, i(n))
              }

              function c(n) {
                return _ = X, b && l ? e(n) : (l = s = X, p)
              }

              function a() {
                var n = Wc(),
                  r = o(n);
                if (l = arguments, s = this, v = n, r) {
                  if (_ === X) return u(v);
                  if (d) return _ = uc(f, t), e(v)
                }
                return _ === X && (_ = uc(f, t)), p
              }
              var l, s, h, p, _, v, g = 0,
                y = !1,
                d = !1,
                b = !0;
              if ("function" != typeof n) throw new $o(rn);
              return t = ao(t) || 0, Xi(r) && (y = !!r.leading, h = (d = "maxWait" in r) ? wf(ao(r.maxWait) || 0, t) : h, b = "trailing" in r ? !!r.trailing : b), a.cancel = function() {
                _ !== X && Jf(_), g = 0, l = v = s = _ = X
              }, a.flush = function() {
                return _ === X ? p : c(Wc())
              }, a
            }

            function qi(n, t) {
              if ("function" != typeof n || null != t && "function" != typeof t) throw new $o(rn);
              var r = function() {
                var e = arguments,
                  u = t ? t.apply(this, e) : e[0],
                  i = r.cache;
                if (i.has(u)) return i.get(u);
                var o = n.apply(this, e);
                return r.cache = i.set(u, o) || i, o
              };
              return r.cache = new(qi.Cache || Jt), r
            }

            function Zi(n) {
              if ("function" != typeof n) throw new $o(rn);
              return function() {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return !n.call(this);
                  case 1:
                    return !n.call(this, t[0]);
                  case 2:
                    return !n.call(this, t[0], t[1]);
                  case 3:
                    return !n.call(this, t[0], t[1], t[2])
                }
                return !n.apply(this, t)
              }
            }

            function Ki(n, t) {
              return n === t || n !== n && t !== t
            }

            function Vi(n) {
              return null != n && Qi(n.length) && !Ji(n)
            }

            function Gi(n) {
              return no(n) && Vi(n)
            }

            function Hi(n) {
              if (!no(n)) return !1;
              var t = Vr(n);
              return t == Nn || t == Fn || "string" == typeof n.message && "string" == typeof n.name && !ro(n)
            }

            function Ji(n) {
              if (!Xi(n)) return !1;
              var t = Vr(n);
              return t == Pn || t == qn || t == $n || t == Hn
            }

            function Yi(n) {
              return "number" == typeof n && n == fo(n)
            }

            function Qi(n) {
              return "number" == typeof n && n > -1 && n % 1 == 0 && n <= zn
            }

            function Xi(n) {
              var t = typeof n;
              return null != n && ("object" == t || "function" == t)
            }

            function no(n) {
              return null != n && "object" == typeof n
            }

            function to(n) {
              return "number" == typeof n || no(n) && Vr(n) == Kn
            }

            function ro(n) {
              if (!no(n) || Vr(n) != Gn) return !1;
              var t = tf(n);
              if (null === t) return !0;
              var r = qo.call(t, "constructor") && t.constructor;
              return "function" == typeof r && r instanceof r && Po.call(r) == Go
            }

            function eo(n) {
              return "string" == typeof n || !Zc(n) && no(n) && Vr(n) == Qn
            }

            function uo(n) {
              return "symbol" == typeof n || no(n) && Vr(n) == Xn
            }

            function io(n) {
              if (!n) return [];
              if (Vi(n)) return eo(n) ? H(n) : ou(n);
              if (ff && n[ff]) return M(n[ff]());
              var t = tc(n);
              return (t == Zn ? F : t == Yn ? q : yo)(n)
            }

            function oo(n) {
              return n ? (n = ao(n)) === Rn || n === -Rn ? (n < 0 ? -1 : 1) * En : n === n ? n : 0 : 0 === n ? n : 0
            }

            function fo(n) {
              var t = oo(n),
                r = t % 1;
              return t === t ? r ? t - r : t : 0
            }

            function co(n) {
              return n ? pr(fo(n), 0, Ln) : 0
            }

            function ao(n) {
              if ("number" == typeof n) return n;
              if (uo(n)) return Sn;
              if (Xi(n)) {
                var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                n = Xi(t) ? t + "" : t
              }
              if ("string" != typeof n) return 0 === n ? n : +n;
              n = n.replace(Et, "");
              var r = Ft.test(n);
              return r || Pt.test(n) ? Ar(n.slice(2), r ? 2 : 8) : Mt.test(n) ? Sn : +n
            }

            function lo(n) {
              return fu(n, vo(n))
            }

            function so(n) {
              return null == n ? "" : Be(n)
            }

            function ho(n, t, r) {
              var e = null == n ? X : Zr(n, t);
              return e === X ? r : e
            }

            function po(n, t) {
              return null != n && Yu(n, t, Jr)
            }

            function _o(n) {
              return Vi(n) ? Xt(n) : fe(n)
            }

            function vo(n) {
              return Vi(n) ? Xt(n, !0) : ce(n)
            }

            function go(n, t) {
              if (null == n) return {};
              var r = l(Fu(n), function(n) {
                return [n]
              });
              return t = qu(t), de(n, r, function(n, r) {
                return t(n, r[0])
              })
            }

            function yo(n) {
              return null == n ? [] : S(n, _o(n))
            }

            function bo(n) {
              return Aa(so(n).toLowerCase())
            }

            function wo(n) {
              return (n = so(n)) && n.replace(Zt, Mr).replace(lr, "")
            }

            function mo(n, t, r) {
              return n = so(n), (t = r ? X : t) === X ? D(n) ? Q(n) : g(n) : n.match(t) || []
            }

            function xo(n) {
              return function() {
                return n
              }
            }

            function jo(n) {
              return n
            }

            function Ao(n) {
              return oe("function" == typeof n ? n : _r(n, fn))
            }

            function ko(n, t, r) {
              var e = _o(t),
                i = qr(t, e);
              null != r || Xi(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = qr(t, _o(t)));
              var o = !(Xi(r) && "chain" in r && !r.chain),
                f = Ji(n);
              return u(i, function(r) {
                var e = t[r];
                n[r] = e, f && (n.prototype[r] = function() {
                  var t = this.__chain__;
                  if (o || t) {
                    var r = n(this.__wrapped__);
                    return (r.__actions__ = ou(this.__actions__)).push({
                      func: e,
                      args: arguments,
                      thisArg: n
                    }), r.__chain__ = t, r
                  }
                  return e.apply(n, s([this.value()], arguments))
                })
              }), n
            }

            function Oo() {}

            function Io(n) {
              return ii(n) ? j(mi(n)) : be(n)
            }

            function Ro() {
              return []
            }

            function zo() {
              return !1
            }
            var Eo = (A = null == A ? Ir : Pr.defaults(Ir.Object(), A, Pr.pick(Ir, vr))).Array,
              So = A.Date,
              Lo = A.Error,
              Wo = A.Function,
              Co = A.Math,
              Uo = A.Object,
              Bo = A.RegExp,
              To = A.String,
              $o = A.TypeError,
              Do = Eo.prototype,
              Mo = Wo.prototype,
              Fo = Uo.prototype,
              No = A["__core-js_shared__"],
              Po = Mo.toString,
              qo = Fo.hasOwnProperty,
              Zo = 0,
              Ko = function() {
                var n = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
                return n ? "Symbol(src)_1." + n : ""
              }(),
              Vo = Fo.toString,
              Go = Po.call(Uo),
              Ho = Ir._,
              Jo = Bo("^" + Po.call(qo).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
              Yo = Er ? A.Buffer : X,
              Qo = A.Symbol,
              Xo = A.Uint8Array,
              nf = Yo ? Yo.allocUnsafe : X,
              tf = N(Uo.getPrototypeOf, Uo),
              rf = Uo.create,
              ef = Fo.propertyIsEnumerable,
              uf = Do.splice,
              of = Qo ? Qo.isConcatSpreadable : X,
              ff = Qo ? Qo.iterator : X,
              cf = Qo ? Qo.toStringTag : X,
              af = function() {
                try {
                  var n = Vu(Uo, "defineProperty");
                  return n({}, "", {}), n
                } catch (n) {}
              }(),
              lf = A.clearTimeout !== Ir.clearTimeout && A.clearTimeout,
              sf = So && So.now !== Ir.Date.now && So.now,
              hf = A.setTimeout !== Ir.setTimeout && A.setTimeout,
              pf = Co.ceil,
              _f = Co.floor,
              vf = Uo.getOwnPropertySymbols,
              gf = Yo ? Yo.isBuffer : X,
              yf = A.isFinite,
              df = Do.join,
              bf = N(Uo.keys, Uo),
              wf = Co.max,
              mf = Co.min,
              xf = So.now,
              jf = A.parseInt,
              Af = Co.random,
              kf = Do.reverse,
              Of = Vu(A, "DataView"),
              If = Vu(A, "Map"),
              Rf = Vu(A, "Promise"),
              zf = Vu(A, "Set"),
              Ef = Vu(A, "WeakMap"),
              Sf = Vu(Uo, "create"),
              Lf = Ef && new Ef,
              Wf = {},
              Cf = xi(Of),
              Uf = xi(If),
              Bf = xi(Rf),
              Tf = xi(zf),
              $f = xi(Ef),
              Df = Qo ? Qo.prototype : X,
              Mf = Df ? Df.valueOf : X,
              Ff = Df ? Df.toString : X,
              Nf = function() {
                function n() {}
                return function(t) {
                  if (!Xi(t)) return {};
                  if (rf) return rf(t);
                  n.prototype = t;
                  var r = new n;
                  return n.prototype = X, r
                }
              }();
            K.templateSettings = {
              escape: mt,
              evaluate: xt,
              interpolate: jt,
              variable: "",
              imports: {
                _: K
              }
            }, K.prototype = J.prototype, K.prototype.constructor = K, Y.prototype = Nf(J.prototype), Y.prototype.constructor = Y, Bt.prototype = Nf(J.prototype), Bt.prototype.constructor = Bt, Gt.prototype.clear = function() {
              this.__data__ = Sf ? Sf(null) : {}, this.size = 0
            }, Gt.prototype.delete = function(n) {
              var t = this.has(n) && delete this.__data__[n];
              return this.size -= t ? 1 : 0, t
            }, Gt.prototype.get = function(n) {
              var t = this.__data__;
              if (Sf) {
                var r = t[n];
                return r === en ? X : r
              }
              return qo.call(t, n) ? t[n] : X
            }, Gt.prototype.has = function(n) {
              var t = this.__data__;
              return Sf ? t[n] !== X : qo.call(t, n)
            }, Gt.prototype.set = function(n, t) {
              var r = this.__data__;
              return this.size += this.has(n) ? 0 : 1, r[n] = Sf && t === X ? en : t, this
            }, Ht.prototype.clear = function() {
              this.__data__ = [], this.size = 0
            }, Ht.prototype.delete = function(n) {
              var t = this.__data__,
                r = ir(t, n);
              return !(r < 0 || (r == t.length - 1 ? t.pop() : uf.call(t, r, 1), --this.size, 0))
            }, Ht.prototype.get = function(n) {
              var t = this.__data__,
                r = ir(t, n);
              return r < 0 ? X : t[r][1]
            }, Ht.prototype.has = function(n) {
              return ir(this.__data__, n) > -1
            }, Ht.prototype.set = function(n, t) {
              var r = this.__data__,
                e = ir(r, n);
              return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this
            }, Jt.prototype.clear = function() {
              this.size = 0, this.__data__ = {
                hash: new Gt,
                map: new(If || Ht),
                string: new Gt
              }
            }, Jt.prototype.delete = function(n) {
              var t = Zu(this, n).delete(n);
              return this.size -= t ? 1 : 0, t
            }, Jt.prototype.get = function(n) {
              return Zu(this, n).get(n)
            }, Jt.prototype.has = function(n) {
              return Zu(this, n).has(n)
            }, Jt.prototype.set = function(n, t) {
              var r = Zu(this, n),
                e = r.size;
              return r.set(n, t), this.size += r.size == e ? 0 : 1, this
            }, Yt.prototype.add = Yt.prototype.push = function(n) {
              return this.__data__.set(n, en), this
            }, Yt.prototype.has = function(n) {
              return this.__data__.has(n)
            }, Qt.prototype.clear = function() {
              this.__data__ = new Ht, this.size = 0
            }, Qt.prototype.delete = function(n) {
              var t = this.__data__,
                r = t.delete(n);
              return this.size = t.size, r
            }, Qt.prototype.get = function(n) {
              return this.__data__.get(n)
            }, Qt.prototype.has = function(n) {
              return this.__data__.has(n)
            }, Qt.prototype.set = function(n, t) {
              var r = this.__data__;
              if (r instanceof Ht) {
                var e = r.__data__;
                if (!If || e.length < nn - 1) return e.push([n, t]), this.size = ++r.size, this;
                r = this.__data__ = new Jt(e)
              }
              return r.set(n, t), this.size = r.size, this
            };
            var Pf = hu(Lr),
              qf = hu(Dr, !0),
              Zf = pu(),
              Kf = pu(!0),
              Vf = Lf ? function(n, t) {
                return Lf.set(n, t), n
              } : jo,
              Gf = af ? function(n, t) {
                return af(n, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: xo(t),
                  writable: !0
                })
              } : jo,
              Hf = ke,
              Jf = lf || function(n) {
                return Ir.clearTimeout(n)
              },
              Yf = zf && 1 / q(new zf([, -0]))[1] == Rn ? function(n) {
                return new zf(n)
              } : Oo,
              Qf = Lf ? function(n) {
                return Lf.get(n)
              } : Oo,
              Xf = vf ? function(n) {
                return null == n ? [] : (n = Uo(n), f(vf(n), function(t) {
                  return ef.call(n, t)
                }))
              } : Ro,
              nc = vf ? function(n) {
                for (var t = []; n;) s(t, Xf(n)), n = tf(n);
                return t
              } : Ro,
              tc = Vr;
            (Of && tc(new Of(new ArrayBuffer(1))) != ut || If && tc(new If) != Zn || Rf && "[object Promise]" != tc(Rf.resolve()) || zf && tc(new zf) != Yn || Ef && tc(new Ef) != tt) && (tc = function(n) {
              var t = Vr(n),
                r = t == Gn ? n.constructor : X,
                e = r ? xi(r) : "";
              if (e) switch (e) {
                case Cf:
                  return ut;
                case Uf:
                  return Zn;
                case Bf:
                  return "[object Promise]";
                case Tf:
                  return Yn;
                case $f:
                  return tt
              }
              return t
            });
            var rc = No ? Ji : zo,
              ec = bi(Vf),
              uc = hf || function(n, t) {
                return Ir.setTimeout(n, t)
              },
              ic = bi(Gf),
              oc = function(n) {
                var t = qi(n, function(n) {
                    return r.size === un && r.clear(), n
                  }),
                  r = t.cache;
                return t
              }(function(n) {
                var t = [];
                return Ot.test(n) && t.push(""), n.replace(It, function(n, r, e, u) {
                  t.push(e ? u.replace(Tt, "$1") : r || n)
                }), t
              }),
              fc = ke(function(n, t) {
                return Gi(n) ? xr(n, Sr(t, 1, Gi, !0)) : []
              }),
              cc = ke(function(n, t) {
                var r = zi(t);
                return Gi(r) && (r = X), Gi(n) ? xr(n, Sr(t, 1, Gi, !0), qu(r, 2)) : []
              }),
              ac = ke(function(n, t) {
                var r = zi(t);
                return Gi(r) && (r = X), Gi(n) ? xr(n, Sr(t, 1, Gi, !0), X, r) : []
              }),
              lc = ke(function(n) {
                var t = l(n, qe);
                return t.length && t[0] === n[0] ? Qr(t) : []
              }),
              sc = ke(function(n) {
                var t = zi(n),
                  r = l(n, qe);
                return t === zi(r) ? t = X : r.pop(), r.length && r[0] === n[0] ? Qr(r, qu(t, 2)) : []
              }),
              hc = ke(function(n) {
                var t = zi(n),
                  r = l(n, qe);
                return (t = "function" == typeof t ? t : X) && r.pop(), r.length && r[0] === n[0] ? Qr(r, X, t) : []
              }),
              pc = ke(Ei),
              _c = Du(function(n, t) {
                var r = null == n ? 0 : n.length,
                  e = hr(n, t);
                return me(n, l(t, function(n) {
                  return ei(n, r) ? +n : n
                }).sort(ru)), e
              }),
              vc = ke(function(n) {
                return Te(Sr(n, 1, Gi, !0))
              }),
              gc = ke(function(n) {
                var t = zi(n);
                return Gi(t) && (t = X), Te(Sr(n, 1, Gi, !0), qu(t, 2))
              }),
              yc = ke(function(n) {
                var t = zi(n);
                return t = "function" == typeof t ? t : X, Te(Sr(n, 1, Gi, !0), X, t)
              }),
              dc = ke(function(n, t) {
                return Gi(n) ? xr(n, t) : []
              }),
              bc = ke(function(n) {
                return Ne(f(n, Gi))
              }),
              wc = ke(function(n) {
                var t = zi(n);
                return Gi(t) && (t = X), Ne(f(n, Gi), qu(t, 2))
              }),
              mc = ke(function(n) {
                var t = zi(n);
                return t = "function" == typeof t ? t : X, Ne(f(n, Gi), X, t)
              }),
              xc = ke(Li),
              jc = ke(function(n) {
                var t = n.length,
                  r = t > 1 ? n[t - 1] : X;
                return r = "function" == typeof r ? (n.pop(), r) : X, Wi(n, r)
              }),
              Ac = Du(function(n) {
                var t = n.length,
                  r = t ? n[0] : 0,
                  e = this.__wrapped__,
                  u = function(t) {
                    return hr(t, n)
                  };
                return !(t > 1 || this.__actions__.length) && e instanceof Bt && ei(r) ? ((e = e.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                  func: Ui,
                  args: [u],
                  thisArg: X
                }), new Y(e, this.__chain__).thru(function(n) {
                  return t && !n.length && n.push(X), n
                })) : this.thru(u)
              }),
              kc = lu(function(n, t, r) {
                qo.call(n, r) ? ++n[r] : sr(n, r, 1)
              }),
              Oc = bu(ki),
              Ic = bu(Oi),
              Rc = lu(function(n, t, r) {
                qo.call(n, r) ? n[r].push(t) : sr(n, r, [t])
              }),
              zc = ke(function(n, t, e) {
                var u = -1,
                  i = "function" == typeof t,
                  o = Vi(n) ? Eo(n.length) : [];
                return Pf(n, function(n) {
                  o[++u] = i ? r(t, n, e) : ne(n, t, e)
                }), o
              }),
              Ec = lu(function(n, t, r) {
                sr(n, r, t)
              }),
              Sc = lu(function(n, t, r) {
                n[r ? 0 : 1].push(t)
              }, function() {
                return [
                  [],
                  []
                ]
              }),
              Lc = ke(function(n, t) {
                if (null == n) return [];
                var r = t.length;
                return r > 1 && ui(n, t[0], t[1]) ? t = [] : r > 2 && ui(t[0], t[1], t[2]) && (t = [t[0]]), ge(n, Sr(t, 1), [])
              }),
              Wc = sf || function() {
                return Ir.Date.now()
              },
              Cc = ke(function(n, t, r) {
                var e = hn;
                if (r.length) {
                  var u = P(r, Pu(Cc));
                  e |= yn
                }
                return Lu(n, e, t, r, u)
              }),
              Uc = ke(function(n, t, r) {
                var e = hn | pn;
                if (r.length) {
                  var u = P(r, Pu(Uc));
                  e |= yn
                }
                return Lu(t, e, n, r, u)
              }),
              Bc = ke(function(n, t) {
                return mr(n, 1, t)
              }),
              Tc = ke(function(n, t, r) {
                return mr(n, ao(t) || 0, r)
              });
            qi.Cache = Jt;
            var $c = Hf(function(n, t) {
                var e = (t = 1 == t.length && Zc(t[0]) ? l(t[0], E(qu())) : l(Sr(t, 1), E(qu()))).length;
                return ke(function(u) {
                  for (var i = -1, o = mf(u.length, e); ++i < o;) u[i] = t[i].call(this, u[i]);
                  return r(n, this, u)
                })
              }),
              Dc = ke(function(n, t) {
                var r = P(t, Pu(Dc));
                return Lu(n, yn, X, t, r)
              }),
              Mc = ke(function(n, t) {
                var r = P(t, Pu(Mc));
                return Lu(n, dn, X, t, r)
              }),
              Fc = Du(function(n, t) {
                return Lu(n, wn, X, X, X, t)
              }),
              Nc = Ru(Gr),
              Pc = Ru(function(n, t) {
                return n >= t
              }),
              qc = te(function() {
                return arguments
              }()) ? te : function(n) {
                return no(n) && qo.call(n, "callee") && !ef.call(n, "callee")
              },
              Zc = Eo.isArray,
              Kc = Wr ? E(Wr) : function(n) {
                return no(n) && Vr(n) == et
              },
              Vc = gf || zo,
              Gc = Cr ? E(Cr) : function(n) {
                return no(n) && Vr(n) == Mn
              },
              Hc = Ur ? E(Ur) : function(n) {
                return no(n) && tc(n) == Zn
              },
              Jc = Br ? E(Br) : function(n) {
                return no(n) && Vr(n) == Jn
              },
              Yc = Tr ? E(Tr) : function(n) {
                return no(n) && tc(n) == Yn
              },
              Qc = $r ? E($r) : function(n) {
                return no(n) && Qi(n.length) && !!yr[Vr(n)]
              },
              Xc = Ru(ae),
              na = Ru(function(n, t) {
                return n <= t
              }),
              ta = su(function(n, t) {
                if (ai(t) || Vi(t)) fu(t, _o(t), n);
                else
                  for (var r in t) qo.call(t, r) && ur(n, r, t[r])
              }),
              ra = su(function(n, t) {
                fu(t, vo(t), n)
              }),
              ea = su(function(n, t, r, e) {
                fu(t, vo(t), n, e)
              }),
              ua = su(function(n, t, r, e) {
                fu(t, _o(t), n, e)
              }),
              ia = Du(hr),
              oa = ke(function(n) {
                return n.push(X, Wu), r(ea, X, n)
              }),
              fa = ke(function(n) {
                return n.push(X, Cu), r(ha, X, n)
              }),
              ca = xu(function(n, t, r) {
                n[t] = r
              }, xo(jo)),
              aa = xu(function(n, t, r) {
                qo.call(n, t) ? n[t].push(r) : n[t] = [r]
              }, qu),
              la = ke(ne),
              sa = su(function(n, t, r) {
                pe(n, t, r)
              }),
              ha = su(function(n, t, r, e) {
                pe(n, t, r, e)
              }),
              pa = Du(function(n, t) {
                var r = {};
                if (null == n) return r;
                var e = !1;
                t = l(t, function(t) {
                  return t = Ke(t, n), e || (e = t.length > 1), t
                }), fu(n, Fu(n), r), e && (r = _r(r, fn | cn | an, Uu));
                for (var u = t.length; u--;) $e(r, t[u]);
                return r
              }),
              _a = Du(function(n, t) {
                return null == n ? {} : ye(n, t)
              }),
              va = Su(_o),
              ga = Su(vo),
              ya = gu(function(n, t, r) {
                return t = t.toLowerCase(), n + (r ? bo(t) : t)
              }),
              da = gu(function(n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
              }),
              ba = gu(function(n, t, r) {
                return n + (r ? " " : "") + t.toLowerCase()
              }),
              wa = vu("toLowerCase"),
              ma = gu(function(n, t, r) {
                return n + (r ? "_" : "") + t.toLowerCase()
              }),
              xa = gu(function(n, t, r) {
                return n + (r ? " " : "") + Aa(t)
              }),
              ja = gu(function(n, t, r) {
                return n + (r ? " " : "") + t.toUpperCase()
              }),
              Aa = vu("toUpperCase"),
              ka = ke(function(n, t) {
                try {
                  return r(n, X, t)
                } catch (n) {
                  return Hi(n) ? n : new Lo(n)
                }
              }),
              Oa = Du(function(n, t) {
                return u(t, function(t) {
                  t = mi(t), sr(n, t, Cc(n[t], n))
                }), n
              }),
              Ia = wu(),
              Ra = wu(!0),
              za = ke(function(n, t) {
                return function(r) {
                  return ne(r, n, t)
                }
              }),
              Ea = ke(function(n, t) {
                return function(r) {
                  return ne(n, r, t)
                }
              }),
              Sa = Au(l),
              La = Au(o),
              Wa = Au(_),
              Ca = Iu(),
              Ua = Iu(!0),
              Ba = ju(function(n, t) {
                return n + t
              }, 0),
              Ta = Eu("ceil"),
              $a = ju(function(n, t) {
                return n / t
              }, 1),
              Da = Eu("floor"),
              Ma = ju(function(n, t) {
                return n * t
              }, 1),
              Fa = Eu("round"),
              Na = ju(function(n, t) {
                return n - t
              }, 0);
            return K.after = function(n, t) {
              if ("function" != typeof t) throw new $o(rn);
              return n = fo(n),
                function() {
                  if (--n < 1) return t.apply(this, arguments)
                }
            }, K.ary = Di, K.assign = ta, K.assignIn = ra, K.assignInWith = ea, K.assignWith = ua, K.at = ia, K.before = Mi, K.bind = Cc, K.bindAll = Oa, K.bindKey = Uc, K.castArray = function() {
              if (!arguments.length) return [];
              var n = arguments[0];
              return Zc(n) ? n : [n]
            }, K.chain = Ci, K.chunk = function(n, t, r) {
              t = (r ? ui(n, t, r) : t === X) ? 1 : wf(fo(t), 0);
              var e = null == n ? 0 : n.length;
              if (!e || t < 1) return [];
              for (var u = 0, i = 0, o = Eo(pf(e / t)); u < e;) o[i++] = Ee(n, u, u += t);
              return o
            }, K.compact = function(n) {
              for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
                var i = n[t];
                i && (u[e++] = i)
              }
              return u
            }, K.concat = function() {
              var n = arguments.length;
              if (!n) return [];
              for (var t = Eo(n - 1), r = arguments[0], e = n; e--;) t[e - 1] = arguments[e];
              return s(Zc(r) ? ou(r) : [r], Sr(t, 1))
            }, K.cond = function(n) {
              var t = null == n ? 0 : n.length,
                e = qu();
              return n = t ? l(n, function(n) {
                if ("function" != typeof n[1]) throw new $o(rn);
                return [e(n[0]), n[1]]
              }) : [], ke(function(e) {
                for (var u = -1; ++u < t;) {
                  var i = n[u];
                  if (r(i[0], this, e)) return r(i[1], this, e)
                }
              })
            }, K.conforms = function(n) {
              return br(_r(n, fn))
            }, K.constant = xo, K.countBy = kc, K.create = function(n, t) {
              var r = Nf(n);
              return null == t ? r : fr(r, t)
            }, K.curry = Fi, K.curryRight = Ni, K.debounce = Pi, K.defaults = oa, K.defaultsDeep = fa, K.defer = Bc, K.delay = Tc, K.difference = fc, K.differenceBy = cc, K.differenceWith = ac, K.drop = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              return e ? (t = r || t === X ? 1 : fo(t), Ee(n, t < 0 ? 0 : t, e)) : []
            }, K.dropRight = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              return e ? (t = r || t === X ? 1 : fo(t), t = e - t, Ee(n, 0, t < 0 ? 0 : t)) : []
            }, K.dropRightWhile = function(n, t) {
              return n && n.length ? Me(n, qu(t, 3), !0, !0) : []
            }, K.dropWhile = function(n, t) {
              return n && n.length ? Me(n, qu(t, 3), !0) : []
            }, K.fill = function(n, t, r, e) {
              var u = null == n ? 0 : n.length;
              return u ? (r && "number" != typeof r && ui(n, t, r) && (r = 0, e = u), Rr(n, t, r, e)) : []
            }, K.filter = function(n, t) {
              return (Zc(n) ? f : zr)(n, qu(t, 3))
            }, K.flatMap = function(n, t) {
              return Sr($i(n, t), 1)
            }, K.flatMapDeep = function(n, t) {
              return Sr($i(n, t), Rn)
            }, K.flatMapDepth = function(n, t, r) {
              return r = r === X ? 1 : fo(r), Sr($i(n, t), r)
            }, K.flatten = Ii, K.flattenDeep = function(n) {
              return (null == n ? 0 : n.length) ? Sr(n, Rn) : []
            }, K.flattenDepth = function(n, t) {
              return (null == n ? 0 : n.length) ? (t = t === X ? 1 : fo(t), Sr(n, t)) : []
            }, K.flip = function(n) {
              return Lu(n, mn)
            }, K.flow = Ia, K.flowRight = Ra, K.fromPairs = function(n) {
              for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
                var u = n[t];
                e[u[0]] = u[1]
              }
              return e
            }, K.functions = function(n) {
              return null == n ? [] : qr(n, _o(n))
            }, K.functionsIn = function(n) {
              return null == n ? [] : qr(n, vo(n))
            }, K.groupBy = Rc, K.initial = function(n) {
              return (null == n ? 0 : n.length) ? Ee(n, 0, -1) : []
            }, K.intersection = lc, K.intersectionBy = sc, K.intersectionWith = hc, K.invert = ca, K.invertBy = aa, K.invokeMap = zc, K.iteratee = Ao, K.keyBy = Ec, K.keys = _o, K.keysIn = vo, K.map = $i, K.mapKeys = function(n, t) {
              var r = {};
              return t = qu(t, 3), Lr(n, function(n, e, u) {
                sr(r, t(n, e, u), n)
              }), r
            }, K.mapValues = function(n, t) {
              var r = {};
              return t = qu(t, 3), Lr(n, function(n, e, u) {
                sr(r, e, t(n, e, u))
              }), r
            }, K.matches = function(n) {
              return se(_r(n, fn))
            }, K.matchesProperty = function(n, t) {
              return he(n, _r(t, fn))
            }, K.memoize = qi, K.merge = sa, K.mergeWith = ha, K.method = za, K.methodOf = Ea, K.mixin = ko, K.negate = Zi, K.nthArg = function(n) {
              return n = fo(n), ke(function(t) {
                return ve(t, n)
              })
            }, K.omit = pa, K.omitBy = function(n, t) {
              return go(n, Zi(qu(t)))
            }, K.once = function(n) {
              return Mi(2, n)
            }, K.orderBy = function(n, t, r, e) {
              return null == n ? [] : (Zc(t) || (t = null == t ? [] : [t]), r = e ? X : r, Zc(r) || (r = null == r ? [] : [r]), ge(n, t, r))
            }, K.over = Sa, K.overArgs = $c, K.overEvery = La, K.overSome = Wa, K.partial = Dc, K.partialRight = Mc, K.partition = Sc, K.pick = _a, K.pickBy = go, K.property = Io, K.propertyOf = function(n) {
              return function(t) {
                return null == n ? X : Zr(n, t)
              }
            }, K.pull = pc, K.pullAll = Ei, K.pullAllBy = function(n, t, r) {
              return n && n.length && t && t.length ? we(n, t, qu(r, 2)) : n
            }, K.pullAllWith = function(n, t, r) {
              return n && n.length && t && t.length ? we(n, t, X, r) : n
            }, K.pullAt = _c, K.range = Ca, K.rangeRight = Ua, K.rearg = Fc, K.reject = function(n, t) {
              return (Zc(n) ? f : zr)(n, Zi(qu(t, 3)))
            }, K.remove = function(n, t) {
              var r = [];
              if (!n || !n.length) return r;
              var e = -1,
                u = [],
                i = n.length;
              for (t = qu(t, 3); ++e < i;) {
                var o = n[e];
                t(o, e, n) && (r.push(o), u.push(e))
              }
              return me(n, u), r
            }, K.rest = function(n, t) {
              if ("function" != typeof n) throw new $o(rn);
              return t = t === X ? t : fo(t), ke(n, t)
            }, K.reverse = Si, K.sampleSize = function(n, t, r) {
              return t = (r ? ui(n, t, r) : t === X) ? 1 : fo(t), (Zc(n) ? tr : Ie)(n, t)
            }, K.set = function(n, t, r) {
              return null == n ? n : Re(n, t, r)
            }, K.setWith = function(n, t, r, e) {
              return e = "function" == typeof e ? e : X, null == n ? n : Re(n, t, r, e)
            }, K.shuffle = function(n) {
              return (Zc(n) ? rr : ze)(n)
            }, K.slice = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              return e ? (r && "number" != typeof r && ui(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : fo(t), r = r === X ? e : fo(r)), Ee(n, t, r)) : []
            }, K.sortBy = Lc, K.sortedUniq = function(n) {
              return n && n.length ? Ce(n) : []
            }, K.sortedUniqBy = function(n, t) {
              return n && n.length ? Ce(n, qu(t, 2)) : []
            }, K.split = function(n, t, r) {
              return r && "number" != typeof r && ui(n, t, r) && (t = r = X), (r = r === X ? Ln : r >>> 0) ? (n = so(n)) && ("string" == typeof t || null != t && !Jc(t)) && !(t = Be(t)) && $(n) ? Ve(H(n), 0, r) : n.split(t, r) : []
            }, K.spread = function(n, t) {
              if ("function" != typeof n) throw new $o(rn);
              return t = null == t ? 0 : wf(fo(t), 0), ke(function(e) {
                var u = e[t],
                  i = Ve(e, 0, t);
                return u && s(i, u), r(n, this, i)
              })
            }, K.tail = function(n) {
              var t = null == n ? 0 : n.length;
              return t ? Ee(n, 1, t) : []
            }, K.take = function(n, t, r) {
              return n && n.length ? (t = r || t === X ? 1 : fo(t), Ee(n, 0, t < 0 ? 0 : t)) : []
            }, K.takeRight = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              return e ? (t = r || t === X ? 1 : fo(t), t = e - t, Ee(n, t < 0 ? 0 : t, e)) : []
            }, K.takeRightWhile = function(n, t) {
              return n && n.length ? Me(n, qu(t, 3), !1, !0) : []
            }, K.takeWhile = function(n, t) {
              return n && n.length ? Me(n, qu(t, 3)) : []
            }, K.tap = function(n, t) {
              return t(n), n
            }, K.throttle = function(n, t, r) {
              var e = !0,
                u = !0;
              if ("function" != typeof n) throw new $o(rn);
              return Xi(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Pi(n, t, {
                leading: e,
                maxWait: t,
                trailing: u
              })
            }, K.thru = Ui, K.toArray = io, K.toPairs = va, K.toPairsIn = ga, K.toPath = function(n) {
              return Zc(n) ? l(n, mi) : uo(n) ? [n] : ou(oc(so(n)))
            }, K.toPlainObject = lo, K.transform = function(n, t, r) {
              var e = Zc(n),
                i = e || Vc(n) || Qc(n);
              if (t = qu(t, 4), null == r) {
                var o = n && n.constructor;
                r = i ? e ? new o : [] : Xi(n) && Ji(o) ? Nf(tf(n)) : {}
              }
              return (i ? u : Lr)(n, function(n, e, u) {
                return t(r, n, e, u)
              }), r
            }, K.unary = function(n) {
              return Di(n, 1)
            }, K.union = vc, K.unionBy = gc, K.unionWith = yc, K.uniq = function(n) {
              return n && n.length ? Te(n) : []
            }, K.uniqBy = function(n, t) {
              return n && n.length ? Te(n, qu(t, 2)) : []
            }, K.uniqWith = function(n, t) {
              return t = "function" == typeof t ? t : X, n && n.length ? Te(n, X, t) : []
            }, K.unset = function(n, t) {
              return null == n || $e(n, t)
            }, K.unzip = Li, K.unzipWith = Wi, K.update = function(n, t, r) {
              return null == n ? n : De(n, t, Ze(r))
            }, K.updateWith = function(n, t, r, e) {
              return e = "function" == typeof e ? e : X, null == n ? n : De(n, t, Ze(r), e)
            }, K.values = yo, K.valuesIn = function(n) {
              return null == n ? [] : S(n, vo(n))
            }, K.without = dc, K.words = mo, K.wrap = function(n, t) {
              return Dc(Ze(t), n)
            }, K.xor = bc, K.xorBy = wc, K.xorWith = mc, K.zip = xc, K.zipObject = function(n, t) {
              return Pe(n || [], t || [], ur)
            }, K.zipObjectDeep = function(n, t) {
              return Pe(n || [], t || [], Re)
            }, K.zipWith = jc, K.entries = va, K.entriesIn = ga, K.extend = ra, K.extendWith = ea, ko(K, K), K.add = Ba, K.attempt = ka, K.camelCase = ya, K.capitalize = bo, K.ceil = Ta, K.clamp = function(n, t, r) {
              return r === X && (r = t, t = X), r !== X && (r = (r = ao(r)) === r ? r : 0), t !== X && (t = (t = ao(t)) === t ? t : 0), pr(ao(n), t, r)
            }, K.clone = function(n) {
              return _r(n, an)
            }, K.cloneDeep = function(n) {
              return _r(n, fn | an)
            }, K.cloneDeepWith = function(n, t) {
              return t = "function" == typeof t ? t : X, _r(n, fn | an, t)
            }, K.cloneWith = function(n, t) {
              return t = "function" == typeof t ? t : X, _r(n, an, t)
            }, K.conformsTo = function(n, t) {
              return null == t || wr(n, t, _o(t))
            }, K.deburr = wo, K.defaultTo = function(n, t) {
              return null == n || n !== n ? t : n
            }, K.divide = $a, K.endsWith = function(n, t, r) {
              n = so(n), t = Be(t);
              var e = n.length,
                u = r = r === X ? e : pr(fo(r), 0, e);
              return (r -= t.length) >= 0 && n.slice(r, u) == t
            }, K.eq = Ki, K.escape = function(n) {
              return (n = so(n)) && wt.test(n) ? n.replace(dt, Fr) : n
            }, K.escapeRegExp = function(n) {
              return (n = so(n)) && zt.test(n) ? n.replace(Rt, "\\$&") : n
            }, K.every = function(n, t, r) {
              var e = Zc(n) ? o : kr;
              return r && ui(n, t, r) && (t = X), e(n, qu(t, 3))
            }, K.find = Oc, K.findIndex = ki, K.findKey = function(n, t) {
              return y(n, qu(t, 3), Lr)
            }, K.findLast = Ic, K.findLastIndex = Oi, K.findLastKey = function(n, t) {
              return y(n, qu(t, 3), Dr)
            }, K.floor = Da, K.forEach = Bi, K.forEachRight = Ti, K.forIn = function(n, t) {
              return null == n ? n : Zf(n, qu(t, 3), vo)
            }, K.forInRight = function(n, t) {
              return null == n ? n : Kf(n, qu(t, 3), vo)
            }, K.forOwn = function(n, t) {
              return n && Lr(n, qu(t, 3))
            }, K.forOwnRight = function(n, t) {
              return n && Dr(n, qu(t, 3))
            }, K.get = ho, K.gt = Nc, K.gte = Pc, K.has = function(n, t) {
              return null != n && Yu(n, t, Hr)
            }, K.hasIn = po, K.head = Ri, K.identity = jo, K.includes = function(n, t, r, e) {
              n = Vi(n) ? n : yo(n), r = r && !e ? fo(r) : 0;
              var u = n.length;
              return r < 0 && (r = wf(u + r, 0)), eo(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && b(n, t, r) > -1
            }, K.indexOf = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              if (!e) return -1;
              var u = null == r ? 0 : fo(r);
              return u < 0 && (u = wf(e + u, 0)), b(n, t, u)
            }, K.inRange = function(n, t, r) {
              return t = oo(t), r === X ? (r = t, t = 0) : r = oo(r), n = ao(n), Yr(n, t, r)
            }, K.invoke = la, K.isArguments = qc, K.isArray = Zc, K.isArrayBuffer = Kc, K.isArrayLike = Vi, K.isArrayLikeObject = Gi, K.isBoolean = function(n) {
              return !0 === n || !1 === n || no(n) && Vr(n) == Dn
            }, K.isBuffer = Vc, K.isDate = Gc, K.isElement = function(n) {
              return no(n) && 1 === n.nodeType && !ro(n)
            }, K.isEmpty = function(n) {
              if (null == n) return !0;
              if (Vi(n) && (Zc(n) || "string" == typeof n || "function" == typeof n.splice || Vc(n) || Qc(n) || qc(n))) return !n.length;
              var t = tc(n);
              if (t == Zn || t == Yn) return !n.size;
              if (ai(n)) return !fe(n).length;
              for (var r in n)
                if (qo.call(n, r)) return !1;
              return !0
            }, K.isEqual = function(n, t) {
              return re(n, t)
            }, K.isEqualWith = function(n, t, r) {
              var e = (r = "function" == typeof r ? r : X) ? r(n, t) : X;
              return e === X ? re(n, t, X, r) : !!e
            }, K.isError = Hi, K.isFinite = function(n) {
              return "number" == typeof n && yf(n)
            }, K.isFunction = Ji, K.isInteger = Yi, K.isLength = Qi, K.isMap = Hc, K.isMatch = function(n, t) {
              return n === t || ue(n, t, Ku(t))
            }, K.isMatchWith = function(n, t, r) {
              return r = "function" == typeof r ? r : X, ue(n, t, Ku(t), r)
            }, K.isNaN = function(n) {
              return to(n) && n != +n
            }, K.isNative = function(n) {
              if (rc(n)) throw new Lo(tn);
              return ie(n)
            }, K.isNil = function(n) {
              return null == n
            }, K.isNull = function(n) {
              return null === n
            }, K.isNumber = to, K.isObject = Xi, K.isObjectLike = no, K.isPlainObject = ro, K.isRegExp = Jc, K.isSafeInteger = function(n) {
              return Yi(n) && n >= -zn && n <= zn
            }, K.isSet = Yc, K.isString = eo, K.isSymbol = uo, K.isTypedArray = Qc, K.isUndefined = function(n) {
              return n === X
            }, K.isWeakMap = function(n) {
              return no(n) && tc(n) == tt
            }, K.isWeakSet = function(n) {
              return no(n) && Vr(n) == rt
            }, K.join = function(n, t) {
              return null == n ? "" : df.call(n, t)
            }, K.kebabCase = da, K.last = zi, K.lastIndexOf = function(n, t, r) {
              var e = null == n ? 0 : n.length;
              if (!e) return -1;
              var u = e;
              return r !== X && (u = (u = fo(r)) < 0 ? wf(e + u, 0) : mf(u, e - 1)), t === t ? V(n, t, u) : d(n, m, u, !0)
            }, K.lowerCase = ba, K.lowerFirst = wa, K.lt = Xc, K.lte = na, K.max = function(n) {
              return n && n.length ? Or(n, jo, Gr) : X
            }, K.maxBy = function(n, t) {
              return n && n.length ? Or(n, qu(t, 2), Gr) : X
            }, K.mean = function(n) {
              return x(n, jo)
            }, K.meanBy = function(n, t) {
              return x(n, qu(t, 2))
            }, K.min = function(n) {
              return n && n.length ? Or(n, jo, ae) : X
            }, K.minBy = function(n, t) {
              return n && n.length ? Or(n, qu(t, 2), ae) : X
            }, K.stubArray = Ro, K.stubFalse = zo, K.stubObject = function() {
              return {}
            }, K.stubString = function() {
              return ""
            }, K.stubTrue = function() {
              return !0
            }, K.multiply = Ma, K.nth = function(n, t) {
              return n && n.length ? ve(n, fo(t)) : X
            }, K.noConflict = function() {
              return Ir._ === this && (Ir._ = Ho), this
            }, K.noop = Oo, K.now = Wc, K.pad = function(n, t, r) {
              n = so(n);
              var e = (t = fo(t)) ? G(n) : 0;
              if (!t || e >= t) return n;
              var u = (t - e) / 2;
              return ku(_f(u), r) + n + ku(pf(u), r)
            }, K.padEnd = function(n, t, r) {
              n = so(n);
              var e = (t = fo(t)) ? G(n) : 0;
              return t && e < t ? n + ku(t - e, r) : n
            }, K.padStart = function(n, t, r) {
              n = so(n);
              var e = (t = fo(t)) ? G(n) : 0;
              return t && e < t ? ku(t - e, r) + n : n
            }, K.parseInt = function(n, t, r) {
              return r || null == t ? t = 0 : t && (t = +t), jf(so(n).replace(St, ""), t || 0)
            }, K.random = function(n, t, r) {
              if (r && "boolean" != typeof r && ui(n, t, r) && (t = r = X), r === X && ("boolean" == typeof t ? (r = t, t = X) : "boolean" == typeof n && (r = n, n = X)), n === X && t === X ? (n = 0, t = 1) : (n = oo(n), t === X ? (t = n, n = 0) : t = oo(t)), n > t) {
                var e = n;
                n = t, t = e
              }
              if (r || n % 1 || t % 1) {
                var u = Af();
                return mf(n + u * (t - n + jr("1e-" + ((u + "").length - 1))), t)
              }
              return xe(n, t)
            }, K.reduce = function(n, t, r) {
              var e = Zc(n) ? h : k,
                u = arguments.length < 3;
              return e(n, qu(t, 4), r, u, Pf)
            }, K.reduceRight = function(n, t, r) {
              var e = Zc(n) ? p : k,
                u = arguments.length < 3;
              return e(n, qu(t, 4), r, u, qf)
            }, K.repeat = function(n, t, r) {
              return t = (r ? ui(n, t, r) : t === X) ? 1 : fo(t), Ae(so(n), t)
            }, K.replace = function() {
              var n = arguments,
                t = so(n[0]);
              return n.length < 3 ? t : t.replace(n[1], n[2])
            }, K.result = function(n, t, r) {
              var e = -1,
                u = (t = Ke(t, n)).length;
              for (u || (u = 1, n = X); ++e < u;) {
                var i = null == n ? X : n[mi(t[e])];
                i === X && (e = u, i = r), n = Ji(i) ? i.call(n) : i
              }
              return n
            }, K.round = Fa, K.runInContext = v, K.sample = function(n) {
              return (Zc(n) ? nr : Oe)(n)
            }, K.size = function(n) {
              if (null == n) return 0;
              if (Vi(n)) return eo(n) ? G(n) : n.length;
              var t = tc(n);
              return t == Zn || t == Yn ? n.size : fe(n).length
            }, K.snakeCase = ma, K.some = function(n, t, r) {
              var e = Zc(n) ? _ : Se;
              return r && ui(n, t, r) && (t = X), e(n, qu(t, 3))
            }, K.sortedIndex = function(n, t) {
              return Le(n, t)
            }, K.sortedIndexBy = function(n, t, r) {
              return We(n, t, qu(r, 2))
            }, K.sortedIndexOf = function(n, t) {
              var r = null == n ? 0 : n.length;
              if (r) {
                var e = Le(n, t);
                if (e < r && Ki(n[e], t)) return e
              }
              return -1
            }, K.sortedLastIndex = function(n, t) {
              return Le(n, t, !0)
            }, K.sortedLastIndexBy = function(n, t, r) {
              return We(n, t, qu(r, 2), !0)
            }, K.sortedLastIndexOf = function(n, t) {
              if (null == n ? 0 : n.length) {
                var r = Le(n, t, !0) - 1;
                if (Ki(n[r], t)) return r
              }
              return -1
            }, K.startCase = xa, K.startsWith = function(n, t, r) {
              return n = so(n), r = null == r ? 0 : pr(fo(r), 0, n.length), t = Be(t), n.slice(r, r + t.length) == t
            }, K.subtract = Na, K.sum = function(n) {
              return n && n.length ? I(n, jo) : 0
            }, K.sumBy = function(n, t) {
              return n && n.length ? I(n, qu(t, 2)) : 0
            }, K.template = function(n, t, r) {
              var e = K.templateSettings;
              r && ui(n, t, r) && (t = X), n = so(n), t = ea({}, t, e, Wu);
              var u, i, o = ea({}, t.imports, e.imports, Wu),
                f = _o(o),
                c = S(o, f),
                a = 0,
                l = t.interpolate || Kt,
                s = "__p += '",
                h = Bo((t.escape || Kt).source + "|" + l.source + "|" + (l === jt ? $t : Kt).source + "|" + (t.evaluate || Kt).source + "|$", "g"),
                p = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++gr + "]") + "\n";
              n.replace(h, function(t, r, e, o, f, c) {
                return e || (e = o), s += n.slice(a, c).replace(Vt, B), r && (u = !0, s += "' +\n__e(" + r + ") +\n'"), f && (i = !0, s += "';\n" + f + ";\n__p += '"), e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), a = c + t.length, t
              }), s += "';\n";
              var _ = t.variable;
              _ || (s = "with (obj) {\n" + s + "\n}\n"), s = (i ? s.replace(_t, "") : s).replace(vt, "$1").replace(gt, "$1;"), s = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
              var v = ka(function() {
                return Wo(f, p + "return " + s).apply(X, c)
              });
              if (v.source = s, Hi(v)) throw v;
              return v
            }, K.times = function(n, t) {
              if ((n = fo(n)) < 1 || n > zn) return [];
              var r = Ln,
                e = mf(n, Ln);
              t = qu(t), n -= Ln;
              for (var u = R(e, t); ++r < n;) t(r);
              return u
            }, K.toFinite = oo, K.toInteger = fo, K.toLength = co, K.toLower = function(n) {
              return so(n).toLowerCase()
            }, K.toNumber = ao, K.toSafeInteger = function(n) {
              return n ? pr(fo(n), -zn, zn) : 0 === n ? n : 0
            }, K.toString = so, K.toUpper = function(n) {
              return so(n).toUpperCase()
            }, K.trim = function(n, t, r) {
              if ((n = so(n)) && (r || t === X)) return n.replace(Et, "");
              if (!n || !(t = Be(t))) return n;
              var e = H(n),
                u = H(t);
              return Ve(e, W(e, u), C(e, u) + 1).join("")
            }, K.trimEnd = function(n, t, r) {
              if ((n = so(n)) && (r || t === X)) return n.replace(Lt, "");
              if (!n || !(t = Be(t))) return n;
              var e = H(n);
              return Ve(e, 0, C(e, H(t)) + 1).join("")
            }, K.trimStart = function(n, t, r) {
              if ((n = so(n)) && (r || t === X)) return n.replace(St, "");
              if (!n || !(t = Be(t))) return n;
              var e = H(n);
              return Ve(e, W(e, H(t))).join("")
            }, K.truncate = function(n, t) {
              var r = xn,
                e = jn;
              if (Xi(t)) {
                var u = "separator" in t ? t.separator : u;
                r = "length" in t ? fo(t.length) : r, e = "omission" in t ? Be(t.omission) : e
              }
              var i = (n = so(n)).length;
              if ($(n)) {
                var o = H(n);
                i = o.length
              }
              if (r >= i) return n;
              var f = r - G(e);
              if (f < 1) return e;
              var c = o ? Ve(o, 0, f).join("") : n.slice(0, f);
              if (u === X) return c + e;
              if (o && (f += c.length - f), Jc(u)) {
                if (n.slice(f).search(u)) {
                  var a, l = c;
                  for (u.global || (u = Bo(u.source, so(Dt.exec(u)) + "g")), u.lastIndex = 0; a = u.exec(l);) var s = a.index;
                  c = c.slice(0, s === X ? f : s)
                }
              } else if (n.indexOf(Be(u), f) != f) {
                var h = c.lastIndexOf(u);
                h > -1 && (c = c.slice(0, h))
              }
              return c + e
            }, K.unescape = function(n) {
              return (n = so(n)) && bt.test(n) ? n.replace(yt, Nr) : n
            }, K.uniqueId = function(n) {
              var t = ++Zo;
              return so(n) + t
            }, K.upperCase = ja, K.upperFirst = Aa, K.each = Bi, K.eachRight = Ti, K.first = Ri, ko(K, function() {
              var n = {};
              return Lr(K, function(t, r) {
                qo.call(K.prototype, r) || (n[r] = t)
              }), n
            }(), {
              chain: !1
            }), K.VERSION = "4.17.4", u(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
              K[n].placeholder = K
            }), u(["drop", "take"], function(n, t) {
              Bt.prototype[n] = function(r) {
                r = r === X ? 1 : wf(fo(r), 0);
                var e = this.__filtered__ && !t ? new Bt(this) : this.clone();
                return e.__filtered__ ? e.__takeCount__ = mf(r, e.__takeCount__) : e.__views__.push({
                  size: mf(r, Ln),
                  type: n + (e.__dir__ < 0 ? "Right" : "")
                }), e
              }, Bt.prototype[n + "Right"] = function(t) {
                return this.reverse()[n](t).reverse()
              }
            }), u(["filter", "map", "takeWhile"], function(n, t) {
              var r = t + 1,
                e = r == On || 3 == r;
              Bt.prototype[n] = function(n) {
                var t = this.clone();
                return t.__iteratees__.push({
                  iteratee: qu(n, 3),
                  type: r
                }), t.__filtered__ = t.__filtered__ || e, t
              }
            }), u(["head", "last"], function(n, t) {
              var r = "take" + (t ? "Right" : "");
              Bt.prototype[n] = function() {
                return this[r](1).value()[0]
              }
            }), u(["initial", "tail"], function(n, t) {
              var r = "drop" + (t ? "" : "Right");
              Bt.prototype[n] = function() {
                return this.__filtered__ ? new Bt(this) : this[r](1)
              }
            }), Bt.prototype.compact = function() {
              return this.filter(jo)
            }, Bt.prototype.find = function(n) {
              return this.filter(n).head()
            }, Bt.prototype.findLast = function(n) {
              return this.reverse().find(n)
            }, Bt.prototype.invokeMap = ke(function(n, t) {
              return "function" == typeof n ? new Bt(this) : this.map(function(r) {
                return ne(r, n, t)
              })
            }), Bt.prototype.reject = function(n) {
              return this.filter(Zi(qu(n)))
            }, Bt.prototype.slice = function(n, t) {
              n = fo(n);
              var r = this;
              return r.__filtered__ && (n > 0 || t < 0) ? new Bt(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== X && (r = (t = fo(t)) < 0 ? r.dropRight(-t) : r.take(t - n)), r)
            }, Bt.prototype.takeRightWhile = function(n) {
              return this.reverse().takeWhile(n).reverse()
            }, Bt.prototype.toArray = function() {
              return this.take(Ln)
            }, Lr(Bt.prototype, function(n, t) {
              var r = /^(?:filter|find|map|reject)|While$/.test(t),
                e = /^(?:head|last)$/.test(t),
                u = K[e ? "take" + ("last" == t ? "Right" : "") : t],
                i = e || /^find/.test(t);
              u && (K.prototype[t] = function() {
                var t = this.__wrapped__,
                  o = e ? [1] : arguments,
                  f = t instanceof Bt,
                  c = o[0],
                  a = f || Zc(t),
                  l = function(n) {
                    var t = u.apply(K, s([n], o));
                    return e && h ? t[0] : t
                  };
                a && r && "function" == typeof c && 1 != c.length && (f = a = !1);
                var h = this.__chain__,
                  p = !!this.__actions__.length,
                  _ = i && !h,
                  v = f && !p;
                if (!i && a) {
                  t = v ? t : new Bt(this);
                  var g = n.apply(t, o);
                  return g.__actions__.push({
                    func: Ui,
                    args: [l],
                    thisArg: X
                  }), new Y(g, h)
                }
                return _ && v ? n.apply(this, o) : (g = this.thru(l), _ ? e ? g.value()[0] : g.value() : g)
              })
            }), u(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
              var t = Do[n],
                r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                e = /^(?:pop|shift)$/.test(n);
              K.prototype[n] = function() {
                var n = arguments;
                if (e && !this.__chain__) {
                  var u = this.value();
                  return t.apply(Zc(u) ? u : [], n)
                }
                return this[r](function(r) {
                  return t.apply(Zc(r) ? r : [], n)
                })
              }
            }), Lr(Bt.prototype, function(n, t) {
              var r = K[t];
              if (r) {
                var e = r.name + "";
                (Wf[e] || (Wf[e] = [])).push({
                  name: t,
                  func: r
                })
              }
            }), Wf[mu(X, pn).name] = [{
              name: "wrapper",
              func: X
            }], Bt.prototype.clone = function() {
              var n = new Bt(this.__wrapped__);
              return n.__actions__ = ou(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = ou(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = ou(this.__views__), n
            }, Bt.prototype.reverse = function() {
              if (this.__filtered__) {
                var n = new Bt(this);
                n.__dir__ = -1, n.__filtered__ = !0
              } else(n = this.clone()).__dir__ *= -1;
              return n
            }, Bt.prototype.value = function() {
              var n = this.__wrapped__.value(),
                t = this.__dir__,
                r = Zc(n),
                e = t < 0,
                u = r ? n.length : 0,
                i = Hu(0, u, this.__views__),
                o = i.start,
                f = i.end,
                c = f - o,
                a = e ? f : o - 1,
                l = this.__iteratees__,
                s = l.length,
                h = 0,
                p = mf(c, this.__takeCount__);
              if (!r || !e && u == c && p == c) return Fe(n, this.__actions__);
              var _ = [];
              n: for (; c-- && h < p;) {
                for (var v = -1, g = n[a += t]; ++v < s;) {
                  var y = l[v],
                    d = y.iteratee,
                    b = y.type,
                    w = d(g);
                  if (b == In) g = w;
                  else if (!w) {
                    if (b == On) continue n;
                    break n
                  }
                }
                _[h++] = g
              }
              return _
            }, K.prototype.at = Ac, K.prototype.chain = function() {
              return Ci(this)
            }, K.prototype.commit = function() {
              return new Y(this.value(), this.__chain__)
            }, K.prototype.next = function() {
              this.__values__ === X && (this.__values__ = io(this.value()));
              var n = this.__index__ >= this.__values__.length;
              return {
                done: n,
                value: n ? X : this.__values__[this.__index__++]
              }
            }, K.prototype.plant = function(n) {
              for (var t, r = this; r instanceof J;) {
                var e = Ai(r);
                e.__index__ = 0, e.__values__ = X, t ? u.__wrapped__ = e : t = e;
                var u = e;
                r = r.__wrapped__
              }
              return u.__wrapped__ = n, t
            }, K.prototype.reverse = function() {
              var n = this.__wrapped__;
              if (n instanceof Bt) {
                var t = n;
                return this.__actions__.length && (t = new Bt(this)), (t = t.reverse()).__actions__.push({
                  func: Ui,
                  args: [Si],
                  thisArg: X
                }), new Y(t, this.__chain__)
              }
              return this.thru(Si)
            }, K.prototype.toJSON = K.prototype.valueOf = K.prototype.value = function() {
              return Fe(this.__wrapped__, this.__actions__)
            }, K.prototype.first = K.prototype.head, ff && (K.prototype[ff] = function() {
              return this
            }), K
          }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ir._ = Pr, define(function() {
          return Pr
        })) : zr ? ((zr.exports = Pr)._ = Pr, Rr._ = Pr) : Ir._ = Pr
      }).call(this);

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {}],
  6: [function(require, module, exports) {
    (function(process) {
      function parse(r, e) {
        if (r instanceof SemVer) return r;
        if ("string" != typeof r) return null;
        if (r.length > MAX_LENGTH) return null;
        if (!(e ? re[LOOSE] : re[FULL]).test(r)) return null;
        try {
          return new SemVer(r, e)
        } catch (r) {
          return null
        }
      }

      function valid(r, e) {
        var t = parse(r, e);
        return t ? t.version : null
      }

      function clean(r, e) {
        var t = parse(r.trim().replace(/^[=v]+/, ""), e);
        return t ? t.version : null
      }

      function SemVer(r, e) {
        if (r instanceof SemVer) {
          if (r.loose === e) return r;
          r = r.version
        } else if ("string" != typeof r) throw new TypeError("Invalid Version: " + r);
        if (r.length > MAX_LENGTH) throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
        if (!(this instanceof SemVer)) return new SemVer(r, e);
        debug("SemVer", r, e), this.loose = e;
        var t = r.trim().match(e ? re[LOOSE] : re[FULL]);
        if (!t) throw new TypeError("Invalid Version: " + r);
        if (this.raw = r, this.major = +t[1], this.minor = +t[2], this.patch = +t[3], this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
        t[4] ? this.prerelease = t[4].split(".").map(function(r) {
          if (/^[0-9]+$/.test(r)) {
            var e = +r;
            if (e >= 0 && e < MAX_SAFE_INTEGER) return e
          }
          return r
        }) : this.prerelease = [], this.build = t[5] ? t[5].split(".") : [], this.format()
      }

      function inc(r, e, t, s) {
        "string" == typeof t && (s = t, t = void 0);
        try {
          return new SemVer(r, t).inc(e, s).version
        } catch (r) {
          return null
        }
      }

      function diff(r, e) {
        if (eq(r, e)) return null;
        var t = parse(r),
          s = parse(e);
        if (t.prerelease.length || s.prerelease.length) {
          for (var n in t)
            if (("major" === n || "minor" === n || "patch" === n) && t[n] !== s[n]) return "pre" + n;
          return "prerelease"
        }
        for (var n in t)
          if (("major" === n || "minor" === n || "patch" === n) && t[n] !== s[n]) return n
      }

      function compareIdentifiers(r, e) {
        var t = numeric.test(r),
          s = numeric.test(e);
        return t && s && (r = +r, e = +e), t && !s ? -1 : s && !t ? 1 : r < e ? -1 : r > e ? 1 : 0
      }

      function rcompareIdentifiers(r, e) {
        return compareIdentifiers(e, r)
      }

      function major(r, e) {
        return new SemVer(r, e).major
      }

      function minor(r, e) {
        return new SemVer(r, e).minor
      }

      function patch(r, e) {
        return new SemVer(r, e).patch
      }

      function compare(r, e, t) {
        return new SemVer(r, t).compare(new SemVer(e, t))
      }

      function compareLoose(r, e) {
        return compare(r, e, !0)
      }

      function rcompare(r, e, t) {
        return compare(e, r, t)
      }

      function sort(r, e) {
        return r.sort(function(r, t) {
          return exports.compare(r, t, e)
        })
      }

      function rsort(r, e) {
        return r.sort(function(r, t) {
          return exports.rcompare(r, t, e)
        })
      }

      function gt(r, e, t) {
        return compare(r, e, t) > 0
      }

      function lt(r, e, t) {
        return compare(r, e, t) < 0
      }

      function eq(r, e, t) {
        return 0 === compare(r, e, t)
      }

      function neq(r, e, t) {
        return 0 !== compare(r, e, t)
      }

      function gte(r, e, t) {
        return compare(r, e, t) >= 0
      }

      function lte(r, e, t) {
        return compare(r, e, t) <= 0
      }

      function cmp(r, e, t, s) {
        var n;
        switch (e) {
          case "===":
            "object" == typeof r && (r = r.version), "object" == typeof t && (t = t.version), n = r === t;
            break;
          case "!==":
            "object" == typeof r && (r = r.version), "object" == typeof t && (t = t.version), n = r !== t;
            break;
          case "":
          case "=":
          case "==":
            n = eq(r, t, s);
            break;
          case "!=":
            n = neq(r, t, s);
            break;
          case ">":
            n = gt(r, t, s);
            break;
          case ">=":
            n = gte(r, t, s);
            break;
          case "<":
            n = lt(r, t, s);
            break;
          case "<=":
            n = lte(r, t, s);
            break;
          default:
            throw new TypeError("Invalid operator: " + e)
        }
        return n
      }

      function Comparator(r, e) {
        if (r instanceof Comparator) {
          if (r.loose === e) return r;
          r = r.value
        }
        if (!(this instanceof Comparator)) return new Comparator(r, e);
        debug("comparator", r, e), this.loose = e, this.parse(r), this.semver === ANY ? this.value = "" : this.value = this.operator + this.semver.version, debug("comp", this)
      }

      function Range(r, e) {
        if (r instanceof Range) return r.loose === e ? r : new Range(r.raw, e);
        if (r instanceof Comparator) return new Range(r.value, e);
        if (!(this instanceof Range)) return new Range(r, e);
        if (this.loose = e, this.raw = r, this.set = r.split(/\s*\|\|\s*/).map(function(r) {
            return this.parseRange(r.trim())
          }, this).filter(function(r) {
            return r.length
          }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + r);
        this.format()
      }

      function toComparators(r, e) {
        return new Range(r, e).set.map(function(r) {
          return r.map(function(r) {
            return r.value
          }).join(" ").trim().split(" ")
        })
      }

      function parseComparator(r, e) {
        return debug("comp", r), r = replaceCarets(r, e), debug("caret", r), r = replaceTildes(r, e), debug("tildes", r), r = replaceXRanges(r, e), debug("xrange", r), r = replaceStars(r, e), debug("stars", r), r
      }

      function isX(r) {
        return !r || "x" === r.toLowerCase() || "*" === r
      }

      function replaceTildes(r, e) {
        return r.trim().split(/\s+/).map(function(r) {
          return replaceTilde(r, e)
        }).join(" ")
      }

      function replaceTilde(r, e) {
        var t = e ? re[TILDELOOSE] : re[TILDE];
        return r.replace(t, function(e, t, s, n, o) {
          debug("tilde", r, e, t, s, n, o);
          var a;
          return isX(t) ? a = "" : isX(s) ? a = ">=" + t + ".0.0 <" + (+t + 1) + ".0.0" : isX(n) ? a = ">=" + t + "." + s + ".0 <" + t + "." + (+s + 1) + ".0" : o ? (debug("replaceTilde pr", o), "-" !== o.charAt(0) && (o = "-" + o), a = ">=" + t + "." + s + "." + n + o + " <" + t + "." + (+s + 1) + ".0") : a = ">=" + t + "." + s + "." + n + " <" + t + "." + (+s + 1) + ".0", debug("tilde return", a), a
        })
      }

      function replaceCarets(r, e) {
        return r.trim().split(/\s+/).map(function(r) {
          return replaceCaret(r, e)
        }).join(" ")
      }

      function replaceCaret(r, e) {
        debug("caret", r, e);
        var t = e ? re[CARETLOOSE] : re[CARET];
        return r.replace(t, function(e, t, s, n, o) {
          debug("caret", r, e, t, s, n, o);
          var a;
          return isX(t) ? a = "" : isX(s) ? a = ">=" + t + ".0.0 <" + (+t + 1) + ".0.0" : isX(n) ? a = "0" === t ? ">=" + t + "." + s + ".0 <" + t + "." + (+s + 1) + ".0" : ">=" + t + "." + s + ".0 <" + (+t + 1) + ".0.0" : o ? (debug("replaceCaret pr", o), "-" !== o.charAt(0) && (o = "-" + o), a = "0" === t ? "0" === s ? ">=" + t + "." + s + "." + n + o + " <" + t + "." + s + "." + (+n + 1) : ">=" + t + "." + s + "." + n + o + " <" + t + "." + (+s + 1) + ".0" : ">=" + t + "." + s + "." + n + o + " <" + (+t + 1) + ".0.0") : (debug("no pr"), a = "0" === t ? "0" === s ? ">=" + t + "." + s + "." + n + " <" + t + "." + s + "." + (+n + 1) : ">=" + t + "." + s + "." + n + " <" + t + "." + (+s + 1) + ".0" : ">=" + t + "." + s + "." + n + " <" + (+t + 1) + ".0.0"), debug("caret return", a), a
        })
      }

      function replaceXRanges(r, e) {
        return debug("replaceXRanges", r, e), r.split(/\s+/).map(function(r) {
          return replaceXRange(r, e)
        }).join(" ")
      }

      function replaceXRange(r, e) {
        r = r.trim();
        var t = e ? re[XRANGELOOSE] : re[XRANGE];
        return r.replace(t, function(e, t, s, n, o, a) {
          debug("xRange", r, e, t, s, n, o, a);
          var i = isX(s),
            c = i || isX(n),
            p = c || isX(o),
            E = p;
          return "=" === t && E && (t = ""), i ? e = ">" === t || "<" === t ? "<0.0.0" : "*" : t && E ? (c && (n = 0), p && (o = 0), ">" === t ? (t = ">=", c ? (s = +s + 1, n = 0, o = 0) : p && (n = +n + 1, o = 0)) : "<=" === t && (t = "<", c ? s = +s + 1 : n = +n + 1), e = t + s + "." + n + "." + o) : c ? e = ">=" + s + ".0.0 <" + (+s + 1) + ".0.0" : p && (e = ">=" + s + "." + n + ".0 <" + s + "." + (+n + 1) + ".0"), debug("xRange return", e), e
        })
      }

      function replaceStars(r, e) {
        return debug("replaceStars", r, e), r.trim().replace(re[STAR], "")
      }

      function hyphenReplace(r, e, t, s, n, o, a, i, c, p, E, R, u) {
        return e = isX(t) ? "" : isX(s) ? ">=" + t + ".0.0" : isX(n) ? ">=" + t + "." + s + ".0" : ">=" + e, i = isX(c) ? "" : isX(p) ? "<" + (+c + 1) + ".0.0" : isX(E) ? "<" + c + "." + (+p + 1) + ".0" : R ? "<=" + c + "." + p + "." + E + "-" + R : "<=" + i, (e + " " + i).trim()
      }

      function testSet(r, e) {
        for (t = 0; t < r.length; t++)
          if (!r[t].test(e)) return !1;
        if (e.prerelease.length) {
          for (var t = 0; t < r.length; t++)
            if (debug(r[t].semver), r[t].semver !== ANY && r[t].semver.prerelease.length > 0) {
              var s = r[t].semver;
              if (s.major === e.major && s.minor === e.minor && s.patch === e.patch) return !0
            } return !1
        }
        return !0
      }

      function satisfies(r, e, t) {
        try {
          e = new Range(e, t)
        } catch (r) {
          return !1
        }
        return e.test(r)
      }

      function maxSatisfying(r, e, t) {
        var s = null,
          n = null;
        try {
          var o = new Range(e, t)
        } catch (r) {
          return null
        }
        return r.forEach(function(r) {
          o.test(r) && (s && -1 !== n.compare(r) || (n = new SemVer(s = r, t)))
        }), s
      }

      function minSatisfying(r, e, t) {
        var s = null,
          n = null;
        try {
          var o = new Range(e, t)
        } catch (r) {
          return null
        }
        return r.forEach(function(r) {
          o.test(r) && (s && 1 !== n.compare(r) || (n = new SemVer(s = r, t)))
        }), s
      }

      function validRange(r, e) {
        try {
          return new Range(r, e).range || "*"
        } catch (r) {
          return null
        }
      }

      function ltr(r, e, t) {
        return outside(r, e, "<", t)
      }

      function gtr(r, e, t) {
        return outside(r, e, ">", t)
      }

      function outside(r, e, t, s) {
        r = new SemVer(r, s), e = new Range(e, s);
        var n, o, a, i, c;
        switch (t) {
          case ">":
            n = gt, o = lte, a = lt, i = ">", c = ">=";
            break;
          case "<":
            n = lt, o = gte, a = gt, i = "<", c = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (satisfies(r, e, s)) return !1;
        for (var p = 0; p < e.set.length; ++p) {
          var E = null,
            R = null;
          if (e.set[p].forEach(function(r) {
              r.semver === ANY && (r = new Comparator(">=0.0.0")), E = E || r, R = R || r, n(r.semver, E.semver, s) ? E = r : a(r.semver, R.semver, s) && (R = r)
            }), E.operator === i || E.operator === c) return !1;
          if ((!R.operator || R.operator === i) && o(r, R.semver)) return !1;
          if (R.operator === c && a(r, R.semver)) return !1
        }
        return !0
      }

      function prerelease(r, e) {
        var t = parse(r, e);
        return t && t.prerelease.length ? t.prerelease : null
      }

      function intersects(r, e, t) {
        return r = new Range(r, t), e = new Range(e, t), r.intersects(e)
      }
      exports = module.exports = SemVer;
      var debug;
      debug = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
        var r = Array.prototype.slice.call(arguments, 0);
        r.unshift("SEMVER"), console.log.apply(console, r)
      } : function() {}, exports.SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256,
        MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991,
        re = exports.re = [],
        src = exports.src = [],
        R = 0,
        NUMERICIDENTIFIER = R++;
      src[NUMERICIDENTIFIER] = "0|[1-9]\\d*";
      var NUMERICIDENTIFIERLOOSE = R++;
      src[NUMERICIDENTIFIERLOOSE] = "[0-9]+";
      var NONNUMERICIDENTIFIER = R++;
      src[NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      var MAINVERSION = R++;
      src[MAINVERSION] = "(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")";
      var MAINVERSIONLOOSE = R++;
      src[MAINVERSIONLOOSE] = "(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")";
      var PRERELEASEIDENTIFIER = R++;
      src[PRERELEASEIDENTIFIER] = "(?:" + src[NUMERICIDENTIFIER] + "|" + src[NONNUMERICIDENTIFIER] + ")";
      var PRERELEASEIDENTIFIERLOOSE = R++;
      src[PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[NUMERICIDENTIFIERLOOSE] + "|" + src[NONNUMERICIDENTIFIER] + ")";
      var PRERELEASE = R++;
      src[PRERELEASE] = "(?:-(" + src[PRERELEASEIDENTIFIER] + "(?:\\." + src[PRERELEASEIDENTIFIER] + ")*))";
      var PRERELEASELOOSE = R++;
      src[PRERELEASELOOSE] = "(?:-?(" + src[PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[PRERELEASEIDENTIFIERLOOSE] + ")*))";
      var BUILDIDENTIFIER = R++;
      src[BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
      var BUILD = R++;
      src[BUILD] = "(?:\\+(" + src[BUILDIDENTIFIER] + "(?:\\." + src[BUILDIDENTIFIER] + ")*))";
      var FULL = R++,
        FULLPLAIN = "v?" + src[MAINVERSION] + src[PRERELEASE] + "?" + src[BUILD] + "?";
      src[FULL] = "^" + FULLPLAIN + "$";
      var LOOSEPLAIN = "[v=\\s]*" + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + "?" + src[BUILD] + "?",
        LOOSE = R++;
      src[LOOSE] = "^" + LOOSEPLAIN + "$";
      var GTLT = R++;
      src[GTLT] = "((?:<|>)?=?)";
      var XRANGEIDENTIFIERLOOSE = R++;
      src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
      var XRANGEIDENTIFIER = R++;
      src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + "|x|X|\\*";
      var XRANGEPLAIN = R++;
      src[XRANGEPLAIN] = "[v=\\s]*(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:" + src[PRERELEASE] + ")?" + src[BUILD] + "?)?)?";
      var XRANGEPLAINLOOSE = R++;
      src[XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:" + src[PRERELEASELOOSE] + ")?" + src[BUILD] + "?)?)?";
      var XRANGE = R++;
      src[XRANGE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAIN] + "$";
      var XRANGELOOSE = R++;
      src[XRANGELOOSE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAINLOOSE] + "$";
      var LONETILDE = R++;
      src[LONETILDE] = "(?:~>?)";
      var TILDETRIM = R++;
      src[TILDETRIM] = "(\\s*)" + src[LONETILDE] + "\\s+", re[TILDETRIM] = new RegExp(src[TILDETRIM], "g");
      var tildeTrimReplace = "$1~",
        TILDE = R++;
      src[TILDE] = "^" + src[LONETILDE] + src[XRANGEPLAIN] + "$";
      var TILDELOOSE = R++;
      src[TILDELOOSE] = "^" + src[LONETILDE] + src[XRANGEPLAINLOOSE] + "$";
      var LONECARET = R++;
      src[LONECARET] = "(?:\\^)";
      var CARETTRIM = R++;
      src[CARETTRIM] = "(\\s*)" + src[LONECARET] + "\\s+", re[CARETTRIM] = new RegExp(src[CARETTRIM], "g");
      var caretTrimReplace = "$1^",
        CARET = R++;
      src[CARET] = "^" + src[LONECARET] + src[XRANGEPLAIN] + "$";
      var CARETLOOSE = R++;
      src[CARETLOOSE] = "^" + src[LONECARET] + src[XRANGEPLAINLOOSE] + "$";
      var COMPARATORLOOSE = R++;
      src[COMPARATORLOOSE] = "^" + src[GTLT] + "\\s*(" + LOOSEPLAIN + ")$|^$";
      var COMPARATOR = R++;
      src[COMPARATOR] = "^" + src[GTLT] + "\\s*(" + FULLPLAIN + ")$|^$";
      var COMPARATORTRIM = R++;
      src[COMPARATORTRIM] = "(\\s*)" + src[GTLT] + "\\s*(" + LOOSEPLAIN + "|" + src[XRANGEPLAIN] + ")", re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], "g");
      var comparatorTrimReplace = "$1$2$3",
        HYPHENRANGE = R++;
      src[HYPHENRANGE] = "^\\s*(" + src[XRANGEPLAIN] + ")\\s+-\\s+(" + src[XRANGEPLAIN] + ")\\s*$";
      var HYPHENRANGELOOSE = R++;
      src[HYPHENRANGELOOSE] = "^\\s*(" + src[XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + src[XRANGEPLAINLOOSE] + ")\\s*$";
      var STAR = R++;
      src[STAR] = "(<|>)?=?\\s*\\*";
      for (var i = 0; i < R; i++) debug(i, src[i]), re[i] || (re[i] = new RegExp(src[i]));
      exports.parse = parse, exports.valid = valid, exports.clean = clean, exports.SemVer = SemVer, SemVer.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
      }, SemVer.prototype.toString = function() {
        return this.version
      }, SemVer.prototype.compare = function(r) {
        return debug("SemVer.compare", this.version, this.loose, r), r instanceof SemVer || (r = new SemVer(r, this.loose)), this.compareMain(r) || this.comparePre(r)
      }, SemVer.prototype.compareMain = function(r) {
        return r instanceof SemVer || (r = new SemVer(r, this.loose)), compareIdentifiers(this.major, r.major) || compareIdentifiers(this.minor, r.minor) || compareIdentifiers(this.patch, r.patch)
      }, SemVer.prototype.comparePre = function(r) {
        if (r instanceof SemVer || (r = new SemVer(r, this.loose)), this.prerelease.length && !r.prerelease.length) return -1;
        if (!this.prerelease.length && r.prerelease.length) return 1;
        if (!this.prerelease.length && !r.prerelease.length) return 0;
        var e = 0;
        do {
          var t = this.prerelease[e],
            s = r.prerelease[e];
          if (debug("prerelease compare", e, t, s), void 0 === t && void 0 === s) return 0;
          if (void 0 === s) return 1;
          if (void 0 === t) return -1;
          if (t !== s) return compareIdentifiers(t, s)
        } while (++e)
      }, SemVer.prototype.inc = function(r, e) {
        switch (r) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", e), this.inc("pre", e);
            break;
          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", e), this.inc("pre", e);
            break;
          case "major":
            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            0 === this.prerelease.length && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (0 === this.prerelease.length) this.prerelease = [0];
            else {
              for (var t = this.prerelease.length; --t >= 0;) "number" == typeof this.prerelease[t] && (this.prerelease[t]++, t = -2); - 1 === t && this.prerelease.push(0)
            }
            e && (this.prerelease[0] === e ? isNaN(this.prerelease[1]) && (this.prerelease = [e, 0]) : this.prerelease = [e, 0]);
            break;
          default:
            throw new Error("invalid increment argument: " + r)
        }
        return this.format(), this.raw = this.version, this
      }, exports.inc = inc, exports.diff = diff, exports.compareIdentifiers = compareIdentifiers;
      var numeric = /^[0-9]+$/;
      exports.rcompareIdentifiers = rcompareIdentifiers, exports.major = major, exports.minor = minor, exports.patch = patch, exports.compare = compare, exports.compareLoose = compareLoose, exports.rcompare = rcompare, exports.sort = sort, exports.rsort = rsort, exports.gt = gt, exports.lt = lt, exports.eq = eq, exports.neq = neq, exports.gte = gte, exports.lte = lte, exports.cmp = cmp, exports.Comparator = Comparator;
      var ANY = {};
      Comparator.prototype.parse = function(r) {
        var e = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR],
          t = r.match(e);
        if (!t) throw new TypeError("Invalid comparator: " + r);
        this.operator = t[1], "=" === this.operator && (this.operator = ""), t[2] ? this.semver = new SemVer(t[2], this.loose) : this.semver = ANY
      }, Comparator.prototype.toString = function() {
        return this.value
      }, Comparator.prototype.test = function(r) {
        return debug("Comparator.test", r, this.loose), this.semver === ANY || ("string" == typeof r && (r = new SemVer(r, this.loose)), cmp(r, this.operator, this.semver, this.loose))
      }, Comparator.prototype.intersects = function(r, e) {
        if (!(r instanceof Comparator)) throw new TypeError("a Comparator is required");
        var t;
        if ("" === this.operator) return t = new Range(r.value, e), satisfies(this.value, t, e);
        if ("" === r.operator) return t = new Range(this.value, e), satisfies(r.semver, t, e);
        var s = !(">=" !== this.operator && ">" !== this.operator || ">=" !== r.operator && ">" !== r.operator),
          n = !("<=" !== this.operator && "<" !== this.operator || "<=" !== r.operator && "<" !== r.operator),
          o = this.semver.version === r.semver.version,
          a = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== r.operator && "<=" !== r.operator),
          i = cmp(this.semver, "<", r.semver, e) && (">=" === this.operator || ">" === this.operator) && ("<=" === r.operator || "<" === r.operator),
          c = cmp(this.semver, ">", r.semver, e) && ("<=" === this.operator || "<" === this.operator) && (">=" === r.operator || ">" === r.operator);
        return s || n || o && a || i || c
      }, exports.Range = Range, Range.prototype.format = function() {
        return this.range = this.set.map(function(r) {
          return r.join(" ").trim()
        }).join("||").trim(), this.range
      }, Range.prototype.toString = function() {
        return this.range
      }, Range.prototype.parseRange = function(r) {
        var e = this.loose;
        r = r.trim(), debug("range", r, e);
        var t = e ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
        r = r.replace(t, hyphenReplace), debug("hyphen replace", r), r = r.replace(re[COMPARATORTRIM], comparatorTrimReplace), debug("comparator trim", r, re[COMPARATORTRIM]), r = (r = (r = r.replace(re[TILDETRIM], tildeTrimReplace)).replace(re[CARETTRIM], caretTrimReplace)).split(/\s+/).join(" ");
        var s = e ? re[COMPARATORLOOSE] : re[COMPARATOR],
          n = r.split(" ").map(function(r) {
            return parseComparator(r, e)
          }).join(" ").split(/\s+/);
        return this.loose && (n = n.filter(function(r) {
          return !!r.match(s)
        })), n = n.map(function(r) {
          return new Comparator(r, e)
        })
      }, Range.prototype.intersects = function(r, e) {
        if (!(r instanceof Range)) throw new TypeError("a Range is required");
        return this.set.some(function(t) {
          return t.every(function(t) {
            return r.set.some(function(r) {
              return r.every(function(r) {
                return t.intersects(r, e)
              })
            })
          })
        })
      }, exports.toComparators = toComparators, Range.prototype.test = function(r) {
        if (!r) return !1;
        "string" == typeof r && (r = new SemVer(r, this.loose));
        for (var e = 0; e < this.set.length; e++)
          if (testSet(this.set[e], r)) return !0;
        return !1
      }, exports.satisfies = satisfies, exports.maxSatisfying = maxSatisfying, exports.minSatisfying = minSatisfying, exports.validRange = validRange, exports.ltr = ltr, exports.gtr = gtr, exports.outside = outside, exports.prerelease = prerelease, exports.intersects = intersects;

    }).call(this, require('_process'))
  }, {
    "_process": 1
  }],
  7: [function(require, module, exports) {
    function UUIDjs() {}

    function getRandomInt(U, t) {
      return Math.floor(Math.random() * (t - U + 1)) + U
    }
    UUIDjs.maxFromBits = function(U) {
      return Math.pow(2, U)
    }, UUIDjs.limitUI04 = UUIDjs.maxFromBits(4), UUIDjs.limitUI06 = UUIDjs.maxFromBits(6), UUIDjs.limitUI08 = UUIDjs.maxFromBits(8), UUIDjs.limitUI12 = UUIDjs.maxFromBits(12), UUIDjs.limitUI14 = UUIDjs.maxFromBits(14), UUIDjs.limitUI16 = UUIDjs.maxFromBits(16), UUIDjs.limitUI32 = UUIDjs.maxFromBits(32), UUIDjs.limitUI40 = UUIDjs.maxFromBits(40), UUIDjs.limitUI48 = UUIDjs.maxFromBits(48), UUIDjs.randomUI04 = function() {
      return getRandomInt(0, UUIDjs.limitUI04 - 1)
    }, UUIDjs.randomUI06 = function() {
      return getRandomInt(0, UUIDjs.limitUI06 - 1)
    }, UUIDjs.randomUI08 = function() {
      return getRandomInt(0, UUIDjs.limitUI08 - 1)
    }, UUIDjs.randomUI12 = function() {
      return getRandomInt(0, UUIDjs.limitUI12 - 1)
    }, UUIDjs.randomUI14 = function() {
      return getRandomInt(0, UUIDjs.limitUI14 - 1)
    }, UUIDjs.randomUI16 = function() {
      return getRandomInt(0, UUIDjs.limitUI16 - 1)
    }, UUIDjs.randomUI32 = function() {
      return getRandomInt(0, UUIDjs.limitUI32 - 1)
    }, UUIDjs.randomUI40 = function() {
      return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30)
    }, UUIDjs.randomUI48 = function() {
      return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30)
    }, UUIDjs.paddedString = function(U, t, r) {
      U = String(U), r = r || "0";
      for (var n = t - U.length; n > 0; n >>>= 1, r += r) 1 & n && (U = r + U);
      return U
    }, UUIDjs.prototype.fromParts = function(U, t, r, n, I, i) {
      return this.version = r >> 12 & 15, this.hex = UUIDjs.paddedString(U.toString(16), 8) + "-" + UUIDjs.paddedString(t.toString(16), 4) + "-" + UUIDjs.paddedString(r.toString(16), 4) + "-" + UUIDjs.paddedString(n.toString(16), 2) + UUIDjs.paddedString(I.toString(16), 2) + "-" + UUIDjs.paddedString(i.toString(16), 12), this
    }, UUIDjs.prototype.toString = function() {
      return this.hex
    }, UUIDjs.prototype.toURN = function() {
      return "urn:uuid:" + this.hex
    }, UUIDjs.prototype.toBytes = function() {
      for (var U = this.hex.split("-"), t = [], r = 0, n = 0; n < U.length; n++)
        for (var I = 0; I < U[n].length; I += 2) t[r++] = parseInt(U[n].substr(I, 2), 16);
      return t
    }, UUIDjs.prototype.equals = function(U) {
      return U instanceof UUID && this.hex === U.hex
    }, UUIDjs.getTimeFieldValues = function(U) {
      var t = U - Date.UTC(1582, 9, 15),
        r = t / 4294967296 * 1e4 & 268435455;
      return {
        low: 1e4 * (268435455 & t) % 4294967296,
        mid: 65535 & r,
        hi: r >>> 16,
        timestamp: t
      }
    }, UUIDjs._create4 = function() {
      return (new UUIDjs).fromParts(UUIDjs.randomUI32(), UUIDjs.randomUI16(), 16384 | UUIDjs.randomUI12(), 128 | UUIDjs.randomUI06(), UUIDjs.randomUI08(), UUIDjs.randomUI48())
    }, UUIDjs._create1 = function() {
      var U = (new Date).getTime(),
        t = UUIDjs.randomUI14(),
        r = 1099511627776 * (1 | UUIDjs.randomUI08()) + UUIDjs.randomUI40(),
        n = UUIDjs.randomUI04(),
        I = 0;
      U != I ? (U < I && t++, I = U, n = UUIDjs.randomUI04()) : Math.random() < .25 && n < 9984 ? n += 1 + UUIDjs.randomUI04() : t++;
      var i = UUIDjs.getTimeFieldValues(I),
        s = i.low + n,
        e = 4095 & i.hi | 4096,
        o = (t &= 16383) >>> 8 | 128,
        a = 255 & t;
      return (new UUIDjs).fromParts(s, i.mid, e, o, a, r)
    }, UUIDjs.create = function(U) {
      return U = U || 4, this["_create" + U]()
    }, UUIDjs.fromTime = function(U, t) {
      t = t || !1;
      var r = UUIDjs.getTimeFieldValues(U),
        n = r.low,
        I = 4095 & r.hi | 4096;
      return !1 === t ? (new UUIDjs).fromParts(n, r.mid, I, 0, 0, 0) : (new UUIDjs).fromParts(n, r.mid, I, 128 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1)
    }, UUIDjs.firstFromTime = function(U) {
      return UUIDjs.fromTime(U, !1)
    }, UUIDjs.lastFromTime = function(U) {
      return UUIDjs.fromTime(U, !0)
    }, UUIDjs.fromURN = function(U) {
      var t;
      return (t = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(U)) ? (new UUIDjs).fromParts(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), parseInt(t[4], 16), parseInt(t[5], 16), parseInt(t[6], 16)) : null
    }, UUIDjs.fromBytes = function(U) {
      if (U.length < 5) return null;
      for (var t = "", r = 0, n = [4, 2, 2, 2, 6], I = 0; I < n.length; I++) {
        for (var i = 0; i < n[I]; i++) {
          var s = U[r++].toString(16);
          1 == s.length && (s = "0" + s), t += s
        }
        6 !== n[I] && (t += "-")
      }
      return UUIDjs.fromURN(t)
    }, UUIDjs.fromBinary = function(U) {
      for (var t = [], r = 0; r < U.length; r++)
        if (t[r] = U.charCodeAt(r), t[r] > 255 || t[r] < 0) throw new Error("Unexpected byte in binary data.");
      return UUIDjs.fromBytes(t)
    }, UUIDjs.new = function() {
      return this.create(4)
    }, UUIDjs.newTS = function() {
      return this.create(1)
    }, module.exports = UUIDjs;

  }, {}],
  8: [function(require, module, exports) {
    function H264SDP(e, a) {
      if (e && a) return `a=rtpmap:${e} H264/90000\na=rtcp-fb:${e} ccm fir\na=rtcp-fb:${e} nack\na=rtcp-fb:${e} nack pli\na=rtcp-fb:${e} goog-remb\na=rtcp-fb:${e} transport-cc\na=fmtp:${e} level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=${a}`;
      throw new Error(`SDP-Transform: payload:${e} or id:${a} not allowed to be null.`)
    }

    function removeCodec(e, a) {
      var r = supportVideoCodecs(e),
        n = r.indexOf(a);
      return -1 !== n && r.splice(n, 1), uniformOfferSDPCodecsPayload(e, r)
    }

    function bubbleUpH264(e) {
      var a = e.match(/(m=video \d+ \D+\b\s)(.*)/),
        r = a[1],
        n = a[2].split(" "),
        t = n.indexOf(String(H264_BASE)),
        o = n.indexOf(String(H264_PROFILE)); - 1 !== t && n.splice(t, 1), -1 !== o && n.splice(o, 1), -1 !== t && n.unshift(String(H264_BASE)), -1 !== o && n.unshift(String(H264_PROFILE));
      var p = r.concat(n.join(" ")).concat("\r\n");
      return e = e.replace(/m=video.*\r\n/, p)
    }

    function isSupportCodec(e, a) {
      return !!e.match(RegExp(`a=rtpmap:\\d+ ${a}`, "i"))
    }

    function uniformOfferSDPCodecsPayload(e, a) {
      var r = supportVideoCodecs(e);
      return 0 === r.length ? e : (a && (r = _.intersection(a, r)), _updatePayload(e, r))
    }

    function supportVideoCodecs(e) {
      for (var a = /a=rtpmap:\d+ (\w+)/g, r = a.exec(e), n = []; r;) "H264" !== r[1] && n.push(r[1]), r = a.exec(e);
      for (r = (a = /profile-level-id=((\w{2})\w{4})/g).exec(e); r;) {
        switch (r[2]) {
          case "64":
            H264ProfileId = r[1], n.push("H264_PROFILE");
            break;
          case "42":
            H264BaseId = r[1], n.push("H264_BASE");
            break;
          case "4d":
            console.log("SDP-Transform: missing 4dxxxx profile id of H264.");
            break;
          default:
            throw new Error(`SDP-Transform: unknown H264 profile-level-id ${r[2]}`)
        }
        r = a.exec(e)
      }
      return _.intersection(SUPPORT_VIDEO_CODECS, n)
    }

    function _updatePayload(e, a) {
      var r = e.split("\r\n"),
        n = [],
        t = [];
      if (a.reverse(), -1 != navigator.userAgent.indexOf("Firefox"))
        for (var o of a) switch (o) {
          case "VP8":
            n.unshift(VP8), t.unshift(VP8_SDP_ff);
            break;
          case "VP9":
            n.unshift(VP9), t.unshift(VP9_SDP_ff);
            break;
          case "H264_BASE":
            n.unshift(H264_BASE), t.unshift(H264SDP(H264_BASE, H264BaseId));
            break;
          case "H264_PROFILE":
            break;
          default:
            throw new Error(`unknown codec ${o} found.`)
        } else {
          defaultEnv.redEnable && (defaultEnv.rtxEnable && (n.push(RED_RTX), t.push(RED_SDP_RTX)), n.unshift(RED), t.unshift(RED_SDP)), defaultEnv.ulpfedEnable && (n.unshift(ULPFEC), t.push(ULPFEC_SDP));
          for (var o of a) switch (o) {
            case "VP8":
              defaultEnv.rtxEnable && (n.push(VP8_RTX), t.unshift(VP8_SDP_RTX)), n.unshift(VP8), t.unshift(VP8_SDP);
              break;
            case "VP9":
              defaultEnv.rtxEnable && (n.push(VP9_RTX), t.unshift(VP9_SDP_RTX)), n.unshift(VP9), t.unshift(VP9_SDP);
              break;
            case "H264_BASE":
              defaultEnv.rtxEnable && (n.push(H264_BASE_RTX), t.unshift(H264_BASE_SDP_RTX)), n.unshift(H264_BASE), t.unshift(H264SDP(H264_BASE, H264BaseId));
              break;
            case "H264_PROFILE":
              defaultEnv.rtxEnable && (n.push(H264_PROFILE_RTX), t.unshift(H264_PROFILE_SDP_RTX)), n.unshift(H264_PROFILE), t.unshift(H264SDP(H264_PROFILE, H264ProfileId));
              break;
            default:
              throw new Error(`unknown codec ${o} found.`)
          }
        }
      for (var p = t.join("\n").split("\n"), f = "none", c = [], s = 0, P = 0; P < r.length; P++) switch ("audio" !== f && 0 === r[P].indexOf("m=audio") ? f = "audio" : "video" !== f && 0 === r[P].indexOf("m=video") && (f = "video", r[P] = r[P].replace(/(m=video \d* UDP\/TLS\/RTP\/SAVPF)(.*)/, "$1 " + n.join(" ")), r[P] = r[P].replace(/(m=video \d* RTP\/AVPF)(.*)/, "$1 " + n.join(" "))), f) {
        case "video":
          0 === r[P].indexOf("a=rtpmap:") || 0 === r[P].indexOf("a=rtcp-fb:") || 0 === r[P].indexOf("a=fmtp:") ? s = c.length : c.push(r[P]);
          break;
        default:
          c.push(r[P])
      }
      var i = c.slice(s);
      return c.slice(0, s).concat(p).concat(i).join("\r\n")
    }

    function rearrangeAnswerPayloadOrder(e, a) {
      var r = supportVideoCodecs(e);
      if (0 === r.length) return e;
      var n = e.match(/(m=video \d+ \D+\b\s)(.*)/)[1],
        t = _.intersection(a, r),
        o = _.difference(r, a);
      r = t.concat(o);
      var p = [];
      if (isSupportCodec(e, "ulpfec") && p.push(ULPFEC), isSupportCodec(e, "red") && (p.unshift(RED), p.push(RED_RTX)), r.reverse(), -1 != navigator.userAgent.indexOf("Firefox"))
        for (var f of r) switch (f) {
          case "VP8":
            p.unshift(VP8);
            break;
          case "VP9":
            p.unshift(VP9);
            break;
          case "H264_BASE":
            p.unshift(H264_BASE);
            break;
          case "H264_PROFILE":
            break;
          default:
            throw new Error(`unknown codec ${f} found.`)
        } else
          for (var f of r) switch (f) {
            case "VP8":
              p.unshift(VP8), defaultEnv.rtxEnable && p.push(VP8_RTX);
              break;
            case "VP9":
              p.unshift(VP9), defaultEnv.rtxEnable && p.push(VP9_RTX);
              break;
            case "H264_BASE":
              p.unshift(H264_BASE), defaultEnv.rtxEnable && p.push(H264_BASE_RTX);
              break;
            case "H264_PROFILE":
              p.unshift(H264_PROFILE), defaultEnv.rtxEnable && p.push(H264_PROFILE_RTX);
              break;
            default:
              throw new Error(`unknown codec ${f} found.`)
          }
      var c = n.concat(p.join(" ")).concat("\r\n");
      return e = e.replace(/m=video.*\r\n/, c)
    }

    function alterUploadStreamSssrc(e, a) {
      var r = new RegExp("a=ssrc:(\\d+) .* " + a.bigStreamId),
        n = new RegExp("a=ssrc:(\\d+) .* " + a.smallStreamId),
        t = e.match(r),
        o = e.match(n);
      return t && o || console.log("SDP-Transform(alterUploadStreamSssrc): Can not find Big&Small ssrc in", e, a), e = e.replace(new RegExp(t[1], "g"), 2 * Math.floor(parseInt(t[1]) / 2) + 1), e = e.replace(new RegExp(o[1], "g"), 2 * Math.ceil(parseInt(o[1]) / 2))
    }

    function alterAudioSampleRateAndChannels(e, a, r) {
      var n = e.match(/a=rtpmap:(\d+) opus/);
      if (!n) return console.log("sdp-transform: Not found opus."), e;
      if (-1 != e.indexOf("sprop-maxcapturerate")) return e;
      var t = new RegExp(`(a=fmtp:${n[1]} .*)\r\n`);
      return (e = r ? e.replace(t, `$1;stereo=1;sprop-stereo=1;maxplaybackrate=${a};sprop-maxcapturerate=${a}\r\n`) : e.replace(t, `$1;maxplaybackrate=${a};sprop-maxcapturerate=${a}\r\n`)).replace(t, `$1;\r\n`)
    }
    var _ = require("lodash"),
      defaultEnv = {
        rtxEnable: !0,
        redEnable: !0,
        ulpfedEnable: !0
      };
    const VP8 = 96,
      VP8_RTX = 107,
      VP9 = 98,
      VP9_RTX = 108,
      H264_PROFILE = 99,
      H264_PROFILE_RTX = 111,
      H264_BASE = 100,
      H264_BASE_RTX = 110,
      RED = 106,
      RED_RTX = 109,
      ULPFEC = 124,
      CODEC_VP9 = "VP9",
      CODEC_VP8 = "VP8",
      CODEC_H264_BASE = "H264_BASE",
      CODEC_H264_PROFILE = "H264_PROFILE";
    var H264BaseId = null,
      H264ProfileId = null;
    const VP8_SDP = `a=rtpmap:${VP8} VP8/90000\na=rtcp-fb:${VP8} ccm fir\na=rtcp-fb:${VP8} nack\na=rtcp-fb:${VP8} nack pli\na=rtcp-fb:${VP8} goog-remb\na=rtcp-fb:${VP8} transport-cc`,
      VP8_SDP_RTX = `a=rtpmap:${VP8_RTX} rtx/90000\na=fmtp:${VP8_RTX} apt=${VP8}`,
      VP9_SDP = `a=rtpmap:${VP9} VP9/90000\na=rtcp-fb:${VP9} ccm fir\na=rtcp-fb:${VP9} nack\na=rtcp-fb:${VP9} nack pli\na=rtcp-fb:${VP9} goog-remb\na=rtcp-fb:${VP9} transport-cc`,
      VP9_SDP_RTX = `a=rtpmap:${VP9_RTX} rtx/90000\na=fmtp:${VP9_RTX} apt=${VP9}`,
      ULPFEC_SDP = `a=rtpmap:${ULPFEC} ulpfec/90000`,
      RED_SDP = `a=rtpmap:${RED} red/90000`,
      RED_SDP_RTX = `a=rtpmap:${RED_RTX} rtx/90000\na=fmtp:${RED_RTX} apt=${RED}`,
      H264_BASE_SDP_RTX = `a=rtpmap:${H264_BASE_RTX} rtx/90000\na=fmtp:${H264_BASE_RTX} apt=${H264_BASE}`,
      H264_PROFILE_SDP_RTX = `a=rtpmap:${H264_PROFILE_RTX} rtx/90000\na=fmtp:${H264_PROFILE_RTX} apt=${H264_PROFILE}`,
      VP8_SDP_ff = `a=rtpmap:${VP8} VP8/90000\na=rtcp-fb:${VP8} nack\na=rtcp-fb:${VP8} nack pli\na=rtcp-fb:${VP8} ccm fir\na=rtcp-fb:${VP8} goog-remb\na=fmtp:${VP8} max-fs=12288;max-fr=60`,
      VP9_SDP_ff = `a=rtpmap:${VP9} VP9/90000\na=rtcp-fb:${VP9} nack\na=rtcp-fb:${VP9} nack pli\na=rtcp-fb:${VP9} ccm fir\na=rtcp-fb:${VP9} goog-remb\na=fmtp:${VP9} max-fs=12288;max-fr=60`,
      H264_BASE_SDP_ff = `a=fmtp:${H264_BASE} profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1\na=rtcp-fb:${H264_BASE} nack\na=rtcp-fb:${H264_BASE} nack pli\na=rtcp-fb:${H264_BASE} ccm fir\na=rtcp-fb:${H264_BASE} goog-remb\na=rtpmap:${H264_BASE} H264/90000`,
      SUPPORT_VIDEO_CODECS = ["H264_PROFILE", "H264_BASE", "VP8", "VP9"];
    module.exports = {
      alterUploadStreamSssrc: alterUploadStreamSssrc,
      uniformOfferSDPCodecsPayload: uniformOfferSDPCodecsPayload,
      rearrangeAnswerPayloadOrder: rearrangeAnswerPayloadOrder,
      supportVideoCodecs: supportVideoCodecs,
      removeCodec: removeCodec,
      bubbleUpH264: bubbleUpH264,
      isSupportCodec: isSupportCodec,
      defaultEnv: defaultEnv,
      alterAudioSampleRateAndChannels: alterAudioSampleRateAndChannels,
      CODEC_VP9: "VP9",
      CODEC_VP8: "VP8",
      CODEC_H264_BASE: "H264_BASE",
      CODEC_H264_PROFILE: "H264_PROFILE"
    };

  }, {
    "lodash": 5
  }]
}, {}, [3]);
