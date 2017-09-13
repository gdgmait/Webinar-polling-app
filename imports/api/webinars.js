import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Webinars=new Mongo.Collection('webinars');
export const Upvotes=new Mongo.Collection('upvotes');
export const Downvotes=new Mongo.Collection('downvotes');

if (Meteor.isServer) {
  Meteor.publish('webinars',function () {
    return Webinars.find({});
  });
}

Meteor.methods({
  'webinar.upvote'(_id){
    if (!Upvotes.findOne({webinarid:_id,upvotedby:this.userId})) {
      Upvotes.insert({webinarid:_id,upvotedby:this.userId});
      Downvotes.remove({webinarid:_id,downvotedby:this.userId});
      Webinars.update({_id},{$inc:{upvotes:1},$set:{showupvote:false},$addToSet:{upvoters:this.userId}});
    }
  },
  'webinar.downvote'(_id){
    if (Upvotes.findOne({webinarid:_id,upvotedby:this.userId})) {
      Upvotes.remove({webinarid:_id,upvotedby:this.userId});
      Downvotes.insert({webinarid:_id,downvotedby:this.userId});
      Webinars.update({_id},{$inc:{upvotes:-1},$set:{showupvote:true},$pull:{upvoters:this.userId}});
    }
  },
  'webinar.hasUserUpvoted'(_id){
    let webinar = Webinars.findOne({_id:_id});
    if(webinar){
      return webinar.upvoters.indexOf(this.userId)>-1;
    }
    return false;
  }
});
