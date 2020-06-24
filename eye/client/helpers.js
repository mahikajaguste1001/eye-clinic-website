
Template.condition_images_template.helpers({
    'condition_images_array':function(){
        console.log("heelo in helper 1");
        return ConditionImages.find();
    },
});

Template.condition_details_template.helpers({
    'condition_detail': function(){
        console.log("hello");
        console.log(Conditions.findOne({name:Session.get("image number")}));
        return [Conditions.findOne({name:Session.get("image number")})];
    },
});