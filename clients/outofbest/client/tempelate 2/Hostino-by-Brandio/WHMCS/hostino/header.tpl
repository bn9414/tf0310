<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="{$charset}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{if $kbarticle.title}{$kbarticle.title} - {/if}{$pagetitle} - {$companyname}</title>

    {include file="$template/includes/head.tpl"}

    {$headoutput}

</head>
<body data-phone-cc-input="{$phoneNumberInputStyle}" {if $loginpage eq 1 or $templatefile eq "clientregister"}class="fullpage"{/if}>
{if $loginpage eq 0 and $templatefile ne "clientregister"}

{$headeroutput}

<section id="header">
    <div class="container">
        <ul class="top-nav">
            {if $languagechangeenabled && count($locales) > 1}
                <li>
                    <a href="#" class="choose-language" data-toggle="popover" id="languageChooser">
                        {$activeLocale.localisedName}
                        <b class="caret"></b>
                    </a>
                    <div id="languageChooserContent" class="hidden">
                        <ul>
                            {foreach $locales as $locale}
                                <li>
                                    <a href="{$currentpagelinkback}language={$locale.language}">{$locale.localisedName}</a>
                                </li>
                            {/foreach}
                        </ul>
                    </div>
                </li>
            {/if}
            {if $loggedin}
                <li>
                    <a href="#" data-toggle="popover" id="accountNotifications" data-placement="bottom">
                        {$LANG.notifications}
                        {if count($clientAlerts) > 0}<span class="label label-info">NEW</span>{/if}
                        <b class="caret"></b>
                    </a>
                    <div id="accountNotificationsContent" class="hidden">
                        <ul class="client-alerts">
                        {foreach $clientAlerts as $alert}
                            <li>
                                <a href="{$alert->getLink()}">
                                    <i class="fa fa-fw fa-{if $alert->getSeverity() == 'danger'}exclamation-circle{elseif $alert->getSeverity() == 'warning'}warning{elseif $alert->getSeverity() == 'info'}info-circle{else}check-circle{/if}"></i>
                                    <div class="message">{$alert->getMessage()}</div>
                                </a>
                            </li>
                        {foreachelse}
                            <li class="none">
                                {$LANG.notificationsnone}
                            </li>
                        {/foreach}
                        </ul>
                    </div>
                </li>
                <li class="primary-action">
                    <a href="{$WEB_ROOT}/logout.php" class="btn">
                        {$LANG.clientareanavlogout}
                    </a>
                </li>
            {else}
                <li>
                    <a href="{$WEB_ROOT}/clientarea.php">{$LANG.login}</a>
                </li>
                {if $condlinks.allowClientRegistration}
                    <li>
                        <a href="{$WEB_ROOT}/register.php">{$LANG.register}</a>
                    </li>
                {/if}
                <li class="primary-action">
                    <a href="{$WEB_ROOT}/cart.php?a=view" class="btn">
                        {$LANG.viewcart}
                    </a>
                </li>
            {/if}
            {if $adminMasqueradingAsClient || $adminLoggedIn}
                <li>
                    <a href="{$WEB_ROOT}/logout.php?returntoadmin=1" class="btn btn-logged-in-admin" data-toggle="tooltip" data-placement="bottom" title="{if $adminMasqueradingAsClient}{$LANG.adminmasqueradingasclient} {$LANG.logoutandreturntoadminarea}{else}{$LANG.adminloggedin} {$LANG.returntoadminarea}{/if}">
                        <i class="fa fa-sign-out"></i>
                    </a>
                </li>
            {/if}
        </ul>

        {if $assetLogoPath}
            <a href="{$WEB_ROOT}/index.php" class="logo"><img src="{$assetLogoPath}" alt="{$companyname}"></a>
        {else}
            <a href="{$WEB_ROOT}/index.php" class="logo logo-text"><img class="logo" src="{$WEB_ROOT}/templates/{$template}/images/logo.png" alt="{$companyname}"></a>
        {/if}

    </div>
</section>

