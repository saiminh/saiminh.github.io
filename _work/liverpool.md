---
layout: page
type: portfolio
title: University of Liverpool
category: Housestyle
permalink: /work/liverpool
header_bg_image: ./img/work_liverpool/uol_hero.jpg
worktile_theme: dark
extra_classes: portfolio theme-liverpool
title_offset_y: 60vh
title_align: center
order: 1
---

<div class="wrapper">
	<div class="row row--aligncenter">		
		<div class="col-4">
			<div class="infobox">
				<h3>Client:</h3>
				<p><a href="https://www.liverpool.ac.uk/online-programmes/">University of Liverpool</a>/<a href="https://laureate.net">Laureate Online Education</a></p>
				<h3>What I did:</h3>
				<ul>
					<li>Housestyle</li>
					<li>Brochures</li>
					<li>Website Design</li>
					<li>Website Frontend Development</li>
				</ul>
			</div>

		</div>
		<div class="col-6 offset-1">
			
			<p><span class="drop_cap">W</span>hen the prestigious UK Institution introduced their own brand of E-Learning together with their Partner Laureate, I developed a housestyle and website that spoke specifically to an international and mature audience of potential online students.</p>
		</div>
		
		
	</div>

	<div class="row">		
	
		<div class="col-5 inset-1">
			<h3>Housestyle</h3>
			<p><span class="drop_cap">T</span>he visual communications of the online degrees needed to differentiate itself from the physical institution's to adress the specific target audience.</p>
			<p> Prestige and maturity were key points, as online students tend to be older and already on a career path they want to advance on by pursuing a degree.</p>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/housestyle' %}
		    	<div class="col-6">			        
                    {% responsive_image_block %}
                    path:  ./{{ image.path }}
                    class: "grid_img"
                    {% endresponsive_image_block %}
			    </div>
		    {% endif %}
		{% endfor %}
			
	</div>

	<div class="row raster">				
		<div class="col-5 inset-1">
			<h3>Printed marketing material</h3>
			<p><span class="drop_cap">F</span>or the many infosessions the University of Liverpool organizes all over the world, I designed a line of brochures and promotional material that were using the assets created in the guidelines.</p>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/print' %}
		    	<div class="col-6">			        
					{% responsive_image_block %}
                    path:  ./{{ image.path }}
                    class: "grid_img"
                    {% endresponsive_image_block %}
			    </div>
		    {% endif %}
		{% endfor %}

	</div>

	<div class="row">		
		<div class="col-4 col-text">
			<h3>Website</h3>
			<p><span class="drop_cap">T</span>he website of the University Online Degrees is an information portal for students and a lead capture platform for new prospects.</p>
			<ul class="quick_info_box_list">
				<li>Wireframing</li>
				<li>Prototype development</li>
				<li>Visual Design</li>
				<li>Frontend development</li>
			</ul>
		</div>
		<div class="col-8 overflow">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_liverpool/online' %}
				        
						{% responsive_image_block %}
                        path:  ./{{ image.path }}
                        class: "gallery-xscroll_img"
                        {% endresponsive_image_block %}
				    {% endif %}
				{% endfor %}
			</div>
		</div>
		
	</div>

	

</div>