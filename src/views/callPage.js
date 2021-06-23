import CallPageTopBar from '../components/callPageTopBar/callPageTopBar'
import CallPanel from '../components/callPanel/callPanel'
import ChatBox from '../components/chatBox/chatBox'
import EventsPanel from '../components/eventsPanel/eventsPanel'
import ParticipantsPanel from '../components/participantsPanel/participantsPanel'


export default function CallPage() {
    return (
        <div className="container-fluid">        
        <div className="row">
        <div className="col">
        <CallPageTopBar />
        </div>
        </div>
        <div className="row">
        <div className="col-1">
        <EventsPanel />
        </div>
        <div className="col">
        <CallPanel />
        </div>
        <div className="col-2">
        <ChatBox />
        </div>
        </div>
        <div className="row">
        <div className="col">
        <ParticipantsPanel />
        </div>
        </div>
        </div>

    );
}
