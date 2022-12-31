import{_ as s,c as n,o as a,a as l}from"./app.535c112c.js";const C=JSON.parse('{"title":"what-is-vitepress","description":"","frontmatter":{},"headers":[],"relativePath":"guide/what-is-vitepress.md","lastUpdated":1672475773000}'),p={name:"guide/what-is-vitepress.md"},e=l(`<h1 id="what-is-vitepress" tabindex="-1">what-is-vitepress <a class="header-anchor" href="#what-is-vitepress" aria-hidden="true">#</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownIt</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Custom theme for syntax highlighting.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// You can use an existing theme.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Or add your own theme.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">IThemeRegistration</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">light</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IThemeRegistration</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">dark</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IThemeRegistration</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Enable line numbers in code block.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineNumbers</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// markdown-it-anchor plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/valeriangalliat/markdown-it-anchor#usage</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">anchor</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">anchorPlugin</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">AnchorOptions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// markdown-it-attrs plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/arve0/markdown-it-attrs</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">attrs</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">leftDelimiter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rightDelimiter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">allowedAttributes</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">disable</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// specify default language for syntax highlighter</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">defaultHighlightLang</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// @mdit-vue/plugin-frontmatter plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter#options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">frontmatter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FrontmatterPluginOptions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// @mdit-vue/plugin-headers plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers#options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeadersPluginOptions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// @mdit-vue/plugin-sfc plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc#options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sfc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SfcPluginOptions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// @mdit-vue/plugin-toc plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TocPluginOptions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Configure the Markdown-it instance.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">md</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownIt</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,2),o=[e];function t(r,c,i,y,F,D){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{C as __pageData,m as default};
