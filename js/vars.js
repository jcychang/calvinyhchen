var homeImage = "<img src='img/profile.jpg' alt='...' class='img-thumbnail profile'>";
// = jQuery.get('homeImage.html', function(data)) {
// 	return data;
// }

var homeHeader = jQuery.get('homeHeader.html', function(data)) {
	return data;
};

// var homeHeader =
// "<h1>Calvin Chen</h1>" +
// "<h3><span>Prospective graduate student at the University of Michigan - Ann Arbor.</span></h3>";

var homeBody =
"<p>小帥哥，恭喜你上研究所拉 ＸＤ 想說送你一個實用的個人網站，但剩下要怎麼改就要靠你自己研究了哈哈。不會再問我！</p>" +
"<p>Self-introduction goes here.</p>";


var resumeHeader =
"<h1>Resume</h1>";

var resumeBody =
"<h4>Education</h4>" +
"<h5>B.S.  Computer Science and Information Engineering (CSIE)</h5>" +
"<p>National Taiwan University (NTU), Taipei, Taiwan <span>Sep. 2012 – Jun. 2016</span></p>" +

"<h4>Experience</h4>" +
"<p>Theory of Computation and Financial Computation Lab., NTU, Taipei, Taiwan" +
"<span>Undergraduate Research Student, Advisor: Prof. Yuh-Dauh Lyuu</span></p>" +
"<ul><li>Oral reported previous research papers in Financial Computation Field through critical reading</li></ul>" +

"<p>Embedded System Laboratory, NTU, Taipei, Taiwan" +
"<span>Undergraduate Research Student, Advisor: Prof. Tei-Wei Kuo</span></p>" +
"<ul><li>Did a project “States of Android Devices and Application on Gesture Control”, and was responsible for transferred data via Bluetooth by socket programming and analyzed the data to define states of the devices.</li></ul>" +

"<p>National Taiwan Science Education Center, Taipei, Taiwan" +
"<span>Substitute Military Service, Information Management Office</span></p>" +
"<ul><li>Maintained the operation of information systems</li></ul>" +

"<p>SysJust Information Co., Ltd, New Taipei, Taiwan" +
"<span>Software Engineer Intern</span></p>" +
"<ul><li>Wrote test cases and assisted in debugging on the SysJust’s product, XScript</li></ul>" +
"<ul><li>Arranged and analyzed historical data with different technical analysis in stock market</li></ul>" +

"<h4>Skills</h4>" +
"<p>Programming Languages: C, C++, Java, Python, MATLAB, SQL</p>" +
"<p>Languages: Fluent in English and Native in Mandarin Chinese</p>";

var projectsHeader =
"<h1>Projects</h1>";

var projectsBody =
"<div class='grid'>" +
	"<figure class='effect-sadie'>" +
		"<img src='img/MichiganYellow.jpg'/>" +
		"<figcaption>" +
			"<h2>My Angel</h2>" +
			"<p>Introduction to Human Computer-Interaction and Design course</p>" +
			"<a href='#'></a>" +
		"</figcaption>" +
	"</figure>" +

	"<figure class='effect-sadie'>" +
		"<img src='img/MichiganYellow.jpg'/>" +
		"<figcaption>" +
			"<h2>PTT Search</h2>" +
			"<p>Undergraduate Research Student, Advisor: Prof. Tei-Wei Kuo</p>" +
			"<a href='#'></a>" +
		"</figcaption>" +
	"</figure>" +

	"<figure class='effect-sadie'>" +
		"<img src='img/MichiganBlue.jpg'/>" +
		"<figcaption>" +
			"<h2>Predicting Dropout in MOOC</h2>" +
			"<p>Machine Learning course</p>" +
			"<a href='#'></a>" +
		"</figcaption>" +
	"</figure>" +

	"<figure class='effect-sadie'>" +
		"<img src='img/MichiganBlue.jpg'/>" +
		"<figcaption>" +
			"<h2>RockShare</h2>" +
			"<p>Computer Network Laboratory course</p>" +
			"<a href='#'></a>" +
		"</figcaption>" +
	"</figure>" +
"</div>";


var awardsHeader =
"<h1>Awards</h1>";
var awardsBody =
"<h6>Awards go here.</h6>";


var contactHeader =
"<h1>Contact</h1>";
var contactBody =
"<h6>Contact info goes here.</h6>";

var footer =
"<span>Copyright <i class='fa fa-copyright' aria-hidden='true'></i> 2017</span>";
