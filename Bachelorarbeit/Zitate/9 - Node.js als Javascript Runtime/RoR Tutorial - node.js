<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" lang="en"><head>
    <title>Learn Web Development with the Ruby on Rails Tutorial | Static Pages</title>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<meta name="robots" content="all">
<meta name="MSSmartTagsPreventParsing" content="true">
<meta name="description" content="Ruby on Rails Tutorial: Learn Rails by Example by Michael Hartl">
<meta name="keywords" content="Learn Ruby Rails Tutorial web development Rails 3">
<meta name="author" content="Michael Hartl">
<meta property="og:title" content="Ruby on Rails Tutorial: Learn Rails by Example">
<meta property="og:site_name" content="Ruby on Rails Tutorial">
<meta property="og:image" content="http://railstutorial.org/images/layout/logo.png">
<meta property="og:url" content="http://railstutorial.org/">
<meta property="og:type" content="article">
<meta property="og:description" content="Ruby on Rails Tutorial: Learn Web Development with Rails by Michael Hartl teaches web development with Ruby on Rails. Rails Tutorial is fully up-to-date with Rails 3.0 and Rails 3.2.">
    <link href="RoR%20Tutorial%20-%20node-Dateien/polytexnic.css" media="screen" rel="stylesheet" type="text/css">
    <link href="RoR%20Tutorial%20-%20node-Dateien/pygments.css" media="screen" rel="stylesheet" type="text/css">

      <link href="RoR%20Tutorial%20-%20node-Dateien/screen.css" media="screen, projection" rel="stylesheet" type="text/css">
      
    <link href="RoR%20Tutorial%20-%20node-Dateien/print.css" media="print" rel="stylesheet" type="text/css">
    <!--[if lte IE 7]><link href="/stylesheets/ie.css?1371779928" media="screen" rel="stylesheet" type="text/css" /><![endif]-->
    <!--[if lt IE 7]>  <div style='border: 1px solid #F7941D; background: #FEEFDA; text-align: center; clear: both; height: 75px; position: relative;'>    <div style='position: absolute; right: 3px; top: 3px; font-family: courier new; font-weight: bold;'><a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg' style='border: none;' alt='Close this notice'/></a></div>    <div style='width: 640px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden; color: black;'>      <div style='width: 75px; float: left;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-warning.jpg' alt='Warning!'/></div>      <div style='width: 275px; float: left; font-family: Arial, sans-serif;'>        <div style='font-size: 14px; font-weight: bold; margin-top: 12px;'>You are using an outdated browser</div>        <div style='font-size: 12px; margin-top: 6px; line-height: 12px;'>For a better experience using this site, please upgrade to a modern web browser.</div>      </div>      <div style='width: 75px; float: left;'><a href='http://www.firefox.com' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-firefox.jpg' style='border: none;' alt='Get Firefox 3.5'/></a></div>      <div style='width: 75px; float: left;'><a href='http://www.browserforthebetter.com/download.html' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-ie8.jpg' style='border: none;' alt='Get Internet Explorer 8'/></a></div>      <div style='width: 73px; float: left;'><a href='http://www.apple.com/safari/download/' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-safari.jpg' style='border: none;' alt='Get Safari 4'/></a></div>      <div style='float: left;'><a href='http://www.google.com/chrome' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-chrome.jpg' style='border: none;' alt='Get Google Chrome'/></a></div>    </div>  </div>  <![endif]-->
    <link href="http://feeds.feedburner.com/railstutorial" rel="alternate" title="Rails Tutorial News" type="application/rss+xml">

    
    <script src="RoR%20Tutorial%20-%20node-Dateien/widgets.js" charset="utf-8"></script>    
    
  <!-- base href="http://ruby.railstutorial.org/chapters/static-pages" -->
  <script type="text/javascript" src="RoR%20Tutorial%20-%20node-Dateien/MathJax.js">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'],["\\(","\\)"]]},
    processEscapes: true,
    "HTML-CSS": {
      availableFonts: ["TeX"]
    }
  });
</script>    


  <style type="text/css">.MathJax_Hover_Frame {border-radius: .25em; -webkit-border-radius: .25em; -moz-border-radius: .25em; -khtml-border-radius: .25em; box-shadow: 0px 0px 15px #83A; -webkit-box-shadow: 0px 0px 15px #83A; -moz-box-shadow: 0px 0px 15px #83A; -khtml-box-shadow: 0px 0px 15px #83A; border: 1px solid #A6D ! important; display: inline-block; position: absolute}
.MathJax_Hover_Arrow {position: absolute; width: 15px; height: 11px; cursor: pointer}
</style><style type="text/css">#MathJax_About {position: fixed; left: 50%; width: auto; text-align: center; border: 3px outset; padding: 1em 2em; background-color: #DDDDDD; color: black; cursor: default; font-family: message-box; font-size: 120%; font-style: normal; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; -khtml-border-radius: 15px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_Menu {position: absolute; background-color: white; color: black; width: auto; padding: 2px; border: 1px solid #CCCCCC; margin: 0; cursor: default; font: menu; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_MenuItem {padding: 2px 2em; background: transparent}
.MathJax_MenuArrow {position: absolute; right: .5em; color: #666666}
.MathJax_MenuActive .MathJax_MenuArrow {color: white}
.MathJax_MenuCheck {position: absolute; left: .7em}
.MathJax_MenuRadioCheck {position: absolute; left: 1em}
.MathJax_MenuLabel {padding: 2px 2em 4px 1.33em; font-style: italic}
.MathJax_MenuRule {border-top: 1px solid #CCCCCC; margin: 4px 1px 0px}
.MathJax_MenuDisabled {color: GrayText}
.MathJax_MenuActive {background-color: Highlight; color: HighlightText}
.MathJax_Menu_Close {position: absolute; width: 31px; height: 31px; top: -15px; left: -15px}
</style><style type="text/css">#MathJax_Zoom {position: absolute; background-color: #F0F0F0; overflow: auto; display: block; z-index: 301; padding: .5em; border: 1px solid black; margin: 0; font-weight: normal; font-style: normal; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; box-shadow: 5px 5px 15px #AAAAAA; -webkit-box-shadow: 5px 5px 15px #AAAAAA; -moz-box-shadow: 5px 5px 15px #AAAAAA; -khtml-box-shadow: 5px 5px 15px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_ZoomOverlay {position: absolute; left: 0; top: 0; z-index: 300; display: inline-block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
#MathJax_ZoomFrame {position: relative; display: inline-block; height: 0; width: 0}
#MathJax_ZoomEventTrap {position: absolute; left: 0; top: 0; z-index: 302; display: inline-block; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
</style><style type="text/css">.MathJax_Preview {color: #888}
#MathJax_Message {position: fixed; left: 1px; bottom: 2px; background-color: #E6E6E6; border: 1px solid #959595; margin: 0px; padding: 2px 8px; z-index: 102; color: black; font-size: 80%; width: auto; white-space: nowrap}
#MathJax_MSIE_Frame {position: absolute; top: 0; left: 0; width: 0px; z-index: 101; border: 0px; margin: 0px; padding: 0px}
.MathJax_Error {color: #CC0000; font-style: italic}
</style><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}
.fb_invisible{display:none}
.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}
.fb_reset > div{overflow:hidden}
.fb_link img{border:none}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}
.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}
.fb_dialog_content{background:#fff;color:#333}
.fb_dialog_close_icon{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\9;right:7px\9}
.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}
.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}
.fb_dialog_close_icon:hover{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}
.fb_dialog_close_icon:active{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http://static.ak.fbcdn.net/rsrc.php/v2/yL/r/s816eWC-2sl.gif)}
.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}
.fb_dialog_top_left,
.fb_dialog_top_right,
.fb_dialog_bottom_left,
.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}
/* @noflip */
.fb_dialog_top_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}
/* @noflip */
.fb_dialog_top_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}
/* @noflip */
.fb_dialog_bottom_left{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}
/* @noflip */
.fb_dialog_bottom_right{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}
.fb_dialog_vert_left,
.fb_dialog_vert_right,
.fb_dialog_horiz_top,
.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}
.fb_dialog_vert_left,
.fb_dialog_vert_right{width:10px;height:100%}
.fb_dialog_vert_left{margin-left:-10px}
.fb_dialog_vert_right{right:0;margin-right:-10px}
.fb_dialog_horiz_top,
.fb_dialog_horiz_bottom{width:100%;height:10px}
.fb_dialog_horiz_top{margin-top:-10px}
.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}
.fb_dialog_iframe{line-height:0}
.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}
.fb_dialog_content .dialog_title > span{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/yd/r/Cou7n-nqK52.gif)
no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}
body.fb_hidden{-webkit-transform:none;height:100%;margin:0;left:-10000px;overflow:visible;position:absolute;top:-10000px;width:100%
}
.fb_dialog.fb_dialog_mobile.loading{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/ya/r/3rhSv5V8j3o.gif)
white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}
.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}
#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100%;min-height:100%;z-index:10000}
#fb-root #fb_dialog_ipad_overlay.hidden{display:none}
.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}
.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0 0, 0 100%, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}
.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100%
}
.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px
}
.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px
}
.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0 0, 0 100%, from(#4966A6),
color-stop(0.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset,
rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}
.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}
.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}
.fb_dialog_content .dialog_content{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #555;border-bottom:0;border-top:0;height:150px}
.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}
#fb_dialog_loader_close{float:left}
.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}
.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}
.fb_iframe_widget{display:inline-block;position:relative}
.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}
.fb_iframe_widget iframe{position:absolute}
.fb_iframe_widget_lift{z-index:1}
.fb_hide_iframes iframe{position:relative;left:-10000px}
.fb_iframe_widget_loader{position:relative;display:inline-block}
.fb_iframe_widget_fluid{display:inline}
.fb_iframe_widget_fluid span{width:100%}
.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}
.fb_iframe_widget_loader .FB_Loader{background:url(http://static.ak.fbcdn.net/rsrc.php/v2/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}
.fb_connect_bar_container div,
.fb_connect_bar_container span,
.fb_connect_bar_container a,
.fb_connect_bar_container img,
.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}
.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}
.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode=="CSS1Compat"? document.documentElement.scrollTop+"px":body.scrollTop+"px")}
.fb_connect_bar{position:relative;margin:auto;height:100%;width:100%;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:"lucida grande", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}
.fb_connect_bar a:hover{color:#fff}
.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}
.fb_connect_bar div a,
.fb_connect_bar span,
.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}
.fb_connect_bar .fb_buttons{float:right;margin-top:7px}
.fb_edge_widget_with_comment{position:relative;*z-index:1000}
.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}
.fb_edge_widget_with_comment span.fb_send_button_form_widget{z-index:1}
.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50% 50%;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}
.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}
.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender
.FB_Loader{margin-top:0}
.fbpluginrecommendationsbarleft,
.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}
/* @noflip */
.fbpluginrecommendationsbarleft{left:10px}
/* @noflip */
.fbpluginrecommendationsbarright{right:10px}</style></head>
<body data-twttr-rendered="true" class="book"><div style="display: none;" id="MathJax_Message"></div> 

  <div id="container">
    <div id="header" class="clearfix"><div id="title">
  <div id="logo"><a href="http://ruby.railstutorial.org/"><img alt="Logo" src="RoR%20Tutorial%20-%20node-Dateien/logo.png"></a></div>
  <h1 id="name">
    <a href="http://ruby.railstutorial.org/">Ruby on Rails Tutorial</a>
  </h1>
  <br>
  <h2 id="authors">
    <a href="http://ruby.railstutorial.org/#author">by Michael Hartl</a>
  </h2>
</div>
</div>
    <div id="menu"><div class="links">
  <div class="box">
    <span>
      <a href="http://ruby.railstutorial.org/">Home</a>
    </span>
    <span class="division">
      |
    </span>
    <span>
      <a href="http://ruby.railstutorial.org/ruby-on-rails-tutorial-book">Book</a>
    </span>
    <span class="division">
      |
    </span>
    <span>
      <a href="http://ruby.railstutorial.org/help">Help</a>
    </span>
    <span class="division">
      |
    </span>
    <span>
      <a href="http://ruby.railstutorial.org/contact">Contact</a>
    </span>
    <span class="division">
      |
    </span>
    <span>
      <a href="http://news.railstutorial.org/">News</a>
    </span>
    <span class="img">
      <a href="http://feeds.feedburner.com/railstutorial"><img alt="Feed-icon16x16" class="feed" src="RoR%20Tutorial%20-%20node-Dateien/feed-icon16x16.png"></a>
    </span>
    <!-- %span.division -->
    <!-- 
    -->
    <!-- %span -->
    <!-- = link_to "By Email", email_url -->
    <!-- %span.img -->
    <!-- = link_to email_icon, email_url -->
    <span class="division">
      |
    </span>
    <span>
      <a href="http://twitter.com/railstutorial">Follow</a>
    </span>
    <span>
      <a href="http://twitter.com/railstutorial"><img alt="Twitter-small" src="RoR%20Tutorial%20-%20node-Dateien/twitter-small.png"></a>
    </span>
  </div>
</div>
</div>     
      <div id="content">         
        <div id="sidebar">
  <div class="content">
      <!-- = link_to image_tag("icons/feed-icon32x32.png"), feed_url -->
    <!-- = link_to image_tag("icons/twitter.png"), twitter_url -->
    <!-- = link_to image_tag("icons/mail-icons/mail-icon-32x32.png"), email_url -->
    <div id="navtool">
      <table class="layout">
        <tbody><tr>
          <td colspan="2"><a href="#book_menu"><img alt="Up A Level" src="RoR%20Tutorial%20-%20node-Dateien/sb_button_up.png"></a></td>
        </tr>
        <tr>
          <td><a href="http://ruby.railstutorial.org/chapters/a-demo-app#top"><img alt="Previous Chapter" src="RoR%20Tutorial%20-%20node-Dateien/sb_button_prev.png"></a></td>
          <td><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#top"><img alt="Next Chapter" src="RoR%20Tutorial%20-%20node-Dateien/sb_button_next.png"></a></td>
        </tr>
      </tbody></table>
      <a href="http://www.amazon.com/gp/product/0321832051/ref=as_li_qf_sp_asin_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=0321832051&amp;linkCode=as2&amp;tag=therubonraitu-20"><img alt="Ruby on Rails Tutorial: Learn Web Development with Rails" src="RoR%20Tutorial%20-%20node-Dateien/sb_button_buy_print_edition_red.png"></a><img src="RoR%20Tutorial%20-%20node-Dateien/ir.gif" alt="" style="border:none !important; margin:0px !important;" border="0" height="1" width="1">
      <br>
      <a href="http://ruby.railstutorial.org/#buy"><img alt="Buy Screencasts" src="RoR%20Tutorial%20-%20node-Dateien/sb_button_pdf_screencasts_red.png"></a>
      <center><a href="http://youtu.be/bOdn9EdUquo" target="_blank"><img alt="Screencasts_thumbnail_play" src="RoR%20Tutorial%20-%20node-Dateien/screencasts_thumbnail_play.png"></a></center>
      <div class="connect">
        <table class="center">
          <tbody><tr>
            <td><a href="http://feeds.feedburner.com/railstutorial"><img alt="Feed-icon24x24" src="RoR%20Tutorial%20-%20node-Dateien/feed-icon24x24.png" title="Get news updates via RSS"></a></td>
            <td><a href="http://feedburner.google.com/fb/a/mailverify?uri=railstutorial&amp;loc=en_US"><img alt="Mail-icon-24x24" src="RoR%20Tutorial%20-%20node-Dateien/mail-icon-24x24.png" title="Get news updates by email"></a></td>
            <td><a href="http://www.facebook.com/pages/Ruby-on-Rails-Tutorial/197151265072"><img alt="Facebook-icon24x24" src="RoR%20Tutorial%20-%20node-Dateien/facebook-icon24x24.png" title="Become a fan on Facebook"></a></td>
            <td><a href="http://twitter.com/railstutorial"><img alt="Twitter-icon24x24" src="RoR%20Tutorial%20-%20node-Dateien/twitter-icon24x24.png" title="Follow on Twitter"></a></td>
          </tr>
        </tbody></table>
      </div>
      <div class="section">
        <div class="switcher">
          <span class="title round">Rails 3.2</span>
          •
          <span class="switcher_link"><a href="http://ruby.railstutorial.org/book?version=4.0">Rails 4.0</a></span>
        </div>
        <div class="share"><fb:like class="fb_edge_widget_with_comment fb_iframe_widget" fb-xfbml-state="rendered" href="http://railstutorial.org/" show_faces="false" layout="button_count" colorscheme="light"><span style="height: 20px; width: 71px;"><iframe src="RoR%20Tutorial%20-%20node-Dateien/like.htm" class="fb_ltr" title="Like this content on Facebook." style="border: medium none; overflow: hidden; height: 20px; width: 71px;" name="f7551cde2ffcaa" id="f380cb166e328f" scrolling="no"></iframe></span></fb:like></div>
      </div>
      <div class="section">
        <a href="http://ruby.railstutorial.org/book?version=4.0#top">
          Read the Rails 4.0 version
        </a>
      </div>
    </div>
    <!-- .section -->
    <!-- Sidebar areas labeled with class "section", like this one, will be styled suitably for text. -->
    <!-- .section -->
    <!-- %a{ :href => '/affiliates' } -->
    <!-- Rails Tutorial Affiliate Program&mdash;50% commissions -->
  </div>
</div>
<!-- %h3 Get Involved -->
<!-- 
-->
<!-- .links -->
<!-- %p.subscribe -->
<!-- %span= link_to(image_tag('feed-icon32x32.png'), feed_url) -->
<!-- = link_to("Subscribe", feed_url) -->
<!-- %p.follow -->
<!-- = link_to(image_tag('twitter.png'), twitter_url) -->
<!-- = link_to("Follow", twitter_url) -->
<!-- 
-->

                      
        <div id="main" class="withsidebar">
          


<div id="book_menu">
  <a href="#main_content">skip to content</a>
  |
  <a href="http://ruby.railstutorial.org/book/ruby-on-rails-tutorial">view as single page</a>
</div>


<div id="book_wrap">
  <div id="book_top">
  </div>
    <div id="book">


<h1 class="title">Ruby on Rails Tutorial </h1>


<h1 class="subtitle">  Learn Web Development with Rails</h1>


<h2 class="author">Michael Hartl</h2>




<h2 class="contents">Contents</h2>


