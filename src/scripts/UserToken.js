var store = window.localStorage,
	userKey = 'user:token';

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
				store.setItem(userKey, userToken);
				this.key = userToken;
				this.clear();
				return true;
			}
		}

		// Force Login flow
		return false;
	},

	get() {
		var keyValue = store.getItem(userKey);
		if (keyValue) {
			this.key = keyValue;
		}
		return this.key;
	},

	remove() {
		store.removeItem(userKey);
		location.reload();
	},

	clear() {
		location.hash = '';
	}
};

export default UserToken;
