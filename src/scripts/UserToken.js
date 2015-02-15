var store = window.localStorage;

var UserToken = {

	key: '',

	tryObtain() {
		// Get from Store
		var token = this.get();
		if (token) {
			return true;
		}

		// Get from Instagram
		token = location.hash;
		if (token) {
			var match = token.match(/access_token=(.*)/);
			if (match) {
				var userToken = match[1];
				store.setItem('user:token', userToken);
				this.key = userToken;
				return true;
			}
		}

		// Force Login flow
		return false;
	},

	get() {
		var keyValue = store.getItem('user:token');
		if (keyValue) {
			this.key = keyValue;
		}
		return this.key;
	}
};

module.exports = UserToken;
