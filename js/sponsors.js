//This is JavaScript that will generate sponsors based on a .json file.
//This will eliminate all sorts of hard-coded badness.

function generateSponsorBox(data){
	alert("HI!");
	var money = 1000000;
	foreach(sponsor in sponsors){
		sponsor.give(money);
		techhounds.give(thank_you);
		sponsor.receive(thank_you);
	}
	techhounds.makeIt(rain);
}


function requestData() {
	$.ajax({
		url: "sponsors.json",
		cache: false,
		async : true,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(errorThrown);
		},
		success: function(data){
			console.log(data);
		}
	});
}
