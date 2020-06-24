Meteor.startup(function(){
	if(!ConditionImages.findOne()){//if 
		for (var i=1;i<=3;i++){//for loop for inserting images
			ConditionImages.insert(
				{
	      			img_src:"img_"+i+".jpg",
	      			img_alt:"image number "+i ,
	   			}
	   		);//end of insert	
		}// end of for loop
	}//end of if
	if(!Conditions.findOne()){//if 
		var conditions_array=[
			{
				name:"image number 1",
				details:"This is information of image 1.",
			},
			{
				name:"image number 2",
				details:"This is information of image 2.",
				
			},
			{
				name:"image number 3",
				details:"This is information of image 3.",
			},
		];
		for (var i=0;i<3;i++){//for loop for inserting condition details
			Conditions.insert(conditions_array[i]);//end of insert	
		}// end of for loop
	}//end of if
});//end of startup function

