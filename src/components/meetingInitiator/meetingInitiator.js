import { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../../Context';

const MeetingInitiator = () => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className="row meetingInitiator">
        <div className="col">
        <form className="form" noValidate autoComplete="off">
        <div className="row">
          <div className="col">
            <h6>Account Info</h6>
            <textarea label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <CopyToClipboard text={me}>
              <button variant="contained" color="primary" fullWidth>
                Copy Your ID
              </button>
            </CopyToClipboard>
          </div>
          <div className="col">
            <h6>Make a call</h6>
            <textarea label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
            {callAccepted && !callEnded ? (
              <button variant="contained" color="secondary" fullWidth onClick={leaveCall}>
                Hang Up
              </button>
            ) : (
              <button variant="contained" color="primary" fullWidth onClick={() => callUser(idToCall)}>
                Call
              </button>
            )}
          </div>
          </div>
        </form>
        </div>
        </div>

    )
}

export default MeetingInitiator;
