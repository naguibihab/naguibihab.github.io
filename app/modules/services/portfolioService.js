angular.module('myApp.services').service('portfolioService',function(){
	this.portfolio = [
		{
			title: 'CollectMore',
			logo: 'collectmore/logo.jpg',
			client: {
				name: 'Paul Metcalf',
				pic: 'paul.jpg',
				title: 'Founder - CollectMore Pty Ltd'
			},
			info: 'A Mobile Application',
			story: 'I first metup with Paul after he had created his ios version of the app but the company that he was with was overcharging him and delivering a poor quality code. <br> I did the initial android version for Paul and after a few months I did the second version for both the Android and the IOS apps. Paul\'s app is now one of the top 50 downloaded business apps in Australia',
			desc: 'CollectMore gives you advice based on your input, the pupose of the app is to help you collect your debt. Based on the amount of debt, the time it remains outstanding, what the client has told you and other information, the app would use internal logic to identify which advice suits you best. <br> In addition to that the app also gives you SMS and Email templates that you can use to contact your client and it even <b>recommends</b> one for each of your unique debts.',
			page: 'collectmore',
			images: {
				thumb: 'collectmore/v2/collectmore_thumb.png',
				firstemail: 'collectmore/collectmore_firstemail.png',
				mobile: [
					{location: 'collectmore/v2/collectmore_mobileapp_1.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_2.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_3.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_4.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_5.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_6.png'},
					{location: 'collectmore/v2/collectmore_mobileapp_7.png'},
				],
				mockup: [
					{location: 'collectmore/v2/collectmore_mockup_1.png'}
				]
			},
			demo: {
				android: 'https://play.google.com/store/apps/developer?id=Collectmore+Debt+Solutions+Pty+Ltd',
				ios: 'https://itunes.apple.com/us/developer/copyright-2015-collectmore/id1032172900'
			},
			prod: 'collectmore.com.au',
			testimonial: 'Nick and I started discussing him making the Android version for me back in January and from the very beginning I knew he knew his stuff and was someone I felt confident would represent my business in the best possible light. I think as small business owners when we engage another business to do something for us, them actually doing the job is only part of the overall experience- how they go about their work, their values and morals and how professional they are throughout the relationship is just as important, at least it is for me anyway. Nick ticked every single one of these boxes and it got to a stage where he was more annoyed at the thought of him missing deadlines than I was. I was continually kept updated and his attention to detail was incredible- he refused to proceed with something unless it was perfect. If you need a website or app built to an extremely high standard by an ultimate professional, then Nick is your man. Highly recommended- thanks again mate.'
		},
		// ---------------- Gimble --------------------------
		{
			title: 'Gimble',
			logo: 'gimble/logo.png',
			client: {
				name: 'Peter Honey',
				pic: 'peter.jpg',
				title: 'Founder & Manging Director - Priority Plus Plumbing'
			},
			info: 'A SaaS Web & Mobile Application',
			story: 'I met Peter Honey through Miles (one of our clients). Peter had an idea for an app and didn\'t know where to go to get it done. Miles, having worked with us before to solve different technical issues, recommended us to Peter and the relationship picked off at that point. <br> Since 2014 I have done <b>3 different SaaS apps</b> for Peter that has saved his business an incredible amount of hours and effort for what used to be routine work',
			desc: 'Peter Honey found a gap in the plumbing industry, it was nearly impossible for the plumber to get the best price out of the quotes received from the suppliers, thus came Gimble.<br> Gimble is a PHP web application that also communicates with <b>Android</b> and <b>IPhone</b> mobile applications. Its primary feature is to act as a <b>bidding system</b> for the suppliers to make bids on the request made by the plumber. <br> The mobile application also allows the user to search for the <b>nearest suppliers</b> based on the user\'s location.',
			page: 'gimble',
			images: {
				thumb: 'gimble/gimble_thumb.png',
				web:[
					{location: 'gimble/gimble_webapp_1.png'},
					{location: 'gimble/gimble_webapp_2.png'},
				],
				mobile: [
					{location: 'gimble/gimble_mobileapp_1.png'},
					{location: 'gimble/gimble_mobileapp_2.png'},
					{location: 'gimble/gimble_mobileapp_3.png'},
					{location: 'gimble/gimble_mobileapp_4.png'},
					{location: 'gimble/gimble_mobileapp_5.png'},
				],
				mockup: [
					{location: 'gimble/gimble_mockup_1.png'},
					{location: 'gimble/gimble_mockup_2.png'},
					{location: 'gimble/gimble_mockup_3.png'}
				]
			},
			demo: {
				android: 'https://play.google.com/store/apps/details?id=com.georgenaiem.gimble',
				ios: 'https://itunes.apple.com/us/app/gimble/id1015977065?ls=1&mt=8',
				walkthrough: true
			},
			prod: 'gimble.com.au',
			testimonial: 'Nick from An Idea For An App is always very accommodating with our requests and actions any we throw at him with urgency.  He sends updates whenever any changes are made or updates are available to ensure we are kept in the loop and he always provides round the clock service.  We are more than happy to recommend An Idea For An App for their service and dedication to their clients.'
		},
		// ---------------- Emovey --------------------------
		{
			title: 'Emovey',
			logo: 'emovey/logo.png',
			client: {
				name: 'Philip Faraj',
				pic: 'phil.jpg',
				title: 'Founder - Emovey'
			},
			info: 'A SaaS Web & Mobile Application',
			story: 'I met Phil back in 2015 through a mutual friend, he had this amazing idea for a survey builder and immediately got me convinced that his app would have a great impact on helping businesses take more valuable feedback from their customers. <br> I\'ll admin that Emovey was one of our challenging projects as it has a unique interface when you view the survey from a mobile (Check screenshots), an interface that any web developer would know is extremely tricky, but we managed and with styling tricks we were able to make that happen and match Phil\'s expectations',
			desc: 'Emovey is a survey builder platform that uses emoticons instead of the usual text answers, making the experience of taking a survey simple and fun.',
			page: 'emovey',
			images: {
				thumb: 'emovey/v2/emovey_thumb.png',
				firstemail: 'emovey/emovey_firstemail.png',
				web:[
					{location: 'emovey/v2/emovey_webapp_1.png'},
					{location: 'emovey/v2/emovey_webapp_2.png'},
					{location: 'emovey/v2/emovey_webapp_3.png'},
					{location: 'emovey/v2/emovey_webapp_4.png'},
					{location: 'emovey/v2/emovey_webapp_5.png'},
				],
				mobile: [
					{location: 'emovey/v2/emovey_mobileapp_1.png'},
					{location: 'emovey/v2/emovey_mobileapp_2.png'},
				],
				mockup: [
					{location: 'emovey/v2/emovey_mockup_1.png'},
					{location: 'emovey/v2/emovey_mockup_2.png'}
				]
			},
			demo: {
				web: 'http://app.emovey.com',
				walkthrough: true
			},
			prod: 'emovey.com.au',
			testimonial: 'I approached Nick with an idea to develop a customer service survey builder and was lucky enough that he chose to help me realise its development. Nick is very open, and extremely easy to communicate with from the very beginning of the development journey. I would definitely recommend An Idea For An App to anyone looking to turn their idea into something real!'
		},
		// --------------- The Tool Tracker ------------------------
		{
			title: 'The Tool Tracker',
			logo: 'the_tool_tracker/logo.jpg',
			client: {
				name: 'Peter Honey',
				pic: 'peter.jpg',
				title: 'Founder & Manging Director - Priority Plus Plumbing'
			},
			info: 'A SaaS Web & Mobile Application',
			story: 'I have been working with Peter since 2014 on differnt applications that has given his business an edge by automating all of the routin work and saving valuable hours. Peter always manages to find gaps in his business that can be easily automated or ehanced by technology.',
			desc: 'Like any other plumbing company, Priority Plus Plumbing has an inventory of tools that get lost between their staff members and every week someone has to call all the staff that are on the road to find out who has the Vega. Peter decided to build an app that would counter that, by having the staff use a mobile app that would act as a ledger. <br>The app allows the user to see their current inventory, move items from their inventory to other inventories, request access to certain inventories and approve other requests coming to them. With an <b> Admin backend </b> the administrator can easily track where are all the tools and the history of transactions through a log page, and the app even allows the admin to override certain requests and maintain their trucks, sites, offices, users and tools. <br> The app also helps the plumbers by reminding them to pickup an item when they leave it at the repair shop. <br> <strong> The app is currently at a beta stage.</strong>',
			page: 'tools',
			images: {
				thumb: 'the_tool_tracker/tools_thumb.png',
				web:[
					{location: 'the_tool_tracker/tools_webapp_1.png'},
					{location: 'the_tool_tracker/tools_webapp_2.png'},
					{location: 'the_tool_tracker/tools_webapp_3.png'},
					{location: 'the_tool_tracker/tools_webapp_4.png'},
					{location: 'the_tool_tracker/tools_webapp_5.png'},
					{location: 'the_tool_tracker/tools_webapp_6.png'},
				],
				mockup: [
					{location: 'the_tool_tracker/tools_mockup_1.png'},
					{location: 'the_tool_tracker/tools_mockup_2.png'},
					{location: 'the_tool_tracker/tools_mockup_3.png'}
				]
			},
			testimonial: 'Nick from An Idea For An App is always very accommodating with our requests and actions any we throw at him with urgency.  He sends updates whenever any changes are made or updates are available to ensure we are kept in the loop and he always provides round the clock service.  We are more than happy to recommend An Idea For An App for their service and dedication to their clients.'
		},
		// --------------- Digups app ------------------------
		{
			title: 'The Digups Scripts',
			client: {
				name: 'Peter Honey',
				pic: 'peter.jpg',
				title: 'Founder & Manging Director - Priority Plus Plumbing'
			},
			info: 'A Responsive Web Application',
			story: 'I have been working with Peter since 2014 on differnt applications that has given his business an edge by automating all of the routin work and saving valuable hours. Peter always manages to find gaps in his business that can be easily automated or ehanced by technology.',
			desc: 'Peter again found a way to make his job and his staff\'s job easier by creating a software that would automate the quotation calculation for the user <strong>on the spot</strong> saving hours wasted in doing that complex calculation manually. Peter is looking into making this app available for the public late 2017, stay tuned.',
			page: 'digups',
			images: {
				thumb: 'digups/digups_thumb.png',
				web:[
					{location: 'digups/digups_webapp_1.png'},
					{location: 'digups/digups_webapp_2.png'},
					{location: 'digups/digups_webapp_3.png'},
				],
				mobile:[
					{location: 'digups/digups_mobileapp_1.png'},
					{location: 'digups/digups_mobileapp_2.png'}
				]
			},
			demo: {
				walkthrough: true
			},
			testimonial: 'Nick from An Idea For An App is always very accommodating with our requests and actions any we throw at him with urgency.  He sends updates whenever any changes are made or updates are available to ensure we are kept in the loop and he always provides round the clock service.  We are more than happy to recommend An Idea For An App for their service and dedication to their clients.'
		},
		// ---------------- Big future --------------------------
		{
			title: 'Big Future',
			// logo: 'bigfuture/logo.png',
			client: {
				name: 'Michael Clancy',
				title: 'Co-Founder - Big Future'
			},
			info: 'A Web Application',
			story: 'Big future was one of our very first applications, we were asked to build the front-end that would appeal to their users and provide good user experience',
			desc: 'Big Future is an application that helps users plan for their retirement and manage their finance.',
			page: 'bigfuture',
			images: {
				thumb: 'bigfuture/bigfuture_thumb.png',
				web:[
					{location: 'bigfuture/bigfuture_webapp_1.png'},
					{location: 'bigfuture/bigfuture_webapp_2.png'},
					{location: 'bigfuture/bigfuture_webapp_3.png'},
					{location: 'bigfuture/bigfuture_webapp_4.png'},
				]
			},
			demo: {
				walkthrough: false
			},
			testimonial: 'Nick and his team were keen to help and very flexible. Nothing was too much trouble.'
		},
		// --------------- Custom candy ------------------------
		{
			title: 'Customised Candy',
			// logo: 'customcandy/logo.png',
			client: {
				name: 'Donna Maro',
				title: 'Owner - Australian Sweet Co.'
			},
			info: 'A Web Application',
			story: 'Donna needed a custom web application that allows people to customise their own candy and then buy them, compared to the previous manual process, Donna is now saving time and effort by giving her customers and easy to use solution',
			desc: 'The app helps you customise your own candy before purchasing them, allowing you to choose the shapes and colours of the candy.',
			page: 'customcandy',
			images: {
				thumb: 'customcandy/customcandy_thumb.png',
				web:[
					{location: 'customcandy/customcandy_webapp_1.png'},
					{location: 'customcandy/customcandy_webapp_2.png'},
				],
				mobile:[
					{location: 'customcandy/customcandy_mobileapp_1.png'},
					{location: 'customcandy/customcandy_mobileapp_2.png'}
				]
			},
			testimonial: 'Love to give a big shout out and a massive THANK YOU to Nick Ihab from An Idea For An App for helping me to add a retail store locator function to my Wordpress site. He certainly went above and beyond the small fee he charged me.'
		},
		// --------------- OOD ------------------------
		// {
		// 	title: 'Online Office for Developers',
		// 	info: 'A SaaS Web App',
		// 	desc: 'TODO',
		// 	page: 'ood'
		// },
	];
});