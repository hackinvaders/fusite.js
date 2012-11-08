  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Basic-multiplayer-game/js/libs/jquery.hotkeys.js at master · frago12/Basic-multiplayer-game</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="uGmOaw0H19wAyVtapsQZc3lIOHeKDVU0OWB73jhDx58=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-006920a3c144f437c7f6a9718e9d5561a127698c.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-da2269f4eec6e1d3d47c6992d8d12cb3fa63e3eb.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-28923941200b998a3e7422badab5b9be240f9be4.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-85c9c8ab1f3c8451e39424e1d687e8397c3b8fbf.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/frago12/Basic-multiplayer-game/blob/96f55d13ab076e568b490d16b82bcb678f19a192/js/libs/jquery.hotkeys.js'>
    <meta property="og:title" content="Basic-multiplayer-game"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/frago12/Basic-multiplayer-game"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673561"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="A basic HTML5 multiplayer game using node.js. Contribute to Basic-multiplayer-game development by creating an account on GitHub."/>

    <meta name="description" content="A basic HTML5 multiplayer game using node.js. Contribute to Basic-multiplayer-game development by creating an account on GitHub." />
  <link href="https://github.com/frago12/Basic-multiplayer-game/commits/master.atom" rel="alternate" title="Recent Commits to Basic-multiplayer-game:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">
    <div id="wrapper">

    
    

    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo " href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659530" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659530" />
          </a>

            <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
              <span class="mail-status all-read"></span>
            </a>

              
    <div class="topsearch command-bar-activated">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search "></span></a>
  <input type="text" name="q" id="command-bar" placeholder="Search or Type a Command" tabindex="1" data-username="frago12" />
  <span class="mini-icon help tooltipped downwards" title="Show Command Bar Help"></span>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            

  
  <div id="userbox">
    <div id="user">
      <a href="https://github.com/frago12"><img height="20" src="https://secure.gravatar.com/avatar/5d8edbc3df9845e31e979254bfae6a41?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
      <a href="https://github.com/frago12" class="name">frago12</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">
          <li class="nspr">
            <a href="/frago12/Basic-multiplayer-game/pull/new/master" class="minibutton btn-pull-request" icon_class="mini-icon-pull-request"><span class="mini-icon mini-icon-pull-request"></span>Pull Request</a>
          </li>

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="uGmOaw0H19wAyVtapsQZc3lIOHeKDVU0OWB73jhDx58=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3135306" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-unwatch"></span>Unwatch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container on">
            <a href="/frago12/Basic-multiplayer-game/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/frago12/Basic-multiplayer-game/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/frago12/Basic-multiplayer-game/stargazers">1</a>
          </li>

              <li>
                <a href="/frago12/Basic-multiplayer-game/fork_select" class="minibutton js-toggler-target lighter" rel="facebox nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/frago12/Basic-multiplayer-game/network" class="social-count">0</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/frago12" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">frago12</span>
                  </a></span> /
                <strong><a href="/frago12/Basic-multiplayer-game" class="js-current-repository">Basic-multiplayer-game</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/frago12/Basic-multiplayer-game" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/frago12/Basic-multiplayer-game/network" highlight="repo_network">Network</a></li>
    <li><a href="/frago12/Basic-multiplayer-game/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/frago12/Basic-multiplayer-game/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>

      <li><a href="/frago12/Basic-multiplayer-game/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/frago12/Basic-multiplayer-game/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

      <li>
        <a href="/frago12/Basic-multiplayer-game/admin">Admin</a>
      </li>

  </ul>
  
  <div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/frago12/Basic-multiplayer-game/tree-list/96f55d13ab076e568b490d16b82bcb678f19a192"
      data-blob-url-prefix="/frago12/Basic-multiplayer-game/blob/master">

  <div class="breadcrumb">
    <span class="bold"><a href="/frago12/Basic-multiplayer-game">Basic-multiplayer-game</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/frago12/Basic-multiplayer-game/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/frago12/Basic-multiplayer-game/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
      <li><a href="/frago12/Basic-multiplayer-game/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/frago12/Basic-multiplayer-game/blob/master/js/libs/jquery.hotkeys.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
          </div>

            <div class="js-filter-tab js-filter-tags filter-tab-empty" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/frago12/Basic-multiplayer-game" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/frago12/Basic-multiplayer-game/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/frago12/Basic-multiplayer-game/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b2cb6d4ebc3ac539339b0702d701ec89 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:b2cb6d4ebc3ac539339b0702d701ec89 -->

