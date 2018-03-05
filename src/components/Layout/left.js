import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
    height: 300,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
  };

const LeftSite = (props) => {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <RaisedButton 
                        label="Start"
                        onClick={() => {
                            props.props.onChatStart(props.props.chats);
                        }}
                     />
                    <RaisedButton label="Stop" />
                    <RaisedButton label="Next" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 cast">
                    <Paper style={style} zDepth={2} />
                </div>
                <div className="col-md-6 cast">
                    <Paper style={style} zDepth={2} >
                        {
                            props.props.chats.length > 0 ?
                            <img src={props.props.chats[0].image} />
                            : ''
                        }
                    </Paper>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <TextField hintText="The hint text can be as long as you want, it will wrap." />
                </div>
            </div>
        </div>     
    )
}

export default LeftSite;