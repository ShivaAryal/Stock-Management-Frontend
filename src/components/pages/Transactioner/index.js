import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,InsertModalHeader} from 'react-bootstrap-table';
import {Form,Button} from "semantic-ui-react";
import { Menu, Dropdown, Icon, message } from 'antd';

class Transactioner extends Component {
    state = { owners : [{
        name: "Hari Poudel",
        address:'Kupondole',
        contactNumber:9847027382,
        emailId:'lostinhell99@gmail.com',
        panNumber:2672272
    }, {
        name: "The Boss",
        address:'NawalParasi',
        contactNumber:9827362742,
        emailId:'shivaaryalj7@gmail.com',
        panNumber:26766272
    },{
        name: "Shiva Aryal",
        address:'Kupondole',
        contactNumber:9847027382,
        emailId:'lostinhell99@gmail.com',
        panNumber:2672272
    }, {
        name: "John Cena",
        address:'Hetauda',
        contactNumber:9842227382,
        emailId:'shiva12399@gmail.com',
        panNumber:8789729
    },{
        name: "Orton",
        address:'Narayanghat',
        contactNumber:4334242222,
        emailId:'don123@gmail.com',
        panNumber:332272
    }, {
        name: "Under Taker",
        address:'Belbas',
        contactNumber:8947027382,
        emailId:'lost12399@gmail.com',
        panNumber:873872
    }] }
    options={
        sortIndicator:false,
        afterInsertRow: this.onAfterInsertRow,
        insertText:'Add Owner',
           }
    cellEditProp = {
        mode: 'dbclick',
        afterSaveCell: this.onAfterSaveCell
    }
    onAfterInsertRow(row){
        console.log(row)
        //post to backend
        let newRowStr = '';

        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('The new row is:\n ' + newRowStr);
    }
    onAfterSaveCell(row){
        //post to backend here
        let rowStr = '';
        for (const prop in row) {
          rowStr += prop + ': ' + row[prop] + '\n';
        }
      
        alert('Thw whole row :\n' + rowStr);
    }
    render() {
        return (
            <div style={{flex:1}} >
          <BootstrapTable data={ this.state.owners } cellEdit={ this.cellEditProp } options={this.options} insertRow={ true } hover condensed 
            tableStyle={ { backgroundColor:'#fff' } }
            // containerStyle={ { border: '#FFBB73 2.5px solid' } }
            headerStyle={ { border: 'blue 1px solid' } }
            bodyStyle={ { border: 'green 1px solid' } }>
              <TableHeaderColumn dataField='name' isKey={ true } dataSort={true} filter={{type:'TextFilter',delay:1000}}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='address' dataSort={true}  filter={{type:'TextFilter',delay:1000}}>Address</TableHeaderColumn>
              <TableHeaderColumn dataField='contactNumber' filter={{type:'TextFilter',delay:1000}}>Contact Number</TableHeaderColumn>
              <TableHeaderColumn dataField='emailId' filter={{type:'TextFilter',delay:1000}}>Email Id</TableHeaderColumn>
              <TableHeaderColumn dataField='panNumber' width={140} >Pan Number</TableHeaderColumn>
          </BootstrapTable>
          <Button animated style={{backgroundColor:'#D7CCC8',borderRadius:15,width:100,marginTop:22}}>
                <Button.Content style={{fontSize:22,fontFamily:'sans-seriff',marginRight:20}}>Save</Button.Content>
            </Button>
          </div>
        );
      }
}
 
export default Transactioner;