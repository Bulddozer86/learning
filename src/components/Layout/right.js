import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';;

const RisghtSite = (props) => {
    return(
        <List>
             <Subheader>Recent chats</Subheader>
            {
                Object.keys(props.chats).map((key, i) => {
                    return (
                    <div key={i}>
                        <ListItem
                            onClick={() => {
                                props.setChat(props.chats[ key ]);
                            }}
                            key={i}
                            primaryText={props.chats[ key ].name}
                            leftAvatar={<Avatar src={props.chats[ key ].image} />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </div>
                    
                )
                })
            }
        </List>        
    )
}

export default RisghtSite;