<div id="table_of_contents"><ol><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/beginning#top"><span class="number">Chapter 1</span> From zero to deploy</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-introduction"><span class="number">1.1</span> Introduction</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-comments_for_various_readers"><span class="number">1.1.1</span> Comments for various readers</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_1_2"><span class="number">1.1.2</span> “Scaling” Rails</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-conventions"><span class="number">1.1.3</span> Conventions in this book</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-up_and_running"><span class="number">1.2</span> Up and running</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-development_tools"><span class="number">1.2.1</span> Development environments</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_2_1_1">IDEs</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_2_1_2">Text editors and command lines</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_2_1_3">Browsers</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_2_1_4">A note about tools</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-rubygems"><span class="number">1.2.2</span> Ruby, RubyGems, Rails, and Git</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-rails_installer_windows">Rails Installer (Windows)</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-install_git">Install Git</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-install_ruby">Install Ruby</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-install_rubygems">Install RubyGems</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-install_rails">Install Rails</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-the_first_application"><span class="number">1.2.3</span> The first application</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-bundler"><span class="number">1.2.4</span> Bundler</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-rails_server"><span class="number">1.2.5</span> <tt>rails server</tt></a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-mvc"><span class="number">1.2.6</span> Model-view-controller (MVC)</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-version_control"><span class="number">1.3</span> Version control with Git</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_setup"><span class="number">1.3.1</span> Installation and setup</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_3_1_1">First-time system setup</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_3_1_2">First-time repository setup</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-adding_and_committing"><span class="number">1.3.2</span> Adding and committing</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_3_3"><span class="number">1.3.3</span> What good does Git do you?</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-github"><span class="number">1.3.4</span> GitHub</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_commands"><span class="number">1.3.5</span> Branch, edit, commit, merge</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_branch">Branch</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_edit">Edit</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_commit">Commit</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_merge">Merge</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-git_push">Push</a></li></ol></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-deploying"><span class="number">1.4</span> Deploying</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-heroku_setup"><span class="number">1.4.1</span> Heroku setup</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-heroku_step_one"><span class="number">1.4.2</span> Heroku deployment, step one</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-1_4_3"><span class="number">1.4.3</span> Heroku deployment, step two</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-heroku_commands"><span class="number">1.4.4</span> Heroku commands</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/beginning#sec-beginning_conclusion"><span class="number">1.5</span> Conclusion</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#top"><span class="number">Chapter 2</span> A demo app</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-planning_the_application"><span class="number">2.1</span> Planning the application</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-modeling_demo_users"><span class="number">2.1.1</span> Modeling demo users</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-modeling_demo_microposts"><span class="number">2.1.2</span> Modeling demo microposts</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-demo_users_resource"><span class="number">2.2</span> The Users resource</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-a_user_tour"><span class="number">2.2.1</span> A user tour</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-mvc_in_action"><span class="number">2.2.2</span> MVC in action</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-weaknesses_of_this_users_resource"><span class="number">2.2.3</span> Weaknesses of this Users resource</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-microposts_resource"><span class="number">2.3</span> The Microposts resource</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-a_micropost_microtour"><span class="number">2.3.1</span> A micropost microtour</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-putting_the_micro_in_microposts"><span class="number">2.3.2</span> Putting the <em>micro</em> in microposts</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-demo_user_has_many_microposts"><span class="number">2.3.3</span> A user <tt>has_many</tt> microposts</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-inheritance_hierarchies"><span class="number">2.3.4</span> Inheritance hierarchies</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-deploying_the_demo_app"><span class="number">2.3.5</span> Deploying the demo app</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-2_4"><span class="number">2.4</span> Conclusion</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/static-pages#top"><span class="number">Chapter 3</span> Mostly static pages</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages"><span class="number">3.1</span> Static pages</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-truly_static_pages"><span class="number">3.1.1</span> Truly static pages</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails"><span class="number">3.1.2</span> Static pages with Rails</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests"><span class="number">3.2</span> Our first tests</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-TDD"><span class="number">3.2.1</span> Test-driven development</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-adding_a_page"><span class="number">3.2.2</span> Adding a page</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-red">Red</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-green">Green</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-refactor">Refactor</a></li></ol></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-slightly_dynamic_pages"><span class="number">3.3</span> Slightly dynamic pages</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-testing_a_title_change"><span class="number">3.3.1</span> Testing a title change</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-passing_title_tests"><span class="number">3.3.2</span> Passing title tests</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-embedded_ruby"><span class="number">3.3.3</span> Embedded Ruby</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-layouts"><span class="number">3.3.4</span> Eliminating duplication with layouts</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_conclusion"><span class="number">3.4</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_exercises"><span class="number">3.5</span> Exercises</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-advanced_setup"><span class="number">3.6</span> Advanced setup</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-eliminating_bundle_exec"><span class="number">3.6.1</span> Eliminating <tt>bundle exec</tt></a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-rvm_bundler_integration">RVM Bundler integration</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-binstubs">binstubs</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard"><span class="number">3.6.2</span> Automated tests with Guard</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork"><span class="number">3.6.3</span> Speeding up tests with Spork</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork_and_guard">Guard with Spork</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/static-pages#sec-tests_inside_sublime_text"><span class="number">3.6.4</span> Tests inside Sublime Text</a></li></ol></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#top"><span class="number">Chapter 4</span> Rails-flavored Ruby</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-motivation"><span class="number">4.1</span> Motivation</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-strings_and_methods"><span class="number">4.2</span> Strings and methods</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-comments"><span class="number">4.2.1</span> Comments</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-strings"><span class="number">4.2.2</span> Strings</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-printing">Printing</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-single_quoted_strings">Single-quoted strings</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-objects_and_message_passing"><span class="number">4.2.3</span> Objects and message passing</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-method_definitions"><span class="number">4.2.4</span> Method definitions</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-back_to_the_title_helper"><span class="number">4.2.5</span> Back to the title helper</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-other_data_structures"><span class="number">4.3</span> Other data structures</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-arrays_and_ranges"><span class="number">4.3.1</span> Arrays and ranges</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-blocks"><span class="number">4.3.2</span> Blocks</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-hashes_and_symbols"><span class="number">4.3.3</span> Hashes and symbols</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-css_revisited"><span class="number">4.3.4</span> CSS revisited</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-ruby_classes"><span class="number">4.4</span> Ruby classes</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-constructors"><span class="number">4.4.1</span> Constructors</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-a_class_of_our_own"><span class="number">4.4.2</span> Class inheritance</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-modifying_built_in_classes"><span class="number">4.4.3</span> Modifying built-in classes</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-a_controller_class"><span class="number">4.4.4</span> A controller class</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-a_user_class"><span class="number">4.4.5</span> A user class</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-conclusion"><span class="number">4.5</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-exercises"><span class="number">4.6</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#top"><span class="number">Chapter 5</span> Filling in the layout</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-structure"><span class="number">5.1</span> Adding some structure</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-adding_to_the_layout"><span class="number">5.1.1</span> Site navigation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-custom_css"><span class="number">5.1.2</span> Bootstrap and custom CSS</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-partials"><span class="number">5.1.3</span> Partials</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-sass_and_the_asset_pipeline"><span class="number">5.2</span> Sass and the asset pipeline</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-the_asset_pipeline"><span class="number">5.2.1</span> The asset pipeline</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_1_1">Asset directories</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_1_2">Manifest files</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_1_3">Preprocessor engines</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_1_4">Efficiency in production</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-sass"><span class="number">5.2.2</span> Syntactically awesome stylesheets</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_2_1">Nesting</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-5_2_2_2">Variables</a></li></ol></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-layout_links"><span class="number">5.3</span> Layout links</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-route_tests"><span class="number">5.3.1</span> Route tests</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-rails_routes"><span class="number">5.3.2</span> Rails routes</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-named_routes"><span class="number">5.3.3</span> Named routes</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-pretty_rspec"><span class="number">5.3.4</span> Pretty RSpec</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-user_signup"><span class="number">5.4</span> User signup: A first step</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-users_controller"><span class="number">5.4.1</span> Users controller</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-signup_url"><span class="number">5.4.2</span> Signup URI</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-layout_conclusion"><span class="number">5.5</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-layout_exercises"><span class="number">5.6</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/modeling-users#top"><span class="number">Chapter 6</span> Modeling users</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-user_model"><span class="number">6.1</span> User model</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-database_migrations"><span class="number">6.1.1</span> Database migrations</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-the_model_file"><span class="number">6.1.2</span> The model file</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-model_annotation">Model annotation</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-accessible_attributes">Accessible attributes</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-creating_user_objects"><span class="number">6.1.3</span> Creating user objects</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-finding_user_objects"><span class="number">6.1.4</span> Finding user objects</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-updating_user_objects"><span class="number">6.1.5</span> Updating user objects</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-user_validations"><span class="number">6.2</span> User validations</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-initial_user_tests"><span class="number">6.2.1</span> Initial user tests</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-presence_validation"><span class="number">6.2.2</span> Validating presence</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-length_validation"><span class="number">6.2.3</span> Length validation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-format_validation"><span class="number">6.2.4</span> Format validation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-uniqueness_validation"><span class="number">6.2.5</span> Uniqueness validation</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-the_caveat">The uniqueness caveat</a></li></ol></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-adding_a_secure_password"><span class="number">6.3</span> Adding a secure password</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-an_encrypted_password"><span class="number">6.3.1</span> An encrypted password</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-password_and_confirmation"><span class="number">6.3.2</span> Password and confirmation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-user_authentication"><span class="number">6.3.3</span> User authentication</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-has_secure_password"><span class="number">6.3.4</span> User has secure password</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-creating_a_user"><span class="number">6.3.5</span> Creating a user</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-6_4"><span class="number">6.4</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/modeling-users#sec-6_5"><span class="number">6.5</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/sign-up#top"><span class="number">Chapter 7</span> Sign up</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-showing_users"><span class="number">7.1</span> Showing users</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-rails_environments"><span class="number">7.1.1</span> Debug and Rails environments</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-a_users_resource"><span class="number">7.1.2</span> A Users resource</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-tests_with_factories"><span class="number">7.1.3</span> Testing the user show page (with factories)</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-a_gravatar_image"><span class="number">7.1.4</span> A Gravatar image and a sidebar</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-signup_form"><span class="number">7.2</span> Signup form</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-tests_for_user_signup"><span class="number">7.2.1</span> Tests for user signup</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-using_form_for"><span class="number">7.2.2</span> Using <tt>form_for</tt></a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-the_form_html"><span class="number">7.2.3</span> The form HTML</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-signup_failure"><span class="number">7.3</span> Signup failure</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-a_working_form"><span class="number">7.3.1</span> A working form</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-signup_error_messages"><span class="number">7.3.2</span> Signup error messages</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-signup_success"><span class="number">7.4</span> Signup success</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-the_finished_signup_form"><span class="number">7.4.1</span> The finished signup form</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-the_flash"><span class="number">7.4.2</span> The flash</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-the_first_signup"><span class="number">7.4.3</span> The first signup</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-deploying_to_production_with_ssl"><span class="number">7.4.4</span> Deploying to production with SSL</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-7_5"><span class="number">7.5</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-up#sec-signup_exercises"><span class="number">7.6</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#top"><span class="number">Chapter 8</span> Sign in, sign out</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signin_failure"><span class="number">8.1</span> Sessions and signin failure</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-sessions_controller"><span class="number">8.1.1</span> Sessions controller</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signin_tests"><span class="number">8.1.2</span> Signin tests</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signin_form"><span class="number">8.1.3</span> Signin form</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-reviewing_form_submission"><span class="number">8.1.4</span> Reviewing form submission</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-rendering_with_a_flash_message"><span class="number">8.1.5</span> Rendering with a flash message</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signin_success"><span class="number">8.2</span> Signin success</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-remember_me"><span class="number">8.2.1</span> Remember me</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-a_working_sign_in_method"><span class="number">8.2.2</span> A working <tt>sign_in</tt> method</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-current_user"><span class="number">8.2.3</span> Current user</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-changing_the_layout_links"><span class="number">8.2.4</span> Changing the layout links</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signin_upon_signup"><span class="number">8.2.5</span> Signin upon signup</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-signing_out"><span class="number">8.2.6</span> Signing out</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-cucumber"><span class="number">8.3</span> Introduction to Cucumber (optional)</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-installation_and_setup"><span class="number">8.3.1</span> Installation and setup</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-features_and_steps"><span class="number">8.3.2</span> Features and steps</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-rspec_custom_matchers"><span class="number">8.3.3</span> Counterpoint: RSpec custom matchers</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-8_4"><span class="number">8.4</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-sign_in_out_exercises"><span class="number">8.5</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#top"><span class="number">Chapter 9</span> Updating, showing, and deleting users</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-updating_users"><span class="number">9.1</span> Updating users</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-edit_form"><span class="number">9.1.1</span> Edit form</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-unsuccessful_edits"><span class="number">9.1.2</span> Unsuccessful edits</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-successful_edits"><span class="number">9.1.3</span> Successful edits</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-authorization"><span class="number">9.2</span> Authorization</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-requiring_signed_in_users"><span class="number">9.2.1</span> Requiring signed-in users</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-requiring_the_right_user"><span class="number">9.2.2</span> Requiring the right user</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-friendly_forwarding"><span class="number">9.2.3</span> Friendly forwarding</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-showing_all_users"><span class="number">9.3</span> Showing all users</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-user_index"><span class="number">9.3.1</span> User index</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-sample_users"><span class="number">9.3.2</span> Sample users</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-pagination"><span class="number">9.3.3</span> Pagination</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-partial_refactoring"><span class="number">9.3.4</span> Partial refactoring</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-destroying_users"><span class="number">9.4</span> Deleting users</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-administrative_users"><span class="number">9.4.1</span> Administrative users</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-revisiting_attr_accessible">Revisiting <tt>attr_accessible</tt></a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-the_destroy_action"><span class="number">9.4.2</span> The <tt>destroy</tt> action</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-updating_and_deleting_users_conclusion"><span class="number">9.5</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#sec-updating_deleting_exercises"><span class="number">9.6</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/user-microposts#top"><span class="number">Chapter 10</span> User microposts</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-a_micropost_model"><span class="number">10.1</span> A Micropost model</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-the_basic_model"><span class="number">10.1.1</span> The basic model</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-accessible_attribute"><span class="number">10.1.2</span> Accessible attributes and the first validation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-user_micropost_associations"><span class="number">10.1.3</span> User/Micropost associations</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-ordering_and_dependency"><span class="number">10.1.4</span> Micropost refinements</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-default_scope">Default scope</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-dependent_destroy">Dependent: destroy</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-micropost_validations"><span class="number">10.1.5</span> Content validations</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-showing_microposts"><span class="number">10.2</span> Showing microposts</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-augmenting_the_user_show_page"><span class="number">10.2.1</span> Augmenting the user show page</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-sample_microposts"><span class="number">10.2.2</span> Sample microposts</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-manipulating_microposts"><span class="number">10.3</span> Manipulating microposts</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-access_control"><span class="number">10.3.1</span> Access control</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-creating_microposts"><span class="number">10.3.2</span> Creating microposts</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-a_proto_feed"><span class="number">10.3.3</span> A proto-feed</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-destroying_microposts"><span class="number">10.3.4</span> Destroying microposts</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-10_4"><span class="number">10.4</span> Conclusion</a></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/user-microposts#sec-micropost_exercises"><span class="number">10.5</span> Exercises</a></li></ol></li><li class="chapter"><a href="http://ruby.railstutorial.org/chapters/following-users#top"><span class="number">Chapter 11</span> Following users</a></li><li><ol><li class="section"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-the_relationship_model"><span class="number">11.1</span> The Relationship model</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-a_problem_with_the_data_model"><span class="number">11.1.1</span> A problem with the data model (and a solution)</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-relationship_user_associations"><span class="number">11.1.2</span> User/relationship associations</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-relationship_validations"><span class="number">11.1.3</span> Validations</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-following"><span class="number">11.1.4</span> Followed users</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-followers"><span class="number">11.1.5</span> Followers</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-a_web_interface_for_following_and_followers"><span class="number">11.2</span> A web interface for following users</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-sample_following_data"><span class="number">11.2.1</span> Sample following data</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-stats_and_a_follow_form"><span class="number">11.2.2</span> Stats and a follow form</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-following_and_followers_pages"><span class="number">11.2.3</span> Following and followers pages</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-a_working_follow_button_the_standard_way"><span class="number">11.2.4</span> A working follow button the standard way</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-a_working_follow_button_with_ajax"><span class="number">11.2.5</span> A working follow button with Ajax</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-the_status_feed"><span class="number">11.3</span> The status feed</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-motivation_and_strategy"><span class="number">11.3.1</span> Motivation and strategy</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-a_first_feed_implementation"><span class="number">11.3.2</span> A first feed implementation</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-scopes_subselects_and_a_lambda"><span class="number">11.3.3</span> Subselects</a></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-the_new_status_feed"><span class="number">11.3.4</span> The new status feed</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-following_conclusion"><span class="number">11.4</span> Conclusion</a></li><li><ol><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-extensions_to_the_sample_application"><span class="number">11.4.1</span> Extensions to the sample application</a></li><li><ol><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-replies">Replies</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-messaging">Messaging</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-follower_notifications">Follower notifications</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-password_reminders">Password reminders</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-signup_confirmation">Signup confirmation</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-rss_feed">RSS feed</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-rest_api">REST API</a></li><li class="subsubsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-search">Search</a></li></ol></li><li class="subsection"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-guide_to_further_resources"><span class="number">11.4.2</span> Guide to further resources</a></li></ol></li><li class="section"><a href="http://ruby.railstutorial.org/chapters/following-users#sec-following_exercises"><span class="number">11.5</span> Exercises</a></li></ol></li></ol></div>


<div id="main_content"></div>


<p> <span class="preamble">
 <span id="foreword">
<strong> Foreword</strong> <br>
 </span>
 </span></p>

<p>My former company (CD Baby) was one of the first to loudly switch to 
Ruby on Rails, and then even more loudly switch back to PHP (Google me 
to read about the drama). This book by Michael Hartl came so highly 
recommended that I had to try it, and the <em>Ruby on Rails Tutorial</em> is what I used to switch back to Rails again.</p>

<p>Though I’ve worked my way through many Rails books, this is the one 
that finally made me “get” it. Everything is done very much “the Rails 
way”—a way that felt very unnatural to me before, but now after doing 
this book finally feels natural. This is also the only Rails book that 
does test-driven development the entire time, an approach highly 
recommended by the experts but which has never been so clearly 
demonstrated before. Finally, by including Git, GitHub, and Heroku in 
the demo examples, the author really gives you a feel for what it’s like
 to do a real-world project. The tutorial’s code examples are not in 
isolation.</p>

<p>The linear narrative is such a great format. Personally, I powered through the <em>Rails Tutorial</em>
 in three long days, doing all the examples and challenges at the end of
 each chapter. Do it from start to finish, without jumping around, and 
you’ll get the ultimate benefit.</p>

<p>Enjoy!</p>

<p><a href="http://sivers.org/">Derek Sivers</a> (<a href="http://sivers.org/">sivers.org</a>) <br>
<em>Founder, CD Baby</em> <br></p>

<p> <span class="preamble">
<strong> Acknowledgments</strong> <br>
 </span></p>

<p>The <em>Ruby on Rails Tutorial</em> owes a lot to my previous Rails book, <em>RailsSpace</em>, and hence to my coauthor <a href="http://aure.com/">Aurelius Prochazka</a>.
 I’d like to thank Aure both for the work he did on that book and for 
his support of this one. I’d also like to thank Debra Williams Cauley, 
my editor on both <em>RailsSpace</em> and the <em>Ruby on Rails Tutorial</em>; as long as she keeps taking me to baseball games, I’ll keep writing books for her.</p>

