typeof DEBUG === 'undefined' && (DEBUG = 1);
typeof DEVMODE === 'undefined' && (DEVMODE = 1);
typeof REVISION === 'undefined' && (REVISION = 1);

var src = document.querySelectorAll('script[data-require]')[0].getAttribute('src');
var baseUrl = src.substring(0, src.lastIndexOf('/') + 1);

document.write('<script src="' + baseUrl + 'lib/core/vee-old.js?r=' + Math.random() + '"></script>')
// document.write('<script src="' + baseUrl + 'lib/core/vee.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/md5.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/spin.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/animation.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/Loading.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/core.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/core/aha.js?r=' + Math.random() + '"></script>')

document.write('<script src="' + baseUrl + 'lib/util/api.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/Dialog.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/geo.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/wechat.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/Concurrency.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/Carousel.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'lib/util/video.js?r=' + Math.random() + '"></script>')

document.write('<script src="' + baseUrl + 'app.js?r=' + Math.random() + '"></script>')

document.write('<script src="' + baseUrl + 'js/tpl/template.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Default.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Video.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Music.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Shopping.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Game.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/tpl/Book.js?r=' + Math.random() + '"></script>')

document.write('<script src="' + baseUrl + 'js/view/SearchBar.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/MainTab.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/AlbumRow.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/AlbumToolBar.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/DelayImage.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/Widget.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/view/DownLoadBar.js?r=' + Math.random() + '"></script>')

document.write('<script src="' + baseUrl + 'js/model/User.js?r=' + Math.random() + '"></script>')
document.write('<script src="' + baseUrl + 'js/model/Trend.js?r=' + Math.random() + '"></script>')

