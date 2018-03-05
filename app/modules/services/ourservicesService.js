angular.module('myApp.services').service('ourservicesService',function(){
	this.services = [
		{
			page: 'contact',
			title: 'One on one consultation',
			thumbnail: 'ellf/appdevelopment-thumbnail.png',
			image: 'ellf/appdevelopment.png',
			shortDescription: 'This is useful for entrepreuners who are ready to invest in their idea and want to know what to do and how to do it and how much does it cost. We sit down and go over your idea in detail over a cup of coffee or in a quiet room with a whiteboard',
		},
		{
			page: 'contact',
			thumbnail: 'ellf/documentation-thumbnail.png',
			image: 'ellf/documentation.png',
			title: 'Group Workshops',
			shortDescription: 'A three to five hour workshop with up to five entrepreneurs in one room where we discuss ideas, share solutions and open up about the problems we\'re facing in our startup. This is useful for either entrepreneurs looking for some advice after hitting a roadblock or people who are looking to get some feedback on their ideas.',
		},
		{
			page: 'contact',
			thumbnail: 'ellf/validation-thumbnail.png',
			image: 'ellf/validation.png',
			title: 'Group Meetups',
			shortDescription: 'Great for people with ideas who are still thinking about making that leap into becoming an entrepreuner and want to know where to start, how much would they need to invest and what do to they need to invest in. In those friendly meetups I talk about frequently asked questions and common problems that other startups face day to day and then we break into a general Q&A session where anyone with a question can raise their hand and ask.',
		}
	];


});