/*
* Disable Right Click
*/

document.oncontextmenu = function() {
	return false;
};

/*
* Disable select text in IE
*/

document.onselectstart= function() {
	return false;
}; 

/*
* reactivity
* bind a value : v-model directive in html page
* v-on:click => @click
* v-bind:title => :title 
*/

var app = new Vue({ 				// create Vue instance
	el: '#app', 					// bind it with element in DOM
	
	data: {							// specify data (is like model for the view)
		newName: '',
		
		users: [
			{ id: 1, name: 'Sagar' },
			{ id: 2, name: 'Sameer'},
		],

		buttonInfo: 'Add the name into list',

		userCount: 0,

		typing: false
	},

	methods: {
		addName: function () {
			if (this.newName === '') {
				alert('Empty field')
			}
			else {
				this.users.push({
					id: this.users.length + 1, 
					name: this.newName
				});
				this.newName = '';
			}
		},

		increment: function () {
			this.userCount += 1
		}
	},

	computed: {
		buttonClasses: function () {
			var typing = this.typing;
			return {
				'button': true,
				'is-loading': typing == true
			};
		},

		totalUsers: function() {
			this.userCount = this.users.length;
		}
	}
});