<p>I’d like to acknowledge a long list of Rubyists who have taught and 
inspired me over the years: David Heinemeier Hansson, Yehuda Katz, Carl 
Lerche, Jeremy Kemper, Xavier Noria, Ryan Bates, Geoffrey Grosenbach, 
Peter Cooper, Matt Aimonetti, Gregg Pollack, Wayne&nbsp;E. Seguin, Amy 
Hoy, Dave Chelimsky, Pat Maddox, Tom Preston-Werner, Chris Wanstrath, 
Chad Fowler, Josh Susser, Obie Fernandez, Ian McFarland, Steven Bristol,
 Pratik Naik, Sarah Mei, Sarah Allen, Wolfram Arnold, Alex Chaffee, 
Giles Bowkett, Evan Dorn, Long Nguyen, James Lindenbaum, Adam Wiggins, 
Tikhon Bernstam, Ron Evans, Wyatt Greene, Miles Forrest, the good people
 at Pivotal Labs, the Heroku gang, the thoughtbot guys, and the GitHub 
crew. Finally, many, many readers—far too many to list—have contributed a
 huge number of bug reports and suggestions during the writing of this 
book, and I gratefully acknowledge their help in making it as good as it
 can&nbsp;be. <br></p>

<p> <span class="preamble">
 <span id="author">
<strong> About the author</strong> <br>
 </span>
 </span></p>

<p><a href="http://michaelhartl.com/">Michael Hartl</a> is the author of the <a href="http://ruby.railstutorial.org/"><em>Ruby on Rails Tutorial</em></a>, the leading introduction to web development with <a href="http://rubyonrails.org/">Ruby on Rails</a>. His prior experience includes writing and developing <em>RailsSpace</em>,
 an extremely obsolete Rails tutorial book, and developing Insoshi, a 
once-popular and now-obsolete social networking platform in Ruby on 
Rails. In 2011, Michael received a <a href="http://rubyheroes.com/heroes">Ruby Hero Award</a> for his contributions to the Ruby community. He is a graduate of <a href="http://college.harvard.edu/">Harvard College</a>, has a <a href="http://resolver.caltech.edu/CaltechETD:etd-05222003-161626">Ph.D. in Physics</a> from <a href="http://www.caltech.edu/">Caltech</a>, and is an alumnus of the <a href="http://ycombinator.com/">Y&nbsp;Combinator</a> entrepreneur program. <br></p>

<p> <span id="license" class="preamble">
<strong> Copyright and license</strong> <br>
 </span></p>

<p><em>Ruby on Rails Tutorial: Learn Web Development with Rails</em>. Copyright © 2012 by Michael Hartl. All source code in the <em>Ruby on Rails Tutorial</em> is available jointly under the <a href="http://www.opensource.org/licenses/mit-license.php">MIT License</a> and the <a href="http://people.freebsd.org/%7Ephk/">Beerware License</a>.</p>

<div class="code"><div class="highlight"><pre>The MIT License

Copyright (c) 2012 Michael Hartl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre></div>
</div>


<div class="code"><div class="highlight"><pre>/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * Michael Hartl wrote this code. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.
 * ----------------------------------------------------------------------------
 */
</pre></div>
</div>


<div id="top"></div>


<h1 class="chapter"><a id="sec-3" href="http://ruby.railstutorial.org/chapters/static-pages#top" class="heading"><span class="number">Chapter 3</span> Mostly static pages</a></h1>


<p>In this chapter, we will begin developing the sample application that
 will serve as our example throughout the rest of this tutorial. 
Although the sample app will eventually have users, microposts, and a 
full login and authentication framework, we will begin with a seemingly 
limited topic: the creation of static pages. Despite its apparent 
simplicity, making static pages is a highly instructive exercise, rich 
in implications—a perfect start for our nascent application.</p>

<p>Although Rails is designed for making database-backed dynamic 
websites, it also excels at making the kind of static pages we might 
make with raw HTML files. In fact, using Rails even for static pages 
yields a distinct advantage: we can easily add just a <em>small</em> amount of dynamic content. In this chapter we’ll learn how. Along the way, we’ll get our first taste of <em>automated testing</em>, which will help us be more confident that our code is correct. Moreover, having a good test suite will allow us to <em>refactor</em> our code with confidence, changing its form without changing its function.</p>

<p>There’s a lot of code in this chapter, especially in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a> and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-slightly_dynamic_pages">Section&nbsp;3.3</a>, and if you’re new to Ruby you shouldn’t worry about understanding the details right now. As noted in <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-comments_for_various_readers">Section&nbsp;1.1.1</a>,
 one strategy is to copy-and-paste the tests and use them to verify the 
application code, without worrying at this point how they work. In 
addition, <a class="ref" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#top">Chapter&nbsp;4</a>
 covers Ruby in more depth, so there is plenty of opportunity for these 
ideas to sink in. Finally, RSpec tests will recur throughout the 
tutorial, so if you get stuck now I recommend forging ahead; you’ll be 
amazed how, after just a few more chapters, initially inscrutable code 
will suddenly look simple.</p>

<p>As in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a>, before getting started we need to create a new Rails project, this time called <code>sample_app</code>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">cd</span> ~/rails_projects
<span class="gp">$</span> rails new sample_app --skip-test-unit
<span class="gp">$</span> <span class="nb">cd </span>sample_app
</pre></div>
</div>


<p>Here the <tt class="verb">--skip-test-unit</tt> option to the <code>rails</code> command tells Rails not to generate a <code>test</code> directory associated with the default <code>Test::Unit</code> framework. This is not because we won’t be writing tests; on the contrary, starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a> we will be using an alternate testing framework called <em>RSpec</em> to write a thorough test suite.</p>

<p>As in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#sec-planning_the_application">Section&nbsp;2.1</a>, our next step is to use a text editor to update the <code>Gemfile</code>
 with the gems needed by our application. On the other hand, for the 
sample application we’ll also need two gems we didn’t need before: the 
gem for RSpec and the gem for the RSpec library specific to Rails. The 
code to include them is shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-gemfile_rspec">Listing&nbsp;3.1</a>. (<em>Note</em>: If you would like to install <em>all</em> the gems needed for the sample application, you should use the code in <a class="ref" href="http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users#code-final_gemfile">Listing&nbsp;9.49</a> at this time.)</p>

<div class="label" id="code-gemfile_rspec"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.1.</span> <span class="description">A <code>Gemfile</code> for the sample app.</span> </div>
<div class="code"><div class="highlight"><pre><span class="n">source</span> <span class="s1">'https://rubygems.org'</span>

<span class="n">gem</span> <span class="s1">'rails'</span><span class="p">,</span> <span class="s1">'3.2.13'</span>

<span class="n">group</span> <span class="ss">:development</span><span class="p">,</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'sqlite3'</span><span class="p">,</span> <span class="s1">'1.3.5'</span>
  <span class="n">gem</span> <span class="s1">'rspec-rails'</span><span class="p">,</span> <span class="s1">'2.11.0'</span>
<span class="k">end</span>

<span class="c1"># Gems used only for assets and not required</span>
<span class="c1"># in production environments by default.</span>
<span class="n">group</span> <span class="ss">:assets</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'sass-rails'</span><span class="p">,</span>   <span class="s1">'3.2.5'</span>
  <span class="n">gem</span> <span class="s1">'coffee-rails'</span><span class="p">,</span> <span class="s1">'3.2.2'</span>
  <span class="n">gem</span> <span class="s1">'uglifier'</span><span class="p">,</span> <span class="s1">'1.2.3'</span>
<span class="k">end</span>

<span class="n">gem</span> <span class="s1">'jquery-rails'</span><span class="p">,</span> <span class="s1">'2.0.2'</span>

<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
<span class="k">end</span>

<span class="n">group</span> <span class="ss">:production</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'pg'</span><span class="p">,</span> <span class="s1">'0.12.2'</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>This includes <tt>rspec-rails</tt> in development mode so that we 
have access to RSpec-specific generators, and it includes it in test 
mode in order to run the tests. We don’t have to install RSpec itself 
because it is a dependency of <tt>rspec-rails</tt> and will thus be installed automatically. We also include the <a href="https://github.com/jnicklas/capybara">Capybara gem</a>, which allows us to simulate a user’s interaction with the sample application using a natural English-like syntax.<sup class="footnote" id="fnref-3_1"><a href="#fn-3_1">1</a></sup> As in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a>, we also must include the PostgreSQL gem in production for deployment to Heroku:</p>

<div class="code"><div class="highlight"><pre><span class="n">group</span> <span class="ss">:production</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'pg'</span><span class="p">,</span> <span class="s1">'0.12.2'</span>
<span class="k">end</span>
</pre></div>
</div>


