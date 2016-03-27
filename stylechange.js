// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

// /**
 // * Script for displaying open-dyslexic font on site
 // *
 // * @package    block_dyslexic
 // * @copyright  2016 onwards Éric Bugnet {@link http://eric.bugnet.fr/}
 // * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 // * @author     Éric Bugnet
 // */


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
	javascript:window.location.reload();
} 


function ChangeStyle() {
// Check if dyslexic is on
	var dyslexic = getCookie("dyslexic");

	// If dyslexic font is asked
	if (dyslexic == "true") {
		document.write("Dyslexic mod ON");
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,input,textarea,select {  font-family: opendyslexic; }";
		document.body.appendChild(css);
	}
}

	
ChangeStyle();