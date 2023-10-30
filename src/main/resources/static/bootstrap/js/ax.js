var ax = {};

ax.get = function (url, params, headers, callback) {
    axios.get(url, {
        params: params,
        headers: headers,
        validateStatus: function (status) {
            return status == 200;
        }
    })
        .then(function (response) {
            callback(null, response.data);
        })
        .catch(function (error) {
            callback(error);
        });
};

ax.post = function (url, params, headers, callback) {
    axios.post(url, params,
        {
            headers: headers,
            validateStatus: function (status) {
                return status == 200;
            }
        })
        .then(function (response) {
            callback(null, response.data);
        })
        .catch(function (error) {
            callback(error);
        });
};

ax.delete = function (url, params, headers, callback) {
    axios.delete(url, {
        params: params,
        headers: headers,
        validateStatus: function (status) {
            return status == 200;
        }
    })
        .then(function (response) {
            callback(null, response.data);
        })
        .catch(function (error) {
            callback(error);
        });
};

ax.put = function (url, params, headers, callback) {
    axios.put(url, params,
        {
            headers: headers,
            validateStatus: function (status) {
                return status == 200;
            }
        })
        .then(function (response) {
            callback(null, response.data);
        })
        .catch(function (error) {
            callback(error);
        });
};
