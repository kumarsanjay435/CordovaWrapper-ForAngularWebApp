/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var windowReff = cordova.InAppBrowser;

var app = {
    // Application Constructor

    

    initialize: function() {
    this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');

        //$("#serverHtmlId").load("http://100.113.104.81:8005/index.html"); 
        
        
        // Here, we redirect to the web site.
        /*console.log('on device ready is checked again')
        var targetUrl = "http://172.20.10.7:8005/index.html";
        var bkpLink = document.getElementById("bkpLink");
        bkpLink.setAttribute("href", targetUrl);
        bkpLink.text = targetUrl;
        //window.location.replace(targetUrl);
        window.location.assign(targetUrl);*/

        
    
        /*var options = {
            location: 'no',
            clearcache: 'no',
            toolbar: 'no',
            fullscreen: 'yes'
          };
        console.log('on device ready is checked again')

        //var windowRef = cordova.InAppBrowser.open('http://172.20.10.7:8006/index.html', '_blank',"location=no,toolbar=no");
        windowReff = cordova.InAppBrowser.open('http://172.20.10.7:8005/index.html', '_blank',"location=no,toolbar=no");
        //window.location = "http://172.20.10.7:8002/index.html"

        windowReff.addEventListener('DOMContentLoaded', function () {
            windowReff.querySelector('button').addEventListener('click', clickHandler);
                //main();
                console.log("in add event listner")
            });*/


},
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
