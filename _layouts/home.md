<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

 {% include head.md %}

 <body>
  <div id="main-page">
   <div id="main-header">
    <div id="main-headerimg">
     <a href="{{ site.url }}"><img src="/img/mb_full.png" /></a>
    </div>
		<div id="main-menu">
			<a href="">MAPA</a>&nbsp;
			<a href="">MIEJSCA</a>&nbsp;
			<a href="">FOTO</a>
		</div>
   </div>
   <div id="main-content">
		<script type="text/javascript">
		var datapoints = [
		{% for post in site.posts %}
			{ "lat": {{ post.lat }}, "lon": {{ post.lon }}, "url": "{{ post.url }}" },
		{% endfor %} 
		];
		</script>

		<div id="map">
		<div id="main-mc"></div>
		</div>

		<script type="text/javascript" src="/js/script.js" ></script>

		<div id="main-post-container">
			<iframe id="main-post" src="" />
		</div>
   </div>
 </body>
</html>
