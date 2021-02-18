/*import React, {Component} from 'react';

const transformComponent = (originalComponent) => {
    
    class NewComponent extends Component {

        constructor(props){
            super(props)
            this.state = {
                alertOpen: false,
                alertData: '',
            }
        }
        
        alertHandleClick = (type, message) => {
            this.state({
                alertOpen:true,
                alertData: {'type':type, 'message':message}
            })
        };
        
        alertHandleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            this.state({
                ...this.state,
                alertOpen:false
            })
        };    
        
        render(){
            return (
                <originalComponent 
                    {...this.props}
                    alertOpen={this.state.alertOpen} 
                    alertData={this.state.alertData}
                    alertHandleClick={this.alertHandleClick} 
                    alertHandleClose={this.alertHandleClose} 
                    />
                )
        }
        
    }
    return NewComponent
}

export default transformComponent;
*/
/*
import React, {useState} from 'react';

const DebugComponent = (ComponentToDebug) => {
    const [kask, skdj] = useState()
  return (props) => (
      <ComponentToDebug {...props}/>
  );
};

export default DebugComponent;
*/

import React, {Component} from 'react';
let DebugComponent = ComponentToDebug => class extends Component {
 
        constructor(props){
            super(props)
            this.state = {
                alertOpen: false,
                alertData: '',
            }
        }
        
    /*    alertHandleClick = (type, message) => {
            this.state(prevstate =>{
                return{
                alertOpen:true,
                alertData: {'type':type, 'message':message},
                }
            })
        };
        
        alertHandleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            this.state({
                ...this.state,
                alertOpen:false
            })
        };     */
 
  render() {
    return (
        <ComponentToDebug {...this.props} alertOpen={this.state.alertOpen} alertData={this.state.alertData} />
    );
  }
};
export default DebugComponent;
/*
import React from 'react';

const transformComponent = (originalComponent) => {
    const NewComponent = (props) => {
        return (<originalComponent {...props} />)
    }
    return NewComponent
}

export default transformComponent;*/
/*
import React, {useState} from 'react';

const AlertHoc = (OldComponent) => {

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertData, setAlertData] = useState({});
    
    const alertHandleClick = (type, message) => {
        setAlertOpen(true);
        setAlertData({
            type:type,
            message:message
        })
    };
    
    const alertHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlertOpen(false);
    };    
    
    return (
    <OldComponent 
        alertOpen={alertOpen} 
        alertData={alertData} 
        setAlertData={setAlertData} 
        alertHandleClick={alertHandleClick} 
        alertHandleClose={alertHandleClose} 
        />
    )
}

export default AlertHoc;*/