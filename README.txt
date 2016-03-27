This block allow to change the default font of your Moodle site by a specific font for dyslexic people : OpenDyslexic from http://opendyslexic.org/.

How to install ?
1/ Install the block like other blocks
2/ Visit the Administration > Site administration > Appearance > Additionnal HTML (MY_MOODLE_SITE.com/admin/settings.php?section=additionalhtml)
3/ Adapt and paste this code into the « Within HEAD » area :

	<!-- Dyslexic mod -->
	<link rel="stylesheet" type="text/css" href="MY_MOODLE_SITE.com/blocks/dyslexic/opendyslexic.css"></link>
	<script src="MY_MOODLE_SITE.com/blocks/dyslexic/stylechange.js"></script>
	<!-- End of Dyslexic mod -->

4/ Insert the block into your site like other ones
5/ Enjoy

Please accept that this block adapt your theme, so it could works badly on some themes (depending on personnal tunning).