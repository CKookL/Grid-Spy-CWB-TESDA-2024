<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"type="text/javascript"></script>
    <!-- Compiled and minified JavaScript CDN -->
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="materialize.css" />
    <link rel="shortcut icon" href="img/Icon.png" type="image/x-icon">
    <title>Grid & Spy</title>
  </head>
  <body>
    <div class="navbar-fixed">
    <nav>
      <img src="img/Icon.png" alt="" style="height: 35px; margin-right: 20px">
      <h5 class="white-text" style="letter-spacing: 2px; font-weight: 800;">GRID & SCROLLSPY</h5>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right brand-logo"><i class="material-icons">menu</i></a>
       <ul class="section table-of-contents" style="color: aliceblue;">
        <li><a href="#container">Container</a></li>
        <li><a href="#introduction" class="">Introduction</a></li>
        <li><a href="#offsets" class="">Offsets</a></li>
        <li><a href="#push" class="">Push and Pull</a></li>
        <li><a href="#layouts" class="">Creating Layouts</a></li>
        <li><a href="#responsive" class="">Responsive Layouts</a></li>
      </ul>
    </nav>
    </div>

    <ul class="section sidenav" id="mobile-demo" style="color: aliceblue;">
      <li><a href="#container">Container</a></li>
      <li><a href="#introduction" class="">Introduction</a></li>
      <li><a href="#offsets" class="">Offsets</a></li>
      <li><a href="#push" class="">Push and Pull</a></li>
      <li><a href="#layouts" class="">Creating Layouts</a></li>
      <li><a href="#responsive" class="">Responsive Layouts</a></li>
    </ul>

    <!-- Container -->
    <div class="container valign-wrapper row section scrollspy" id="container" style="margin-top: 50px;">
      <div class="col s10 m8 l8 center" style="margin: auto; border:none;; box-shadow:none;">
        <h5>Container</h5>
      <p>The container class is not strictly part of the grid but is important in laying out content. It allows you to center your page content. The container class is set to ~70% of the window width. It helps you center and contain your page content. We use the container to contain our body content.</p>
      <h5>Demo</h5>
      <p>Try the button below to see what the page looks like without containers.</p>
      <a class="btn">TURN OFF CONTAINER</a>
      </div>
    </div>



    <!-- Grids Example -->
    <div class="container row" style="margin-top: 50px;">

      <!-- INTRODUCTION -->
      <div class="col s12 section scrollspy" id="introduction" style="margin: 0 auto 100px; padding: 20px">
        <h4>Introduction</h4>
        <p>We are using a standard 12 column fluid responsive grid system. The grid helps you layout your page in an ordered, easy fashion.</p>
        <p>Take a look at this section to quickly understand how the grid works!</p>
        <h5>12 Columns</h5>

        <div class="row center white-text" style="margin: auto; padding:5px;">
          <div class="col s1">1</div>
          <div class="col s1">2</div>
          <div class="col s1">3</div>
          <div class="col s1">4</div>
          <div class="col s1">5</div>
          <div class="col s1">6</div>
          <div class="col s1">7</div>
          <div class="col s1">8</div>
          <div class="col s1">9</div>
          <div class="col s1">10</div>
          <div class="col s1">11</div>
          <div class="col s1">12</div>
        </div>

        <pre class=" language-markup"><code class=" language-markup" style="font-family: 'Inconsolata';">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment" spellcheck="true">&lt;!-- Page Content goes here --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
                </code></pre>
        <p>Note: For now, just know that the <span class="grey lighten-5">s1</span> stands for small-1 which in plain English means "1 column on small screens".</p>
        <br><br>
        <h5>Columns live inside Rows</h5>
        <p>Remember when you are creating your layout that all columns must be contained inside a row and that you must add the <span class="grey lighten-5">col</span> class to your inner divs to make them into columns</p>
        <div class="row center white-text" style="margin: auto; padding:5px;">
          <div class="col s12 sec1">This div is 12-columns wide on all screen sizes</div>
          <div class="col s6 sec1">6-columns (one-half)</div>
          <div class="col s6 sec1">6-columns (one-half)</div>
        </div>

        <pre class=" language-markup"><code class=" language-markup">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This div is 12-columns wide on all screen sizes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>6-columns (one-half)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>6-columns (one-half)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                </code></pre>

      </div>
      <!----------------------->
      

      <!-- OFFSETS -->
      <div class="col s12 section scrollspy" id="offsets" style="margin: 0 auto 100px; padding: 20px">
        <h4>Offsets</h4>
        <p>To offset, simply add <span class="grey lighten-5">offset-s2</span> to the class where <span class="grey lighten-5"  >s</span> signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to offset by.</p>


        <div class="row">
          <div class="col s12 sec1">This div is 12-columns wide on all screen sizes</div>
          <div class="col s6 offset-s6">6-columns (offset-by-6)</div>
        </div>

        <pre class=" language-markup"><code class=" language-markup">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This div is 12-columns wide on all screen sizes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s6 offset-s6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>6-columns (offset-by-6)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                </code></pre>
                
      </div>
      <!----------------------->

      <!-- PUSH PULL -->
      <div class="col s12 section scrollspy" id="push" style="margin: 0 auto 100px; padding: 20px">
          <h4>Push Pull</h4>
          <p>You can easily change the order of your columns with push and pull. Simply add <span class="grey lighten-5">push-s2</span> or <span class="grey lighten-5">pull-s2</span> to the class where <span class="grey lighten-5">s</span> signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to push or pull by.</p>
            
          <div class="row">
            <div class="col s7 push-s5 sec1">This div is 7-columns wide on pushed to the right by 5-columns.</div>
            <div class="col s5 pull-s7 sec1">5-columns wide pulled to the left by 7-columns.</div>
          </div>
            
          <pre class=" language-markup"><code class=" language-markup">
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s7 push-s5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This div is 7-columns wide on pushed to the right by 5-columns.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s5 pull-s7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>5-columns wide pulled to the left by 7-columns.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  </code></pre>
      </div>
      <!----------------------->

       <!-- CREATING LAYOUT -->
       <div class="col s12 section scrollspy" id="layouts" style="margin: 0 auto 100px; padding: 20px">
        <h4>Creating Layouts</h4>
        <p>Here we will show you how to create some commonly used layouts with our grid system. Hopefully these will get you more comfortable with laying out elements. To keep these demos simple, the ones here will not be responsive.</p>

        <div class="row">
          <div class="col s12 m6" style="margin-top: 20px; border:none; box-shadow:none;">
            <h5>Section</h5>
            <p>The section class is used for simple top and bottom padding. Just add the <span class="grey lighten-5">section </span> class to your div's containing large blocks of content.</p>
          </div>
          <div class="col s12 m6" style="margin-top: 20px; border:none; box-shadow:none;">
            <h5>Divider</h5>
            <p>Dividers are 1 pixel lines that help break up your content. Just add the <span class="grey lighten-5">divider</span> to a div in between your content.</p>
          </div>
        </div>
        
        <h5>Example Sections and Dividers</h5>
        <div class="divider blue"></div>
        <div class="section">
          <h5>Section 1</h5>
          <p>Stuff</p>
        </div>
        <div class="divider blue"></div>
        <div class="section">
          <h5>Section 2</h5>
          <p>Stuff</p>
        </div>
        <div class="divider blue"></div>
        <div class="section">
          <h5>Section 3</h5>
          <p>Stuff</p>
        </div>
              
        <pre class=" language-markup"><code class=" language-markup">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divider<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Section 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Stuff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divider<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Section 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Stuff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>divider<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Section 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Stuff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>


        <h5 style="margin-top: 30px;">Example Promotion Table</h5>
        <p>If we want 3 divs that are equal size, we define the divs with a width of 4-columns, as 4+4+4 nicely adds up to 12. Inside those divs, we can put our content. Take our front page content for example. We've modified it slightly for the sake of this example.</p>
        <div class="row">
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="material-icons">flash_on</i>
              <h5 class="promo-caption">Speeds up development</h5>
              <p class="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
            </div>
          </div>
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="material-icons">group</i>
              <h5 class="promo-caption">User Experience Focused</h5>
              <p class="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
            </div>
          </div>
          <div class="col s4">
            <div class="center promo promo-example">
              <i class="material-icons">settings</i>
              <h5 class="promo-caption">Easy to work with</h5>
              <p class="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
            </div>
          </div>
        </div>

        <pre class=" language-markup"><code class=" language-markup">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment" spellcheck="true">&lt;!-- Promo Content 1 goes here --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment" spellcheck="true">&lt;!-- Promo Content 2 goes here --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment" spellcheck="true">&lt;!-- Promo Content 3 goes here --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>

          <br>
          <h5 class="margin-top: 40px;">Example Side Navigation Layout</h5>
          <p>You can see how easy it is to create layouts using the grid system. Just remember to make sure your column numbers add up to 12 for an even layout.</p>

          <div class="row">
            <div class="col s12">
              <div class="browser-window">
                <div class="top-bar">
                  <div class="circles">
                     <div id="close-circle" class="circle"></div>
                     <div id="minimize-circle" class="circle"></div>
                     <div id="maximize-circle" class="circle"></div>
                  </div>
                </div>
                <div class="content">
                  <div class="row">

                    <div id="site-layout-example-top" class="col s12">
                      <!-- <p class="flat-text-logo"></p> -->
                    </div>
                    <div id="site-layout-example-left" class="col s3">
                      <p class="flat-text-header"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                    <div id="site-layout-example-right" class="col s9">
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <pre class=" language-markup"><code class=" language-markup">
            <span class="token comment" spellcheck="true">&lt;!-- Navbar goes here --&gt;</span>
            <span class="token comment" spellcheck="true">&lt;!-- Page Layout here --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>   
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token comment" spellcheck="true">&lt;!-- Grey navigation panel --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s9<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token comment" spellcheck="true">&lt;!-- Teal page content  --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre> 
    </div>
     <!----------------------->

    <!-- RESPONSIVE LAYOUT -->
     <div class="col s12 section scrollspy" id="responsive" style="margin: 0 auto 100px; padding: 20px">
      <h4>Responsive Layouts</h4>
      <p>Above we showed you how to layout elements using our grid system. Now we'll show you how to design your layouts so that they look great on all screen sizes.</p>
      
      <table class="highlight">
        <thead>
          <tr>
              <th></th>
              <th data-field="id">Mobile Devices <br>&lt;= 600px</th>
              <th data-field="name">Tablet Devices <br>&gt; 600px</th>
              <th data-field="price">Desktop Devices <br>&gt; 992px</th>
              <th data-field="price">Large Desktop Devices <br>&gt; 1200px</th>
          </tr>
        </thead>
          <tbody>
          <tr>
            <td><strong>Class Prefix</strong></td>
            <td><code class=" language-markup">.s</code></td>
            <td><code class=" language-markup">.m</code></td>
            <td><code class=" language-markup">.l</code></td>
            <td><code class=" language-markup">.xl</code></td>
          </tr>
          <tr>
            <td><strong>Container Width</strong></td>
            <td>90%</td>
            <td>85%</td>
            <td>70%</td>
            <td>70%</td>
          </tr>
          <tr>
            <td><strong>Number of Columns</strong></td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>

      <h5 style="margin-top: 40px;">Adding Responsiveness</h5>
        <p>In the previous examples, we only defined the size for small screens using <span class="grey lighten-5">"col s12"</span>. This is fine if we want a fixed layout since the rules propagate upwards. By just saying s12, we are essentially saying <span class="grey lighten-5">"col s12 m12 l12" </span>. But by explicitly defining the size we can make our website more responsive</p>

        
    <div class="row">
      <div class="grid-example col s12 sec1">I am always full-width (col s12)</div>
      <div class="grid-example col s12 m6 sec1  ">I am full-width on mobile (col s12 m6)</div>
    </div>

    <pre class=" language-markup"><code class=" language-markup">
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid-example col s12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>I am always full-width (col s12)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid-example col s12 m6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flow-text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>I am full-width on mobile (col s12 m6)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>


      <h5 style="margin-top: 40px">Responsive Side Navigation Layout</h5>
      <p>In this example below, we take the same layout from above, but we make it responsive by defining how many columns the div should take up on each screen size. Try resizing your browser and watch the layout change below.</p>
      <div class="row">
        <div class="col s12" style="box-shadow: none; border:none;">
          <div class="browser-window">
            <div class="top-bar">
              <div class="circles">
                 <div id="close-circle" class="circle"></div>
                 <div id="minimize-circle" class="circle"></div>
                 <div id="maximize-circle" class="circle"></div>
              </div>
            </div>
            <div class="content">
              <div class="row">

                <div id="site-layout-example-top" class="col s12">
                  <!-- <p class="flat-text-logo"></p> -->
                </div>
                <div id="site-layout-example-left" class="col s12 m4 l3">
                  <p class="flat-text-header"></p>
                  <p class="flat-text"></p>
                  <p class="flat-text"></p>
                </div>
                <div id="site-layout-example-right" class="col s12 m8 l9">
                  <p class="flat-text"></p>
                  <p class="flat-text"></p>
                  <p class="flat-text"></p>
                  <p class="flat-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <pre class=" language-markup"><code class=" language-markup">
          <span class="token comment" spellcheck="true">&lt;!-- Navbar goes here --&gt;</span>
          <span class="token comment" spellcheck="true">&lt;!-- Page Layout here --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m4 l3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment" spellcheck="true">&lt;!-- Note that "m4 l3" was added --&gt;</span>
              <span class="token comment" spellcheck="true">&lt;!-- Grey navigation panel
                    This content will be:
                3-columns-wide on large screens,
                4-columns-wide on medium screens,
                12-columns-wide on small screens  --&gt;</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m8 l9<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment" spellcheck="true">&lt;!-- Note that "m8 l9" was added --&gt;</span>
              <span class="token comment" spellcheck="true">&lt;!-- Teal page content
                    This content will be:
                9-columns-wide on large screens,
                8-columns-wide on medium screens,
                12-columns-wide on small screens  --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>

            <h5 style="margin-top: 40px;">More Responsive Grid Examples</h5>
            <div class="row" style="padding: 0 20px">
              <div class="col grid-example s12 sec1">s12</div>
              <div class="col grid-example s12 m4 l2 sec1">s12 m4 l2</div>
              <div class="col grid-example s12 m4 l8 sec1 " >s12 m4 l8</div>
              <div class="col grid-example s12 m4 l2 sec1">s12 m4 l2</div>
              <div class="col grid-example s12 m6 l3 sec1">s12 m6 l3</div>
              <div class="col grid-example s12 m6 l3 sec1">s12 m6 l3</div>
              <div class="col grid-example s12 m6 l3 sec1">s12 m6 l3</div>
              <div class="col grid-example s12 m6 l3 sec1">s12 m6 l3</div>
            </div>

            <pre class=" language-markup"><code class="language-markup">
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m4 l2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m4 l8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m4 l2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m6 l3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m6 l3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m6 l3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m6 l3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m6 l3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m6 l3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col s12 m6 l3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>s12 m6 l3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                        </code></pre>
      </div>


           <!----------------------->


  </div>
    

      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="function.js"></script>

  
  </body>
</html>