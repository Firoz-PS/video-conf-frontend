import './callPanel.css';
import { useContext } from 'react';
import { SocketContext } from '../../Context';

import React from 'react'

const CallPanel = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div className="row callPanel">
        {stream && (
            <div className="col callBox m-1">
            <video playsInline muted ref={myVideo} autoPlay className="video" />
            </div>
        )}
        {callAccepted && !callEnded && (
            <div className="col callBox m-1">
            <video playsInline ref={userVideo} autoPlay className="video" />
            </div>
        )}
        </div>
    )
}

export default CallPanel;