<section id="main-menu">

    <nav id="nav" class="navbar navbar-default navbar-main" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="primary-nav">

                <ul class="nav navbar-nav">

                    {include file="$template/includes/navbar.tpl" navbar=$primaryNavbar}

                </ul>

                <ul class="nav navbar-nav navbar-right">

                    {include file="$template/includes/navbar.tpl" navbar=$secondaryNavbar}
                    <li><a class="chat-button" href="#">Chat now</a></li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div>
    </nav>

</section>
    
{if $templatefile == 'homepage'}
<div id="top-content" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div id="main-slider">
                    <div class="slide info-slide1" title="Welcome !">
                        <div class="image-holder"><img src="{$WEB_ROOT}/templates/{$template}/images/main-slide-img1.png" alt="" /></div>
                        <div class="text-holder">Take your career to the next level<br>
Get your website today.</div>
                        <div class="button-holder"><a href="signup.html" class="blue-button">Sign up now</a></div>
                    </div>
                    {if $registerdomainenabled || $transferdomainenabled}
                    <div class="slide domainsearch-slide" title="Search">
                        <div class="image-holder"><img src="{$WEB_ROOT}/templates/{$template}/images/bg1.png" alt="" /></div>
                        <div class="b-title">Find a personal or professional domain<br>
that stands out.</div>
                        <div class="domain-search-holder">
                            <form id="domain-search" method="post" action="domainchecker.php">
                                <input id="domain-text" type="text" name="domain" placeholder="Search a domain name here" />
                                <ul>
                                {if $registerdomainenabled}
                                    <li><input id="search-btn" type="submit" value="{$LANG.search}" /></li>
                                {/if}
                                {if $transferdomainenabled}
                                    <li><input id="transfer-btn" type="submit" name="transfer" class="transfer" value="{$LANG.domainstransfer}" /></li>
                                {/if}
                                </ul>
                            </form>
                            <div class="captcha-holder">{include file="$template/includes/captcha.tpl"}</div>
                        </div>
                    </div>
                    {/if}
                    <div class="slide info-slide2" title="Get started">
                        <div class="image-holder"><img src="{$WEB_ROOT}/templates/{$template}/images/main-slide-img2.png" alt="" /></div>
                        <div class="text-holder">Take your career to the next level<br>
Get your website today.</div>
                        <div class="button-holder"><a href="signup.html" class="blue-button">Sign up now</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="info" class="container-fluid">
    <canvas id="infobg" data-paper-resize="true"></canvas>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title">Regret-free choise<br>
The best of the best in all times!
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="info-text">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</div>
                
                <a href="#" class="white-green-shadow-button">All Features</a>
            </div>
        </div>
    </div>
</div>
<div id="features" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title">What makes Hostino the best choise for you?</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/clouds-light.png" alt="" /></div>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="mfeature-title">Uptime 100%. Guaranteed.</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-4 col-md-4">
                <div class="mfeature-box active">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/clouds-light.png" alt="" /></div>
                        <i class="fa fa-ticket"></i>
                    </div>
                    <div class="mfeature-title">Readymade templates</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-4 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/clouds-light.png" alt="" /></div>
                        <i class="fa fa-comments-o"></i>
                    </div>
                    <div class="mfeature-title">Amazing support</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <a class="light-blue-button" href="#">About us</a>
            </div>
        </div>    
    </div>
