import "./teamScreen.scss";
import { useState } from 'react';

function TeamScreen() {
    const [userId, setUserId] = useState(undefined);

    if (userId === undefined) {
        return (
          <div id="teamscreen-background">
              <div id="teamscreen-menu-window">1</div>
              <div id="teamscreen-chat-window">2</div>
          </div>
        );
      } else 
      {
        return null;
      }
}

export default TeamScreen;