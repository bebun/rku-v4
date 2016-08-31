/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'rkuv4\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rku-linkedin': '&#xe96b;',
		'rku-gear': '&#xe96a;',
		'rku-profile': '&#xe967;',
		'rku-leads': '&#xe969;',
		'rku-print': '&#xe968;',
		'rku-dashboard': '&#xe961;',
		'rku-home': '&#xe962;',
		'rku-whatsapp': '&#xe963;',
		'rku-home-search': '&#xe964;',
		'rku-quote': '&#xe965;',
		'rku-banner': '&#xe966;',
		'rku-verified': '&#xe960;',
		'rku-youtube': '&#xe95e;',
		'rku-pinterest': '&#xe95f;',
		'rku-upfront': '&#xe95a;',
		'rku-forward': '&#xe95b;',
		'rku-downbottom': '&#xe95c;',
		'rku-backward': '&#xe95d;',
		'rku-bbm': '&#xe958;',
		'rku-line': '&#xe959;',
		'rku-envelope': '&#xe956;',
		'rku-phone-2': '&#xe957;',
		'rku-exit': '&#xe955;',
		'rku-label': '&#xe953;',
		'rku-user': '&#xe954;',
		'rku-flag': '&#xe951;',
		'rku-share': '&#xe952;',
		'rku-statistic': '&#xe950;',
		'rku-facebook': '&#xe94c;',
		'rku-twitter': '&#xe94d;',
		'rku-instagram': '&#xe94e;',
		'rku-gplus': '&#xe94f;',
		'rku-doc-1': '&#xe900;',
		'rku-doc-2': '&#xe901;',
		'rku-message-1': '&#xe902;',
		'rku-message-2': '&#xe903;',
		'rku-marker-1': '&#xe904;',
		'rku-marker-2': '&#xe905;',
		'rku-marker-3': '&#xe906;',
		'rku-image-1': '&#xe907;',
		'rku-image-2': '&#xe908;',
		'rku-camera-1': '&#xe909;',
		'rku-camera-2': '&#xe90a;',
		'rku-review': '&#xe90b;',
		'rku-rating-empty': '&#xe90c;',
		'rku-rating-half': '&#xe90d;',
		'rku-rating-full': '&#xe90e;',
		'rku-filter-1': '&#xe90f;',
		'rku-filter-2': '&#xe910;',
		'rku-filter-3': '&#xe911;',
		'rku-list': '&#xe912;',
		'rku-grid': '&#xe913;',
		'rku-map': '&#xe914;',
		'rku-sort-1': '&#xe915;',
		'rku-sort-2': '&#xe916;',
		'rku-menu-bar': '&#xe917;',
		'rku-phone': '&#xe918;',
		'rku-sand-time': '&#xe919;',
		'rku-fax': '&#xe91a;',
		'rku-calendar-1': '&#xe91b;',
		'rku-calendar-2': '&#xe91c;',
		'rku-menu-bullet': '&#xe91d;',
		'rku-inbox': '&#xe91e;',
		'rku-magnifier': '&#xe91f;',
		'rku-bell': '&#xe920;',
		'rku-expand-1': '&#xe921;',
		'rku-expand-2': '&#xe922;',
		'rku-land-area': '&#xe923;',
		'rku-building-area': '&#xe924;',
		'rku-mortgage': '&#xe925;',
		'rku-upload-1': '&#xe926;',
		'rku-save': '&#xe927;',
		'rku-delete': '&#xe928;',
		'rku-coin': '&#xe929;',
		'rku-view': '&#xe92a;',
		'rku-like': '&#xe92b;',
		'rku-dislike': '&#xe92c;',
		'rku-upload-2': '&#xe92d;',
		'rku-download': '&#xe92e;',
		'rku-file-pdf': '&#xe92f;',
		'rku-file-xls': '&#xe930;',
		'rku-file-doc': '&#xe931;',
		'rku-camera-3': '&#xe932;',
		'rku-police': '&#xe933;',
		'rku-dumbell': '&#xe934;',
		'rku-pool': '&#xe935;',
		'rku-ball': '&#xe936;',
		'rku-basket-ring': '&#xe937;',
		'rku-parking': '&#xe938;',
		'rku-flower': '&#xe939;',
		'rku-hall': '&#xe93a;',
		'rku-bed': '&#xe93b;',
		'rku-sofa': '&#xe93c;',
		'rku-laundry': '&#xe93d;',
		'rku-shower': '&#xe93e;',
		'rku-lift': '&#xe93f;',
		'rku-heart-empty': '&#xe940;',
		'rku-heart-full': '&#xe941;',
		'rku-angle-top': '&#xe942;',
		'rku-angle-right': '&#xe943;',
		'rku-angle-bottom': '&#xe944;',
		'rku-angle-left': '&#xe945;',
		'rku-arrow-top': '&#xe946;',
		'rku-arrow-right': '&#xe947;',
		'rku-arrow-bottom': '&#xe948;',
		'rku-arrow-left': '&#xe949;',
		'rku-check': '&#xe94a;',
		'rku-cross': '&#xe94b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rku-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
