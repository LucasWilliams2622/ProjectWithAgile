import React,{useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  processColor,
} from 'react-native';

import { PieChart } from 'react-native-charts-wrapper';
import { Modal } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'

class ItemMonth extends React.Component {
  constructor() {
    super();
    this.state = {
      legend: {
        enabled: true,
        textSize: 20,
        form: 'CIRCLE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{ value: 20, label: 'tháng 5' },
          { value: 10, label: 'tháng 1' },
          { value: 15, label: 'tháng 2' },
          { value: 9, label: 'tháng 3' },
          { value: 15, label: 'tháng 4' }],
          label: 'Pie dataset',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
            valueTextSize: 20,
            valueTextColor: processColor('green'),
            sliceSpace: 5,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 0.5
          }
        }],
      },
      highlights: [{ x: 2 }],
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor('darkgray'),

      },
    
      show:false,
      date:new Date(),
      
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }

    console.log(event.nativeEvent)
  }

  handleButtonClick() {
    this.setState({ show: this.state.show =true });
  }
 
  handleButtonClick2() {
    this.setState({ show: this.state.show =false });
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <TouchableOpacity onPress={this.handleButtonClick}  style={{ backgroundColor: 'black', borderRadius: 10, margin: 0, padding: 10, width: 100, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Calendar</Text>
          </TouchableOpacity>
          {/* <Modal visible={this.state.show} animationType="fade" >
            <Calendar style={{ borderRadius: 10, elevation: 4,height:100,}}></Calendar>
          </Modal> */}

          <DatePicker
        modal
        open={this.state.show}
        date={this.state.date}
        // minimumDate={new Date()}
        // maximumDate={new Date(2030, 12)}
        // locale="vn"
        onConfirm={() => {
          this.handleButtonClick2
          
        }}
        onCancel={() => {
        false
         
        }}
      />
        </View>
        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('white')}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            highlights={this.state.highlights}

            extraOffsets={{ left: 5, top: 5, right: 5, bottom: 5 }}

            entryLabelColor={processColor('green')}
            entryLabelTextSize={20}
            entryLabelFontFamily={'HelveticaNeue-Medium'}
            drawEntryLabels={true}

            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{ text: 'Pie center text!', color: processColor('pink'), fontFamily: 'HelveticaNeue-Medium', size: 20 }}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={45}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={350}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
        {/* <View style={{marginBottom:100}}>
          <Text>selected:</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  chart: {
    flex: 1
  }
});

export default ItemMonth;

