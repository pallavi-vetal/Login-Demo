@import url(http://fonts.googleapis.com/css?family=Cherry+Cream+Soda);

html, body {
	width:100%;
	height:100%;
	padding:0;
	margin:0;
	overflow-x:hidden;
	font-family: 'Cherry Cream Soda', cursive;
}

p {
	font-size:20px;
}

h1 {
	font-size:46px;
}

h2 {
	font-size:36px;
}

#bg1, #bg2, #bg3 {
	position:fixed;
	z-index:50;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:url(images/hot-air-balloons-1.png);
}

#bg2 {
	z-index:49;
	background-image:url(images/hot-air-balloon-2.png);
}

#bg3 {
	z-index:48;
	background-image:url(images/clouds.jpg);
}

#intro {
	position:fixed;
	left:50%;
	width:500px;
	margin-left:-266px;
	background: rgba(255,255,255,0.7);
	text-align:center;
	z-index:49;
}

#intro .arrow {
	font-size:36px;
	color:#c24;
}

#transform {
	position:fixed;
	left:50%;
	width:200px;
	margin-left:-116px;
	padding: 0 15px 15px;
	top:30%;
	text-align:center;
	background:rgba(255,255,255,0.7);
	z-index:49;
}

#properties {
	position:fixed;
	width:100%;
	height:100%;
	padding-top:20%;
	text-align:center;
	background: rgba(255,255,255,0.7);
	z-index:49;
}