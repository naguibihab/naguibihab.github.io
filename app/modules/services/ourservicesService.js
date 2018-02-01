angular.module('myApp.services').service('ourservicesService',function(){
	this.services = [
		{
			page: 'development',
			title: 'App & Software Development',
			thumbnail: 'ellf/appdevelopment-thumbnail.png',
			image: 'ellf/appdevelopment.png',
			secondaryTitle: 'Get Your Idea Developed Into A Fully Functional App',
			description: 'We develop your application completely from scratch starting with an MVP (Minimal Viable Product) and using Agile methodology.<br>We <strong>choose the technologies</strong> that best suit your application, we <strong>document and design</strong> it, we <strong>create a road map</strong> with deliverables and due dates, we <strong>build, test and launch it</strong> to the appropriate market. <br>We guide you through every step and keep you updated at least twice a week with our progress, you\'d know exactly what is happening on your app and when will what be delivered.',
			shortDescription: 'We develop your application completely from scratch starting with an MVP...',
			cost: 'Starting from $4000',
			calltoaction: 'Get your idea developed!'
		},
		{
			page: 'consultation',
			thumbnail: 'ellf/consultation-thumbnail.png',
			image: 'ellf/consultation.png',
			title: 'Free Consultation',
			secondaryTitle: 'Talk With An Expert',
			description: 'You have an idea but you don\'t know where to start, <b>how much it would cost</b> or <b>who to approach</b>. Get a <strong>free</strong> consultation with me over the phone or via video chat where I\'d answer <strong>all your questions</strong> and give you an estimate of how much I think your app would cost, what is the right approach based on your app\'s potential and the technology your application needs',
			shortDescription: 'You have an idea but you don\'t know where to start...',
			cost: 'FREE',
			calltoaction: 'Get a free consultation!'
		},
		{
			page: 'documentation',
			thumbnail: 'ellf/documentation-thumbnail.png',
			image: 'ellf/documentation.png',
			title: 'Technical Documentation & Graphical Design',
			secondaryTitle: 'Document Your Application & Design it',
			description: 'Time spent in planning is <strong>seldom</strong> wasted. Before taking your idea to a developer you need to get a <ol><li>Technical document that accurately describes what each page in your app does and how does it do it</li><li>A wireframe that shows the navigation of your app and how each page functions</li><li>A graphical design for your entire application that includes any logos as well.</li></ol>',
			shortDescription: 'Before taking your idea to a developer you need...',
			cost: 'Starting from $500',
			calltoaction: 'Get your application designed and documented!'
		},
		{
			page: 'validation',
			thumbnail: 'ellf/validation-thumbnail.png',
			image: 'ellf/validation.png',
			title: 'Validation & Proof Of Concept',
			secondaryTitle: 'Validate Your Idea & Build A POC',
			description: 'Before diving into the deep we need to test the water.<br>I can help you validate your idea by building a small and affordable <strong>proof of concept</strong> (POC) application which is an interactive app that contains basic functionality, its purpose is to <strong>show potential clients or investors your vision</strong>, based on that you can easily <strong>measure how the public would react</strong> to your product and what features should you focus on.',
			shortDescription: 'Show potential clients or investors your vision...',
			cost: 'Starting from $1000',
			calltoaction: 'Get your idea validated!'
		},
		{
			page: 'rescue',
			thumbnail: 'ellf/rescue-thumbnail.png',
			image: 'ellf/rescue.png',
			title: 'Rescuing Apps',
			secondaryTitle: 'Get Rescued',
			description: 'Your app got mixed up with the wrong development team and is <strong>costing more</strong> than anticipated, filled with <strong>bugs</strong>, went <strong>beyond the due date</strong>, or simply not what you have expected?<br>Unfortunately 1/4 of our clients came from a bad experience, but fortunately, they all got rescued, and their apps went on to become a great success, we\'re able to save you and get your app back on the track it was originally built for.',
			shortDescription: 'Your app got mixed up with the wrong development team and is costing more...',
			cost: 'Contact Us',
			calltoaction: 'Get Rescued by professionals'
		}
	];


});