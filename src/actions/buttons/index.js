import constants from './constants'

const runChat = (hash) => {
    // Generate random room name if needed
    //if (!window.location.hash) {
        window.location.hash = hash; // Math.floor(Math.random() * 0xFFFFFF).toString(16);
    //}

    const roomHash = window.location.hash.substring(1);
    const drone = new window.ScaleDrone('i8KdL5cAc18Asaj7');
  //console.log(drone);
    // Room name needs to be prefixed with 'observable-'
    const roomName = 'observable-' + roomHash;
    const configuration = {
        iceServers: [{
            urls: 'stun:stun.l.google.com:19302'
        }]
    };
    let room;
    let pc;


    function onSuccess() {};

    function onError(error) {
        console.error(error);
    };


    drone.on('open', error => {
        if (error) {
            return console.error(error);
        }
        room = drone.subscribe(roomName);
        //room.unsubscribe();
        room.on('open', error => {
            if (error) {
                onError(error);
            }
        });
        // We're connected to the room and received an array of 'members'
        // connected to the room (including us). Signaling server is ready.
        room.on('members', members => {
            console.log('MEMBERS', members);
            // If we are the second user to connect to the room we will be creating the offer
            const isOfferer = members.length === 2;
            //console.log('test' + isOfferer)
            startWebRTC(isOfferer);
        });
    });
    drone.on('close', event => {
        console.log('Hello world');
    });

// Send signaling data via Scaledrone
    function sendMessage(message) {
        console.log(roomName);
        drone.publish({
            room: roomName,
            message
        });
    }

    function startWebRTC(isOfferer) {
        pc = new RTCPeerConnection(configuration);

        // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
        // message to the other peer through the signaling server
        pc.onicecandidate = event => {
            if (event.candidate) {
                sendMessage({'candidate': event.candidate});
            }
        };

        // If user is offerer let the 'negotiationneeded' event create the offer
        if (isOfferer) {
            pc.onnegotiationneeded = () => {
                pc.createOffer().then(localDescCreated).catch(onError);
            }
        }

        // When a remote stream arrives display it in the #remoteVideo element
        pc.onaddstream = event => {
            window.remoteVideo.srcObject = event.stream;
        };

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        }).then(stream => {
            // Display your local video in #localVideo element
            window.localVideo.srcObject = stream;
            // Add your stream to be sent to the conneting peer
            pc.addStream(stream);
        }, onError);

        // Listen to signaling data from Scaledrone
        room.on('data', (message, client) => {
            // Message was sent by us
            if (client.id === drone.clientId) {
                return;
            }

            if (message.sdp) {
                // This is called after receiving an offer or answer from another peer
                pc.setRemoteDescription(new RTCSessionDescription(message.sdp), () => {
                    // When receiving an offer lets answer it
                    if (pc.remoteDescription.type === 'offer') {
                        pc.createAnswer().then(localDescCreated).catch(onError);
                    }
                }, onError);
            } else if (message.candidate) {
                // Add the new ICE candidate to our connections remote description
                pc.addIceCandidate(
                    new RTCIceCandidate(message.candidate), onSuccess, onError
                );
            }
        });
    }

    function localDescCreated(desc) {
        pc.setLocalDescription(
            desc,
            () => sendMessage({'sdp': pc.localDescription}),
            onError
        );
    }
};

export const buttonStart = (flag) => {
    runChat(flag);
    return {
        type: constants.SATRT_BTN,
        flag
    }
};

export const buttonStop = (flag) => {
    runChat(flag);
    return {
        type: constants.STOP_BTN,
        flag
    }
};

export const buttonNext = (flag) => {
    runChat(flag);
    return {
        type: constants.NEXT_BTN,
        flag
    }
};