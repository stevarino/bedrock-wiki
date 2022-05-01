import{_ as c,c as u,a,w as s,e as t,b as e,d as n,r as i,o as d}from"./404.md.c8243b83.js";var _="/assets/images/visuals/animated-entity-texture/result.gif";const H='{"title":"Entity Texture Animations","description":"","frontmatter":{"title":"Entity Texture Animations","mentions":["MedicalJewel105"],"tags":["guide","intermediate"]},"headers":[{"level":2,"title":"Whats on this page?","slug":"whats-on-this-page"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Textures","slug":"textures"},{"level":2,"title":"Materials","slug":"materials"},{"level":2,"title":"Client Entity File","slug":"client-entity-file"},{"level":2,"title":"Render Controllers","slug":"render-controllers"},{"level":2,"title":"Testing","slug":"testing"},{"level":2,"title":"Download Example","slug":"download-example"}],"relativePath":"visuals/animated-entity-texture.md"}',m={},h=t('<h2 id="whats-on-this-page" tabindex="-1">Whats on this page? <a class="header-anchor" href="#whats-on-this-page" aria-hidden="true">#</a></h2><p>From this page you will learn how to make an animated texture for an entity. Animated, like a flipbook texture for blocks.</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p>This page is based on content by <a href="https://www.youtube.com/channel/UC-ljddYkFdTQl-MVEaVvbuQ" target="_blank" rel="noopener noreferrer">AgentMindStorm</a>.</p>',4),b=e("h2",{id:"textures",tabindex:"-1"},[n("Textures "),e("a",{class:"header-anchor",href:"#textures","aria-hidden":"true"},"#")],-1),k=e("p",null,"First let's draw some new texture frames for our entity. In this tutorial it will be a cow, which is looking around.",-1),f=e("p",null,"We need to place our textures vertically, like for blocks in flipbook textures. In this case we have 4 frames.",-1),g=e("h2",{id:"materials",tabindex:"-1"},[n("Materials "),e("a",{class:"header-anchor",href:"#materials","aria-hidden":"true"},"#")],-1),w=e("p",null,[n("We will need to modify materials in this guide. However due to render dragon materials became outdated, so "),e("strong",null,"use it at your own risk"),n(".")],-1),y=e("p",null,[n("To use animated texture, we need to change the entity material to one, that has "),e("code",null,"USE_UV_ANIM"),n(" property. Let's simply add a new material:")],-1),v=n("RP/materials/entity.material"),T=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;custom_animated:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token string">&quot;USE_UV_ANIM&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Or you can add this to existing ones, check default material file.</p>`,2),x=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;+defines&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;USE_UV_ANIM&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),q=n("Download default entity.material file"),A=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"WARNING"),e("p",null,"It is not that easy for every entity! Some entities have multiple materials and if you want to make its texture animated, you will need to add this property to all materials of this entity.")],-1),S=e("h2",{id:"client-entity-file",tabindex:"-1"},[n("Client Entity File "),e("a",{class:"header-anchor",href:"#client-entity-file","aria-hidden":"true"},"#")],-1),C=e("p",null,"Before we go next, we need to define a new material in our client entity file.",-1),E=n("RP/entity/cow.json#description"),I=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom_animated&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="render-controllers" tabindex="-1">Render Controllers <a class="header-anchor" href="#render-controllers" aria-hidden="true">#</a></h2><p>After that all, we need to edit a render controller.</p><p>Here we will add <code>uv_anim</code> component with offset and scale properties:</p>`,4),V=n("RP/entity/cow.entity.json#description"),N=t(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;uv_anim&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;math.mod(math.floor(query.life_time * frames_per_second),frame_count) / frame_count&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token string">&quot;1 / frame_count&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Where <code>frames_per_second</code> is a count of frames you want to change in one second and <code>frame_count</code> is a total frame count. This formula calculates the offset and the size of the texture depending on life time.</p><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><p>Now, it is time to test your creation!</p><p><img src="`+_+'" alt=""></p><h2 id="download-example" tabindex="-1">Download Example <a class="header-anchor" href="#download-example" aria-hidden="true">#</a></h2>',6),P=n("Download");function R(D,B,M,W,j,U){const l=i("YouTubeEmbed"),p=i("WikiImage"),o=i("CodeHeader"),r=i("BButton");return d(),u("div",null,[h,a(l,{id:"F6e-w1rCEi4"}),b,k,a(p,{src:"/assets/images/visuals/animated-entity-texture/cow.png",alt:"cow",pixelated:"false",width:"180"}),f,g,w,y,a(o,null,{default:s(()=>[v]),_:1}),T,a(o),x,a(r,{link:"/assets/packs/visuals/animated-entity-texture/entity.material",download:"",color:"white"},{default:s(()=>[q]),_:1}),A,S,C,a(o,null,{default:s(()=>[E]),_:1}),I,a(o,null,{default:s(()=>[V]),_:1}),N,a(r,{link:"/assets/packs/visuals/animated-entity-texture/animated-entity.zip",download:"",color:"white"},{default:s(()=>[P]),_:1})])}var $=c(m,[["render",R]]);export{H as __pageData,$ as default};
