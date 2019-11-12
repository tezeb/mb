<!DOCTYPE HTML>
<html lang="pl">

	<head>

		{% include head.md %}
		{% if page.map %}
		{% include head_map.md %}
		{% endif %}

	</head>

	<body>

		<div id="body-margin">
			<div id="main-page">
				<div id="main-header">
					<div id="main-menu">
						<ul>
							<li><a href="/" title="Blog">Blog</a></li>
							<li><a href="/" title="Mapa">Mapa</a></li>
							<li><a href="#kontakt" title="Kontakt">Kontakt</a></li>
              {% comment %}
							<li class="medium"><a href="/" title="Przewodnik">Przewodnik</a></li>
							<li class="medium"><a href="/" title="Foto">Foto</a></li>
							<li class="wide"><a href="/" title="Miejsca">Miejsca</a></li>
							<li><a title="&#9776;" id="nav-toggle" href="#">&#9776;</a></li>
              {% endcomment %}
						</ul>
					</div>
					<div id="main-headerimg">
						<a href="{{ site.url }}"><img src="/img/mb_full.png" /></a>
					</div>
				</div>



				<div id="main-content">

					{{ content }}

				</div>

				<div id="main-footer">

					{% include footer.html %}

				</div>

			</div>
		</div>

	</body>
</html>
