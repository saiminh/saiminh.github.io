---
layout: page_noheader
type: portfolio
title: University of Liverpool
permalink: /work/liverpool.html
header_bg_image: /img/hero-bg/liverpool.png
extra_classes: portfolio theme-liverpool
title_offset_y: 60vh
title_align: center
order: 1
---

<div class="wrapper">
	<div class="row row-overlap raster">		
		<div class="col-6">
			<img src="{{ site.baseurl }}/img/hero-bg/liverpool.png" alt="image" class="grid_img" />
		</div>
		<div class="col-6">
			<h1 class="page-title">University of Liverpool</h1>
			<h2 class="page-subtitle">Online Degrees</h2>
			<p><span class="drop_cap">D</span>uring my time as Senior Designer at Laureate Online Education my team and I developed all design collateral for the subbrand of this UK Institution.</p>
		</div>
	</div>

	<div class="row row-overlap raster">		
	
		<div class="col-6">
			<h3>Housestyle</h3>
			<p><span class="drop_cap">T</span>he Online degrees of the renowned University of Liverpool needed their own housestyle to appeal to their global target audience.</p>
				<ul class="quick_info_box_list">
					<li>Development of the housestyle</li>
					<li>Design of an icon family</li> 
					<li>Production of a styleguide</li>

				</ul>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/housestyle' %}
		    	<div class="col-6">
			        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="grid_img" />
			    </div>
		    {% endif %}
		{% endfor %}
			
	</div>

	<div class="row">		
		<div class="col-8">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_liverpool/online' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>
		<div class="col-4 col-text">
			<h3>Website</h3>
			<p><span class="drop_cap">T</span>he website of the University Online Degrees doubles as an information portal for prospective as well as active students and as a lead capture platform.</p>
			<ul class="quick_info_box_list">
				<li>Wireframing</li>
				<li>Development of prototype</li>
				<li>Visual Design</li>
				<li>Frontend development</li>
			</ul>
		</div>
	</div>

	<div class="row raster">		
		
		<div class="col-6 col-text">
			<h3>Offline marketing material</h3>
			<p><span class="drop_cap">U</span>sing our own guidelines, we produced some example brochures and promotional material to be used in the many infosessions the University organizes across the world.</p>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/print' %}
		    	<div class="col-6">
			        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="grid_img" />
			    </div>
		    {% endif %}
		{% endfor %}

	</div>

</div>