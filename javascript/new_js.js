
var flag=1;
function clk(){

    var oposf=document.getElementById('filist');

    if (flag%2==1) {
    
    oposf.style.left='-40px';
    flag=2;}

    else{oposf.style.left='-200px';
    flag=1;}}



$(window).scroll(function(){

	var wscroll=$(this).scrollTop();
	console.log(wscroll);

	oprtext=(380-wscroll)/380;
	$('#rtext').css(
		'opacity',oprtext    
	);

	opob=(wscroll-100)/485;
	$('#bulb').css(
		'opacity',opob  
	);
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
	bu=(1110-wscroll)/900;
	if (wscroll>920) {$('#bulb').css(
		'opacity',bu 
		);
		$('#place').css(
		'opacity',opob 
		);
		$('#duration').css(
		'opacity',opob
		);

		}
	else{	$('#place').css(
		'opacity',.3 
		);
		$('#duration').css(
		'opacity',.3
		);}	


	$('#ob').css(
		'opacity',opob    
	);

	opobt=(wscroll-100)/410;
	if(opobt>1) opobt=1;
	$('#obtext').css(
		'transform','scale('+opobt+','+opobt+')'    
	);
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	ab=(wscroll-1105)/230;
	$('#about').css(
		'opacity',ab  
	);


	{pos=2130-wscroll;
    $('#duration').css(
        'left',pos  
    );}
    if ((wscroll>1080)) {$('#duration').css(
        'left',1050  
    );};

    if (wscroll>1350) { abn=(1950-wscroll)/500;$('#about').css(
        'opacity',abn  
    );};
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	if (wscroll<1650 && wscroll>1550) {	
	edux=(wscroll-1550)*3.75-400;
	$('#tenb').css(
		'transform','translate('+edux+'px,0px)'  
	);
	edux=-1*edux;
	$('#btechb').css(
		'transform','translate('+edux+'px,0px)'  
	);

}
	else if(wscroll>1650){
		$('#btechb').css(
		'transform','translate(0px,0px)'  );
		$('#tenb').css(
		'transform','translate(0px,0px)'  );

	}


	if(wscroll>1659 && wscroll<1750)
	{	w=wscroll-1659;
		$(".line1").attr({
        "d" : 'M 0 0 v 0 '+w+'',
        
    });
	} 
	else if(wscroll<1659)
	{$(".line1").attr({
        "d" : 'M 0 0 v 0 0',
        
    });

}
	else if(wscroll>1750)
	{$(".line1").attr({
        "d" : 'M 0 0 v 0 100',
        
    });
	
	$("#teb").css({
        "border" :'2px solid red','background-image':'url(nlp.jpg)',
'background-size':' 100%','background-repeat':'no-repeat'}
        
    );

    $("#twb").css({
        "border" :'2px solid red','background-image':'url(nlp.jpg)',
'background-size':' 100%','background-repeat':'no-repeat'}
        
    );

    $("#vib").css({
        "border" :'2px solid red','background-image':'url(vit.jpg)',
'background-size':' 120%','background-repeat':'no-repeat'}
        
    );

}
if (wscroll<1750) {$(".b2").css(
        {"border" :'2px solid black','background':'white'}
        
    );


};

	
	if (wscroll<1650 && wscroll>1540) {	
	edux=(wscroll-1540)*3.75-400;
	$('#tenb').css(
		'transform','translate('+edux+'px,0px)'  
	);
	edux=-1*edux;
	$('#btechb').css(
		'transform','translate('+edux+'px,0px)'  
	);

}
	else if(wscroll>1650){
		$('#btechb').css(
		'transform','translate(0px,0px)'  );
		$('#tenb').css(
		'transform','translate(0px,0px)'  );

	}


	if(wscroll>1900 && wscroll<2000)
	{	w=wscroll-1900;
		$(".line2").attr({
        "d" : 'M 0 0 v 0 '+w+'',
        
    });
	} 
	else if(wscroll<1900)
	{$(".line2").attr({
        "d" : 'M 0 0 v 0 0',
        
    });

}
	else if(wscroll>2000)
	{$(".line2").attr({
        "d" : 'M 0 0 v 0 100',
        
    });
	
	$(".b3").css(
        "border" ,'2px solid red'
        
    );

}
if (wscroll<2000) {$(".b3").css(
        "border" ,'2px solid black'
        
    );};

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

if (wscroll>2690 && wscroll<5600) {po=wscroll-2690;
	posc=wscroll-2690;
	$("#tv").css(
        "top" ,po
        
    );

    
};


if (wscroll>3000 ) {
	$("#screen").css(
        "background" ,'#CCB8F5'
        
    );

  

$("#powerbutton").css(
        "color" ,'red'
        
    );

$("#open").css(
        "display" ,'block'
        
    );

$("#chbuttonl").css(
        "color" ,'black'
        
    );

$("#chbuttonr").css(
        "color" ,'black'
        
    );
$("#tvname").css(
        "color" ,'silver'
        
    );
$("#tv").css(
        "color" ,'      #404040'
        
    );

$("#top").css(
        "background-color" ,'transparent'
        
    );

$("#nav").css(
        "background-color" ,'black'
        
    );

$("#skills").css(
        "background-color" ,'black'
        
    );


}
else{$("#screen").css(
        "background" ,'grey'
        
    );


$("#powerbutton").css(
        "color" ,'grey'
        
    );
$("#open").css(
        "display" ,'none'
        
    );

$("#chbuttonl").css(
        "color" ,'grey'
        
    );

$("#chbuttonr").css(
        "color" ,'grey'
        
    );
$("#tvname").css(
        "color" ,'grey'
        
    );
$("#tv").css(
        "color" ,'black'
        
    );

$("#top").css(
        "background-color" ,'transparent'
        
    );

$("#nav").css(
        "background-color" ,'red'
        
    );

 $("#skills").css(
        "background-color" ,'#FFF5EE'
        
    ); 

}

if (wscroll>3000 && wscroll<3400) {
	
$("#open").css(
        "display" ,'block'
        
    );

}
else{
$("#open").css(
        "display" ,'none'
        
    );
}

if (wscroll>3400  && wscroll<3800) {$("#open").css(
        "display" ,'none'
        );
    $("#ch1").css(
        "display" ,'block'
        );
if(wscroll<3450 && wscroll>3400){$("#chbuttonr").css(
        "color" ,'#ffffb9'
        
    );}

    else{$("#chbuttonr").css(
        "color" ,'black'
        
    );}

}


else{  $("#ch1").css(
        "display" ,'none'
        );}


if (wscroll>3800  && wscroll<4200) {
    $("#ch2").css(
        "display" ,'block'
        );

    if(wscroll<3850 && wscroll>3800){$("#chbuttonr").css(
        "color" ,'#ffffb9'
        
    );}

    else{$("#chbuttonr").css(
        "color" ,'black'
        
    );}
}


else{  $("#ch2").css(
        "display" ,'none'
        );}

if (wscroll>4200  && wscroll<4600) {
    $("#ch3").css(
        "display" ,'block'
        );

    if(wscroll<4250 && wscroll>4200){$("#chbuttonr").css(
        "color" ,'#ffffb9'
        
    );}

    else{$("#chbuttonr").css(
        "color" ,'black'
        
    );}
}


else{  $("#ch3").css(
        "display" ,'none'
        );}

	if (wscroll>4600  && wscroll<5000) {
    $("#ch4").css(
        "display" ,'block'
        );
    if(wscroll<4650 && wscroll>4600){$("#chbuttonr").css(
        "color" ,'#ffffb9'
        
    );}

    else{$("#chbuttonr").css(
        "color" ,'black'
        
    );}
}


else{  $("#ch4").css(
        "display" ,'none'
        );}

	if (wscroll>5000  && wscroll<5400) {
    $("#ch5").css(
        "display" ,'block'
        );

    if(wscroll<5050 && wscroll>5000){$("#chbuttonr").css(
        "color" ,'  #ffffb9'
        
    );}

    else{$("#chbuttonr").css(
        "color" ,'black'
        
    );}
}


else{  $("#ch5").css(
        "display" ,'none'
        );}

	if (wscroll>5400) {$("#screen").css(
        "background" ,'grey'
        
    );
$("#powerbutton").css(
        "color" ,'grey'
        
    );

$("#chbuttonl").css(
        "color" ,'grey'
        
    );

$("#chbuttonr").css(
        "color" ,'grey'
        
    );
$("#tvname").css(
        "color" ,'grey'
        
    );
$("#tv").css(
        "color" ,'black'
        
    );

$("#top").css(
        "background-color" ,'transparent'
        
    );

$("#nav").css(
        "background-color" ,'red'
        
    );

 $("#skills").css(
        "background-color" ,'#FFF5EE'
        
    );

};

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/

if (wscroll>6300 ) {poco=wscroll-6300+20;
	
	$("#end").css(
        "top" ,poco
        
    );

if(wscroll<6600){$("#idname").css({
        "color" :'black',}
        );

	 $("#details").css({
        "color" :'black',}
        );} 

if (wscroll>6600  && wscroll<6900) {

		$("#end").css({
        '-webkit-transform': 'rotateY(360deg)',
    'transform': 'rotateY(360deg)','-webkit-transition': ' -webkit-transform 2s',
    'transition': 'transform 2s'
}
        );

	 
	 $("#co").css({
        "display" :'none',}
        );

	 $("#pd").css({
        "display" :'block',}
        );

	}


 else if(wscroll>6900) { 
		 $("#pd").css(
        "display" ,'block'
        );
	 $("#co").css(
        "display" ,'none'
        );}

	else{
		$("#end").css({
        '-webkit-transform': 'rotateY(0deg)',
    'transform': 'rotateY(0deg)','-webkit-transition': ' -webkit-transform 2s',
    'transition': 'transform 2s'
}
        );

	 
	 

		 $("#pd").css(
        "display" ,'none'
        );
	 $("#co").css(
        "display" ,'block'
        );
	}

  

}


if (wscroll<6960 && wscroll>6800 && flag==1) {
    lpos=wscroll-6800-200;
    $("#filist").css(
        "left" ,lpos
        );}
    else if (wscroll>=6960 &&  flag==1) {$("#filist").css(
        "left" ,'-40px'
        );}
     else{$("#filist").css(
        "left" ,'-200px'
        );}

if (wscroll>350) {$("#stt").css(
        "display" ,'block'
        );}
    else {$("#stt").css(
        "display" ,'none'
        );}



document.getElementById("scroll").innerHTML = wscroll;	
});

//var topw = document.getElementById('top').offsetWidth;
var topw = document.getElementById('ob').scrollHeight;
document.getElementById("value").innerHTML = topw;  
