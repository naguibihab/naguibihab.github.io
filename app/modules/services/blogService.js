angular.module('myApp.services').service('blogService',function(){
	
	/*
	 - Please keep the blogs.full & blog.page unique
	 - For easier text to html formattion use: https://wordtohtml.net/
	 - Or if you want to do markdown use: https://stackedit.io/
	*/
	this.blogs = [
		{
			title: 'How to minimise your costs in AWS - Part 1 - RDS',
			date: {
				day: 10,
				month: 'July',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity',
				'Startup',
				'Tech'
			],
			teaser: `In this article I’ll show you how to stop your RDS instances automatically every night and start them up again in the morning using AWS CLI.`,
			page: 'how-to-minimise-your-costs-in-aws-rds',
			full: 'how-to-minimise-your-costs-in-aws-rds.html',
			type: 'article'
		},

		{
			title: 'At What Stage Should Start Seeking An Investment - Q&A Video',
			date: {
				day: 29,
				month: 'June',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity',
				'Startup',
				'Apps',
				'Q&A'
			],
			teaser: `Wondering about when to seek investment for your app? Watch this video to get the honest and practical answer.`,
			page: 'when-should-i-start-seeking-investment',
			full: 'when-should-i-start-seeking-investment.html',
			type: 'video'
		},

		{
			title: 'The fear of failure and how that affects your startup',
			date: {
				day: 25,
				month: 'June',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity',
				'Startup'
			],
			teaser: `I always avoided doing mistakes, I avoided giving promises I am not absolutely sure that I can deliver, I avoided trying out new technology, I avoided doing anything that has risk so that I would never fail. That's a myth, we always fail`,
			page: 'the-fear-of-failure-and-how-that-affects-your-startup',
			full: 'the-fear-of-failure-and-how-that-affects-your-startup.html',
			type: 'article'
		},

		{
			title: 'Intro To Apps - Webinar',
			date: {
				day: 14,
				month: 'June',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity',
				'Startup',
				'Apps',
				'Webinar'
			],
			teaser: `Learn everything you need to know about turning an idea into an app`,
			page: 'webinar-intro-to-apps',
			full: 'webinar-intro-to-apps.html',
			type: 'video'
		},

		{
			title: 'How Much Does An App Cost? - Q&A Video',
			date: {
				day: 12,
				month: 'June',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity',
				'Startup',
				'Apps',
				'Q&A'
			],
			teaser: `Wondering how much does it cost to take an idea into an app? Check this video where Nick explains how that happens and the phases the idea needs to go through to be developed the right way.`,
			page: 'qna-how-much-does-an-app-cost',
			full: 'qna-how-much-does-an-app-cost.html',
			type: 'video'
		},

		{
			title: '"But We have always done it that way" The story about railroads gauge',
			date: {
				day: 04,
				month: 'June',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity'
			],
			teaser: `major design feature of what is arguably the world's most advanced transportation system was originally determined by the width of a horse's ass!`,
			page: 'but-we-have-always-done-it-that-way',
			full: 'but-we-have-always-done-it-that-way.html',
			type: 'article'
		},

		{
			title: 'How to market your app with Gemma Vine Street Digital',
			date: {
				day: 28,
				month: 'May',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Marketing',
				'Podcast'
			],
			teaser: `Nick from anideaforanapp.com interviews Gemma from vinestreetdigital.com about how to market a software application.`,
			page: 'market_vinestreetdigital',
			full: 'market_vinestreetdigital.html',
			type: 'audio'
		},

		{
			title: 'Feeling overwhelmed? 7 steps to focus and break large tasks down',
			date: {
				day: 10,
				month: 'May',
				year: 2017
			},
			authorid: 0,
			tags: [
				'Productivity'
			],
			teaser: `when building an app it's easy to get lost and feel overwhelmed and defeated. We face these issues all the time where we just can't find the beginning of the thread, and here's how I learned to tackle them over the years`,
			page: 'overwhelmed',
			full: 'overwhelmed.html',
			type: 'article'
		},

		{
			title: 'Should you Bluff or Fold? 6 Tips for Revamping your App',
			date: {
				day: 13,
				month: 'Mar',
				year: 2016
			},
			authorid: 0,
			tags: [
				'Apps',
				'Strategy',
				'Rewrite'
			],
			teaser: `It got me thinking about the benefits of planning ahead and how a lot of us fail to use foresight when developing our first application. We tend not to think that far ahead even though we are trying to build something we’re hoping will work for years to come. As an app developer, I have seen  many entrepreneurs who, from the start, just didn’t get the plan right`,
			page: 'bluff-or-fold',
			full: 'bluff-or-fold.html',
			type: 'article'
		},

		{
			title: 'Google Cloud Vs AWS. Which cloud platform should you learn first.',
			date: {
				day: 18,
				month: 'Aug',
				year: 2016
			},
			authorid: 0,
			tags: [
				'Technology',
				'Cloud',
				'Comparison'
			],
			teaser: `It’s commonly known that when Google does something then there’s no need to look for an alternative because nothing will beat what Google has.<br>That is not the case when it comes to cloud platforms, especially if you’re still learning and don’t really know what you’re doing. Here’s a small comparison sheet that I made while I was still scratching the surface of both platforms`,
			page: 'google-cloud-vs-aws',
			full: 'google-cloud-vs-aws.html',
			type: 'article'
		},

		{
			title: 'How To Avoid Online Scams (Phishing Links and Emails)',
			date: {
				day: 24,
				month: 'Feb',
				year: 2016
			},
			image: 'phishing.jpg',
			authorid: 0,
			tags: [
				'Privacy',
				'Security'
			],
			teaser: `Not so long ago, a friend of mine was scammed by entering his online banking credentials in what seemed to be his bank’s usual login screen. The website used the same colors, same design, same logo, same everything. He lost about $6,000 in that scam. Here’s how you can identify and protect yourself and business from these scams`,
			page: 'how-to-avoid-online-scams-phishing-links-and-emails',
			full: 'how-to-avoid-online-scams-phishing-links-and-emails.html',
			type: 'article'
		},
	];
});