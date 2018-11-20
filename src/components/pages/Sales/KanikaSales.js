import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,InsertModalHeader} from 'react-bootstrap-table';
class KanikaSales extends Component {
    state = { sales:[{
        goodName:'Basmati Kanika :D',
        customer:'Shiva Aryal',
        customerId:'8u3n38r3h38',
        unitPacketPrice:1000,
        noofPackets:100,
        date:'2017-12-12',
        totalPrice:100000
    },{
        goodName:'Sawa kanika',
        customer:'Aryal Shiva',
        customerId:'8u3n38r3h38',
        unitPacketPrice:1000,
        noofPackets:300,
        date:'2018-12-12',
        totalPrice:300000
    },{
        goodName:'Simple Kanika',
        customer:'Shiva Aryal',
        customerId:'8u3n38r3h38',
        unitPacketPrice:1000,
        noofPackets:100,
        date:'2017-12-12',
        totalPrice:100000
    },{
        goodName:'Basmati Kanika',
        customer:'Shiva Aryal',
        customerId:'8u3n38r3h38',
        unitPacketPrice:1000,
        noofPackets:100,
        date:'2017-12-12',
        totalPrice:100000
    }] }
    options={
        sortIndicator:false,
        afterInsertRow: this.onAfterInsertRow,
        insertText:'Add Kanika Sale',
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
            <BootstrapTable data={ this.state.sales } options={this.options} insertRow={ true } hover condensed 
              tableStyle={ { backgroundColor:'#fff' } }
              // containerStyle={ { border: '#FFBB73 2.5px solid' } }
              headerStyle={ { border: 'blue 1px solid' } }
              bodyStyle={ { border: 'green 1px solid' } }>
                <TableHeaderColumn dataField='goodName' isKey={ true } dataSort={true} filter={{type:'TextFilter',delay:1000}}>Good Name</TableHeaderColumn>
                <TableHeaderColumn dataField='customer' dataSort={true}  filter={{type:'TextFilter',delay:1000}}>Customer</TableHeaderColumn>
                <TableHeaderColumn dataField='unitPacketPrice' width={140}>Unit Packet Price</TableHeaderColumn>
                <TableHeaderColumn dataField='noofPackets' width={140}>No of Packets</TableHeaderColumn>
                <TableHeaderColumn dataField='date' width={140} dataSort={true} filter={{type:'TextFilter',delay:1000}} >Date</TableHeaderColumn>
                <TableHeaderColumn dataField='totalPrice' width={140} >Total Price</TableHeaderColumn>
            </BootstrapTable>
            </div> );
    }
}
 
export default KanikaSales;