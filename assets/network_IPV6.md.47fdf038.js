import{_ as e,c as i,o as l,a}from"./app.07f7b1f8.js";const v=JSON.parse('{"title":"IPV6","description":"","frontmatter":{},"headers":[{"level":2,"title":"留薪期大sb","slug":"留薪期大sb","link":"#留薪期大sb","children":[]},{"level":2,"title":"basic","slug":"basic","link":"#basic","children":[{"level":3,"title":"公网地址","slug":"公网地址","link":"#公网地址","children":[]},{"level":3,"title":"私网地址","slug":"私网地址","link":"#私网地址","children":[]},{"level":3,"title":"报头","slug":"报头","link":"#报头","children":[]}]},{"level":2,"title":"IPV6地址","slug":"ipv6地址","link":"#ipv6地址","children":[{"level":3,"title":"缩写规范","slug":"缩写规范","link":"#缩写规范","children":[]},{"level":3,"title":"IPv6地址分类","slug":"ipv6地址分类","link":"#ipv6地址分类","children":[]}]}],"relativePath":"network/IPV6.md","lastUpdated":1676469160000}'),d={name:"network/IPV6.md"},r=a('<h1 id="ipv6" tabindex="-1">IPV6 <a class="header-anchor" href="#ipv6" aria-hidden="true">#</a></h1><h2 id="留薪期大sb" tabindex="-1">留薪期大sb <a class="header-anchor" href="#留薪期大sb" aria-hidden="true">#</a></h2><h2 id="basic" tabindex="-1">basic <a class="header-anchor" href="#basic" aria-hidden="true">#</a></h2><h3 id="公网地址" tabindex="-1">公网地址 <a class="header-anchor" href="#公网地址" aria-hidden="true">#</a></h3><blockquote><p>唯一</p></blockquote><h3 id="私网地址" tabindex="-1">私网地址 <a class="header-anchor" href="#私网地址" aria-hidden="true">#</a></h3><blockquote><p>不同的网络可以使用相同的地址</p><p>私网地址不能出现在公网</p><p>NAT (地址转换) ： 将私网地址转换为公网地址发送</p></blockquote><h3 id="报头" tabindex="-1">报头 <a class="header-anchor" href="#报头" aria-hidden="true">#</a></h3><ul><li>Version: 版本号</li><li>Traffic Class: 流类别，用于进行限速</li><li>Flow Label: 流标签，用于进行限速</li><li>Payload Length: 有效载荷长度，总长度</li><li>Next Header: 下一个包头，长度为8bit。该字段定义紧跟在IPv6基本包头后面的第一个扩展包头</li><li>Hop Limit: 跳数限制，相当于Ipv6中的TTL值</li><li>Source Address: 源地址</li><li>Destination Address: 目的地址</li></ul><h2 id="ipv6地址" tabindex="-1">IPV6地址 <a class="header-anchor" href="#ipv6地址" aria-hidden="true">#</a></h2><ul><li>Ipv6地址的长度为128bit</li><li>IPv6 地址通过 <code>:</code> 分割，共8段，一个十六进制可以转成四个二进制数</li><li>网络前缀： 相当于IPv4中的网络位</li><li>接口标识：相当于主机位</li><li>EUI-64 <ul><li>将 MAC 地址第<code>7bit</code>取反</li><li>在 MAC 地址中间加入 FFFE ，然后再转成16进制</li></ul></li></ul><h3 id="缩写规范" tabindex="-1">缩写规范 <a class="header-anchor" href="#缩写规范" aria-hidden="true">#</a></h3><ul><li>每组 <code>16bit</code> 的单元中的前导0可以省略，但是如果 <code>16bit</code> 单元的所有比特都为0,那么至少要保留一个 <code>0</code> 字符；拖尾的0不能被省略。</li><li>一个或多个连续的 <code>16bit</code> 字符为<code>0</code>时,可用 <code>::</code> 表示，但整个IPv6地址缩写中只允许有一个<code>::</code>。</li></ul><h3 id="ipv6地址分类" tabindex="-1">IPv6地址分类 <a class="header-anchor" href="#ipv6地址分类" aria-hidden="true">#</a></h3><ul><li>单播地址 <ul><li>全球单播地址 2000::/3 <ul><li>相当于公网地址</li><li>前三 <code>bit</code> 为 <code>001</code> , 也就是网络前缀的第一个数是2或3</li></ul></li><li>唯一本地地址 <ul><li>相当于私网地址</li><li>前 <code>8bit</code> 为 <code>11111101</code> , 前缀为 <code>FD00/8</code></li></ul></li><li>链路本地地址 <ul><li>有效范围是本地链路，前缀为<code>FE80::/10</code></li><li>用于直连通信</li></ul></li><li>特殊地址</li><li>其他单播地址</li></ul></li><li>组播地址</li><li>任播地址</li></ul><h4 id="常见单播地址" tabindex="-1">常见单播地址 <a class="header-anchor" href="#常见单播地址" aria-hidden="true">#</a></h4><h5 id="gua" tabindex="-1">GUA <a class="header-anchor" href="#gua" aria-hidden="true">#</a></h5><p>GUA(Global Unicast Address，全球单播地址)，也被称为可聚合全球单播地址。该类地址全球唯一，用于需要有互联网访问需求的主机，相当于IPv4的公网地址。</p><h5 id="ula" tabindex="-1">ULA <a class="header-anchor" href="#ula" aria-hidden="true">#</a></h5><p>唯一本地地址 是IPv6死亡地址，只能够在内网中使用该地址。</p><h5 id="lla" tabindex="-1">LLA <a class="header-anchor" href="#lla" aria-hidden="true">#</a></h5><p>链路本地地址 是IPv6中另一种应用范围受限的</p>',22),c=[r];function t(h,o,n,s,u,b){return l(),i("div",null,c)}const _=e(d,[["render",t]]);export{v as __pageData,_ as default};
