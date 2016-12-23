import React from 'react';

module.exports = React.createClass({
    clickBtn1: function() {
        console.log('clickBtn1');
    },

    clickBtn2: function() {
        console.log('clickBtn2');
    },

    setCoverageDataToServer: function() {
        let myInit = {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(window.__coverage__)
        };
        fetch('/coverage/client', myInit)
            .then(function(response) {
                console.log('data sent');
            });
    },

    render: function () {
        let th = this;
        return (
            <div>
                <button onClick={th.clickBtn1}>Button 1</button>
                <button onClick={th.clickBtn2}>Button 2</button>
                <br />
                <br />
                <button onClick={th.setCoverageDataToServer}>Send coverage data To server</button>

            </div>
        );
    }
});
