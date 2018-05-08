<div id="form-section" class="container-fluid signin">
    <a class="website-logo" href="{$WEB_ROOT}/index.php">
        <img class="logo" src="{$WEB_ROOT}/templates/{$template}/images/logo.png" alt="{$companyname}">
    </a>
    <div class="menu-holder">
        <ul class="main-links">
            <li><a class="normal-link" href="{$WEB_ROOT}/register.php">Don’t have an account?</a></li>
            <li><a class="sign-button" href="{$WEB_ROOT}/register.php">Sign up <i class="hno hno-arrow-right"></i></a></li>
        </ul>
    </div>
    <div class="row">
        <div class="form-holder">
            <div class="signin-signup-form">
                <div class="form-items{if $linkableProviders} with-social{/if}">
                    <div class="form-title">{include file="$template/includes/pageheader.tpl" title=$LANG.login desc="{$LANG.restrictedpage}"}</div>
                    {if $incorrect}
                        {include file="$template/includes/alert.tpl" type="error" msg=$LANG.loginincorrect textcenter=true}
                    {elseif $verificationId && empty($transientDataName)}
                        {include file="$template/includes/alert.tpl" type="error" msg=$LANG.verificationKeyExpired textcenter=true}
                    {elseif $ssoredirect}
                        {include file="$template/includes/alert.tpl" type="info" msg=$LANG.sso.redirectafterlogin textcenter=true}
                    {/if}
                    <div class="providerLinkingFeedback"></div>

                    <div class="row">
                        <div class="col-sm-12">
                            <form id="signinform" method="post" action="{$systemurl}dologin.php" role="form">
                                <div class="form-text">
                                    <input id="inputEmail" type="email" name="username" name="username" placeholder="{$LANG.enteremail}">
                                </div>
                                <div class="form-text">
                                    <input id="inputPassword" type="password" name="password" placeholder="{$LANG.clientareapassword}" autocomplete="off">
                                </div>
                                <div class="form-text text-holder">
                                    <input id="chkbox" type="checkbox" class="hno-checkbox" name="rememberme" /> <label for="chkbox">{$LANG.loginrememberme}</label>
                                </div>
                                <div class="form-button">
                                    <button id="login" type="submit" class="btn btn-default">{$LANG.loginbutton} <i class="hno hno-arrow-right"></i></button>
                                    <a href="pwreset.php" class="btn btn-link">{$LANG.forgotpw}</a>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-12">
                            {include file="$template/includes/linkedaccounts.tpl" linkContext="login" customFeedback=true}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-slider-holder">
            <div class="info-holder">
                <div class="img-text-slider">
                    <div>
                        <img src="{$WEB_ROOT}/templates/{$template}/images/img-b1.png" alt="">
                        <p>Hadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                    <div>
                        <img src="{$WEB_ROOT}/templates/{$template}/images/img-b2.png" alt="">
                        <p>Hadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                    <div>
                        <img src="{$WEB_ROOT}/templates/{$template}/images/img-b3.png" alt="">
                        <p>Hadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>