</div>
<div id="apps" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title" title="One-Click Install">+ The best applications on the web, with one click install.</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="apps-holder">
                    <div class="apps-links-holder">
                        <div class="app-icon-holder app-icon-holder1 opened" data-id="1">
                            <div class="app-icon"><img src="{$WEB_ROOT}/templates/{$template}/images/wordpress.png" alt="wordpress"></div>
                            <div class="app-title">Wordpress</div>
                        </div>
                        <div class="app-icon-holder app-icon-holder2" data-id="2">
                            <div class="app-icon"><img src="{$WEB_ROOT}/templates/{$template}/images/joomla.png" alt="joomla"></div>
                            <div class="app-title">Joomla</div>
                        </div>
                        <div class="app-icon-holder app-icon-holder3" data-id="3">
                            <div class="app-icon"><img src="{$WEB_ROOT}/templates/{$template}/images/drupal.png" alt="drupal"></div>
                            <div class="app-title">Drupal</div>
                        </div>
                        <div class="app-icon-holder app-icon-holder4" data-id="4">
                            <div class="app-icon"><img src="{$WEB_ROOT}/templates/{$template}/images/magento.png" alt="magento"></div>
                            <div class="app-title">Magento</div>
                        </div>
                    </div>
                    <div class="apps-details-holder">
                        <div class="app-details">
                            <div class="app-details1 show-details">
                                <div class="app-title">Wordpress Hosting</div>
                                <div class="app-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                            <div class="app-details2">
                                <div class="app-title">Joomla Hosting</div>
                                <div class="app-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                            <div class="app-details3">
                                <div class="app-title">Drupal Hosting</div>
                                <div class="app-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
                            </div>
                            <div class="app-details4">
                                <div class="app-title">Magento Hosting</div>
                                <div class="app-text">emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, mo enim ipsam voluptatem quia voluptas sit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="testimonials" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="row-title" title="Testimonials">Testimonials</div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div id="testimonials-slider">
                    <div>
                        <div class="details-holder">
                            <img class="photo" src="{$WEB_ROOT}/templates/{$template}/images/person1.jpg" alt="">
                            <h4>Chris Walker</h4>
                            <h5>CEO & CO-Founder @HelloBrandio</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas non ante non consequat. Aenean accumsan eros vel elit tristique, non sodales nunc luctus. Etiam vitae odio eget orci finibus auctor ut eget magna.</p>
                        </div>
                    </div>
                    <div>
                        <div class="details-holder">
                            <img class="photo" src="{$WEB_ROOT}/templates/{$template}/images/person2.jpg" alt="">
                            <h4>Chris Walker</h4>
                            <h5>CEO & CO-Founder @HelloBrandio</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas non ante non consequat. Aenean accumsan eros vel elit tristique, non sodales nunc luctus. Etiam vitae odio eget orci finibus auctor ut eget magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="more-features" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title" title="Great features">And more other great features</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature1.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">%99.9 Uptime</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature2.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">Domain Names</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature3.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">Envirmoent Friendly</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature4.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">Secure Servers</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature5.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">Page Builder</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <div class="icon-bg"><img src="{$WEB_ROOT}/templates/{$template}/images/cloud-light.png" alt="" /></div>
                        <div class="icon-img"><img src="{$WEB_ROOT}/templates/{$template}/images/feature6.png" alt="" /></div>
                    </div>
                    <div class="mfeature-title">E-commerce Ready</div>
                    <div class="mfeature-details">Mauris at libero sed justo pretium maximus ac non ex. Donec sit amet ultrices dolo.</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="bluebg-info" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text">Ready to rock with Hostino,<br>
Register Today.</div>
                <a href="signup.html" class="white-button">Register</a>
            </div>
        </div>
    </div>
</div>
{/if}
{include file="$template/includes/verifyemail.tpl"}
<div id="main-body-holder" class="container-fluid">
<section id="main-body">
    <div class="container{if $skipMainBodyContainer}-fluid without-padding{/if}">
        <div class="row">

        {if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}
            {if $primarySidebar->hasChildren() && !$skipMainBodyContainer}
                <div class="col-md-9 pull-md-right">
                    {include file="$template/includes/pageheader.tpl" title=$displayTitle desc=$tagline showbreadcrumb=true}
                </div>
            {/if}
            <div class="col-md-3 pull-md-left sidebar">
                {include file="$template/includes/sidebar.tpl" sidebar=$primarySidebar}
            </div>
        {/if}
        <!-- Container for main page display content -->
        <div class="{if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}col-md-9 pull-md-right{else}col-xs-12{/if} main-content">
            {if !$primarySidebar->hasChildren() && !$showingLoginPage && !$inShoppingCart && $templatefile != 'homepage' && !$skipMainBodyContainer}
                {include file="$template/includes/pageheader.tpl" title=$displayTitle desc=$tagline showbreadcrumb=true}
            {/if}
{/if}