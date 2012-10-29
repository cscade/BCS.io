# BCS.io

BCS.io uses Node.js and socket.io to create a simple server offering bi-directional communications with a BCS series automation controller.

## Features

Please note that although functional, this library is only just getting started.

* Creates a node.js server to provide scripts and resources for the controller
* Utilize the "advanced interface customization" feature of the controller to create a socket.io connection
* Stream changes back to the server as they happen, in realtime at each device "tick"

## Usage

Clone the repository onto a system with node.js. Run `npm install` to install the required dependencies. Change the URL strings in the source to your development IP. Run the node.js application. In the BCS settings, enter `http://yourip:8080/bcs.io.js` in the Advanced Interface Customizaion field.

## Thoughts & Plans

What's the point of this thing? Long term, my goal is to be able to create custom UI for processes, stream temperature data off the controller for logging purposes, create an alerts framework, etc. Right now, a browser must have the BCS device open to create an endpoint for the socket.io stream.

## License 

(The MIT License)

Copyright (c) 2011 Carson Christian &lt;cc@amplego.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.