<div id="slider">


    <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
    <div class="breadcrumb" data-path="js/libs/jquery.hotkeys.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/frago12/Basic-multiplayer-game" itemscope="url"><span itemprop="title">Basic-multiplayer-game</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/frago12/Basic-multiplayer-game/tree/master/js" itemscope="url"><span itemprop="title">js</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/frago12/Basic-multiplayer-game/tree/master/js/libs" itemscope="url"><span itemprop="title">libs</span></a></span> / <strong class="final-path">jquery.hotkeys.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="js/libs/jquery.hotkeys.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease" data-path="js/libs/jquery.hotkeys.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/5d8edbc3df9845e31e979254bfae6a41?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/frago12">frago12</a></span>
    <time class="js-relative-date" datetime="2012-01-15T23:46:55-08:00" title="2012-01-15 23:46:55">January 15, 2012</time>
    <div class="commit-title">
        <a href="/frago12/Basic-multiplayer-game/commit/f456060c8c34f81ecb44730ead6c21adb55ad386" class="message">adding keydown option to keyboard control</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5d8edbc3df9845e31e979254bfae6a41?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/frago12">frago12</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="js/libs/jquery.hotkeys.js/" data-permalink-url="/frago12/Basic-multiplayer-game/blob/96f55d13ab076e568b490d16b82bcb678f19a192/js/libs/jquery.hotkeys.js" data-title="Basic-multiplayer-game/js/libs/jquery.hotkeys.js at master · frago12/Basic-multiplayer-game · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>100 lines (81 sloc)</span>
                <span>3.07 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter" href="/frago12/Basic-multiplayer-game/edit/master/js/libs/jquery.hotkeys.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/frago12/Basic-multiplayer-game/raw/master/js/libs/jquery.hotkeys.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/frago12/Basic-multiplayer-game/blame/master/js/libs/jquery.hotkeys.js" class="minibutton grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/frago12/Basic-multiplayer-game/commits/master/js/libs/jquery.hotkeys.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Hotkeys Plugin</span></div><div class='line' id='LC3'><span class="cm"> * Copyright 2010, John Resig</span></div><div class='line' id='LC4'><span class="cm"> * Dual licensed under the MIT or GPL Version 2 licenses.</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Based upon the plugin by Tzury Bar Yochay:</span></div><div class='line' id='LC7'><span class="cm"> * http://github.com/tzuryby/hotkeys</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Original idea by:</span></div><div class='line' id='LC10'><span class="cm"> * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/</span></div><div class='line' id='LC11'><span class="cm">*/</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">){</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC16'>		<span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;0.8&quot;</span><span class="p">,</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="nx">specialKeys</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC19'>			<span class="mi">8</span><span class="o">:</span> <span class="s2">&quot;backspace&quot;</span><span class="p">,</span> <span class="mi">9</span><span class="o">:</span> <span class="s2">&quot;tab&quot;</span><span class="p">,</span> <span class="mi">13</span><span class="o">:</span> <span class="s2">&quot;return&quot;</span><span class="p">,</span> <span class="mi">16</span><span class="o">:</span> <span class="s2">&quot;shift&quot;</span><span class="p">,</span> <span class="mi">17</span><span class="o">:</span> <span class="s2">&quot;ctrl&quot;</span><span class="p">,</span> <span class="mi">18</span><span class="o">:</span> <span class="s2">&quot;alt&quot;</span><span class="p">,</span> <span class="mi">19</span><span class="o">:</span> <span class="s2">&quot;pause&quot;</span><span class="p">,</span></div><div class='line' id='LC20'>			<span class="mi">20</span><span class="o">:</span> <span class="s2">&quot;capslock&quot;</span><span class="p">,</span> <span class="mi">27</span><span class="o">:</span> <span class="s2">&quot;esc&quot;</span><span class="p">,</span> <span class="mi">32</span><span class="o">:</span> <span class="s2">&quot;space&quot;</span><span class="p">,</span> <span class="mi">33</span><span class="o">:</span> <span class="s2">&quot;pageup&quot;</span><span class="p">,</span> <span class="mi">34</span><span class="o">:</span> <span class="s2">&quot;pagedown&quot;</span><span class="p">,</span> <span class="mi">35</span><span class="o">:</span> <span class="s2">&quot;end&quot;</span><span class="p">,</span> <span class="mi">36</span><span class="o">:</span> <span class="s2">&quot;home&quot;</span><span class="p">,</span></div><div class='line' id='LC21'>			<span class="mi">37</span><span class="o">:</span> <span class="s2">&quot;left&quot;</span><span class="p">,</span> <span class="mi">38</span><span class="o">:</span> <span class="s2">&quot;up&quot;</span><span class="p">,</span> <span class="mi">39</span><span class="o">:</span> <span class="s2">&quot;right&quot;</span><span class="p">,</span> <span class="mi">40</span><span class="o">:</span> <span class="s2">&quot;down&quot;</span><span class="p">,</span> <span class="mi">45</span><span class="o">:</span> <span class="s2">&quot;insert&quot;</span><span class="p">,</span> <span class="mi">46</span><span class="o">:</span> <span class="s2">&quot;del&quot;</span><span class="p">,</span> </div><div class='line' id='LC22'>			<span class="mi">96</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span> <span class="mi">97</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span><span class="p">,</span> <span class="mi">98</span><span class="o">:</span> <span class="s2">&quot;2&quot;</span><span class="p">,</span> <span class="mi">99</span><span class="o">:</span> <span class="s2">&quot;3&quot;</span><span class="p">,</span> <span class="mi">100</span><span class="o">:</span> <span class="s2">&quot;4&quot;</span><span class="p">,</span> <span class="mi">101</span><span class="o">:</span> <span class="s2">&quot;5&quot;</span><span class="p">,</span> <span class="mi">102</span><span class="o">:</span> <span class="s2">&quot;6&quot;</span><span class="p">,</span> <span class="mi">103</span><span class="o">:</span> <span class="s2">&quot;7&quot;</span><span class="p">,</span></div><div class='line' id='LC23'>			<span class="mi">104</span><span class="o">:</span> <span class="s2">&quot;8&quot;</span><span class="p">,</span> <span class="mi">105</span><span class="o">:</span> <span class="s2">&quot;9&quot;</span><span class="p">,</span> <span class="mi">106</span><span class="o">:</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="mi">107</span><span class="o">:</span> <span class="s2">&quot;+&quot;</span><span class="p">,</span> <span class="mi">109</span><span class="o">:</span> <span class="s2">&quot;-&quot;</span><span class="p">,</span> <span class="mi">110</span><span class="o">:</span> <span class="s2">&quot;.&quot;</span><span class="p">,</span> <span class="mi">111</span> <span class="o">:</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span> </div><div class='line' id='LC24'>			<span class="mi">112</span><span class="o">:</span> <span class="s2">&quot;f1&quot;</span><span class="p">,</span> <span class="mi">113</span><span class="o">:</span> <span class="s2">&quot;f2&quot;</span><span class="p">,</span> <span class="mi">114</span><span class="o">:</span> <span class="s2">&quot;f3&quot;</span><span class="p">,</span> <span class="mi">115</span><span class="o">:</span> <span class="s2">&quot;f4&quot;</span><span class="p">,</span> <span class="mi">116</span><span class="o">:</span> <span class="s2">&quot;f5&quot;</span><span class="p">,</span> <span class="mi">117</span><span class="o">:</span> <span class="s2">&quot;f6&quot;</span><span class="p">,</span> <span class="mi">118</span><span class="o">:</span> <span class="s2">&quot;f7&quot;</span><span class="p">,</span> <span class="mi">119</span><span class="o">:</span> <span class="s2">&quot;f8&quot;</span><span class="p">,</span> </div><div class='line' id='LC25'>			<span class="mi">120</span><span class="o">:</span> <span class="s2">&quot;f9&quot;</span><span class="p">,</span> <span class="mi">121</span><span class="o">:</span> <span class="s2">&quot;f10&quot;</span><span class="p">,</span> <span class="mi">122</span><span class="o">:</span> <span class="s2">&quot;f11&quot;</span><span class="p">,</span> <span class="mi">123</span><span class="o">:</span> <span class="s2">&quot;f12&quot;</span><span class="p">,</span> <span class="mi">144</span><span class="o">:</span> <span class="s2">&quot;numlock&quot;</span><span class="p">,</span> <span class="mi">145</span><span class="o">:</span> <span class="s2">&quot;scroll&quot;</span><span class="p">,</span> <span class="mi">191</span><span class="o">:</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span> <span class="mi">224</span><span class="o">:</span> <span class="s2">&quot;meta&quot;</span></div><div class='line' id='LC26'>		<span class="p">},</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		<span class="nx">shiftNums</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC29'>			<span class="s2">&quot;`&quot;</span><span class="o">:</span> <span class="s2">&quot;~&quot;</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="o">:</span> <span class="s2">&quot;!&quot;</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="o">:</span> <span class="s2">&quot;@&quot;</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="o">:</span> <span class="s2">&quot;#&quot;</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="o">:</span> <span class="s2">&quot;$&quot;</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="o">:</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="o">:</span> <span class="s2">&quot;^&quot;</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;&quot;</span><span class="p">,</span> </div><div class='line' id='LC30'>			<span class="s2">&quot;8&quot;</span><span class="o">:</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="o">:</span> <span class="s2">&quot;(&quot;</span><span class="p">,</span> <span class="s2">&quot;0&quot;</span><span class="o">:</span> <span class="s2">&quot;)&quot;</span><span class="p">,</span> <span class="s2">&quot;-&quot;</span><span class="o">:</span> <span class="s2">&quot;_&quot;</span><span class="p">,</span> <span class="s2">&quot;=&quot;</span><span class="o">:</span> <span class="s2">&quot;+&quot;</span><span class="p">,</span> <span class="s2">&quot;;&quot;</span><span class="o">:</span> <span class="s2">&quot;: &quot;</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">,</span> <span class="s2">&quot;,&quot;</span><span class="o">:</span> <span class="s2">&quot;&lt;&quot;</span><span class="p">,</span> </div><div class='line' id='LC31'>			<span class="s2">&quot;.&quot;</span><span class="o">:</span> <span class="s2">&quot;&gt;&quot;</span><span class="p">,</span>  <span class="s2">&quot;/&quot;</span><span class="o">:</span> <span class="s2">&quot;?&quot;</span><span class="p">,</span>  <span class="s2">&quot;\\&quot;</span><span class="o">:</span> <span class="s2">&quot;|&quot;</span></div><div class='line' id='LC32'>		<span class="p">}</span></div><div class='line' id='LC33'>	<span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="kd">function</span> <span class="nx">keyHandler</span><span class="p">(</span> <span class="nx">handleObj</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="c1">// Only care when a possible input has been specified</span></div><div class='line' id='LC37'>		<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">data</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC39'>		<span class="p">}</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">origHandler</span> <span class="o">=</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">handler</span><span class="p">,</span></div><div class='line' id='LC42'>			<span class="nx">keys</span> <span class="o">=</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>		<span class="nx">handleObj</span><span class="p">.</span><span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>			<span class="c1">// Don&#39;t fire in text-accepting inputs that we didn&#39;t directly bind to</span></div><div class='line' id='LC46'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span> <span class="o">!==</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="sr">/textarea|select/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC47'>				 <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;text&quot;</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC49'>			<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>			<span class="c1">// Keypress represents characters, not special keys</span></div><div class='line' id='LC52'>			<span class="kd">var</span> <span class="nx">special</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="s2">&quot;keypress&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">specialKeys</span><span class="p">[</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="p">],</span></div><div class='line' id='LC53'>				<span class="nx">character</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="p">).</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC54'>				<span class="nx">key</span><span class="p">,</span> <span class="nx">modif</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">possible</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="c1">// check combinations (alt|ctrl|shift+anything)</span></div><div class='line' id='LC57'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;alt&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;alt+&quot;</span><span class="p">;</span></div><div class='line' id='LC59'>			<span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;ctrl&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;ctrl+&quot;</span><span class="p">;</span></div><div class='line' id='LC63'>			<span class="p">}</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>			<span class="c1">// TODO: Need to make sure this works consistently across platforms</span></div><div class='line' id='LC66'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;meta&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;meta+&quot;</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;shift&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;shift+&quot;</span><span class="p">;</span></div><div class='line' id='LC72'>			<span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">special</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">special</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC78'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">character</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC79'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">shiftNums</span><span class="p">[</span> <span class="nx">character</span> <span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>				<span class="c1">// &quot;$&quot; can be triggered as &quot;Shift+4&quot; or &quot;Shift+$&quot; or just &quot;$&quot;</span></div><div class='line' id='LC82'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">modif</span> <span class="o">===</span> <span class="s2">&quot;shift+&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>					<span class="nx">possible</span><span class="p">[</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">shiftNums</span><span class="p">[</span> <span class="nx">character</span> <span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC84'>				<span class="p">}</span></div><div class='line' id='LC85'>			<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">possible</span><span class="p">[</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>					<span class="k">return</span> <span class="nx">origHandler</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC90'>				<span class="p">}</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'>		<span class="p">};</span></div><div class='line' id='LC93'>	<span class="p">}</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span> <span class="s2">&quot;keydown&quot;</span><span class="p">,</span> <span class="s2">&quot;keyup&quot;</span><span class="p">,</span> <span class="s2">&quot;keypress&quot;</span> <span class="p">],</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC96'>		<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span> <span class="k">this</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">add</span><span class="o">:</span> <span class="nx">keyHandler</span> <span class="p">};</span></div><div class='line' id='LC97'>	<span class="p">});</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>
</div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/frago12/Basic-multiplayer-game/tree-list/96f55d13ab076e568b490d16b82bcb678f19a192">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <h4 id="blacktocat">GitHub Links</h4>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="http://training.github.com/">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <div id="legal">
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.06180s from fe17.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->


      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1340659530" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1340659530" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.06360' data-host='fe17'></span>
    
  </body>
</html>

