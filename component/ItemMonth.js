import React, { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  processColor,
  Image,
  Dimensions,
} from 'react-native';

import { PieChart } from 'react-native-charts-wrapper';
import { Modal } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'
import { COLOR } from '../constants/Themes';
const windowWidth = Dimensions.get('window').width;

class ItemMonth extends React.Component {
  constructor() {
    super();
    this.state = {
      legend: {
        enabled: true,
        textSize: 16,
        form: 'CIRCLE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{ value: 20, label: 'Thu nhập' },
          { value: 10, label: 'Chi tiêu ' },
          ],
          // label: 'Chú thích',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'),
            processColor('#8CEAFF'), processColor('#FF8C9D'), processColor('#00C4FF')
              , processColor('#EEE3CB'), processColor('#F1D4E5'), processColor('#D0F5BE')
              , processColor('#A0D8B3'), processColor('#9376E0'), processColor('#C4B0FF')],
            valueTextSize: 16,
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
        textAlign:'center',
        text: 'Chi tiêu tháng 6',
        textSize: 20,
        textColor: processColor('black'),
        
      },

      show: false,
      date: new Date(),

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
    this.setState({ show: this.state.show = true });
  }

  handleButtonClick2() {
    this.setState({ show: this.state.show = false });
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.boxMonth} onPress={this.handleButtonClick}>
          <Image style={styles.icon} source={require('../asset/icon/icon_calender.png')} />
          <Text style={styles.textMonthYear}>aaaaaaaa aaa</Text>

          <MonthPicker
            modal
            // open={this.state.show}
            value={this.state.date}
            maximumDate={new Date(2030, 12)}
            // minimumDate={new Date()}
            locale="vn"
            onConfirm={() => {
              this.handleButtonClick2
            }}
            onCancel={() => {
              false
            }}
          />
        </TouchableOpacity>
        <View style={styles.boxChart}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('white')}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            highlights={this.state.highlights}

            // extraOffsets={{ left: 5, top: 5, right: 5, bottom: 5 }}
            entryLabelColor={processColor('green')}
            entryLabelTextSize={20}
            entryLabelFontFamily={'HelveticaNeue-Medium'}
            drawEntryLabels={true}

            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{ text: 'Money Talk', color: processColor('black'), fontFamily: 'HelveticaNeue-Medium', size: 16 }}
            centerTextRadiusPercent={100}
            holeRadius={30}
            holeColor={processColor('white')}
            transparentCircleRadius={35}
            transparentCircleColor={processColor('white')}
            maxAngle={360}
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
    backgroundColor: COLOR.white
  },
  boxChart: {
    // borderColor: 'red', borderWidth: 2,
    flex: 1,

  },
  chart: {
    // borderColor: 'red', borderWidth: 2,
    flex: 0.8,


  },
  boxMonth: {
    height: 40,
    width: windowWidth,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLOR.white,
    // borderColor: 'red', borderWidth: 2,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',

  },
  icon: {
    width: 30,
    height: 30,
  },
  textMonthYear: {
    fontWeight: '400',
    fontSize: 17,
    marginHorizontal: 7,
    letterSpacing: 0.3,
    color: COLOR.black,

  }
});

export default ItemMonth;

