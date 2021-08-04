import{o as n,c as s,e as a}from"./app.d33ee789.js";const p='{"title":"Redux","description":"","frontmatter":{},"relativePath":"redux-start.md","lastUpdated":1628058050229}',t={},o=a('<h1 id="redux"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h1><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;redux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">{</span>count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">case</span> <span class="token string">&#39;ADD&#39;</span><span class="token operator">:</span>\n\t\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> count<span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> action<span class="token punctuation">.</span>num <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">case</span> <span class="token string">&#39;MINUS&#39;</span><span class="token operator">:</span>\n\t\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> count<span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> action<span class="token punctuation">.</span>num <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">default</span><span class="token operator">:</span>\n\t\t\t<span class="token keyword">return</span> state\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;ADD&#39;</span><span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;MINUS&#39;</span><span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',2);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
