---
layout: page
type: portfolio
title: UX Design at Booking.com
subtitle: The world's largest online travel agent 
permalink: /work/booking.html
mainnav: hide
header_bg_image: /img/hero-bg/booking.png
extra_classes: portfolio theme-booking
title_offset_y: 35vh
title_align: center
---

<div class="wrapper">
	
	<div class="row row-overlap">		
	
		<div class="col-8">
			<h3>My role at Booking.com</h3>
			<div class="quick_info_box">

				<h4 class="quick_info_box_header">At a glance:</h4>
				<ul class="quick_info_box_list">
					<li>Projects cover all platforms (desktop, mobile, native apps)</li>
					<li>Facilitate Ideation, sketching/wireframing and create mockups</li> 
					<li>Write HTML, CSS, JS and some Perl code</li>
					<li>Maintain and deploy code using git</li>
					<li>Analyze experiment data and propose next iteration steps</li>
					<li>Coach and develop team members</li>
				</ul>
				<p>Booking.com is one of the biggest accommodation reservation services in the world. Each day, <em>over a million</em> room nights are reserved through its websites and apps.</p>
			</div>			
		</div>		
    	<div class="col-4 col-hero-overlap">
	        <img src="{{ site.baseurl }}/img/work_booking/booking_iphone6.png" alt="image" class="work_booking_img_iphone" />
	    </div>			
	</div>
	<div class="row">
		<div class="col-12">
			<h3>Some projects I worked on</h3>
		</div>
	</div>
	<div class="row">
		<div class="col-6 offset-3">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_booking/screens' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>
	</div>

	<div class="row row-overlap">		

		<div class="col-6">
			<p><span class="drop_cap">M</span>any companies claim that they have a <em>metrics-driven approach...</em> But holy shit, unlike most of these places, Booking.com takes this statement really serious. The development teams measure the business impact of every component of their products carefully.</p>
		</div>		
		<div class="col-6">
			<p><span class="drop_cap">T</span>he teams I worked on at Booking enabled me to work on a range of the company's huge product portfolio. In the gallery above, the work displayed is not reflective of the actual sites at this point, due to the dynamic, fast-learning approach at Booking.</div>
	</div>

</div>