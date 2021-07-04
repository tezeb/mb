<!DOCTYPE HTML>
<html lang="pl">

	<head>

		{% include rowery21/head.md %}
		{% if page.map %}
		{% include head_map.md %}
		{% endif %}

	</head>

	<body>

		<div id="body-margin">
			<div id="main-header">
				<div id="main-headerimg">
					<a href="{{ site.url }}/rowery21"><img src="/img/mb_rowery21_full.png" /></a>
				</div>
			</div>

			<iframe id="rowery21_map" src="https://test.outoftheblue.pl/" title="Mapa trasy"></iframe>

			<div id="main-page">

				<div id="main-content">

					{{ content }}

				</div>

				<div id="main-footer">

				</div>

			</div>
		</div>

	</body>
</html>
