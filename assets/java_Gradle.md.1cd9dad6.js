import{_ as s,c as n,o as a,a as l}from"./app.e0128117.js";const u=JSON.parse('{"title":"Gradle 工具使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"Gradle 构建过程","slug":"gradle-构建过程","link":"#gradle-构建过程","children":[]},{"level":2,"title":"Gradle 配置文件","slug":"gradle-配置文件","link":"#gradle-配置文件","children":[]}],"relativePath":"java/Gradle.md","lastUpdated":1673514554000}'),p={name:"java/Gradle.md"},e=l(`<h1 id="gradle-工具使用" tabindex="-1">Gradle 工具使用 <a class="header-anchor" href="#gradle-工具使用" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Gradle是一款Google推出的 基于JVM、 通用灵活的 项目构建工具， 支持Maven，JCenter多种第三方仓库;支持传递性依赖管理、废弃了繁杂的xml文件，转而使用 简洁的 、 支持多种语言 (例如：java、groovy等)的 build脚本文件 。</p></div><h2 id="gradle-构建过程" tabindex="-1">Gradle 构建过程 <a class="header-anchor" href="#gradle-构建过程" aria-hidden="true">#</a></h2><blockquote><p>Gradle 的构建过程是通⽤的，任何由 Gradle 构建的项⽬都遵循这个过程。</p></blockquote><p>Gradle 构建分为三个阶段，每个阶段都有⾃⼰的职责，每个阶段都完成⼀部分任务，前⼀阶段的成果是下⼀阶 段继续执⾏的前提：</p><ul><li>Initialization --&gt; 初始化阶段。按顺序执⾏ init.gradle -&gt; settings.gradle 脚本，⽣成 Gradle、Setting、Project 对象</li><li>Configuration --&gt; 编译阶段，也叫配置阶段。按顺序执⾏ root build.gradle -&gt; ⼦项⽬ build.gradle 脚本，⽣成 Task 执⾏流程图</li><li>Execution --&gt; 执⾏阶段。按照 Task 执⾏图顺序运⾏每⼀个 Task，完成⼀个个步骤，⽣成最终 APK ⽂件</li></ul><h2 id="gradle-配置文件" tabindex="-1">Gradle 配置文件 <a class="header-anchor" href="#gradle-配置文件" aria-hidden="true">#</a></h2><div class="language-groovy line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">buildscript {</span><span style="color:#8B949E;">//构建gradle脚本自身需要的资源，可以声明的资源包括依赖项、第三方插件、maven仓库地址等</span></span>
<span class="line"><span style="color:#C9D1D9;">    ext{</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//统一版本管理</span></span>
<span class="line"><span style="color:#C9D1D9;">        lombokVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;1.18.20&#39;</span><span style="color:#8B949E;">//lombok版本</span></span>
<span class="line"><span style="color:#C9D1D9;">        springBootVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;3.0.1&#39;</span><span style="color:#8B949E;">//spring boot 版本</span></span>
<span class="line"><span style="color:#C9D1D9;">        springCloudVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;2022.0.0&#39;</span><span style="color:#8B949E;">//spring cloud 版本</span></span>
<span class="line"><span style="color:#C9D1D9;">        springCloudAlibabaVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;2.2.5.RELEASE&#39;</span><span style="color:#8B949E;">//spring cloud alibaba 版本</span></span>
<span class="line"><span style="color:#C9D1D9;">        mysqlVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;8.0.13&#39;</span><span style="color:#8B949E;">//mysql版本</span></span>
<span class="line"><span style="color:#C9D1D9;">        mybatisSpringBootVersion </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;2.1.1&#39;</span><span style="color:#8B949E;">//mybatis版本</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//设置仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">    repositories {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//从前到后顺序执行，找不到就往后找。</span></span>
<span class="line"><span style="color:#C9D1D9;">        mavenLocal()</span><span style="color:#8B949E;">//本地仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">        maven { url </span><span style="color:#A5D6FF;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#C9D1D9;"> }</span><span style="color:#8B949E;">//镜像仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">        mavenCentral()</span><span style="color:#8B949E;">//官方仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    dependencies {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//spring-boot-gradle插件，方便版本管理</span></span>
<span class="line"><span style="color:#C9D1D9;">        classpath(</span><span style="color:#A5D6FF;">&quot;org.springframework.boot:spring-boot-gradle-plugin:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">springBootVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">//全局配置，包括root和其子项目</span></span>
<span class="line"><span style="color:#C9D1D9;">allprojects {</span></span>
<span class="line"><span style="color:#C9D1D9;">    apply </span><span style="color:#79C0FF;">plugin</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;java&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">    group </span><span style="color:#A5D6FF;">&#39;com.lin&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">    version </span><span style="color:#A5D6FF;">&#39;1.0-SNAPSHOT&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">    sourceCompatibility </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">17</span><span style="color:#8B949E;">//java版本</span></span>
<span class="line"><span style="color:#C9D1D9;">    targetCompatibility </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">17</span><span style="color:#8B949E;">//java版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    tasks</span><span style="color:#FF7B72;">.</span><span style="color:#C9D1D9;">withType(</span><span style="color:#FF7B72;">JavaCompile</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        options</span><span style="color:#FF7B72;">.</span><span style="color:#C9D1D9;">encoding </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;UTF-8&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    repositories {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//从前到后顺序执行，找不到就往后找。</span></span>
<span class="line"><span style="color:#C9D1D9;">        mavenLocal()</span><span style="color:#8B949E;">//本地仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">        maven { url </span><span style="color:#A5D6FF;">&#39;https://maven.aliyun.com/repository/public&#39;</span><span style="color:#C9D1D9;"> }</span><span style="color:#8B949E;">//镜像仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">        mavenCentral()</span><span style="color:#8B949E;">//官方仓库</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">//配置所有子项目</span></span>
<span class="line"><span style="color:#C9D1D9;">subprojects {</span></span>
<span class="line"><span style="color:#C9D1D9;">    apply </span><span style="color:#79C0FF;">plugin</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;io.spring.dependency-management&#39;</span><span style="color:#8B949E;">//版本管理插件</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//dependencyManagement版本统一管理，类似maven的dependencyManagement</span></span>
<span class="line"><span style="color:#C9D1D9;">    dependencies {</span></span>
<span class="line"><span style="color:#C9D1D9;">        annotationProcessor </span><span style="color:#A5D6FF;">&#39;org.projectlombok:lombok&#39;</span><span style="color:#8B949E;">//注释处理器</span></span>
<span class="line"><span style="color:#C9D1D9;">        implementation </span><span style="color:#A5D6FF;">&#39;org.projectlombok:lombok&#39;</span><span style="color:#8B949E;">//引入lombok依赖</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    dependencyManagement{</span></span>
<span class="line"><span style="color:#C9D1D9;">        dependencies {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#8B949E;">//统一版本管理</span></span>
<span class="line"><span style="color:#C9D1D9;">            dependency </span><span style="color:#A5D6FF;">&quot;org.projectlombok:lombok:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">lombokVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">            dependency </span><span style="color:#A5D6FF;">&quot;mysql:mysql-connector-java:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">mysqlVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">            dependency </span><span style="color:#A5D6FF;">&quot;org.mybatis.spring.boot:mybatis-spring-boot-starter:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">mybatisSpringBootVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        imports {</span></span>
<span class="line"><span style="color:#C9D1D9;">            mavenBom </span><span style="color:#A5D6FF;">&quot;org.springframework.boot:spring-boot-dependencies:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">springBootVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span><span style="color:#8B949E;">//Spring Boot</span></span>
<span class="line"><span style="color:#C9D1D9;">            mavenBom </span><span style="color:#A5D6FF;">&quot;org.springframework.cloud:spring-cloud-dependencies:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">springCloudVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span><span style="color:#8B949E;">//Spring Cloud</span></span>
<span class="line"><span style="color:#C9D1D9;">            mavenBom </span><span style="color:#A5D6FF;">&quot;com.alibaba.cloud:spring-cloud-alibaba-dependencies:</span><span style="color:#FF7B72;">\${</span><span style="color:#A5D6FF;">springCloudAlibabaVersion</span><span style="color:#FF7B72;">}</span><span style="color:#A5D6FF;">&quot;</span><span style="color:#8B949E;">//Spring Cloud Alibaba</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">project(</span><span style="color:#A5D6FF;">&quot;user-service&quot;</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">   dependencies {</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;org.springframework.boot:spring-boot-starter-web&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;mysql:mysql-connector-java&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;org.mybatis.spring.boot:mybatis-spring-boot-starter&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">   }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">project(</span><span style="color:#A5D6FF;">&quot;order-service&quot;</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">   dependencies {</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;org.springframework.boot:spring-boot-starter-web&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;mysql:mysql-connector-java&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;org.mybatis.spring.boot:mybatis-spring-boot-starter&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;org.springframework.cloud:spring-cloud-starter-openfeign&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">       implementation </span><span style="color:#A5D6FF;">&#39;io.github.openfeign:feign-httpclient&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">   }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div>`,8),o=[e];function r(c,t,i,b,y,D){return a(),n("div",null,o)}const F=s(p,[["render",r]]);export{u as __pageData,F as default};
