angular.module('myApp.services').directive('landingNewsletterDirectiveForm',function(){
    return {
        template : `
        	
        	<h2 class="text-center"> Get free content about building apps delivered to your email every month</h2>
        	<form name="MailchimpSubscriptionForm" ng-controller="MailchimpSubscriptionCtrl" style="padding-bottom:20px;" class="text-center">
			  <div ng-hide="mailchimp.result === 'success'">
			    <input class="hidden" type="hidden" ng-model="mailchimp.username" ng-init="mailchimp.username='anideaforanapp'">
			    <input class="hidden" type="hidden" ng-model="mailchimp.dc" ng-init="mailchimp.dc='us16'">
			    <input class="hidden" type="hidden" ng-model="mailchimp.u" ng-init="mailchimp.u='2306ece288f17f4e80016c4ab'">
			    <input class="hidden" type="hidden" ng-model="mailchimp.id" ng-init="mailchimp.id='985ec0e901'">
			    <input type="text" name="FNAME" ng-model="mailchimp.FNAME" placeholder="First name">
			    <input type="text" name="LNAME" ng-model="mailchimp.LNAME" placeholder="Last name">
			    <input type="email" name="EMAIL" ng-model="mailchimp.EMAIL" placeholder="Email address" required>
			    <input type="hidden" name="TYPE" ng-model="mailchimp.TYPE" ng-init="mailchimp.TYPE = 'landingPage'">
			    <button class="btn btn-primary" ng-disabled="MailchimpSubscriptionForm.$invalid" ng-click="addSubscription(mailchimp)">Join</button>
			    </div>
			  </div>

			  <!-- Show error message if MailChimp unsuccessfully added the email to the list. -->
			  <div ng-show="mailchimp.result === 'error'" ng-cloak>
			    <span ng-bind-html="mailchimp.errorMessage" style="font-size: 22px; color: red;"></span>
			  </div>

			  <!-- Show success message if MailChimp returned successfully. -->
			  <div ng-show="mailchimp.result === 'success'" ng-cloak>
			    <span ng-bind-html="mailchimp.successMessage" style="font-size: 22px; color: green;"></span>
			  </div>
			</form>
        `
    };
});