---
layout: page_noheader
type: portfolio
title: Booking.com
subtitle: The world's largest online travel agent 
permalink: /work/booking.html
mainnav: hide
header_bg_image: /img/work_booking/booking_iphone6.png
extra_classes: portfolio theme-booking
title_offset_y: 45vh
title_align: left
order: 4
---

<div class="wrapper">
	
	<div class="row row-overlap">		
		<div class="col-4">
	        <img src="{{ site.baseurl }}/img/work_booking/booking_iphone6.png" alt="image" class="work_booking_img_iphone" />
	    </div>	
		<div class="col-8">
			<h1 class="page-title">Booking.com</h1>
			<h2 class="page-subtitle">UX Designer & Teamlead</h2>
			<p class="pullquote">From 2013 until 2015 I worked at one of the biggest accommodation reservation services in the world. Each day, <em>over a million</em> room nights are reserved through its websites and apps.</p>
			<h3>My role included:</h3>
			<ul class="quick_info_box_list">
				<li>Projects cover all platforms (desktop, mobile, native apps)</li>
				<li>Facilitate Ideation, sketching/wireframing and create mockups</li> 
				<li>Write HTML, CSS, JS and some Perl code</li>
				<li>Maintain and deploy code using git</li>
				<li>Analyze experiment data and propose next iteration steps</li>
				<li>Coach and develop team members</li>
			</ul>
					
		</div>				
	</div>

	<div class="row">
		<div class="col-8 col-overlap offset-2">
			<h3 class="heading_centered">Some projects I worked on</h3>
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_booking/screens' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>
	</div>

</div>