<p>Heroku recommends against using different databases in development 
and production, but for the sample application it won’t make any 
difference, and SQLite is <em>much</em> easier than PostgreSQL to 
install and configure. Installing and configuring PostgreSQL on your 
local machine is left as an exercise (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_exercises">Section&nbsp;3.5</a>).</p>

<p>To install and include the new gems, we run <code>bundle update</code> and <code>bundle install</code>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle update
<span class="gp">$</span> bundle install --without production
</pre></div>
</div>


<p>As in <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-heroku_setup">Section&nbsp;1.4.1</a> and <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a>, we suppress the installation of production gems using the option <tt class="verb">--without</tt> <tt class="verb">production</tt>.
 This is a “remembered option”, which means that we don’t have to 
include it in future invocations of Bundler. Instead, we can write 
simply <code>bundle install</code> and production gems will be ignored automatically.<sup class="footnote" id="fnref-3_2"><a href="#fn-3_2">2</a></sup></p>

<p>Next, we need to configure Rails to use RSpec in place of <code>Test::Unit</code>. This can be accomplished with <code>rails generate rspec:install</code>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rails generate rspec:install
</pre></div>
</div>


<p>If your system complains about the lack of a JavaScript runtime, visit the <a href="https://github.com/sstephenson/execjs">execjs page at GitHub</a> for a list of possibilities. I particularly recommend installing <a href="http://nodejs.org/">Node.js</a>.</p>

<p>With that, all we have left is to initialize the Git repository:<sup class="footnote" id="fnref-3_3"><a href="#fn-3_3">3</a></sup></p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git init
<span class="gp">$</span> git add .
<span class="gp">$</span> git commit -m <span class="s2">"Initial commit"</span>
</pre></div>
</div>


<p>As with the first application, I suggest updating the <code>README</code> file (located in the root directory of the application) to be more helpful and descriptive, as shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-sample_app_readme">Listing&nbsp;3.2</a>.</p>

<div class="label" id="code-sample_app_readme"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.2.</span> <span class="description">An improved <code>README</code> file for the sample app.</span> </div>
<div class="code"><div class="highlight"><pre># Ruby on Rails Tutorial: sample application

This is the sample application for
[*Ruby on Rails Tutorial: Learn Rails by Example*](http://railstutorial.org/)
by [Michael Hartl](http://michaelhartl.com/).
</pre></div>
</div></div>


<p>Then change it to use the Markdown extension&nbsp;<code>.md</code> and commit the changes:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git mv README.rdoc README.md
<span class="gp">$</span> git commit -a -m <span class="s2">"Improve the README"</span>
</pre></div>
</div>




<div class="label" id="fig-create_repository"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/create_repository_new.png" alt="create_repository_new"></span></div><div class="caption"><span class="header">Figure 3.1: </span><span class="description">Creating the sample app repository at GitHub.&nbsp;<a href="http://railstutorial.org/images/figures/create_repository_new-full.png">(full size)</a></span></div></div>


<p>Since we’ll be using this sample app throughout the rest of the book, it’s a good idea to make a repository at GitHub (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-create_repository">Figure&nbsp;3.1</a>) and push it up:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git remote add origin https://github.com/&lt;username&gt;/sample_app.git
<span class="gp">$</span> git push -u origin master
</pre></div>
</div>


<p>As a result of my performing this step, you can find the <a href="https://github.com/railstutorial/sample_app_2nd_ed">Rails Tutorial sample application code on GitHub</a> (under a slightly different name).<sup class="footnote" id="fnref-3_4"><a href="#fn-3_4">4</a></sup></p>

<p>Of course, we can optionally deploy the app to Heroku even at this early stage:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> heroku create --stack cedar
<span class="gp">$</span> git push heroku master
</pre></div>
</div>


<p>As you proceed through the rest of the book, I recommend pushing and deploying the application regularly:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git push
<span class="gp">$</span> git push heroku
</pre></div>
</div>


<p>This provides remote backups and lets you catch any production errors
 as soon as possible. If you run into problems at Heroku, make sure to 
take a look at the production logs to try to diagnose the problem:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> heroku logs
</pre></div>
</div>


<p>With all the preparation finished, we’re finally ready to get started developing the sample application.</p>

<div class="label" id="sec-static_pages"></div>


<h2><a id="sec-3_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages" class="heading"><span class="number">3.1</span> Static pages</a></h2>


<p>Rails has two main ways of making static web pages. First, Rails can handle <em>truly</em> static pages consisting of raw HTML files. Second, Rails allows us to define <em>views</em> containing raw HTML, which Rails can <em>render</em> so that the web server can send it to the browser.</p>

<p>In order to get our bearings, it’s helpful to recall the Rails directory structure from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-the_first_application">Section&nbsp;1.2.3</a> (<a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#fig-directory_structure_rails_3_2">Figure&nbsp;1.2</a>). In this section, we’ll be working mainly in the <code>app/controllers</code> and <code>app/views</code> directories. (In <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a>, we’ll even add a new directory of our own.)</p>

<p>This is the first section where it’s useful to be able to open the 
entire Rails directory in your text editor or IDE. Unfortunately, how to
 do this is system-dependent, but in many cases you can open the current
 application directory, represented in Unix by a dot&nbsp;<code>.</code>, using the command-line command for your editor of choice:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">cd</span> ~/rails_projects/sample_app
<span class="gp">$</span> &lt;editor name&gt; .
</pre></div>
</div>


<p>For example, to open the sample app in Sublime Text, you type</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> subl .
</pre></div>
</div>


<p>For Vim, you type <code>vim .</code>, <code>gvim .</code>, or <code>mvim .</code> depending on which flavor of Vim you use.</p>

<div class="label" id="sec-truly_static_pages"></div>


<h3><a id="sec-3_1_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-truly_static_pages" class="heading"><span class="number">3.1.1</span> Truly static pages</a></h3>


<p>We start with truly static pages. Recall from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-rails_server">Section&nbsp;1.2.5</a> that every Rails application comes with a minimal working application thanks to the <code>rails</code> script, with a default welcome page at the address <a href="http://localhost:3000/">http://localhost:3000/</a> (<a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#fig-riding_rails_31">Figure&nbsp;1.3</a>).</p>

<div class="label" id="fig-public_index_rails_3"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/public_index_rails_3.png" alt="public_index_rails_3"></span></div><div class="caption"><span class="header">Figure 3.2: </span><span class="description">The <code>public/index.html</code> file.&nbsp;<a href="http://railstutorial.org/images/figures/public_index_rails_3-full.png">(full size)</a></span></div></div>


<p>To learn where this page comes from, take a look at the file <code>public/index.html</code> (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-public_index_rails_3">Figure&nbsp;3.2</a>).
 Because the file contains its own stylesheet information, it’s a little
 messy, but it gets the job done: by default, Rails serves any files in 
the <code>public</code> directory directly to the browser.<sup class="footnote" id="fnref-3_5"><a href="#fn-3_5">5</a></sup> In the case of the special <code>index.html</code> file, you don’t even have to indicate the file in the URI, as <code>index.html</code>
 is the default. You can include it if you want, though; the addresses 
http://localhost:3000/ http://localhost:3000/index.html are equivalent.</p>

<p>As you might expect, if we want we can make our own static HTML files and put them in the same <code>public</code> directory as <code>index.html</code>. For example, let’s create a file with a friendly greeting (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-hello_world">Listing&nbsp;3.3</a>):<sup class="footnote" id="fnref-3_6"><a href="#fn-3_6">6</a></sup></p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> subl public/hello.html
</pre></div>
</div>


<div class="label" id="code-hello_world"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.3.</span> <span class="description">A typical HTML file, with a friendly greeting. <br> <code>public/hello.html</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Greeting<span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;p&gt;</span>Hello, world!<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>


<p>We see in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-hello_world">Listing&nbsp;3.3</a> the typical structure of an HTML document: a <em>document type</em>, or doctype, declaration at the top to tell browsers which version of HTML we’re using (in this case, <a href="http://en.wikipedia.org/wiki/HTML5">HTML5</a>);<sup class="footnote" id="fnref-3_7"><a href="#fn-3_7">7</a></sup> a <code>head</code> section, in this case with “Greeting” inside a <code>title</code> tag; and a <code>body</code> section, in this case with “Hello, world!” inside a <code>p</code>
 (paragraph) tag. (The indentation is optional—HTML is not sensitive to 
whitespace, and ignores both tabs and spaces—but it makes the document’s
 structure easier to see.)</p>

<p>Now run a local server using</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rails server
</pre></div>
</div>


<p>and navigate to <a href="http://localhost:3000/hello.html">http://localhost:3000/hello.html</a>. As promised, Rails renders the page straightaway (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-hello_world">Figure&nbsp;3.3</a>). Note that the title displayed at the top of the browser window in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-hello_world">Figure&nbsp;3.3</a> is just the contents inside the <code>title</code> tag, namely, “Greeting”.</p>

<div class="label" id="fig-hello_world"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/hello_world.png" alt="hello_world"></span></div><div class="caption"><span class="header">Figure 3.3: </span><span class="description">A new static HTML file.&nbsp;<a href="http://railstutorial.org/images/figures/hello_world-full.png">(full size)</a></span></div></div>


<p>Since this file is just for demonstration purposes, we don’t really 
want it to be part of our sample application, so it’s probably best to 
remove it once the thrill of creating it has worn off:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rm public/hello.html
</pre></div>
</div>


<p>We’ll leave the <code>index.html</code> file alone for now, but of 
course eventually we should remove it: we don’t want the root of our 
application to be the Rails default page shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#fig-riding_rails_31">Figure&nbsp;1.3</a>. We’ll see in <a class="ref" href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-layout_links">Section&nbsp;5.3</a> how to change the address <a href="http://localhost:3000/">http://localhost:3000/</a> to point to something other than <code>public/index.html</code>.</p>

<div class="label" id="sec-static_pages_with_rails"></div>


<h3><a id="sec-3_1_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails" class="heading"><span class="number">3.1.2</span> Static pages with Rails</a></h3>


<p>The ability to return static HTML files is nice, but it’s not 
particularly useful for making dynamic web applications. In this 
section, we’ll take a first step toward making dynamic pages by creating
 a set of Rails <em>actions</em>, which are a more powerful way to define URIs than static files.<sup class="footnote" id="fnref-3_8"><a href="#fn-3_8">8</a></sup> Rails actions come bundled together inside <em>controllers</em> (the C in MVC from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-mvc">Section&nbsp;1.2.6</a>), which contain sets of actions related by a common purpose. We got a glimpse of controllers in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a>, and will come to a deeper understanding once we explore the <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">REST architecture</a> more fully (starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/modeling-users#top">Chapter&nbsp;6</a>); in essence, a controller is a container for a group of (possibly dynamic) web pages.</p>

<p>To get started, recall from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-git_commands">Section&nbsp;1.3.5</a>
 that, when using Git, it’s a good practice to do our work on a separate
 topic branch rather than the master branch. If you’re using Git for 
version control, you should run the following command:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git checkout -b static-pages
</pre></div>
</div>


<p>Rails comes with a script for making controllers called <code>generate</code>; all it needs to work its magic is the controller’s name. In order to use <code>generate</code> with RSpec, you need to run the RSpec generator command if you didn’t run it when following the introduction to this chapter:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rails generate rspec:install
</pre></div>
</div>


<p>Since we’ll be making a controller to handle static pages, we’ll call
 it the StaticPages controller. We’ll also plan to make actions for a 
Home page, a Help page, and an About page. The <code>generate</code> script takes an optional list of actions, so we’ll include two of the initial actions directly on the command line (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a>).</p>

<div class="label" id="code-generating_pages"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.4.</span> <span class="description">Generating a StaticPages controller.</span> </div>
<div class="code"><div class="highlight"><pre>$ rails generate controller StaticPages home help --no-test-framework
      create  app/controllers/static_pages_controller.rb
       route  get "static_pages/help"
       route  get "static_pages/home"
      invoke  erb
      create    app/views/static_pages
      create    app/views/static_pages/home.html.erb
      create    app/views/static_pages/help.html.erb
      invoke  helper
      create    app/helpers/static_pages_helper.rb
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/static_pages.js.coffee
      invoke    scss
      create      app/assets/stylesheets/static_pages.css.scss
</pre></div>
</div></div>


<p>Here we’ve used the option <tt class="verb">--no-test-framework</tt> 
to suppress the generation of the default RSpec tests, which we won’t be
 using. Instead, we’ll create the tests by hand starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a>. We’ve also intentionally left off the <code>about</code> action from the command line arguments in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a> so that we can see how to add it using test-driven development, or TDD (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a>).</p>

<p>In <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a>, note that we have passed the controller name as so-called <a href="https://en.wikipedia.org/wiki/CamelCase">CamelCase</a>, which leads to the creation of a controller file written in <a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>, so that a controller called StaticPages yields a file called <code>static_pages_controller.rb</code>. This is merely a convention, and in fact using snake case at the command line also works: the command</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rails generate controller static_pages ...
</pre></div>
</div>


<p>also generates a controller called <code>static_pages_controller.rb</code>. Because Ruby uses CamelCase for class names (<a class="ref" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-ruby_classes">Section&nbsp;4.4</a>),
 my preference is to refer to controllers using their CamelCase names, 
but this is a matter of taste. (Since Ruby filenames typically use snake
 case, the Rails generator converts CamelCase to snake case using the <a href="http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html#method-i-underscore"><tt>underscore</tt></a> method.)</p>

<p>By the way, if you ever make a mistake when generating code, it’s useful to know how to reverse the process. See <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sidebar-undoing_things">Box&nbsp;3.1</a> for some techniques on how to undo things in Rails.</p>

<div class="label" id="sidebar-undoing_things"></div>


<div class="sidebar"><span class="title"><span class="header">Box 3.1.</span><span class="description">Undoing things</span></span>
<p>Even when you’re very careful, things can sometimes go wrong when 
developing Rails applications. Happily, Rails has some facilities to 
help you recover.</p>

<p>One common scenario is wanting to undo code generation—for example, 
if you change your mind on the name of a controller. When generating a 
controller, Rails creates many more files than the controller file 
itself (as seen in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a>).
 Undoing the generation means removing not only the principal generated 
file, but all the ancillary files as well. (In fact, we also want to 
undo any automatic edits made to the <tt>routes.rb</tt> file.) In Rails, this can be accomplished with <tt>rails destroy</tt>. In particular, these two commands cancel each other out:</p>

<pre class="verbatim">  $ rails generate controller FooBars baz quux
  $ rails destroy  controller FooBars baz quux</pre>


<p>Similarly, in <a class="ref" href="http://ruby.railstutorial.org/chapters/modeling-users#top">Chapter&nbsp;6</a> we’ll generate a <em>model</em> as follows:</p>

<pre class="verbatim">  $ rails generate model Foo bar:string baz:integer</pre>


<p>This can be undone using</p>

<pre class="verbatim">  $ rails destroy model Foo</pre>


<p>(In this case, it turns out we can omit the other command-line arguments. When you get to <a class="ref" href="http://ruby.railstutorial.org/chapters/modeling-users#top">Chapter&nbsp;6</a>, see if you can figure out why.)</p>

<p>Another technique related to models involves undoing <em>migrations</em>, which we saw briefly in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a> and will see much more of starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/modeling-users#top">Chapter&nbsp;6</a>. Migrations change the state of the database using</p>

<pre class="verbatim">  $ rake db:migrate</pre>


<p>We can undo a single migration step using</p>

<pre class="verbatim">  $ rake db:rollback</pre>


<p>To go all the way back to the beginning, we can use</p>

<pre class="verbatim">  $ rake db:migrate VERSION=0</pre>


<p>As you might guess, substituting any other number for <tt>0</tt> migrates to that version number, where the version numbers come from listing the migrations sequentially.</p>

<p>With these techniques in hand, we are well-equipped to recover from the inevitable development <a href="http://en.wikipedia.org/wiki/SNAFU">snafus</a>.</p>
</div>


<p>The StaticPages controller generation in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a> automatically updates the <em>routes</em> file, called <code>config/routes.rb</code>, which Rails uses to find the correspondence between URIs and web pages. This is our first encounter with the <code>config</code> directory, so it’s helpful to take a quick look at it (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-config_directory_rails_3">Figure&nbsp;3.4</a>). The <code>config</code> directory is where Rails collects files needed for the application configuration—hence the name.</p>

<div class="label" id="fig-config_directory_rails_3"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/config_directory_rails_3.png" alt="config_directory_rails_3"></span></div><div class="caption"><span class="header">Figure 3.4: </span><span class="description">Contents of the sample app’s <code>config</code> directory.&nbsp;<a href="http://railstutorial.org/images/figures/config_directory_rails_3-full.png">(full size)</a></span></div></div>


<p>Since we generated <code>home</code> and <code>help</code> actions, the routes file already has a rule for each one, as seen in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_routes">Listing&nbsp;3.5</a>.</p>

<div class="label" id="code-pages_routes"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.5.</span> <span class="description">The routes for the <code>home</code> and <code>help</code> actions in the StaticPages controller. <br> <code>config/routes.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="ss">SampleApp::Application</span><span class="o">.</span><span class="n">routes</span><span class="o">.</span><span class="n">draw</span> <span class="k">do</span>
  <span class="n">get</span> <span class="s2">"static_pages/home"</span>
  <span class="n">get</span> <span class="s2">"static_pages/help"</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Here the rule</p>

<div class="code"><div class="highlight"><pre><span class="n">get</span> <span class="s2">"static_pages/home"</span>
</pre></div>
</div>


<p>maps requests for the URI /static_pages/home to the <code>home</code> action in the StaticPages controller. Moreover, by using <code>get</code> we arrange for the route to respond to a <tt>GET</tt> request, which is one of the fundamental
<em>HTTP verbs</em> supported by the hypertext transfer protocol (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sidebar-get_etc">Box&nbsp;3.2</a>). In our case, this means that when we generate a <code>home</code>
 action inside the StaticPages controller we automatically get a page at
 the address /static_pages/home. To see the results, navigate to <a href="http://localhost:3000/static_pages/home">/static_pages/home</a> (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-raw_home_view">Figure&nbsp;3.5</a>).</p>

<div class="label" id="fig-raw_home_view"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/raw_home_view_31.png" alt="raw_home_view_31"></span></div><div class="caption"><span class="header">Figure 3.5: </span><span class="description">The raw home view (<a href="http://localhost:3000/static_pages/home">/static_pages/home</a>).&nbsp;<a href="http://railstutorial.org/images/figures/raw_home_view_31-full.png">(full size)</a></span></div></div>




<div class="label" id="sidebar-get_etc"></div>


<div class="sidebar"><span class="title"><span class="header">Box 3.2.</span><span class="description"><tt>GET</tt>, et cet.</span></span>
<p>The hypertext transfer protocol (<a href="http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods">HTTP</a>) defines four basic operations, corresponding to the four verbs <em>get</em>, <em>post</em>, <em>put</em>, and <em>delete</em>. These refer to operations between a <em>client</em> computer (typically running a web browser such as Firefox or Safari) and a <em>server</em>
 (typically running a web server such as Apache or Nginx). (It’s 
important to understand that, when developing Rails applications on a 
local computer, the client and server are the same physical machine, but
 in general they are different.) An emphasis on HTTP verbs is typical of
 web frameworks (including Rails) influenced by the <em>REST architecture</em>, which we saw briefly in <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a> and will start learning about more in <a class="ref" href="http://ruby.railstutorial.org/chapters/sign-up#top">Chapter&nbsp;7</a>.</p>

<p><tt>GET</tt> is the most common HTTP operation, used for <em>reading</em>
 data on the web; it just means “get a page”, and every time you visit a
 site like google.com or wikipedia.org your browser is submitting a <tt>GET</tt> request. <tt>POST</tt> is the next most common operation; it is the request sent by your browser when you submit a form. In Rails applications, <tt>POST</tt> requests are typically used for <em>creating</em> things (although HTTP also allows <tt>POST</tt> to perform updates); for example, the <tt>POST</tt> request sent when you submit a registration form creates a new user on the remote site. The other two verbs, <tt>PUT</tt> and <tt>DELETE</tt>, are designed for <em>updating</em> and <em>destroying</em> things on the remote server. These requests are less common than <tt>GET</tt> and <tt>POST</tt>
 since browsers are incapable of sending them natively, but some web 
frameworks (including Ruby on Rails) have clever ways of making it <em>seem</em> like browsers are issuing such requests.</p>
</div>


<p>To understand where this page comes from, let’s start by taking a 
look at the StaticPages controller in a text editor; you should see 
something like <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-static_pages_controller">Listing&nbsp;3.6</a>. You may note that, unlike the demo Users and Microposts controllers from <a class="ref" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">Chapter&nbsp;2</a>,
 the StaticPages controller does not use the standard REST actions. This
 is normal for a collection of static pages—the REST architecture isn’t 
the best solution to every problem.</p>

<div class="label" id="code-static_pages_controller"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.6.</span> <span class="description">The StaticPages controller made by <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a>. <br> <code>app/controllers/static_pages_controller.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="k">class</span> <span class="nc">StaticPagesController</span> <span class="o">&lt;</span> <span class="no">ApplicationController</span>

  <span class="k">def</span> <span class="nf">home</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">help</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>We see from the <code>class</code> keyword in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-static_pages_controller">Listing&nbsp;3.6</a> that <code>static_pages_controller.rb</code> defines a <em>class</em>, in this case called <code>StaticPagesController</code>. Classes are simply a convenient way to organize <em>functions</em> (also called <em>methods</em>) like the <code>home</code> and <code>help</code> actions, which are defined using the <code>def</code> keyword. The angle bracket&nbsp;<code>&lt;</code> indicates that <code>StaticPagesController</code> <em>inherits</em> from the Rails class <code>ApplicationController</code>;
 as we’ll see momentarily, this means that our pages come equipped with a
 large amount of Rails-specific functionality. (We’ll learn more about 
both classes and inheritance in <a class="ref" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-ruby_classes">Section&nbsp;4.4</a>.)</p>

<p>In the case of the StaticPages controller, both its methods are initially empty:</p>

<div class="code"><div class="highlight"><pre><span class="k">def</span> <span class="nf">home</span>
<span class="k">end</span>

<span class="k">def</span> <span class="nf">help</span>
<span class="k">end</span>
</pre></div>
</div>


<p>In plain Ruby, these methods would simply do nothing. In Rails, the situation is different; <code>StaticPagesController</code> is a Ruby class, but because it inherits from <code>ApplicationController</code>
 the behavior of its methods is specific to Rails: when visiting the URI
 /static_pages/home, Rails looks in the StaticPages controller and 
executes the code in the <code>home</code> action, and then renders the <em>view</em> (the V in MVC from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-mvc">Section&nbsp;1.2.6</a>) corresponding to the action. In the present case, the <code>home</code>
 action is empty, so all visiting /static_pages/home does is render the 
view. So, what does a view look like, and how do we find it?</p>

<p>If you take another look at the output in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-generating_pages">Listing&nbsp;3.4</a>, you might be able to guess the correspondence between actions and views: an action like <code>home</code> has a corresponding view called <code>home.html.erb</code>. We’ll learn in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-slightly_dynamic_pages">Section&nbsp;3.3</a> what the <code>.erb</code> part means; from the <code>.html</code> part you probably won’t be surprised that it basically looks like HTML (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-raw_home_view">Listing&nbsp;3.7</a>).</p>

<div class="label" id="code-raw_home_view"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.7.</span> <span class="description">The generated view for the Home page. <br> <code>app/views/static_pages/home.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nt">&lt;h1&gt;</span>StaticPages#home<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>Find me in app/views/static_pages/home.html.erb<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>The view for the <code>help</code> action is analogous (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-raw_help_view">Listing&nbsp;3.8</a>).</p>

<div class="label" id="code-raw_help_view"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.8.</span> <span class="description">The generated view for the Help page. <br> <code>app/views/static_pages/help.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nt">&lt;h1&gt;</span>StaticPages#help<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>Find me in app/views/static_pages/help.html.erb<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>Both of these views are just placeholders: they have a top-level heading (inside the <code>h1</code> tag) and a paragraph (<code>p</code> tag) with the full path to the relevant file. We’ll add some (very slightly) dynamic content starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-slightly_dynamic_pages">Section&nbsp;3.3</a>,
 but as they stand these views underscore an important point: Rails 
views can simply contain static HTML. As far as the browser is 
concerned, the raw HTML files from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-truly_static_pages">Section&nbsp;3.1.1</a> and the controller/action method of delivering pages are indistinguishable: all the browser ever sees is HTML.</p>

<p>In the remainder of this chapter, we’ll add some custom content to 
the Home and Help pages, and then add in the About page we left off in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails">Section&nbsp;3.1.2</a>. Then we’ll add a very small amount of dynamic content by changing the title on a per-page basis.</p>

<p>Before moving on, if you’re using Git it’s a good idea to add the files for the StaticPages controller to the repository:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git add .
<span class="gp">$</span> git commit -m <span class="s2">"Add a StaticPages controller"</span>
</pre></div>
</div>




<div class="label" id="sec-first_tests"></div>


<h2><a id="sec-3_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests" class="heading"><span class="number">3.2</span> Our first tests</a></h2>


<p>The <em>Rails Tutorial</em> takes an intuitive approach to testing 
that emphasizes the behavior of the application rather than its precise 
implementation, a variant of test-driven development (TDD) known as 
behavior-driven development (BDD). Our main tools will be <em>integration tests</em> (starting in this section) and <em>unit tests</em> (starting in <a class="ref" href="http://ruby.railstutorial.org/chapters/modeling-users#top">Chapter&nbsp;6</a>). Integration tests, known as <em>request specs</em>
 in the context of RSpec, allow us to simulate the actions of a user 
interacting with our application using a web browser. Together with the 
natural-language syntax provided by Capybara, integration tests provide a
 powerful method to test our application’s functionality without having 
to manually check each page with a browser. (Another popular choice for 
BDD, called Cucumber, is introduced in <a class="ref" href="http://ruby.railstutorial.org/chapters/sign-in-sign-out#sec-cucumber">Section&nbsp;8.3</a>.)</p>

<p>The defining quality of TDD is writing tests <em>first</em>, before the application code. Initially, this might take some getting used to, but the benefits are significant. By writing a <em>failing</em>
 test first and then implementing the application code to get it to 
pass, we increase our confidence that the test is actually covering the 
functionality we think it is. Moreover, the fail-implement-pass 
development cycle induces a <a href="http://en.wikipedia.org/wiki/Flow_%28psychology%29">flow state</a>, leading to enjoyable coding and high productivity. Finally, the tests act as a <em>client</em> for the application code, often leading to more elegant software designs.</p>

<p>It’s important to understand that TDD is not always the right tool 
for the job: there’s no reason to dogmatically insist that tests always 
should be written first, that they should cover every single feature, or
 that there should necessarily be any tests at all. For example, when 
you aren’t at all sure how to solve a given programming problem, it’s 
often useful to skip the tests and write only application code, just to 
get a sense of what the solution will look like. (In the language of <a href="http://en.wikipedia.org/wiki/Extreme_Programming">Extreme Programming (XP)</a>, this exploratory step is called a <em>spike</em>.) Once you see the general shape of the solution, you can then use TDD to implement a more polished version.</p>

<p>In this section, we’ll be running the tests using the <code>rspec</code>
 command supplied by the RSpec gem. This practice is straightforward but
 not ideal, and if you are a more advanced user I suggest setting up 
your system as described in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-advanced_setup">Section&nbsp;3.6</a>.</p>

<div class="label" id="sec-TDD"></div>


<h3><a id="sec-3_2_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-TDD" class="heading"><span class="number">3.2.1</span> Test-driven development</a></h3>


<p>In test-driven development, we first write a <em>failing</em> test, 
represented in many testing tools by the color red. We then implement 
code to get the test to pass, represented by the color green. Finally, 
if necessary, we refactor the code, changing its form (by eliminating 
duplication, for example) without changing its function. This cycle is 
known as “Red, Green, Refactor”.</p>

<p>We’ll begin by adding some content to the Home page using test-driven development, including a top-level heading (<code>&lt;h1&gt;</code>) with the content <code>Sample App</code>. The first step is to generate an integration test (request spec) for our static pages:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rails generate integration_test static_pages
<span class="go">      invoke  rspec</span>
<span class="go">      create    spec/requests/static_pages_spec.rb</span>
</pre></div>
</div>


<p>This creates the <code>static_pages_spec.rb</code> in the <code>spec/requests</code> directory. As with most generated code, the result is not pretty, so let’s open <code>static_pages_spec.rb</code> with a text editor and replace it with the contents of <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_page_content_spec">Listing&nbsp;3.9</a>.</p>

<div class="label" id="code-home_page_content_spec"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.9.</span> <span class="description">Code to test the contents of the Home page. <br> <code>spec/requests/static_pages_spec.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'spec_helper'</span>

<span class="n">describe</span> <span class="s2">"Static pages"</span> <span class="k">do</span>

  <span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'Sample App'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Sample App'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>The code in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_page_content_spec">Listing&nbsp;3.9</a>
 is pure Ruby, but even if you’ve studied Ruby before it probably won’t 
look very familiar. This is because RSpec uses the general malleability 
of Ruby to define a <em>domain-specific language</em> (DSL) built just for testing. The important point is that <em>you do not need to understand RSpec’s syntax to be able to use RSpec</em>.
 It may seem like magic at first, but RSpec and Capybara are designed to
 read more or less like English, and if you follow the examples from the
 <code>generate</code> script and the other examples in this tutorial you’ll pick it up fairly quickly.</p>

<p><a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_page_content_spec">Listing&nbsp;3.9</a> contains a <code>describe</code> block with one <em>example</em>, i.e., a block starting with <code>it "…" do</code>:</p>

<div class="code"><div class="highlight"><pre><span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

  <span class="n">it</span> <span class="s2">"should have the content 'Sample App'"</span> <span class="k">do</span>
    <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
    <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Sample App'</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div>


<p>The first line indicates that we are describing the Home page. This 
is just a string, and it can be anything you want; RSpec doesn’t care, 
but you and other human readers probably do. Then the spec says that 
when you visit the Home page at <code>/static_pages/home</code>, the 
content should contain the words “Sample App”. As with the first line, 
what goes inside the quote marks is irrelevant to RSpec, and is intended
 to be descriptive to human readers. Then the line</p>

<div class="code"><div class="highlight"><pre><span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
</pre></div>
</div>


<p>uses the Capybara function <code>visit</code> to simulate visiting the URI <code>/static_pages/home</code> in a browser, while the line</p>

<div class="code"><div class="highlight"><pre><span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Sample App'</span><span class="p">)</span>
</pre></div>
</div>


<p>uses the <code>page</code> variable (also provided by Capybara) to test that the resulting page has the right content.</p>

<p>To run the test, we have several options, including some convenient but rather advanced tools discussed in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-advanced_setup">Section&nbsp;3.6</a>. For now, we’ll use the <code>rspec</code> command at the command line (executed with <code>bundle exec</code> to ensure that RSpec runs in the environment specified by our <code>Gemfile</code>):<sup class="footnote" id="fnref-3_9"><a href="#fn-3_9">9</a></sup></p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>This yields a failing test. The appearance of the result depends on 
your system; on my system, the red failing test appears as in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-red_failing_spec">Figure&nbsp;3.6</a>.<sup class="footnote" id="fnref-3_10"><a href="#fn-3_10">10</a></sup> (The screenshot, which predates, the current Git branching strategy, shows work on the <tt>master</tt> branch instead the <tt>static-pages</tt> branch, but this is not cause for concern.)</p>

<div class="label" id="fig-red_failing_spec"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/red_failing_spec.png" alt="red_failing_spec"></span></div><div class="caption"><span class="header">Figure 3.6: </span><span class="description">A red (failing) test.&nbsp;<a href="http://railstutorial.org/images/figures/red_failing_spec-full.png">(full size)</a></span></div></div>


<p>To get the test to pass, we’ll replace the default Home page test with the HTML in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_page_passing">Listing&nbsp;3.10</a>.</p>

<div class="label" id="code-home_page_passing"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.10.</span> <span class="description">Code to get a passing test for the Home page. <br> <code>app/views/static_pages/home.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nt">&lt;h1&gt;</span>Sample App<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  This is the home page for the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
  sample application.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>This arranges for a top-level heading (<code>&lt;h1&gt;</code>) with the content <code>Sample App</code>, which should get the test to pass. We also include an <em>anchor</em> tag&nbsp;<code>a</code>, which creates links to the given URI (called an “href”, or “hypertext reference”, in the context of an anchor tag):</p>

<div class="code"><div class="highlight"><pre><span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
</pre></div>
</div>


<p>Now re-run the test to see the effect:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>On my system, the passing test appears as in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-green_passing_spec">Figure&nbsp;3.7</a>.</p>

<div class="label" id="fig-green_passing_spec"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/green_passing_spec.png" alt="green_passing_spec"></span></div><div class="caption"><span class="header">Figure 3.7: </span><span class="description">A green (passing) test.&nbsp;<a href="http://railstutorial.org/images/figures/green_passing_spec-full.png">(full size)</a></span></div></div>


<p>Based on the example for the Home page, you can probably guess the 
analogous test and application code for the Help page. We start by 
testing for the relevant content, in this case the string <code>’Help’</code> (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_content_spec">Listing&nbsp;3.11</a>).</p>

<div class="label" id="code-help_content_spec"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.11.</span> <span class="description">Adding code to test the contents of the Help page. <br> <code>spec/requests/static_pages_spec.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'spec_helper'</span>

<span class="n">describe</span> <span class="s2">"Static pages"</span> <span class="k">do</span>

  <span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'Sample App'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Sample App'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"Help page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Help'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Then run the tests:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>One test should fail. (Since systems will vary, and since keeping 
track of how many tests there are at each stage of the tutorial is a 
maintenance nightmare, I’ll omit the RSpec output from now on.)</p>

<p>The application code (which for now is raw HTML) is similar to the code in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_page_passing">Listing&nbsp;3.10</a>, as seen in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_page_passing">Listing&nbsp;3.12</a>.</p>

<div class="label" id="code-help_page_passing"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.12.</span> <span class="description">Code to get a passing test for the Help page. <br> <code>app/views/static_pages/help.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nt">&lt;h1&gt;</span>Help<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  Get help on the Ruby on Rails Tutorial at the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/help"</span><span class="nt">&gt;</span>Rails Tutorial help page<span class="nt">&lt;/a&gt;</span>.
  To get help on this sample app, see the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/book"</span><span class="nt">&gt;</span>Rails Tutorial book<span class="nt">&lt;/a&gt;</span>.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>The tests should now pass:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<div class="label" id="sec-adding_a_page"></div>


<h3><a id="sec-3_2_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-adding_a_page" class="heading"><span class="number">3.2.2</span> Adding a page</a></h3>


<p>Having seen test-driven development in action in a simple example, 
we’ll use the same technique to accomplish the slightly more complicated
 task of adding a new page, namely, the About page that we intentionally
 left off in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails">Section&nbsp;3.1.2</a>.
 By writing a test and running RSpec at each step, we’ll see how TDD can
 guide us through the development of our application code.</p>

<div class="label" id="sec-red"></div>


<h4><a id="sec-3_2_2_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-red" class="heading">Red</a></h4>


<p>We’ll get to the Red part of the Red-Green cycle by writing a failing test for the About page. Following the models from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_content_spec">Listing&nbsp;3.11</a>, you can probably guess the right test (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_page_content_spec">Listing&nbsp;3.13</a>).</p>

<div class="label" id="code-about_page_content_spec"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.13.</span> <span class="description">Adding code to test the contents of the About page. <br> <code>spec/requests/static_pages_spec.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'spec_helper'</span>

<span class="n">describe</span> <span class="s2">"Static pages"</span> <span class="k">do</span>

  <span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'Sample App'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Sample App'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"Help page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'Help'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"About page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the content 'About Us'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/about'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_content</span><span class="p">(</span><span class="s1">'About Us'</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>




<div class="label" id="sec-green"></div>


<h4><a id="sec-3_2_2_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-green" class="heading">Green</a></h4>


<p>Recall from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails">Section&nbsp;3.1.2</a>
 that we can generate a static page in Rails by creating an action and 
corresponding view with the page’s name. In our case, the About page 
will first need an action called <code>about</code> in the StaticPages 
controller. Having written a failing test, we can now be confident that,
 in getting it to pass, we will actually have created a working About 
page.</p>

<p>If you run the RSpec example using</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>the output includes the following complaint:</p>

<div class="code"><div class="highlight"><pre>No route matches [GET] "/static_pages/about"
</pre></div>
</div>


<p>This is a hint that we need to add <code>/static_pages/about</code> to the routes file, which we can accomplish by following the pattern in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_routes">Listing&nbsp;3.5</a>, as shown in  <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_route">Listing&nbsp;3.14</a>.</p>

<div class="label" id="code-about_route"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.14.</span> <span class="description">Adding the <code>about</code> route. <br> <code>config/routes.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="ss">SampleApp::Application</span><span class="o">.</span><span class="n">routes</span><span class="o">.</span><span class="n">draw</span> <span class="k">do</span>
  <span class="n">get</span> <span class="s2">"static_pages/home"</span>
  <span class="n">get</span> <span class="s2">"static_pages/help"</span>
  <span class="n">get</span> <span class="s2">"static_pages/about"</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Now running</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>complains that</p>

<div class="code"><div class="highlight"><pre>The action 'about' could not be found for StaticPagesController
</pre></div>
</div>


<p>To solve this problem, we follow the model provided by <code>home</code> and <code>help</code> from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-static_pages_controller">Listing&nbsp;3.6</a> by adding an <code>about</code> action in the StaticPages controller (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-adding_the_about_page">Listing&nbsp;3.15</a>).</p>

<div class="label" id="code-adding_the_about_page"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.15.</span> <span class="description">The StaticPages controller with added <code>about</code> action. <br> <code>app/controllers/static_pages_controller.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="k">class</span> <span class="nc">StaticPagesController</span> <span class="o">&lt;</span> <span class="no">ApplicationController</span>

  <span class="k">def</span> <span class="nf">home</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">help</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">about</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Now running</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>says that we are missing a “template”, i.e., a view:</p>

<div class="code"><div class="highlight"><pre>ActionView::MissingTemplate:
  Missing template static_pages/about
</pre></div>
</div>


<p>To solve this issue, we add the <code>about</code> view. This involves creating a new file called <code>about.html.erb</code> in the <code>app/views/static_pages</code> directory with the contents shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view">Listing&nbsp;3.16</a>.</p>

<div class="label" id="code-about_view"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.16.</span> <span class="description">Code for the About page. <br> <code>app/views/static_pages/about.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nt">&lt;h1&gt;</span>About Us<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  The <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
  is a project to make a book and screencasts to teach web development
  with <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://rubyonrails.org/"</span><span class="nt">&gt;</span>Ruby on Rails<span class="nt">&lt;/a&gt;</span>. This
  is the sample application for the tutorial.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>Running RSpec should now get us back to Green:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>Of course, it’s never a bad idea to take a look at the page in a browser to make sure our tests aren’t completely crazy (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#fig-about_us">Figure&nbsp;3.8</a>).</p>

<div class="label" id="fig-about_us"></div>


<div class="figure"><div class="center"><span class="graphic"><img src="RoR%20Tutorial%20-%20node-Dateien/about_us_2nd_edition.png" alt="about_us_2nd_edition"></span></div><div class="caption"><span class="header">Figure 3.8: </span><span class="description">The new About page (<a href="http://localhost:3000/static_pages/about">/static_pages/about</a>).&nbsp;<a href="http://railstutorial.org/images/figures/about_us_2nd_edition-full.png">(full size)</a></span></div></div>




<div class="label" id="sec-refactor"></div>


<h4><a id="sec-3_2_2_3" href="http://ruby.railstutorial.org/chapters/static-pages#sec-refactor" class="heading">Refactor</a></h4>


<p>Now that we’ve gotten to Green, we are free to refactor our code with
 confidence. Oftentimes code will start to “smell”, meaning that it gets
 ugly, bloated, or filled with repetition. The computer doesn’t care, of
 course, but humans do, so it is important to keep the code base clean 
by refactoring frequently. Having a good test suite is an invaluable 
tool in this regard, as it dramatically lowers the probability of 
introducing bugs while refactoring.</p>

<p>Our sample app is a little too small to refactor right now, but code 
smell seeps in at every crack, so we won’t have to wait long: we’ll 
already get busy refactoring in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-layouts">Section&nbsp;3.3.4</a>.</p>

<div class="label" id="sec-slightly_dynamic_pages"></div>


<h2><a id="sec-3_3" href="http://ruby.railstutorial.org/chapters/static-pages#sec-slightly_dynamic_pages" class="heading"><span class="number">3.3</span> Slightly dynamic pages</a></h2>


<p>Now that we’ve created the actions and views for some static pages, we’ll make them <em>very slightly</em>
 dynamic by adding some content that changes on a per-page basis: we’ll 
have the title of each page change to reflect its content. Whether a 
changing title represents <em>truly</em> dynamic content is debatable, but in any case it lays the necessary foundation for unambiguously dynamic content in <a class="ref" href="http://ruby.railstutorial.org/chapters/sign-up#top">Chapter&nbsp;7</a>.</p>

<p>If you skipped the TDD material in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a>, be sure to create an About page at this point using the code from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_route">Listing&nbsp;3.14</a>, <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-adding_the_about_page">Listing&nbsp;3.15</a>, and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view">Listing&nbsp;3.16</a>.</p>

<div class="label" id="sec-testing_a_title_change"></div>


<h3><a id="sec-3_3_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-testing_a_title_change" class="heading"><span class="number">3.3.1</span> Testing a title change</a></h3>


<p>Our plan is to edit the Home, Help, and About pages to make page titles that change on each page. This will involve using the <code>&lt;title&gt;</code>
 tag in our page views. Most browsers display the contents of the title 
tag at the top of the browser window (Google Chrome is an odd 
exception), and it is also important for search-engine optimization. 
We’ll start by writing tests for the titles, then add the titles 
themselves, and then use a <em>layout</em> file to refactor the resulting pages and eliminate duplication.</p>

<p>You may have noticed that the <code>rails new</code> command already created a layout file. We’ll learn its purpose shortly, but for now you should rename it before proceeding:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> mv app/views/layouts/application.html.erb foobar   <span class="c"># temporary change</span>
</pre></div>
</div>


<p>(<code>mv</code> is a Unix command; on Windows you may need to rename the file using the file browser or the <code>rename</code>
 command.) You wouldn’t normally do this in a real application, but it’s
 easier to understand the purpose of the layout file if we start by 
disabling it.</p>

<div class="label" id="table-static_pages"></div>


<div class="table"><div class="center">
<table class="tabular"><tbody><tr><th class="align_center"><strong>Page</strong></th><th class="align_left"><strong>URI</strong></th><th class="align_left"><strong>Base title</strong></th><th class="align_left"><strong>Variable title</strong></th></tr><tr class="top_bar"><td class="align_center">Home</td><td class="align_left">/static_pages/home</td><td class="align_left"><code>"Ruby on Rails Tutorial Sample App"</code></td><td class="align_left"><code>"Home"</code></td></tr><tr><td class="align_center">Help</td><td class="align_left">/static_pages/help</td><td class="align_left"><code>"Ruby on Rails Tutorial Sample App"</code></td><td class="align_left"><code>"Help"</code></td></tr><tr><td class="align_center">About</td><td class="align_left">/static_pages/about</td><td class="align_left"><code>"Ruby on Rails Tutorial Sample App"</code></td><td class="align_left"><code>"About"</code></td></tr></tbody></table></div><div class="caption"><span class="header">Table 3.1: </span><span class="description">The (mostly) static pages for the sample app.</span></div></div>


<p>By the end of this section, all three of our static pages will have 
titles of the form “Ruby on Rails Tutorial Sample App | Home”, where the
 last part of the title will vary depending on the page (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#table-static_pages">Table&nbsp;3.1</a>). We’ll build on the tests in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_page_content_spec">Listing&nbsp;3.13</a>, adding title tests following the model in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-title_test">Listing&nbsp;3.17</a>.</p>

<div class="label" id="code-title_test"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.17.</span> <span class="description">A title test.</span> </div>
<div class="code"><div class="highlight"><pre><span class="n">it</span> <span class="s2">"should have the right title"</span> <span class="k">do</span>
  <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
  <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span>
                    <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"Ruby on Rails Tutorial Sample App | Home"</span><span class="p">)</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>This uses the <code>have_selector</code> method, which checks for an HTML element (the “selector”) with the given content. In other words, the code</p>

<div class="code"><div class="highlight"><pre><span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span>
                  <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"Ruby on Rails Tutorial Sample App | Home"</span><span class="p">)</span>
</pre></div>
</div>


<p>checks to see that the content inside the <code>title</code> tag is</p>

<div class="code"><div class="highlight"><pre><span class="s2">"Ruby on Rails Tutorial Sample App | Home"</span>
</pre></div>
</div>


<p>(We’ll learn in <a class="ref" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-hashes_and_symbols">Section&nbsp;4.3.3</a> that the <code>:text =&gt; "…"</code> syntax is a <em>hash</em> using a <em>symbol</em> as the key.) It’s worth mentioning that the content need not be an exact match; any substring works as well, so that</p>

<div class="code"><div class="highlight"><pre><span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">" | Home"</span><span class="p">)</span>
</pre></div>
</div>


<p>will also match the full title.</p>

<p>Note that in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-title_test">Listing&nbsp;3.17</a> we’ve broken the material inside <code>have_selector</code> into two lines; this tells you something important about Ruby syntax: Ruby doesn’t care about newlines.<sup class="footnote" id="fnref-3_11"><a href="#fn-3_11">11</a></sup> The <em>reason</em> I chose to break the code into pieces is that I prefer to keep lines of source code under 80 characters for legibility.<sup class="footnote" id="fnref-3_12"><a href="#fn-3_12">12</a></sup> As it stands, this code formatting is still rather ugly; <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_exercises">Section&nbsp;3.5</a> has a refactoring exercise that makes them prettier, and <a class="ref" href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-pretty_rspec">Section&nbsp;5.3.4</a> completely rewrites the StaticPages tests to take advantage of the latest features in RSpec.</p>

<p>Adding new tests for each of our three static pages, following the model of <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-title_test">Listing&nbsp;3.17</a>, gives us our new StaticPages test (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_title">Listing&nbsp;3.18</a>).</p>

<div class="label" id="code-pages_controller_spec_title"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.18.</span> <span class="description">The StaticPages controller spec with title tests. <br> <code>spec/requests/static_pages_spec.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'spec_helper'</span>

<span class="n">describe</span> <span class="s2">"Static pages"</span> <span class="k">do</span>

  <span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'Sample App'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'Sample App'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'Home'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span>
                        <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"Ruby on Rails Tutorial Sample App | Home"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"Help page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'Help'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span>
                        <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"Ruby on Rails Tutorial Sample App | Help"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"About page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'About Us'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/about'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'About Us'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'About Us'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/about'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span>
                    <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"Ruby on Rails Tutorial Sample App | About Us"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Note that we’ve changed <code>have_content</code> to the more specific <code>have_selector(’h1’, …)</code>. See if you can figure out why. (<em>Hint:</em> What would happen if the title contained, say, ‘Help’, but the content inside <code>h1</code> tag had ‘Helf’ instead?)</p>

<p>With the tests from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_title">Listing&nbsp;3.18</a> in place, you should run</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>to verify that our code is now Red (failing tests).</p>

<div class="label" id="sec-passing_title_tests"></div>


<h3><a id="sec-3_3_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-passing_title_tests" class="heading"><span class="number">3.3.2</span> Passing title tests</a></h3>


<p>Now we’ll get our title tests to pass, and at the same time add the 
full HTML structure needed to make valid web pages. Let’s start with the
 Home page (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_full_html">Listing&nbsp;3.19</a>), using the same basic HTML skeleton as in the “hello” page from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-hello_world">Listing&nbsp;3.3</a>.</p>

<div class="label" id="code-home_view_full_html"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.19.</span> <span class="description">The view for the Home page with full HTML structure. <br> <code>app/views/static_pages/home.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | Home<span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>Sample App<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      This is the home page for the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
      sample application.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>


<p><a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_full_html">Listing&nbsp;3.19</a> uses the title tested for in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_title">Listing&nbsp;3.18</a>:</p>

<div class="code"><div class="highlight"><pre><span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | Home<span class="nt">&lt;/title&gt;</span>
</pre></div>
</div>


<p>As a result, the tests for the Home page should now pass. We’re still
 Red because of the failing Help and About tests, and we can get to 
Green with the code in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_view_full_html">Listing&nbsp;3.20</a> and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view_full_html">Listing&nbsp;3.21</a>.</p>

<div class="label" id="code-help_view_full_html"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.20.</span> <span class="description">The view for the Help page with full HTML structure. <br> <code>app/views/static_pages/help.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | Help<span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>Help<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      Get help on the Ruby on Rails Tutorial at the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/help"</span><span class="nt">&gt;</span>Rails Tutorial help page<span class="nt">&lt;/a&gt;</span>.
      To get help on this sample app, see the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/book"</span><span class="nt">&gt;</span>Rails Tutorial book<span class="nt">&lt;/a&gt;</span>.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>




<div class="label" id="code-about_view_full_html"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.21.</span> <span class="description">The view for the About page with full HTML structure. <br> <code>app/views/static_pages/about.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | About Us<span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>About Us<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      The <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
      is a project to make a book and screencasts to teach web development
      with <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://rubyonrails.org/"</span><span class="nt">&gt;</span>Ruby on Rails<span class="nt">&lt;/a&gt;</span>. This
      is the sample application for the tutorial.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>




<div class="label" id="sec-embedded_ruby"></div>


<h3><a id="sec-3_3_3" href="http://ruby.railstutorial.org/chapters/static-pages#sec-embedded_ruby" class="heading"><span class="number">3.3.3</span> Embedded Ruby</a></h3>


<p>We’ve achieved a lot already in this section, generating three valid 
pages using Rails controllers and actions, but they are purely static 
HTML and hence don’t show off the power of Rails. Moreover, they suffer 
from terrible duplication:</p>

<ul>
<li>The page titles are almost (but not quite) exactly the same.</li>
<li>“Ruby on Rails Tutorial Sample App” is common to all three titles.</li>
<li>The entire HTML skeleton structure is repeated on each page.</li>
</ul>


<p>This repeated code is a violation of the important “Don’t Repeat 
Yourself” (DRY) principle; in this section and the next we’ll “DRY out 
our code” by removing the repetition.</p>

<p>Paradoxically, we’ll take the first step toward eliminating 
duplication by first adding some more: we’ll make the titles of the 
pages, which are currently quite similar, match <em>exactly</em>. This will make it much simpler to remove all the repetition at a stroke.</p>

<p>The technique involves using <em>Embedded Ruby</em> in our views. Since the Home, Help, and About page titles have a variable component, we’ll use a special Rails function called <code>provide</code> to set a different title on each page. We can see how this works by replacing the literal title “Home” in the <code>home.html.erb</code> view with the code in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_erb_title">Listing&nbsp;3.22</a>.</p>

<div class="label" id="code-home_view_erb_title"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.22.</span> <span class="description">The view for the Home page with an Embedded Ruby title. <br> <code>app/views/static_pages/home.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Home'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>Sample App<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      This is the home page for the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
      sample application.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>


<p><a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_erb_title">Listing&nbsp;3.22</a> is our first example of Embedded Ruby, also called <em>ERb</em>. (Now you know why HTML views have the file extension <code>.html.erb</code>.) ERb is the primary template system for including dynamic content in web pages.<sup class="footnote" id="fnref-3_13"><a href="#fn-3_13">13</a></sup> The code</p>

<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Home'</span><span class="p">)</span> <span class="cp">%&gt;</span>
</pre></div>
</div>


<p>indicates using <tt class="verb">&lt;% ... %&gt;</tt> that Rails should call the <code>provide</code> function and associate the string <code>’Home’</code> with the label <code>:title</code>.<sup class="footnote" id="fnref-3_14"><a href="#fn-3_14">14</a></sup> Then, in the title, we use the closely related notation <tt class="verb">&lt;%= ... %&gt;</tt> to insert the title into the template using Ruby’s <code>yield</code> function:<sup class="footnote" id="fnref-3_15"><a href="#fn-3_15">15</a></sup></p>

<div class="code"><div class="highlight"><pre><span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
</pre></div>
</div>


<p>(The distinction between the two types of embedded Ruby is that  <tt class="verb">&lt;% ... %&gt;</tt> <em>executes</em> the code inside, while <tt class="verb">&lt;%= ... %&gt;</tt> executes it and <em>inserts</em>
 the result into the template.) The resulting page is exactly the same 
as before, only now the variable part of the title is generated 
dynamically by ERb.</p>

<p>We can verify that all this works by running the tests from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-testing_a_title_change">Section&nbsp;3.3.1</a> and see that they still pass:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>


<p>Then we can make the corresponding replacements for the Help and About pages (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_view_erb_title">Listing&nbsp;3.23</a> and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view_erb_title">Listing&nbsp;3.24</a>).</p>

<div class="label" id="code-help_view_erb_title"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.23.</span> <span class="description">The view for the Help page with an Embedded Ruby title. <br> <code>app/views/static_pages/help.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Help'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>Help<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      Get help on the Ruby on Rails Tutorial at the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/help"</span><span class="nt">&gt;</span>Rails Tutorial help page<span class="nt">&lt;/a&gt;</span>.
      To get help on this sample app, see the
      <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/book"</span><span class="nt">&gt;</span>Rails Tutorial book<span class="nt">&lt;/a&gt;</span>.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>




<div class="label" id="code-about_view_erb_title"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.24.</span> <span class="description">The view for the About page with an Embedded Ruby title. <br> <code>app/views/static_pages/about.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'About Us'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;h1&gt;</span>About Us<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      The <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
      is a project to make a book and screencasts to teach web development
      with <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://rubyonrails.org/"</span><span class="nt">&gt;</span>Ruby on Rails<span class="nt">&lt;/a&gt;</span>. This
      is the sample application for the tutorial.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>




<div class="label" id="sec-layouts"></div>


<h3><a id="sec-3_3_4" href="http://ruby.railstutorial.org/chapters/static-pages#sec-layouts" class="heading"><span class="number">3.3.4</span> Eliminating duplication with layouts</a></h3>


<p>Now that we’ve replaced the variable part of the page titles with ERb, each of our pages looks something like this:</p>

<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Foo'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
      Contents
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div>


<p>In other words, <em>all</em> our pages are identical in structure, 
including the contents of the title tag, with the sole exception of the 
material inside the <code>body</code> tag.</p>

<p>In order to factor out this common structure, Rails comes with a special <em>layout</em> file called <code>application.html.erb</code>, which we renamed in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-testing_a_title_change">Section&nbsp;3.3.1</a> and which we’ll now restore:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> mv foobar app/views/layouts/application.html.erb
</pre></div>
</div>


<p>To get the layout to work, we have to replace the default title with the Embedded Ruby from the examples above:</p>

<div class="code"><div class="highlight"><pre><span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
</pre></div>
</div>


<p>The resulting layout appears in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-application_layout">Listing&nbsp;3.25</a>.</p>

<div class="label" id="code-application_layout"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.25.</span> <span class="description">The sample application site layout. <br> <code>app/views/layouts/application.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Ruby on Rails Tutorial Sample App | <span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span>
    <span class="cp">&lt;%=</span> <span class="n">stylesheet_link_tag</span>    <span class="s2">"application"</span><span class="p">,</span> <span class="ss">:media</span> <span class="o">=&gt;</span> <span class="s2">"all"</span> <span class="cp">%&gt;</span>
    <span class="cp">&lt;%=</span> <span class="n">javascript_include_tag</span> <span class="s2">"application"</span> <span class="cp">%&gt;</span>
    <span class="cp">&lt;%=</span> <span class="n">csrf_meta_tags</span> <span class="cp">%&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="cp">&lt;%=</span> <span class="k">yield</span> <span class="cp">%&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</pre></div>
</div></div>


<p>Note here the special line</p>

<div class="code"><div class="highlight"><pre><span class="cp">&lt;%=</span> <span class="k">yield</span> <span class="cp">%&gt;</span>
</pre></div>
</div>


<p>This code is responsible for inserting the contents of each page into
 the layout. It’s not important to know exactly how this works; what 
matters is that using this layout ensures that, for example, visiting 
the page /static_pages/home converts the contents of <code>home.html.erb</code> to HTML and then inserts it in place of <tt class="verb">&lt;%= yield %&gt;</tt>.</p>

<p>It’s also worth noting that the default Rails layout includes several additional lines:</p>

<div class="code"><div class="highlight"><pre><span class="cp">&lt;%=</span> <span class="n">stylesheet_link_tag</span>    <span class="s2">"application"</span><span class="p">,</span> <span class="ss">:media</span> <span class="o">=&gt;</span> <span class="s2">"all"</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;%=</span> <span class="n">javascript_include_tag</span> <span class="s2">"application"</span> <span class="cp">%&gt;</span>
<span class="cp">&lt;%=</span> <span class="n">csrf_meta_tags</span> <span class="cp">%&gt;</span>
</pre></div>
</div>


<p>This code arranges to include the application stylesheet and JavaScript, which are part of the asset pipeline (<a class="ref" href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-the_asset_pipeline">Section&nbsp;5.2.1</a>), together with the Rails method <code>csrf_meta_tags</code>, which prevents <a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery">cross-site request forgery</a> (CSRF), a type of malicious web attack.</p>

<p>Of course, the views in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_erb_title">Listing&nbsp;3.22</a>, <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_view_erb_title">Listing&nbsp;3.23</a>, and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view_erb_title">Listing&nbsp;3.24</a>
 are still filled with all the HTML structure included in the layout, so
 we have to remove it, leaving only the interior contents. The resulting
 cleaned-up views appear in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-home_view_interior">Listing&nbsp;3.26</a>, <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-help_view_interior">Listing&nbsp;3.27</a>, and <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-about_view_interior">Listing&nbsp;3.28</a>.</p>

<div class="label" id="code-home_view_interior"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.26.</span> <span class="description">The Home page with HTML structure removed. <br> <code>app/views/static_pages/home.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Home'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="nt">&lt;h1&gt;</span>Sample App<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  This is the home page for the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
  sample application.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>




<div class="label" id="code-help_view_interior"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.27.</span> <span class="description">The Help page with HTML structure removed. <br> <code>app/views/static_pages/help.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Help'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="nt">&lt;h1&gt;</span>Help<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  Get help on the Ruby on Rails Tutorial at the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/help"</span><span class="nt">&gt;</span>Rails Tutorial help page<span class="nt">&lt;/a&gt;</span>.
  To get help on this sample app, see the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/book"</span><span class="nt">&gt;</span>Rails Tutorial book<span class="nt">&lt;/a&gt;</span>.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>




<div class="label" id="code-about_view_interior"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.28.</span> <span class="description">The About page with HTML structure removed. <br> <code>app/views/static_pages/about.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'About Us'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="nt">&lt;h1&gt;</span>About Us<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  The <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/"</span><span class="nt">&gt;</span>Ruby on Rails Tutorial<span class="nt">&lt;/a&gt;</span>
  is a project to make a book and screencasts to teach web development
  with <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://rubyonrails.org/"</span><span class="nt">&gt;</span>Ruby on Rails<span class="nt">&lt;/a&gt;</span>. This
  is the sample application for the tutorial.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>


<p>With these views defined, the Home, Help, and About pages are the 
same as before, but they have much less duplication. Verifying that the 
test suite still passes gives us confidence that this code refactoring 
was successful:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
</pre></div>
</div>




<div class="label" id="sec-static_pages_conclusion"></div>


<h2><a id="sec-3_4" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_conclusion" class="heading"><span class="number">3.4</span> Conclusion</a></h2>


<p>Seen from the outside, this chapter hardly accomplished anything: we started with static pages, and ended with… <em>mostly</em>
 static pages. But appearances are deceiving: by developing in terms of 
Rails controllers, actions, and views, we are now in a position to add 
arbitrary amounts of dynamic content to our site. Seeing exactly how 
this plays out is the task for the rest of this tutorial.</p>

<p>Before moving on, let’s take a minute to commit our changes and merge them into the master branch. Back in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_with_rails">Section&nbsp;3.1.2</a>
 we created a Git branch for the development of static pages. If you 
haven’t been making commits as we’ve been moving along, first make a 
commit indicating that we’ve reached a stopping point:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git add .
<span class="gp">$</span> git commit -m <span class="s2">"Finish static pages"</span>
</pre></div>
</div>


<p>Then merge the changes back into the master branch using the same technique as in <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-git_commands">Section&nbsp;1.3.5</a>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git checkout master
<span class="gp">$</span> git merge static-pages
</pre></div>
</div>


<p>Once you reach a stopping point like this, it’s usually a good idea 
to push your code up to a remote repository (which, if you followed the 
steps in <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#sec-github">Section&nbsp;1.3.4</a>, will be GitHub):</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git push
</pre></div>
</div>


<p>If you like, at this point you can even deploy the updated application to Heroku:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> git push heroku
</pre></div>
</div>




<div class="label" id="sec-static_pages_exercises"></div>


<h2><a id="sec-3_5" href="http://ruby.railstutorial.org/chapters/static-pages#sec-static_pages_exercises" class="heading"><span class="number">3.5</span> Exercises</a></h2>




<ol>

<li>Make a Contact page for the sample app. Following the model in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_title">Listing&nbsp;3.18</a>, first write a test for the existence of a page at the URI /static_pages/contact by testing for the right <code>h1</code>
 content, and then write a second test for the title “Ruby on Rails 
Tutorial Sample App | Contact”. Get your tests to pass, and then fill in
 the Contact page with the content from <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-proposed_contact_page">Listing&nbsp;3.29</a>. (This exercise is solved as part of <a class="ref" href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#sec-layout_links">Section&nbsp;5.3</a>.)</li>

<li>You may have noticed some repetition in the StaticPages controller spec (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_title">Listing&nbsp;3.18</a>). In particular, the base title, “Ruby on Rails Tutorial Sample App”, is the same for every title test. Using the RSpec <code>let</code> function, which creates a variable corresponding to its argument, verify that the tests in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_exercise">Listing&nbsp;3.30</a> still pass. <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-pages_controller_spec_exercise">Listing&nbsp;3.30</a> introduces <em>string interpolation</em>, which is covered further in <a class="ref" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec-strings">Section&nbsp;4.2.2</a>.</li>

<li><strong>(advanced)</strong> As noted on the <a href="http://devcenter.heroku.com/articles/how-do-i-use-sqlite3-for-development">Heroku page on using <tt>sqlite3</tt> for development</a>,
 it’s a good idea to use the same database in development, test, and 
production environments to minimize the possibility of subtle 
incompatibilities. Follow the <a href="http://devcenter.heroku.com/articles/local-postgresql">Heroku instructions for local PostgreSQL installation</a> to install the PostgreSQL database on your local system. Update your <code>Gemfile</code> to eliminate the <tt>sqlite3</tt> gem and use the <tt>pg</tt> gem exclusively, as shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-Gemfile_pg_gem">Listing&nbsp;3.31</a>. You will also have to learn about the <code>config/database.yml</code>
 file and how to run PostgreSQL locally. Your goal should be to create 
and configure both the development database and the test database to use
 PostgreSQL. <strong>Warning:</strong> You may find this exercise 
challenging, and I recommend it only for advanced users. If you get 
stuck, don’t hesitate to skip it; as noted previously, the sample 
application developed in this tutorial is fully compatible with both 
SQLite and PostgreSQL.</li>

</ol>




<div class="label" id="code-proposed_contact_page"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.29.</span> <span class="description">Code for a proposed Contact page. <br> <code>app/views/static_pages/contact.html.erb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="cp">&lt;%</span> <span class="n">provide</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s1">'Contact'</span><span class="p">)</span> <span class="cp">%&gt;</span>
<span class="nt">&lt;h1&gt;</span>Contact<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;p&gt;</span>
  Contact Ruby on Rails Tutorial about the sample app at the
  <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://railstutorial.org/contact"</span><span class="nt">&gt;</span>contact page<span class="nt">&lt;/a&gt;</span>.
<span class="nt">&lt;/p&gt;</span>
</pre></div>
</div></div>




<div class="label" id="code-pages_controller_spec_exercise"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.30.</span> <span class="description">The StaticPages controller spec with a base title. <br> <code>spec/requests/static_pages_spec.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'spec_helper'</span>

<span class="n">describe</span> <span class="s2">"Static pages"</span> <span class="k">do</span>

  <span class="n">let</span><span class="p">(</span><span class="ss">:base_title</span><span class="p">)</span> <span class="p">{</span> <span class="s2">"Ruby on Rails Tutorial Sample App"</span> <span class="p">}</span>

  <span class="n">describe</span> <span class="s2">"Home page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'Sample App'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'Sample App'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'Home'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/home'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"</span><span class="si">#{</span><span class="n">base_title</span><span class="si">}</span><span class="s2"> | Home"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"Help page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'Help'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'Help'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/help'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"</span><span class="si">#{</span><span class="n">base_title</span><span class="si">}</span><span class="s2"> | Help"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"About page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'About Us'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/about'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'About Us'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'About Us'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/about'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"</span><span class="si">#{</span><span class="n">base_title</span><span class="si">}</span><span class="s2"> | About Us"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>

  <span class="n">describe</span> <span class="s2">"Contact page"</span> <span class="k">do</span>

    <span class="n">it</span> <span class="s2">"should have the h1 'Contact'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/contact'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'h1'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s1">'Contact'</span><span class="p">)</span>
    <span class="k">end</span>

    <span class="n">it</span> <span class="s2">"should have the title 'Contact'"</span> <span class="k">do</span>
      <span class="n">visit</span> <span class="s1">'/static_pages/contact'</span>
      <span class="n">page</span><span class="o">.</span><span class="n">should</span> <span class="n">have_selector</span><span class="p">(</span><span class="s1">'title'</span><span class="p">,</span> <span class="ss">:text</span> <span class="o">=&gt;</span> <span class="s2">"</span><span class="si">#{</span><span class="n">base_title</span><span class="si">}</span><span class="s2"> | Contact"</span><span class="p">)</span>
    <span class="k">end</span>
  <span class="k">end</span>
<span class="k">end</span>
</pre></div>
</div></div>




<div class="label" id="code-Gemfile_pg_gem"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.31.</span> <span class="description">The <code>Gemfile</code> needed to use PostgreSQL instead of SQLite.</span> </div>
<div class="code"><div class="highlight"><pre><span class="n">source</span> <span class="s1">'https://rubygems.org'</span>

<span class="n">gem</span> <span class="s1">'rails'</span><span class="p">,</span> <span class="s1">'3.2.13'</span>
<span class="n">gem</span> <span class="s1">'pg'</span><span class="p">,</span> <span class="s1">'0.12.2'</span>

<span class="n">group</span> <span class="ss">:development</span><span class="p">,</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'rspec-rails'</span><span class="p">,</span> <span class="s1">'2.11.0'</span>
<span class="k">end</span>

<span class="c1"># Gems used only for assets and not required</span>
<span class="c1"># in production environments by default.</span>
<span class="n">group</span> <span class="ss">:assets</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'sass-rails'</span><span class="p">,</span>   <span class="s1">'3.2.5'</span>
  <span class="n">gem</span> <span class="s1">'coffee-rails'</span><span class="p">,</span> <span class="s1">'3.2.2'</span>
  <span class="n">gem</span> <span class="s1">'uglifier'</span><span class="p">,</span> <span class="s1">'1.2.3'</span>
<span class="k">end</span>

<span class="n">gem</span> <span class="s1">'jquery-rails'</span><span class="p">,</span> <span class="s1">'2.0.2'</span>

<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
<span class="k">end</span>
</pre></div>
</div></div>




<div class="label" id="sec-advanced_setup"></div>


<h2><a id="sec-3_6" href="http://ruby.railstutorial.org/chapters/static-pages#sec-advanced_setup" class="heading"><span class="number">3.6</span> Advanced setup</a></h2>


<p>As mentioned briefly in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-first_tests">Section&nbsp;3.2</a>, using the <code>rspec</code> command directly is not ideal. In this section, we’ll first discuss a method to eliminate the necessity of typing <code>bundle exec</code>, and then set up testing to automate the running of the test suite using Guard (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard">Section&nbsp;3.6.2</a>) and, optionally, Spork (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork">Section&nbsp;3.6.3</a>).
 Finally, we’ll mention a method for running tests directly inside 
Sublime Text, a technique especially useful when used in concert with 
Spork.</p>

<p>This section should only be attempted by fairly advanced users and 
can be skipped without loss of continuity. Among other things, this 
material is likely to go out of date faster than the rest of the 
tutorial, so you shouldn’t expect everything on your system to match the
 examples exactly, and you may have to Google around to get everything 
to work.</p>

<div class="label" id="sec-eliminating_bundle_exec"></div>


<h3><a id="sec-3_6_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-eliminating_bundle_exec" class="heading"><span class="number">3.6.1</span> Eliminating <tt>bundle exec</tt></a></h3>


<p>As mentioned briefly in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-TDD">Section&nbsp;3.2.1</a>, it is necessary in general to prefix commands such as <code>rake</code> or <code>rspec</code> with <code>bundle exec</code> so that the programs run in the exact gem environment specified by the <code>Gemfile</code>. (For technical reasons, the only exception to this is the <code>rails</code> command itself.) This practice is rather cumbersome, and in this section we discuss two ways to eliminate its necessity.</p>

<div class="label" id="sec-rvm_bundler_integration"></div>


<h4><a id="sec-3_6_1_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-rvm_bundler_integration" class="heading">RVM Bundler integration</a></h4>


<p>The first and preferred method is to use RVM, which includes Bundler 
integration as of version 1.11. You can verify that you have a 
sufficiently up-to-date version of RVM as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rvm get head <span class="o">&amp;&amp;</span> rvm reload
<span class="gp">$</span> rvm -v

<span class="go">rvm 1.15.6 (master)</span>
</pre></div>
</div>


<p>As long as the version number is 1.11.x or greater, installed gems 
will automatically be executed in the proper Bundler environment, so 
that you can write (for example)</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rspec spec/
</pre></div>
</div>


<p>and omit the leading <code>bundle exec</code>. If this is the case, you should skip the rest of this section.</p>

<p>If for any reason you are restricted to an earlier version of RVM, you can still eliminate <code>bundle exec</code> by using <a href="http://rvm.io/integration/bundler/">RVM Bundler integration</a><sup class="footnote" id="fnref-3_16"><a href="#fn-3_16">16</a></sup>
 to configure the Ruby Version Manager to include the proper executables
 automatically in the local environment. The steps are simple if 
somewhat mysterious. First, run these two commands:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> rvm get head <span class="o">&amp;&amp;</span> rvm reload
<span class="gp">$</span> chmod +x <span class="nv">$rvm_path</span>/hooks/after_cd_bundler
</pre></div>
</div>


<p>Then run these:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">cd</span> ~/rails_projects/sample_app
<span class="gp">$</span> bundle install --without production --binstubs<span class="o">=</span>./bundler_stubs
</pre></div>
</div>


<p>Together, these commands combine RVM and Bundler magic to ensure that commands such as <code>rake</code> and <code>rspec</code> are automatically executed in the right environment. Since these files are specific to your local setup, you should add the <code>bundler_stubs</code> directory to your <code>.gitignore</code> file (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-bundler_stubs_gitignore">Listing&nbsp;3.32</a>).</p>

<div class="label" id="code-bundler_stubs_gitignore"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.32.</span> <span class="description">Adding <code>bundler_stubs</code> to the <code>.gitignore</code> file.</span> </div>
<div class="code"><div class="highlight"><pre># Ignore bundler config
/.bundle

# Ignore the default SQLite database.
/db/*.sqlite3

# Ignore all logfiles and tempfiles.
/log/*.log
/tmp

# Ignore other unneeded files.
doc/
*.swp
*~
.project
.DS_Store
bundler_stubs/
</pre></div>
</div></div>


<p>If you add another executable (such as <code>guard</code> in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard">Section&nbsp;3.6.2</a>), you should re-run the <code>bundle install</code> command:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle install --binstubs<span class="o">=</span>./bundler_stubs
</pre></div>
</div>




<div class="label" id="sec-binstubs"></div>


<h4><a id="sec-3_6_1_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-binstubs" class="heading">binstubs</a></h4>


<p>If you’re not using RVM, you can still avoid typing <code>bundle exec</code>.  Bundler allows the creation of the associated binaries as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle --binstubs
</pre></div>
</div>


<p>(In fact, this step, with a different target directory, is also used 
when using RVM.) This command creates all the necessary executables in 
the <code>bin/</code> directory of the application, so that we can now run the test suite as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bin/rspec spec/
</pre></div>
</div>


<p>The same goes for <code>rake</code>, etc.:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bin/rake db:migrate
</pre></div>
</div>


<p>If you add another executable (such as <code>guard</code> in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard">Section&nbsp;3.6.2</a>), you should re-run the <tt class="verb">bundle</tt> <tt class="verb">--binstubs</tt> command.</p>

<p>For the sake of readers who skip this section, the rest of this tutorial will err on the side of caution and explicitly use <code>bundle exec</code>, but of course you should feel free to use the more compact version if your system is properly configured.</p>

<div class="label" id="sec-guard"></div>


<h3><a id="sec-3_6_2" href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard" class="heading"><span class="number">3.6.2</span> Automated tests with Guard</a></h3>


<p>One annoyance associated with using the <code>rspec</code> command is
 having to switch to the command line and run the tests by hand. (A 
second annoyance, the slow start-up time of the test suite, is addressed
 in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork">Section&nbsp;3.6.3</a>.) In this section, we’ll show how to use <a href="https://github.com/guard/guard">Guard</a> to automate the running of the tests. Guard monitors changes in the filesystem so that, for example, when we change the <code>static_pages_spec.rb</code> file only those tests get run. Even better, we can configure Guard so that when, say, the <code>home.html.erb</code> file is modified, the <code>static_pages_spec.rb</code> automatically runs.</p>

<p>First we add <code>guard-rspec</code> to the <code>Gemfile</code> (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-gemfile_guard">Listing&nbsp;3.33</a>).</p>

<div class="label" id="code-gemfile_guard"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.33.</span> <span class="description">A <code>Gemfile</code> for the sample app, including Guard.</span> </div>
<div class="code"><div class="highlight"><pre><span class="n">source</span> <span class="s1">'https://rubygems.org'</span>

<span class="n">gem</span> <span class="s1">'rails'</span><span class="p">,</span> <span class="s1">'3.2.13'</span>

<span class="n">group</span> <span class="ss">:development</span><span class="p">,</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'sqlite3'</span><span class="p">,</span> <span class="s1">'1.3.5'</span>
  <span class="n">gem</span> <span class="s1">'rspec-rails'</span><span class="p">,</span> <span class="s1">'2.11.0'</span>
  <span class="n">gem</span> <span class="s1">'guard-rspec'</span><span class="p">,</span> <span class="s1">'1.2.1'</span>

<span class="k">end</span>

<span class="c1"># Gems used only for assets and not required</span>
<span class="c1"># in production environments by default.</span>
<span class="n">group</span> <span class="ss">:assets</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'sass-rails'</span><span class="p">,</span>   <span class="s1">'3.2.5'</span>
  <span class="n">gem</span> <span class="s1">'coffee-rails'</span><span class="p">,</span> <span class="s1">'3.2.2'</span>
  <span class="n">gem</span> <span class="s1">'uglifier'</span><span class="p">,</span> <span class="s1">'1.2.3'</span>
<span class="k">end</span>

<span class="n">gem</span> <span class="s1">'jquery-rails'</span><span class="p">,</span> <span class="s1">'2.0.2'</span>

<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
  <span class="c1"># System-dependent gems</span>
<span class="k">end</span>

<span class="n">group</span> <span class="ss">:production</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'pg'</span><span class="p">,</span> <span class="s1">'0.12.2'</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Then we have to replace the comment at the end of the test group with
 some system-dependent gems (OS&nbsp;X users may have to install <a href="http://growl.info/downloads#generaldownloads">Growl and growlnotify</a> as well):</p>

<div class="code"><div class="highlight"><pre><span class="c1"># Test gems on Macintosh OS X</span>
<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
  <span class="n">gem</span> <span class="s1">'rb-fsevent'</span><span class="p">,</span> <span class="s1">'0.9.1'</span><span class="p">,</span> <span class="ss">:require</span> <span class="o">=&gt;</span> <span class="kp">false</span>
  <span class="n">gem</span> <span class="s1">'growl'</span><span class="p">,</span> <span class="s1">'1.0.3'</span>
<span class="k">end</span>
</pre></div>
</div>


<div class="code"><div class="highlight"><pre><span class="c1"># Test gems on Linux</span>
<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
  <span class="n">gem</span> <span class="s1">'rb-inotify'</span><span class="p">,</span> <span class="s1">'0.8.8'</span>
  <span class="n">gem</span> <span class="s1">'libnotify'</span><span class="p">,</span> <span class="s1">'0.5.9'</span>
<span class="k">end</span>
</pre></div>
</div>


<div class="code"><div class="highlight"><pre><span class="c1"># Test gems on Windows</span>
<span class="n">group</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="n">gem</span> <span class="s1">'capybara'</span><span class="p">,</span> <span class="s1">'1.1.2'</span>
  <span class="n">gem</span> <span class="s1">'rb-fchange'</span><span class="p">,</span> <span class="s1">'0.0.5'</span>
  <span class="n">gem</span> <span class="s1">'rb-notifu'</span><span class="p">,</span> <span class="s1">'0.0.4'</span>
  <span class="n">gem</span> <span class="s1">'win32console'</span><span class="p">,</span> <span class="s1">'1.3.0'</span>
<span class="k">end</span>
</pre></div>
</div>


<p>We next install the gems by running <code>bundle install</code>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle install
</pre></div>
</div>


<p>Then initialize Guard so that it works with RSpec:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>guard init rspec
<span class="go">Writing new Guardfile to /Users/mhartl/rails_projects/sample_app/Guardfile</span>
<span class="go">rspec guard added to Guardfile, feel free to edit it</span>
</pre></div>
</div>


<p>Now edit the resulting <code>Guardfile</code> so that Guard will run the right tests when the integration tests and views are updated (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-guardfile">Listing&nbsp;3.34</a>).</p>

<div class="label" id="code-guardfile"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.34.</span> <span class="description">Additions to the default <code>Guardfile</code>.</span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'active_support/core_ext'</span>

<span class="n">guard</span> <span class="s1">'rspec'</span><span class="p">,</span> <span class="ss">:version</span> <span class="o">=&gt;</span> <span class="mi">2</span><span class="p">,</span> <span class="ss">:all_after_pass</span> <span class="o">=&gt;</span> <span class="kp">false</span> <span class="k">do</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="n">watch</span><span class="p">(</span><span class="sr">%r{^app/controllers/(.+)_(controller)\.rb$}</span><span class="p">)</span> <span class="k">do</span> <span class="o">|</span><span class="n">m</span><span class="o">|</span>
    <span class="o">[</span><span class="s2">"spec/routing/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span><span class="si">}</span><span class="s2">_routing_spec.rb"</span><span class="p">,</span>
     <span class="s2">"spec/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">2</span><span class="o">]</span><span class="si">}</span><span class="s2">s/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span><span class="si">}</span><span class="s2">_</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">2</span><span class="o">]</span><span class="si">}</span><span class="s2">_spec.rb"</span><span class="p">,</span>
     <span class="s2">"spec/acceptance/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span><span class="si">}</span><span class="s2">_spec.rb"</span><span class="p">,</span>
     <span class="p">(</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">][</span><span class="sr">/_pages/</span><span class="o">]</span> <span class="p">?</span> <span class="s2">"spec/requests/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span><span class="si">}</span><span class="s2">_spec.rb"</span> <span class="p">:</span>
                       <span class="s2">"spec/requests/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">].</span><span class="n">singularize</span><span class="si">}</span><span class="s2">_pages_spec.rb"</span><span class="p">)</span><span class="o">]</span>
  <span class="k">end</span>
  <span class="n">watch</span><span class="p">(</span><span class="sr">%r{^app/views/(.+)/}</span><span class="p">)</span> <span class="k">do</span> <span class="o">|</span><span class="n">m</span><span class="o">|</span>
    <span class="p">(</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">][</span><span class="sr">/_pages/</span><span class="o">]</span> <span class="p">?</span> <span class="s2">"spec/requests/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">]</span><span class="si">}</span><span class="s2">_spec.rb"</span> <span class="p">:</span>
                      <span class="s2">"spec/requests/</span><span class="si">#{</span><span class="n">m</span><span class="o">[</span><span class="mi">1</span><span class="o">].</span><span class="n">singularize</span><span class="si">}</span><span class="s2">_pages_spec.rb"</span><span class="p">)</span>
  <span class="k">end</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Here the line</p>

<div class="code"><div class="highlight"><pre><span class="n">guard</span> <span class="s1">'rspec'</span><span class="p">,</span> <span class="ss">:version</span> <span class="o">=&gt;</span> <span class="mi">2</span><span class="p">,</span> <span class="ss">:all_after_pass</span> <span class="o">=&gt;</span> <span class="kp">false</span> <span class="k">do</span>
</pre></div>
</div>


<p>ensures that Guard doesn’t run all the tests after a failing test passes (to speed up the Red-Green-Refactor cycle).</p>

<p>We can now start <code>guard</code> as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>guard
</pre></div>
</div>


<p>To eliminate the need to prefix the command with <code>bundle exec</code>, re-follow the steps in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-eliminating_bundle_exec">Section&nbsp;3.6.1</a>.</p>

<p>By the way, if you get a Guard error complaining about the absence of a <code>spec/routing</code> directory, you can fix it by creating an empty one:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> mkdir spec/routing
</pre></div>
</div>




<div class="label" id="sec-spork"></div>


<h3><a id="sec-3_6_3" href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork" class="heading"><span class="number">3.6.3</span> Speeding up tests with Spork</a></h3>


<p>When running <code>bundle exec rspec</code>, you may have noticed 
that it takes several seconds just to start running the tests, but once 
they start running they finish quickly. This is because each time RSpec 
runs the tests it has to reload the entire Rails environment. The <a href="http://github.com/sporkrb/spork">Spork test server</a><sup class="footnote" id="fnref-3_17"><a href="#fn-3_17">17</a></sup> aims to solve this problem. Spork loads the environment <em>once</em>, and then maintains a pool of processes for running future tests. Spork is particularly useful when combined with Guard (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-guard">Section&nbsp;3.6.2</a>).</p>

<p>The first step is to add the <code>spork</code> gem dependency to the <code>Gemfile</code> (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-gemfile_spork">Listing&nbsp;3.35</a>).</p>

<div class="label" id="code-gemfile_spork"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.35.</span> <span class="description">A <code>Gemfile</code> for the sample app.</span> </div>
<div class="code"><div class="highlight"><pre><span class="n">source</span> <span class="s1">'https://rubygems.org'</span>

<span class="n">gem</span> <span class="s1">'rails'</span><span class="p">,</span> <span class="s1">'3.2.13'</span>
<span class="o">.</span>
<span class="o">.</span>
<span class="o">.</span>
<span class="n">group</span> <span class="ss">:development</span><span class="p">,</span> <span class="ss">:test</span> <span class="k">do</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="n">gem</span> <span class="s1">'guard-spork'</span><span class="p">,</span> <span class="s1">'1.2.0'</span>
  <span class="n">gem</span> <span class="s1">'childprocess'</span><span class="p">,</span> <span class="s1">'0.3.6'</span>
  <span class="n">gem</span> <span class="s1">'spork'</span><span class="p">,</span> <span class="s1">'0.9.2'</span>
<span class="k">end</span>
<span class="o">.</span>
<span class="o">.</span>
<span class="o">.</span>
</pre></div>
</div></div>


<p>Then install Spork using <code>bundle install</code>:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle install
</pre></div>
</div>


<p>Next, bootstrap the Spork configuration:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>spork --bootstrap
</pre></div>
</div>


<p>Now we need to edit the RSpec configuration file, located in <code>spec/spec_helper.rb</code>, so that the environment gets loaded in a <em>prefork</em> block, which arranges for it to be loaded only once (<a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-spork_spec_helper">Listing&nbsp;3.36</a>).</p>

<div class="label" id="code-spork_spec_helper"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.36.</span> <span class="description">Adding environment loading to the <code>Spork.prefork</code> block. <br> <code>spec/spec_helper.rb</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'rubygems'</span>
<span class="nb">require</span> <span class="s1">'spork'</span>

<span class="no">Spork</span><span class="o">.</span><span class="n">prefork</span> <span class="k">do</span>
  <span class="c1"># Loading more in this block will cause your tests to run faster. However,</span>
  <span class="c1"># if you change any configuration or code from libraries loaded here, you'll</span>
  <span class="c1"># need to restart spork for it take effect.</span>
  <span class="c1"># This file is copied to spec/ when you run 'rails generate rspec:install'</span>
  <span class="no">ENV</span><span class="o">[</span><span class="s2">"RAILS_ENV"</span><span class="o">]</span> <span class="o">||=</span> <span class="s1">'test'</span>
  <span class="nb">require</span> <span class="no">File</span><span class="o">.</span><span class="n">expand_path</span><span class="p">(</span><span class="s2">"../../config/environment"</span><span class="p">,</span> <span class="bp">__FILE__</span><span class="p">)</span>
  <span class="nb">require</span> <span class="s1">'rspec/rails'</span>
  <span class="nb">require</span> <span class="s1">'rspec/autorun'</span>

  <span class="c1"># Requires supporting ruby files with custom matchers and macros, etc,</span>
  <span class="c1"># in spec/support/ and its subdirectories.</span>
  <span class="no">Dir</span><span class="o">[</span><span class="no">Rails</span><span class="o">.</span><span class="n">root</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="s2">"spec/support/**/*.rb"</span><span class="p">)</span><span class="o">].</span><span class="n">each</span> <span class="p">{</span><span class="o">|</span><span class="n">f</span><span class="o">|</span> <span class="nb">require</span> <span class="n">f</span><span class="p">}</span>

  <span class="no">RSpec</span><span class="o">.</span><span class="n">configure</span> <span class="k">do</span> <span class="o">|</span><span class="n">config</span><span class="o">|</span>
    <span class="c1"># == Mock Framework</span>
    <span class="c1">#</span>
    <span class="c1"># If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:</span>
    <span class="c1">#</span>
    <span class="c1"># config.mock_with :mocha</span>
    <span class="c1"># config.mock_with :flexmock</span>
    <span class="c1"># config.mock_with :rr</span>
    <span class="n">config</span><span class="o">.</span><span class="n">mock_with</span> <span class="ss">:rspec</span>

    <span class="c1"># Remove this line if you're not using ActiveRecord or ActiveRecord fixtures</span>
    <span class="n">config</span><span class="o">.</span><span class="n">fixture_path</span> <span class="o">=</span> <span class="s2">"</span><span class="si">#{</span><span class="o">::</span><span class="no">Rails</span><span class="o">.</span><span class="n">root</span><span class="si">}</span><span class="s2">/spec/fixtures"</span>

    <span class="c1"># If you're not using ActiveRecord, or you'd prefer not to run each of your</span>
    <span class="c1"># examples within a transaction, remove the following line or assign false</span>
    <span class="c1"># instead of true.</span>
    <span class="n">config</span><span class="o">.</span><span class="n">use_transactional_fixtures</span> <span class="o">=</span> <span class="kp">true</span>

    <span class="c1"># If true, the base class of anonymous controllers will be inferred</span>
    <span class="c1"># automatically. This will be the default behavior in future versions of</span>
    <span class="c1"># rspec-rails.</span>
    <span class="n">config</span><span class="o">.</span><span class="n">infer_base_class_for_anonymous_controllers</span> <span class="o">=</span> <span class="kp">false</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="no">Spork</span><span class="o">.</span><span class="n">each_run</span> <span class="k">do</span>
  <span class="c1"># This code will be run each time you run your specs.</span>

<span class="k">end</span>
</pre></div>
</div></div>


<p>Before running Spork, we can get a baseline for the testing overhead by timing our test suite as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">time </span>bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb
<span class="go">......</span>

<span class="go">6 examples, 0 failures</span>

<span class="go">real	0m8.633s</span>
<span class="go">user	0m7.240s</span>
<span class="go">sys	0m1.068s</span>
</pre></div>
</div>


<p>Here the test suite takes more than seven seconds to run even though 
the actual tests run in under a tenth of a second. To speed this up, we 
can open a dedicated terminal window, navigate to the application root 
directory, and then start a Spork server:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>spork
<span class="go">Using RSpec</span>
<span class="go">Loading Spork.prefork block...</span>
<span class="go">Spork is ready and listening on 8989!</span>
</pre></div>
</div>


<p>(To eliminate the need to prefix the command with <code>bundle exec</code>, re-follow the steps in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-eliminating_bundle_exec">Section&nbsp;3.6.1</a>.) In another terminal window, we can now run our test suite with the <tt class="verb">--drb</tt> (“distributed Ruby”) option and verify that the environment-loading overhead is greatly reduced:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">time </span>bundle <span class="nb">exec </span>rspec spec/requests/static_pages_spec.rb --drb
<span class="go">......</span>

<span class="go">6 examples, 0 failures</span>

<span class="go">real	0m2.649s</span>
<span class="go">user	0m1.259s</span>
<span class="go">sys	0m0.258s</span>
</pre></div>
</div>


<p>It’s inconvenient to have to include the <tt class="verb">--drb</tt> option every time we run <code>rspec</code>, so I recommend adding it to the <code>.rspec</code> file in the application’s root directory, as shown in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-rspec_drb">Listing&nbsp;3.37</a>.</p>

<div class="label" id="code-rspec_drb"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.37.</span> <span class="description">Configuring RSpec to automatically use Spork. <br> <code>.rspec</code></span> </div>
<div class="code"><div class="highlight"><pre><span class="o">--</span><span class="n">colour</span>
<span class="o">--</span><span class="n">drb</span>
</pre></div>
</div></div>


<p>One word of advice when using Spork: after changing a file included in the prefork loading (such as <code>routes.rb</code>),
 you will have to restart the Spork server to load the new Rails 
environment. If your tests are failing when you think they should be 
passing, quit the Spork server with <tt>Ctrl-C</tt> and restart it:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>spork
<span class="go">Using RSpec</span>
<span class="go">Loading Spork.prefork block...</span>
<span class="go">Spork is ready and listening on 8989!</span>
<span class="go">^C</span>
<span class="gp">$</span> bundle <span class="nb">exec </span>spork
</pre></div>
</div>


<div class="label" id="sec-spork_and_guard"></div>


<h4><a id="sec-3_6_3_1" href="http://ruby.railstutorial.org/chapters/static-pages#sec-spork_and_guard" class="heading">Guard with Spork</a></h4>


<p>Spork is especially useful when used with Guard, which we can arrange as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>guard init spork
</pre></div>
</div>


<p>We then need to change the <code>Guardfile</code> as in <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#code-spork_guardfile">Listing&nbsp;3.38</a>.</p>

<div class="label" id="code-spork_guardfile"></div>


<div class="codelisting">
<div class="listing"><span class="header">Listing 3.38.</span> <span class="description">The <code>Guardfile</code> updated for Spork.</span> </div>
<div class="code"><div class="highlight"><pre><span class="nb">require</span> <span class="s1">'active_support/core_ext'</span>

<span class="n">guard</span> <span class="s1">'spork'</span><span class="p">,</span> <span class="ss">:rspec_env</span> <span class="o">=&gt;</span> <span class="p">{</span> <span class="s1">'RAILS_ENV'</span> <span class="o">=&gt;</span> <span class="s1">'test'</span> <span class="p">}</span> <span class="k">do</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'config/application.rb'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'config/environment.rb'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="sr">%r{^config/environments/.+\.rb$}</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="sr">%r{^config/initializers/.+\.rb$}</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'Gemfile'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'Gemfile.lock'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'spec/spec_helper.rb'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'test/test_helper.rb'</span><span class="p">)</span>
  <span class="n">watch</span><span class="p">(</span><span class="s1">'spec/support/'</span><span class="p">)</span>
<span class="k">end</span>

<span class="n">guard</span> <span class="s1">'rspec'</span><span class="p">,</span> <span class="ss">:version</span> <span class="o">=&gt;</span> <span class="mi">2</span><span class="p">,</span> <span class="ss">:all_after_pass</span> <span class="o">=&gt;</span> <span class="kp">false</span><span class="p">,</span> <span class="ss">:cli</span> <span class="o">=&gt;</span> <span class="s1">'--drb'</span> <span class="k">do</span>
  <span class="o">.</span>
  <span class="o">.</span>
  <span class="o">.</span>
<span class="k">end</span>
</pre></div>
</div></div>


<p>Note that we’ve updated the arguments to <code>guard</code> to include
<tt class="verb">:cli =&gt; --drb</tt>, which ensures that Guard uses the command-line interface (cli) to the Spork server. We’ve also added a command to watch the <code>spec/support/</code> directory, which we’ll start modifying in <a class="ref" href="http://ruby.railstutorial.org/chapters/filling-in-the-layout#top">Chapter&nbsp;5</a>.</p>

<p>With that configuration in place, we can start Guard and Spork at the same time with the <code>guard</code> command:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> bundle <span class="nb">exec </span>guard
</pre></div>
</div>


<p>Guard automatically starts a Spork server, dramatically reducing the overhead each time a test gets run.</p>

<p>A well-configured testing environment with Guard, Spork, and 
(optionally) test notifications makes test-driven development positively
 addictive. See the <a href="http://railstutorial.org/screencasts">Rails Tutorial screencasts</a><sup class="footnote" id="fnref-3_18"><a href="#fn-3_18">18</a></sup> for more information.</p>

<div class="label" id="sec-tests_inside_sublime_text"></div>


<h3><a id="sec-3_6_4" href="http://ruby.railstutorial.org/chapters/static-pages#sec-tests_inside_sublime_text" class="heading"><span class="number">3.6.4</span> Tests inside Sublime Text</a></h3>


<p>If you’re using Sublime Text, there is a powerful set of helper 
commands to run tests directly inside the editor. To get them working, 
follow the instructions for your platform at <a href="https://github.com/maltize/sublime-text-2-ruby-tests">Sublime Text 2 Ruby Tests</a>.<sup class="footnote" id="fnref-3_19"><a href="#fn-3_19">19</a></sup> On my platform (Macintosh OS&nbsp;X), I can install the commands as follows:</p>

<div class="code"><div class="highlight"><pre><span class="gp">$</span> <span class="nb">cd</span> ~/Library/Application<span class="se">\ </span>Support/Sublime<span class="se">\ </span>Text<span class="se">\ </span>2/Packages
<span class="gp">$</span> git clone https://github.com/maltize/sublime-text-2-ruby-tests.git RubyTest
</pre></div>
</div>


<p>You may also want to follow the setup instructions for <a href="https://github.com/mhartl/rails_tutorial_sublime_text">Rails Tutorial Sublime Text</a> at this time.<sup class="footnote" id="fnref-3_20"><a href="#fn-3_20">20</a></sup></p>

<p>After restarting Sublime Text, the RubyTest package supplies the following commands:</p>

<ul>
<li><strong>Command-Shift-R</strong>: run a single test (if run on an <code>it</code> block) or group of tests (if run on a <code>describe</code> block)</li>
<li><strong>Command-Shift-E</strong>: run the last test(s)</li>
<li><strong>Command-Shift-T</strong>: run all the tests in current file</li>
</ul>


<p>Because test suites can become quite slow even for relatively small 
projects, being able to run one test (or a small group of tests) at a 
time can be a huge win. Even a single test requires the same Rails 
environment overhead, of course, which is why these commands are 
perfectly complemented by Spork: running a single test eliminates the 
overhead of running the entire test file, while running Spork eliminates
 the overhead of starting the test environment. Here is the sequence I 
recommend:</p>

<ol>
<li>Start Spork in a terminal window.</li>
<li>Write a single test or small group of tests.</li>
<li>Run Command-Shift-R to verify that the test or test group is red.</li>
<li>Write the corresponding application code.</li>
<li>Run Command-Shift-E to run the same test/group again, verifying that it’s green.</li>
<li>Repeat steps 2–5 as necessary.</li>
<li>When reaching a natural stopping point (such as before a commit), run <code>rspec spec/</code> at the command line to confirm that the entire test suite is still green.</li>
</ol>


<p>Even with the ability to run tests inside of Sublime Text, I still 
sometimes prefer using Guard, but at this point my bread-and-butter TDD 
technique is the one enumerated above.</p>

<div class="navigation">  <a class="prev_page" href="http://ruby.railstutorial.org/chapters/a-demo-app#top">
    «&nbsp;<span class="number">Chapter 2</span> A demo app
  </a>
  <a class="next_page" href="http://ruby.railstutorial.org/chapters/rails-flavored-ruby#top">
    <span class="number">Chapter 4</span> Rails-flavored Ruby&nbsp;»
  </a>
</div><div class="footnotes">
<ol>
<li id="fn-3_1">The successor to <em>Webrat</em>, Capybara is named after the world’s <a href="http://en.wikipedia.org/wiki/Capybara">largest rodent</a>.&nbsp;<a class="arrow" href="#fnref-3_1">↑</a></li>
<li id="fn-3_2">In fact, you can even leave off <code>install</code>. The <code>bundle</code> command by itself is an alias for <code>bundle install</code>.&nbsp;<a class="arrow" href="#fnref-3_2">↑</a></li>
<li id="fn-3_3">As before, you may find the augmented file from <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#code-gitignore">Listing&nbsp;1.7</a> to be more convenient depending on your system.&nbsp;<a class="arrow" href="#fnref-3_3">↑</a></li>
<li id="fn-3_4">https://github.com/railstutorial/sample_app_2nd_ed&nbsp;<a class="arrow" href="#fnref-3_4">↑</a></li>
<li id="fn-3_5">In fact, Rails ensures that requests for such files 
never hit the main Rails stack; they are delivered directly from the 
filesystem. (See <a href="http://www.amazon.com/gp/product/0321601661"><em>The Rails&nbsp;3 Way</em></a> for more details.)&nbsp;<a class="arrow" href="#fnref-3_5">↑</a></li>
<li id="fn-3_6">As usual, replace <code>subl</code> with the command for your text editor.&nbsp;<a class="arrow" href="#fnref-3_6">↑</a></li>
<li id="fn-3_7">HTML changes with time; by explicitly making a doctype 
declaration we make it likelier that browsers will render our pages 
properly in the future. The extremely simple doctype <code>&lt;!DOCTYPE html&gt;</code> is characteristic of the latest HTML standard, HTML5.&nbsp;<a class="arrow" href="#fnref-3_7">↑</a></li>
<li id="fn-3_8">Our method for making static pages is probably the 
simplest, but it’s not the only way. The optimal method really depends 
on your needs; if you expect a <em>large</em> number of static pages, 
using a StaticPages controller can get quite cumbersome, but in our 
sample app we’ll only need a few. See this <a href="http://blog.hasmanythrough.com/2008/4/2/simple-pages">blog post on simple pages at <tt>has_many :through</tt></a> for a survey of techniques for making static pages with Rails. <em>Warning:</em> The discussion is fairly advanced, so you might want to wait a while before trying to understand it.&nbsp;<a class="arrow" href="#fnref-3_8">↑</a></li>
<li id="fn-3_9">Running <code>bundle exec</code> every time is rather cumbersome; see <a class="ref" href="http://ruby.railstutorial.org/chapters/static-pages#sec-advanced_setup">Section&nbsp;3.6</a> for some options to eliminate it.&nbsp;<a class="arrow" href="#fnref-3_9">↑</a></li>
<li id="fn-3_10">I actually use a dark background for both my terminal 
and editor, but the light background looks better in the 
screenshots.&nbsp;<a class="arrow" href="#fnref-3_10">↑</a></li>
<li id="fn-3_11">A newline is what comes at the end of a line, thereby starting a new line. In code, it is represented by the character <tt class="verb">\n</tt>.&nbsp;<a class="arrow" href="#fnref-3_11">↑</a></li>
<li id="fn-3_12">Actually <em>counting</em> columns could drive you 
crazy, which is why many text editors have a visual aid to help you. For
 example, if you take a look back at <a class="ref" href="http://ruby.railstutorial.org/chapters/beginning#fig-editor_shell">Figure&nbsp;1.1</a>,
 you’ll see a small vertical line on the right to help keep code under 
80 characters. (It’s actually at 78 columns, which gives you a little 
margin for error.) If you use TextMate, you can find this feature under <tt>View &gt; Wrap Column &gt; 78</tt>. In Sublime Text, you can use <tt>View &gt; Ruler &gt; 78</tt> or <tt>View &gt; Ruler &gt; 80</tt>.&nbsp;<a class="arrow" href="#fnref-3_12">↑</a></li>
<li id="fn-3_13">There is a second popular template system called <a href="http://haml-lang.com/">Haml</a>, which I personally love, but it’s not <em>quite</em> standard enough yet for use in an introductory tutorial.&nbsp;<a class="arrow" href="#fnref-3_13">↑</a></li>
<li id="fn-3_14">Experienced Rails developers might have expected the use of <code>content_for</code> at this point, but it doesn’t work well with the asset pipeline. The <code>provide</code> function is its replacement.&nbsp;<a class="arrow" href="#fnref-3_14">↑</a></li>
<li id="fn-3_15">If you’ve studied Ruby before, you might suspect that Rails is <em>yielding</em>
 the contents to a block, and your suspicion would be correct. But you 
don’t need to know this to develop applications with Rails.&nbsp;<a class="arrow" href="#fnref-3_15">↑</a></li>
<li id="fn-3_16">http://rvm.io/integration/bundler/&nbsp;<a class="arrow" href="#fnref-3_16">↑</a></li>
<li id="fn-3_17">A <em>spork</em> is a combination spoon-fork. The project’s name is a pun on Spork’s use of <a href="http://en.wikipedia.org/wiki/POSIX">POSIX</a> <a href="http://en.wikipedia.org/wiki/Fork_%28software_development%29">forks</a>.&nbsp;<a class="arrow" href="#fnref-3_17">↑</a></li>
<li id="fn-3_18">http://railstutorial.org/screencasts&nbsp;<a class="arrow" href="#fnref-3_18">↑</a></li>
<li id="fn-3_19">https://github.com/maltize/sublime-text-2-ruby-tests&nbsp;<a class="arrow" href="#fnref-3_19">↑</a></li>
<li id="fn-3_20">https://github.com/mhartl/rails_tutorial_sublime_text&nbsp;<a class="arrow" href="#fnref-3_20">↑</a></li>
</ol>
</div>





    </div>
  <div id="book_bottom">
  </div>
</div>
        
        </div>

    <div>Michael Hartl is a participant in the Amazon Services LLC 
Associates Program, an affiliate advertising program designed to provide
 a means for sites to earn advertising fees by advertising and linking 
to Amazon.com.</div>
 
    <div id="container-bottom"></div>
    
<div class=" fb_reset" id="fb-root"><script async="" src="RoR%20Tutorial%20-%20node-Dateien/all.js" type="text/javascript"></script><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe src="RoR%20Tutorial%20-%20node-Dateien/ping.htm" style="display: none;" allowtransparency="true" name="f19907c72878ab2" frameborder="0" scrolling="no"></iframe></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe src="RoR%20Tutorial%20-%20node-Dateien/xd_arbiter.htm" style="border: medium none;" tab-index="-1" title="Facebook Cross Domain Communication Frame" aria-hidden="true" id="fb_xdm_frame_http" allowtransparency="true" name="fb_xdm_frame_http" frameborder="0" scrolling="no"></iframe><iframe src="RoR%20Tutorial%20-%20node-Dateien/xd_arbiter_002.htm" style="border: medium none;" tab-index="-1" title="Facebook Cross Domain Communication Frame" aria-hidden="true" id="fb_xdm_frame_https" allowtransparency="true" name="fb_xdm_frame_https" frameborder="0" scrolling="no"></iframe></div></div></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({appId: '145973438749643', status: true, cookie: true,
             xfbml: true});
  };
  (function() {
    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.src = document.location.protocol +
      '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
  }());
</script>

  
      <script type="text/javascript">
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
  </script><script src="RoR%20Tutorial%20-%20node-Dateien/ga.js" type="text/javascript"></script>
  <script type="text/javascript">
  try {
  var pageTracker = _gat._getTracker("UA-8667566-1");
  pageTracker._trackPageview();
  } catch(err) {}</script>

  
  
  </div>

</div></body></html>