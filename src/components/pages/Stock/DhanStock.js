import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,InsertModalHeader} from 'react-bootstrap-table';
class ChamalStock extends Component {
    state = { stocks:[{
        goodName:'Masino Dhan',
        unitPacketPrice:1000,
        noofPackets:100
    },{
        goodName:'Moto Dhan',
        unitPacketPrice:1000,
        noofPackets:30
    },{
        goodName:'Khasro Dhan',
        unitPacketPrice:1000,
        noofPackets:100
    }] }
    options={
        sortIndicator:false,
        afterInsertRow: this.onAfterInsertRow,
        insertText:'Add Chamal Stock',
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
        return ( <div style={{flex:1}} >
            <BootstrapTable data={ this.state.stocks } options={this.options} insertRow={ true } hover condensed 
              tableStyle={ { backgroundColor:'#fff' } }
              // containerStyle={ { border: '#FFBB73 2.5px solid' } }
              headerStyle={ { border: 'blue 1px solid' } }
              bodyStyle={ { border: 'green 1px solid' } }>
                <TableHeaderColumn dataField='goodName' isKey={ true } dataSort={true} filter={{type:'TextFilter',delay:1000}}>Good Name</TableHeaderColumn>
                <TableHeaderColumn dataField='unitPacketPrice' width={140}>Unit Packet Price</TableHeaderColumn>
                <TableHeaderColumn dataField='noofPackets' width={140}>No of Packets</TableHeaderColumn>
            </BootstrapTable>
            </div> );
    }
}
 
export default ChamalStock;